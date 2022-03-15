**Uso básico**

```jsx
import { useState } from 'react';

const [show, setShow] = useState(false);

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <div style={{
      position: 'relative',
      backgroundColor: '#F6F8FD',
      padding: '10px',
    }}>
      <Summary
        count={14}
        date="Lunes, Julio 12"
        expenseTotal={6200}
        incomeTotal={18000}
      />
    </div>
  </div>
  <div className="ap-w-full md:ap-w-1/2" />
</div>
```