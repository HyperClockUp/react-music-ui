import React, {PureComponent} from 'react';

class TestComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div>{this.props.location.pathname}</div>)

    }
}

export default TestComponent;