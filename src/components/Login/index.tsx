import Nav from "../Nav";
import { Container, Right, Left, P } from "./style";

const Login: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
        <Left>
        <P>music player</P>
        <P>for u</P>

        </Left>
        <Right>
        <P>for fun only</P>

          <P>* spotify account required</P>
        </Right>
      </Container>
    </>
  );
};

export default Login;
