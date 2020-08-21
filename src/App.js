import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect,withRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Category from './pages/Category/Category'
import ShouldBuy from './pages/ShouldBuy/ShouldBuy'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            {/* 注册路由 ： 在需要显示路由组件界面的区域使用<Route>注册 */}
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/category" component={Category} />
            <Route path="/shouldbuy" component={ShouldBuy} />
            <Route path="/cart" component={Cart} />
            {/* 通过<Redirect>来设置默认显示路由 */}
            <Redirect to="/home" />
          </Switch>
          <Footer></Footer>
        </BrowserRouter>


      </>
    )
  }
}
export default  withRouter(App)
