<template>
  <v-app class="app">
    <AppBar></AppBar>
    <v-row class="ma-8">
      <v-col cols="4" class="pr-6">
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
      </v-col>
      <v-col cols="8" class="pl-6">
        <v-card 
          height="409px" 
          color="#1B3556" 
          rounded="lg" 
          elevation="12"
          class="pa-5"
        >
          <v-data-table
            :items-per-page="5"
            :headers="headers"
            :items="messages"
            @click:row="(event, item) => openMessage(event, item)"
            item-value="name"
            class="elevation-1"
            height="316"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogInfo.isDialog" width="1280px">
      <v-card class="pa-8" color="#60A4EC" rounded="lg">
        <v-row no-gutters class="d-flex align-center mb-4">
          <v-avatar color="surface-variant" size="64">
            <v-icon size="64" icon="mdi-account-circle"></v-icon>
          </v-avatar>
          <span class="ml-4">{{ dialogInfo.message.sender }}</span>
          <v-spacer></v-spacer>
          <span>{{ dialogInfo.message.date }}</span>
        </v-row>
        <h3>ASSUNTO:</h3>
        <div>{{ dialogInfo.message.assunto }}</div>
        <div class="my-4"></div>
        <h3>MENSAGEM:</h3>
        <div>{{ dialogInfo.message.content }}</div>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
  import { VDataTable } from 'vuetify/labs/VDataTable'
  import { reactive } from 'vue';
  import { messages } from '@/composables/lists.js'
  import AppBar from '@/components/AppBar.vue';

  let user = reactive({
    name: '',
    ra: '20230000',
    course: 'Ciência da Computação'
  });

  let headers = reactive([
    { title: "DATA", width: "15%", key: "date", sortable: false },
    { title: "ASSUNTO", width: "55%", key: "assunto", sortable: false },
    { title: "REMETENTE", width: "30%", key: "sender", sortable: false },
  ]);

  let dialogInfo = reactive({
    isDialog: false,
    message: {}
  });

  const openMessage = (_, item) => {
    dialogInfo.message = item.item.raw;
    dialogInfo.isDialog = true;
  };
  
</script>

<style scoped>
  .app {
    background-color: #60A4EC;
  }
  .text-card {
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
  :deep(.v-data-table-footer__items-per-page) {
    visibility: hidden;
  }
</style>