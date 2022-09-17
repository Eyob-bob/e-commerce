import React from "react";
import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";

const Product = ({ product }) => {
  const { title, price, image, slug } = product.attributes;

  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.small.url} alt="" />
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
      </Link>
    </ProductStyle>
  );
};

export default Product;
