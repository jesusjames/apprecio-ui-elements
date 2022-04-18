Inputs numéricos de tamaño reducido diseñados para enfocarse unos a otros conforme se introuduzcan valores en ellos.

**Uso básico**

```jsx
import { useRef } from 'react';

let codeInputRef0 = useRef(null);
let codeInputRef1 = useRef(null);
let codeInputRef2 = useRef(null);
let codeInputRef3 = useRef(null);

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <div style={{
      height: 80,
      width: 250,
      display: 'flex',
      justifyContent: 'space-around',
    }}>
      <MiniInput
        inputRef={e => {
          codeInputRef0 = e;
          return 0;
        }}
        onChange={e => (e.target.value.length ? codeInputRef1.focus() : null)}
        type="number"
        color="primary"
      />
      <MiniInput
        inputRef={e => {
          codeInputRef1 = e;
          return 0;
        }}
        onChange={e =>
          e.target.value.length
            ? codeInputRef2.focus()
            : codeInputRef0.focus()
        }
        type="number"
        color="secondary"
      />
      <MiniInput
        inputRef={e => {
          codeInputRef2 = e;
          return 0;
        }}
        onChange={e =>
          e.target.value.length
            ? codeInputRef3.focus()
            : codeInputRef1.focus()
        }
        type="number"
        color="tertiary"
      />
      <MiniInput
        inputRef={e => {
          codeInputRef3 = e;
          return 0;
        }}
        onChange={e => (e.target.value.length ? null : codeInputRef2.focus())}
        type="number"
        color="quaternary"
      />
    </div>
  </div>
  <div className="ap-w-full md:ap-w-1/2">
  </div>
</div>
```