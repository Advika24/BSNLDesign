<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="white" light fixed app >
      <bsnllogo/>
     <search/>
     <hamburger/>
     <v-spacer></v-spacer>
    </v-app-bar>  
     
   <!-- Body -->
    <v-content light fixed>
      
      <nuxt/> 
    </v-content>
    
    <!-- Footer -->
    <v-footer color="blue" app 
    class= "white--text">
      <v-row justify="start">
        <v-col align ="center"  >
     
          <v-btn value="recent">
            <span>HELP</span>
          </v-btn>
          <v-btn value="recent">
            <span>SITEMAP</span>
          </v-btn>
          <v-btn value="recent">
            <span>PREPAID</span>
          </v-btn>
          <v-btn value="recent">
            <span>POSTPAID</span>
          </v-btn>
          <v-btn value="recent">
            <span>FIBER AND WIFI</span>
          </v-btn>
          <v-btn value="recent">
            <span>CUSTOMIZE NUMBER</span>
          </v-btn>
        </v-col>      
      </v-row>
    </v-footer> 
  </v-app> 
</template>

<script>
export default {}
</script>

<style> 
  .white--text {
    
  }

   #inspire {
    background-color: white;
  }
</style>