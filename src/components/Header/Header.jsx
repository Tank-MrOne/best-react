import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    static propTypes = {
        title: PropTypes.string
    }
    static defaultProps = {
        title: '网易严选'
    }
    render() {
        let { title } = this.props
        return (
            <>
                <div id="header">
                <Link to="/home"><div className="home iconfont icon-shouye"></div></Link>
                <Link to="/cart"> <div className="cart iconfont icon-gouwuche"></div></Link>
                <Link to="/search"><div className="search iconfont icon-sousuo"></div></Link>
                <div className="title">{title}</div>
                </div>
                <div className="band"></div>
            </>
        )
    }
}
