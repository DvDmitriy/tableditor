import React from "react";
import {FirebaseContext, withFirebase} from '../firebase';


const TableComponent = () => (
    <FirebaseContext.Consumer>
        {firebase => {
             firebase.getResource(
                 `https://console.firebase.google.com/project/tableditor-47a70/database/data/departments/university/tables/first_table`)
                .then((body) => {
                    console.log(body);
                });

        }}
    </FirebaseContext.Consumer>

);

export default withFirebase(TableComponent);