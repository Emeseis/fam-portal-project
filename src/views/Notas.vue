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
          <h3 class="text-center text-white mt-n2">NOTAS</h3>
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
                <th class="text-left">N1</th>
                <th class="text-left">MP1 (50%)</th>
                <th class="text-left">N2</th>
                <th class="text-left">MP2 (30%)</th>
                <th class="text-left">N3</th>
                <th class="text-left">MP3 (20%)</th>
                <th class="text-left">MÉDIA PARCIAL</th>
                <th class="text-left">AR</th>
                <th class="text-left">MÉDIA FINAL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in notas" :key="item.name">
                <td>{{ item.DISCIPLINA }}</td>
                <td>{{ item.N1 }}</td>
                <td>{{ item.MP1 }}</td>
                <td>{{ item.N2 }}</td>
                <td>{{ item.MP2 }}</td>
                <td>{{ item.N3 }}</td>
                <td>{{ item.MP3 }}</td>
                <td>{{ item.MP }}</td>
                <td>{{ item.AR }}</td>
                <td>{{ item.MF }}</td>
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

  const notas = [
    { 
      DISCIPLINA: 'Engenharia de Software',
      N1: '', N2: '', N3: '', MP1: '', MP2: '', MP3: '', MP: '', MF: '', AR: ''
    },
    { 
      DISCIPLINA: 'Física Geral e Experimental',
      N1: '', N2: '', N3: '', MP1: '', MP2: '', MP3: '', MP: '', MF: '', AR: ''
    },
    { 
      DISCIPLINA: 'Programação Orientada a Objetos',
      N1: '', N2: '', N3: '', MP1: '', MP2: '', MP3: '', MP: '', MF: '', AR: ''
    },
    { 
      DISCIPLINA: 'Redes de Computadores',
      N1: '', N2: '', N3: '', MP1: '', MP2: '', MP3: '', MP: '', MF: '', AR: ''
    },
    { 
      DISCIPLINA: 'Tópicos Integradores',
      N1: '', N2: '', N3: '', MP1: '', MP2: '', MP3: '', MP: '', MF: '', AR: ''
    }
  ]
</script>

<style scoped>
  :deep(.v-table .v-table__wrapper > table > thead > tr > th) {
    color: black !important;
    font-weight: bold !important;
  }
</style>