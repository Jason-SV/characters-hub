import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="flex flex-row justify-between items-center h-12 w-[100%] bg-mint-three fixed z-50 top-0">
      <Link href={"/home"} className="h-full flex items-center">
        <button className="w-48 flex justify-center">
            <Image src={'/Image/CHub.png'} alt="CHub" width={80} height={48}/>
        </button>
      </Link>
      <div className="flex flex-row h-full">
        <Link href={"/home"} className="border-mint-four border-l-2 px-8 bg-mint-three hover:bg-mint-four hover:text-white h-full flex items-center">
          <button className="w-[80px]">Sign-in</button>
        </Link>
        <Link href={"/home"} className="border-mint-four border-l-2 px-8 bg-mint-three hover:bg-mint-four hover:text-white h-full flex items-center">
          <button className="w-[80px]">Sign-up</button>
        </Link>
        <Link href={"/home"} className="border-mint-four border-l-2 px-8 bg-mint-three hover:bg-mint-four hover:text-white h-full flex items-center">
          <button className="w-[80px]">Profile</button>
        </Link>
      </div>
    </div>
  );
}
