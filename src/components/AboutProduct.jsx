import React from 'react';
import style from '../style.css';

const AboutProduct = ({paragraph}) => (
    <div>
        <h3 className={style.title}>About this product</h3>
        <p>{paragraph}</p>
    </div>
)

export default AboutProduct;