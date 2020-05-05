import React, {Component} from 'react';
import Form from '../authentication-form';
import MiddlePage from '../middle-page';
import Table from '../test-table';
import Navigation from '../navigation';
import { AuthUserContext } from '../session';
import MainPage from '../main-page';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './app.css';
import {withFirebase} from "../firebase";
import { withAuthentication } from '../session';


class App extends Component {


  /*checkAutorized = ({userName, password, isAutorized}) => {
      fetch('https://cloud.mongodb.com/api/atlas/v1.0/groups/5db0a70ac56c98f9436e186f/databaseUsers/admin/DefaultUser')
          .then((response)=> {
            console.log('Got a response', response.status);
          });



      console.log(userName);
      console.log(password);
      console.log(isAutorized);
      <MiddlePage path={ROUTES.START_PAGE}/>
<Table />

  };*/
    state = {
        authUser: null,
    };
    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
            },
        );
    }

    componentWillUnmount() {
        this.listener();
    }
  render() {
console.log(ROUTES.START_PAGE);
    return (

        <div>
          <AuthUserContext.Provider value={this.state.authUser}>
            <Router>

               <Route exact path={ROUTES.START_PAGE} component={MiddlePage} />
               <Route exact path={ROUTES.SIGN_IN} component={Form} />
               <Navigation authUser={this.state.authUser} />
               <Route exact path={ROUTES.MIDDLE_PAGE} component={Table} />

            </Router>
          </AuthUserContext.Provider>
        </div>


        /*  <BootstrapTable data={this.props.data}>
              <TableHeaderColumn isKey dataField='id'>
                  ID
              </TableHeaderColumn>
              <TableHeaderColumn dataField='name'>
                  Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField='value'>
                  Value
              </TableHeaderColumn>
          </BootstrapTable>
      </div>*/


    );
  }
}

export default withFirebase(App);