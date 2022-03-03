**Uso básico**

```jsx
<div className="ap-flex ap-flex-wrap" style={{ backgroundColor: '#FF4860', padding: '10px' }}>
  <div className="ap-w-full md:ap-w-1/3">
    <TransactionStatus
      amount={100}
      itemCount={7}
      setShowReceiptDrawer={() => alert('Ahora se mostraría el drawer del recibo.')}
    />
  </div>
  <div className="ap-w-full md:ap-w-2/3" />
</div>
```