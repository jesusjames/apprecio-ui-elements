
## Validación de formularios

La validación de formularios se realiza con ayuda de [react-hook-form](https://react-hook-form.com/api/usecontroller/controller)

```jsx
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { path } from 'ramda';

import Input from '../src/lib/atomic/atoms/Input/Input'
import Select, { Option } from '../src/lib/atomic/atoms/Select/Select'
import Button from '../src/lib/atomic/atoms/Button/Button'
import ErrorHandler from '../src/lib/web/ErrorHandler/index'

const { errors, handleSubmit, control } = useForm();

const onSuccessSubmit = (formField) => {
    console.log(formField);
};

const onChangeIntercepter = (value, options) => {
    console.log('value', value);
};

<form onSubmit={handleSubmit(onSuccessSubmit)}>
    <Select
        control={control}
        name="type"
        rules={{ required: 'Campo requerido' }}
        label={'Document Type'}
        error={ path(['type', 'message'], errors) }
        onChange={onChangeIntercepter}
    >
        <Option value={1}>Option 1</Option>
        <Option value={2}>Option 2</Option>
        <Option value={3}>Option 3</Option>
    </Select>
    <br />
    <Input
        control={control}
        name="document"
        rules={{ required: 'Campo requerido' }}
        label={'Docuement Number'}
        defaultValue={''}
        error={ path(['document', 'message'], errors) }
    />
    <br />
    <Button type={'submit'}>Enviar</Button>
</form>


```

