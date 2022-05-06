Lista de botones según guía de estilos

**Uso básico**

Tamaños y temas. Acepta cualquier otro tipo de props nativas de un elemento tipo button (onClick, onChange, etc)

```jsx
<div>
    <p className="ap-mb-0.5">tag and theme</p>
    <div className="ap-flex ap-flex-wrap">
        <div className="ap-w-full md:ap-w-1/4">
            <Text tag="h1">H1</Text>
        </div>
      <div className="ap-w-full md:ap-w-1/4">
        <Text tag="h2">H2</Text>
      </div>
      <div className="ap-w-full md:ap-w-1/4">
        <Text tag="h3">H3</Text>
      </div>
      <div className="ap-w-full md:ap-w-1/4">
        <Text tag="h4">H4</Text>
      </div>
      <div className="ap-w-full md:ap-w-1/4">
        <Text tag="h5" color="secondary">H5</Text>
      </div>
      <div className="ap-w-full md:ap-w-1/4">
        <Text tag="h6" color="tertiary">H6</Text>
      </div>
      <div className="ap-w-full md:ap-w-1/4">
        <Text color="quaternary" margin="10px 0">p</Text>
      </div>
      <div className="ap-w-full md:ap-w-1/4">
        <Text tag="span" color="quaternary" margin="10px 0" className="ap-block">span</Text>
      </div>
    </div>
</div>
```
