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
                <h1>{this.props.user.username}'s Pets!!!</h1>
                <ul>
                    {this.props.pets.map(pet =>
                        <li key={pet.id}>
                            {pet.firstname}
                            {this.props.user.authLevel === 'ADMIN' ?
                                <button>Delete</button> :
                                null
                            }
                        </li>    
                    )}
                </ul>
            </>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    pets: reduxState.pets,
    user: reduxState.user
});
export default connect(mapStateToProps)(PetList);