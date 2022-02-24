<template>
  <footer class="footer2" :class="{ [`footer-${type}`]: type }">
    <!-- <footer
    class="footer2"
    :class="{ [`footer-${type}`]: type }"
    :style="headerStyle"
  >
    <div class="main foot">
      <div class="copyright mx-auto" style="color: white;">
        &copy; Xyziz_ {{ year }}, Universitas Pembangunan Jaya
        
      </div>
    </div> -->
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
    image: {
      type: String,
      default: require("@/assets/img/bg-red-batik.png")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
