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
            Post Terbaru
          </h1>
          <hr style="color: solid; width: 100%" />

          <row
            :gutter="12"
            :columns="10"
            style="margin-top: 40px;"
            v-for="(latest, key) in latestList"
            :key="key"
          >
            <column :xs="10" :lg="6" style="padding: 10px;">
              <div v-for="(info, key) in infoList" :key="key">
                <div v-if="info.title == latest.title">
                  <img
                    :src="info.image"
                    :class="{ 'responsive-image': responsive }"
                    class="img-raised img-fluid"
                    style="border-radius: 20px; width: 700px; height: auto;"
                  />
                </div>
              </div>
            </column>
            <column :xs="10" :lg="4" style="padding: 0px 20px">
              <div
                class="title"
                style="margin-top: 0px; margin-bottom: 15px; font-size: 30px; line-height: 35px; text-align: justify;"
              >
                {{ latest.title }}
              </div>
              <div class="latest" v-html="latest.text"></div>
              <div style="margin-top: 10px; font-size: 12px; color: #0F0F5F">
                <strong>{{ latest.date | moment("dddd, D MMMM YYYY") }}</strong>
              </div>
            </column>
          </row>

          <row :gutter="12" :columns="12" style="padding-top: 20px">
            <column
              :xs="6"
              :lg="4"
              style="padding: 30px 25px"
              v-for="(post, key) in postList.data"
              :key="key"
            >
              <div v-for="(info, key) in infoList" :key="key">
                <div v-if="info.title == post.title">
                  <img
                    :src="info.image"
                    :class="{ 'responsive-image': responsive }"
                    class="img-raised img-fluid"
                    style="border-radius: 20px; width: 700px; height: auto;"
                  />
                </div>
              </div>
              <div
                class="title"
                style="margin-top: 20px; margin-bottom: 15px; font-size: 18px; line-height: 22px; text-align: justify;"
              >
                {{ post.title }}
              </div>
              <div class="post" v-html="post.text"></div>
              <div style="font-size: 11px; color: #0F0F5F; padding-top: 10px">
                <strong>{{ post.date | moment("dddd, D MMMM YYYY") }}</strong>
              </div>
            </column>
          </row>

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
  data() {
    return {};
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
    ...mapState("info", ["infoList", "latestList", "postList"]),
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
    ...mapActions("info", ["getInfoList", "getLatestList", "getPostList"]),
    async onFetchData() {
      await this.getInfoList();
      await this.getLatestList();
      await this.getPostList();
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

.post {
  text-align: justify;
  color: #0f0f5f;
  margin-bottom: -8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
