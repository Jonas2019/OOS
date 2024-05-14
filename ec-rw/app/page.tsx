import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChefHat } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click Me</Button>
      <ChefHat size={64} />
    </main>
  );
}
