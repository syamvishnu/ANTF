import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  CardContent,
  Card,
  Image,
  FormField,
  Button,
  Form,
} from "semantic-ui-react";
import { signinUser } from "../features/auth/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    penno: "",
    password: "",
  });

  const { penno, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="login">
      <Card>
        <Image
          src="https://t3.ftcdn.net/jpg/06/10/81/68/360_F_610816813_URYUqftNPfZT42WoweUNRBLxYAp9lLE1.jpg"
          wrapped
          ui={false}
        />
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <label>PEN Number</label>
              <input
                placeholder="PEN Number"
                id="penno"
                value={penno}
                name="penno"
                onChange={handleChange}
              />
            </FormField>
            <FormField>
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </FormField>
            <Button type="submit">Submit</Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
