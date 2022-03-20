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
              <img :src="home" style="width: 80%;" />
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <img
        :src="vector"
        class="img-fluid"
        style="width: 100%; margin-top: -7px"
      />
      <div class="section section-basic" style="padding-bottom: 100px">
        <div class="container" style="margin-top: -50px;">
          <!-- <h1
            class="title"
            style="color:#0f0f5f; font-size: 42px; margin-bottom: 10px"
          >
            Informasi Terbaru
          </h1>
          <hr style="color: solid; width: 100%" /> -->

          <row
            :gutter="12"
            :columns="10"
            style="margin-top: 40px;"
            v-for="(latest, key) in latestList"
            :key="key"
          >
            <column :xs="10" :lg="6" style="padding: 10px;">
              <router-link
                :to="{
                  name: 'page',
                  params: { id: latest.id }
                }"
              >
                <div v-for="(info, key) in infoList" :key="key">
                  <div v-if="info.title == latest.title">
                    <img
                      :src="info.image"
                      class="img-raised img-fluid"
                      style="border-radius: 20px; width: 700px; height: auto;"
                    />
                  </div>
                </div>
              </router-link>
            </column>
            <column :xs="10" :lg="4" style="padding: 0px 20px">
              <router-link
                :to="{
                  name: 'page',
                  params: { id: latest.id }
                }"
              >
                <div
                  class="title"
                  style="margin-top: 0px; margin-bottom: 15px; font-size: 30px; line-height: 35px; text-align: justify;"
                >
                  {{ latest.title }}
                </div>
                <div class="latest" v-html="latest.text"></div>
                <div style="margin-top: 10px; font-size: 12px; color: #0F0F5F">
                  <strong>{{
                    latest.date | moment("dddd, D MMMM YYYY")
                  }}</strong>
                </div>
              </router-link>
            </column>
          </row>

          <VueSlickCarousel v-bind="setting">
            <column
              :xs="10"
              :lg="4"
              v-for="(preview, key) in previewList.data"
              :key="key"
            >
              <router-link
                :to="{
                  name: 'page',
                  params: { id: preview.id }
                }"
              >
                <div v-for="(info, key) in infoList" :key="key">
                  <div v-if="info.title == preview.title">
                    <img
                      :src="info.image"
                      class="img-raised img-fluid"
                      style="border-radius: 20px; width: 700px; height: auto;"
                    />
                  </div>
                </div>
                <h4>
                  <strong>{{ preview.title }}</strong>
                </h4>
                <h5 class="latest" v-html="preview.text"></h5>
                <h6>
                  {{ preview.date | moment("dddd, D MMMM YYYY") }}
                </h6>
              </router-link>
            </column>
          </VueSlickCarousel>

          <div class="container" style="margin-top: 15px;">
            <a href="#/blog" style="text-align: center">
              <md-button class="abipraya md-lg read-more">
                <span class="text-read-more">
                  Baca lebih lanjut
                </span>
              </md-button>
            </a>
          </div>
        </div>

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

        <div class="container" style="padding: 200px 0px">
          <div class="set-index">
            <h1
              class="title"
              style="color:#0f0f5f; font-size: 45px; margin-bottom: 30px"
            >
              Program Pelatihan LPK
            </h1>
            <row :gutter="12" :columns="12">
              <column
                :xs="6"
                :lg="4"
                style="padding-right: 20px"
                v-for="(program, key) in programList"
                :key="key"
              >
                <router-link
                  :to="{
                    name: 'program',
                    params: { id: program.id }
                  }"
                >
                  <md-card
                    class="card-index"
                    style="background-color: #0f0f5f"
                    md-with-hover
                  >
                    <img
                      :src="program.image"
                      class="img-raised img-fluid"
                      style="border-radius: 5px;"
                    />
                    <md-card-header style="padding-bottom: 10px">
                      <div class="text-index">
                        <strong>{{ program.nama_program }}</strong>
                      </div>
                    </md-card-header>
                  </md-card>
                </router-link>
              </column>
            </row>
          </div>
        </div>
      </div>
      <img
        :src="vector1"
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    GoTop,
    VueSlickCarousel
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
      leafShow: false,
      setting: {
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        draggable: true,
        useTransform: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions("program", ["getProgramList"]),
    ...mapActions("info", ["getInfoList", "getLatestList", "getPreviewList"]),
    async onFetchData() {
      await this.getProgramList();
      await this.getInfoList();
      await this.getLatestList();
      await this.getPreviewList();
    },
    // onResponsiveInverted() {
    //   if (window.innerWidth < 600) {
    //     this.responsive = true;
    //   } else {
    //     this.responsive = false;
    //   }
    // },
    classicModalHide() {
      this.classicModal = false;
    }
  },
  computed: {
    ...mapState("program", ["programList"]),
    ...mapState("info", ["infoList", "latestList", "previewList"]),
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
    // await this.onResponsiveInverted();
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
.latest {
  font-size: 0.9rem;
  text-align: justify;
  color: #0f0f5f;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.text-index {
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.7px;
  color: #fae019;
}

.text-read-more {
  color: #fae019;
  font-size: 14px;
  text-transform: capitalize;
  bottom: 5px;
}

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

  .set-index {
    padding-left: 15px;
  }

  .text-index {
    font-size: 14px;
    line-height: 17px;
  }

  h1.title {
    text-align: center;
    line-height: 50px;
    padding-right: 10px;
  }

  .text-read-more {
    font-size: 12px;
  }

  .read-more {
    height: 50px !important;
    width: 150px !important;
  }
}
</style>
