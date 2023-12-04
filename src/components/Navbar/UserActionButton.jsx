"use client";
import Link from "next/link";
import Image from "next/image";
import defaultAvatar from "@/assets/img/default-user.png";
import { useState } from "react";
import {
  GearSix,
  Info,
  SignIn,
  SignOut,
  Sun,
  User,
} from "@phosphor-icons/react";

const UserActionButton = ({ user }) => {
  const [isShow, setIsShow] = useState("hidden");
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  const imageUser = user ? user.image : defaultAvatar;

  const OnClickRender = () => {
    const render = user ? (
      <>
        <Link href={"/users/dashboard"}>
          <div className="bg-white shadow rounded flex justify-center items-center content-evenly gap-3 m-3 py-3 cursor-pointer">
            <Image
              src={user?.image}
              width={32}
              height={32}
              alt="avatar-image"
              className="w-8 rounded-full object-cover"
            />
            <div>
              <p className="text-base text-slate-800">{user.name}</p>
              <p className="text-xs text-slate-600">@baehq12</p>
            </div>
          </div>
        </Link>

        <Link className="w-full" href={"/users/dashboard"}>
          <div className="text-slate-700 flex gap-4 items-center p-2 px-3 my-3 rounded hover:bg-white cursor-pointer">
            <User size={24} />
            <p>Dashboard</p>
          </div>
        </Link>
        <Link className="w-full" href={actionURL}>
          <div className="text-slate-700 flex gap-4 items-center p-2 px-3 my-3 rounded hover:bg-white cursor-pointer">
            <SignOut size={24} />
            <p>{actionLabel}</p>
          </div>
        </Link>
        <div className="border"></div>
        <Link className="w-full" href={"/"}>
          <div className="text-slate-700 flex gap-4 items-center py-2 px-3 my-3 rounded hover:bg-white cursor-pointer">
            <Sun size={24} />
            <p>Theme : Light</p>
          </div>
        </Link>
        <Link className="w-full" href={"/"}>
          <div className="text-slate-700 flex gap-4 items-center py-2 px-3 my-3 rounded hover:bg-white cursor-pointer">
            <GearSix size={24} />
            <p>Settings</p>
          </div>
        </Link>
        <div className="border"></div>
        <Link className="w-full" href={"/"}>
          <div className="text-slate-700 flex gap-4 items-center py-2 px-3 my-3 rounded hover:bg-white cursor-pointer">
            <Info size={24} />
            <p>Info</p>
          </div>
        </Link>
      </>
    ) : (
      <div className="w-[250px]">
        <Link className="w-full" href={actionURL}>
          <div className="text-slate-700 flex gap-4 items-center p-2 px-3 my-3 rounded hover:bg-white cursor-pointer">
            <SignIn size={24} />
            <p>{actionLabel}</p>
          </div>
        </Link>
        <div className="border"></div>
        <Link className="w-full" href={"/"}>
          <div className="text-slate-700 flex gap-4 items-center py-2 px-3 my-3 rounded hover:bg-white cursor-pointer">
            <Sun size={24} />
            <p>Theme : Light</p>
          </div>
        </Link>
        <Link className="w-full" href={"/"}>
          <div className="text-slate-700 flex gap-4 items-center py-2 px-3 my-3 rounded hover:bg-white cursor-pointer">
            <GearSix size={24} />
            <p>Settings</p>
          </div>
        </Link>
        <div className="border"></div>
        <Link className="w-full" href={"/"}>
          <div className="text-slate-700 flex gap-4 items-center py-2 px-3 my-3 rounded hover:bg-white cursor-pointer">
            <Info size={24} />
            <p>Info</p>
          </div>
        </Link>
      </div>
    );

    return render;
  };
  const onClickEvent = (e) => {
    e.preventDefault();
    setIsShow((state) => (state == "hidden" ? "block" : "hidden"));
  };

  return (
    <div className="relative rounded-full bg-slate-200" onClick={onClickEvent}>
      <div className="w-10 rounded-full ring-1 ring-primary cursor-pointer">
        <Image
          src={imageUser}
          className="w-full object-cover rounded-full"
          width={40}
          height={40}
          alt="avatar-image"
        ></Image>
      </div>
      <div
        className={`${isShow} absolute w-[250px] text-center right-0 py-2 bg-slate-50 shadow-lg rounded-lg z-10`}
      >
        <OnClickRender />
        <div className="text-xs text-slate-400 mx-2 my-1">
          privacy &#183; terms &#183; more &#183; nasyanime &copy; 2023
        </div>
      </div>
    </div>
  );
};

export default UserActionButton;
