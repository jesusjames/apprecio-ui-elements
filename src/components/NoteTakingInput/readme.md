**Uso básico**

```jsx
import { useState } from 'react';

const [note, setNote] = useState('');
const [note2, setNote2] = useState('');

<div className="ap-flex ap-flex-wrap" style={{ backgroundColor: '#FF4860', padding: '10px' }}>
  <div className="ap-w-full md:ap-w-1/2">
    <p className="ap-mb-0.5">Normal</p>
    <NoteTakingInput
      note={note}
      noteSetter={setNote}
    />
  </div>
  <div className="ap-w-full md:ap-w-1/2">
    <p className="ap-mb-0.5">Extensión forzada</p>
    <NoteTakingInput
      forceElongation
      note={note2}
      noteSetter={setNote2}
    />
  </div>
</div>
```