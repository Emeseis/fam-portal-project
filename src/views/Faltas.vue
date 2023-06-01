<template>
  <v-app class="app">
    <AppBar />
    <v-row class="ma-8">
      <v-col cols="4" class="pr-6">
        <UserInfoCard />
      </v-col>
      <v-col cols="8" class="pl-6">
        <v-card
          height="50px"
          color="#1B3556"
          rounded="lg"
          elevation="12"
          class="pa-5"
        >
          <h3 class="text-center text-white mt-n2">FALTAS</h3>
        </v-card>
        <v-card
          height="347px"
          color="#1B3556"
          rounded="lg"
          elevation="12"
          class="pa-4 mt-3"
        >
          <v-table>
            <thead>
              <tr>
                <th width="25%" class="text-left">DISCIPLINA</th>
                <th class="text-left">CARGA HORÁRIA</th>
                <th class="text-left">MÁXIMO DE FALTAS</th>
                <th class="text-left">TOTAL DE FALTAS</th>
                <th width="20%" class="text-left">ATUALIZADO EM</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in state.table" :key="item.name">
                <td>{{ item.description }}</td>
                <td>{{ item.workload }}</td>
                <td>{{ item.totalabsences }}</td>
                <td>{{ item.absences }}</td>
                <td>{{ item.updatedat }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup>
import AppBar from "@/components/AppBar.vue";
import UserInfoCard from "@/components/UserInfoCard.vue";
import { onBeforeMount, reactive } from "vue";

let response = {
  data: {
    name: "Guilherme Pedro Portugal",
    registrationNumber: "45283546837",
    course: "Ciencia da Computação",
    shedules: [
      0,
      {
        absences: 2,
        description: "Tópicos Integradores",
        id: "16dc2298-39a9-470b-96ae-8d508e7196c3",
        sheduleEnd: "1900-01-01T20:30:00",
        sheduleStart: "1900-01-01T19:00:00",
        totalabsences: 20,
        updatedat: "1900-01-01T20:30:00",
        workload: 40,
      },
      1,
      {
        absences: 0,
        description: "Engenharia de Software",
        id: "26dc2298-39a9-470b-96ae-8d508e7196c3",
        sheduleEnd: "1900-01-01T21:30:00",
        sheduleStart: "1900-01-01T20:40:00",
        totalabsences: 20,
        updatedat: "1900-01-01T20:30:00",
        workload: 40,
      },
    ],
    //   absences: 2,
    //   description: "Tópicos Integradores",
    //   i: "16dc2298-39a9-470b-96ae-8d508e7196c3",
    //   sheduleEnd: "1900-01-01T20:30:00",
    //   sheduleStart: "1900-01-01T19:00:00",
    //   totalabsences: 20,
    //   updatedat: "1900-01-01T20:30:00",
    //   workload: 40,
    // },
    // {
  },
};

let state = reactive({
  table: [],
});

onBeforeMount(() => {
  console.log(response);
  state.table = response.data.shedules;
  console.log(state.table);
});

// let faltas = [
//   {
//     DISCIPLINA: "Engenharia de Software",
//     CARGA: "40",
//     MAX: "10",
//     TOTAL: "0",
//     UPDATED: "",
//   },
//   {
//     DISCIPLINA: "Física Geral e Experimental",
//     CARGA: "80",
//     MAX: "20",
//     TOTAL: "0",
//     UPDATED: "",
//   },
//   {
//     DISCIPLINA: "Programação Orientada a Objetos",
//     CARGA: "80",
//     MAX: "20",
//     TOTAL: "0",
//     UPDATED: "",
//   },
//   {
//     DISCIPLINA: "Redes de Computadores",
//     CARGA: "80",
//     MAX: "20",
//     TOTAL: "0",
//     UPDATED: "",
//   },
//   {
//     DISCIPLINA: "Tópicos Integradores",
//     CARGA: "40",
//     MAX: "10",
//     TOTAL: "0",
//     UPDATED: "",
//   },
// ];
</script>

<style scoped>
:deep(.v-table .v-table__wrapper > table > thead > tr > th) {
  color: black !important;
  font-weight: bold !important;
}
</style>