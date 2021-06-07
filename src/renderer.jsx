import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import { setup as setupGoober, styled, extractCss } from 'goober';

import Messages from './Messages';
// ESBuild imports this as text for easy inlining
import styles from './styles.css';

const STYLES_KEY = '__goober__';

// Hooking into Preact renderer to watch for styles
setupGoober(h);

const RootContainer = styled('svg')({
  text: {
    fill: '#242424',
    fontSize: 18,
    fontFamily: 'Inter',
    letterSpacing: '-0.02em',
  },
  a: {
    fill: '#0079ff',
  },
  '@media (prefers-color-scheme: dark)': {
    text: {
      fill: '#dcdcdc',
    },
    a: {
      fill: '#0c82f9',
    },
  },
});

const renderContent = (props) => {
  const content = renderToString(
    <RootContainer
      width="550"
      height="380"
      viewBox="0 0 550 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      {/*
        Somewhat hacky - no easy way of injecting a style tag into the content after the fact,
        so just adding a placeholder string to later replace with generated styles
      */}
      <style>{STYLES_KEY}</style>
      <style>{styles}</style>
      <Messages {...props} />
    </RootContainer>
  );

  const contentWithStyles = content.replace(STYLES_KEY, extractCss());
  return contentWithStyles;
};

export default renderContent;
