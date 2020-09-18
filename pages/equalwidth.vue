<template>
  <v-container class="grey lighten-5">
    <v-row gutters>
      <template v-for="n in 4">
        <v-col :key="n">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            Column
          </v-card>
        </v-col>
        <v-responsive
          v-if="n === 1"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
        <v-responsive
          v-if="n === 3"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
        <v-responsive
          v-if="n === 4"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
      </template>
    </v-row>
  </v-container>
</template>