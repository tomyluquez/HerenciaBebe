import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import firebaseApp from "../Firebase/config";

const setOrders = async (pedidoFinal) => {
  const firestore = getFirestore(firebaseApp);
  const docRef = doc(firestore, `orders/${pedidoFinal.uid}`);
  const docSnap = await getDoc(docRef);
  let result;
  if (docSnap.exists()) {
    // Si el documento ya existe, utiliza updateDoc para agregar el nuevo pedido al array existente
    try {
      await updateDoc(docRef, {
        pedidoFinal: arrayUnion(pedidoFinal),
      });
      result = "creado";
    } catch (e) {
      result = "error";
    }
  } else {
    // Si el documento no existe, utiliza setDoc para crear un nuevo documento con el primer pedido
    try {
      await setDoc(docRef, {
        pedidoFinal: [pedidoFinal],
      });
      result = "creado";
    } catch (e) {
      result = "error";
    }
  }
  return result;
};

export default setOrders;
