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
      width: 350,
      display: 'flex',
      justifyContent: 'space-around',
    }}>
      <MiniInput
        inputRef={e => {
          codeInputRef0 = e;
          return 0;
        }}
        placeholder="-"
        onChange={e => (e.target.value.length ? codeInputRef1.focus() : null)}
        variant="big"
        type="number"
      />
      <MiniInput
        inputRef={e => {
          codeInputRef1 = e;
          return 0;
        }}
        placeholder="-"
        onChange={e =>
          e.target.value.length
            ? codeInputRef2.focus()
            : codeInputRef0.focus()
        }
        variant="big"
        type="number"
      />
      <MiniInput
        inputRef={e => {
          codeInputRef2 = e;
          return 0;
        }}
        placeholder="-"
        onChange={e =>
          e.target.value.length
            ? codeInputRef3.focus()
            : codeInputRef1.focus()
        }
        variant="big"
        type="number"
      />
      <MiniInput
        inputRef={e => {
          codeInputRef3 = e;
          return 0;
        }}
        placeholder="-"
        onChange={e => (e.target.value.length ? null : codeInputRef2.focus())}
        variant="big"
        type="number"
      />
    </div>
  </div>
  <div className="ap-w-full md:ap-w-1/2">
  </div>
</div>
```