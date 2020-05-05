import React, {Component} from 'react';
import './main-page.css';

class TableList extends Component {
   render() {
    return (
        <ul className="item-list list-group">
           null
        </ul>
    );
   }
 }
class CurrentTable extends Component {
    render(){
      return(
          console.log(null)
      );
    }
 }

export default class MainPage extends Component{

    render(){
        return(
            <div className="row mb2">
                <div className="col-md-6">
                    {TableList}
                </div>
                <div className="col-md-6">
                    {CurrentTable}
                </div>
            </div>
        );
    }
}