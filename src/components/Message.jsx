import { h } from 'preact';
import { styled } from 'goober';

import TypingBubble from './TypingBubble';

const RootContainer = styled('g')({
  fill: '#e9e9eb',
  '@media (prefers-color-scheme: dark)': {
    fill: '#3b3b3d',
  },
});

const ContentContainer = styled('g')(({ delay }) => {
  const offsetDelay = delay + 1.7;
  return {
    animation: `wait ${offsetDelay}s, slide-up 0.2s ${offsetDelay}s;`,
  };
});

const Message = ({ offsetY = 0, delay = 0, children }) => (
  <RootContainer transform={`translate(0, ${offsetY})`}>
    <TypingBubble delay={delay} />
    <ContentContainer delay={delay}>{children}</ContentContainer>
  </RootContainer>
);

export default Message;
