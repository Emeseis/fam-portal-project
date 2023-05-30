<template>
  <v-app class="app-login">
    <v-container class="d-flex align-center justify-center" style="height: 100vh;">
      <div>
        <svg
          width="148"
          height="148"
          viewBox="0 0 196 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="margin: 0 auto; display: block;"
        >
          <circle cx="98" cy="98" r="98" fill="#1B3556"/>
          <path fill="white" d="M97.5003 181.76C83.7876 181.76 70.8485 178.437 59.4362 172.554H72.037L79.081 138.698L81.1913 128.718C81.1454 128.722 80.626 128.766 80.0495 128.821C69.5646 130.094 62.3855 133.242 56.9596 138.979C49.9309 146.411 46.9663 156.356 45.6121 163.59C43.4126 161.835 41.3065 159.97 39.2964 158.004C41.147 150.568 44.5538 141.768 51.0665 134.882C59.4578 126.008 71.4835 122.709 91.9519 122.709C91.9519 122.709 133.748 122.712 133.78 122.712C138.219 122.712 139.785 122.712 142.849 118.327L172.173 79.1327L119 78.8929C103.678 79.7052 88.9573 80.797 73.2401 101.273L60.0642 118.471L72.5334 72.2974C51.3861 76.554 43.6417 82.3095 37.6268 105.983L28.8338 145.583C19.5242 132.069 14.0656 115.675 14.0656 98.0004C14.0656 51.7413 51.4195 14.2401 97.5003 14.2401C111.306 14.2401 124.325 17.6098 135.794 23.5682L102.832 23.4519C93.169 23.3327 82.6681 23.4462 72.963 36.8989C72.963 36.8989 53.3955 63.4851 44.3686 79.5661C49.713 71.8001 61.7819 67.1116 73.7623 66.6405L134.923 66.6292L134.934 66.6278C137.087 66.6278 138.85 66.6278 140.953 63.8341C140.953 63.8341 149.959 51.2795 157.898 40.2133C172.171 55.2437 180.934 75.5941 180.934 98.0004C180.934 144.259 143.58 181.76 97.5003 181.76ZM162.089 34.3684C166.452 28.2873 169.751 23.6888 169.751 23.6888L149.471 23.6164C134.764 13.2412 116.842 7.14587 97.5003 7.14587C47.5184 7.14587 7 47.8225 7 98.0004C7 119.457 14.4137 139.174 26.8049 154.719L22.8258 172.64H36.9194C37.0719 171.604 37.2543 169.281 37.7027 166.19C39.8757 168.112 42.1413 169.931 44.4925 171.639C44.4521 172.01 44.4152 172.321 44.3811 172.554H45.7736C60.436 182.826 78.265 188.854 97.5003 188.854C147.481 188.854 188 148.178 188 98.0004C188 73.219 178.113 50.7602 162.089 34.3684Z"/>
        </svg>
        <div class="text-h4 font-weight-black text-white text-center my-16 py-7">Acesse a plataforma</div>
        <div class="text-h4 text-white text-center fam">FAM.BR</div>
      </div>
      <v-card
        width="450px"
        class="rounded-lg px-4 py-16"
        elevation="8"
        color="#60A4EC"
        style="margin-left: 200px"
      >
        <v-card-text>
          <v-form
            v-model="valid"
            @submit.prevent="onSubmit"
            ref="form"
          >
            <v-row class="ma-0">
              <v-col cols="3" class="pa-0 pt-3">
                <span class="text-white text-h6">CPF</span>
              </v-col>
              <v-col cols="9" class="pa-0">
                <v-text-field
                  variant="solo"
                  density="compact"
                  v-model="cpf"
                  :readonly="loading"
                  :rules="[rules.required, rules.length]"
                  bg-color="#1B3556"
                  placeholder="12345678900"
                  class="mt-2 mb-4"
                  counter="11"
                >
                  <template v-slot:prepend-inner>
                    <v-icon color="#7C7C8A">mdi-login</v-icon>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <v-row class="ma-0">
              <v-col cols="3" class="pa-0 pt-1">
                <span class="text-white text-h6">Senha</span>
              </v-col>
              <v-col cols="9" class="pa-0">
                <v-text-field
                  variant="solo"
                  density="compact"
                  v-model="pass"
                  :readonly="loading"
                  :rules="[rules.required]"
                  :type="showPass ? 'text' : 'password'"
                  bg-color="#1B3556"
                  placeholder="***********"
                >
                  <template v-slot:prepend-inner>
                    <v-icon color="#7C7C8A">mdi-lock-outline</v-icon>
                  </template>
                  <template v-slot:append-inner>
                    <v-icon color="#7C7C8A" @click="showPass = !showPass;">
                      {{ showPass ? 'mdi-eye-outline' : 'mdi-eye-off-outline' }}
                    </v-icon>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <v-row class="ma-0 my-n3">
              <v-col cols="3" class="pa-0"></v-col>
              <v-col cols="9" class="pa-0">
                <v-checkbox v-model="remember" label="Lembrar" color="#1B3556" class="text-white" style="margin-left: -11px;"></v-checkbox>
              </v-col>
            </v-row>
            <v-btn
              :loading="loading"
              block
              rounded="md"
              class="text-white"
              color="#1B3556"
              size="default"
              type="submit"
              variant="elevated"
              style="text-transform: none"
              :disabled="!valid"
            >
              Entrar na plataforma
            </v-btn>
            <div class="mt-4">
              <span class="forgot text-white" @click="forgotPass">Esqueceu a senha?</span>
            </div>
            <div class="mt-4">
              <span class="text-white">Suporte: informatica@fam.br</span>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
    <v-dialog v-model="errorDialog.isDialog" width="800">
      <v-alert :text="errorDialog.msg" type="error"></v-alert>
    </v-dialog>
  </v-app>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, reactive } from 'vue';
  // import axios from 'axios';
  
  const remember = ref(true);
  const form = ref(null);
  const router = useRouter();
  const valid = ref(false)
  const cpf = ref(null);
  const pass = ref(null);
  const loading = ref(false);
  const showPass = ref(false);

  const errorDialog = reactive({
    isDialog: false,
    msg: "",
  });

  const rules = reactive({
    required: value => !!value || 'Campo obrigatório',
    length: value => value.length == 11 || 'É necessário ter 11 digitos',
  });

  const loginSuccess = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    router.push('/');
  }

  const onSubmit = async () => {
    loading.value = true;

    let user = {
      Login: cpf.value,
      Password: pass.value
    }

    form.value.validate()
    
    if (valid.value) {
      // axios.post('url', user) //colocar a url certa
      //   .then(response => {
      //     if (response.data.rsl) {
      //       loading.value = false;
            loginSuccess(user);
      //     } else {         
      //       loading.value = false; 
      //       localStorage.removeItem("user");
      //       errorDialog.msg = 'Usuário ou senha incorreto!',
      //       errorDialog.isDialog = true;
      //     }
      //   });
    } else {
      loading.value = false;
      errorDialog.msg = 'Usuário ou senha preenchidos incorretamente.',
      errorDialog.isDialog = true;
    }
  };

  const forgotPass = () => {
    console.log('forgot');
  };
</script>
 
<style>
  .v-field--variant-solo {
    color: #7C7C8A !important;
    font-weight: 500;
  }
  .v-field__prepend-inner > .v-icon {
    opacity: 1 !important;
  }
</style>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&display=swap');
  .fam {
    font-family: 'Fira Sans Condensed' !important;
  }
  .v-container {
    transform: scale(1);
  }
  .app-login {
    background-color: #17518E;
  }
  .forgot {
    text-decoration: underline !important;
  }
  .forgot:hover {
    cursor: pointer;
  }
</style>