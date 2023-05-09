import firebaseApp from "../Firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

const users = async (data, isLogin, setError) => {
  let userCredencial;
  try {
    if (isLogin) {
      userCredencial = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.pass
      );
    } else {
      const mailExistente = await fetchSignInMethodsForEmail(auth, data.email);
      if (mailExistente.length === 0) {
        userCredencial = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.pass
        );
      }
      await updateProfile(userCredencial.user, { displayName: data.name });
    }
  } catch (err) {
    setError(true);
  }
};

export default users;
