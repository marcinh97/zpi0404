import React, {PureComponent} from 'react';
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
    cursor: 'pointer',
    stroke: 'none',
    position: 'absolute'
};

export default class OfferPin extends PureComponent {

    state = {
        category: 0
    }
    constructor(props){
        super(props)
        this.state.category = props.category
        console.log("JEstem tutaj tak jestem z toba oooo " + this.state.category)
    }

    render() {
        const {size = 20, onClick} = this.props;
        const cat = this.state.category;
        var source = cat === 2 ? './views/kids.png' : cat === 1 ? './views/food.png' : './views/clothes.png';
        return (
            <img
                height={size}
                src={this.state.category === 1 ? require('./views/food.png')
                    : this.state.category === 2 ? require('./views/kids.png')
                        : this.state.category === 3 ? require('./views/rtv.png')
                            :this.state.category === 4 ? require('./views/clothes.png')
                                : this.state.category === 5 ? require('./views/sport.png')
                                    : require('./views/furniture.png')}
                style={{...pinStyle, transform: `translate(${-size / 2}px,${-size}px)`}}
                onClick={onClick}
            />
        );
    }
}