import { redirectToAuthCodeFlow } from "../../auth";

const Nav = () => {
  const cliendId = import.meta.env.VITE_CLIENT_ID;

  const handleClick = async () => {
    await redirectToAuthCodeFlow(cliendId);
  };
  return (
    <>
      <h1>Brut</h1>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Nav;
