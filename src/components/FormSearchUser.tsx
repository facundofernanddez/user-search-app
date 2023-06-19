"use client";
import { SearchIcon } from "@/components/icons/SearchIcon";

export const FormSearchUser = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.username.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-2 items-center bg-blue-900 p-4 rounded-xl mb-6"
    >
      <span className="min-w-[20px]">
        <SearchIcon className="fill-blue-500" />
      </span>
      <input
        name="username"
        type="text"
        placeholder="Search Github username..."
        className="flex-1 h-14 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white placeholder-white"
      />
      <button className="bg-blue-500 rounded-lg p-4 text-white font-bold">
        Search
      </button>
    </form>
  );
};
