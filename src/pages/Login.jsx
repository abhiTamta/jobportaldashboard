import { Button, Form, Input } from "antd";
import { SiSimplelogin } from "react-icons/si";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from "../store/authLoginReducer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (value)=>{
    dispatch(login(value))
    navigate('/dashboard');
  }
  const onFinishFailed = (errorInfo) =>{
    console.log(errorInfo)
  }

  return (
    <div className="w-full h-screen bg-slate-500 flex justify-center items-center">
      <div className="bg-white p-10 rounded-md shadow-md w-96">
        <div className="flex items-center gap-2 mb-5">
          <SiSimplelogin size={34} />
          <div className="text-2xl font-bold uppercase text-gray-700">Login</div>
        </div>
        <div className="loginForm">
          <Form layout="vertical" name="companyLogin" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.Item name={"userName"} label="Email ID" rules={[{required : true, message : "Enter the valid email id"}]}>
              <Input type="email" className="border-gray-700 h-10 text-lg" />
            </Form.Item>

            <Form.Item name={"userPassword"} label="Password" rules={[{required : true, message : "Enter the valid password"}]}>
              <Input.Password className="border-gray-700 h-10 text-lg" />
            </Form.Item>

            <Button type="primary" htmlType="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login