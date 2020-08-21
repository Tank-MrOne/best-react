import request from './request.js'
const BASE_URL = "/api"


export function getCategorySwiperInfo() {
    return request({
        url: `${BASE_URL}/topic/v1/know/navWap.json`,
        method: "GET",
    });
}