import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import {
  CardContent,
  Card,
  Image,
  Form,
  FormInput,
  FormGroup,
  Button,
} from "semantic-ui-react";
import { registerUser } from "../features/auth/authSlice";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    penno: "",
    password: "",
  });

  const { name, email, penno, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/home")
    }
  }, [user]);

  return (
    <div className="signup">
      <Card style={{ width: "400px" }}>
        <Image
          src="https://t3.ftcdn.net/jpg/05/78/09/92/360_F_578099259_PiNeMuVL8kuYKNsbepxR9z2T2gyNICmT.jpg"
          wrapped
          ui={false}
        />
        <h1>Signup Here</h1>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <FormGroup widths="equal">
              <FormInput
                fluid
                label="Name"
                placeholder="Name"
                id="name"
                value={name}
                name="name"
                onChange={handleChange}
              />
              <FormInput
                fluid
                label="Email"
                placeholder="Email"
                id="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup widths="equal">
              <FormInput
                fluid
                label="PEN Number"
                placeholder="PEN Number"
                id="penno"
                value={penno}
                name="penno"
                onChange={handleChange}
              />
              <FormInput
                fluid
                label="Password"
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;
