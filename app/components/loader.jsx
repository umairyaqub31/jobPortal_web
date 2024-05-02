"use client";

import React from "react";
import { Rings } from "react-loader-spinner";
export default function Loader(props) {
  const { color, size } = props;
  return (
    <Rings
      visible={true}
      height={size}
      width={size}
      color={color}
      ariaLabel="rings-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
