<template>

  <div>
   <confirmbreadcrumb/>
   
  
<!--confirmation box -->
   <br>
   <v-container>
      <v-row>
        <v-col
          align="center" >
         <v-icon size="150" color="#18B63D"> mdi-checkbox-marked-circle  </v-icon> 
          <h1 style=" color:#0160B0; font-family:Futura std" class="font-weight-heavy">Payment Successful  </h1> 
          <br>
          <br>
          <v-card
            class="mx-auto"
            max-width="750"
            max-height="500"
            outlined
            elevation="4"
            color="white">
            <br>
            <h3  style=" color:#0188C4; font-family:Futura std" class="font-weight-medium "> Your Primary Details are: </h3>
            <br>
            <h5 style=" color:#000000; font-family:Futura std" class="font-weight-medium "> John Doe <br> 9999999999 <br> johndoe@gmail.com </h5>
            <br>
          </v-card>
        </v-col>   
      
      </v-row>
    </v-container>
 </div>
</template>