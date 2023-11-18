"use client";
import Link from "next/link";
import Image from "next/image";
import defaultAvatar from "@/assets/img/default-user.png";
import { useState } from "react";

const UserActionButton = ({ user }) => {
  const [isShow, setIsShow] = useState("hidden");
  const actionLabel = user ? "sign out" : "sign in";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  const imageUser = user ? user.image : defaultAvatar;

  const OnClickRender = () => {
    const render = user ? (
      <>
        <div>
          <Link href={"/users/dashboard"}>
            <div className="bg-white shadow rounded flex justify-center items-center content-evenly gap-2 m-3 py-2 cursor-pointer">
              <Image
                src={user?.image}
                width={32}
                height={32}
                className="w-8 rounded-full object-cover"
              />
              <p className="text-sm">{user.name}</p>
            </div>
          </Link>
        </div>
        <div className="text-slate-700 m-3 py-2 rounded hover:bg-white cursor-pointer">
          <Link href={"/users/dashboard"}>Dashboard</Link>
        </div>
        <div className="text-slate-700 py-2 m-3 rounded hover:bg-white cursor-pointer">
          <Link href={actionURL}>{actionLabel}</Link>
        </div>
      </>
    ) : (
      <div className="text-slate-700 py-2 m3- rounded hover:bg-white cursor-pointer">
        <Link href={actionURL}>{actionLabel}</Link>
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
