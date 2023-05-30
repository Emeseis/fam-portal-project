<template>  
  <v-card 
    color="#1B3556" 
    rounded="lg" 
    elevation="12"
    class="pa-4 text-center"
    height="409px"
  >
    <v-avatar color="surface-variant" size="192" class="mt-4">
      <v-icon size="192" icon="mdi-account-circle"></v-icon>
    </v-avatar>
    <div class="mt-8">
      <span class="text-card">Associação Educacional Americanense</span>
      <span class="text-card d-flex justify-start mt-2">Nome: {{ user.name }}</span>
      <span class="text-card d-flex justify-start mt-2">RA: {{ user.ra }}</span>
      <span class="text-card d-flex justify-start mt-2">Curso:  {{ user.course }}</span>
    </div>
  </v-card>
</template>

<script setup>
  import { reactive } from 'vue';
  
  let user = reactive({
    name: '',
    ra: '20230000',
    course: 'Ciência da Computação'
  });
</script>

<style scoped>
  .text-card {
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
</style>