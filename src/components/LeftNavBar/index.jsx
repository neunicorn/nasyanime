import {
  Archive,
  ChatDots,
  GearSix,
  House,
  SignOut,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const LeftNavBar = ({ user }) => {
  return (
    <section className="rounded-xl overflow-hidden w-1/3 xl:w-1/4 relative">
      <div className="flex flex-col">
        <div className="w-full h-[100px]">
          <Image
            src={user?.image}
            alt={user?.name}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <Image
          src={user?.image}
          alt={user?.name}
          width={100}
          height={100}
          className="rounded-full object-cover absolute top-8 left-0 right-0 mx-auto"
        />
        <h3 className="mx-auto mt-10 font-semibold text-base sm:text-xl text-slate-800">
          {user?.name}
        </h3>
        <p className="mx-auto text-sm text-slate-500">@baehq12</p>
      </div>
      <div className="border-[1px] border-slate-200 my-5 px-2"></div>
      <div>
        <Link href="/users/dashboard">
          <div className="flex gap-4 p-4">
            <House size={24} />
            <p>Home</p>
          </div>
        </Link>
        <Link href="/users/dashboard/collection">
          <div className="flex gap-4 p-4">
            <Archive size={24} />
            <p>My Anime List</p>
          </div>
        </Link>
        <Link href="/users/dashboard/comments">
          <div className="flex gap-4 p-4">
            <ChatDots size={24} />
            <p>My Comment</p>
          </div>
        </Link>
        <div className="flex gap-4 p-4">
          <GearSix size={24} />
          <p>Settings</p>
        </div>
        <div className="flex gap-4 p-4">
          <SignOut size={24} />
          <p>Sign Out</p>
        </div>
        <div className="text-xs text-slate-400 m-2">
          privacy &#183; terms &#183; more &#183; nasyanime &copy; 2023
        </div>
      </div>
    </section>
  );
};

export default LeftNavBar;
