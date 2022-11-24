import React from 'react'
import './item.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import deleviry from './images/delivery.png'
import discount from './images/discount.png'
import { useStateValue } from "./StateProvider";
import gift from './images/gift.png'

function Item({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };
    return (
        <div className="item">
            <div className='item_info_container'>
                <div className='item_images'>
                    <img className="item_headImg" src='https://m.media-amazon.com/images/I/619h9dd1VhS.jpg' />
                </div>

                <div className='item_descriptions'>
                    <h1>ASUS</h1>
                    <h2>Asus GeForce RTX 3080 Ti ROG Strix OC 12GB GDDR6X PCI-Express Graphics Card</h2>
                    <div className="product__rating">
                        <p>🌟</p>
                    </div>
                    <p>ROG-STRIX-RTX3080TI-O12G-GAMING,
                        Boost Clock: 1845MHz, Memory 12GB 19000MHz GDDR6X,
                        Cuda Cores: 10240, VR Ready, PhysX/CUDA Enabled,
                        NVIDIA Ampere, 8nm Process, Real-Time Ray Tracing,
                        3 Years Warranty</p>

                    <h1>$1,200</h1>
                    <button className='item_btn' onClick={addToBasket}>ADD TO CART</button>
                    <button className='item_btn_call'>Call Us</button>
                    <div className="active">
                        <FiberManualRecordIcon className='active_icon' />
                        <p>In stock</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="features">
                <p className="feature_title">
                    <img className="feature_img" src={deleviry} />
                    Deleviry
                </p>
                <p className="feature_title">
                    <img className="feature_img" src={discount} />
                    Discount
                </p>
                <p className="feature_title">
                    <img className="feature_img" src={gift} />
                    Gift
                </p>
            </div>
        </div>
    )
}

export default Item