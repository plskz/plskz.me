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

  console.log("%cHi!", "color: blue; font-size: 28px", "\n\nI love raccoons!");

  return (
    <>
      <Head>
        <title>Zai Santillan</title>
        <meta name="author" content="Zai Santillan (Palskie)" />
        <meta name="twitter:site" content="@xiaskii" />
        <meta name="twitter:creator" content="@xiaskii" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="Software Engineer, Changing the world, one project at a time."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Zai Santillan" />
        <meta property="og:site_name" content="Zai Santillan" />
        <meta
          property="og:description"
          content="Software Engineer, Changing the world, one project at a time."
        />
        <meta property="og:url" content="https://plskz.me" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/dNiw55j.png" />
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
