import React, {PureComponent} from 'react';

export default class SingleOffer extends React.Component {

    state={
        info:''
    }

    constructor(props){
        super(props)
        this.state.info = props.info
        console.log("------_)))))))) " + this.state.info)
    }


    stateSetter(info){
        console.log("Ustawiam");
        this.state.info = info;
    }

    render() {
        const displayName = 'Hello here';

        return (
            <div>
                <div>
                    {this.state.info} | <a target="_new"
                                       href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}>
                    Wikipedia
                </a>
                </div>
                {/*<img width={240} src={'./views'} />*/}
            </div>
        );
    }
}