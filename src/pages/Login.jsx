import { Button, Form, Input, message } from "antd";
import { SiSimplelogin } from "react-icons/si";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (value) => {
    try {
      messageApi.success("Login successful!");
    } catch (error) {
      messageApi.error(error);
    }

  }

  const onFinishFailed = (errorInfo) => {
    messageApi.error("Please fix the errors and try again.");
  };

  return (
    <div className="w-full h-screen bg-slate-500 flex justify-center items-center">
      {contextHolder}
      <div className="bg-white p-10 rounded-md shadow-md w-96">
        <div className="flex items-start gap-2 mb-5">
          <SiSimplelogin size={34} />
          <div className="text-2xl font-bold uppercase text-gray-700">Login</div>
        </div>
        <div className="loginForm">
          <Form layout="vertical" name="companyLogin" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.Item
              name={"userName"}
              label="Email ID"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}>
              <Input type="email" className="border-gray-700 h-10 text-lg" />
            </Form.Item>

            <Form.Item name={"userPassword"} label="Password" rules={[{ required: true, message: "Please enter your password!" }]}>
              <Input.Password className="border-gray-700 h-10 text-lg" />
            </Form.Item>

            <Button className="h-auto w-full bg-orange-700 text-white py-2 text-lg" htmlType="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login