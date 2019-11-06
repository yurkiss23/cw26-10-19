import React, {Component} from 'react';
//import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import axios from 'axios';
//import { connect } from 'react-redux';

import EmailConfirm from './EmailConfirm';

class Register extends Component {
    state = {
        login:'',
        password:'',
        passConfirm:'',
        showCnf:false
    }

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log('---submitReg---');
        const {login, password,passConfirm}=this.state;
        const model={"email":login,"password":password,"passwordConfirm":passConfirm};
        axios.post("http://localhost:60774/api/account/register",model).then(
            (rest)=>{
                console.log("--register--");
                this.setState({showCnf:true});
                console.log("--showRegister--");
            }
        );
        this.setState({showCnf:false});
    }

    render() {
        const{login,password,passConfirm,showCnf}=this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <form onSubmit={this.onSubmitHandler} className="form-register">
                        <h3 className="h3 mb-3 font-weight-normal text-center">REGISTER</h3>
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
                            <fieldset className="form-group text-center">
                                <label htmlFor="passwordConfirm">Підтвердіть пароль</label>
                                <input type="password"
                                    className={classnames('form-control')}
                                    id="passwordConfirm"
                                    name="passConfirm"
                                    value={passConfirm}
                                    onChange={this.onChange} />
                                <div className="invalid-feedback">
                                    Please choose a password.
                                </div>
                            </fieldset>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    </form>
                </div>

                {showCnf && <EmailConfirm email={login}/>}

            </React.Fragment>
        );
    }
}
 
export default Register;