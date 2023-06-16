import { BuildingIcon } from "./icons/BuildingIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkIcon } from "./icons/LinkIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const UserCardInfo = () => {
  return (
    <article className="grid-areas p-4 rounded-xl bg-blue-900 text-white">
      <div className="section-logo mr-3 bg-gray-200 grid place-content-center rounded-full h-24 w-24 p-1 lg:mx-auto">
        <GithubIcon className="relative top-2 h-full w-full" />
      </div>
      <div className="section-title">
        <h2 className="font-bold text-3xl">the octocat</h2>
        <p>@octocat</p>
      </div>
      <div className="section-date lg:text-right">
        <p>Joined 25 Jan 2011</p>
      </div>
      <p className="section-description mt-8 leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
        minima explicabo voluptatum, totam, blanditiis adipisci architecto
      </p>
      <div className="section-number mt-4 flex justify-around bg-blue-950 p-8 rounded-xl text-center">
        <article>
          <p>Repos</p>
          <p className="font-bold text-xl">8</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="font-bold text-xl">345</p>
        </article>
        <article>
          <p>Following</p>
          <p className="font-bold text-xl">8</p>
        </article>
      </div>
      <div className="section-social md:grid grid-cols-2 mt-4 space-y-3">
        <article className="flex space-x-2">
          <i>
            <LocationIcon className="fill-white" width={"1rem"} />
          </i>
          <a href="#">san francisco</a>
        </article>
        <article className="flex space-x-2">
          <i>
            <LinkIcon className="fill-white" width={"1rem"} />
          </i>
          <a href="#">https://www.github.com</a>
        </article>
        <article className="flex space-x-2">
          <i>
            <TwitterIcon className="fill-white" width={"1rem"} />
          </i>
          <a href="#">https://www.twitter.com</a>
        </article>
        <article className="flex space-x-2">
          <i>
            <BuildingIcon className="fill-white" width={"1rem"} />
          </i>
          <a href="#">@github</a>
        </article>
      </div>
    </article>
  );
};
