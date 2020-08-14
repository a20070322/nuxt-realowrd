import { request } from '@/plugins/request'

/**
 * 用户登录
 * @param {Object} user 用户对象
 * @param {String} user.email 用户邮箱
 * @param {String} user.password 用户密码
 */
export const login = data => (
    request({
        method: "POST",
        url: "/api/users/login",
        data: data,
    })
)
/**
 * 用户注册
 * @param {Object} user 用户对象
 * @param {String} user.email 用户邮箱
 * @param {String} user.password 用户密码
 */
export const register = data => (
    request({
        method: "POST",
        url: "/api/users",
        data: data,
    })
)