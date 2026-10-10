export type SegmentName = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';

/** Segments lit for each digit, indexed by digit. */
export const DIGIT_SEGMENTS: readonly (readonly SegmentName[])[] = [
  ['a', 'b', 'c', 'd', 'e', 'f'],
  ['b', 'c'],
  ['a', 'b', 'd', 'e', 'g'],
  ['a', 'b', 'c', 'd', 'g'],
  ['b', 'c', 'f', 'g'],
  ['a', 'c', 'd', 'f', 'g'],
  ['a', 'c', 'd', 'e', 'f', 'g'],
  ['a', 'b', 'c'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  ['a', 'b', 'c', 'd', 'f', 'g']
];

export const SEGMENT_NAMES: readonly SegmentName[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

/**
 * Hexagon points for each segment in a viewBox of (length + 2 * thickness) x
 * (2 * length + 3 * thickness). Neighbouring segments meet at their tips.
 */
export function segmentPoints(length: number, thickness: number): Record<SegmentName, string> {
  const t = thickness;
  const h = t / 2;
  const w = length + 2 * t;

  const horizontal = (y: number) =>
    [[h, y + h], [t, y], [w - t, y], [w - h, y + h], [w - t, y + t], [t, y + t]].join(' ');

  const vertical = (x: number, y: number) =>
    [[x + h, y], [x + t, y + h], [x + t, y + length + h], [x + h, y + length + t], [x, y + length + h], [x, y + h]].join(' ');

  const topRow = h;
  const bottomRow = length + 3 * h;

  return {
    a: horizontal(0),
    g: horizontal(length + t),
    d: horizontal(2 * length + 2 * t),
    f: vertical(0, topRow),
    b: vertical(w - t, topRow),
    e: vertical(0, bottomRow),
    c: vertical(w - t, bottomRow)
  };
}
