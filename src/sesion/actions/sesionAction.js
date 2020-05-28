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
                })
            })
    })
}