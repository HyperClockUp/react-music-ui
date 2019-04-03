import React, {PureComponent, Fragment} from 'react';
import {Link} from 'react-router-dom'
import './index.css';

class NavigationBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    createCenterDivs = (tags = []) => {
        let tagsDiv = [];
        tags.map((item, index) => {
            tagsDiv.push(<Link className="nav-item" key={index} to={item.to}>{item.name}</Link>)
        });
        return tagsDiv;
    };

    render() {
        const {tags} = this.props;
        const tagsDiv = this.createCenterDivs(tags);
        return (
            <div className='wholeBar'>
                <div className='centerDiv'>
                    {tagsDiv}
                </div>
            </div>
        );
    }
}

export default NavigationBar;