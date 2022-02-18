import React from "react";
import { GetServerSideProps } from "next";
import User, { UserProps } from "../../../components/User";
import { SelectedPanelField } from "../../../utils/selectedPanel";
import MyLayout from "../../../components/MyLayout";
import { Table, Tag, Space, Button } from "antd";
import ContactCard from "../../../components/UserCard";
import { CardPanel } from "../../../components/styledComponents/components";
import Title from "antd/lib/typography/Title";
import { UserOutlined } from "@ant-design/icons";

type Props = {
  feed: UserProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <MyLayout flexCenter={true} selectedField={SelectedPanelField.USERS}>
      <Button
        type="primary"
        shape="round"
        icon={<UserOutlined />}
        size={"large"}
        style={{ position: "absolute", left: "50%" }}
        href="/users/employees/dodaj"
      >
        Dodaj użytkownika
      </Button>
      <div className="page">
        <CardPanel>
          <Title level={2} style={{ color: "#082444" }}>
            Pracownicy
          </Title>
          {props.feed.map((user) => (
            <ContactCard user={user} />
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
  const res = await fetch("http://localhost:3000/api/usersfeed");
  const feed = await res.json();
  return {
    props: { feed },
  };
};

export default Blog;
