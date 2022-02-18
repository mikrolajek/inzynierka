import React from "react";
import MyLayout from "../../components/MyLayout";
import {
  AlertOutlined,
  ClusterOutlined,
  MailOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Head from "next/head";
import CardWithIcon from "../../components/CardWithIcon";
import SelectedPanel, { SelectedPanelField } from "../../utils/selectedPanel";

const Navi = () => {
  return (
    <>
      <Head>
        <title>Nawigacja</title>
      </Head>
      <MyLayout flexCenter={true} selectedField={SelectedPanelField.NAWIGACJA}>
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardWithIcon
            Icon={UserOutlined}
            title="Pracownicy"
            description="Wszyscy pracownicy"
            href="/users/employees"
          />
          <CardWithIcon
            Icon={TeamOutlined}
            title="Zespoły"
            description="Wszystkie zespoły"
            href="/users/teams"
          />
          <CardWithIcon
            Icon={ClusterOutlined}
            title="Role"
            description="Wszystkie role"
            href="/users/roles"
          />
          <CardWithIcon
            Icon={PieChartOutlined}
            title="Dashboard"
            description="Wszystkie wykresy"
            href="/dashboard"
          />
          <CardWithIcon
            Icon={MailOutlined}
            title="Aktualności"
            description="Wszystkie posty"
            href="/p"
          />
          <CardWithIcon
            Icon={AlertOutlined}
            title="Awarie"
            description="Wszystkie awarie"
            href="/awarie"
          />
        </div>
      </MyLayout>
    </>
  );
};

export default Navi;
