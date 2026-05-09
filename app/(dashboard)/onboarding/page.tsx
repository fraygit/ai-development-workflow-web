import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // TODO (Story 3.0): check tenant.onboardingState from the Coordination API.
  // If onboarding is complete, redirect to /dashboard.
  // For now, render the placeholder until the wizard is built.

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-semibold text-zinc-900">
          Welcome to AIDevFlow
        </h1>
        <p className="max-w-sm text-zinc-500">
          Plugin setup wizard coming soon. Your account has been created
          successfully.
        </p>
      </div>
    </div>
  );
}
