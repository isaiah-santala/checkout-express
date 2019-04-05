import React from 'react';

const StDescript = ({descriptArr}) => (
    <ul>
        {descriptArr.map((line)=>(<li>{line}</li>))}
    </ul> 
)

export default StDescript;