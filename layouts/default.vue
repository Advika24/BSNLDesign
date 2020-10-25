<template>
  <!--Your App Starts Here -->
  
  <v-app id="inspire">
    
    <!--Header -->
    
     
       <v-app-bar style="font-family:futura std" color="white" light fixed app height="120px">
         <v-row
    
  >

    <!--Hamburger menu dropdown for sm and xs screens -->


    <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          width="60px"
          height="60px"
          v-bind="attrs"
          v-on="on"
          class="hidden-md-and-up"
          justify="start"
          @click.stop="drawer = !drawer"
          style="font-family:futura std"
          >
          menu
        </v-btn>
      </template>

      <v-expansion-panels accordion >
    <v-expansion-panel
    style="background-color:#0161B0;"
    >
      <v-expansion-panel-header style="font-family:futura std">HOME</v-expansion-panel-header>
      <v-expansion-panel-header style="font-family:futura std">PREPAID</v-expansion-panel-header>
      <v-expansion-panel-header style="font-family:futura std">POSTPAID</v-expansion-panel-header>
      <v-expansion-panel-header style="font-family:futura std">FIBER AND WIFI</v-expansion-panel-header>
      <v-expansion-panel-header style="font-family:futura std">CUSTOMIZE MOBILE NUMBER</v-expansion-panel-header>
      
    </v-expansion-panel>
  </v-expansion-panels>









    </v-menu>
    <div class="mx-4 hidden-sm-and-down"></div>
    </v-row>

    <!--Logo  -->
       <v-row >
       <img src="bsnllogo.png" style="width: 180px; padding-left: 50px ; padding-right: 50px;" class=" pl-ml-16 hidden-xs-only">
       <img src="bsnllogo.png" style="width: 150px; padding-left: 50px ; padding-right: 50px;" class=" pl-ml-16 hidden-sm-and-up">
        </v-row >
        
       <!-- Component Example -->
        <v-row  justify="start" class="  col-md-7">
       <tabs/>
       </v-row>

       <!--Search bar -->
       <v-row  justify="end" class="  col-md-2 col-xs-1 col-sm-2">
          <v-text-field centered="true"
            hide-details 
            label="Filled" 
            placeholder="Search" 
            filled 
            rounded 
            dense 
            single-line 
            append-icon="mdi-magnify" class="hidden-xs-only"
            style="font-family:futura std">
            
         </v-text-field>
       </v-row>

        <v-row  justify="end" class="col-md-2 col-xs-1 col-sm-4 hidden-xs-only">
          <v-col  justify="end">
            <v-btn text small color="primary" style="font-family:futura std" class="mt-6">career</v-btn>
            <v-btn text small color="primary" style="font-family:futura std" class="mt-6">corporate</v-btn>
          </v-col>
          <v-col>
            <v-btn text small color="primary" style="font-family:futura std" class="mt-n12">Sign up</v-btn>
            <v-btn text small color="primary" style="font-family:futura std" class="mt-n12">Log in</v-btn>
          </v-col>
        </v-row>
      
     
    </v-app-bar>
    

    <!-- Body -->
    <subtab/>
    <v-content light>
     
    
      <nuxt /> 
      
    </v-content>
    
    
   
    
    
    <!-- Footer -->
 

<script>
export default {
  name: "Header",
 
};
</script>

     <v-footer color="#0161B0" 
    class= "white--text"
    padless>
      <v-row justify="start">
        <v-col align ="center" md="12" sm="12" xs="2" >
     
          <v-btn value="normal" depressed="false" color="#0161B0" style="font-family:futura std">
            <span>HELP</span>
          </v-btn>
          <v-btn value="recent"depressed="false" color="#0161B0" style="font-family:futura std">
            <span>SITEMAP</span>
          </v-btn>
          <v-btn value="recent" depressed="false" color="#0161B0" style="font-family:futura std">
            <span>PREPAID</span>
          </v-btn>
          <v-btn value="recent" depressed="false" color="#0161B0" style="font-family:futura std">
            <span>POSTPAID</span>
          </v-btn>
          <v-btn value="recent" depressed="false" color="#0161B0" style="font-family:futura std">
            <span>FIBER AND WIFI</span>
          </v-btn>
          <v-btn value="recent" depressed="false" color="#0161B0" style="font-family:futura std">
            <span>CUSTOMIZE NUMBER</span>
          </v-btn>
        </v-col>      
      </v-row>
    </v-footer> 

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          {panel:'PREPAID', button: 'Recharge', button1:'Prepaid to Postpaid',button2:'Roaming',button3: 'International Roaming', button4:'Upgrade',button5:'View Plans '},
          {panel:'POSTPAID', button: 'Pay Bills', button1:'Roaming',button2:'International Roaming', button3: 'View Plans' },
          {panel:'FIBER & WIFI', button: 'Why Bharat Fiber?', button1:'Check Locality',button2:'View Plans' },
          {panel:'CUSTOMIZE NUMBER', button: 'Vanity Numbers?', button1:'Fancy Numbers',button2:'Choose Mobile Number'},
          
        ],
      }
    },
  }
</script>

<style> 
  .white--text {
    border: 20px solid;
  }
   #inspire {
    background-color: white;
    color:black; 
  }
</style>