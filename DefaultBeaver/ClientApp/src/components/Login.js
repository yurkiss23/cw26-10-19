import React, {Component} from 'react';
import classnames from 'classnames';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import { connect } from 'react-redux';

import UserCabinet from './Cabinet';

class Login extends Component {
    state = {
        login:'',
        password:'',
        showCab:false
    }

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log('---submitLog---');
        const{login,password}=this.state;
        const model={"email":login,"password":password};
        axios.post("http://localhost:56269/api/account/login",model).then(
            (rest)=>{
                console.log("--login--");
                this.setState({showCab:true});
            }
        );
        this.setState({showCab:false});
    }

    render() {
        const{login,password,showCab}=this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <form onSubmit={this.onSubmitHandler} className="form-login">
                        <h3 className="h3 mb-3 font-weight-normal text-center">LOGIN</h3>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <fieldset className="form-group text-center">
                                <label htmlFor="login">Пошта/Телефон</label>
                                <input type="text"
                                    className={classnames('form-control')}
                                    id="login"
                                    name="login"
                                    value={login}
                                    onChange={this.onChange} />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </fieldset>
                            <fieldset className="form-group text-center">
                                <label htmlFor="password">Пароль</label>
                                <input type="password"
                                    className={classnames('form-control')}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={this.onChange} />
                                <div className="invalid-feedback">
                                    Please choose a password.
                                </div>
                            </fieldset>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    </form>
                </div>

                {showCab && <UserCabinet name={login}/>}

            </React.Fragment>
        );
    }
}
 
export default Login;