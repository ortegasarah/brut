import { useEffect, useState } from "react";
import Login from "../Login";
import Trackinfo from "../Trackinfo";
import { getAccessToken } from "../../auth";

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    getToken();
  });

  const getToken = async () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      const accessToken = await getAccessToken(clientId, code);
      setToken(accessToken);
    }
  };

  if (!token) {
    return (
      <>
        <Login/>
      </>
    );
  } else {
    <Trackinfo/>;
  }
}

export default App;
