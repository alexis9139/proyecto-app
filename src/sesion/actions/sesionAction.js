//dispatch viene desde afuera cuando se llama se le pasa dispatch
export const iniciarSesion = (dispatch, firebase, email, password) => {
    //tengo que invocar a un servicio de firebase, por lo tanto tengo que trabajar con una promesa
    return new Promise((resolve, eject) => {//resolve pasa, eject es problema
        firebase.auth
            .signInWithEmailAndPassword(email, password)//si el login es correcto llama al metodo then
            .then(auth => {//devuelve el id como usuario de la app
                //auth.user.uid <-- esto es el id de la app
                //si lo tengo puedo llamar a la base de datos para que me devuelva todos los atributos
                //debo instanciar a la base de datos de firebase y pasarle el id 
                firebase.db
                    .collection("Users")
                    .doc(auth.user.uid)
                    .get()
                then(doc => {//doc representa toda la data con los datos
                    const usuarioDB = doc.data();//<-- json que me esta devolviendo usaario DB
                    dispatch({//dispatch llama a reducer
                        type: "INICIAR_SESION",
                        sesion: usuarioDB,
                        autenticado: true
                    });
                    resolve()//si no le pongo resolve es como que nunca se cumple la promesa y no sale del metodo
                });
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    });
};



export const crearUsuario = (dispatch, firebase, usuario) => {
    return new Promise((resolve, eject) => {
        firebase.auth
            .createUserWithEmailAndPassword(usuario.email, usuario.password)
            .then(auth => {
                firebase.db
                    .collection("Users")
                    .doc(auth.user.uid)
                    .set({
                        id: auth.user.uid,
                        email: usuario.email,
                        nombre: usuario.nombre,
                        apellido: usuario.apellido,
                    }, { merge: true })
                    .then(doc => {
                        usuario.id = auth.user.uid
                        dispatch({
                            type: "INICIAR_SESION",
                            sesion: usuario,
                            autenticado: true
                        });
                        resolve();
                    });
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    });
};



export const salirSesion = (dispatch, firebase) => {
    return new Promise((resolve, eject) => {
        firebase.auth.signOut().then(salir => {
            dispatch({
                type: "SALIR_SESION",
                nuevoUsuario: {
                    nombre: "",
                    apellido: "",
                    email: "",
                    foto: "",
                    id: "",
                    telefono: ""
                },
                autenticado: false
            });
            resolve();
        })
    })
}