import React from 'react';
import {useParams} from 'react-router-dom';

const ProductItem = ({products}) => {
  const {productId} = useParams();
  const prod = products.filter(prod => +prod.id === +productId)[0];

  return (
    <div>
      <h1>{prod.title}</h1>
      <img src={prod.img} alt="product"/>
      <p>{prod.text}</p>
    </div>
  )
}

export default ProductItem;