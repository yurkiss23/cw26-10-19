import React, {Component} from 'react';

class UserCabinet extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
    <h3 className="h3 mt-4 mb-3 font-weight-normal text-center">User Cabinet: {this.props.name}</h3>
            </div>
        );
    }
}
 
export default UserCabinet;