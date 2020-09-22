<template>
<v-container>
<v-row>
<v-col
    v-for="i in 3"
    :key=i
    cols="12"
    md="4"
    >
  <v-card
    class="pink pa-md-4 pa-sm-4 pa-xs-4 mx-lg-auto mx-sm-auto mx-xs-auto"
    color="white" light fixed app
    width="250px"
  >
    <v-card-text class= "white--text">
      Adjust screen size to see spacing changes
    </v-card-text>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>