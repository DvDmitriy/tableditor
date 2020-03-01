import React from "react";
import  { FirebaseContext } from '../firebase';


const TableComponent = () => (
    <FirebaseContext.Consumer>
        {firebase => {
             .getResource(`https://tableditor-47a70.firebaseio.com/departments/university/tables/first_table`)
                .then((body) => {
                    console.log(body);
                });

        }}
    </FirebaseContext.Consumer>
);

export default TableComponent;