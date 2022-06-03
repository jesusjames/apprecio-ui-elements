Componente que se utiliza para mostrar el historial de transacciones dentro de la caja registradora.

**Uso básico**

```jsx
import { useState } from 'react';

const [counter, setCounter] = useState(1);

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <p>Eliminar item activado</p>
    <div style={{ width: 325 }}>
      <ReceiptItem
        deleteItem={() => {}}
        message="Ingreso manual"
        title="Ejemplo"
        units={counter}
        unitsSetter={setCounter}
        value="10.00"
      />
    </div>
  </div>
  <div className="ap-w-full md:ap-w-1/2">
    <p>Eliminar item Desactivado</p>
    <div style={{ width: 325 }}>
      <ReceiptItem
        className="!ap-p-0"
        deleteItemDisabled
        deleteItem={() => {}}
        message="Ingreso manual"
        title="Ejemplo"
        units={counter}
        unitsSetter={setCounter}
        value="10.00"
      />
    </div>
  </div>
</div>
```
