**Uso básico**

```jsx
import ResultExampleImage from '../image/ResultExampleImage.png';

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <p className="ap-mb-0.5">Sin imagen</p>
    <Result
      header="Refresco Cola (1.75 lt)"
      subheader="Coca Cola"
    />
  </div>
  <div className="ap-w-full md:ap-w-1/2">
    <p className="ap-mb-0.5">Imagen</p>
    <Result
      header="Refresco Cola (1.75 lt)"
      subheader="Coca Cola"
      image={ResultExampleImage}
    />
  </div>
</div>
