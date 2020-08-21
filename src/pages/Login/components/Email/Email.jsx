import React, { Component } from 'react'
import Header from '../../../../components/Header/Header'
import PropTypes from 'prop-types'
import logo from '../../image/logo.png'
import './email.css'
export default class Email extends Component {
    static propTypes = {
        setType: PropTypes.func
    }
    state = {
        email  : '',
        password : '',
    }

    login = () => {
        let {email,password} = this.state
        if(!email.trim()){
            console.log('请输入邮箱')
            return
        }else if(!password.trim()){
            console.log('请输入密码')
            return
        }else{
            console.log("验证通过")
        }
    }

    render() {
        let {setType} = this.props
        let {email,password} = this.state 
        return (
            <div id="email">
                <Header></Header>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="box">
                    <input type="text" className="input" value={email} onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="邮箱账号"/>
                    <input type="password" className="input" value={password} onChange={(e)=>{this.setState({password:e.target.value})}}  placeholder="密码"/>
                    <div className="register">
                        <span>忘记密码</span>
                        注册账号
                    </div>
                    <div className="btn" onClick={this.login}>
                        登录
                    </div>
                </div>
                <div className="other" onClick={()=>setType(0)()}>
                    其他登入方式 &gt;
                </div>
            </div>
        )
    }
}
