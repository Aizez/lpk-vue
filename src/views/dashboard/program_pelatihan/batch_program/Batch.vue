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
        class="fa fa-paperclip"
        style="padding-right: 10px; font-size: 40px"
      ></i
      ><strong>Batch Program Pelatihan</strong>
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
          href="#/dashboard/batch-create"
          class="md-list-item-router md-layout gradient2"
          style="border-radius: 50px; box-shadow: 5px 5px #c5c5c5"
        >
          <md-button
            class="md-button1 md-simple"
            style="height: 40px; width: 230px;"
          >
            <span
              style="color: white; font-size: 14px; text-transform: capitalize"
            >
              Tambah Batch Pelatihan
            </span>
          </md-button>
        </a>
      </div>
      <md-table
        v-model="batchList"
        md-sort="name"
        md-sort-order="asc"
        style="padding: 50px 20px 0px 20px; border-radius: 20px;"
        md-fixed-header
      >
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Batch Pelatihan" md-sort-by="nama">
            {{ item.program.nama_program }} - {{ item.nama }}
          </md-table-cell>
          <md-table-cell
            md-label="Tahun"
            md-sort-by="tahun"
            style="padding-right: 20px; padding-left: 15px"
          >
            {{ item.tahun }}
          </md-table-cell>
          <md-table-cell md-label="Date">
            {{ item.updated_at }}
          </md-table-cell>
          <md-table-cell md-label="Keterangan" style="min-width: 200px">
            {{ item.info }}
          </md-table-cell>
          <md-table-cell style="padding-left: 30px">
            <router-link
              :to="{
                name: 'batch-update',
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
                  >Update Batch Pelatihan</md-tooltip
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
                  >Delete Batch Pelatihan</md-tooltip
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
import moment from "moment";

const toLower = text => {
  return text.toString().toLowerCase();
};

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
    ...mapState("batch", ["batchList"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  methods: {
    ...mapActions("batch", ["getBatchList", "deleteBatch"]),
    async onFetchData() {
      await this.getBatchList();
      this.batchList.updated_at = moment(this.batchList.updated_at).format(
        "DD MMMM yyyy"
      );
    },
    onDelete(id) {
      this.$confirm({
        message: `Yakin ingin menghapus data Batch Pelatihan?`,
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
              this.deleteBatch({
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
    this.searched = this.mataKuliahList;
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="css"></style>
