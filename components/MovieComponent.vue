<!-- components/UserListComponent.vue -->
<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>
    <div v-for="user in data" :key="user.id">
      <h2>Id {{ user.id }}</h2>
      <h2>{{ user.name }}</h2>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Address: {{ user.address.street }}, {{ user.address.city }}, {{ user.address.zipcode }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>Website: {{ user.website }}</p>
      <p>Company: {{ user.company.name }} - {{ user.company.catchPhrase }}</p>
      <hr>
    </div>
  </div>
</template>

<script setup>
import { useMovieFetchData } from '~/composables/useMovieFetchData';

const { data, loading, error } = useMovieFetchData();
</script>
