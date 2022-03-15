**Uso básico**

```jsx
import { useState } from 'react';

const [show, setShow] = useState(false);

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <div style={{ height: 350, width: 350, position: 'relative' }}>
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
      <Drawer
        showOn={show}
        showSetter={setShow}
      >
      <p>Esto es un Drawer.</p>
      </Drawer>
    </div>
  </div>
    <div className="ap-w-full md:ap-w-1/2">
  </div>
</div>
```