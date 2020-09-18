<template>
  <div>
    <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
   
    <h1 color-text="#015FAF"> PAY BILLS > DETAILS </h1>
    
  <v-form>
    <v-container>
      <v-row>
       <v-col cols="12" sm="6">
          <v-text-field
            label="Solo"
            single-line
            solo
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

    </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'HOME',
          disabled: false,
          href: 'http://localhost:3000/BSNLDesign/',
        },
        {
          text: 'PAY BILLS',
          disabled: false,
          href: 'http://localhost:3000/BSNLDesign/',
        },
        {
          text: 'POSTPAID',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
        {
          text: 'DETAILS',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
  }
</script>