import tw, { css } from "twin.macro";
import { useTheme } from "../theme";

import Tweet from "./Tweet";

const Container = (props) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.bg};
        max-width: 640px;
        font: 16px/1.5 Roboto, "Helvetica Neue", arial, sans-serif;

        article:first-of-type {
          ${tw`rounded-t-lg`}
        }
        article:last-of-type {
          ${tw`rounded-b-lg`}
        }
      `}
      tw="p-4"
    >
      {props.tweets.map((tweet) => (
        <Tweet {...tweet} />
      ))}

      <div
        css={css`
          color: ${theme.heading};
        `}
      >
        <a
          href={`https://twitter.com/${props.screen_name}`}
          tw="p-8 no-underline hover:underline flex flex-row items-center justify-center"
          css={`
            color: ${theme.links};
          `}
        >
          <svg
            viewBox="0 0 24 24"
            tw="w-6"
            css={css`
              fill: ${theme.links};
            `}
          >
            <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246a.753.753 0 01-.12-.654c.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z" />
          </svg>
          <span>See {props.timeline_name}’s other Tweets</span>
        </a>
      </div>
    </div>
  );
};

export default Container;
