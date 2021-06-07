import { h } from 'preact';
import { styled } from 'goober';

import Message from './Message';

const DAY_WIDTHS = {
  Monday: 59,
  Tuesday: 59,
  Wednesday: 84,
  Thursday: 69,
  Friday: 44,
  Saturday: 69,
  Sunday: 54,
};

const EmojiSpan = styled('tspan')({
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
});

const Messages = ({ degF, degC, weatherEmoji, day }) => (
  <g transform="translate(10, 0)">
    <Message>
      <rect width="120" height="42" rx="18.0355" />
      <text x="15" y="27">
        Hi, I'm Chris!
      </text>
    </Message>
    <Message offsetY={48} delay={2.5}>
      <rect width="318" height="66.1302" rx="18.0355" />
      <text x="15" y="27">
        I live in St. Petersburg, Florida where it’s
      </text>
      <text x="15" y="50">
        currently {degF} °F ({degC} °C) and{' '}
        <EmojiSpan>{weatherEmoji}</EmojiSpan>
      </text>
    </Message>
    <Message offsetY={120} delay={5}>
      <rect width="334" height="66.1302" rx="18.0355" />
      <text x="15" y="27">
        I’m a frontend software engineer currently
      </text>
      <text x="15" y="50">
        making stuff at Lyft, previously at Tinder.
      </text>
    </Message>
    <Message offsetY={192} delay={7.5}>
      <rect width="286" height="66.1302" rx="18.0355" />
      <text x="15" y="27">
        I'm also studying computer science
      </text>
      <text x="15" y="50">
        at the University of Virginia.
      </text>
    </Message>
    <Message offsetY={262} delay={10}>
      <rect width="452" height="66.1302" rx="18.0355" />
      <text x="15" y="27">
        Curious how this was made or want to see other projects?
      </text>
      <text x="15" y="50">
        Check out my GitHub repos below.
      </text>
    </Message>
    <Message offsetY={333} delay={12.5}>
      <rect width={156 + DAY_WIDTHS[day]} height="42" rx="18.0355" />
      <text x="15" y="27">
        Have a great {day}! <EmojiSpan>👋</EmojiSpan>
      </text>
    </Message>
  </g>
);

export default Messages;
