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
        this.thumbnailHightLight = this.thumbnailHightLight.bind(this);
    }

    handleImgChange (event){
        // console.log("clicked")
        // console.log(event.target.classList)
        this.setState({
            heroImg: event.target.currentSrc
        })
    }

    thumbnailHightLight (event){
        // console.log(event.target.classList);
        // console.log('high light!')
        // console.log(event.target.classList)
        if(event.target.classList.contains(style["thumbnail-high-light"])){
            event.target.classList.remove(style["thumbnail-high-light"])
        }else{
            event.target.classList.add(style["thumbnail-high-light"])
        }

    }




    render () {
        return(
            <div className={style.autoMargin}>
                {/* {console.log(this.props)} */}
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
                                    className={`imageThumbnails ${style.thumbnail}} ${style.tmpad}`}
                                    onMouseOver={(event)=>{
                                        this.handleImgChange(event);
                                        this.thumbnailHightLight(event);
                                    }}
                                    onMouseLeave={(event)=>{
                                        console.log('leave')
                                        this.thumbnailHightLight(event)
                                    }}/>
                        ))}
                </div>


            </div>
        )
    }
}

export default PicCarousel;