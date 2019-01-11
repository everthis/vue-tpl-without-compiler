# Vue 无编译环境使用说明

```
./
├── README.md
├── inline           // inline 模版，CSS 和 JS 代码
│   ├── icon.png
│   └── index.html
├── withComponent    // 外链 Vue 组件
│   ├── component.js // Vue组件
│   ├── icon.png
│   ├── index.css
│   └── index.html
└── withZepto        // Vue 与 Zepto 组合
    ├── icon.png
    ├── index.css
    ├── index.html
    └── index.js

3 directories, 11 files
```

### 要查看效果，用 chrome 打开对应目录下的 index.html 即可。

### 具体说明

1. web 应用挂载元素 `<div id="app"></div>`,
2. 页面的主要 Vue template 声明方式一（推荐）: `<script type="x-template" id="vue-tpl">`, 这里的`type`一定要是`x-template`, `id`在后面 Vue 实例化的时候，以`template: ${id}`的方式使用，
3. 页面的主要 Vue template 声明方式二: `new Vue({ template: ${template_string} })`, 这个地方的 template 属性值为字符串，
4. 对于需要重复使用的组件，使用`Vue.component("component-name", {})`的方式进行申明，可以放在单独文件里，使用的时候，在引入 `Vue` 框架文件后，以`<script src="./component.js"></script>`的方式引入，可以引入任意多个, 单个组件参考`withComponent`例子，
5. 最后是这个 web 应用的初始化（创建 Vue 实例），`new Vue({})` 这一部分放在引入`Vue`框架以及相关组件后再引入，如果 `Vue` 相关的业务代码里使用了其他库或者框架（比如`withZepto`例子里使用了`zepto`），需要先引入其他库或者框架，再进行 `Vue` 的实例化。
