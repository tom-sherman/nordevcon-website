import "../styles/button.css";
import "../styles/index.css";
import "../styles/hexagons.scss";

import React from "react";
import App from "next/app";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}
