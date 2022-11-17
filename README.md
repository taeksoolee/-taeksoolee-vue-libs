# @taeksoolee/vue-design-system
- based on vue@3

## 🚀 Getting Start
- 🔥 Start project
```shell
vue create my-app # vue3
vue add typescript
```

- ⚙️ Add package.json dependencies
```json
{
  "dependencies": {
    "@taeksoolee/vue-design-system": "https://github.com/taeksoolee/vue-libs.git",
  }
}
```
- 🚚 Install Pacakge
```shell
npm install
```
- 📝  Write Code
``` typescript
// main.ts

import { initTheme } from '@taeksoolee/vue-design-system';
// ...
initTheme({
  colors: {}
});

```
```vue
// Test.vue
<script lang="ts" setup>
import { TBox } from '@taeksoolee/vue-design-system';
</script>

<template>
  <t-box>Hello world</t-box>
</template>
```

## 🧩 Set auto complete
- ⚙️ ts.config.json
```json
{
  "compilerOptions": {
    "types": ["@haezoom/design-system"],
  }
}
```