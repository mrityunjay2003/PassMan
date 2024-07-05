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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "./ui/progress";

const Hero = () => {
  return (
    <Card className="w-[500px] ">
      <CardHeader>
        <CardTitle>Save a Password</CardTitle>
        <CardDescription>Save your password securely</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Username/e-mail</Label>
              <Input id="email" placeholder="Enter the usermame/email." />
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter the password."
              />
            </div>
            <div className=" flex gap-1">
              <Progress value={33} />
              <Progress value={0} />
              <Progress value={0} />
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Collection" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Social">Social</SelectItem>
                <SelectItem value="Important">Important</SelectItem>
                <SelectItem value="Payments">Payments</SelectItem>
                <SelectItem value="Gaming">Gaming</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="default">Save</Button>
      </CardFooter>
    </Card>
  );
};

export default Hero;
