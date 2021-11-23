import Link from "next/link";
import { withRouter } from "next/router";
import axios from "axios";

function Login({ router, data }) {
  // 解构赋值出router和props中的data
  return (
    <>
      {/* 在这个里面写的css样式只作用于局部 */}
      <style jsx>
        {`
          div {
            color: blue;
          }
        `}
      </style>
      <h1>login</h1>
      <Link href="/">
        <a>返回主页</a>
      </Link>
      <h2> 接收到的参数：{router.query.name}</h2>
      <div>服务器返回的数据：{data.name + data.age}</div>
    </>
  );
}
Login.getInitialProps = async () => {
  const data = await axios.get("http://localhost:3000/test/get", {
    params: {
      ID: 12345,
    },
  });
  return data; // 返回的结果会添加到props中，函数式组件的props就在函数的参数中
};
export default withRouter(Login);
