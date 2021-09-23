import { h, Fragment } from 'preact';
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

const RECT_RX = '18.0355';

const EmojiSpan = styled('tspan')({
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
});

const Messages = ({ tempF, tempC, day }) => (
  <>
    <Message>
      <rect width="120" height="42" rx={RECT_RX} />
      <text x="15" y="27">
        Hi, I'm Chris!
      </text>
    </Message>
    <Message offsetY={48} delay={2.5}>
      <rect width="311" height="66.1302" rx={RECT_RX} />
      <text x="15" y="27">
        I live in Saint Petersburg, Florida where
      </text>
      <text x="15" y="50">
        it’s currently {tempF} °F ({tempC} °C).
      </text>
    </Message>
    <Message offsetY={120} delay={5}>
      <rect width="334" height="66.1302" rx={RECT_RX} />
      <text x="15" y="27">
        I’m a frontend software engineer currently
      </text>
      <text x="15" y="50">
        making stuff at Tinder, previously at Lyft.
      </text>
    </Message>
    <Message offsetY={192} delay={7.5}>
      <rect width="286" height="66.1302" rx={RECT_RX} />
      <text x="15" y="27">
        I'm also studying computer science
      </text>
      <text x="15" y="50">
        at the University of Virginia.
      </text>
    </Message>
    <Message offsetY={262} delay={10}>
      <rect width="452" height="66.1302" rx={RECT_RX} />
      <text x="15" y="27">
        Curious how this was made or want to see other projects?
      </text>
      <text x="15" y="50">
        Check out my GitHub repos below.
      </text>
    </Message>
    <Message offsetY={333} delay={12.5}>
      <rect width={156 + DAY_WIDTHS[day]} height="42" rx={RECT_RX} />
      <text x="15" y="27">
        Have a great {day}! <EmojiSpan>👋</EmojiSpan>
      </text>
    </Message>
  </>
);

export default Messages;
