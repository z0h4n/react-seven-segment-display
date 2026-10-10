import { render, screen } from '@testing-library/react';
import { SevenSegmentDisplay } from './SevenSegmentDisplay';
import { DIGIT_SEGMENTS } from './segments';

const litSegments = (container: HTMLElement) =>
  [...container.querySelectorAll('polygon[data-on="true"]')].map(p => p.getAttribute('data-segment')).join('');

describe('SevenSegmentDisplay', () => {
  it.each(DIGIT_SEGMENTS.map((segments, digit) => [digit, segments.join('')] as const))(
    'lights the right segments for %i',
    (digit, expected) => {
      const { container } = render(<SevenSegmentDisplay value={digit} />);
      expect(litSegments(container)).toBe(expected);
    }
  );

  it('accepts numeric strings', () => {
    render(<SevenSegmentDisplay value="7" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', '7');
  });

  it('uses on/off colours', () => {
    const { container } = render(<SevenSegmentDisplay value={1} onColor="lime" offColor="gray" />);
    expect(container.querySelector('[data-segment="b"]')).toHaveAttribute('fill', 'lime');
    expect(container.querySelector('[data-segment="a"]')).toHaveAttribute('fill', 'gray');
  });

  it('sizes the svg from segment length and thickness', () => {
    render(<SevenSegmentDisplay width={40} height={10} />);
    const svg = screen.getByRole('img');
    expect(svg).toHaveAttribute('width', '60');
    expect(svg).toHaveAttribute('height', '110');
  });

  it('merges style without mutating the prop', () => {
    const style = { margin: 4 };
    render(<SevenSegmentDisplay style={style} />);
    expect(screen.getByRole('img')).toHaveStyle({ display: 'inline-block', margin: '4px' });
    expect(style).toEqual({ margin: 4 });
  });

  it.each([-1, 10, 1.5, NaN, '', 'A', ' '])('throws for invalid value %p', value => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<SevenSegmentDisplay value={value} />)).toThrow(RangeError);
  });
});
