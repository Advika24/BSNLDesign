<template>

  <v-tabs
    
    background-color="white"
    color="blue"
  >
    <v-tab>
      HOME
    </v-tab>
    <v-tab>
      PREPAID
    </v-tab>
    <v-tab>
      POSTPAID
    </v-tab>
    <v-tab>
      FIBER AND WiFi
    </v-tab>
    <v-tab>
      CUSTOMIZE YOUR NUMBER
    </v-tab>

<v-row align="end">
      <v-col offset-md="8">
       
    <v-text-field centered="true"
            hide-details 
            label="Filled" 
            placeholder="Search" 
            filled 
            rounded 
            dense 
            single-line 
            append-icon="mdi-magnify" class="shrink">
    </v-text-field>
     </v-col>
   </v-row>
  </v-tabs>
 </v-tabs>
</template>