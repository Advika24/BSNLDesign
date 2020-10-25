<!-- form -->
<template>
<div>
<breadcrumb/>
<v-container class="pa-xs-6 ma-xs-6">
<h1 style="color:#0161B0; font-family:futura std"> Postpaid Bill > Details </h1>
  <v-form
    ref="form"
   >
   <v-row>
   <v-col 
   cols="12"
   md="2">
   <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Mobile Number:</h3>
   </v-col> 
    <v-text-field
      v-model="name"
      :counter="10"
      color="white" light fixed app
      :rules="nameRules"
      solo
      style="font-family:futura std"
      label="Mobile Number"
      required
    ></v-text-field>
    </v-row>

 <v-row>
   <v-col 
   cols="12"
   md="2">
   <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Account Number:</h3>
   </v-col> 
    <v-text-field
      v-model="email"
      color="white" light fixed app
      solo
      label="Account Number"
      style="font-family:futura std"
      required
    ></v-text-field>
  </v-row>

 <h5 style="color:black; text-align:center; font-family:futura std" class="font-weight-light"> Please enter email id and contact number to receive payment details </h5>

 <v-row>
   <v-col 
   cols="12"
   md="2">
   <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Email Id:</h3>
   </v-col> 
    <v-text-field
      v-model="email"
      color="white" light fixed app
      :rules="emailRules"
      solo
      label="Email Id"
      style="font-family:futura std"
      required
    ></v-text-field>
 </v-row>

 <v-row>
   <v-col 
   cols="12"
   md="2">
   <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Contact Number:</h3>
   </v-col> 
      <v-text-field
      v-model="email"
      color="white" light fixed app
      :counter="10"
      :rules="nameRules"
      solo
      style="font-family:futura std"
      label="Contact Number"
      required
    ></v-text-field>
  </v-row>

<v-row 
     align="center"
     justify="center">
<v-col

      cols="12"
      md="2">
    <v-checkbox
      v-model="checkbox"
      color="#0161B0" light 
      style="font-family:futura std"
      label="Remember Me"
      
    ></v-checkbox>
    </v-col>
<v-col
      cols="12"
      md="2">
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      style="font-family:futura std"
      
     @click="check; $router.push('confirm')"
    >
     SUMBIT
    </v-btn>
    </v-col>
</v-row>

   
  </v-form>
  </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Please enter valid details',
        ],
      emailRules: [
        v => !!v || 'Please enter valid details',
        ],
      
      
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
     
    goToEvents: function () {
        location.href='http://localhost:3000/BSNLDesign/PayBills'
    }
},
    
  }
</script>