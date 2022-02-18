import React from "react";
import { GetServerSideProps } from "next";
import Post, { PostProps } from "../components/Post";
import { SelectedPanelField } from "../utils/selectedPanel";
import MyLayout from "../components/MyLayout";
import Dashboard from "./dashboard";

type Props = {
  feed: PostProps[];
};

const Index: React.FC<Props> = (props) => {
  return <Dashboard />;
};

export default Index;
