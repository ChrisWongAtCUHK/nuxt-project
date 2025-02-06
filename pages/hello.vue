<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
<script setup>
const { data: message } = useFetch('/api/hello');
</script>