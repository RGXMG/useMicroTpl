import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
function render() {
  ReactDOM.render(<App />, document.getElementById("react-pro"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
async function bootstrap(props: any) {
  console.log("react-pro::bootstrap:", props);
}
async function mount(props: any) {
  render();
  console.log("react-pro::mounted:", props);
}
async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#react-pro")
      : document.querySelector("#react-pro")
  );
  console.log("react-pro::unmount:", props);
}
export { bootstrap, mount, unmount };
