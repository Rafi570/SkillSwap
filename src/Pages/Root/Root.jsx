import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../Loading/Loading";

const Root = () => {
  const navigation = useNavigation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow max-w-7xl mx-auto w-full pt-20 ">
        {navigation.state === "loading" ? (
          <Loading />
        ) : (
          <Outlet /> 
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Root;
