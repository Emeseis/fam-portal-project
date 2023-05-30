<template>
  <v-app class="app">
    <AppBar></AppBar>
    <v-row style="flex: none;" class="mx-2 mt-2 mb-n5">
      <v-col cols="2" v-for="day in weekDays" :key="day" class="px-1 pt-0">
        <v-card rounded="lg" color="#1B3556" class="pa-2">
          <v-card rounded="lg" color="#60A4EC" class="text-white text-center">
            <h3>{{ day }}</h3>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <div class="mb-n2">
      <v-row style="flex: none;" class="ma-2">
        <v-col cols="2" v-for="day in aulas" :key="day" class="py-0 px-1">
          <v-card v-for="aula in day" rounded="lg" color="#1B3556" class="pa-2 text-white my-2">
            <h4 class="text-center" :class="!aula.materia ? 'invisible' : ''">⠀{{ aula.materia }}⠀</h4>
            <v-divider :thickness="3" style="opacity: 0.5;" class="mt-1 mb-2 rounded-lg" :class="!aula.materia ? 'invisible' : ''"></v-divider>
            <div class="text-body-2 text-center" :class="!aula.materia ? 'invisible' : ''">Professor: {{ aula.prof }}</div>
            <div class="text-body-2 text-center" :class="!aula.materia ? 'invisible' : ''">Turma: {{ aula.turma }}</div>
            <div class="text-body-2 text-center" :class="!aula.materia ? 'invisible' : ''">{{ aula.curso }}</div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script setup>
  import AppBar from '@/components/AppBar.vue';
  import { reactive } from 'vue';

  const weekDays = reactive(['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']);

  const aulas = reactive(
    [
      [
        { materia: 'Física', prof: 'Mônica', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'Física', prof: 'Mônica', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'Física', prof: 'Mônica', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'Física', prof: 'Mônica', turma: '57-05-A', curso: 'Ciência da Computação' },
      ],
      [
        { materia: 'Redes de Computadores', prof: 'Rogério', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'Redes de Computadores', prof: 'Rogério', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'Redes de Computadores', prof: 'Rogério', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'Redes de Computadores', prof: 'Rogério', turma: '57-05-A', curso: 'Ciência da Computação' },
      ],
      [
        { materia: null, prof: null, turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: null, prof: null, turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: null, prof: null, turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: null, prof: null, turma: '57-05-A', curso: 'Ciência da Computação' },
      ],
      [
        { materia: 'Tópicos Integradores', prof: 'Andréa', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'Tópicos Integradores', prof: 'Andréa', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'Engenharia de Software', prof: 'Bruno', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'Engenharia de Software', prof: 'Bruno', turma: '57-05-A', curso: 'Ciência da Computação' },
      ],
      [
        { materia: 'POO', prof: 'Rafael', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'POO', prof: 'Rafael', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'POO', prof: 'Rafael', turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: 'POO', prof: 'Rafael', turma: '57-05-A', curso: 'Ciência da Computação' },
      ],
      [
        { materia: null, prof: null, turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: null, prof: null, turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: null, prof: null, turma: '57-05-A', curso: 'Ciência da Computação' },
        { materia: null, prof: null, turma: '57-05-A', curso: 'Ciência da Computação' },
      ],
    ]
  );
</script>

<style> 
 .app {
    background-color: #60A4EC;
  }
  .invisible {
    visibility: hidden;
  }
</style>