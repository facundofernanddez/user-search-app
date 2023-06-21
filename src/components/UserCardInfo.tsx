import { User } from "@/interfaces/user";
import { BuildingIcon } from "./icons/BuildingIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkIcon } from "./icons/LinkIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import Image from "next/image";

interface Props {
  user: User;
}

const validateUrl = (url: string) => {
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }
  return url;
};

export const UserCardInfo = ({ user }: Props) => {
  return (
    <article className="grid-areas p-4 rounded-xl bg-blue-900 text-white">
      <div className="overflow-hidden section-logo mr-3 bg-gray-200 grid place-content-center rounded-full h-24 w-24 p-1 lg:mx-auto">
        <Image
          src={user.avatar_url}
          alt="image"
          width={96}
          height={96}
          className="rounded-full"
        />
        <GithubIcon className="relative top-2 h-full w-full" />
      </div>
      <div className="section-title">
        <h2 className="font-bold text-3xl">{user.name}</h2>
        <p>@{user.login}</p>
      </div>
      <div className="section-date lg:text-right">
        <p>
          {new Date(user.created_at || "").toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <p className="section-description mt-8 leading-loose">
        {user.bio || "No user bio"}
      </p>
      <div className="section-number mt-4 flex justify-around bg-blue-950 p-8 rounded-xl text-center">
        <article>
          <p>Repos</p>
          <p className="font-bold text-xl">{user.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="font-bold text-xl">{user.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="font-bold text-xl">{user.following}</p>
        </article>
      </div>
      <div className="section-social md:grid grid-cols-2 mt-4 space-y-3">
        <article className="flex space-x-2">
          <i>
            <LocationIcon className="fill-white" width={"1rem"} />
          </i>
          <span>{user.location}</span>
        </article>
        <article className="flex space-x-2">
          <i>
            <LinkIcon className="fill-white" width={"1rem"} />
          </i>
          <a href={validateUrl(user.blog)} className="truncate">
            {user.blog || "not information"}
          </a>
        </article>
        <article className="flex space-x-2">
          <i>
            <TwitterIcon className="fill-white" width={"1rem"} />
          </i>
          <a href={`https://www.twitter.com/${user.twitter_username}`}>
            {user.twitter_username || "no twitter"}
          </a>
        </article>
        <article className="flex space-x-2">
          <i>
            <BuildingIcon className="fill-white" width={"1rem"} />
          </i>
          <span>{user.company || "not information"}</span>
        </article>
      </div>
    </article>
  );
};
