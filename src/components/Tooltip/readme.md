Componente con la función de informar al usuario con mensajes cortos.

**Uso básico**

```jsx
<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/3">
    <Tooltip
      showOn={true}
      message="Esto es un tooltip."
      onClick={() => alert('Diste click en el tooltip.')}
    />
  </div>
  <div className="ap-w-full md:ap-w-2/3" />
</div>
```