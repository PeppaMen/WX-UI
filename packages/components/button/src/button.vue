<template>
  <button ref="_ref">check</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'WxButton',
})
const _ref = ref<HTMLButtonElement>()
</script>
