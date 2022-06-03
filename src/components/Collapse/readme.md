#### Lista de Collapse según guía de estilos

<br/>

**Uso Basico**

```jsx
import React, { useState } from "react";
import Button from './../Button/Button';

const [optionSelect, setOptionSelect] = useState("");
const [closingText, setClosingText] = useState('');
const [openingText, setOpeningText] = useState('');

const onClick = (name) => {
  name === optionSelect ? setOptionSelect("") : setOptionSelect(name);
};

const onClosing = (value) => {
  console.log('onClosing', value);
  setClosingText('Cerrando ...');
}

const onClosed = (value) => {
  console.log('onClosed', value);
  setClosingText('Cerrado');
}

const onOpening = (value) => {
  console.log('onOpening', value);
  setOpeningText('Abriendo ...');
}

const onOpened = (value) => {
  console.log('onOpened', value);
  setOpeningText('Abierto');
}

<>
  <div className="ap-flex ap-mx-1 ap-space-x-1">
    <div className="ap-w-full md:ap-w-1/4">
      <p>Estado abriendo: {openingText}</p>
      <p>Estado cerrando: {closingText}</p>
    </div>
    <div className="ap-w-full md:ap-w-1/4">
      <Button onClick={() => onClick('button1')}>Button 1</Button>
      <Collapse
        isOpen={optionSelect === "button1"}
        onOpening={onOpening}
        onOpened={onOpened}
        onClosing={onClosing}
        onClosed={onClosed}
      >
          <p>otro componente button1</p>
          <p>otro componente button1</p>
          <p>otro componente button1</p>
      </Collapse>
    </div>
    <div className="ap-w-full md:ap-w-1/4">
      <Button onClick={() => onClick('button2')}>Button 2</Button>
      <Collapse
        isOpen={optionSelect === "button2"}
        onOpening={onOpening}
        onOpened={onOpened}
        onClosing={onClosing}
        onClosed={onClosed}
      >
          <p>otro componente button2</p>
          <p>otro componente button2</p>
          <p>otro componente button2</p>
      </Collapse>
    </div>
    <div className="ap-w-full md:ap-w-1/4"/>
  </div>
</>;
```
