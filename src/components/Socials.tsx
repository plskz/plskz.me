import { NextPage } from "next";
import toast, { Toaster } from "react-hot-toast";
import {
  SiDiscord,
  SiGithub,
  SiNpm,
  SiSpotify,
  SiWakatime,
} from "react-icons/si";
import ReactTooltip from "react-tooltip";

interface Props {
  discordUsername: string;
}

const Socials: NextPage<Props> = ({ discordUsername }) => {
  const handleClick = (e: any) => {
    navigator.clipboard.writeText(discordUsername);
    toast.success("Copied to clipboard!", {
      duration: 2000,
    });
  };

  return (
    <div className="mt-5 h-1/4 w-full md:mt-3 lg:mt-3">
      <div className="flex items-center justify-center">
        {/* start socials */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="https://github.com/plskz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="h-10 w-10 duration-300 ease-in-out hover:scale-[1.15]" />
          </a>

          <a
            href="https://wakatime.com/@plskz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWakatime className="h-10 w-10 duration-300 ease-in-out hover:scale-[1.15]" />
          </a>

          <a data-tip data-for="discordHover" onClick={handleClick}>
            <SiDiscord className="h-10 w-10 cursor-pointer duration-300 ease-in-out hover:scale-[1.15]" />
          </a>

          <a
            href="https://open.spotify.com/user/12185348229"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiSpotify className="h-10 w-10 duration-300 ease-in-out hover:scale-[1.15]" />
          </a>

          <a
            href="https://www.npmjs.com/~plskz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiNpm className="h-10 w-10 duration-300 ease-in-out hover:scale-[1.15]" />
          </a>
        </div>
        {/* end socials */}
      </div>
      <ReactTooltip id="discordHover" place="top" effect="float">
        {discordUsername}
      </ReactTooltip>
      <Toaster
        toastOptions={{
          style: {
            background: "#cdd6f4",
          },
        }}
      />
    </div>
  );
};

export default Socials;
