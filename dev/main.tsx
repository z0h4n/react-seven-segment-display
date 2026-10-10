import { createRoot } from 'react-dom/client';
import { SevenSegmentDisplay } from '../src';

const digits = Array.from({ length: 10 }, (_, i) => i);

createRoot(document.getElementById('root')!).render(
  <div style={{ background: '#111', padding: 16 }}>
    {digits.map(i => (
      <SevenSegmentDisplay key={i} value={i} width={40} height={10} offColor="rgba(255,255,255,0.08)" style={{ marginRight: 5 }} />
    ))}
  </div>
);
