import { redirectToAuthCodeFlow } from "../../auth";

const Nav = ({profile}) => {

  const cliendId = import.meta.env.VITE_CLIENT_ID;

  const handleClick = async () => {
    await redirectToAuthCodeFlow(cliendId);
  }

  
  return (
    <>
      <h1>Brut</h1>
      {!profile ? (
        <button onClick={handleClick}>Login</button>
      ) : (
        <img src={profile}></img>
      )}
    </>
  );
};

export default Nav;
