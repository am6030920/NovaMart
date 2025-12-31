import React from "react";
import InnerImageZoom from "react-inner-image-zoom";

const ProductZoom = () => {
  return (
    <div className="product-zoom-wrapper">
      <InnerImageZoom
        src="https://m.media-amazon.com/images/I/71pzB-Rhc9L._SX569_.jpg"
        zoomSrc="https://m.media-amazon.com/images/I/71pzB-Rhc9L._SX569_.jpg"
        zoomType="hover"
        zoomScale={1.5}
        alt="Product Image"
      />
    </div>
  );
};

export default ProductZoom;
