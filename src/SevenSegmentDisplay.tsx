import type { SVGProps } from 'react';
import { DIGIT_SEGMENTS, SEGMENT_NAMES, segmentPoints } from './segments';

export interface SevenSegmentDisplayProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'value'> {
  /** The digit to display, 0-9. Numbers and numeric strings are accepted. Default `0`. */
  value?: number | string;
  /** Length of a segment, in px. Default `40`. */
  width?: number | string;
  /** Thickness of a segment, in px. Default `5`. */
  height?: number | string;
  /** Colour of lit segments. Default `rgba(255,0,0,1)`. */
  onColor?: string;
  /** Colour of unlit segments. Default `transparent`. */
  offColor?: string;
}

function parseDigit(value: number | string): number {
  const digit = typeof value === 'string' && value.trim() === '' ? NaN : Number(value);

  if (!Number.isInteger(digit) || digit < 0 || digit > 9) {
    throw new RangeError(`react-seven-segment-display: "value" must be an integer between 0 and 9, received ${String(value)}`);
  }

  return digit;
}

export function SevenSegmentDisplay({
  value = 0,
  width = 40,
  height = 5,
  onColor = 'rgba(255,0,0,1)',
  offColor = 'transparent',
  ...svgProps
}: SevenSegmentDisplayProps) {
  const digit = parseDigit(value);
  const lit = DIGIT_SEGMENTS[digit]!;
  const length = Number(width);
  const thickness = Number(height);
  const points = segmentPoints(length, thickness);
  const viewWidth = length + 2 * thickness;
  const viewHeight = 2 * length + 3 * thickness;

  return (
    <svg
      role="img"
      aria-label={String(digit)}
      width={viewWidth}
      height={viewHeight}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      {...svgProps}
      style={{ display: 'inline-block', ...svgProps.style }}
    >
      {SEGMENT_NAMES.map(name => {
        const on = lit.includes(name);
        return <polygon key={name} data-segment={name} data-on={on} points={points[name]} fill={on ? onColor : offColor} />;
      })}
    </svg>
  );
}
