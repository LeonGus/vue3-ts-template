<template>
    <HelloWorld />
    <div text-center mt-20>
        现在是： {{timeSite}}
    <button @click="toggleDark()">切换</button>
    <i icon-btn i-carbon-logo-github align-text-top></i>
    </div>
</template>

<script setup lang="ts">
    let timeSite = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
</script>