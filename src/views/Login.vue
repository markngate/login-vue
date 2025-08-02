<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12" md="12">
        <v-sheet min-height="90vh" rounded="lg">
            <v-row
        class="justify-center align-center"
      >
            <v-col cols="12" md="8" sm="4" >
           <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                             v-model="email" type="email" id="user_email" placeholder="email"
                           ></v-text-field>
                           <v-text-field
                             v-model="password" type="password" id="user_password" placeholder="password" autocomplete="on"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="loginStore.login({email, password})">Login</v-btn>
                     </v-card-actions>
                  </v-card>
                  </v-col>
                  </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useLoginStore } from '../store/index' // login.js 에서 useLoginStore 함수 import
export default {
  data() {
    return {
      email: null, // 입력 된 이메일 데이터
      password: null // 입력 된 패스워드 데이터
    }
  },
  setup() {
    const loginStore = useLoginStore() // useLoginStore 함수 호출
    return { loginStore } // 템플릿에서 loginStore에 접근 할 수 있도록 return
  }
}
</script>