import React, {PureComponent} from 'react';
import {findDomNode} from 'react-dom'
import './index.css'

class MusicPlayer extends PureComponent {
    constructor(props) {
        super(props);
        this.playerDom = React.createRef();
        this.btnDom = React.createRef();
        this.state = {
            show: true,
            fixed: true,
            domHeight: null,
            onBtn: true
        };
        this.changePlayerState = this.changePlayerState.bind(this);
    }

    changePlayerState() {
        this.setState({
            fixed: !this.state.fixed
        })
    }

    playerShowController() {
        this.btnDom.current.addEventListener('mouseenter', (e) => {
            this.setState({
                onBtn: true
            })
        });
        this.btnDom.current.addEventListener('mouseout', (e) => {
            this.setState({
                onBtn: false
            })
        });
        document.addEventListener('mousemove', (e) => {
            if (!this.state.domHeight) {
                this.setState({
                    domHeight: parseInt(window.getComputedStyle(this.playerDom.current, null).height)
                })
            }
            let isShow = e.clientY + this.state.domHeight >= document.body.clientHeight || this.state.onBtn || this.state.fixed;
            if (this.state.show !== isShow) {
                this.setState({
                    show: isShow
                })
            }
        })
    }

    render() {
        return (
            <div className={`music-player-container ${this.state.show ? "player-show" : "player-hidden"}`}
                 ref={this.playerDom}>
                <div className={`toggle ${this.state.show ? 'toggle-show' : 'toggle-hidden'}`}
                     onClick={this.changePlayerState} ref={this.btnDom}>

                </div>
            </div>
        )
    }

    componentDidMount() {
        this.playerShowController();
    }
}

export default MusicPlayer;