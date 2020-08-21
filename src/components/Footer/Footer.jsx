import React, { Component } from 'react'
import './css/footer.css'
import { NavLink,withRouter } from 'react-router-dom'
// import routes from '../../config/routes'

class Footer extends Component {
    render() {
        return ( this.props.location.pathname !== '/login' ? 
            <div id="footer">
                <NavLink className={this.props.location.pathname !== '/home' ?'aaa':'aaa choice'} to='/home'>
                    <div className={'iconfont icon-shouye'}></div> 首页
                </NavLink>
                <NavLink className={this.props.location.pathname !== '/category' ?'aaa':'aaa choice'} to='/category'>
                    <div className={'iconfont icon-jiajutubiao-'}></div> 分类
                </NavLink>
                <NavLink className={this.props.location.pathname !== '/shouldbuy' ?'aaa':'aaa choice'} to='/shouldbuy'>
                    <div className={'iconfont icon-image'}></div> 值得买
                </NavLink>
                <NavLink className={this.props.location.pathname !== '/cart' ?'aaa':'aaa choice'} to='/cart'>
                    <div className={'iconfont icon-gouwuche'}></div> 购物车
                </NavLink>
                <NavLink className={this.props.location.pathname !== '/login' ?'aaa':'aaa choice'} to='/login'>
                    <div className={'iconfont icon-geren'}></div> 个人
                </NavLink>
            </div> : null
        )
    }
}

export default  withRouter(Footer)