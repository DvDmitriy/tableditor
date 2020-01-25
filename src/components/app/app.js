import React, {Component} from 'react';
import Form from '../authentication-form';
import MiddlePage from '../middle-page';
import Table from '../test-table';
import MainPage from '../main-page';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './app.css';



export default class App extends Component {


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

  render() {
console.log(ROUTES.START_PAGE);
    return (

        <div>

            <Router>
               <Route exact path={ROUTES.START_PAGE} component={MiddlePage} />
               <Route exact path={ROUTES.SIGN_IN} component={Form} />
               <Route exact path={ROUTES.MIDDLE_PAGE} component={Table} />
            </Router>

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

