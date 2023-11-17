import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="min-h-[90vh]">
      <h1>Dashboard</h1>
      <p>{user?.name}</p>
      <Image src={user?.image} alt={user?.name} width={200} height={200} />
    </div>
  );
};

export default Page;
