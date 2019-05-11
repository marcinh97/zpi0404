import React, {PureComponent} from 'react';

export default class SingleOffer extends React.Component {

    state={
        info:'',
        offerId:-1
    }

    constructor(props){
        super(props)
        this.state.info = props.info
        this.state.offerId = props.offerId
        console.log("------_)))))))) " + this.state.info)
    }


    stateSetter(info){
        console.log("Ustawiam");
        this.state.info = info;
    }

    render() {
        const offerId = this.state.offerId;

        return (
            <div>
                <div>
                    {this.state.info} | <a target="_new"
                                       href={`http://localhost:3000/offer?id=${offerId}`}>
                    Szczegóły
                </a>
                </div>
                {/*<img width={240} src={'./views'} />*/}
            </div>
        );
    }
}