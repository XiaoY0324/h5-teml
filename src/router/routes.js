/**
 * created by yangshuai in 2020/06/02
 * 引入页面所有路由
 * 路由组件机制参考 vue-router
 */

// 首页路由
import HomeRouter from "./home";
// 其他页面路由集合;
import ResourceRouter from "./resource";
// 错误页面路由;
import ErroRouter from "./error";

// 导出公共路由
export default [...HomeRouter, ...ResourceRouter, ...ErroRouter];
