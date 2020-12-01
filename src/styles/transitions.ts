import { css, keyframes } from '@emotion/react';

// Transition Property https://tailwindcss.com/docs/transition-property
export const transitionNone = css`
  transition-property: none;
`;
export const transitionAll = css`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
export const transition = css`
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
export const transitionColors = css`
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

export const transitionOpacity = css`
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
export const transitionShadow = css`
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
export const transitionTransform = css`
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

// Transition Duration https://tailwindcss.com/docs/transition-duration
export const duration75 = css`
  transition-duration: 75ms;
`;
export const duration100 = css`
  transition-duration: 100ms;
`;
export const duration150 = css`
  transition-duration: 150ms;
`;
export const duration200 = css`
  transition-duration: 200ms;
`;
export const duration300 = css`
  transition-duration: 300ms;
`;
export const duration500 = css`
  transition-duration: 500ms;
`;
export const duration700 = css`
  transition-duration: 700ms;
`;
export const duration1000 = css`
  transition-duration: 1000ms;
`;

// Transition Timing Function https://tailwindcss.com/docs/transition-timing-function
export const easeLinear = css`
  transition-timing-function: linear;
`;
export const easeIn = css`
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
`;
export const easeOut = css`
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
`;
export const easeInOut = css`
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

// Transition Delay https://tailwindcss.com/docs/transition-delay
export const delay75 = css`
  transition-delay: 75ms;
`;
export const delay100 = css`
  transition-delay: 100ms;
`;
export const delay150 = css`
  transition-delay: 150ms;
`;
export const delay200 = css`
  transition-delay: 200ms;
`;
export const delay300 = css`
  transition-delay: 300ms;
`;
export const delay500 = css`
  transition-delay: 500ms;
`;
export const delay700 = css`
  transition-delay: 700ms;
`;
export const delay1000 = css`
  transition-delay: 1000ms;
`;

// Animation https://tailwindcss.com/docs/animation
export const animateNone = css`
  animation: none;
`;
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const animateSpin = css`
  animation: ${spin} 1s linear infinite;
`;
const ping = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;
export const animatePing = css`
  animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
`;
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`;
export const animatePulse = css`
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
const bounce = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;
export const animateBounce = css`
  animation: ${bounce} 1s infinite;
`;