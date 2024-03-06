import styled from "styled-components";
import astronboywonder from "../../font/astronboywonder.otf";

export const Navbar = styled.header`
  @font-face {
    font-family: "astronboywonder";
    src: url(${astronboywonder});
  }
  width: 100vw;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 2px solid #306db6;
  padding: 1em 1em 1em 0;
  box-sizing: border-box;
`;
export const H1 = styled.h1`
  a {
    @font-face {
      font-family: "astronboywonder";
      src: url(${astronboywonder});
    }
    font-family: "astronboywonder";

    font-size: 2em;
    color: #306db6;
    margin: 0 0 0 0.5em;
  }
    @media (max-width: 800px) {
      margin-top: 4px;
      margin-bottom: 4px;
      font-size: 2em;
    }
  
`;

interface IProfileProps {
  profile: string;
}

export const Profile = styled.img<IProfileProps>`
  border: 2px solid #000;
  background-image: ${(props) => `url(${props.profile})`};
  width: 3em;
  height: 3em;
  background-size: cover;
  filter: grayscale(1);
`;

export const Button = styled.button`
  @font-face {
    font-family: "astronboywonder";
    src: url(${astronboywonder});
  }

  height: 2.5em;
  padding-right: 2em;
  padding-left: 2em;
  border: 0 0 0;
  background: black;
  color: white;
`;
