import { Button, Form, Input, message } from 'antd'
import React from 'react'
import "../App.css"
import httpClient from '../api/httpClient'
import { useNavigate } from 'react-router';

export default function MaintenanceLoginPage(props) {
    const { setIsMaintenance } = props;
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        try {
            const res = await httpClient.post("/settings/maintenance-key/verify", { key: data?.key })

            if (res?.status === 200 && res?.data?.code === 200 && res?.data?.data?.isValid) {
                localStorage.setItem("maintenance_key", data?.key);

                setIsMaintenance(false);
                navigate("/");
            } else {
                message.error("Incorrect Key!");
            }
        } catch (error) {
            message.error(error?.message || "Internal Server Error!");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-[25rem] w-full p-[1.25rem] bg-white border rounded-xl shadow-xl">
                <h1 className="text-2xl font-bold text-center">LOGIN</h1>
                <Form layout="vertical" size="large" onFinish={handleSubmit}>
                    <Form.Item
                        label={<div style={{ fontWeight: "bold" }}>Secret Key</div>}
                        name={"key"}
                        rules={[{ required: true, message: "Secret Key must not be empty!" }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <div className="flex justify-center">
                            <Button htmlType="submit" className="std-btn">
                                Submit
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}
