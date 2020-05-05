import React from 'react';
import { withFirebase } from '../firebase';
import * as ROUTES from "../../constants/routes";
import {Link} from "react-router-dom";
const SignOutButton = ({ firebase }) => (
    <Link to={ROUTES.START_PAGE}>
        <button className="btn btn-outline-success my-2 my-sm-0" type="button"  onClick={firebase.doSignOut}>
           Sign Out
        </button>
    </Link>
);
export default withFirebase(SignOutButton);