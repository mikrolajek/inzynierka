import React from "react";
import { GetServerSideProps } from "next";
import Team, { TeamProps } from "../../components/Team";
import { SelectedPanelField } from "../../utils/selectedPanel";
import MyLayout from "../../components/MyLayout";
import { Table, Tag, Space, Button, Empty, Steps, Card } from "antd";
import TeamCard from "../../components/TeamCard";
import { CardPanel } from "../../components/styledComponents/components";
import Title from "antd/lib/typography/Title";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

type Props = {
  feed: TeamProps[];
};

const Blog: React.FC<Props> = (props) => {
  const { Step } = Steps;
  return (
    <MyLayout flexCenter={true} selectedField={SelectedPanelField.TEAMS}>
      <div className="page">
        <Button
          type="primary"
          shape="round"
          icon={<TeamOutlined />}
          size={"large"}
          style={{ position: "absolute", left: "50%" }}
        >
          Zgłoś awarię
        </Button>
        <Title level={2} style={{ color: "#082444" }}>
          Awarie bieżące
        </Title>
        <CardPanel>
          <Title level={3}>Stanowisko 2.</Title>
          <Steps>
            <Step status="finish" title="Zgłoszenie" icon={<UserOutlined />} />
            <Step
              status="finish"
              title="Weryfikacja"
              icon={<SolutionOutlined />}
            />
            <Step status="finish" title="Naprawa" icon={<LoadingOutlined />} />
            <Step
              status="finish"
              title="Zakończenie"
              icon={<SmileOutlined />}
            />
          </Steps>
        </CardPanel>
        <CardPanel>
          <Title level={3}>Stanowisko 6.</Title>
          <Steps>
            <Step status="finish" title="Zgłoszenie" icon={<UserOutlined />} />
            <Step
              status="finish"
              title="Weryfikacja"
              icon={<SolutionOutlined />}
            />
            <Step status="process" title="Naprawa" icon={<LoadingOutlined />} />
            <Step status="wait" title="Zakończenie" icon={<SmileOutlined />} />
          </Steps>
        </CardPanel>
        <CardPanel>
          <Title level={3}>Stanowisko 1.</Title>
          <Steps>
            <Step status="finish" title="Zgłoszenie" icon={<UserOutlined />} />
            <Step
              status="wait"
              title="Weryfikacja"
              icon={<SolutionOutlined />}
            />
            <Step status="wait" title="Naprawa" icon={<LoadingOutlined />} />
            <Step status="wait" title="Zakończenie" icon={<SmileOutlined />} />
          </Steps>
        </CardPanel>
        <CardPanel>
          <Title level={3}>Stanowisko 4.</Title>
          <Steps>
            <Step status="finish" title="Zgłoszenie" icon={<UserOutlined />} />
            <Step
              status="finish"
              title="Weryfikacja"
              icon={<SolutionOutlined />}
            />
            <Step status="process" title="Naprawa" icon={<LoadingOutlined />} />
            <Step status="wait" title="Zakończenie" icon={<SmileOutlined />} />
          </Steps>
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
