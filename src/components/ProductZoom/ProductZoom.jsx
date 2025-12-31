import React, { useRef } from "react";
import "./ProductZoom.css";

const ProductZoom = () => {
  const imgRef = useRef(null);
  const lensRef = useRef(null);

  const moveLens = (e) => {
    const img = imgRef.current;
    const lens = lensRef.current;

    const rect = img.getBoundingClientRect();
    const lensSize = 160;

    let x = e.clientX - rect.left - lensSize / 2;
    let y = e.clientY - rect.top - lensSize / 2;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > rect.width - lensSize) x = rect.width - lensSize;
    if (y > rect.height - lensSize) y = rect.height - lensSize;

    const cx = img.naturalWidth / rect.width;
    const cy = img.naturalHeight / rect.height;

    lens.style.left = x + "px";
    lens.style.top = y + "px";

    lens.style.backgroundPosition = `
      -${(x + lensSize / 2) * cx - lensSize / 2}px
      -${(y + lensSize / 2) * cy - lensSize / 2}px
    `;
  };

  const handleEnter = () => {
    const img = imgRef.current;
    const lens = lensRef.current;
    lens.style.backgroundSize = `${img.naturalWidth}px ${img.naturalHeight}px`;
    lens.style.opacity = 1;
  };

  return (
    <div className="product-image-card">
      <div
        className="zoom-wrapper"
        onMouseMove={moveLens}
        onMouseEnter={handleEnter}
        onMouseLeave={() => (lensRef.current.style.opacity = 0)}
      >
        <img
          ref={imgRef}
          src="https://m.media-amazon.com/images/I/71pzB-Rhc9L._SX569_.jpg"
          alt="Product"
          style={{height:"70vh",}}
        />
        <div
          ref={lensRef}
          className="zoom-lens"
          style={{
            backgroundImage:
              "url(https://m.media-amazon.com/images/I/71pzB-Rhc9L._SX569_.jpg)",
          }}
        />
      </div>
    </div>
  );
};

export default ProductZoom;
