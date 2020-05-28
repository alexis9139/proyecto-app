import app from 'firebase/app';
import 'firebase/firestore';
const config = {
    apiKey: "AIzaSyD15XmzDQPBuhzU-10UX4Iwzso3UKTqslQ",
    authDomain: "gestiones-8f421.firebaseapp.com",
    databaseURL: "https://gestiones-8f421.firebaseio.com",
    projectId: "gestiones-8f421",
    storageBucket: "gestiones-8f421.appspot.com",
    messagingSenderId: "622423835021",
    appId: "1:622423835021:web:d61d5ae0fa2ea058d07dc4",
    measurementId: "G-7W1VBCXR1T"
};

class Firebase {
    constructor() {
        //invocamos al objeto firebase y lo inicializamos
        //como parametro el pasamos la configuracion de la app web que creamos
        app.initializeApp(config);
        this.db = app.firestore();
    }
}
export default Firebase;