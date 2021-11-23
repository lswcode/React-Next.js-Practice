import Link from "next/link";
import Router from "next/router";

export default function Home() {
  const goNew = () => {
    Router.push({
      pathname: "/new",
      query: {
        name: "小红",
      },
    });
  };
  // Router.events.on("routeChangeStart", (...args) => {
  //   console.log("routeChangeStart->路由开始变化,参数为:", ...args); // 路由开始变化
  // });
  // Router.events.on("routeChangeComplete", (...args) => {
  //   console.log("routeChangeComplete->路由结束变化,参数为:", ...args); // 路由结束变化
  // });
  // Router.events.on("beforeHistoryChange", (...args) => {
  //   console.log("3,beforeHistoryChange->浏览器history改变前触发,参数为:", ...args); // 浏览器history改变前触发
  // });
  // Router.events.on("routeChangeError", (...args) => {
  //   console.log("4,routeChangeError->路由跳转发生错误,参数为:", ...args); // 路由跳转发生错误
  // });
  return (
    <div>
      <h1>主页</h1>
      <div>
        <Link href="/blog/login?name=小白-url拼接传参">去login页面，使用单纯的url拼接参数</Link>
        <hr />
        <Link href={{ pathname: "/blog/login", query: { name: "小白-对象格式传参" } }}>
          <a>去login页面，使用对象传参</a>
        </Link>
        <br />
      </div>
      <hr />
      <div>
        <button onClick={goNew}>去new页面，使用编程式导航</button>
      </div>
    </div>
  );
}
