//llama a firebase para poder crear el usuario autenticado de la app
export const iniciarSesion = (dispatch, firebase, email, password) => {
    //la funcion en la cloud de firebase, por lo tanto debo trabajar con promesa
    //envio un requerimiento y tengo que hacer un await hasta que el req regrese
    return new Promise((resolve, eject) => {
        firebase.auth//llamo al objeto autenticacion
            .signInWithEmailAndPassword(email, password)//ingresar con email y password
            .then(auth => {//si el login es correcto llama a then, y devuelve un objeto auth con el id que te corresponde como usuario de la app, el usuario de la app es---> auth.user.uid
                firebase.db//como tengo el usuario puedo llamar a la base de datos, y me devuelve todos los atributos de ese objeto
                    .collection("Users")//llama a la collection Users, si no esta lo crea
                    .doc(auth.user.uid)//el id del documento al cual quiero acceder se supone que es el valor del id que esta en la authentication
                    .get()//lo extraigo, para poder confirmar la transaccion
                    .then(doc => {//si encontro el valor que esta buscando entonces que llame con el parametro doc que representa toda la data de Start Collection
                        const usuarioDB = doc.data();//todo esa data que tiene doc la almaceno en un constante usuarioDB
                        dispatch({//TODO ESTO ES PARA PODER COLOCARLO DENTRO DEL CONTEXT PROVIDER SESION,el dispacth llama al reducer
                            type: "INICIAR_SESION",//aqui le indico que tipo de reducer estoy llamando
                            sesion: usuarioDB,//esto es lo que se metera en la linea 22 de sesionAction.js
                            autenticado: true
                        });
                        resolve({ status: true });//resuelvo la promesa y pongo el status en true
                    });
            })
            .catch(error => {
                console.log("error", error);
                resolve({ status: false, mensaje: error });
            });
    });
};

export const crearUsuario = (dispatch, firebase, usuario) => {//usuario tiene nombre email apellido
    return new Promise((resolve, eject) => {//creo la promesa
        firebase.auth
            .createUserWithEmailAndPassword(usuario.email, usuario.password)//llamo al metodo para crear por usuario por email y password
            .then(auth => {
                firebase.db//llamo a la base de datos
                    .collection("Users")//llamo a la coleccion de Users
                    .doc(auth.user.uid)//trae el doc con el id
                    .set(//ingresamos valores
                        {//indicamos los valores que ingresaremos para el usuario
                            id: auth.user.uid,
                            email: usuario.email,
                            nombre: usuario.nombre,
                            apellido: usuario.apellido
                        },
                        { merge: true }//hago la union para que se almacene
                    )
                    .then(doc => {//si todo fue correcto devuelveme este objeto doc, este doc no trae la data json ya que es solo una bandera
                        usuario.id = auth.user.uid;//me crea un id para ese usuario, aqui lo almaceno en usuario.id
                        dispatch({//aqui una vez de haber creaado el usuario lo logeamos
                            type: "INICIAR_SESION",//pasaremos el type al reducer
                            sesion: usuario,//el usuario con el id es decir usuario.id
                            autenticado: true//cambiamos el autenticado
                        });
                        resolve({ status: true });//resolvemos la promesa
                    });
            })
            .catch(error => {
                console.log("error", error);
                resolve({ status: false, mensaje: error });
            });
    });
};

export const salirSesion = (dispatch, firebase) => {
    return new Promise((resolve, eject) => {
        firebase.auth.signOut().then(salir => {//aqui salimos 
            dispatch({
                type: "SALIR_SESION",//pasamos el tipo
                nuevoUsuario: {//seteamos los valores del nuevo usuario
                    nombre: "",
                    apellido: "",
                    email: "",
                    foto: "",
                    id: "",
                    telefono: ""
                },
                autenticado: false//seteamos el autenticado en false
            });
            resolve();
        })
    })
}
