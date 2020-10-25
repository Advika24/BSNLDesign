<!-- breadcrumbs -->
<template>
    <div>
     
     <v-breadcrumbs color="#0161B0" 
     light fixed app :items="items"
     style="font-family:futura std">
     </v-breadcrumbs>
     
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
          href: 'http://localhost:3000/BSNLDesign/PayBills',
        },
        {
          text: 'DETAILS',
          disabled: false,
          href: 'http://localhost:3000/BSNLDesign/PayBills',
        },
        {
          text: 'CONFIRMATION',
          disabled: false,
          href: 'http://localhost:3000/BSNLDesign/CONFIRM',
        },
      ],
    }),
  }
</script>