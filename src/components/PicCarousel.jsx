import React from 'react';
import PicView from './PicView.jsx';
import style from '../style.css';

class PicCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageArr: this.props.imgArr,
            heroImg: this.props.imgArr[0]
        };
        this.handleImgChange = this.handleImgChange.bind(this);
    }

    handleImgChange (event){
        console.log("clicked")
        this.setState({
            heroImg: event.target.currentSrc
        })
    }

    render () {
        return(
            <div>
                {console.log(this.props)}
                <div className={style.heroImgHeight}>
                    <PicView picture={this.state.heroImg}/>
                </div>
                <div className={style.carousel}>
                        {this.state.imageArr.map((url,index)=>(
                                <img 
                                    
                                    src={url} 
                                    height="42" 
                                    width="42" 
                                    key={index}
                                    className={`imageThumbnails ${style.thumbnail} ${style["thumbnail-high-light"]}`}
                                    onClick={(event)=>(this.handleImgChange(event))}/>
                        ))}
                </div>


            </div>
        )
    }
}

export default PicCarousel;