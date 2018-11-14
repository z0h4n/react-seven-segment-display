# A Seven Segment Display Component for ReactJS

<img src="image.png">

### Installation

```
npm install --save react-seven-segment-display
```

### Import

```
import SevenSegmentDisplay from 'react-seven-segment-display';
```

### Usage

```
<SevenSegmentDisplay value="0" onColor="rgba(0,255,0,1)" offColor="rgba(0,255,0,0.2)" width={50} height={5} />
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
