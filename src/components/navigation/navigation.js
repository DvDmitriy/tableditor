import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../sign-out';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.MIDDLE_PAGE}>Choose table</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);


const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;