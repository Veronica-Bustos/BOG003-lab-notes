import {
    getAuth,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
} from "@firebase/auth";

//funcion de registro
export const registrarUsusario = (nombre, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((respuesta) => {
            //actualizar el perfil-displayname
            updateProfile(auth.currentUser, {
                displayName: nombre,
            })
                .then(function () {
                    console.log(respuesta);
                })
                .catch(function (error) {
                    console.log(error);
                });

        })
        .catch((error) => {
            console.log(error);
        });
};

//Funcion de inicio de sesion
export const inciarSesion = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((respuesta) => {
            console.log(respuesta);
            console.log("Ya tiene acceso al post");
        })
        .catch((error) => {
            console.log("Error no tiene acceso");
            console.log(error);
        });
};

//funcion para iniciar sesion con google
export const iniciarSesionGoogle = () => {
    const auth = getAuth();
    //el provedor de autenticacion de goggle
    const provider = new GoogleAuthProvider();
    //se llama la funcion se le paasa el atutenticador y provedor
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            //console.log("se registro con google...")
        })
        .catch((error) => {
            console.log(error);
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("su cuenta no es valida...");
        });
};

//funcion para Loguearse con google
export const logueoConGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            const credential = GoogleAuthProvider.credentialFromResult(result);
           //console.log("se registro con google...")
        })
        .catch((error) => {
            console.log(error);
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("su cuenta no es valida...");
        });
};

// funcion para verificar si el usuario esta autenticado en firebase
// esta funcion debe llamarse con await
export const estaAutenticado = async () => {
    const auth = getAuth();
    // devolver una promesa que espera a onAuthStateChanged
    return new Promise((resolve) => {
        // onAuthStateChanged verifica que el usuario esté autenticado
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
};

//funcion para obterner el usuaro cuando haya inico de sesion
export const obtenerUsuarioActual = () => {
    const auth = getAuth();
    return auth.currentUser;
};

//permite serrar la sesion cuando el usuario esta post
export const cerrarSesion = () => {
    console.log("cerrando sesión");
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            console.log(auth.currentUser);
        })
        .catch((error) => {
            console.log(error);
        });
};
