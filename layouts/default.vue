<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="white" light fixed app >
      <bsnllogo/>
     <search/>
     <tabs/>
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
     
          <v-btn value="normal" depressed="false" color="blue">
            <span>HELP</span>
          </v-btn>
          <v-btn value="recent"depressed="false" color="blue">
            <span>SITEMAP</span>
          </v-btn>
          <v-btn value="recent" depressed="false" color="blue">
            <span>PREPAID</span>
          </v-btn>
          <v-btn value="recent" depressed="false" color="blue">
            <span>POSTPAID</span>
          </v-btn>
          <v-btn value="recent" depressed="false" color="blue">
            <span>FIBER AND WIFI</span>
          </v-btn>
          <v-btn value="recent" depressed="false" color="blue">
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