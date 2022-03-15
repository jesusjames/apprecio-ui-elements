Una botón con posición absoluta utilizado para la navegación dentro de la app.

**Uso básico**

```jsx
<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/3">
    <div style={{ position: 'relative', height: '60px' }}>
      <BackArrow onClick={() => alert('Estarías yendo hacia atrás.')} />
    </div>
  </div>
  <div className="ap-w-full md:ap-w-2/3" />
</div>
```