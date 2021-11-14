import {
    doc,
    addDoc,
    getDocs,
    collection,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-app";

// conectar a firebase
// enviar datos para crear
// verificar que se creo con then y el catch

export const listarNotas = async () => {
    const querySnapshot = await getDocs(collection(db, "notas"));

    return querySnapshot.docs.map((doc) => {
        // devuelve un oobjeto en formato:
        // {id: 'xx', fecha: '', titulo: '', cuerpo: '' }
        return { id: doc.id, ...doc.data() };
    });
};

export const consultarNota = async (id) => {
    // consultar la nota con este id en firebase
    // devolverla

    let nota = null;

    return nota;
};

export const guardarNota = async function (titulo, cuerpo) {
    return new Promise((resolve, reject) => {
        addDoc(collection(db, "notas"), {
            titulo: titulo,
            cuerpo: cuerpo,
            fecha: new Date().toLocaleString(),
        })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            })
            .finally(() => {});
    });
};

export const actualizarNota = async (id, titulo, cuerpo) => {
    const nota = document(db, "notas", id);

    return await updateDoc(nota, {
        titulo: titulo,
        cuerpo: cuerpo,
        fecha: new Date().toLocaleString(),
    });
};

export const eliminarNota = async (id) => {
    return new Promise((resolve, reject) => {
        deleteDoc(doc(db, "notas", id))
            .then(() => {
                resolve(true);
            })
            .catch(() => {
                reject(false);
            });
    });
};
