#### Lista de DateInput según guía de estilos

<br/>

**Uso básico**

```jsx
import {useState} from 'react';

const [date, setDate] = useState('');

const [dateRange, setDateRange] = useState([null, null]);
const [startDate, endDate] = dateRange;

<div className={'ap-flex ap-flex-wrap ap--mx-2'}>
  <div className={'ap-w-full md:ap-w-1/4 ap-px-2 ap-mb-1'}>
    <p className="ap-pb-2">Primary</p>
    <DateInput
      date={date}
      onChange={(e) => {setDate(e.target.value)}}
    />
  </div>
  <div className={'ap-w-full md:ap-w-1/4 ap-px-2 ap-mb-1'}>
    <p className="ap-pb-2">Secondary</p>
    <DateInput
      color="secondary"
      placeholder="placeholder"
      dateFormat="yy/MM/dd"
      date={date}
      onChange={(e) => {setDate(e.target.value)}}
    />
  </div>
  <div className={'ap-w-full md:ap-w-1/4 ap-px-2 ap-mb-1'}>
    <p className="ap-pb-2">Tertiary</p>
    <DateInput
      color="tertiary"
      dateFormat="eee, dd MMM.yyyy"
      date={date}
      onChange={(e) => {setDate(e.target.value)}}
    />
  </div>
  <div className={'ap-w-full md:ap-w-1/4 ap-px-2 ap-mb-1'}>
    <p className="ap-pb-2">Quaternaty</p>
    <DateInput
      color="quaternary"
      date={date}
      onChange={(e) => {setDate(e.target.value)}}
    />
  </div>
  <div className={'ap-w-full md:ap-w-1/4 ap-px-2 ap-mb-1'}>
    <p className="ap-pb-2">Range</p>
    <DateInput
      color="quaternary"
      selectsRange
      placeholder="dd/MM/yyyy - dd/MM/yyyy"
      startDate={startDate}
      endDate={endDate}
      onChange={(e) => {setDateRange(e.target.value)}}
    />
  </div>
  <div className={'ap-w-full md:ap-w-1/4 ap-px-2 ap-mb-1'}>
    <p className="ap-pb-2">DateFormat</p>
    <DateInput
      color="tertiary"
      selectsRange
      placeholder="eee, dd MMM.yyyy - eee, dd MMM.yyyy"
      startDate={startDate}
      endDate={endDate}
      dateFormat="eee, dd MMM.yyyy"
      onChange={(e) => {setDateRange(e.target.value)}}
      borderRadius="12px"
      fontSizeValue="14px"
    />
  </div>
  <div className={'ap-w-full md:ap-w-1/4 ap-px-2 ap-mb-1'}>
    <p className="ap-pb-2">isClearable</p>
    <DateInput
      selectsRange
      placeholder="eee, dd MMM.yyyy - eee, dd MMM.yyyy"
      startDate={startDate}
      endDate={endDate}
      dateFormat="eee, dd MMM.yyyy"
      onChange={(e) => {setDateRange(e.target.value)}}
      borderRadius="12px"
      isClearable
      fontSizeValue="14px"
    />
  </div>
  <div className={'ap-w-full md:ap-w-1/4 ap-px-2 ap-mb-1'}>
    <p className="ap-pb-2">Modal</p>
    <DateInput
      color="secondary"
      selectsRange
      placeholder="eee, dd MMM.yyyy - eee, dd MMM.yyyy"
      startDate={startDate}
      endDate={endDate}
      dateFormat="eee, dd MMM.yyyy"
      onChange={(e) => {setDateRange(e.target.value)}}
      borderRadius="12px"
      fontSizeValue="14px"
      withPortal
    />
  </div>
</div>
```
