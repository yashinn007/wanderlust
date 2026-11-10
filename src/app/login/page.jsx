"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "../../lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
    });

    console.log(data, error);
    if (data) {
      redirect("/");
    }
    if (error) {
      toast(" Something went wrong!");
    }
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="text-2xl font-semibold my-10 text-center">
        Login your Account
      </h2>
      <Card className="border rounded-none max-w-96 mx-auto">
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          {/* email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          {/* password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className="rounded-none w-full">
              Login
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
