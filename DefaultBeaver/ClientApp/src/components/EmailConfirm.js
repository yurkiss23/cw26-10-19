import React, {Component} from 'react';

class Confirm extends Component {
    state = {
        showMes:false
    }

    onSubmitConfirm=(e)=>{
        e.preventDefault();
        console.log('---confirm---');
        this.setState({showMes:true});
    }

    render() {
        const{showMes}=this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <form onSubmit={this.onSubmitConfirm} className="form-confirm">
                        <h3 className="h3 mt-4 mb-3 font-weight-normal text-center">{this.props.email}, Вас зареєстровано! Натисніть, що підтвердити email</h3>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Confirm</button>
                    </form>
                </div>

                {showMes && <h3 className="h3 mt-4 mb-3 font-weight-normal text-center">Email успішно підтверджено!</h3>}
                
            </React.Fragment>
        );
    }
}
 
export default Confirm;