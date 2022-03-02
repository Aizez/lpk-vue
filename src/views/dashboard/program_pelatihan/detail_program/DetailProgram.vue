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
        Maaf! Silahkan lakukan login terlebih dahulu untuk dapat mengakses
        halaman ini
      </h4>
    </div>
    <vue-confirm-dialog
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    ></vue-confirm-dialog>
    <h3
      class="h2"
      style="margin-top: 65px; margin-bottom: 100px"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <i class="fa fa-info" style="padding-right: 10px; font-size: 40px"></i
      ><strong>Detail Program Pelatihan</strong>
    </h3>
    <!-- <h4>Tabel Mata Kuliah KOTA</h4> -->
    <div
      style="margin-top: 30px; min-height: 700px; padding-bottom: 30px"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <div
        class="main main-raised"
        style="border-radius: 50px; float:right; top: -20px; right: -5px; height: 0px;"
      >
        <a
          href="#/dashboard/detail-program-create"
          class="md-list-item-router md-layout gradient2"
          style="border-radius: 50px; box-shadow: 5px 5px #c5c5c5"
        >
          <md-button
            class="md-button1 md-simple"
            style="height: 40px; width: 230px;"
          >
            <!-- <p style="color: white; font-size: 20px; padding: 10px 7px 0px 0px">
              +
            </p> -->
            <span
              style="color: white; font-size: 14px; text-transform: capitalize"
            >
              Tambah Detail Program
            </span>
          </md-button>
        </a>
      </div>
      <div
        class="main main-raised"
        v-for="(detailProgram, key) in detailProgramList"
        :key="key"
        style="border-radius: 20px; margin-top: 50px; margin-bottom: 70px; padding: 50px 0px 30px 20px;"
      >
        <router-link
          style="float:left; margin-right: 20px;"
          :to="{
            name: 'detail-program-update',
            params: { id: detailProgram.id }
          }"
        >
          <div
            class="main main-raised"
            style="background-color: white; border-radius: 10px"
          >
            <i
              class="fa fa-edit"
              aria-hidden="true"
              style="color: #4583bd; font-size: 20px; padding: 10px 10px 10px 15px"
              ><md-tooltip md-direction="bottom"
                >Update Detail Program</md-tooltip
              ></i
            >
          </div>
        </router-link>

        <md-button
          type="submit"
          class="md-simple md-danger"
          style="float: right; top: -67px; margin-right: -10px"
          @click="onDelete(detailProgram.id)"
        >
          <i
            class="fa fa-times"
            aria-hidden="true"
            style="font-size: 25px !important; padding: 12px 0px 20px 15px"
            ><md-tooltip md-direction="bottom"
              >Delete Detail Program</md-tooltip
            ></i
          >
        </md-button>

        <div
          class="md-layout-item md-app"
          style="max-height: 350px; overflow: scroll;"
        >
          <md-card-content>
            <div class="md-layout md-gutter" style="padding-bottom :10px;">
              <div class="md-layout-item md-small-size-100">
                <!-- <h4><strong>ID :</strong> {{ detailProgram.id }}</h4> -->
                <h3>
                  <strong>Nama Program :</strong>
                  {{ detailProgram.program.nama_program }}
                </h3>
                <br />
                <div
                  class="main"
                  style="text-align: justify; text-justify: inter-word; padding-left: 20px"
                  v-html="detailProgram.text"
                ></div>
              </div>
            </div>
          </md-card-content>
        </div>
      </div>
    </div>
    <md-progress-bar md-mode="indeterminate" v-if="sending" />

    <md-snackbar :md-active.sync="userSaved"
      >Proses menghapus berhasil</md-snackbar
    >
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { LOGOUT } from "@/services/store/auth.module";
// import moment from "moment";

export default {
  components: {},
  bodyClass: "login-page",
  //   data() {},
  data: () => ({
    classicModal: false
  }),
  props: {
    header: {
      type: String,
      default: require("@/assets/img/gedung-upj.jpg")
    },
    image: {
      type: String,
      default: require("@/assets/img/bg-red-batik.png")
    },
    logo: {
      type: String,
      default: require("@/assets/img/logo/upj-logo.png")
    }
  },
  computed: {
    ...mapState(["auth"]),
    ...mapState("program", ["programList"]),
    ...mapState("detailProgram", ["detailProgramList"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  methods: {
    ...mapActions("program", ["getProgramList"]),
    ...mapActions("detailProgram", [
      "getDetailProgramList",
      "deleteDetailProgram"
    ]),
    async onFetchData() {
      await this.getProgramList();
      await this.getDetailProgramList();
    },
    onDelete(id) {
      this.$confirm({
        message: `Yakin ingin menghapus data Detail Program?`,
        button: {
          no: "Batal",
          yes: "Ya"
        },
        /**
         * Callback Function
         * @param {Boolean} confirm
         */
        callback: confirm => {
          if (confirm) {
            try {
              this.deleteDetailProgram({
                id: id
              });
              window.setTimeout((this.userSaved = true), 2000);
              this.sending = false;
              this.onFetchData();
              // this.$router.push({ name: "report-mata-kuliah-kaprodi" });
            } catch (error) {
              throw Error(error);
            }
            // ... do something
          }
        }
      });
    },
    onLogout() {
      this.$store.dispatch(LOGOUT).then(() =>
        this.$router.push({
          name: "login"
        })
      );
    },
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    searchOnTable() {
      this.getDosenList({
        prodi_id: this.selectedProdi
      });
      // this.searched = searchByPeriode(this.laporanList, this.search);
    }
  },
  async mounted() {
    await this.onFetchData();
    // this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  created() {
    this.searched = this.prodiList;
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="css"></style>
