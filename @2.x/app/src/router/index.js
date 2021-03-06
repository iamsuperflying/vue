/// 路由配置
import Vue from "vue";
import VueRouter from "vue-router";

// Vue 使用路由
Vue.use(VueRouter);

import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (
  location,
  resolve = () => {},
  reject = () => {}
) {
  originPush.call(this, location, resolve, reject);
};

VueRouter.prototype.replace = function (
  location,
  resolve = () => {},
  reject = () => {}
) {
  originReplace.call(this, location, resolve, reject);
};

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/search",
      component: Search,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
