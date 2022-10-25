import { NextPage } from "next";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import { Data } from "use-lanyard";

interface Props {
  data: Data | undefined;
  discordID: string;
}

const DiscordAvatar: NextPage<Props> = ({ data, discordID }) => {
  if (!data) {
    return (
      <div className="indicator avatar mx-auto animate-pulse">
        <span className="indicator-bottom badge-secondary badge indicator-item right-5 bottom-4 h-7 w-7 border-4 border-base bg-slate-500"></span>
        <div className="h-32 w-32 rounded-full bg-gray-300" />
      </div>
    );
  }

  console.clear();

  return (
    <div className="indicator mx-auto">
      <span
        data-tip
        data-for="discordStatus"
        className={`indicator-bottom badge-secondary badge indicator-item right-5 bottom-4 h-7 w-7 border-4 border-base ${
          data?.discord_status === "offline" ? "bg-slate-500" : "bg-green"
        }`}
      ></span>
      <div className="h-32 w-32 rounded-full">
        <Image
          src={`https://cdn.discordapp.com/avatars/${discordID}/${data?.discord_user.avatar}.png?size=2048`}
          alt="plskz"
          width="512"
          height="512"
          className="rounded-full"
        />
      </div>

      <ReactTooltip id="discordStatus" place="top" effect="float">
        {data?.discord_status === "offline" ? "Offline" : "Online"}
      </ReactTooltip>
    </div>
  );
};

export default DiscordAvatar;
