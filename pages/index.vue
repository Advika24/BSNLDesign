<template>
  <div>
    <v-content>
       <carousel/>
       <v-container>
       <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
     <h2 style="color:DodgerBlue;" class="font-weight-medium">Enter Mobile Number:</h2>
    <v-text-field
      v-model="name"
      :counter="10"
      colr="white" light fixed app
      :rules="nameRules"
      solo
      label="Enter Mobile Number"
      required
    ></v-text-field>
    
    <v-btn
      class="text-center rounded-pill d-inline-flex align-center justify-center ma-3"
      height="64"
      width="128"
      color="red"
      @click="validate"
      >
      SUBMIT
     
    </v-btn>
    </v-form>
    </v-container>
    </v-content>
  </div>
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
      
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      
      },
      
    },
  }
</script>

<style> 
</style>