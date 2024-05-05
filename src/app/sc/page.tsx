// import { useState } from "react";

const ServerComponent = () => {
  console.log("Server Component");
  //   useState();
  // サーバーコンポーネントでは、Hooksが使えない
  //   return <div onClick={() => {}}>ServerComponent</div>;
  // また、onClickイベントも使えない
  return <div>ServerComponent</div>;
};

export default ServerComponent;
