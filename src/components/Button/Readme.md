// Readme.md
React component example:

```js
<Button size="large">Push Me</Button>
```

通过props配置Code wrapper样式:

```js { "props": { "className": "checks" } }
<Button>I’m transparent!</Button>
```

disable `view code` 按钮:

```jsx noeditor
<Button>Push Me</Button>
```

`static` modifier支持js代码高亮:

```jsx static
import React from 'react';
```

其他语言高亮:

```html
<Button size="large">Push Me</Button>
```

_支持所有的_ [Markdown](http://daringfireball.net/projects/markdown/) _语法_.