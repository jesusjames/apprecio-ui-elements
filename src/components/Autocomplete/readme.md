Un campo de texto que muestra opciones que pueden seleccionarse.

**Uso básico**

```jsx
const sug = [
  {
    id: '1',
    label: 'Manzanas',
  },
  {
    id: '2',
    label: 'Bananas',
  },
  {
    id: '3',
    label: 'Limones',
  }
];

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <div style={{
      position: 'relative',
      height: 150,
      width: 350,
    }}>
      <Autocomplete
        onReady={() => {}}
        suggestions={sug}
      />
    </div>
  </div>
  <div className="ap-w-full md:ap-w-1/2">
  </div>
</div>
```