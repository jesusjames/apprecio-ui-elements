Una botón con posición absoluta utilizado para la navegación dentro de la app.

**Uso básico**

```jsx
<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <BackArrow text="Atras" onClick={() => alert('Estarías yendo hacia atrás.')} />
  </div>
  <div className="ap-w-full md:ap-w-1/2" >
    <BackArrow 
      onClick={() => alert('Estarías yendo hacia atrás.')} 
      text="Volver"
      fontSize="2rem"/>
  </div>
</div>
```

**Theming**

```jsx
<div className="ap-flex ap-flex-wrap">
    <div className="ap-w-full md:ap-w-1/4">
      <p className="ap-mb-3">Primary</p>
      <BackArrow text="Atras" onClick={() => alert('Estarías yendo hacia atrás.')} />
    </div>
    <div className="ap-w-full md:ap-w-1/4">
      <p className="ap-mb-3">Secondary</p>
      <BackArrow text="Atras" color="secondary" onClick={() => alert('Estarías yendo hacia atrás.')} />
    </div>
    <div className="ap-w-full md:ap-w-1/4">
      <p className="ap-mb-3">tertiary</p>
      <BackArrow text="Atras" color="tertiary" onClick={() => alert('Estarías yendo hacia atrás.')} />
    </div>
    <div className="ap-w-full md:ap-w-1/4">
      <p className="ap-mb-3">Quaternary</p>
      <BackArrow text="Atras" color="quaternary" onClick={() => alert('Estarías yendo hacia atrás.')} />
    </div>
</ div>
```
