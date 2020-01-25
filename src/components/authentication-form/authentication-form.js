import React, {Component} from 'react';
import Recaptcha from 'react-recaptcha';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

import './authentication-form.css';


class FormBase extends Component{
    state = {
        email: '',
        password: '',
        error: null,
        isVarified: false,
    };
    onSubmit = event => {
        /*alert(`${this.state.userName}, добро пожаловать!`);*/
        if(this.state.isVarified) {
            this.props.query(this.state);
            const { email, password } = this.state;

            this.props.firebase
                .doSignInWithEmailAndPassword(email, password)
                .then(() => {
                    this.props.history.push(ROUTES.MIDDLE_PAGE);
                })
                .catch(error => {
                    this.setState({
                        error: error
                    });
                });
           // event.preventDefault();
        }
        else{
            alert(`Подтвердите, что Вы не робот!`);
        }
    };

    onChange = event => {
        this.setState({
           [event.target.name]: event.target.value,
        });
    };
   recaptchaLoaded = () => {
        alert('capcha successfully loaded');
    };
    verifyCallback = (response) => {
        if (response) {
            this.setState({
                isVarified: true
            });
            console.log(this.state.isVarified);
        }

    };

    render(){
        const { email, password, error } = this.state;
        console.log(email, password, error);
        const isInvalid = password === '' || email === '';
      return(
       <div className="container">
          <div className="row">
              <div className="col-md-offset-3 col-md-6">
                  <form className="form-horizontal"
                        onSubmit={this.onSubmit}>
                      <span className="heading">АВТОРИЗАЦИЯ</span>
                      <div className="form-group">
                          <input type="email"
                                 className="form-control"
                                 name="email"
                                 placeholder="E-mail"
                                 value={email}
                                 onChange={this.onChange} />
                          <i className="fa fa-user"></i>
                      </div>
                      <div className="form-group help">
                          <input type="password"
                                 className="form-control"
                                 name="password"
                                 placeholder="Пароль"
                                 value={password}
                                 onChange={this.onChange} />
                          <i className="fa fa-lock" />
                      </div>
                      <div className="form-group">
                          <div className="row justify-content-center">
                          <Recaptcha
                              sitekey="6LerI8IUAAAAAB5GdmMlQRcZ5D3vRpWVv1u1YBaH"
                              render="explicit"
                              onloadCallbac={this.recaptchaLoaded}
                              verifyCallback={this.verifyCallback}
                          />
                          </div>
                      </div>
                      <div className="form-group">
                            <button type="submit"
                                    className="btn btn-default"
                                    disabled={isInvalid}>ВХОД
                            </button>
                      </div>
                      {error && <p>{error.message}</p>}
                  </form>
              </div>
          </div>
      </div>
      );
    }
   }
  const Form = compose(
       withRouter,
       withFirebase,
   )(FormBase);

  export default Form;