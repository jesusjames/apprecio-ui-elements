**Uso básico**

```jsx
import TestMemberPic from '../image/TestMemberPic.png';

<div className="ap-flex ap-flex-wrap">
  <div className="ap-w-full md:ap-w-1/2">
    <div style={{
      height: 80,
      width: 350,
      display: 'flex',
      justifyContent: 'space-around',
    }}>
      <MemberPicture src={TestMemberPic} />
      <MemberPicture />
    </div>
  </div>
  <div className="ap-w-full md:ap-w-1/2">
  </div>
</div>
```