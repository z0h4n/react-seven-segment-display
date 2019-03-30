import React from 'react';
import HSegment from './HSegment';
import VSegment from './VSegment';

const SEGMENT_MAP = [
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

function onOff(segmentName, props) {
  const { value, onColor, offColor } = props;
  return SEGMENT_MAP[+value][segmentName] ? onColor : offColor
}

export default function SevenSegmentDisplay(props) {
  const { width, height } = props;

  if (+props.value < 0 || +props.value > 9) {
    throw new Error('react-seven-segment-display: "value" prop must be between 0-9');
  }

  return (
    <div style={{ display: 'inline-block', width: `${width + (height * 2)}px` }}>
      <HSegment width={width} height={height} color={onOff('a', props)} />
      <div style={{ position: 'relative', width: '100%', height: `${width}px` }}>
        <VSegment width={height} height={width} color={onOff('f', props)} align="left" />
        <VSegment width={height} height={width} color={onOff('b', props)} align="right" />
      </div>
      <HSegment width={width} height={height} color={onOff('g', props)} />
      <div style={{ position: 'relative', width: '100%', height: `${width}px` }}>
        <VSegment width={height} height={width} color={onOff('e', props)} align="left" />
        <VSegment width={height} height={width} color={onOff('c', props)} align="right" />
      </div>
      <HSegment width={width} height={height} color={onOff('d', props)} />
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
