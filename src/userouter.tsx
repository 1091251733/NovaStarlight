import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import userTokenVessel from "./store/userToken_vessel.ts";
import Loding from "./widgets/page/Loding.tsx";
// 导入组件
const Home = lazy(() => import("./widgets/page/Home")); //首页
const Figure = lazy(() => import("./widgets/page/Figure")); //封装表格试列
const From = lazy(() => import("./widgets/page/Form")); //表单封装
const NotFound = lazy(() => import("./widgets/page/NotFound.tsx")); // 404 页面

// 获取用户信息
const userInfo: any = userTokenVessel.getState().userInfo;
// 路由配置
const routeConfig = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loding></Loding>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/figure",
    element: (
      <Suspense fallback={<Loding></Loding>}>
        <Figure />
      </Suspense>
    ),
  },
  {
    path: "/from",
    element: (
      <Suspense fallback={<Loding></Loding>}>
        <From />
      </Suspense>
    ),
  },
  {
    path: "*", // 匹配所有未定义的路径
    element: (
      <Suspense fallback={<Loding></Loding>}>
        <NotFound />
      </Suspense>
    ),
    // roles: ["管理员"], // 指定该路由的角色
  },
];

// 根据用户角色过滤路由
const filteredRoutes = routeConfig.filter((route: any) => {
  if (!route.roles) return true;
  return route.roles.includes(userInfo.username);
});

// 创建路由
const route = createBrowserRouter(filteredRoutes);

export default route;
