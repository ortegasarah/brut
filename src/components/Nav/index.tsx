import { redirectToAuthCodeFlow } from "../../auth";
import { Button, H1, Navbar, Profile } from "./styles";

interface IProps {
  profile?: string | null;
}
const Nav: React.FC<IProps> = ({ profile }) => {
  const cliendId = import.meta.env.VITE_CLIENT_ID;

  const handleClick = async () => {
    await redirectToAuthCodeFlow(cliendId);
  };

  return (
    <>
      <Navbar>
        <H1><a href="/">BRUTO</a></H1>

        {!profile ? (
          <Button onClick={handleClick}>Login</Button>
        ) : (
          <Profile profile={profile} />
        )}
      </Navbar>
    </>
  );
};

export default Nav;
