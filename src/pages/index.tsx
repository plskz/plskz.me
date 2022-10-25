import type { NextPage } from "next";
import Head from "next/head";

import DiscordAvatar from "@components/DiscordAvatar";
import Intro from "@components/Intro";
import Socials from "@components/Socials";

import { useLanyard } from "use-lanyard";

const discordID = "90431685472038912";

const Home: NextPage = () => {
  const { data } = useLanyard(discordID);
  const discordUsername = !data
    ? "Aai#0000"
    : data?.discord_user.username + "#" + data?.discord_user.discriminator;

  return (
    <>
      <Head>
        <title>Zai Santillan</title>
        <meta
          name="description"
          content="Zai Santillan, Software Engineer, Changing the world, one project at a time."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Zai Santillan (Palskie)" />
        <meta property="og:site_name" content="Zai Santillan" />
      </Head>

      <main className="flex h-screen items-center justify-center px-5">
        <div className="card w-128 border-x-4 border-indigo-500 p-10 shadow-xl md:bg-base-100">
          <DiscordAvatar data={data} discordID={discordID} />
          <div className="card-body items-center text-center">
            <Intro name="Palskie" description="Chaeyoung" />
            <Socials discordUsername={discordUsername} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
