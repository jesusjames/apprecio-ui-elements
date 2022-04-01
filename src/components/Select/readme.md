Based from <a href="https://www.npmjs.com/package/rc-select" style="color: #4d24cc;">rc-select</a><br>


#### Ejemplos

```jsx
import React from 'react';
import Select, {Option} from './Select';
import LeftIcon from './assets/Left_Icon.svg';

const [selectValue, setSelectValue] = React.useState('');
const [selectFilterValue, setSelectFilterValue] = React.useState('');
const [selectValueSecond, setSelectValueSecond] = React.useState();
const [selectValueThird, setSelectValueThird] = React.useState();
const [selectValueFourth, setSelectValueFourth] = React.useState();
const [selectValueFifth, setSelectValueFifth] = React.useState();

const NotFoundContent = () => <div style={{textAlign: 'center', margin: '5px'}}>Busqueda no encontrado</div>;

<div className="ap-flex ap-flex-wrap -mx-1">
  <div className="ap-w-full md:ap-w-1/3 ap-px-1 ap-mb-2">
    <p className={'ap-mb-2'}>Ejemplo</p>
    <Select
      value={selectValue}
      onChange={val => setSelectValue(val)}
      placeholder={'placeholder content'}
    >
      <Option value="jack">jack</Option>
      <Option value="lucy">jack1</Option>
      <Option value="yiminghe">yiminghe</Option>
      <Option value="yiminghe1">yiminghe1</Option>
      <Option value="yiminghe2">yiminghe2</Option>
      <Option value="yiminghe3">yiminghe3</Option>
      <Option value="yiminghe4">yiminghe4</Option>
    </Select>
  </div>
  <div className="ap-w-full md:ap-w-1/3 ap-px-1 ap-mb-2">
    <p className={'ap-mb-2'}>Filter options</p>
    <Select
      value={selectFilterValue}
      notFoundContent={<NotFoundContent/>}
      showSearch
      onChange={val => setSelectFilterValue(val)}
      placeholder={'type and search'}
    >
      <Option value="react">react</Option>
      <Option value="angular">angular</Option>
      <Option value="vue">vue</Option>
      <Option value="svelte">svelte</Option>
    </Select>
  </div>
  <div className="ap-w-full md:ap-w-1/3 ap-px-1">
    <p className={'ap-mb-2'}>Disabled</p>
    <Select
      value={selectValueSecond}
      onChange={val => setSelectValueSecond(val)}
      placeholder={'placeholder content'}
      disabled
    >
      <Option value="jack">jack</Option>
      <Option value="lucy">lucy lorem inpsum lorem ipsum lucy lorem inpsum lorem ipsum</Option>
      <Option value="yiminghe">yiminghe</Option>
      <Option value="yiminghe1">yiminghe1</Option>
      <Option value="yiminghe2">yiminghe2</Option>
      <Option value="yiminghe3">yiminghe3</Option>
      <Option value="yiminghe4">yiminghe4</Option>
    </Select>
  </div>
  <div className="ap-w-full md:ap-w-1/3 ap-px-1">
    <p className={'ap-mb-2'}>Default Value</p>
    <Select
      value={selectValueThird}
      onChange={val => setSelectValueThird(val)}
      placeholder={'placeholder content'}
      defaultValue={'jack'}
    >
      <Option value="jack">jack</Option>
      <Option value="lucy">lucy lorem inpsum lorem ipsum lucy lorem inpsum lorem ipsum</Option>
      <Option value="yiminghe">yiminghe</Option>
      <Option value="yiminghe1">yiminghe1</Option>
      <Option value="yiminghe2">yiminghe2</Option>
      <Option value="yiminghe3">yiminghe3</Option>
      <Option value="yiminghe4">yiminghe4</Option>
    </Select>
  </div>
  <div className="ap-w-full md:ap-w-1/3 ap-px-1">
    <p className={'ap-mb-2'}>Error</p>
    <Select
      value={selectValueFourth}
      onChange={val => setSelectValueFourth(val)}
      placeholder={'placeholder content'}
      defaultValue={'jack'}
      error={'Error Message from handler'}
      color={'secondary'}
    >
      <Option value="jack">jack</Option>
      <Option value="lucy">lucy lorem inpsum lorem ipsum lucy lorem inpsum lorem ipsum</Option>
      <Option value="yiminghe">yiminghe</Option>
      <Option value="yiminghe1">yiminghe1</Option>
      <Option value="yiminghe2">yiminghe2</Option>
      <Option value="yiminghe3">yiminghe3</Option>
      <Option value="yiminghe4">yiminghe4</Option>
    </Select>
  </div>
  <div className="ap-w-full md:ap-w-1/3 ap-px-1">
    <p className={'ap-mb-2'}>with icon</p>
    <Select
      value={selectValueFifth}
      onChange={val => setSelectValueFifth(val)}
      placeholder={'placeholder content'}
      defaultValue={'jack'}
      icon={LeftIcon}
    >
      <Option value="jack">jack</Option>
      <Option value="lucy">lucy lorem inpsum lorem ipsum lucy lorem inpsum lorem ipsum</Option>
      <Option value="yiminghe">yiminghe</Option>
      <Option value="yiminghe1">yiminghe1</Option>
      <Option value="yiminghe2">yiminghe2</Option>
      <Option value="yiminghe3">yiminghe3</Option>
      <Option value="yiminghe4">yiminghe4</Option>
    </Select>
  </div>
</div>

```

