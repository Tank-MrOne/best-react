import React, { Component } from 'react'
import Header from '../../components/Header/Header.jsx'
import Email from './components/Email/Email.jsx'
import Phone from './components/Phone/Phone.jsx'

import './css/login.css'
import logo from './image/logo.png'

export default class Login extends Component {
    state = {
        type : 2
    }

    changeLogin = (type) => {
        return ()=>{
            this.setState({
                type
            })
        }
    }

    render() {
        let {type} = this.state
        return type === 0 ?(
            
            <div id="login">
                <Header title="网易严选"></Header>
                <div className="logo">
                   <img src={logo} alt="" className="logoImg"/>
                </div>
                <div className="btn phone" onClick={this.changeLogin(1)}>
                    <i className="iconfont icon-shouji"></i>
                    手机号快捷登录
                </div>
                <div className="btn email" onClick={this.changeLogin(2)}>
                    <i className="iconfont icon-youxiang"></i>
                    邮箱账号登录
                </div>
                <div className="loginTypes">
                    <div className="wx">
                        <i className="iconfont icon-weixin"></i>
                        微信
                    </div>
                    <div className="qq">
                        <i className="iconfont icon-qq"></i>
                        QQ
                    </div>
                    <div className="wb">
                        <i className="iconfont icon-weibo"></i>
                        微博
                    </div>
                </div>
            </div>
        ) : type === 1 ? <Phone setType={this.changeLogin}></Phone> : <Email setType={this.changeLogin}></Email>
    }
}
