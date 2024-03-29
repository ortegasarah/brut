import SpotifyPlayer from "react-spotify-web-playback";
import { IState, ITrack } from "../../types";
import { useState } from "react";
interface IProps {
  token: string | null;
  tracks: Array<string>;
  setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
}

const Controls: React.FC<IProps> = ({ token, tracks, setTrack }) => {
  const [play, setPlay] = useState(false);
  
  return (
    <>
      <SpotifyPlayer
        token={token}
        uris={tracks}
        hideCoverArt={true}
        inLineVlume={false}
        hideAttribution={true}
        play={play}
        layout={'compact'}
        styles={{
          trackArtistColor: "#fff",
          trackNameColor: "#fff",
          sliderColor: "#fff",
        }}
        callback={(state: IState) => {
          setTrack(state.track);
          if (!state.isPlaying) {
            setPlay(true);
          }
        }}
      />
    </>
  );
};

export default Controls;
