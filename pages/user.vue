<template>
  <div>
    <div>name: {{ user.name }}</div>
    <div>age: {{ user.age }}</div>
  </div>
</template>

<script setup>
const { data: user } = await useFetch('/api/user', {
  method: 'post',
  body: {
    name: 'Daniel',
    age: 18
  }
});
</script>