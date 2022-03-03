UnitCounter es un componente diseñado para funcionar en conjunto con el resto de los componentes de la pantalla CashRegister. Su función es ofrecer una interfaz intuitiva a través de la cual el tendero podrá alterar el número de unidades de una transacción determinada. Se diferencia de un campo numérico convencional en el sentido que sólo puede contener valores mayores o iguales a 1. En caso de presentarse un 0, se presenta un botón que permite "Eliminar" la transacción, función que resetea el valor del Display a 0.00 y cierra el Drawer presente.

**Uso básico**

```jsx
import { useState } from 'react';

const [counter, setCounter] = useState(1);
const [counter2, setCounter2] = useState(1);

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <p className="ap-mb-0.5">Normal</p>
    <UnitCounter
      drawerSetter={() => alert('Esta función cierra el drawer.')}
      units={counter}
      unitsSetter={setCounter}
      valueSetter={() => alert('Esta función cambia el valor del Display a 0.')}
    />
  </div>
  <div className="ap-w-full md:ap-w-1/2">
    <p className="ap-mb-0.5">Mini</p>
    <UnitCounter
      drawerSetter={() => alert('Esta función cierra el drawer.')}
      mini
      units={counter2}
      unitsSetter={setCounter2}
      valueSetter={() => alert('Esta función cambia el valor del Display a 0.')}
    />
  </div>
</div>
```