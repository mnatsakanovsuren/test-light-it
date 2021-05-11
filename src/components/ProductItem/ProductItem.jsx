import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Reviews from "../Reviews/Reviews";
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import ReviewForm from "../ReviewForm/ReviewForm";

const ProductItem = ({products, token}) => {
  const [update, setUpdate] = useState(false);
  const {productId} = useParams();
  const prod = products.filter(prod => +prod.id === +productId)[0];

  return (
    <div className="product section">
      <div className="container">
        <div className="product__wrapper">
          <div className="product__item">
            <div className="product__item__wrapper">
              <h5 className="product__item__title">{prod.title}</h5>
              <div className="product__item_image">
                <img src={prod.id === 1 ? img1 : img2} alt="product"/>
              </div>
              <p className="product__item__text">{prod.text}</p>
            </div>
            <ReviewForm token={token} id={prod.id} setUpdate={setUpdate} />
          </div>
          <Reviews id={prod.id} token={token} update={update} setUpdate={setUpdate} classProp="product__reviews" />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;