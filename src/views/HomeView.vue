<template>
  <div class="wrapper mt-5">
    <div class="container">
        <div class="grid d-flex justify-content-between flex-wrap">
          <card-component v-for="tour in tours" :tour="tour" :key="tour.title" @clickCard="navigate"/>
        </div>
    </div>
</div>
</template>

<script>
  import CardComponent from '@/components/CardComponent.vue';
export default {
  components: { CardComponent },
  computed: {
      tours() {
        return this.$store.getters["getTours"];
      }
    },
    methods: {
      navigate(id) {
        this.$router.push({name: 'tour', params: {id: id}})
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>