import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import httpClient from "../../api/httpClient";
import { SUBMIT_REQUEST_PARTNER } from "../../api/URLs";

const BecomePartner = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const becomePartner = {
    paragraph: "Seeking for Collaboration.",
  };

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await httpClient.post(SUBMIT_REQUEST_PARTNER, data).then(res => res.data).catch(error => { throw error });

      if (res.code === 200) {
        message.success("Form has been submit successfully");
        form.resetFields();
      } else {
        message.error(res.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[80vw] md:max-w-[60vw] w-full">
      <h1 className="mb-2 text-2xl md:text-4xl font-bold text-[#0F69B7]">{t("Become Our Partner")}</h1>
      <p className="pb-4 text-wrap text-base">{t(becomePartner.paragraph)}</p>
      <Form form={form} className="flex flex-col justify-center items-center" onFinish={handleSubmit}>
        <Form.Item
          name={"email"}
          className="w-full"
          rules={[
            { required: true, message: "Email must not be empty!" },
            {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email!'
            }]}
        >
          <Input
            type="text"
            placeholder={t("email")}
            className="w-full px-3 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
          />
        </Form.Item>
        <Form.Item
          name={"reason"}
          className="w-full"
          rules={[
            { required: true, message: "Reason must not be empty!" },
          ]}
        >
          <Input
            type="text"
            placeholder={t("possible_area_of_collaboration")}
            className="w-full px-3 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
          />
        </Form.Item>
        <Form.Item
          className="w-full"
          name={"description"}
          rules={[
            { required: true, message: "Description must not be empty!" },
          ]}
        >
          <TextArea
            type="text"
            rows={7}
            placeholder={t("describ_scope_of_work")}
            className="w-full px-3 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
          />
        </Form.Item>
        <Form.Item
          className="w-full"
        >
          <Button htmlType="submit" loading={loading} className="bg-[#0F69B7] w-full text-white px-4 py-4 rounded-xl">
            {t("submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BecomePartner;

