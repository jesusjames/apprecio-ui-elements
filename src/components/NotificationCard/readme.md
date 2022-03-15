**Uso básico**

```jsx
import BoxSVG from '../image/Box.svg';

<>
  <NotificationCard
    messages={
      { body: "Lorem ipsum something you know whatever. Lorem ipsum something you know whatever. Lorem ipsum something you know whatever. Lorem ipsum something you know whatever. Lorem ipsum something you know whatever" }
    }
  />
  <NotificationCard
    messages={[
      {
        body: "Lorem ipsum something you know whatever. Lorem ipsum something you know whatever. Lorem ipsum something you know whatever. Lorem ipsum something you know whatever. Lorem ipsum something you know whatever",
        image: BoxSVG,
        imageOrientation: "left"
      },
      {
        body: "Lorem ipsum something you know whatever. Lorem ipsum something you know whatever. Lorem ipsum something you know whatever. Lorem ipsum something you know whatever. Lorem ipsum something you know whatever",
        image: BoxSVG,
        imageOrientation: "right"
      }
    ]}
  />
</>
```