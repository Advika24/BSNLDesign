<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
      sm="5"
      md="6"
    ></v-text-field>

    

    <v-btn
      :disabled="!valid"
      color="success"
      :items="items"
      class="mr-4"
      @click="validate"
      sm="5"
      md="6"
    >
      Validate
    </v-btn>

    

    
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Phone Number is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      valid: true,
      name: '',
      items: [
        {
          text: 'SUBMIT',
          disabled: true,
          href: 'http://localhost:3000/BSNLDesign/PayBills',
      
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