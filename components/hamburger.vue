	<template>
    <div id="app">
    <v-app id="inspire">
      <v-tabs
        background-color="white"
        color="blue">
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
        
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          
        </v-menu>
      </v-toolbar>
      </v-tabs>
    </v-app>
    </div>
    </template>

    <script>
export default {
  data() {
    return {
      menu: [
        { icon: "home", title: "HOME" },
        { icon: "info", title: "PREPAID" },
        { icon: "warning", title: "POSTPAID" }
      ]
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>