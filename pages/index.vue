<template>
  <div>
    
    <!-- carousel on the homepage-->
    <carousel/>
       <br>
       <v-divider color="lightgrey"></v-divider>
       <v-container >
       <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          >
<!-- form to fill mobile number to pay bills/ recharge-->          
     <h1 style=" color:#0160B0; font-family:Futura std " class="font-weight-medium pa-sm-2">PAY BILLS/ RECHARGE</h1>
     <br>
     
     <v-row>
     <v-col 
       cols="12"
        md="2"
        sm="12" 
        
       >
       <h3 style="font-family:Futura std"  class="font-weight-medium pa-sm-2">ENTER NUMBER</h3>
       
     </v-col>
     
    <v-text-field
    class="pa-xs-auto pa-sm-6 "
      v-model="name"
      :counter="10"
      colr="white" light fixed app
      :rules="nameRules"
      style="font-family:futura std"
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
      class="text-center font-weight-regular shaped-pill d-inline-flex align-center justify-center ma-3  pa-sm-6 "
      height="45"
      width="128"
      color="red"
      style="font-family:futura std"
      @click="$router.push('PayBills')"
      >
      SUBMIT
    </v-btn>
    </v-col>
    </v-row>
    </v-form>
    </v-container>
    <v-divider color="lightgrey"></v-divider>
    
  </div>
</template>

<script>
export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Please enter valid contact number',
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