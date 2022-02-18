import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import Post, { PostProps } from "../../components/Post";
import { SelectedPanelField } from "../../utils/selectedPanel";
import MyLayout from "../../components/MyLayout";
import { Line } from "@ant-design/plots";
import { Efektywnosc } from "../../components/graphs/efektywnosc";
import Title from "antd/lib/typography/Title";
import { CardPanel } from "../../components/styledComponents/components";

const Dashboard = () => {
  return (
    <MyLayout flexCenter={true} selectedField={SelectedPanelField.DASHBOARD}>
      <div className="page">
        <CardPanel>
          <Title level={2} style={{ color: "#082444" }}>
            Efektywność linii produkcyjnych
          </Title>
          <Efektywnosc />
        </CardPanel>
        <style jsx>{`
          .post {
            background: white;
            transition: box-shadow 0.1s ease-in;
          }

          .post:hover {
            box-shadow: 1px 1px 3px #aaa;
          }

          .post + .post {
            margin-top: 2rem;
          }
        `}</style>
      </div>
    </MyLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/feed");
  const feed = await res.json();
  return {
    props: { feed },
  };
};

export default Dashboard;
