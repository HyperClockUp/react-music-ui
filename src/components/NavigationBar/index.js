import React, {PureComponent, Fragment} from 'react';
import {NavLink} from 'react-router-dom'
import './index.css';

class NavigationBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    createCenterDivs = (tags = []) => {
        let tagsDiv = [];
        tags.map((item, index) => {
            tagsDiv.push(<NavLink className="nav-item" key={index} to={item.to} activeClassName='nav-item-active'
                                  exact>{item.name}</NavLink>)
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