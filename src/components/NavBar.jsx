"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-2">
      <ul className="flex gap-3">
        <li>
          <Link href={"/"} className="font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/destinations"} className="font-semibold">
            Destinations
          </Link>
        </li>
        <li>
          <Link href={"/my-bookings"} className="font-semibold">
            My Bookings
          </Link>
        </li>
        <li>
          <Link href={"/add-destination"} className="font-semibold">
            Add Destination
          </Link>
        </li>
      </ul>
      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          alt="Logo"
          height={150}
          width={150}
        ></Image>
      </div>
      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/profile"} className="font-semibold">
            Profile
          </Link>
        </li>
        {isPending ? (
          <>
            <Spinner className="mr-2" />
          </>
        ) : user ? (
          <>
            <li>
              <Avatar size="sm">
                <Avatar.Image alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </li>
            <li>
              <Button
                variant="danger"
                className="rounded-none"
                onClick={async () => await authClient.signOut()}
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/login"} className="font-semibold">
                Login
              </Link>
            </li>
            <li>
              <Link href={"/signup"} className="font-semibold">
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
