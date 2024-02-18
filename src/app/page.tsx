import FileUpload from "@/components/fileUpload/fileUpload";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -transalte-y-1/2 ">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            {isAuth && <Button className="m-2">Go to chats</Button>}
          </div>

          <p className="max-w-xl mt-2 text-lg text-slate-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed purus varius, dignissim nunc at, sagittis urna.
          </p>
          <div className="w-full mt-4">
            {isAuth ? (
              // <h1 className="mt-2 max-w-xl">file upload</h1>
              <FileUpload />
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login in to get started <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
