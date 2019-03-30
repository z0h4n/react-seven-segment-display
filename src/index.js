import React from 'react';
import HSegment from './HSegment';
import VSegment from './VSegment';

const segmentMap = [
  { a: true, b: true, c: true, d: true, e: true, f: true, g: false },
  { a: false, b: true, c: true, d: false, e: false, f: false, g: false },
  { a: true, b: true, c: false, d: true, e: true, f: false, g: true },
  { a: true, b: true, c: true, d: true, e: false, f: false, g: true },
  { a: false, b: true, c: true, d: false, e: false, f: true, g: true },
  { a: true, b: false, c: true, d: true, e: false, f: true, g: true },
  { a: true, b: false, c: true, d: true, e: true, f: true, g: true },
  { a: true, b: true, c: true, d: false, e: false, f: false, g: false },
  { a: true, b: true, c: true, d: true, e: true, f: true, g: true },
  { a: true, b: true, c: true, d: true, e: false, f: true, g: true }
];

export default function SevenSegmentDisplay({ width, height, onColor, offColor, value }) {
  width = +width;
  height = +height;
  value = +value;

  if (value < 0 || value > 9) {
    throw new Error('react-seven-segment-display: "value" prop must be between 0-9');
  }

  const { a, b, c, d, e, f, g } = segmentMap[value];

  return (
    <div style={{ display: 'inline-block', width: `${width + (height * 2)}px` }}>
      <HSegment width={width} height={height} color={a ? onColor : offColor} />
      <div style={{ position: 'relative', width: '100%', height: `${width}px` }}>
        <VSegment width={height} height={width} color={f ? onColor : offColor} align="left" />
        <VSegment width={height} height={width} color={b ? onColor : offColor} align="right" />
      </div>
      <HSegment width={width} height={height} color={g ? onColor : offColor} />
      <div style={{ position: 'relative', width: '100%', height: `${width}px` }}>
        <VSegment width={height} height={width} color={e ? onColor : offColor} align="left" />
        <VSegment width={height} height={width} color={c ? onColor : offColor} align="right" />
      </div>
      <HSegment width={width} height={height} color={d ? onColor : offColor} />
    </div>
  )
}

SevenSegmentDisplay.defaultProps = {
  width: 40,
  height: 5,
  value: 0,
  onColor: 'rgba(255,0,0,1)',
  offColor: 'transparent'
};
