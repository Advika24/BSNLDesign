<!-- form -->
<template>
  <v-form
    ref="form"
    
  >
    <v-text-field
      v-model="name"
      :counter="25"
      color="white" light fixed app
      :rules="nameRules"
      label="Phone Number"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      color="white" light fixed app
      :rules="emailRules"
      label="Account Number"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      color="white" light fixed app
      :rules="emailRules"
      label="Email Id"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      color="white" light fixed app
      :rules="emailRules"
      label="Contact Number"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      color="white" light fixed app
      label="Remember Me"
      
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
     SUMBIT
    </v-btn>

   
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Please enter valid details',
        ],
      
      
      
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>