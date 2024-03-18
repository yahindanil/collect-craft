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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  return (
    <div className="wrapper">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Card className="w-full mx-auto">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <form>
              <CardContent>
                <div className="grid w-full items-center gap-4 mb-3">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="emailLogin">Email:</Label>
                    <Input
                      id="emailLogin"
                      placeholder="my.email@gmail.com"
                      name="emailLogin"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="passwordLogin">Password:</Label>
                    <Input
                      id="passwordLoginLogin"
                      placeholder="*********"
                      name="passwordLogin"
                      type="password"
                      required
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button formAction={login}>Log in</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card className="w-full mx-auto">
            <CardHeader>
              <CardTitle>Register</CardTitle>
            </CardHeader>
            <form>
              <CardContent>
                <div className="grid w-full items-center gap-4 mb-3">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="emailSignup">Email:</Label>
                    <Input
                      id="emailSignup"
                      placeholder="my.email@gmail.com"
                      name="emailSignup"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="passwordSignup">Password:</Label>
                    <Input
                      id="passwordSignup"
                      placeholder="*********"
                      name="passwordSignup"
                      type="password"
                      required
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button formAction={signup}>Sign up</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
