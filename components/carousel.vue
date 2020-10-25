<template>

  <v-carousel >
   <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.ibb.co/mynQ8jd/Carousel-01.jpg',
          },
          {
            src: 'https://i.ibb.co/KyshrdY/Carousel-02.jpg',
          },
          {
            src: 'https://i.ibb.co/xC7g87T/Carousel-03.jpg',
          },
          {
            src: 'https://i.ibb.co/Ydnjgvx/Carousel-04.jpg',
          },
        ],
      }
    },
  }
</script>

