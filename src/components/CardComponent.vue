<template>
  <div class="item-wrapper d-flex flex-column mb-4" @click="$emit('clickCard', tour.id)">
    <img :src="require(`@/assets/img/${tour.img}`)" class="mb-3" alt="">
    <h3 class="">{{ tour.title }}</h3>
    <div class="description">{{ tour.descript | trimText }}
      <br>
      <span>Читать далее ...</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tour: {
        type: Object
      },
    },
    filters: {
      trimText(value) {
        return value.substring(0, 400) + '...'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>