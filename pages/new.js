import Link from "next/link";
import { withRouter } from "next/router";
import { useState } from "react";
import dynamic from "next/dynamic"; // 用来组件懒加载
const Com = dynamic(import("../components/Com"));

function New({ router }) {
  const [color, setColor] = useState("blue");
  const changeColor = () => {
    setColor(color == "blue" ? "red" : "blue");
  };
  return (
    <div>
      <style jsx>
        {`
          div {
            color: ${color};
          }
        `}
      </style>
      <h1>new</h1>
      <h2>接收到的参数：{router.query.name}</h2>
      <Com>这是子组件</Com>
      <hr />
      <Link href="/">
        <a>返回主页</a>
      </Link>
      <hr />
      <div>
        <button onClick={changeColor}>改变颜色</button>
      </div>
    </div>
  );
}

export default withRouter(New);
