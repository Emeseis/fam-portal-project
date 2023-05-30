<template>
  <v-app class="app">
    <AppBar/>
    <v-row class="ma-8">
      <v-col cols="4" class="pr-6">
        <UserInfoCard/>
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
              <tr v-for="item in faltas" :key="item.name">
                <td>{{ item.DISCIPLINA }}</td>
                <td>{{ item.CARGA }}</td>
                <td>{{ item.MAX }}</td>
                <td>{{ item.TOTAL }}</td>
                <td>{{ item.UPDATED }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup>
  import AppBar from '@/components/AppBar.vue';    
  import UserInfoCard from '@/components/UserInfoCard.vue';

  const faltas = [
    { 
      DISCIPLINA: 'Engenharia de Software',
      CARGA: '40', MAX: '10', TOTAL: '0', UPDATED: ''
    },
    { 
      DISCIPLINA: 'Física Geral e Experimental',
      CARGA: '80', MAX: '20', TOTAL: '0', UPDATED: ''
    },
    { 
      DISCIPLINA: 'Programação Orientada a Objetos',
      CARGA: '80', MAX: '20', TOTAL: '0', UPDATED: ''
    },
    { 
      DISCIPLINA: 'Redes de Computadores',
      CARGA: '80', MAX: '20', TOTAL: '0', UPDATED: ''
    },
    { 
      DISCIPLINA: 'Tópicos Integradores',
      CARGA: '40', MAX: '10', TOTAL: '0', UPDATED: ''
    }
  ]
</script>

<style scoped>
  :deep(.v-table .v-table__wrapper > table > thead > tr > th) {
    color: black !important;
    font-weight: bold !important;
  }
</style>