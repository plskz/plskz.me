import { NextPage } from "next";

interface Props {
  name: string;
  description: string;
}

const Intro: NextPage<Props> = ({ name, description }) => {
  return (
    <>
      <h2 className="card-title bg-gradient-to-r from-[#cba6f7] to-[#f2cdcd] bg-clip-text text-4xl font-extrabold text-transparent">
        {name}
      </h2>
      <p>{description}</p>
    </>
  );
};

export default Intro;
