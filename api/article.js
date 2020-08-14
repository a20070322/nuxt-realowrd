import { request } from '@/plugins/request'
/**
 * 获取公共文章列表
 * @param {Object} param0
 */ 
export const getArticles = params => (
    request({
        url: "/api/articles",
        params
    })
)
/**
 * 获取公共文章列表
 * @param {Object} param0
 */ 
export const getYourFeedArticles = params => (
    request({
        url: "/api/articles/feed",
        params,
    })
)

/**
 * 添加点赞
 * @param {Object} param0
 */ 
export const addFavorite = slug => (
    request({
        url: `/api/articles/${slug}/favorite`,
        method:'POST'
    })
)
/**
 * 移除点赞
 * @param {Object} param0
 */ 
export const delFavorite = slug => (
    request({
        url: `/api/articles/${slug}/favorite`,
        method:'DELETE'
    })
)
/**
 * 获取文章详情
 * @param {Object} param0
 */ 
export const getArticle = slug => (
    request({
        url: `/api/articles/${slug}`
    })
)
/**
 * 获取评论列表
 * @param {Object} param0
 */ 
export const getArticleComments = slug => (
    request({
        url: `/api/articles/${slug}/comments`
    })
)