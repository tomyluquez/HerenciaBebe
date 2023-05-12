import React, { useEffect, useState } from "react";
import Admin from "../components/Admin/Admin";
import Users from "../components/Admin/Users";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseApp from "../Firebase/config";
import { Skeleton, Stack } from "@chakra-ui/react";

const auth = getAuth(firebaseApp);

const MisCompras = () => {
  const [userActive, setUserActive] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setLoading(false);
        setUserActive(userFirebase);
      }
    });
  }, []);

  if (loading) {
    return (
      <div style={{ paddingTop: "83px" }}>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </div>
    );
  }

  if (
    userActive.email === "luquez1431@gmail.com" ||
    userActive.email === "celinamur18@gmail.com"
  ) {
    return (
      <div style={{ paddingTop: "83px" }}>
        <Admin user={userActive} />
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "83px" }}>
      <Users user={userActive} />
    </div>
  );
};

export default MisCompras;
