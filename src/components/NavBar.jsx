import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="container mx-auto flex justify-between py-4 px-2">
      <ul className="flex gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destinations"}>Destinations</Link>
        </li>
        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
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
      <ul className="flex gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/signup"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
