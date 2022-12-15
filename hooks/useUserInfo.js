import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function useUserInfo() {
  const { data: session, status: sessionStatus } = useSession();
  const [userInfo, setUserInfo] = useState(null);
  const [status, setStatus] = useState("loading");

  function getUserInfo() {
    if (sessionStatus === "loading") {
      console.log("loading...");
      return;
    }
    if (sessionStatus === "unauthenticated") {
      console.log("unauthenticated", sessionStatus, session);
      setStatus("unauthenticated");
      return;
    }

    console.log("getting user info");
    console.log("id:", session.user.id, " email:", session.user.email);
    fetch("/api/users?id=" + session.user.id).then((response) => {
      response.json().then((json) => {
        setUserInfo(json.user);
        setStatus("authenticated");
        console.log("set status authenticated, user json: ", json.user);
      });
    });
  }

  useEffect(() => {
    getUserInfo();
  }, [sessionStatus]);

  return { userInfo, setUserInfo, status };
}
