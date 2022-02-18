import { User } from "@prisma/client";
import { Row, Col, Divider } from "antd";

const style = { padding: "8px 0" };

interface ContactCardProps {
  user: User;
}

export default function ContactCard(props: ContactCardProps) {
  return (
    <div className="border rounded-lg p-4 flex">
      <Divider orientation="left" style={{ color: "#082444" }}>
        {props.user.name}
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={2}>
          <div style={style}>
            <b>ID: </b>
            {props.user.id}
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <b>Name: </b>
            {props.user.name}
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <b>E-mail: </b>
            {props.user.email}
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <b>Obecny: </b>
            {props.user.obecny.toString()}
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <b>Stanowisko: </b>
            {props.user.stanowiskoId}
          </div>
        </Col>
      </Row>
    </div>
  );
}
