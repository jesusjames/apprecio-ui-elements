**Uso básico**

```jsx
import BoxSVG from '../image/Box.svg';

<>
  <NotificationCard
    messages={
      { body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu, turpis non sed quisque id sed nisl." }
    }
  />
  <NotificationCard
    messages={[
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu, turpis non sed quisque id sed nisl.",
        image: BoxSVG,
        imageOrientation: "left"
      },
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu, turpis non sed quisque id sed nisl",
        image: BoxSVG,
        imageOrientation: "right"
      }
    ]}
  />
</>
```