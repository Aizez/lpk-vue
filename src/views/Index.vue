<template>
  <div class="wrapper" :style="wrapperStyle" style="padding-bottom: 70px;">
    <!-- <parallax class="page-header header-filter" :style="headerStyle"> -->
    <!-- <parallax class="page-header header-filter head-head">
      <div class="md-layout" style="width: 1150px;">
        <div class="col3">
          <div class="parallax">
            <h1 class="h1plus left">
              <strong>Selamat Datang</strong>
            </h1>
            <p class="left" style="font-size: 30px">
              <strong
                >di Lembaga Pengembangan Kompetensi
                <hr style="border: 0px; margin:10px" />
                (LPK) Abipraya</strong
              >
            </p>
          </div>
        </div>
            <div class="parallax">
              <img
                :src="home"
                style="width: 50%; float: right; border: 1px solid: top: -100px"
              />
            </div>
      </div>
    </parallax> -->
    <parallax class="page-header header-filter head-head">
      <div class="md-layout">
        <div class="brand" style="padding-left: 150px;">
          <div class="parallax">
            <h1 class="h1plus left" style="text-shadow:none">
              <strong>Selamat Datang</strong>
            </h1>
            <p class="left" style="font-size: 30px">
              <strong
                >di Lembaga Pengembangan Kompetensi
                <hr style="border: 0px; margin:10px" />
                (LPK) Abipraya</strong
              >
            </p>
          </div>
        </div>
        <div class="md-layout-item">
          <div class="brand">
            <div class="parallax">
              <img
                :src="home"
                :class="{ 'responsive-image': responsive }"
                style="width: 80%;"
              />
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <img
        :src="vector"
        :class="{ 'responsive-image': responsive }"
        class="img-fluid"
        style="width: 100%; margin-top: -7px"
      />
      <div class="section section-basic" style="padding-bottom: 100px">
        <!-- <div class="container">
          <h1
            class="title"
            style="color:#0f0f5f; font-size: 45px; margin-bottom: 50px"
          >
            Informasi Terbaru
          </h1>
          <div class="md-layout md-size-50">
            <div class="md-layout-item">
              <img
                :src="info"
                :class="{ 'responsive-image': responsive }"
                class="img-raised img-fluid"
                style="border-radius: 10px; width: 500px; height: auto;"
              />
            </div>
            <div class="md-layout-item">
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
            </div>
          </div>
        </div> -->

        <!-- <div class="container" style="margin-top: 20px">
          <div class="md-layout md-size-50">
            <div class="md-layout-item">
              <div class="md-layout md-size-30">
                <div
                  class="md-layout-item"
                  style="padding-right:25px"
                  v-for="(info, key) in infoList"
                  :key="key"
                >
                  <router-link
                    :to="{
                      name: 'new-info',
                      params: { id: item.id }
                    }"
                  >
                    <md-card style="box-shadow: none !important">
                      <img
                        :src="info"
                        :class="{ 'responsive-image': responsive }"
                        class="img-raised img-fluid"
                        style="border-radius: 10px; width: 400px; height: auto;"
                      />
                      <div style="padding: 12px 2px">
                        <div style="font-size: 12px">1 Januari 2022</div>
                        <div
                          class="title"
                          style="margin-top: 0px; margin-bottom: 10px; font-size: 20px; line-height: 25px"
                        >
                          Kembali Dibuka! Kelas Program A, Januari 2022
                        </div>
                        <div style="text-align: justify; font-size: 14px">
                          Kelas Program A pada Januari 2022 kembali dibuka. Para
                          peserta dapat mengikuti kembali kelas seperti biasa
                          melalui kelas tatap muka maupun kelas daring.
                        </div>
                      </div>
                    </md-card>
                  </router-link>
                </div>
              </div>
              <div class="container" style="margin-top: 5px">
                <a href="#/all-new-info" style="text-align: center">
                  <md-button class="abipraya md-lg">
                    <span
                      style="color: white; font-size: 14px; text-transform: capitalize; bottom: 5px"
                    >
                      Baca lebih lanjut
                    </span>
                  </md-button>
                </a>
              </div>
            </div>
          </div>
        </div> -->

        <!-- <div class="main" style="margin-top: 70px;">
          <img
            :src="vector1"
            :class="{ 'responsive-image': responsive }"
            class="img-fluid"
            style="width: 100%"
          />
          <img
            :src="vector"
            :class="{ 'responsive-image': responsive }"
            class="img-fluid"
            style="width: 100%; margin-top: -5px"
          />
        </div> -->

        <div class="container" style="margin-top: 0px">
          <h1
            class="title"
            style="color:#0f0f5f; font-size: 45px; margin-bottom: 30px"
          >
            Program Pelatihan LPK
          </h1>
          <div class="md-layout">
            <div
              class="md-layout-item md-size-33"
              style="padding-right:25px"
              v-for="(program, key) in programList"
              :key="key"
            >
              <router-link
                :to="{
                  name: 'program',
                  params: { id: program.id }
                }"
              >
                <md-card md-with-hover>
                  <md-ripple>
                    <img
                      :src="program.image"
                      :class="{ 'responsive-image': responsive }"
                      class="img-raised img-fluid"
                      style="border-radius: 5px;"
                    />
                    <md-card-header style="padding-bottom: 10px">
                      <div class="md-title" style="text-align: center">
                        {{ program.nama_program }}
                      </div>
                    </md-card-header>
                  </md-ripple>
                </md-card>
              </router-link>
            </div>
          </div>
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
import BasicElements from "./components/BasicElementsSection";
import { mapState, mapActions } from "vuex";
import GoTop from "@inotom/vue-go-top";

export default {
  components: {
    GoTop
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    home: {
      type: String,
      default: require("@/assets/img/examples/pixeltrue-teaching.png")
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
    }
  },
  data() {
    return {
      leafShow: false
    };
  },
  methods: {
    ...mapActions("program", ["getProgramList"]),
    ...mapActions("info", ["getInfoList"]),
    async onFetchData() {
      await this.getProgramList();
      await this.getInfoList();
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
    }
  },
  computed: {
    ...mapState("program", ["programList"]),
    ...mapState("info", ["infoList"]),
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
  // mounted() {
  //   this.leafActive();
  //   window.addEventListener("resize", this.leafActive);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.leafActive);
  // },
  async mounted() {
    await this.onResponsiveInverted();
    await this.onFetchData();
    // console.log(process.env.VUE_APP_BASE_URL);
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

<style lang="css">
div.parallax p.h1 {
  font-size: 80px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

div.parallax p.p1 {
  font-size: 35px;
  padding: 20px;
}

div.parallax p.p2 {
  font-size: 27px;
}

@media screen and (max-width: 700px) {
  div.parallax p.h1 {
    font-size: 45px;
  }
  div.parallax p.p1 {
    font-size: 25px;
    padding: 5px;
    line-height: 27px;
  }

  div.parallax p.p2 {
    font-size: 17px;
    line-height: 15px;
  }
}
</style>
