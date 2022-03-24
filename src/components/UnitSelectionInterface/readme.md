UnitSelectionInterface es un componente que aglomera la información pertienente a cada transaction, v.g., cuántas unidades se vendieron, el valor por unidad y alguna nota que se guste agregar.

**Uso básico**

```jsx
import { useState } from 'react';

const [note, setNote] = useState('');
const [units, setUnits] = useState(1);
const [value, setValue] = useState(10);

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/3">
    <UnitSelectionInterface
      drawerSetter={() => alert('Ahora se cerraría el Drawer.')}
      note={note}
      noteSetter={setNote}
      transactionsArray={[]}
      units={units}
      unitsSetter={setUnits}
      value={value}
      valueSetter={setValue}
    />
  </div>
  <div className="ap-w-full md:ap-w-2/3" />
</div>
```