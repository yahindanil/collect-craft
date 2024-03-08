import { login, signup } from "./actions";
import * as React from "react";
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

export default function LoginPage() {
  return (
    <div className="wrapper">
      <Card className="w-[350px] mx-auto mt-[40px]">
        <CardHeader>
          <CardTitle>Login/Register</CardTitle>
        </CardHeader>
        <form>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email:</Label>
                <Input
                  id="email"
                  placeholder="my.email@gmail.com"
                  name="email"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">password:</Label>
                <Input
                  id="password"
                  placeholder="*********"
                  name="password"
                  type="password"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" formAction={login}>
              Log in
            </Button>
            <Button variant="outline" formAction={signup}>
              Sign up
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
