---
title: Button
---
# Button 按钮

<ClientOnly>
  <Demo />
</ClientOnly>

### API
通过设置 v-button 的属性来产生不同的按钮样式

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| htmlType | 设置 `button` 的原生 `type`值, 可选择值参考: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |
| icon | 设置按钮的图标类型 | string | - |
| loading | 设置按钮的载入状态 | boolean | false |
| circle | 设置圆形按钮 | boolean | false |
| size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default` |
| type | 设置按钮类型，可选值为 `primary` `dashed` `danger` 或者不设 | string | `default` |