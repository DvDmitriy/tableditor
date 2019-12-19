import React, {Component} from 'react';
import Recaptcha from 'react-recaptcha';
import './authentication-form.css';

export default class Form extends Component{
    state = {
        userName: '',
        password: '',
        isAutorized: false,
        isVarified: false
    };
    onSubmit = event => {
        /*alert(`${this.state.userName}, добро пожаловать!`);*/
        if(this.state.isVarified) {
            this.props.query(this.state);
            console.log('next step');
            event.preventDefault();
        }
        else{
            alert(`Подтвердите, что Вы не робот!`);
        }
    };
    onChangePassword = event => {
        this.setState({
            password: event.target.value
        });
    };
    onChangeUserName = event => {
        this.setState({
            userName: event.target.value.toLowerCase()
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
      return(
       <div className="container">
          <div className="row">
              <div className="col-md-offset-3 col-md-6">
                  <form className="form-horizontal"
                        onSubmit={this.onSubmit}>
                      <span className="heading">АВТОРИЗАЦИЯ</span>
                      <div className="form-group">
                          <input type="text"
                                 className="form-control"
                                 name="userName"
                                 placeholder="Пользователь"
                                 value={this.state.userName}
                                 onChange={this.onChangeUserName} />
                          <i className="fa fa-user" />
                      </div>
                      <div className="form-group help">
                          <input type="password"
                                 className="form-control"
                                 name="password"
                                 placeholder="Пароль"
                                 value={this.state.password}
                                 onChange={this.onChangePassword} />
                          <i className="fa fa-lock" />
                      </div>
                      <div className="form-group">
                          <div className="row justify-content-center">
                          <Recaptcha
                              sitekey="6LerI8IUAAAAAB5GdmMlQRcZ5D3vRpWVv1u1YBaH"
                              render="explicit"
                              onloadCallback={this.recaptchaLoaded}
                              verifyCallback={this.verifyCallback}
                          />
                          </div>
                      </div>
                      <div className="form-group">
                            <button type="submit" className="btn btn-default">ВХОД</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      );
    }
   }