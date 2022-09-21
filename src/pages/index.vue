<script setup lang="ts">
import { useUser } from '../store/user'

const timeSite = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
const { userAge, addAge } = toRefs(useUser())
</script>

<template>
  <HelloWorld />
  <div text-center mt-20>
    现在是： {{ timeSite }}
    <button @click="toggleDark()">
      切换
    </button>
    <i icon-btn i-carbon-logo-github align-text-top />
    <p>
      store: 测试{{ userAge }}
      <el-button @click="addAge">
        ++
      </el-button>
    </p>
  </div>
</template>

