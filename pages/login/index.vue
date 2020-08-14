<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{isLogin?'Sign in':'Sign up'}}</h1>
          <p class="text-xs-center">
            <nuxt-link to="/login" v-if="!isLogin">Have an account?</nuxt-link>
            <nuxt-link to="/register" v-else>Need an account?</nuxt-link>
          </p>
          <ul class="error-messages" v-if="validatorError.length>0">
            <li v-for="(item,index) in validatorError" :key="index">{{item}}</li>
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                v-model="user.username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                v-model="user.email"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                v-model="user.password"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">{{isLogin?'Sign in':'Sign up'}}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { login, register } from "@/api/user";
import Validator from "@/utils/validator/index";
// 仅在客户端加载 js-cookie
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  middleware: "notAuthenticated",
  name: "LoginIndex",
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        username: "",
      },
      validatorError: [],
    };
  },
  methods: {
    showValidatorError(validatorError) {
      this.validatorError = validatorError.map(
        (item) => `${item.key}-${item.fail.join(",")}`
      );
    },
    async onSubmit() {
      this.validatorError = [];
      let validatorError = new Validator().make(this.user, {
        email: "required|string|email",
        password: "required|string|min:8",
        ...(!this.isLogin ? { username: "required|string|min:8" } : {}),
      });
      if (validatorError.length > 0) this.showValidatorError(validatorError);
      try {
        const { data } = this.isLogin
          ? await login({
              user: this.user,
            })
          : await register({
              user: this.user,
            });
        // 保存用户登录状态
        this.$store.commit("setUser", data.user);
        Cookie.set("user", data.user);

        // 跳转到首页
        this.$router.push("/");
      } catch (error) {
        const errors = error.response.data.errors;
        this.validatorError = Object.keys(errors).map(
          (key) => `${key}-${errors[key].join(",")}`
        );
      }
    },
  },
};
</script>

<style>
</style>