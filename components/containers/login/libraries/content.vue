<template>
  <v-row justify="center" align="center">
    <v-col cols="12" lg="4">
      <v-form ref="form" @submit.prevent="handleLogin">
        <v-text-field
          :rules="rules.username"
          required
          v-model="form.username"
          label="Email / Username"
          outlined
          dense
        />
        <v-text-field
          :rules="rules.password"
          required
          v-model="form.password"
          label="Password"
          type="password"
          outlined
          dense
        />
        <v-btn type="submit" color="primary" depressed block>
          <v-progress-circular
            v-show="loading"
            :loading="loading"
            :indeterminate="true"
            :size="14"
          />
          <span :class="loading ? 'ml-4' : ''">Login</span>
        </v-btn>
        <div class="py-3 text-center">
          <a href="#">Create an account</a>
        </div>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    form: {
      username: '',
      password: ''
    },
    rules: {
      username: [v => !!v || 'username is required'],
      password: [v => !!v || 'password is required']
    }
  }),
  methods: {
    async handleLogin() {
      
      if (this.$refs.form.validate()) {
        this.loading = true;
        
        try { 
          await this.$auth.loginWith('local', {
            data: {
              ...this.form
            }
          })
        } catch (error) {
          console.log(error);
        } finally {
          this.loading = false;
        }
      }
    }
  }
}
</script>