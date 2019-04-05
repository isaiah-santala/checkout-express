import React from 'react';
import PicView from './PicView.jsx';

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
                {/* {console.log(this.state.imageArr)} */}
                <div>
                    <PicView picture={this.state.heroImg}/>
                </div>
                <div>
                    {this.state.imageArr.map((url,index)=>(
                            <img 
                                src={url} 
                                height="42" 
                                width="42" 
                                key={index}
                                className="imageThumbnails"
                                onClick={(event)=>(this.handleImgChange(event))}/>
                    ))}
                </div>


            </div>
        )
    }
}

export default PicCarousel;