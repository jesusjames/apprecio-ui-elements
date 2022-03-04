Botones diseñados para funcionar con una animación de Slider que pasa por debajo de ellos. Ver NavigationEave para referencia.

**Uso básico**

```jsx
import IncomeActive from '../image/IncomeActive.svg';
import IncomeInactive from '../image/IncomeInactive.svg';

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <NavigationEaveButton
      active={true}
      activeIcon={IncomeActive}
      inactiveIcon={IncomeInactive}
      name="Income"
    />
  </div>
  <div className="ap-w-full md:ap-w-1/2">
    <NavigationEaveButton
      active={false}
      activeIcon={IncomeActive}
      inactiveIcon={IncomeInactive}
      name="Income"
    />
  </div>
</div>
```