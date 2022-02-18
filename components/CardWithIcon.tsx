import React, { FC } from "react";
import { Card, Spin } from "antd";
import styled from "styled-components";
import Link from "next/link";

const { Meta } = Card;

interface ICardWithIcon {
  Icon: React.ElementType;
  title: string;
  href: string;
  description?: string;
  //spin?: Spin;
}
export const CardWithIcon: FC<ICardWithIcon> = ({
  Icon,
  title,
  href,
  description,
}) => {
  return (
    <Link href={href}>
      <a style={{ display: "flex", flexWrap: "wrap" }}>
        <Card$
          bordered={false}
          cover={
            <Icon
              style={{
                color: "#1890FF",
                fontSize: "70px",
                margin: "35px 0 10px 0",
              }}
              size={5}
              height={1000}
            />
          }
        >
          <Flex>
            <Meta$
              title={title}
              {...(description ? { description: description } : null)}
            />
          </Flex>
        </Card$>
      </a>
    </Link>
  );
};

const Card$ = styled(Card)`
  transition: ease-in-out 0.15s transform, ease-in-out 0.15s background-color;
  min-width: 225px;
  margin: 10px 10px 10px 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.035);
    background-color: #f7fbff;
  }
`;

const Meta$ = styled(Meta)`
  .ant-card-meta-detail {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  width: 220px;
`;

export default CardWithIcon;
