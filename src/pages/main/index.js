import React from "react";
import { Layout } from "../../components";
import BottomSection from "../../components/main/BottomSection";
import TopSection from "../../components/main/TopSection";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="wrapper">
          <TopSection />
        </div>
        <BottomSection />
      </Layout>
    </>
  );
};

export default Home;
