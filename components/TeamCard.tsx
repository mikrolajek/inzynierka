import { Team } from "@prisma/client";
import { Row, Col, Divider } from "antd";

const style = { padding: "8px 0" };

interface ContactCardProps {
  team: Team;
}

export default function TeamCard(props: ContactCardProps) {
  return (
    <div className="border rounded-lg p-4 flex">
      <Divider orientation="left" style={{ color: "#082444" }}>
        {props.team.name}
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={2}>
          <div style={style}>
            <b>ID: </b>
            {props.team.id}
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <b>Name: </b>
            {props.team.name}
          </div>
        </Col>
      </Row>
    </div>
  );
}
