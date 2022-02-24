<template>
  <div class="wrapper" :style="wrapperStyle" style="padding-bottom: 70px;">
    <!-- <parallax class="page-header header-filter" :style="headerStyle"> -->
    <parallax class="page-header header-filter head-head" style="height: 0px">
    </parallax>

    <div class="main main-raised" style="padding-bottom: 0px;">
      <img
        :src="vector"
        :class="{ 'responsive-image': responsive }"
        class="img-fluid"
        style="width: 100%; margin-top: -7px"
      />
      <div
        class="section section-basic"
        style="padding-bottom: 50px; padding-top: 20px"
      >
        <div class="container">
          <div class="md-layout md-size-50">
            <div class="md-layout-item md-size-50">
              <h1 class="kontak">
                Ada yang bisa dibantu?
              </h1>
            </div>
          </div>
          <div class="md-layout md-size-50" style="margin-top: 50px;">
            <div class="md-layout-item md-size-55 kontak">
              <img
                :src="kontak"
                :class="{ 'responsive-image': responsive }"
                style="width: 70%"
              />
            </div>
            <div
              class="md-layout-item md-size-40 kontak"
              style="margin-top: 50px"
            >
              <h3 class="kontak">
                Kantor Pusat Brantas Abipraya
              </h3>
              <h4 class="kontak">
                Jl. D.I. Panjaitan Kav. 14, Cawang, Jakarta Timur 13340
                <div class="md-layout" style="margin-top: 20px">
                  <div class="md-layout-item md-size-20">
                    <img
                      :src="phone"
                      :class="{ 'responsive-image': responsive }"
                      style="width: 80%"
                    />
                  </div>
                  <div
                    class="md-layout-item md-size-50"
                    style="margin-top: -7px;"
                  >
                    <span style="font-size: 10px; margin-left: -30px"
                      >Telepon</span
                    >
                    <p style="margin-top: -10px; margin-left: -30px">
                      (021) 851 6290
                    </p>
                  </div>
                </div>
                <div class="md-layout" style="margin-top: 0px;">
                  <div class="md-layout-item md-size-20">
                    <img
                      :src="email"
                      :class="{ 'responsive-image': responsive }"
                      style="width: 80%"
                    />
                  </div>
                  <div
                    class="md-layout-item md-size-50"
                    style="margin-top: -7px;"
                  >
                    <span style="font-size: 10px; margin-left: -30px"
                      >Email</span
                    >
                    <p style="margin-top: -10px; margin-left: -30px">
                      brap@brantas-abipraya.co.id
                    </p>
                  </div>
                </div>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <img
        :src="vector1"
        :class="{ 'responsive-image': responsive }"
        class="img-fluid"
        style="width: 100%; margin-bottom: -6px;"
      />
    </div>

    <go-top
      bg-color="#fae019"
      fg-color="#0f0f5f"
      box-shadow="0 0 0 transparent"
    >
    </go-top>
  </div>
</template>

<script>
// import BasicElements from "./components/BasicElementsSection";
import { mapState, mapActions } from "vuex";
import GoTop from "@inotom/vue-go-top";

export default {
  components: {
    GoTop
  },
  name: "profil",
  bodyClass: "index-page",
  props: {
    vector: {
      type: String,
      default: require("@/assets/img/examples/vector.png")
    },
    vector1: {
      type: String,
      default: require("@/assets/img/examples/vector1.png")
    },
    kontak: {
      type: String,
      default: require("@/assets/img/examples/pixeltrue-idea.png")
    },
    phone: {
      type: String,
      default: require("@/assets/img/logo/phone.png")
    },
    email: {
      type: String,
      default: require("@/assets/img/logo/email.png")
    }
  },
  data() {
    return {
      leafShow: false,
      scTimer: 0,
      scY: 0
    };
  },
  methods: {
    ...mapActions("homeGallery", ["getHomeGallery", "getHomeGalleryList"]),
    ...mapActions("tema", ["getTema", "getTemaList"]),
    async onFetchData() {
      await this.getTemaList();
      await this.getTema({ id: "1" });
      await this.getHomeGalleryList();
      await this.getHomeGallery({ id: "1" });
    },
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    classicModalHide() {
      this.classicModal = false;
    },
    handleScroll: function() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  computed: {
    ...mapState("homeGallery", ["homeGalleryData", "homeGalleryList"]),
    ...mapState("tema", ["temaData", "temaList"]),
    headerStyle() {
      return {
        // backgroundImage: `url(${this.homeGalleryData.sampul_image})`
      };
    },
    wrapperStyle() {
      return {
        // backgroundImage: `url(${this.temaData.tema_image})`
      };
    }
  },
  async mounted() {
    this.onResponsiveInverted();
    await this.onFetchData();
    // console.log(process.env.VUE_APP_BASE_URL);
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>

<style lang="css"></style>
