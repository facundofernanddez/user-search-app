import { SearchIcon } from "@/components/icons/SearchIcon";

interface Props {
  getUser: (username: string) => Promise<void>;
}

export const FormSearchUser = ({ getUser }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-2 items-center dark:bg-blue-900 bg-white shadow-md dark:shadow-none p-4 rounded-xl mb-6"
    >
      <span className="min-w-[20px]">
        <SearchIcon className="fill-blue-500" />
      </span>
      <input
        name="username"
        type="text"
        placeholder="Search Github username..."
        className="flex-1 h-14 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:text-white dark:placeholder-white"
      />
      <button className="bg-blue-500 rounded-lg p-4 text-white font-bold">
        Search
      </button>
    </form>
  );
};
