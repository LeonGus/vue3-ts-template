<script setup lang="ts">
const timeSite = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
toggleDark()
</script>

<template>
  <HelloWorld />
  <div text-center mt-20>
    现在是： {{ timeSite }}
    <button @click="toggleDark()">
      切换
    </button>
    <i icon-btn i-carbon-logo-github align-text-top />
  </div>
</template>

