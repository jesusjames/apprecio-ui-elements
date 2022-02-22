Lista de botones según guía de estilos

**Uso básico**

Tamaños y temas. Acepta cualquier otro tipo de props nativas de un elemento tipo <button/> (onClick, onChange, etc)

```jsx
<div>
    <p className="ap-mb-0.5">Primary</p>
    <div className="ap-flex ap-flex-wrap">
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Extra Small</p>
            <Button color={'primary'} size={'extraSmall'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'primary'} disabled size={'extraSmall'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'primary'} size={'small'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'primary'} disabled size={'small'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Medium</p>
            <Button color={'primary'} size={'medium'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'primary'} disabled size={'medium'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Large</p>
            <Button color={'primary'} size={'large'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'primary'} disabled size={'large'}>Botón</Button>
        </div>
    </ div>
</div>
<div>
    <p className="ap-mb-0.5">Secondary</p>
    <div className="ap-flex ap-flex-wrap -mx-1">
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'secondary'} outline size={'extraSmall'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'secondary'} outline disabled size={'extraSmall'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'secondary'} outline size={'small'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'secondary'} outline disabled size={'small'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Medium</p>
            <Button color={'secondary'} outline size={'medium'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'secondary'} outline disabled size={'medium'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Large</p>
            <Button color={'secondary'} outline size={'large'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'secondary'} outline disabled size={'large'}>Botón</Button>
        </div>
    </ div>
</div>
<div>
    <p className="ap-mb-0.5">Tertiary</p>
    <div className="ap-flex ap-flex-wrap -mx-1">
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'tertiary'} outline size={'extraSmall'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'tertiary'} outline disabled size={'extraSmall'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'tertiary'} outline size={'small'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'tertiary'} outline disabled size={'small'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Medium</p>
            <Button color={'tertiary'} outline size={'medium'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'tertiary'} outline disabled size={'medium'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Large</p>
            <Button color={'tertiary'} outline size={'large'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'tertiary'} outline disabled size={'large'}>Botón</Button>
        </div>
    </ div>
</div>
<div>
    <p className="ap-mb-0.5">Quaternary</p>
    <div className="ap-flex ap-flex-wrap -mx-1">
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'quaternary'} outline size={'extraSmall'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'quaternary'} outline disabled size={'extraSmall'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'quaternary'} outline size={'small'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'quaternary'} outline disabled size={'small'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Medium</p>
            <Button color={'quaternary'} outline size={'medium'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'quaternary'} outline disabled size={'medium'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Large</p>
            <Button color={'quaternary'} outline size={'large'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'quaternary'} outline disabled size={'large'}>Botón</Button>
        </div>
    </ div>
</div>
```

**Theming**

```jsx

const testClick = () => {
    alert('hola')
};
<div>
    <p className="ap-mb-0.5">Primary</p>
    <div className="ap-flex ap-flex-wrap -mx-1">
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Primary</p>
            <Button color='primary' className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color='primary' outline>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Secondary</p>
            <Button color='secondary' className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color='secondary' outline>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Tertiary</p>
            <Button color='tertiary' hierarchy={'primary'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color='tertiary' outline>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4 px-1">
            <p className="ap-mb-0.5">Quaternary</p>
            <Button color='quaternary' className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color='quaternary' outline>Botón</Button>
        </div>
    </ div>
</div>
```

**Block**

```jsx

const testClick = () => {
    alert('hola')
};
<div>
    <p className="ap-mb-0.5">Primary</p>
    <div className="ap-flex ap-flex-wrap -mx-1">
        <div className="ap-w-full md:ap-w-1/2 px-1">
            <p className="ap-mb-0.5">Normal</p>
            <Button color='primary' className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/2 px-1">
            <p className="ap-mb-0.5">Block</p>
            <Button color='secondary' block className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
        </div>
    </ div>
</div>
```
