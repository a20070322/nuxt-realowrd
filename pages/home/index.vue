<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  :to="{
                  name:'home',
                  query:{
                    tab:'your_feed'
                    }
                  }"
                  :class="{
                    active:tab==='your_feed'
                  }"
                  exact
                  class="nav-link"
                >Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  :to="{
                  name:'home',
                  query:{
                    tab:'global_feed'
                    }
                  }"
                  exact
                  :class="{
                    active:tab==='global_feed'
                  }"
                  class="nav-link"
                >Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link
                  :to="{
                    name:'home',
                    query:{
                      tab:'tag',
                      tag:tag
                    }
                  }"
                  exact
                  :class="{
                    active:tab==='global_feed'
                  }"
                  class="nav-link"
                ># {{tag}}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link
                :to="{
                name:'profile',
                params:{
                  username:article.author.username
                }
              }"
              >
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  class="author"
                  :to="{
                    name:'profile',
                    params:{
                      username:article.author.username
                    }
                  }"
                >{{article.author.username}}</nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD,YYYY') }}</span>
              </div>
              <button
                :disabled="article.favoriteDisabled"
                @click="onFavorite(article)"
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{
                  active: article.favorited
                }"
              >
                <i class="ion-heart"></i>
                {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              class="preview-link"
              :to="{
                name:'article',
                params:{
                  slug:article.slug
                }
              }"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
          <!-- 分页列表 -->
          <nav>
            <ul class="pagination">
              <li
                class="page-item ng-scope"
                :class="{
                active:page===item
              }"
                v-for="item in totalPage"
                :key="item"
              >
                <nuxt-link
                  class="page-link"
                  :to="{
                    name:'home',
                    query:{
                      tab:tab,
                      tag:tag,
                      page:item
                    }
                  }"
                >{{item}}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <nuxt-link
                class="tag-pill tag-default"
                :to="`/?tag=${tag}&tab=tag`"
                v-for="tag in tags"
                :key="tag"
              >{{tag}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticles,
  getYourFeedArticles,
  addFavorite,
  delFavorite,
} from "@/api/article";
import { getTags } from "@/api/tag";
import { mapState } from "vuex";
export default {
  name: "HomeIndex",
  watchQuery: ["page", "tag", "tab"],
  async asyncData({ error, query }) {
    try {
      const page = Number.parseInt(query.page || 1);
      const limit = 20;
      const tab = query.tab || "global_feed";
      const tag = query.tag;
      const loadArticles =
        tab === "your_feed" ? getYourFeedArticles : getArticles;
      const [articleRes, tagRes] = await Promise.all([
        loadArticles({
          limit,
          tag,
          offset: (page - 1) * limit,
        }),
        await getTags(),
      ]);

      const { articles, articlesCount } = articleRes.data;
      const { tags } = tagRes.data;

      articles.forEach((article) => (article.favoriteDisabled = false));
      return {
        articles: articles,
        articlesCount: articlesCount,
        page,
        limit,
        tags: tags.filter((val) => /[a-zA-Z]/.test(val)),
        tab,
        tag,
      };
    } catch (err) {
      console.log(err);
      error(err);
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
    ...mapState(["user"]),
  },
  methods: {
    async onFavorite(article) {
      // console.log(article)
      article.favoriteDisabled = true;
      if (article.favorited) {
        await delFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        await addFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      article.favoriteDisabled = false;
    },
  },
};
</script>

<style>
</style>