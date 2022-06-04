#### Lista de DateInput según guía de estilos

<br/>

**Uso básico**

```jsx
import {useState} from 'react';
const [date, setDate] = useState('');

<div className={'ap-flex ap-flex-wrap ap--mx-2'}>
    <div className={'ap-w-full md:ap-w-1/3 ap-px-2 ap-mb-1'}>
        <p className="ap-pb-2">Ejemplo</p>
        <DateInput
            date={date}
            onChange={(e) => {setDate(e.target.value)}}
        />
    </div>
</div>
```
