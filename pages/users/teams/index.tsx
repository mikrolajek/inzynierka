import React from "react";
import { GetServerSideProps } from "next";
import Team, { TeamProps } from "../../../components/Team";
import { SelectedPanelField } from "../../../utils/selectedPanel";
import MyLayout from "../../../components/MyLayout";
import { Table, Tag, Space, Button } from "antd";
import TeamCard from "../../../components/TeamCard";
import { CardPanel } from "../../../components/styledComponents/components";
import Title from "antd/lib/typography/Title";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";

type Props = {
  feed: TeamProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <MyLayout flexCenter={true} selectedField={SelectedPanelField.TEAMS}>
      <Button
        type="primary"
        shape="round"
        icon={<TeamOutlined />}
        size={"large"}
        style={{ position: "absolute", left: "50%" }}
      >
        Dodaj zespół
      </Button>
      <div className="page">
        <CardPanel>
          <Title level={2} style={{ color: "#082444" }}>
            Zespoły
          </Title>
          {props.feed.map((team) => (
            <TeamCard team={team} />
          ))}
        </CardPanel>
      </div>
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
    </MyLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/teamsfeed");
  const feed = await res.json();
  return {
    props: { feed },
  };
};

export default Blog;
