import React, {Component} from 'react';

import './test-table.css';
import table from './table';
import CustomTD from '../custom-td';

export default class Table extends Component{

    state = {
        id: '',
        cellState: '',
        type: '',
        action: '',
        value: '',
        counter: 0

    };

    changeCounter =(counter) =>{
        this.setState({
           counter: counter
        });
    };

    render(){

    console.log("render");

        return(
            <div>

                <table>
                    <thead>
                    {
                        table.header.map((section, index) =>(
                            <tr key={index}>
                                {section.map((row) => (
                                    <td rowSpan={row.rowSpan}
                                        colSpan={row.colSpan}
                                    >{row.rowValue}</td>
                                ))
                                }
                            </tr>
                        ))
                    }
                    </thead>
                    <tbody>
                    {
                        table.body.map((section,index) => (
                            <tr key={index}>
                                {
                                    section.map((cell, cellIndex) => (
                                            cellIndex < 2
                                                ?
                                                <td className={cellIndex === 1 ? '' : 'unusualCell'}>{cell}</td>
                                                :
                                               <CustomTD
                                                   id={cell.id}
                                                   type={cell.type}
                                                   color={cell.color}
                                                   state={cell.cellState}
                                                   action={cell.action}
                                                   range={cell.range || null}
                                                   value={cell.value}
                                                   counter={this.state.counter}
                                                   changeCounter={this.changeCounter}
                                               />

                                        )
                                    )
                                }
                            </tr>

                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}



