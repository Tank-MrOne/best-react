import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "", // 基础路径：所有请求的公共路径
    timeout: 10000, // 如果请求超过10s都没有响应结果，就自动中断请求
});

export default axiosInstance;