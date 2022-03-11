**Uso básico**

```jsx
import { useState } from 'react';

const [show, setShow] = useState(false);

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/3">
    <div style={{ position: 'relative' }}>
      <Summary />
    </div>
  </div>
  <div className="ap-w-full md:ap-w-2/3" />
</div>
```