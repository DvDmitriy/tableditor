import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../sign-out';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-fill">
        <span className="navbar-brand">TablEditoR</span>
        <span className="navbar-brand">КСИТ</span>
        <span className="navbar-brand">Дворников Дмитрий Юрьевич</span>
        <div className="collapse navbar-collapse justify-content-end">
            <form className="form-inline my-2 my-lg-0">
                <SignOutButton />
            </form>
        </div>



      </nav>
    </div>

);


const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;