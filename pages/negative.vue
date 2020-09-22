<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-2 mr-16"
          outlined
          tile
        >
          col 1
        </v-card>
      </v-col>
      <v-col order="12">
        <v-card
          class="pa-2 mr-16"
          outlined
          tile
        >
          col 2
        </v-card>
      </v-col>
      <v-col order="1">
        <v-card
          class="pa-2 mr-16"
          outlined
          tile
        >
    
         col 3
         
        </v-card>
      </v-col>
            </v-row>
        

      
      </v-row>
        <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        sm="5"
        md="6"
      >
        <v-card
          class="pa-6 mt-16"
          outlined
          tile
        >
          col 4
        </v-card>
      </v-col>
     
      <v-col
        sm="6"
        md="5"
        offset-md="2"
        lg="6"
        offset-lg="0"
      >
        <v-card
          class="pa-2 mt-16"
          outlined
          tile
        >
          col 5
        </v-card>
      </v-col>
    </v-row>

   
         </v-container>
</template>