<template>


  <!--Horizontal menu tab is visible only in md and above screens -->
  <v-row
     
  >

 <v-col>
    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text small
          color="primary"
          class=" hidden-sm-and-down" 
          v-bind="attrs"
          v-on="on"
          width="50px" >
         <h3>HOME </h3>
        </v-btn>
      </template>
    </v-menu>
  </v-col>
    

  <v-col>
    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text small
          color="primary"
          class=" hidden-sm-and-down" 
          v-bind="attrs"
          v-on="on"
          width="50px" >
         <h3>PREPAID </h3>
        </v-btn>
      </template>
      
    </v-menu>
    </v-col>
    <v-col>

    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text small
          color="primary"
          class=" hidden-sm-and-down"
          v-bind="attrs"
          v-on="on"
           width="50px"
        >
          <h3>POSTPAID</h3>
        </v-btn>
      </template>
      
    </v-menu>
</v-col>
<v-col>

    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text small
          color="primary"
          class=" hidden-sm-and-down"
          v-bind="attrs"
          v-on="on"
           width="50px"
        >
           <h3>FIBER AND WIFI </h3>
        </v-btn>
      </template>
      
    </v-menu>
    </v-col>
    <v-col>

    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text small
          color="primary"
          class=" hidden-sm-and-down"
          v-bind="attrs"
          v-on="on"
          width="50px"
        >
          <h3>CUSTOMIZE NUMBER </h3>
        </v-btn>
      </template>
      
    </v-menu>
    </v-col>

    
    </v-row>
  
</template>