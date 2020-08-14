const cookieparser = process.server ? require('cookieparser') : undefined

// 在服务端渲染期间运行的都是同一个实例
// 为了防止数据冲突，务必要把state定义成一个函数，返回数据对象
export const state = () => ({
    // 当前用户登录的状态
    user: null
})

export const mutations = {
    setUser(state, payload) {
        state.user = payload
    }
}

export const actions = {
    // 特殊的action方法
    // 只会在服务端渲染期间自动调用
    // 初始化容器数据，传递数据给客户端使用
    nuxtServerInit({ commit }, { req }) {
        let user = null
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }
        commit('setUser', user)
    }
}