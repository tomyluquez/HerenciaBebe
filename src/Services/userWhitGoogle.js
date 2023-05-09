import firebaseApp from "../Firebase/config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const userWhitGoogle = async (isLogin, setError) => {
  try {
    if (isLogin) {
      await signInWithPopup(auth, provider);
    }
  } catch (err) {
    setError(err);
  }
};

export default userWhitGoogle;
