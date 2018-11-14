import React from 'react';
import PropTypes from 'prop-types';
import HSegment from './HSegment';
import VSegment from './VSegment';

const SEGMENT_MAP = {
  "0": { a: true, b: true, c: true, d: true, e: true, f: true, g: false },
  "1": { a: false, b: true, c: true, d: false, e: false, f: false, g: false },
  "2": { a: true, b: true, c: false, d: true, e: true, f: false, g: true },
  "3": { a: true, b: true, c: true, d: true, e: false, f: false, g: true },
  "4": { a: false, b: true, c: true, d: false, e: false, f: true, g: true },
  "5": { a: true, b: false, c: true, d: true, e: false, f: true, g: true },
  "6": { a: true, b: false, c: true, d: true, e: true, f: true, g: true },
  "7": { a: true, b: true, c: true, d: false, e: false, f: false, g: false },
  "8": { a: true, b: true, c: true, d: true, e: true, f: true, g: true },
  "9": { a: true, b: true, c: true, d: true, e: false, f: true, g: true }
};

export default class SevenSegmentDisplay extends React.Component {
  computeStyle() {
    const { width, height } = this.props;
    return {
      container: {
        display: 'inline-block',
        width: `${width + (height * 2)}px`,
        margin: '10px'
      },
      vSegmentHolder: {
        position: 'relative',
        width: '100%',
        height: `${width}px`
      }
    };
  }

  onOff(segmentName) {
    const { value, onColor, offColor } = this.props;
    return SEGMENT_MAP[value][segmentName] ? onColor : offColor;
  }

  render() {
    const { container, vSegmentHolder } = this.computeStyle();
    const { width, height } = this.props;

    return (
      <div style={container}>
        <HSegment width={width} height={height} color={this.onOff('a')} />
        <div style={vSegmentHolder}>
          <VSegment width={height} height={width} color={this.onOff('f')} align="left" />
          <VSegment width={height} height={width} color={this.onOff('b')} align="right" />
        </div>
        <HSegment width={width} height={height} color={this.onOff('g')} />
        <div style={vSegmentHolder}>
          <VSegment width={height} height={width} color={this.onOff('e')} align="left" />
          <VSegment width={height} height={width} color={this.onOff('c')} align="right" />
        </div>
        <HSegment width={width} height={height} color={this.onOff('d')} />
      </div>
    )
  }
}

SevenSegmentDisplay.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  value: PropTypes.string,
  onColor: PropTypes.string,
  offColor: PropTypes.string
};

SevenSegmentDisplay.defaultProps = {
  width: 40,
  height: 5,
  value: '0',
  onColor: 'rgba(255,0,0,1)',
  offColor: 'transparent'
};
