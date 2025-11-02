import React from "react";
import Banner from "../../Components/Banner/Banner";
import PopularSkill from "../PopularSkill/PopularSkill";
import { useLoaderData } from "react-router";
import TopRated from "../TopRattion/TopRattion";
import HowItsWork from "../HowItsWork/HowItsWork";

import SkillListings from "../../Components/SkillListings/SkillListings";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <PopularSkill data={data}></PopularSkill>
      <TopRated></TopRated>
      <HowItsWork></HowItsWork>

       <SkillListings></SkillListings>
    </div>
  );
};

export default Home;
