Lista de campos de texto según guía de estilos.

**Uso básico**

A continuación se listan las variantes del componente. Además, acepta cualquier otro tipo de prop nativo de un elemento \<input\/\>.

## Input

```jsx
import EmailSVG from '../image/Email.svg';
import EmailErrorSVG from '../image/EmailError.svg';

<div>
  <div>
    <p className="ap-mb-0.5">Basic input</p>
    <div className="ap-flex ap-flex-wrap">
      <div className="ap-w-full md:ap-w-1/3">
        <p className="ap-mb-0.5">Normal</p>
        <Input placeholder="Input text" />
      </div>
      <div className="ap-w-full md:ap-w-1/3">
        <p className="ap-mb-0.5">Disabled</p>
        <Input placeholder="Input text" disabled />
      </div>
      <div className="ap-w-full md:ap-w-1/3">
        <p className="ap-mb-0.5">Error</p>
        <Input placeholder="Input text" error />
      </div>
    </div>
  </div>

  <div>
    <p className="ap-mb-0.5">Icon to the left</p>
    <div className="ap-flex ap-flex-wrap">
      <div className="ap-w-full md:ap-w-1/3">
        <p className="ap-mb-0.5">Normal</p>
        <Input placeholder="Input text" iconLeft={EmailSVG} />
      </div>
      <div className="ap-w-full md:ap-w-1/3">
        <p className="ap-mb-0.5">Disabled</p>
        <Input placeholder="Input text" disabled iconLeft={EmailSVG} />
      </div>
      <div className="ap-w-full md:ap-w-1/3">
        <p className="ap-mb-0.5">Error</p>
        <Input placeholder="Input text" error iconLeft={EmailErrorSVG} />
      </div>
    </div>
  </div>

  <div>
    <p className="ap-mb-0.5">Icon to the right</p>
    <div className="ap-flex ap-flex-wrap">
      <div className="ap-w-full md:ap-w-1/3">
        <p className="ap-mb-0.5">Normal</p>
        <Input placeholder="Input text" iconRight={EmailSVG} />
      </div>
      <div className="ap-w-full md:ap-w-1/3">
        <p className="ap-mb-0.5">Disabled</p>
        <Input placeholder="Input text" disabled iconRight={EmailSVG} />
      </div>
      <div className="ap-w-full md:ap-w-1/3">
        <p className="ap-mb-0.5">Error</p>
        <Input placeholder="Input text" error iconRight={EmailErrorSVG} />
      </div>
    </div>
  </div>
</div>
```