#### Theming

```jsx
import Select, { Option } from './Select';

const [selectValue, setSelectValue] = React.useState();
const [selectValueSecond, setSelectValueSecond] = React.useState();
const [selectValueThird, setSelectValueThird] = React.useState();
const [selectValueFourth, setSelectValueFourth] = React.useState();

<div className="ap-flex ap-flex-wrap -mx-1">
    <div className="ap-w-full md:ap-w-1/3 ap-px-1 ap-mb-2">
        <p className={'ap-mb-2'}>primary</p>
        <Select
            value={selectValue}
            onChange={val => setSelectValue(val)}
            placeholder={'placeholder content'}
            color={'primary'}
        >
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy lorem inpsum lorem ipsum lucy lorem inpsum lorem ipsum</Option>
            <Option value="yiminghe">yiminghe</Option>
            <Option value="yiminghe1">yiminghe1</Option>
            <Option value="yiminghe2">yiminghe2</Option>
            <Option value="yiminghe3">yiminghe3</Option>
            <Option value="yiminghe4">yiminghe4</Option>
        </Select>
    </div>
    <div className="ap-w-full md:ap-w-1/3 ap-px-1">
        <p className={'ap-mb-2'}>secondary</p>
        <Select
            value={selectValueSecond}
            onChange={val => setSelectValueSecond(val)}
            placeholder={'placeholder content'}
            color={'secondary'}
        >
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy lorem inpsum lorem ipsum lucy lorem inpsum lorem ipsum</Option>
            <Option value="yiminghe">yiminghe</Option>
            <Option value="yiminghe1">yiminghe1</Option>
            <Option value="yiminghe2">yiminghe2</Option>
            <Option value="yiminghe3">yiminghe3</Option>
            <Option value="yiminghe4">yiminghe4</Option>
        </Select>
    </div>
    <div className="ap-w-full md:ap-w-1/3 ap-px-1">
        <p className={'ap-mb-2'}>tertiary</p>
        <Select
            value={selectValueThird}
            onChange={val => setSelectValueThird(val)}
            placeholder={'placeholder content'}
            defaultValue={'jack'}
            color={'tertiary'}
        >
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy lorem inpsum lorem ipsum lucy lorem inpsum lorem ipsum</Option>
            <Option value="yiminghe">yiminghe</Option>
            <Option value="yiminghe1">yiminghe1</Option>
            <Option value="yiminghe2">yiminghe2</Option>
            <Option value="yiminghe3">yiminghe3</Option>
            <Option value="yiminghe4">yiminghe4</Option>
        </Select>
    </div>
    <div className="ap-w-full md:ap-w-1/3 ap-px-1">
        <p className={'ap-mb-2'}>quaternary</p>
        <Select
            value={selectValueFourth}
            onChange={val => setSelectValueFourth(val)}
            placeholder={'placeholder content'}
            defaultValue={'jack'}
            color={'quaternary'}
        >
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy lorem inpsum lorem ipsum lucy lorem inpsum lorem ipsum</Option>
            <Option value="yiminghe">yiminghe</Option>
            <Option value="yiminghe1">yiminghe1</Option>
            <Option value="yiminghe2">yiminghe2</Option>
            <Option value="yiminghe3">yiminghe3</Option>
            <Option value="yiminghe4">yiminghe4</Option>
        </Select>
    </div>
</div>

```
