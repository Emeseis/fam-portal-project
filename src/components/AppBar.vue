<template>  
  <v-toolbar 
    elevation="12"
    density="prominent"
    color="#1B3556"
  >
    <img
      max-width="300"
      width="300" 
      height="128"
      src="@/assets/fam.svg"
      class="ml-10"
    >  
    <div style="margin: auto">
      <v-btn
        variant="plain"
        color="white"
        size="x-large"
        class="mx-2"
        @click="$router.push('/')"
      >
        HOME
      </v-btn>
      <v-btn
        variant="plain"
        color="white"
        size="x-large"
        class="mx-2"
        disabled
      >
        NOTAS
      </v-btn>
      <v-btn
        variant="plain"
        color="white"
        size="x-large"
        class="mx-2"
        disabled
      >
        FALTAS
      </v-btn>
      <v-btn
        variant="plain"
        color="white"
        size="x-large"
        class="mx-2"
        disabled
      >
        EVENTOS
      </v-btn>
      <v-btn
        variant="plain"
        color="white"
        size="x-large"
        class="ml-2"
        @click="$router.push('/horarios')"
      >
        HORÁRIOS
      </v-btn>
    </div>
    <v-btn 
      style="margin: auto"
      icon="mdi-logout" 
      color="white"
      size="x-large"
      @click="logout"
    ></v-btn>
  </v-toolbar>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const logout = () => {
    router.push("/login");
  };
</script>

<style scoped>

</style>