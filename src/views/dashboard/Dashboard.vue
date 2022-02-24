<template>
  <div class="content">
    <div
      class="alert alert-danger alert-with-icon"
      data-notify="container"
      v-if="auth.user.level != 'admin' && auth.user.level != 'superuser'"
    >
      <button
        type="button"
        aria-hidden="true"
        @click="onLogout"
        class="close"
        style="padding: 0px 30px 15px 0px"
      >
        <h3>×</h3>
      </button>
      <i data-notify="icon" class="material-icons">add_alert</i>
      <h4 data-notify="message">
        Maaf! username atau password yang anda masukkan salah
        <br />
        Silahkan login kembali dengan kombinasi username dan password yang benar
      </h4>
    </div>
    <h2
      class="h2"
      style="margin-top: 60px;"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <h3 class="h2">
        <md-icon style="padding-right: 15px;" class="md-size-2x"
          >dashboard</md-icon
        >
        <strong> Dashboard</strong>
      </h3>
    </h2>
    <!-- <div v-if="auth.user.level == 'kaprodi'">
      <h2 class="h2" style="margin-top: 60px;">
        <strong>Selamat Datang {{ auth.user.name }}!</strong>
      </h2>
      <p style="margin-top: 35px; font-size: 14px">
        Klik tombol di bawah ini untuk melihat atau menambah mata kuliah KOTA
      </p>
      <div class="main main-raised" style="float:left; top: 70px; height: 0px">
        <a
          href="#/dashboard/report-mata-kuliah-kaprodi"
          class="md-list-item-router md-layout gradient1"
          style=" border-radius: 50px; box-shadow: 5px 5px #c5c5c5"
        >
          <md-button
            class="md-button1 md-simple"
            style="height: 40px; width: 250px;"
          >
            <span
              style="color: white; font-size: 14px; text-transform: capitalize"
            >
              Daftar Mata Kuliah KOTA
            </span>
          </md-button>
        </a>
      </div>
    </div> -->
    <br />
    <!-- <div v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'">
      <div
        class="main-raised"
        style="border-radius: 10px; margin-top: 10px; margin-bottom: 50px; padding: 20px 20px 20px 20px; background-color: #f2f0f0"
      >
        <md-card-content>
          <p style="text-align:center; font-size: 22px;">
            <strong
              >Grafik Mata Kuliah KOTA Paling Banyak Diminati di Setiap
              Prodi</strong
            >
          </p>
          <p style="text-align:center; font-size: 14px; margin-bottom: 40px">
            Tahun 2015 - Sekarang
          </p>
          <PlanetChart />
        </md-card-content>
      </div>
      <div
        class="main-raised"
        style="border-radius: 10px; margin-top: 100px; margin-bottom: 50px; padding: 20px 20px 20px 20px; background-color: #f2f0f0"
      >
        <div class="md-layout-item">
          <md-card-content>
            <p style="text-align:center; font-size: 22px;">
              <strong
                >Grafik Mata Kuliah KOTA Paling Banyak Diminati di Setiap Rumpun
                Urban</strong
              >
            </p>
            <p style="text-align:center; font-size: 14px; margin-bottom: 30px">
              Tahun 2015 - Sekarang
            </p>
            <PlanetChart2 />
          </md-card-content>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import { kmeans } from "node-kmeans";
import { PlanetChart, PlanetChart2 } from "@/components";
import { LOGOUT } from "@/services/store/auth.module";

const kmeans = require("node-kmeans");

// const toLower = text => {
//   return text.toString().toLowerCase();
// };

// const searchByProdi = (items, term) => {
//   if (term) {
//     return items.filter(item =>
//       toLower(item.nama_prodi).includes(toLower(term))
//     );
//   }

//   return items;
// };

export default {
  components: {
    // PlanetChart,
    // PlanetChart2
  },
  bodyClass: "login-page",
  //   data() {},
  data() {
    return {
      selectedProdi: "",
      search: "",
      searched: [],
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: true
      },
      hasil_kmeans: []
    };
  },
  props: {},
  computed: {
    ...mapState(["auth"]),
    ...mapState("laporan", ["kmeansList", "laporanList", "urbanList"]),
    ...mapState("periode", ["periodeData", "periodeList"]),
    ...mapState("prodi", ["prodiData", "prodiList"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  methods: {
    ...mapActions("laporan", ["getLaporanList", "kmeans"]),
    ...mapActions("periode", ["getPeriode", "getPeriodeList"]),
    ...mapActions("prodi", ["getProdi", "getProdiList"]),
    async onFetchData() {
      await this.getLaporanList();
      await this.kmeans();
      // await this.kmeans({
      //    prodi_id: this.selectedProdi
      // });
      await this.getPeriodeList();
      await this.getProdiList();
      this.reportKmeans();
    },
    onLogin() {
      this.$router.push({
        name: "login"
      });
    },
    onLogout() {
      this.$store.dispatch(LOGOUT).then(() =>
        this.$router.push({
          name: "login"
        })
      );
    },
    searchOnTable() {
      // this.kmeans({
      //   prodi_id: this.selectedProdi
      // });
      // this.searched = searchByProdi(this.kmeansList, this.search);
    },
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  async mounted() {
    await this.onFetchData();
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
    // if (!this.isAuthenticated) {
    //   this.$router.push({ name: "login" });
    // }
  },
  created() {
    this.searched = this.kmeansList;
  }
};
</script>

<style lang="scss" scoped>
.md-app {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 300px;
  max-width: calc(100vw - 125px);
  position: fixed;
  overflow: auto;
}

.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>

<style lang="css"></style>
