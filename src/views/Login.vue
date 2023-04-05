<template>
  <v-container class="d-flex align-center justify-center" style="height: 100vh;">
    <v-card 
      width="450px" 
      class="rounded-lg pa-4" 
      elevation="8"
    >
      <v-img 
        width="200px" 
        src="https://www.fam.br/wp-content/uploads/2022/12/arte-5.png"
        style="margin: 0 auto;"
      ></v-img>
      <v-card-title class="">
        <h3>Bem-vindo ao Portal FAM!</h3>
      </v-card-title>
      <v-card-text>
        <span>Lorem ipsum dolor sitfugius as quasi qe quil.</span>
        <v-form
          v-model="valid"
          @submit.prevent="onSubmit"
        >
          <v-text-field
            variant="underlined"
            v-model="cpf"
            :readonly="loading"
            :rules="[rules.required]"
            label="CPF"
            class="mt-2"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            v-model="pass"
            :readonly="loading"
            :rules="[rules.required]"
            type="password"
            label="Password"
            placeholder="Enter your password"
            class="mb-2"
          ></v-text-field>
          <v-btn
            :loading="loading"
            block
            rounded="lg"
            color="indigo-lighten-4"
            size="large"
            type="submit"
            variant="elevated"
            @click="onSubmit"
          >
            Log In
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  
  const valid = ref(false)
  const cpf = ref(null);
  const pass = ref(null);
  const loading = ref(false);

  const rules = reactive({
    required: value => !!value || 'Obrigatório',
  });

  const onSubmit = () => {
    loading.value = !loading.value;
  }
</script>
 
<style>
 .input-test {
    border-radius: 8px;
 }
</style>