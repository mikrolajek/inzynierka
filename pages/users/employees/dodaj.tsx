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
import { FormSizeDemo } from "../../../components/formAdd";

type Props = {
  feed: UserProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <MyLayout flexCenter={true} selectedField={SelectedPanelField.USERS}>
      <div className="page">
        <CardPanel>
          <Title level={2} style={{ color: "#082444" }}>
            Dodaj pracownika
          </Title>
          <FormSizeDemo />
          <Button
            type="primary"
            shape="round"
            icon={<UserOutlined />}
            size={"large"}
            style={{
              position: "inherit",
              marginLeft: "35%",
              width: "800px",
              left: "50%",
            }}
          >
            Dodaj
          </Button>
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

export default Blog;
