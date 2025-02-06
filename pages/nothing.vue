<template>
  <div>
    error:
    <pre>{{ error.data }}</pre>
  </div>
</template>

<script setup>
const { error } = useFetch('/api/nothing');
</script>