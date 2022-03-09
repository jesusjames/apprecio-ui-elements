Componente con comportamiento similar al Drawer, pero que siempre se encuentra visible.

**Uso básico**

```jsx
<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <div style={{ height: 350, width: 350, position: 'relative' }}>
      <HalfDrawer
        defaultHeight={160}
        show
        triggerOnMovement={() => {}}
      >
        Esto es un HalfDrawer 
      </HalfDrawer>
    </div>
  </div>
    <div className="ap-w-full md:ap-w-1/2">
  </div>
</div>
```