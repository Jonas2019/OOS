import { SignUp } from "@clerk/nextjs";
import { ScanFaceIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="login-container">
      <SignUp path="/sign-up" />
    </div>
  );
}
