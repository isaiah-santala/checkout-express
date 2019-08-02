import React from 'react';
import PicCarousel from './components/PicCarousel.jsx';
import StDescipt from './components/StDescript.jsx';
import AboutProduct from './components/AboutProduct.jsx';
import style from './style.css';
import Axios from 'axios';

const url = `http://localhost:3000/products${window.location.pathname}`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetProdut: {
                itemname:'',
                price:'',
                description1:'',
                description2:'',
                url:[]
            }
        }
    }

    componentDidMount() {
        this.getImages()
    }

    getImages() {
        fetch(url)
        .then(data => data.json())
        .then(data => this.setState({
            targetProdut: data
        }))
    }

    render() {
        const descriptStr = this.state.targetProdut.description1
        const descriptArr = descriptStr.slice(0, descriptStr.length - 1).split('.,')
        const longDescript = this.state.targetProdut.description2
        const { itemname } = this.state.targetProdut

        return (
            <div className={`${style.font} ${style.center}`}>
                <h3 className={`${style.productName}`}>{itemname}</h3>
                <div className={`${style.container} ${style.productContainer}`}>
                    <PicCarousel imgArr={this.state.targetProdut.url} />
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