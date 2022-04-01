Based from <a href="https://www.npmjs.com/package/rc-select" style="color: #4d24cc;">rc-select</a><br>


#### Ejemplos

```jsx
import React from 'react';
import SelectMobile from "./SelectMobile";

const [selectValue, setSelectValue] = React.useState('');

const countrys = [
  {code: '+52', name: 'México'},
  {code: '+57', name: 'Colombia'},
  {code: '+55', name: 'Brasil'},
  {code: '+54', name: 'Argentina'},
];

<div className="ap-flex ap-flex-wrap -mx-1">
  <div className="ap-w-full md:ap-w-1/3 ap-px-1 ap-mb-2">
    <p className={'ap-mb-2'}>Ejemplo</p>
    <SelectMobile
      onChange={(code, mobile) => console.log(code, mobile)}
    />
  </div>
</div>

```
