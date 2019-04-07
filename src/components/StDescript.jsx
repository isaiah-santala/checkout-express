import React from 'react';
import style from '../style.css';

const StDescript = ({descriptArr}) => (
    <div>
        <h5 className={`${style.title} ${style.zeroMargin}`}>About this product</h5>
        <ul className={`${style.child2}`}>
            {descriptArr.map((line)=>(<li className={style.stDescript}>{line}</li>))}
        </ul> 
    </div>
)

export default StDescript;