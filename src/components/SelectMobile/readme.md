Based from <a href="https://www.npmjs.com/package/rc-select" style="color: #4d24cc;">rc-select</a><br>


#### Ejemplos

```jsx
import React, {useCallback} from 'react';
import SelectMobile from "./SelectMobile";

const [mobile1, setMobile1] = React.useState('');
const [mobile2, setMobile2] = React.useState('');
const [mobile3, setMobile3] = React.useState('');
const [mobile4, setMobile4] = React.useState('');

const onChangeMobile1 = useCallback((code, mobile) => {
  setMobile1(mobile);
}, []);

<div className="ap-flex ap-flex-wrap -mx-1">
  <div className="ap-w-full md:ap-w-1/4 ap-px-1 ap-mb-2">
    <p className={'ap-mb-2'}>primary</p>
    <SelectMobile
      onChange={onChangeMobile1}
      color={'primary'}
      value={mobile1}
    />
  </div>
  <div className="ap-w-full md:ap-w-1/4 ap-px-1 ap-mb-2">
    <p className={'ap-mb-2'}>secondary</p>
    <SelectMobile
      onChange={(code, mobile) => setMobile2(mobile)}
      color={'secondary'}
      value={mobile2}
    />
  </div>
  <div className="ap-w-full md:ap-w-1/4 ap-px-1 ap-mb-2">
    <p className={'ap-mb-2'}>tertiary</p>
    <SelectMobile
      onChange={(code, mobile) => setMobile3(mobile)}
      color={'tertiary'}
      value={mobile3}
    />
  </div>
  <div className="ap-w-full md:ap-w-1/4 ap-px-1 ap-mb-2">
    <p className={'ap-mb-2'}>quaternary</p>
    <SelectMobile
      onChange={(code, mobile) => setMobile4(mobile)}
      color={'quaternary'}
      value={mobile4}
    />
  </div>
</div>

```
