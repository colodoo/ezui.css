# ezui.css
适用于前端页面敏捷开发的CSS轻量级工具类。

## 为什么要用？

因其他CSS框架对原组件样式具有一定的侵入性。  

本工具类的宗旨是尽量少的去改变浏览器本身的样式，尽量避免因引入工具类带
来新的样式问题。

它在 **normalize.css** 的基础上对经常用到的类进行抽离，避免重复的CSS代码。

## 文档

### 引入

直接引入CSS方式，在dist目录中下载

### 网格
采用flex写的网格CSS，参考bootstrap。

| 类名        | 说明   |
| :--------:  | :-----:  |
| .ezui-row | 行 |
| .ezui-col-* |   均分为12块，可输入1-12   |
| .ezui-col |    平分    |

DEMO：
```css
<div class="ezui-row">
  <div class="ezui-col">.ezui-col</div>
  <div class="ezui-col">.ezui-col</div>
</div>
```

### 布局
主要解决内容部分自动撑满高度。

| 类名        | 说明   |
| :--------:  | :-----:  |
| .ezui-layout  |  布局  |
| .ezui-layout__header  |  头部  |
| .ezui-layout__content | 主体部分，自动撑满高度  |
| .ezui-layout__footer  |    底部    |

DEMO：
```css
<body class="ezui-layout">
  <div class="ezui-layout__header">.ezui-layout__header</div>
  <div class="ezui-layout__content">.ezui-layout__content</div>
  <div class="ezui-layout__footer">.ezui-layout__footer</div>
</body>
```

## 最后
欢迎您给出宝贵的意见。  
- [加入讨论](https://github.com/colodoo/ezui.css/issues)  