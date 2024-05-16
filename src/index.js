import React from "react";
import ReactDOM from "react-dom/client";
import 'typeface-roboto';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./constants/ant.config";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
