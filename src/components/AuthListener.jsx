import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "../Firebase/config";
import { setUser, notLoginUser } from "../redux/userSlices";

const auth = getAuth(firebaseApp);
const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userFirebase) => {
      userFirebase
        ? dispatch(
            setUser({
              displayName: userFirebase.displayName,
              email: userFirebase.email,
              uid: userFirebase.uid,
            })
          )
        : dispatch(notLoginUser());
    });
  }, []);

  return null;
};

export default AuthListener;
