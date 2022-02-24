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
          <md-card style="background-color: #0F0F5F; border-radius: 15px">
            <div class="container card-program">
              <h1>{{ programData.nama_program }}</h1>
              <p>
                {{ programData.desc_program }}
              </p>
            </div>
          </md-card>

          <div
            class="container"
            style="margin-top: 70px"
            v-for="(detailProgram, key) in detailProgramList"
            :key="key"
          >
            <div
              v-if="
                programData.nama_program == detailProgram.program.nama_program
              "
            >
              <h4 class="desc-prog"><div v-html="detailProgram.text"></div></h4>
            </div>
            <!-- <h1>Apa yang akan anda pelajari</h1>
            <ul class="prof">
              <li style="padding-top: 10px; padding-right: 30px">
                Hirarki & Definisi Digital Marketing, istilah di DM, Social
                Commerce, Memahami website, social media marketing
              </li>

              <li style="padding-top: 25px; padding-right: 30px">
                Strategi Digital marketiing, iklan PPC (Pay Per Click), email
                marketing, SEO dan affiliate marketing
              </li>

              <li style="padding-top: 25px; padding-right: 30px">
                Memahami PPC dan Sosial Media
              </li>

              <li style="padding-top: 25px; padding-right: 30px">
                Marketing (Fb Ads & IG Ads) Memahami Website Sosial Media
                merketing, Memahami Whatsapp Marketing
              </li>

              <li style="padding-top: 25px; padding-right: 30px">
                Membuat Website Landing Page dan materi – materi pendukung
                lainnya
              </li>
            </ul> -->
          </div>

          <div class="container" style="margin-top: 150px">
            <h1
              class="title"
              style="color:#0f0f5f; font-size: 42px; margin-bottom: 10px"
            >
              Dokumentasi Kegiatan
            </h1>
            <div class="row md-layout">
              <div class="row md-layout" style="padding:0px 20px;">
                <div
                  class="gallery"
                  v-for="(gallery, key) in galleryList"
                  :key="key"
                >
                  <div
                    class="col2"
                    style="margin: 10px 0px 0px 15px;"
                    v-if="
                      programData.nama_program == gallery.program.nama_program
                    "
                  >
                    <img
                      :src="gallery.image"
                      :class="{ 'responsive-image': responsive }"
                      class="gallery-img img-fluid"
                      style="border-radius: 10px;"
                      alt="avatar"
                    />
                    <div class="overlay">
                      <div class="text-gallery">
                        {{ gallery.caption }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="container"
            style="margin-top: 150px; padding-bottom: 100px"
          >
            <h1
              class="title"
              style="color:#0f0f5f; font-size: 42px; margin-bottom: 30px"
            >
              Testimoni Peserta
            </h1>
            <div
              class="row"
              v-for="(testimoni, key) in testimoniList"
              :key="key"
              style="margin-top: 20px"
            >
              <div
                class="row"
                v-if="
                  programData.nama_program == testimoni.program.nama_program
                "
              >
                <div class="col1">
                  <!-- <img
                    :src="testimoni.image"
                    :class="{ 'responsive-image': responsive }"
                    style="width: 70px; border-radius: 10px"
                  /> -->
                  <i
                    class="fa fa-smile"
                    style="font-size: 50px; margin: 0px 15px; color: #0f0f5f"
                    aria-hidden="true"
                  ></i>
                </div>
                <div class="md-layout-item">
                  <h3
                    style="margin-bottom: 0px; margin-top: -5px; margin-left: -52px; font-weight: 500"
                  >
                    {{ testimoni.title }}
                  </h3>
                  <p style="margin-left: -50px; text-align: justify">
                    <span style="font-weight: 500"
                      >{{ testimoni.nama_peserta }} - </span
                    >{{ testimoni.testimoni }}
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="md-layout" style="margin-top: 20px">
              <div class="md-layout-item md-size-10">
                <img
                  :src="image"
                  :class="{ 'responsive-image': responsive }"
                  style="width: 80%"
                />
              </div>
              <div class="md-layout-item">
                <h3
                  style="margin-bottom: 0px; margin-top: -5px; margin-left: -32px; font-weight: 500"
                >
                  Terimakasih LPK Abipraya
                </h3>
                <p style="margin-left: -30px; text-align: justify">
                  <span style="font-weight: 500">Andi Ananta - </span>Program
                  pelatihannya menarik dan terdapat kemudahan pembiayaan untuk
                  mahasiswa. Saya sangat beruntung dan berterima kasih kepada
                  LPK Abipraya. Semoga Tetap Jaya Selalu.
                </p>
              </div>
            </div> -->
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
