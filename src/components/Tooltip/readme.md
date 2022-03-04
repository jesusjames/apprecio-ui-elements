Componente con la función de informar al usuario con mensajes cortos.

**Uso básico**

```jsx
import { useState } from 'react';

const [show, setShow] = useState(false);

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/3">
    <div style={{ position: 'relative' }}>
      <button
        style={{
          backgroundColor: '#FF4860',
          borderRadius: '10px',
          color: 'white',
          height: '30px',
          width: '300px',
        }}
        onClick={() => setShow(true)}
      >
        Dame click!
      </button>
      <Tooltip
        showOn={show}
        message="Esto es un tooltip."
        onClick={() => setShow(false)}
      />
    </div>
  </div>
  <div className="ap-w-full md:ap-w-2/3" />
</div>
```