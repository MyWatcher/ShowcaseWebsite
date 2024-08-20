import { Team } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ team }: { team: Team }) => {
  const { name, role } = team;
  return (
    <>


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">

    </div>
    <div className="flex flex-col items-center pb-10">
        <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/images/discord.original.jpg" alt="Bonnie image" width={200} height={200}/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{team.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{team.role}</span>
        <div className="flex mt-4 md:mt-6">
        </div>
    </div>
</div>

    </>
  );
};

export default SingleBlog;
