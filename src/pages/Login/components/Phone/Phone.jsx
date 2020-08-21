import React, { Component } from 'react'
import Header from '../../../../components/Header/Header'
import PropTypes from 'prop-types'
import logo from '../../image/logo.png'
import './phone.css'
export default class Phone extends Component {
    static propTypes = {
        setType: PropTypes.func
    }
    state = {
        phone : "" ,
        number : "" ,
        flag : false 
    }

    regPhone = () => {
        let {phone} = this.state
        let reg = /^1[3-9]{2}[0-9]{8}$/
        if(!reg.test(phone)){
            console.log("手机号不通过")
            this.setState({
                flag: false
            })
        }else{
            this.setState({
                flag : true
            })
        }
    }
    regNumber = () => {
        let {number} = this.state
        let reg = /^[0-9]{4}$/
        if(!reg.test(number)){
            console.log("验证不通过")
            this.setState({
                flag: false
            })
        }else{
            this.setState({
                flag : true
            })
        }
    }

    login = () => {
        this.regPhone()
        this.regNumber()
        if(this.state.flag){
            console.log("验证通过")
        }
    }

    render() {
        let {phone , number} = this.state
        let {setType} = this.props
        return (
            <div id="phone">
                <Header></Header>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="box">
                    <input className="input" value={phone} onBlur={this.regPhone}  onChange={(e)=>this.setState({phone:e.target.value})} type="text" placeholder="请输入手机号" />
                    <input className="input" value={number} onBlur={this.regNumber} onChange={(e)=>this.setState({number:e.target.value})} type="text" placeholder="请输入短信验证码"/>
                    <div className="help">
                        <span>使用密码验证登入</span>
                        遇到问题？
                    </div>
                    <div className="btn" onClick={this.login}>
                        登录
                    </div>
                    <input type="checkbox" defaultChecked className="agree"/>
                    我同意
                    <span className="text">《服务条款》</span>
                    和
                    <span className="text">《网易隐私政策》</span>
                </div>
                <div className="other" onClick={()=>setType(0)()}>
                    其他登入方式 &gt;
                </div>
            </div>
        )
    }
}
