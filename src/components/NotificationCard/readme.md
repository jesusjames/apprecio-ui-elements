**Uso básico**

```jsx
import BoxSVG from '../image/Box.svg';

<>
<div>
    <p className="ap-mb-0.5">Un sólo elemento</p>
    <div className="ap-flex ap-flex-wrap">
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Primary</p>
              <NotificationCard
                messages={
                  { body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu, turpis non sed quisque id sed nisl." }
                }
                variant="primary"
              />
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Secondary</p>
            <NotificationCard
                messages={
                  { body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu, turpis non sed quisque id sed nisl." }
                }
                variant="secondary"
              />
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Tertiary</p>
            <NotificationCard
                messages={
                  { body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu, turpis non sed quisque id sed nisl." }
                }
                variant="tertiary"
              />
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Quaternary</p>
            <NotificationCard
                messages={
                  { body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu, turpis non sed quisque id sed nisl." }
                }
                variant="quaternary"
              />
        </div>
    </div>
</div>
<br/>
<br/>
<div>
    <p className="ap-mb-0.5">Varios elementos</p>
    <div className="ap-flex ap-flex-wrap">
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Primary</p>
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
                variant="primary"
              />
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Secondary</p>
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
                variant="secondary"
              />
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Tertiary</p>
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
              variant="tertiary"
            />
        </div>
        <div className="ap-w-full md:ap-w-1/4">
            <p className="ap-mb-0.5">Quaternary</p>
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
              variant="quaternary"
            />
        </div>
    </ div>
</div>
</>
```