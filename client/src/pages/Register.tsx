import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const user = credentials.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Register now to secure your Passwords.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                placeholder="Your e-mail address."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Choose a strong Master Password."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex  justify-around">
          <Link to={"/login"}>
            <Button variant="outline">Login instead?</Button>
          </Link>
          <Button type="submit">Register</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Register;
