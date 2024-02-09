import axios from "axios";
import { useEffect, useState } from "react";
import Login from "../Login";
import Nav from "../Nav";
import Trackinfo from "../Trackinfo";
import { getAccessToken } from "../../auth";
import { GlobalStyle } from "../../styles";
import { Container, Side, TrackViewer } from "./style";

function App() {
  const GlobalStyleProxy: any = GlobalStyle;
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<string | null>(null);
  const [playlists, setPlaylists] = useState([])

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if (code && !token) {
      getToken();
    }
    if (token) {
      getUserInfo();
      getPlaylist()
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
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    });
    setProfile(data.images[0].url);
  };


  const getPlaylist = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/users/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    });
    const playlists = data.map(({name, id}: {name: String, id:number}) => {
      return {name, id}
    })
    setPlaylists(playlists)
  };



  if (!token) {
    return (
      <>
      <GlobalStyleProxy/>
        <Login />
      </>
    );
  } else {
    return (
      <>
      <Container>
        <Nav profile={profile} />
        
        <TrackViewer>
        <Trackinfo />
        </TrackViewer>
        <Side />
        </Container>
      </>
    );
  }
}

export default App;
