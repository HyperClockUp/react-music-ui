import React, {PureComponent} from 'react';
import {findDomNode} from 'react-dom';
import './index.css';
import unlockedSvg from '../../img/MusicPlayer/unlocked.svg';
import lockedSvg from '../../img/MusicPlayer/locked.svg';
import lastSong from '../../img/MusicPlayer/last_song.svg';
import nextSong from '../../img/MusicPlayer/next_song.svg';
import stopSong from '../../img/MusicPlayer/stop_song.svg';
import playSong from '../../img/MusicPlayer/play_song.svg';

class MusicPlayer extends PureComponent {
    constructor(props) {
        super(props);
        this.playerDom = React.createRef();
        this.btnDom = React.createRef();
        this.state = {
            show: true,
            fixed: true,
            domHeight: null,
            onBtn: true,
            stop: true
        };
        this.changePlayerState = this.changePlayerState.bind(this);
        this.changePlayState = this.changePlayState.bind(this);
    }

    changePlayState() {
        this.setState({
            stop: !this.state.stop
        });
    }
    changePlayerState() {
        this.setState({
            fixed: !this.state.fixed
        });
    }

    playerShowController() {
        this.btnDom.current.addEventListener('mouseenter', (e) => {
            this.setState({
                onBtn: true
            });
        });
        this.btnDom.current.addEventListener('mouseout', (e) => {
            this.setState({
                onBtn: false
            });
        });
        document.addEventListener('mousemove', (e) => {
            if (!this.state.domHeight) {
                this.setState({
                    domHeight: parseInt(window.getComputedStyle(this.playerDom.current, null).height)
                });
            }
            let isShow = e.clientY + this.state.domHeight >= document.body.clientHeight || this.state.onBtn || this.state.fixed;
            if (this.state.show !== isShow) {
                this.setState({
                    show: isShow
                });
            }
        })
    }

    render() {
        return (
            <div className={`music-player-container ${this.state.show ? "player-show" : "player-hidden"}`}
                 ref={this.playerDom}>
                <div className={`toggle`}
                     onClick={this.changePlayerState} ref={this.btnDom}>
                    <img src={`${this.state.fixed ? lockedSvg : unlockedSvg}`} alt="lock"/>
                </div>
                <div className="player-controller">
                    <img src={lastSong} alt="上一首" className='last-song-btn' title='上一首'/>
                    <img src={`${this.state.stop ? playSong : stopSong}`} className='play-song-btn'
                         alt={`${this.state.stop ? '播放' : '暂停'}`} title={`${this.state.stop ? '播放' : '暂停'}`}
                         onClick={this.changePlayState}/>
                    <img src={nextSong} alt="下一首" className='next-song-btn' title='下一首'/>
                </div>
                <div className="player-song-img">

                </div>
                <div className="player-song-process">

                </div>
                <div className="player-list-controller">

                </div>
            </div>
        )
    }

    componentDidMount() {
        this.playerShowController();
    }
}

export default MusicPlayer;