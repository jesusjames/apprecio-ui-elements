**Uso básico**

```jsx
<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <div style={{ width: 350, position: 'relative' }}>
      <CashRegisterDisplay
        heightUnit={7}
        onButtonClick={() => alert('Diste click en el botón.')}
        value="0.00"
      />
    </div>
  </div>
    <div className="ap-w-full md:ap-w-1/2">
  </div>
</div>
```