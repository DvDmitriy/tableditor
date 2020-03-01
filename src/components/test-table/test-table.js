import React, { Component } from "react";

import "./test-table.css";
import defaultTable from "./table";
import CustomTD from "../custom-td";
import TableComponent from "./table-component";
import {FirebaseContext} from "../firebase";

export default class Table extends Component {
    state = {
        table: undefined,
        counter: 0
    };

    componentDidMount() {
        this.setState({ table: defaultTable });
    }

    changeCounter = counter => {
        this.setState({
            counter: counter
        });
    };

    setCellValue = (indexRow, indexCol, value) => {
        const tempTable = this.state.table;

        tempTable.body[indexRow][indexCol].value = value;

        this.setState({ table: tempTable });
    };
    // getTable = () =>{
    // this.props.firebase
    //   .getResource(`https://tableditor-47a70.firebaseio.com/departments/university/tables/first_table`)
    //   .then((body) => {
    //      console.log(body);
    //   })
    // };

    render() {
        const { table } = this.state;
        if (!table) {
            return <div>Loading...</div>;
        }

        return (

            <div>
                <FirebaseContext.Consumer >
                    {firebase => {

                <table>
                    <thead>
                    {table.header.map((section, index) => (
                        <tr key={index}>
                            {section.map(row => (
                                <td rowSpan={row.rowSpan} colSpan={row.colSpan}>
                                    {row.rowValue}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.body.map((section, index) => (
                        <tr key={index}>
                            {section.map((cell, cellIndex) => {
                                let value = cell.value;
                                if (cell.action === "sum") {
                                    const cellSumIdArray = cell.range
                                        .split(":")
                                        .map(e => Number(e));
                                    let arrayValuesSum = [];

                                    table.body.forEach((row, indexRow) => {
                                        row.forEach((col, indexCol) => {
                                            if (cellSumIdArray.includes(col.id)) {
                                                arrayValuesSum.push(col);
                                            }
                                        });
                                    });

                                    value = arrayValuesSum.reduce(
                                        (result, val) => (result += Number(val.value)),
                                        0
                                    );

                                    if (value !== cell.value)
                                        this.setCellValue(index, cellIndex, value);
                                }

                                return cellIndex < 2 ? (
                                    <td className={cellIndex === 1 ? "" : "unusualCell"}>
                                        {cell}
                                    </td>
                                ) : (
                                    <CustomTD
                                        id={cell.id}
                                        type={cell.type}
                                        color={cell.color}
                                        state={cell.cellState}
                                        changeCeill={value =>
                                            this.setCellValue(index, cellIndex, value)
                                        }
                                        action={cell.action}
                                        counter={this.state.counter}
                                        changeCounter={this.changeCounter}
                                        range={cell.range || null}
                                        value={value}
                                    />
                                );
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
                    }}
                </FirebaseContext.Consumer>
            </div>

        );

    }
}
