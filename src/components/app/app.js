import React, {Component} from 'react';
import Form from '../authentication-form';
import MiddlePage from '../middle-page';
import Table from '../test-table';
import MainPage from '../main-page';

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
  };*/
  render() {
    return (

        <div>

        <Table />

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

