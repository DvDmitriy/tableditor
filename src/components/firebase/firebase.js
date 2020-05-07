import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const FirebaseConfig = {
    apiKey: "AIzaSyDxcU_CzIyQl98PDwD9GW9k6CQGLmxopD4",
    authDomain: "tableditor-47a70.firebaseapp.com",
    databaseURL: "https://tableditor-47a70.firebaseio.com",
    projectId: "tableditor-47a70",
    storageBucket: "tableditor-47a70.appspot.com",
    messagingSenderId: "320100526792",
    appId: "1:320100526792:web:60d3e70ee30950651513fd",
    measurementId: "G-3GZ3H33EL7"
};
export default class Firebase{
    constructor(){
        app.initializeApp(FirebaseConfig);
        this.auth = app.auth();
        this.db = app.database();
   }
   doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    getResource = async(url) => {
        //let cors = 'https://cors-anywhere.herokuapp.com/';
        const res = await fetch(url, {
            mode: 'no-cors'
        })
        console.log(res)
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return res.json();


    };
    getTable = () => this.db.ref().child('university/departments/tables/first_table');

}
