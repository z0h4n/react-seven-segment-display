# A Seven Segment Display Component for ReactJS

<img src="image.png">

### Installation
- NPM
```
npm install --save react-seven-segment-display
```
- Web

Download [react-seven-segment-display.min.js](https://raw.githubusercontent.com/z0h4n/react-seven-segment-display/master/dist/react-seven-segment-display.min.js)
```
<script src="react-seven-segment-display.min.js"></script>
```

### Usage

```
// ESM
import SevenSegmentDisplay from 'react-seven-segment-display';

// CommonJS
const SevenSegmentDisplay = require('react-seven-segment-display').default;

// Web
var SevenSegmentDisplay = window.reactSevenSegmentDisplay.default;
```

### Props

`value`
- Any Number between 0-9 in String format. Default is '0'

`width`
- Number. Default is 40
- Width of a segment
  
`height`
- Number. Default is 5
- Height of a segment
  
`onColor`
- String. Default is 'rgba(255,0,0,1)'
- Color when segment is on.

`offColor`
- String. Default is 'transparent'
- Color when segment is off.
