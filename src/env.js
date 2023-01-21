let baseURL;
//根据不同环境输出url地址,当使用非代理时，这样做，
//基于jsonp、cors时使用
switch (process.env.NODE_ENV) {
    case 'dev':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prev':
        baseURL = 'http://prev-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}
export default {
    baseURL
}