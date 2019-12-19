import React, {Component} from 'react';
import './middle-page.css';

export default class MiddlePage extends Component{
    render(){
        return(
            <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-10 col-sm-6">
                        <p className="font">Welcome to tablEditor, <br />user</p>
                    </div>
                </div>
            </div>
            <div className="empty">
            </div>
                <div className="container drop">
                    <div className="row justify-content-center">
                        <div className="btn-group dropright">
                            <div className="btn-group dropright">
                                <button type="button" className="btn btn-secondary dropdown-toggle"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Ознакомиться с документацией
                                </button>
                                <div className="dropdown-menu" x-placement="right-start">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container padding-lg">
                        <div className="row justify-content-center">
                             <button type="button" className="btn btn-success">Новый отчёт</button>
                             <button type="button" className="btn btn-danger">Открыть отчёт</button>
                        </div>
                    </div>
                </div>
            </div>
        );
     }

}