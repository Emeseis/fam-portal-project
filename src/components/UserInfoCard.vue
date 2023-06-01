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
      <span class="text-card d-flex justify-start mt-2"
        >Nome: {{ state.name }}</span
      >
      <span class="text-card d-flex justify-start mt-2"
        >RA: {{ state.ra }}</span
      >
      <span class="text-card d-flex justify-start mt-2"
        >Curso: {{ state.course }}</span
      >
    </div>
  </v-card>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";

let state = reactive({
  name: "",
  ra: "",
  course: "",
});

// // axios.post('url', user) //colocar a url certa
//   .then(response => {

let response = {
  data: {
    name: "Guilherme Pedro Portugal",
    registrationNumber: "45283546837",
    course: "Ciencia da Computação",
  },
};

onBeforeMount(() => {
  let data = response.data;
  state.name = data.name;
  state.ra = data.registrationNumber;
  state.course = data.course;
  // console.log("teste", response.data);
});
</script>

<style scoped>
.text-card {
  color: white;
  font-weight: bold;
  font-size: 20px;
}
</style>