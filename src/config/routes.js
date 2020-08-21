// 在src目录下创建一个config文件夹，在routes.js文件中配置以下信息

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

export default [
    {
        path : '/', // 路由
        component : Home, // 组件 
        name : '首页', // 链接名称
    },
    {
        path:'/login',
        component:Login,
        name:'登入'
    }
]