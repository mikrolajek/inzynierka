import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

type SizeType = Parameters<typeof Form>[0]["size"];

export const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
    >
      <Form.Item label="Imię i nazwisko">
        <Input />
      </Form.Item>
      <Form.Item label="Adres e-mail">
        <Input />
      </Form.Item>
      <Form.Item label="Zespół">
        <TreeSelect
          treeData={[
            {
              title: "Magazynierzy",
              value: "light",
              children: [{ title: "Bamboo", value: "bamboo" }],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Rola">
        <TreeSelect
          treeData={[
            {
              title: "Magazynier",
              value: "light",
              children: [{ title: "Bamboo", value: "bamboo" }],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Dodany w dniu">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Numer identyfikacyjny">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Czy teraz obecny?" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  );
};
