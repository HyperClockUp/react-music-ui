import React,{PureComponent} from 'react';
import * as SearchInputLess from './index.less';

class SearchInput extends PureComponent{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return (
            <input className={SearchInputLess.Input} type={this.props.InputType}/>
        )
    }
}
export default SearchInput;