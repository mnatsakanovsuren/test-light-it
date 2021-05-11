import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({products}) => {
  return (
    <section className="products">
      <div className="container">
        <h1 className="products__title">Products list</h1>
        <h2 className="products__subtitle">Choose product</h2>
        <ul className="products__list">
          {products.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/products/${item.id}`} key={item.id}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Products;