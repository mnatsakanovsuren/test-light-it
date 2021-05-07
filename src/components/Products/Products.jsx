import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({products}) => {
  return (
    <div>
      {products.map(item => {
        return (
          <div key={item.id}>
            <Link to={`/products/${item.id}`} key={item.id}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;