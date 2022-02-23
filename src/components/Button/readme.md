Lista de botones según guía de estilos

**Uso básico**

Tamaños y temas. Acepta cualquier otro tipo de props nativas de un elemento tipo <button/> (onClick, onChange, etc)

```jsx
<div>
    <p className="ap-mb-0.5">Primary</p>
    <div className="ap-flex ap-flex-wrap">
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Extra Small</p>
            <Button color={'primary'} onClick={() => alert('hola')} size={'extraSmall'}
                    className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'primary'} onClick={() => alert('hola')} disabled size={'extraSmall'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'primary'} size={'small'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'primary'} disabled size={'small'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Medium</p>
            <Button color={'primary'} size={'medium'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'primary'} disabled size={'medium'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Large</p>
            <Button color={'primary'} size={'large'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'primary'} disabled size={'large'}>Botón</Button>
        </div>
    </div>
</div>
<div>
    <p className="ap-mb-0.5">Secondary</p>
    <div className="ap-flex ap-flex-wrap">
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'secondary'} outline size={'extraSmall'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'secondary'} outline disabled size={'extraSmall'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'secondary'} outline size={'small'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'secondary'} outline disabled size={'small'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Medium</p>
            <Button color={'secondary'} outline size={'medium'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'secondary'} outline disabled size={'medium'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Large</p>
            <Button color={'secondary'} outline size={'large'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'secondary'} outline disabled size={'large'}>Botón</Button>
        </div>
    </ div>
</div>
<div>
    <p className="ap-mb-0.5">Tertiary</p>
    <div className="ap-flex ap-flex-wrap">
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'tertiary'} outline size={'extraSmall'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'tertiary'} outline disabled size={'extraSmall'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'tertiary'} outline size={'small'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'tertiary'} outline disabled size={'small'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Medium</p>
            <Button color={'tertiary'} outline size={'medium'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'tertiary'} outline disabled size={'medium'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Large</p>
            <Button color={'tertiary'} outline size={'large'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'tertiary'} outline disabled size={'large'}>Botón</Button>
        </div>
    </ div>
</div>
<div>
    <p className="ap-mb-0.5">Quaternary</p>
    <div className="ap-flex ap-flex-wrap">
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'quaternary'} outline size={'extraSmall'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'quaternary'} outline disabled size={'extraSmall'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Small</p>
            <Button color={'quaternary'} outline size={'small'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'quaternary'} outline disabled size={'small'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Medium</p>
            <Button color={'quaternary'} outline size={'medium'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color={'quaternary'} outline disabled size={'medium'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
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
    <div className="ap-flex ap-flex-wrap">
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Primary</p>
            <Button color='primary' className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color='primary' outline>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Secondary</p>
            <Button color='secondary' className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color='secondary' outline>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Tertiary</p>
            <Button color='tertiary' className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color='tertiary' outline>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Quaternary</p>
            <Button color='quaternary' className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color='quaternary' outline>Botón</Button>
        </div>
    </ div>
    <div className="ap-flex ap-flex-wrap ap-mt-0.5">
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Facebook</p>
            <Button color='facebook' className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            <Button color='facebook' outline>Botón</Button>
        </div>
    </ div>
</div>
```

**Block**

```jsx
<div>
    <p className="ap-mb-0.5">Primary</p>
    <div className="ap-flex ap-flex-wrap">
        <div className="ap-w-full md:ap-w-1/2">
            <p className="ap-mb-0.5">Normal</p>
            <Button color='primary' className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
        </div>
        <div className="ap-w-full md:ap-w-1/2">
            <p className="ap-mb-0.5">Block</p>
            <Button color='secondary' block className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
        </div>
    </ div>
</div>
```

**Button con iconos**

