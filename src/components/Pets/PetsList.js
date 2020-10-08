import React, {Component} from 'react';
import {connect} from 'react-redux';

class PetList extends Component {

    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_PETS'
        });
    }

    render() {
        return (
            <>
                <h1>Pets!!!!</h1>
            </>
        );
    }
}

export default connect()(PetList);