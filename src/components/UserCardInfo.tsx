import { GithubIcon } from "./icons/GithubIcon";

export const UserCardInfo = () => {
  return (
    <article className="p-2 rounded-xl bg-blue-900 text-white">
      <div className="bg-gray-200 grid place-content-center rounded-full h-24 w-24 p-1">
        <GithubIcon className="relative top-2 h-full w-full" />
      </div>
      <div>
        <h2>the octocat</h2>
        <p>@octocat</p>
      </div>
      <div>
        <p>Joined 25 Jan 2011</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
        minima explicabo voluptatum, totam, blanditiis adipisci architecto,
        fugiat voluptatibus reiciendis eligendi nihil quae optio quidem ex unde.
        Culpa magni atque quas.
      </p>
      <div>
        <article>
          <p>Repos</p>
          <p>8</p>
        </article>
        <article>
          <p>Followers</p>
          <p>345</p>
        </article>
        <article>
          <p>Following</p>
          <p>8</p>
        </article>
      </div>
      <div>
        <article>
          <i>icono</i>
          <p>san francisco</p>
        </article>
        <article>
          <i>icono</i>
          <p>san francisco</p>
        </article>
        <article>
          <i>icono</i>
          <p>san francisco</p>
        </article>
        <article>
          <i>icono</i>
          <p>san francisco</p>
        </article>
      </div>
    </article>
  );
};
