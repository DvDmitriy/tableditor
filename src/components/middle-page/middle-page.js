import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './middle-page.css';
import picture from './bg-masthead.jpg';

export default class MiddlePage extends Component{
    render(){

        return(
            <div>

                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                                <h1 className="text-uppercase text-white font-weight-bold">Welcome to TablEditoR</h1>
                                <hr className="divider my-4"/>
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 font-weight-light mb-5">Табличный редактор</p>
                                <Link to={ROUTES.SIGN_IN}>
                                 <button className="btn btn-primary btn-xl js-scroll-trigger">Начать</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        );
     }

}