import React from 'react';
import PicCarousel from './components/PicCarousel.jsx';
import StDescipt from './components/StDescript.jsx';
import AboutProduct from './components/AboutProduct.jsx';
import { exampleData } from '../example.js';
import style from './style.css';
import Axios from 'axios';

const url = `http://localhost:3000/products${window.location.pathname}`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetProdut: exampleData[0]
        }
    }

    componentDidMount() {
        this.getImages()
    }

    getImages() {
        fetch(url)
        .then(data => data.json())
        .then(data => this.setState({
            targetProdut: exampleData[data.id]
        }))
    }

    render() {
        const descriptStr = this.state.targetProdut.description1
        const descriptArr = descriptStr.slice(0, descriptStr.length - 1).split('.,')
        const longDescript = this.state.targetProdut.description2
        const productName = this.state.targetProdut.name

        return (
            <div className={`${style.font} ${style.center}`}>
                <h3 className={`${style.productName}`}>{productName}</h3>
                <div className={`${style.container} ${style.productContainer}`}>
                    <PicCarousel imgArr={this.state.targetProdut.imageurl.split(', ')} />
                    <StDescipt descriptArr = {descriptArr}/>
                </div>
                <div>
                    <AboutProduct paragraph={longDescript}/>
                </div>
            </div>
        )
    }
}

export default App;