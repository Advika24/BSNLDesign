<!-- Postpaid Bills Details form  -->
<template>
  <div>
    <breadcrumb/>
   <v-container class="pa-xs-6 ma-xs-6">
      <h1 style="color:#0161B0; font-family:futura std" class="font-weight-regular"> POSTPAID BILLS DETAILS </h1>
      <v-row>
        <v-col
          align="center">
          <v-card
            color="white"
            elevation="0" 
            width="650"
            justify="space-around"
            align="center">

            <!-- Mobile Number details --> 

            <v-row  class= "col-sm-12" >
              <v-col 
                cols="12"
                md="4"
                align="start"
                justify="center">
                <!-- Mobile number header --> 
                <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Mobile Number:</h3>
              </v-col> 
              <!-- make a card with mobile number-->
              <v-text-field
                v-model="email"
                color="white" light fixed app
                :counter="10"
                solo
                :rules="nameRules"
                background-color="#F3F3F3"
                label="Mobile Number"
                style="font-family:futura std"
                required
              ></v-text-field>
            </v-row>
            
           <v-row class= "col-sm-12">
              <v-col 
                cols="12"
                md="4"
                align="start"
                justify="end">
                <!-- Account number header --> 
                <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Account Number:</h3>
              </v-col> 
              <!-- Account number text field --> 
              <v-text-field
                v-model="email"
                color="white" light fixed app
                solo
                background-color="#F3F3F3"
                label="Account Number"
                style="font-family:futura std"
                required
              ></v-text-field>
            </v-row>

           <!-- prompt asking for more details -->

            <h5 style="color:black; text-align:center; font-family:futura std" class="font-weight-light"> Please enter email id and contact number to receive payment details </h5>
            <br>

           <!-- Email Id details -->

            <v-row class= "col-sm-12">
              <v-col 
                cols="12"
                md="4"
                align="start"
                justify="end">
                <!-- Email id header --> 
                <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Email Id:</h3>
              </v-col> 
              <!-- Email id text field --> 
              <v-text-field
                v-model="email"
                color="white" light fixed app
                :rules="emailRules"
                background-color="#F3F3F3"
                solo
                label="Email Id"
                style="font-family:futura std"
                required>
              </v-text-field>
            </v-row>

           <!-- Contact Number details -->

            <v-row class= "col-sm-12">
              <v-col 
                cols="12"
                md="4"
                align="start"
                justify="end">
                <!-- Contact number header -->        
                <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Contact Number:</h3>
              </v-col>
              <!-- Contact number text field -->  
              <v-text-field
                v-model="email"
                background-color="#F3F3F3"
                color="white" light fixed app
                :counter="10"
                :rules="nameRules"
                solo
                style="font-family:futura std"
                label="Contact Number"
                required>
              </v-text-field>
            </v-row>

            <!-- Captcha details --> 

           <!-- captcha code text-->
            <v-card
              class="mx-auto"
              max-width="344"
              outlined
              color="white"
             >
              <v-list-item three-line>
                  <v-list-item-content>
                    
                    <v-list-item-title class="headline mb-1 " style= "color:black">
                      882639
                    </v-list-item-title>
                    
                  </v-list-item-content>
              </v-list-item>
            </v-card>

            <v-row class= "col-sm-12">
              <v-col 
                cols="12"
                md="4"
                align="start"
                justify="end">
                <!-- Captcha Code header -->        
                <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Captcha Code:</h3>
              </v-col>
              <!-- Captcha Code text field -->  
              <v-text-field
                v-model="email"
                background-color="#F3F3F3"
                color="white" light fixed app
                :rules="nameRules"
                solo
                style="font-family:futura std"
                label="Captcha Code"
                required>
              </v-text-field>
              <!-- Reload Button -->
              <v-btn
                class="text-center font-weight-regular shaped-pill d-inline-flex align-center justify-center ml-3"
                height="47"
                width="85"
                color="red"
                style="font-family:futura std"
               >
               Reload 
              </v-btn>
            </v-row>

           <!-- Remember Me checkbox and submit button-->

            <v-row 
              align="center"
              justify="center"
            >
              <v-col
                cols="12"
                md="4"
                align="center"
                justify="center">
                <!-- Remember Me checkbox-->
                <v-checkbox
                  v-model="checkbox"
                  color="#0161B0" light 
                  style="font-family:futura std"
                  label="Remember Me"
                ></v-checkbox>
              </v-col>

              <v-col
                cols="12"
                md="2"
                align="center"
                justify="center">
                <!-- Submit button-->
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    style="font-family:futura std"
                    @click="check; $router.push('ConfirmationPage')"
                    >
                    SUMBIT
                  </v-btn>
              </v-col>
            </v-row>

          </v-card>
        </v-col>
     </v-row>
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
        v => !!v || 'Please enter a valid Email Id details',
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