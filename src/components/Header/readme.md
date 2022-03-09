**Uso básico**

```jsx
<div>
  <div className="ap-flex ap-flex-wrap">
    <div className="ap-w-full md:ap-w-1/3">
      <p className="ap-mb-0.5">H1</p>
      <Header
        message="Esto es un Header"
        variant="h1"
      />
    </div>
    <div className="ap-w-full md:ap-w-1/3">
      <p className="ap-mb-0.5">H2</p>
      <Header
        message="Esto es un Header"
        variant="h2"
      />
    </div>
    <div className="ap-w-full md:ap-w-1/3">
      <p className="ap-mb-0.5">H3</p>
      <Header
        message="Esto es un Header"
        variant="h3"
      />
    </div>
  </div>

  <div className="ap-flex ap-flex-wrap">
    <div className="ap-w-full md:ap-w-1/3">
      <p className="ap-mb-0.5">H4</p>
      <Header
        message="Esto es un Header"
        variant="h4"
      />
    </div>
    <div className="ap-w-full md:ap-w-1/3">
      <p className="ap-mb-0.5">H5</p>
      <Header
        message="Esto es un Header"
        variant="h5"
      />
    </div>
    <div className="ap-w-full md:ap-w-1/3">
      <p className="ap-mb-0.5">H6</p>
      <Header
        message="Esto es un Header"
        variant="h6"
      />
    </div>
  </div>

  <div className="ap-flex ap-flex-wrap">
    <div className="ap-w-full md:ap-w-1/3">
      <p className="ap-mb-0.5">Error</p>
      <Header
        message="Esto es un Header"
        variant="error"
      />
    </div>
  </div>
</div>
```