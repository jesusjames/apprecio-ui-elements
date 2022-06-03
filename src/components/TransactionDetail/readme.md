```jsx
import TransactionDetail from './TransactionDetail';
import { useState } from 'react';

const [open1, setOpen1] = useState();

<div className="ap-flex ap-flex-wrap ap-bg-gray-200 ap-py-3">
  <div className="ap-w-full md:ap-w-1/4">
    <TransactionDetail
      open={open1}
      hour="08:05Am"
      amount="$4.05"
      onClick={() => {setOpen1(prevOpen => !prevOpen)}}/>
  </div>
  <div className="ap-w-full md:ap-w-1/4">
    <TransactionDetail type="expense" amount="-$5.00" />
  </div>
  <div className="ap-w-full md:ap-w-1/4">
    <TransactionDetail hour="04:12PM"/>
  </div>
  <div className="ap-w-full md:ap-w-1/4">
    <TransactionDetail type="expense" />
  </div>
</div>
```
