import React from 'react';
import style from '../style.css';

const StDescript = ({descriptArr}) => (
    <div className={style.lpadding}>
        <h5 className={`${style.title} ${style.zeroMargin}`}>About this product</h5>
        <ul className={`${style.child2} ${style.listMargin}`}>
            {descriptArr.map((line, index)=>(<li key={index} className={`${style.stDescript} ${style.listMargin}`}>{line}</li>))}
        </ul> 
    </div>
)

export default StDescript;