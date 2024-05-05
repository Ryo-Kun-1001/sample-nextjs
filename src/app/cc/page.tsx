"use client";

const ClientComponent = () => {
  console.log("Client Component");
  // このログは、ブラウザ側のConsoleに出力され、Node側では原則出力されない
  return <div>ClientComponent</div>;
};

export default ClientComponent;
