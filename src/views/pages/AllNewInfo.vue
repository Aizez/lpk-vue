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
      <div class="section section-basic" style="padding-bottom: 0px">
        <div class="container" style="margin-top: -50px;">
          <h1
            class="title"
            style="color:#0f0f5f; font-size: 42px; margin-bottom: 10px"
          >
            Latest
          </h1>
          <hr style="color: solid; width: 100%" />

          <row :gutter="12" :columns="10" style="margin-top: 40px;">
            <column :xs="10" :lg="6">
              <img
                :src="info"
                :class="{ 'responsive-image': responsive }"
                class="img-raised img-fluid"
                style="border-radius: 20px; width: 700px; height: auto;"
              />
            </column>
            <column :xs="10" :lg="4">
              <div style="font-size: 12px; color: #0F0F5F">
                1 Januari 2022
              </div>
              <div
                class="title"
                style="margin-top: 0px; margin-bottom: 15px; font-size: 30px; line-height: 35px; text-align: justify;"
              >
                Kembali Dibuka! Kelas Program A, Januari 2022
              </div>
              <div style="text-align: justify; color: #0F0F5F">
                Kelas Program A pada Januari 2022 kembali dibuka. Para peserta
                dapat mengikuti kembali kelas seperti biasa melalui kelas tatap
                muka maupun kelas daring.
              </div>
            </column>
          </row>

          <div class="md-layout" style="margin-top: 40px">
            <div class="col2" style="margin: 0px 15px 10px 15px">
              <img
                :src="info"
                :class="{ 'responsive-image': responsive }"
                class="img-raised img-fluid"
                style="border-radius: 20px; width: 700px; height: auto;"
              />
              <div style="font-size: 12px; color: #0F0F5F">
                1 Januari 2022
              </div>
              <div
                class="title"
                style="margin-top: 0px; margin-bottom: 15px; font-size: 1.125rem; line-height: 20px; text-align: justify;"
              >
                Kembali Dibuka! Kelas Program A, Januari 2022
              </div>
              <div style="text-align: justify; color: #0F0F5F">
                Kelas Program A pada Januari 2022 kembali dibuka. Para peserta
                dapat mengikuti kembali kelas seperti biasa melalui kelas tatap
                muka maupun kelas daring.
              </div>
            </div>
            <div class="col2" style="margin: 0px 15px 10px 15px">
              <img
                :src="info"
                :class="{ 'responsive-image': responsive }"
                class="img-raised img-fluid"
                style="border-radius: 20px; width: 700px; height: auto;"
              />
              <div style="font-size: 12px; color: #0F0F5F">
                1 Januari 2022
              </div>
              <div
                class="title"
                style="margin-top: 0px; margin-bottom: 15px; font-size: 1.125rem; line-height: 20px; text-align: justify;"
              >
                Kembali Dibuka! Kelas Program A, Januari 2022
              </div>
              <div style="text-align: justify; color: #0F0F5F">
                Kelas Program A pada Januari 2022 kembali dibuka. Para peserta
                dapat mengikuti kembali kelas seperti biasa melalui kelas tatap
                muka maupun kelas daring.
              </div>
            </div>
            <div class="col2" style="margin: 0px 15px 10px 15px">
              <img
                :src="info"
                :class="{ 'responsive-image': responsive }"
                class="img-raised img-fluid"
                style="border-radius: 20px; width: 700px; height: auto;"
              />
              <div style="font-size: 12px; color: #0F0F5F">
                1 Januari 2022
              </div>
              <div
                class="title"
                style="margin-top: 0px; margin-bottom: 15px; font-size: 1.125rem; line-height: 20px; text-align: justify;"
              >
                Kembali Dibuka! Kelas Program A, Januari 2022
              </div>
              <div style="text-align: justify; color: #0F0F5F">
                Kelas Program A pada Januari 2022 kembali dibuka. Para peserta
                dapat mengikuti kembali kelas seperti biasa melalui kelas tatap
                muka maupun kelas daring.
              </div>
            </div>
          </div>
          <!-- <md-card style="background-color: #0F0F5F; border-radius: 15px">
            <div class="container card-program">
              <h1>{{ programData.nama_program }}</h1>
              <p>
                {{ programData.desc_program }}
              </p>
            </div>
          </md-card> -->
        </div>
      </div>
      <img
        :src="vector1"
        :class="{ 'responsive-image': responsive }"
        class="img-fluid"
        style="width: 100%; margin-bottom: -6px"
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
    profil: {
      type: String,
      default: require("@/assets/img/examples/pixeltrue-success.png")
    },
    info: {
      type: String,
      default: require("@/assets/img/examples/image1.jpeg")
    },
    vector: {
      type: String,
      default: require("@/assets/img/examples/vector.png")
    },
    vector1: {
      type: String,
      default: require("@/assets/img/examples/vector1.png")
    },
    image: {
      type: String,
      default: require("@/assets/img/logo/image.png")
    }
  },
  computed: {
    ...mapState("program", ["programData", "programList"]),
    ...mapState("detailProgram", ["detailProgramList"]),
    ...mapState("gallery", ["galleryList"]),
    ...mapState("testimoni", ["testimoniList"]),
    ...mapState("peserta", ["pesertaList"]),
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
  methods: {
    ...mapActions("program", ["getProgram", "getProgramList"]),
    ...mapActions("detailProgram", ["getDetailProgramList"]),
    ...mapActions("gallery", ["getGalleryList"]),
    ...mapActions("testimoni", ["getTestimoniList"]),
    ...mapActions("peserta", ["getPesertaList"]),
    async onFetchData() {
      await this.getProgram({ id: this.$route.params.id });
      await this.getDetailProgramList();
      await this.getProgramList();
      await this.getGalleryList();
      await this.getTestimoniList();
      await this.getPesertaList();
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
