import React from 'react';
import {
  Animator,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  ZoomIn,
  ZoomOut,
  batch,
} from 'react-scroll-motion';

export default function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <h1 className="text-red-500 text-lg font-medium">test</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator
          animation={batch(Fade(), Sticky(), ZoomOut(0, 100), MoveOut(0, -200))}
        >
          <h1 className="text-red-500 text-lg font-medium">test</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <h1 className="text-red-500 text-lg font-medium">test</h1>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}
