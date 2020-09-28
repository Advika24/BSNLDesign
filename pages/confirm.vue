<template>

  <div>
   <confirmbreadcrumb/>
  
<!--green confirmation box -->
    <v-row>
     <v-col align="center" 
       class="mx-auto pt-16 mt-16" width="500px" height="200px">
      </v-col>

    </v-row>
    <v-alert
    :value="alert"
      class="mx-auto"
      width="500px"
      height="200px"
      
      fill
      prominent     
      type="success"
      color="green"
    >
      <v-row>
        <v-col  align="center" >
        <h1>Payment Successful <br> </h1> 
        <h3> Your Primary Details are: </h3>
        <h5 > John Doe <br> 9999999999 <br> johndoe@gmail.com </h5>
        </v-col>   
      
      
            
      
        
       
       
      </v-row>
    </v-alert>
    </v-row>
 </div>
</template>