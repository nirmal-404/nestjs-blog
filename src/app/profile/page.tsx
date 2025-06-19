import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { PlusCircle } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <main className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Your Profile</h1>
          </div>
          <Button asChild>
            <Link href={`/post/create`}>
              <PlusCircle className="h-5 w-5 mr-2" />
              Create Post
            </Link>
          </Button>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Your Profile Information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Name:</span> {session?.user?.name}
              </div>
              <div>
                <span className="font-medium">Email:</span>{" "}
                {session?.user?.email}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default ProfilePage;
