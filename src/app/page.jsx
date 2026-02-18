
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
   <div>
    <Button className="flex items-center justify-center">Hello</Button>
    <UserButton/>
   </div>
  );
}
