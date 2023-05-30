<template>  
  <v-toolbar 
    elevation="12"
    density="prominent"
    color="#1B3556"
    height="56"
  >
    <img
      max-width="300"
      width="300" 
      height="96"
      src="@/assets/fam.svg"
      class="ml-10 my-2"
    >  
    <div style="margin: auto">
      <v-btn
        variant="plain"
        color="white"
        size="x-large"
        class="mx-2"
        @click="$router.push('/')"
        :ripple="false"
      >
        HOME
      </v-btn>
      <v-btn
        variant="plain"
        color="white"
        size="x-large"
        class="mx-2"
        @click="$router.push('/notas')"
        :ripple="false"
      >
        NOTAS
      </v-btn>
      <v-btn
        variant="plain"
        color="white"
        size="x-large"
        class="mx-2"
        @click="$router.push('/faltas')"
        :ripple="false"
      >
        FALTAS
      </v-btn>
      <v-btn
        variant="plain"
        color="white"
        size="x-large"
        class="ml-2"
        @click="$router.push('/horarios')"
        :ripple="false"
      >
        HORÁRIOS
      </v-btn>
      <v-btn
        variant="plain"
        color="white"
        size="x-large"
        class="mx-2"
        @click="$router.push('/eventos')"
        :ripple="false"
        disabled
      >
        EVENTOS
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
    localStorage.removeItem("user");
    router.push("/login");
  };
</script>

<style scoped>

</style>