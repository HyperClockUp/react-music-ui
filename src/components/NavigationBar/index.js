import React,{PureComponent,Fragment} from 'react';
import './index.css';

class NavigationBar extends PureComponent{
    constructor(props){
        super(props);
        this.state={};
    }

    createCenterDivs=(tags=[])=>{
        let tagsDiv=[];
        tags.map(item=>{
            tagsDiv.push(<div>{item}</div>)
        })
        return tagsDiv;
    };

    render() {
        const {tags}=this.props;
        const tagsDiv=this.createCenterDivs(tags);
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