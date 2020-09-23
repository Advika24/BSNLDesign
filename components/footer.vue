<template>
    <div >
      <!-- The purpose was to hide the tabs and change according to what you select. -->
  
    <v-tabs
          v-model="tab"
      light
   background-color="white"
    color="blue"
    md="4"
    sm="2"
    xs="2"
    >
      <v-tab 
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>


    <v-tabs-items v-model="tab">
      <v-tab-item 
        v-for="item in items"
        :key="item.tab"
      >

      <v-row>
      <v-app-bar width="1920" dense color="blue"  flat tile>
        
        <v-btn text>{{item.button}} </v-btn>
        <v-btn text>{{item.button1}} </v-btn>
        <v-btn text>{{item.button2}} </v-btn>
              
        <v-btn text>{{item.button3}} </v-btn> 
        <v-btn text>{{item.button4}} </v-btn>
        <v-btn text>{{item.button5}} </v-btn>
      
        </v-app-bar> </v-row>
      </v-tab-item>
    </v-tabs-items>
   
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null
        ,
        items: [
            { tab: 'HOME'}, 
          { tab: 'SITEMAP'  },
          { tab: 'PREPAID'  },
          { tab: 'POSTPAID'},
          { tab: 'FIBER & WIFI' },
          { tab: 'CUSTOMIZE NUMBER'},
          
        ],
      }
    },
  }
</script>