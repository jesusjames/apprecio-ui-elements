**Uso básico**

```jsx
import { useState } from 'react';
import { NavigationEaveButton } from '..';

import CashRegisterIcon from '../image/CashRegisterIcon.svg';
import IncomeActive from '../image/IncomeActive.svg';
import IncomeInactive from '../image/IncomeInactive.svg';
import ExpensesActive from '../image/ExpensesActive.svg';
import ExpensesInactive from '../image/ExpensesInactive.svg';
import ReportActive from '../image/ReportActive.svg';
import ReportInactive from '../image/ReportInactive.svg';

const [page, setPage] = useState(0);

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-2/4">
    <div style={{
      position: 'relative',
      height: 150,
      width: 350,
    }}>
      <NavigationEave
        icon={CashRegisterIcon}
        mode="calculator"
        name="Caja registradora"
        page={page}
      >
        <NavigationEaveButton
          active={page === 0}
          activeIcon={IncomeActive}
          inactiveIcon={IncomeInactive}
          name="Ventas"
          onClick={() => setPage(0)}
        />
        <NavigationEaveButton
          active={page === 1}
          activeIcon={ExpensesActive}
          inactiveIcon={ExpensesInactive}
          name="Gastos"
          onClick={() => setPage(1)}
        />
        <NavigationEaveButton
          active={page === 2}
          activeIcon={ReportActive}
          inactiveIcon={ReportInactive}
          name="Reporte"
          onClick={() => setPage(2)}
        />
      </NavigationEave>
    </div>
  </div>
  <div className="ap-w-full md:ap-w-2/4">
    <div style={{
      position: 'relative',
      height: 150,
      width: '100%',
    }}>
      <NavigationEave
        icon={CashRegisterIcon}
        mode="calculator"
        name="Caja registradora"
        page={page}
      >
        <NavigationEaveButton
          active={page === 0}
          activeIcon={IncomeActive}
          inactiveIcon={IncomeInactive}
          name="Ventas"
          onClick={() => setPage(0)}
        />
        <NavigationEaveButton
          active={page === 1}
          activeIcon={ExpensesActive}
          inactiveIcon={ExpensesInactive}
          name="Gastos"
          onClick={() => setPage(1)}
        />
        <NavigationEaveButton
          active={page === 2}
          activeIcon={ReportActive}
          inactiveIcon={ReportInactive}
          name="Reporte"
          onClick={() => setPage(2)}
        />
      </NavigationEave>
    </div>
  </div>
  <div className="ap-w-full md:ap-w-2/4 ap-mt-4">
    <div style={{
      position: 'relative',
      height: 150,
      width: 350,
    }}>
      <NavigationEave
        icon={CashRegisterIcon}
        mode="scanner"
        shortened
        name="Caja registradora"
        page={page}
      >
        <NavigationEaveButton
          active={page === 0}
          activeIcon={IncomeActive}
          inactiveIcon={IncomeInactive}
          name="Ventas"
          onClick={() => setPage(0)}
        />
        <NavigationEaveButton
          active={page === 1}
          activeIcon={ExpensesActive}
          inactiveIcon={ExpensesInactive}
          name="Gastos"
          onClick={() => setPage(1)}
        />
        <NavigationEaveButton
          active={page === 2}
          activeIcon={ReportActive}
          inactiveIcon={ReportInactive}
          name="Reporte"
          onClick={() => setPage(2)}
        />
      </NavigationEave>
    </div>
  </div>
</div>
```
