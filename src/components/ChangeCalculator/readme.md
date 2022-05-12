**Uso básico**

```jsx
<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <div style={{ width: 350, position: 'relative' }}>
      <ChangeCalculator totalAmount="10.20" totalItems={2}
      onFinalize={() => alert('finalizar')}/>
    </div>
  </div>
    <div className="ap-w-full md:ap-w-1/2">
  </div>
</div>
```
