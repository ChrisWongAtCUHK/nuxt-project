<template>
  <div>
    <div>name: {{ user.name }}</div>
    <div>email: {{ user.email }}</div>
    <div>phone: {{ user.phone }}</div>
  </div>
</template>

<script setup>
  const route = useRoute();
  const { data: user } = useFetch(`/api/user/${route.params.id}`);
</script>