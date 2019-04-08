import React from 'react';
import style from '../style.css';

const AboutProduct = ({paragraph}) => (
    <div className={style.section}>
        <h3 className={style.aboutTitle}>About this product</h3>
        <p>{paragraph}</p>
    </div>
)

export default AboutProduct;