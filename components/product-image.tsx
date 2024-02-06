import React from "react";
import { Image, ImageProps } from "expo-image";

export default function ProductImage({ ...props }: ImageProps) {
  return <Image transition={1000} {...props} />;
}