```jsx
import plusSVG from '../image/Plus.svg';
import SharedSVG from '../image/Shared.svg';
import {ReactSVG} from "react-svg";

<div>
    <div>
        <div className="ap-flex ap-flex-wrap">
            <div className="ap-w-full md:ap-w-1/4">
                <p className="ap-mb-0.5">Extra Small</p>
                <Button iconLeft={plusSVG} iconRight={SharedSVG} color={'primary'} size={'extraSmall'}
                        className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
                <Button iconLeft={<ReactSVG src={plusSVG}/>} iconRight={<ReactSVG src={SharedSVG}/>} color={'primary'} size={'extraSmall'}
                        className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            </div>
            <div className="ap-w-full md:ap-w-1/4">
                <p className="ap-mb-0.5">Small</p>
                <Button
                    iconLeft={plusSVG}
                    color={'primary'} size={'small'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
                <Button
                    iconLeft={plusSVG}
                    color={'primary'} disabled size={'small'}>Botón</Button>
            </div>
            <div className="ap-w-full md:ap-w-1/4">
                <p className="ap-mb-0.5">Medium</p>
                <Button
                    iconLeft={SharedSVG}
                    color={'primary'} size={'medium'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
                <Button
                    iconLeft={SharedSVG}
                    color={'primary'} disabled size={'medium'}>Botón</Button>
            </div>
            <div className="ap-w-full md:ap-w-1/4">
                <p className="ap-mb-0.5">Large</p>
                <Button
                    iconLeft={plusSVG}
                    color={'primary'} size={'large'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            </div>
        </ div>
    </div>
    <div>
        <div className="ap-flex ap-flex-wrap">
            <div className="ap-w-full md:ap-w-1/4">
                <p className="ap-mb-0.5">Small</p>
                <Button
                    iconLeft={(
                        <svg viewBox="0 0 20 20">
                            <path
                                d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                        </svg>
                    )}
                    color={'tertiary'} outline size={'extraSmall'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            </div>
            <div className="ap-w-full md:ap-w-1/4">
                <p className="ap-mb-0.5">Small</p>
                <Button
                    iconLeft={SharedSVG}
                    color={'tertiary'} size={'small'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            </div>
            <div className="ap-w-full md:ap-w-1/4">
                <p className="ap-mb-0.5">Medium</p>
                <Button
                    iconLeft={SharedSVG}
                    color={'tertiary'} size={'medium'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
                <Button
                    iconLeft={SharedSVG}
                    color={'tertiary'} disabled size={'medium'}>Botón</Button>
            </div>
            <div className="ap-w-full md:ap-w-1/4">
                <p className="ap-mb-0.5">Large</p>
                <Button
                    iconLeft={plusSVG}
                    color={'tertiary'} size={'large'} className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            </div>
            <div className="ap-w-full md:ap-w-1/4">
                <p className="ap-mb-0.5">Only Icon</p>
                <Button
                    iconLeft={plusSVG}
                    style={{minWidth: 'auto', borderColor: 'transparent'}}
                    color={'primary'} className={'ap-mr-0.5 ap-mb-0.5'}></Button>
                <Button
                    iconLeft={plusSVG}
                    style={{minWidth: 'auto', borderColor: 'transparent'}}
                    color={'secondary'} className={'ap-mr-0.5 ap-mb-0.5'}></Button>
                <Button
                    iconLeft={plusSVG}
                    style={{minWidth: 'auto', borderColor: 'transparent'}}
                    color={'tertiary'} className={'ap-mr-0.5 ap-mb-0.5'}></Button>
                <Button
                    iconLeft={plusSVG}
                    style={{minWidth: 'auto', borderColor: 'transparent'}}
                    color={'quaternary'} className={'ap-mr-0.5 ap-mb-0.5'}></Button>
                <Button
                    iconLeft={plusSVG}
                    style={{minWidth: 'auto', borderColor: 'transparent'}}
                    disabled
                    color={'secondary'} className={'ap-mr-0.5 ap-mb-0.5'}></Button>
            </div>
            <div className="ap-w-full md:ap-w-1/4">
                <p className="ap-mb-0.5">Only Icon</p>
                <Button
                    iconLeft={<ReactSVG src={SharedSVG} />}
                    outline
                    style={{minWidth: 'auto', borderColor: 'transparent'}}
                    color={'secondary'} className={'ap-mr-0.5 ap-mb-0.5'}></Button>
                <Button
                    iconLeft={<ReactSVG src={SharedSVG} />}
                    outline
                    style={{minWidth: 'auto', borderColor: 'transparent'}}
                    disabled
                    color={'secondary'} className={'ap-mr-0.5 ap-mb-0.5'}></Button>
            </div>
            <div className="ap-w-full md:ap-w-1/2">
                <p className="ap-mb-0.5">Block</p>
                <Button iconLeft={<ReactSVG src={plusSVG} />} iconRight={<ReactSVG src={SharedSVG} />} color='secondary' block className={'ap-mr-0.5 ap-mb-0.5'}>Botón</Button>
            </div>
        </div>
    </div>
</div>
```
