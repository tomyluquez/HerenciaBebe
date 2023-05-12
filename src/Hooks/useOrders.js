import firebaseApp from "../Firebase/config";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

const useOrders = async (uid) => {
  let docRef;
  let docCifrada;
  let orders;
  if (uid === "all") {
    docRef = collection(firestore, "orders");
    docCifrada = await getDocs(docRef);
    orders = docCifrada.docs.map((doc) => doc.data());
  } else {
    docRef = doc(firestore, `orders/${uid}`);
    docCifrada = await getDoc(docRef);
    orders = docCifrada.data();
  }

  return orders;
};

export default useOrders;
