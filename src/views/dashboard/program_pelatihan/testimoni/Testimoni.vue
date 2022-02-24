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
      style="margin-top: 65px;"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <i
        class="fa fa-thumbs-up"
        style="padding-right: 10px; font-size: 40px"
      ></i
      ><strong>Testimoni Program Pelatihan</strong>
    </h3>
    <div
      class="main card-dashboard"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <div
        class="main main-raised"
        style="border-radius: 50px; float:right; top: 45px; right: 20px; height: 0px"
      >
        <a
          href="#/dashboard/testimoni-create"
          class="md-list-item-router md-layout gradient2"
          style="border-radius: 50px; box-shadow: 5px 5px #c5c5c5"
        >
          <md-button
            class="md-button1 md-simple"
            style="height: 40px; width: 200px;"
          >
            <span
              style="color: white; font-size: 14px; text-transform: capitalize"
            >
              Tambah Testimoni
            </span>
          </md-button>
        </a>
      </div>
      <md-table
        v-model="testimoniList"
        md-sort="name"
        md-sort-order="asc"
        style="padding: 10px 20px 0px 20px; border-radius: 20px;"
        md-fixed-header
      >
        <md-table-toolbar
          style="padding-left: 10px; background-color: white !important"
        >
          <div class="md-toolbar-section-start">
            <md-field
              style="margin-left: 5px; padding: 5px 0px 0px 15px; max-width: 300px;"
            >
              <label>Pilih Program Pelatihan...</label>
              <md-select
                name="program.id"
                id="program.id"
                v-model="selectedProgram"
                @input="searchOnTable"
                md-dense
                style="border: 0px;"
              >
                <md-option
                  v-for="(program, key) in programList"
                  :key="key"
                  :value="program.id"
                  style="width:100%; left: 10px;"
                >
                  {{ program.nama_program }}
                </md-option>
              </md-select>
            </md-field>
          </div>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell
            md-label="Judul"
            md-sort-by="title"
            style="min-width: 200px"
          >
            {{ item.title }}
          </md-table-cell>
          <md-table-cell
            md-label="Nama Peserta"
            md-sort-by="nama"
            style="min-width: 200px"
          >
            {{ item.nama_peserta }}
          </md-table-cell>
          <md-table-cell
            md-label="Testimoni"
            md-sort-by="testimoni"
            style="min-width: 300px; padding-right: 30px; text-align: justify"
          >
            {{ item.testimoni }}
          </md-table-cell>
          <md-table-cell md-label="Foto Peserta">
            <img :src="item.image" style="width: 30%" />
          </md-table-cell>
          <md-table-cell style="padding-left: 30px">
            <router-link
              :to="{
                name: 'testimoni-update',
                params: { id: item.id }
              }"
            >
              <i
                class="fa fa-edit"
                aria-hidden="true"
                style="
                color: #0b76e0;
                font-size: 18px;
              "
                ><md-tooltip md-direction="bottom"
                  >Update Testimoni</md-tooltip
                ></i
              >
            </router-link>
          </md-table-cell>
          <md-table-cell>
            <md-button
              type="submit"
              class="md-simple md-danger"
              style="height: 20px;"
              @click="onDelete(item.id)"
            >
              <i
                class="fa fa-times"
                aria-hidden="true"
                style="font-size: 20px !important"
                ><md-tooltip md-direction="bottom"
                  >Delete Testimoni</md-tooltip
                ></i
              >
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
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

const toLower = text => {
  return text.toString().toLowerCase();
};

export default {
  components: {},
  bodyClass: "login-page",
  //   data() {},
  data: () => ({
    classicModal: false,
    search: "x",
    searched: [],
    selectedProgram: ""
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
    ...mapState("testimoni", ["testimoniList"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  methods: {
    ...mapActions("program", ["getProgramList"]),
    ...mapActions("testimoni", ["getTestimoniList", "deleteTestimoni"]),
    async onFetchData() {
      await this.getProgramList();
      await this.getTestimoniList();
    },
    onDelete(id) {
      this.$confirm({
        message: `Yakin ingin menghapus data Testimoni?`,
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
              this.deleteTestimoni({
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
      this.getTestimoniList({
        program_id: this.selectedProgram
      });
    },
    classicModalHide() {
      this.classicModal = false;
    }
  },
  async mounted() {
    await this.onFetchData();
    // this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  created() {
    this.searched = this.programList;
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="css"></style>
