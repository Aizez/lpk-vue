<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <img
          class="md-title"
          :src="logo"
          alt="logo-abipraya"
          style="height: 55px; width: 55px; padding: 5px; margin:0px 5px 7px 0px;"
        />
        <h3 class="md-title2" style="letter-spacing: 4px; margin-top: 3px">
          <strong>LPK Abipraya</strong>
        </h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li class="md-list-item">
                <a
                  href="/"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <p style="font-size: 15px; letter-spacing: 1.5px">
                        Beranda
                      </p>
                    </md-button>
                  </div>
                </a>
              </li>

              <li class="md-list-item" style="margin-left: 10px">
                <a
                  href="#/profil"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <p style="font-size: 15px; letter-spacing: 1.5px">
                        Profil
                      </p>
                    </md-button>
                  </div>
                </a>
              </li>

              <li class="md-list-item" style="margin-left: 10px">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <p style="font-size: 15px; letter-spacing: 1.5px">
                          Program
                        </p>
                      </md-button>
                      <div>
                        <ul class="dropdown-menu dropdown-with-icons">
                          <li v-for="(program, key) in programList" :key="key">
                            <router-link
                              :to="{
                                name: 'program',
                                params: { id: program.id }
                              }"
                            >
                              <p>{{ program.nama_program }}</p>
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li class="md-list-item" style="margin-left: 10px">
                <a
                  href="#/blog"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <p style="font-size: 15px; letter-spacing: 1.5px">
                        Blog
                      </p>
                    </md-button>
                  </div>
                </a>
              </li>

              <li class="md-list-item" style="margin-left: 10px">
                <a
                  href="#/kontak"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <p style="font-size: 15px; letter-spacing: 1.5px">
                        Kontak
                      </p>
                    </md-button>
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
import { mapState, mapActions } from "vuex";
// import { LOGOUT } from "@/services/store/auth.module";

export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    logo: {
      type: String,
      default: require("@/assets/img/logo/lpkrounded-logo.png")
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      featuresOpen: false,
      featuresOpen2: false
    };
  },
  computed: {
    ...mapState("program", ["programList"]),
    ...mapState("detailProgram", ["detailProgramList"]),
    ...mapState("undangan", ["undanganList"]),
    ...mapState("laporanAkademik", ["laporanAkademikList"])
    // showDownload() {
    //   const excludedRoutes = ["login", "landing", "profile"];
    //   return excludedRoutes.every(r => r !== this.$route.name);
    // }
  },
  methods: {
    ...mapActions("program", ["getProgramList"]),
    ...mapActions("detailProgram", ["getDetailProgramList"]),
    ...mapActions("undangan", ["getUndanganList"]),
    ...mapActions("laporanAkademik", ["getLaporanAkademikList"]),
    async onFetchData() {
      await this.getLaporanAkademikList();
      await this.getProgramList();
      await this.getDetailProgramList();
      await this.getUndanganList();
    },
    toggleFeatures() {
      this.featuresOpen = !this.featuresOpen;
    },
    toggleFeatures2() {
      this.featuresOpen2 = !this.featuresOpen2;
    },
    // onLogout() {
    //   this.$store
    //     .dispatch(LOGOUT)
    //     .then(() => this.$router.push({ name: "login" }));
    // },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  async mounted() {
    await this.onFetchData();
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
