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
     <h2 style="color:DodgerBlue;" class="font-weight-medium">PAY BILLS/ RECHARGE</h2>
     <br>
     <v-row>
     <v-col 
       cols="12"
       md="2">
       <h3 style="color:DodgerBlue;" class="font-weight-regular">Contact Number:</h3>
     </v-col>
     
    <v-text-field
      v-model="name"
      :counter="10"
      colr="white" light fixed app
      :rules="nameRules"
      solo
      label="Enter Mobile Number"
      required
    ></v-text-field>
    
    <v-col 
     cols="12"
     md="2">
    <v-btn
      class="text-center rounded-pill d-inline-flex align-center justify-center ma-3"
      height="45"
      width="128"
      color="red"
      @click="validate"
      >
      SUBMIT
    </v-btn>
    </v-col>
    </v-row>
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