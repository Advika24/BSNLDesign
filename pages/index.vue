<template>
  <div>
    <v-content>
    <carousel/>
       <br>
       <v-divider color="lightgrey"></v-divider>
       <v-container >
       <v-form
          ref="form"
          v-model="valid"
          lazy-validation
  >
     <h2 style="color:#0161B0;" class="font-weight-medium pa-sm-2">PAY BILLS/ RECHARGE</h2>
     <br>
     
     <v-row>
     <v-col 
       cols="12"
        md="2"
        sm="12" 
        
       >
       <h3 style="color:#0161B0;" class="font-weight-regular pa-sm-2">Mobile Number:</h3>
     </v-col>
     
    <v-text-field
    class="pa-xs-auto pa-sm-6 "
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
     md="2"
     sm="5"
     xs="2">
    <v-btn
      class="text-center rounded-pill d-inline-flex align-center justify-center ma-3  pa-sm-6 "
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
    <v-divider color="lightgrey"></v-divider>
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