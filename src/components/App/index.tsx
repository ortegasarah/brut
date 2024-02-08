import axios from "axios";
import { useEffect, useState } from "react";
import Login from "../Login";
import Nav from "../Nav";
import Trackinfo from "../Trackinfo";
import { getAccessToken } from "../../auth";

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<string | null>(null);

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if (code && !token) {
      getToken();
    }
    if (token) {
      getUserInfo();
    }
  }, [token]);

  const getToken = async () => {
    if (code) {
      const accessToken = await getAccessToken(clientId, code);
      setToken(accessToken);
    }
  };

  const getUserInfo = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/me", {
      headers : {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    });
    setProfile(data.images[0].url);
  };

  if (!token) {
    return (
      <>
        <Login />
      </>
    );
  } else {
    return (
      <>
        <Nav profile = {profile} /> 
        <Trackinfo />
      </>
    );
  }
}

export default App;
