import { h } from 'preact';
import { styled } from 'goober';

const Container = styled('g')(({ delay }) => ({
  opacity: 0,
  animation: `wait ${delay}s, fade-in-out 1.5s ${delay}s;`,
}));

const TypingBubble = (props) => (
  <Container {...props}>
    <rect x="8.27246" width="69.7276" height="42" rx="20.9774" class="bubble" />
    <circle cx="13.591" cy="33.091" r="7.68185" class="bubble" />
    <circle cx="3.54547" cy="41.9547" r="3.54547" class="bubble" />

    <circle cx="27.4778" cy="20.9773" r="5.02275" fill="#999999">
      <animate
        attributeName="opacity"
        values="0.5;1;0.5"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="42.8411" cy="20.9773" r="5.02275" fill="#999999">
      <animate
        attributeName="opacity"
        values="0.5;1;0.5"
        dur="1s"
        begin="0.2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="58.2054" cy="20.9773" r="5.02275" fill="#999999">
      <animate
        attributeName="opacity"
        values="0.5;1;0.5"
        dur="1s"
        begin="0.4s"
        repeatCount="indefinite"
      />
    </circle>
  </Container>
);

export default TypingBubble;
