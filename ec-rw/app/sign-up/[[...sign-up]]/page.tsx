import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="login-container">
      <SignUp path="/sign-up" />
    </div>
  );
}
