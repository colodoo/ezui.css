# ezui.css
A CSS-style util

## 初衷

个人开发用到的CSS辅助类，因其他CSS框架对原组件样式具有侵入性。

## 文档

### 网格
采用flex写的网格CSS，参考bootstrap。

| 类名        | 说明   |
| --------  | -----:  |
| .ezui-row | 行 |
| .ezui-col-* |   1-12   |
| .ezui-col |    平分    |

### 布局
主要解决内容部分自动撑满高度。

| 类名        | 说明   |
| --------  | -----:  |
| .ezui-header  |  头部  |
| .ezui-col-* | 主体部分，自动撑满高度  |
| .ezui-footer  |    底部    |