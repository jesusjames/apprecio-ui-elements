**Uso básico**

```jsx
import { useState } from 'react';

const [value, setValue] = useState('');

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <div style={{ width: 350, position: 'relative' }}>
      <DateInput
        onChange={e => setValue(e.target.value)}
        value={value}
      />
    </div>
  </div>
    <div className="ap-w-full md:ap-w-1/2">
  </div>
</div>
```