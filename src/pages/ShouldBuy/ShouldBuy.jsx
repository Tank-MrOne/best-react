import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import text from './image/zhidemai.png'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import './css/shouldbuy.css'
import Swiper from 'swiper'
import { getCategorySwiperInfo } from '../../api/api'
// import AutoResponsive from 'autoresponsive-react'
export default class ShouldBuy extends Component {
    state = {
        swiperInfo: []
    }
    componentDidMount() {
        this.getSwiperInfo()
    }

    newSwiper = () => {
        new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            slidesPerView: 4,
            slidesPerColumn: 2,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

    getSwiperInfo = async () => {
        let result = await getCategorySwiperInfo()
        this.setState({
            swiperInfo: result.data.data.navList
        }, this.newSwiper)
    }
    render() {
        let { swiperInfo } = this.state
        return (
            <div id="should-buy">
                <Header title="值得买"></Header>
                <div className="backcolor"></div>
                <div className="back"></div>
                <div className="titles">
                    <img src={text} />
                    严选好物 用心生活
                </div>
                <div className="swiperBox" >
                    {/* ref={this.myRef} */}
                    <div className="swiper-container" >
                        <div className="swiper-wrapper">
                            {
                                swiperInfo.map(item => (
                                    <div className="swiper-slide" key={item.id}>
                                        <img src={item.picUrl} alt="" />
                                        <b>{item.mainTitle}</b>
                                        <p>{item.viceTitle}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="waterFall">
                    {/* <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
                        {this.renderItems()}
                    </AutoResponsive> */}
                </div>
            </div>
        )
    }
}
