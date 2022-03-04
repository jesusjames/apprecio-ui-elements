**Uso básico**

```jsx
import { useState } from 'react';

const [transactionsArray, setTransactionsArray] = useState([
  {
    units: 1,
    value: 10,
    title: 'Elotes',
    message: 'Elotes',
  },
  {
    units: 2,
    value: 15,
    title: 'Frijoles',
    message: 'en lata',
  },
]);

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <div style={{ width: 350 }}>
      <ReceiptDrawerContent
        setShowCheckoutScreen={() => alert('Ahora estarías en el checkout.')}
        setShowReceiptDrawer={(show) => {
          if (!show) {
            alert('Ahora se cerraría el drawer.');
          }
        }}
        transactionsArray={transactionsArray}
        transactionsArraySetter={setTransactionsArray}
      />
    </div>
  </div>
    <div className="ap-w-full md:ap-w-1/2">
    <div style={{ width: 350 }}>
      <ReceiptDrawerContent
        mode="expense"
        setShowCheckoutScreen={() => alert('Ahora estarías en el checkout.')}
        setShowReceiptDrawer={(show) => {
          if (!show) {
            alert('Ahora se cerraría el drawer.');
          }
        }}
        transactionsArray={transactionsArray}
        transactionsArraySetter={setTransactionsArray}
      />
    </div>
  </div>
</div>
```