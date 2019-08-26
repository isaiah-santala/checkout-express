import React from 'react';
import PicCarousel from './components/PicCarousel.jsx';
import StDescipt from './components/StDescript.jsx';
import style from './style.css';

const url = `/products${window.location.pathname}`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetProduct: {
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
            targetProduct: data
        }))
    }

    render() {
        const { itemname } = this.state.targetProduct

        const descriptStr = this.state.targetProduct.description1
        const descriptArr = descriptStr.slice(0, descriptStr.length - 1).split('.,')

        return (
            <div className={`${style.font} ${style.center}`}>
                <h3 className={`${style.productName}`}>{itemname}</h3>
                <div className={`${style.container} ${style.productContainer}`}>
                    <PicCarousel imgArr={this.state.targetProduct.url} />
                    <StDescipt descriptArr = {descriptArr}/>
                </div>
            </div>
        )
    }
}

export default App;