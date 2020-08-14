module.exports = {
    server: {
        host: '0.0.0.0',
        port: 7002
    },
    router: {
        linkActiveClass: 'active',
        // 自定义路由表规则
        extendRoutes(routes, resolve) {
            // 清除nuxt默认生成的路由规则
            routes.splice(0)
            routes.push(...[{
                path: '/',
                component: resolve(__dirname, 'pages/layout/'),
                children: [{
                        path: '', //默认子路由
                        name: 'home',
                        component: resolve(__dirname, 'pages/home/index.vue'),
                    },
                    {
                        path: '/login',
                        name: 'login',
                        component: resolve(__dirname, 'pages/login/index.vue'),
                    },
                    {
                        path: '/register',
                        name: 'register',
                        component: resolve(__dirname, 'pages/login/index.vue'),
                    },
                    {
                        path: '/profile/:username',
                        name: 'profile',
                        component: resolve(__dirname, 'pages/profile/index.vue'),
                    },
                    {
                        path: '/settings',
                        name: 'settings',
                        component: resolve(__dirname, 'pages/settings/index.vue'),
                    },
                    {
                        path: '/editor',
                        name: 'editor',
                        component: resolve(__dirname, 'pages/editor/index.vue'),
                    },
                    {
                        path: '/article/:slug',
                        name: 'article',
                        component: resolve(__dirname, 'pages/article/index.vue'),
                    }
                ]
            }])
        }
    },
    // 注册插件
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ],
    head: {
        title: "ahh5",
        titleTemplate: '%s - RealWord',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'ahh5'
            }
        ]
    }
}