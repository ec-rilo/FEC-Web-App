import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductInformation from './components/ProductInformation.js';
import StyleSelector from './components/StyleSelector.js';
import Cart from './components/Cart.js';
import ImageGallery from './components/ImageGallery.js';

function Overview({ product }) {
  const [styles, setStyles] = useState({});
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  useEffect(() => {
    if (product == null) {
      return;
    }
    axios.get(`/products/${product.id}/styles`)
      .then((res) => {
        setStyles(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product]);

  function selectStyle(newStyleIndex) {
    setCurrentStyleIndex(newStyleIndex);
  }

  return (
    <div className="overview-body">
      <ImageGallery
        styles={styles}
        currentStyleIndex={currentStyleIndex}
        selectStyle={selectStyle}
      />
      <div className="right-div">
        <ProductInformation
          product={product}
          styles={styles}
          currentStyleIndex={currentStyleIndex}
        />

        <StyleSelector
          styles={styles}
          currentStyleIndex={currentStyleIndex}
          selectStyle={selectStyle}
        />

        <Cart styles={styles} currentStyleIndex={currentStyleIndex} />
        {product?.description}
      </div>
    </div>
  );
}

export default Overview;
