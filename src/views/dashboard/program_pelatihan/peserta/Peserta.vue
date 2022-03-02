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
      <i class="fa fa-users" style="padding-right: 10px; font-size: 40px"></i
      ><strong>Daftar Nama Peserta</strong>
    </h3>
    <div
      class="main card-dashboard"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <div
        class="main main-raised"
        style="border-radius: 50px; float:right; top: 30px; right: 20px; height: 0px"
      >
        <a
          href="#/dashboard/peserta-create"
          class="md-list-item-router md-layout gradient2"
          style="border-radius: 50px; box-shadow: 5px 5px #c5c5c5"
        >
          <md-button
            class="md-button1 md-simple"
            style="height: 40px; width: 220px;"
          >
            <span
              style="color: white; font-size: 14px; text-transform: capitalize"
            >
              Tambah Daftar Peserta
            </span>
          </md-button>
        </a>
      </div>
      <md-table
        v-model="searched"
        md-sort="name"
        md-sort-order="asc"
        style="padding: 40px 20px 0px 20px; border-radius: 20px;"
        md-fixed-header
      >
        <md-table-toolbar
          style="padding-left: 0px; background-color: white !important"
        >
          <div class="md-toolbar-section-start">
            <md-field
              md-clearable
              style="padding: 7px 0px 0px 10px; background-color: #f3f2f2; border-radius: 5px"
            >
              <label style="padding: 7px 10px 5px 7px"
                >Cari Berdasarkan Nama Peserta...</label
              >
              <md-input v-model="search" @input="searchOnTable" />
            </md-field>
            <br />
          </div>
          <!-- <div class="md-toolbar-section-end">
            <md-field
              style="margin-left: 5px; padding: 5px 0px 0px 15px; max-width: 300px;"
              ><md-tooltip md-direction="bottom"
                >Masukkan Nama Peserta <br />Terlebih Dahulu</md-tooltip
              >
              <label>Pilih Pelatihan...</label>
              <md-select
                name="batch.id"
                id="batch.id"
                v-model="selectedBatch"
                @input="searchOnTable"
                md-dense
                style="border: 0px;"
              >
                <md-option
                  v-for="(batch, key) in batchList"
                  :key="key"
                  :value="batch.id"
                  style="width:100%; left: 10px;"
                >
                  {{ batch.program.nama_program }} - {{ batch.nama }}
                </md-option>
              </md-select>
            </md-field>
          </div> -->
        </md-table-toolbar>

        <md-table-empty-state> </md-table-empty-state>

        <md-table-row
          slot="md-table-row"
          v-for="(peserta, key) in pesertaList"
          :key="key"
          slot-scope="{ item }"
          style="margin-top: 30px"
        >
          <md-table-cell md-label="NIP" md-sort-by="nip">
            {{ item.nip }}
          </md-table-cell>
          <md-table-cell md-label="Nama" md-sort-by="nama">
            {{ item.nama }}
          </md-table-cell>
          <md-table-cell md-label="Unit" md-sort-by="unit">
            {{ item.unit }}
          </md-table-cell>
          <md-table-cell md-label="Pelatihan" md-sort-by="batch">
            {{ item.batch.program.nama_program }} - {{ item.batch.nama }}
          </md-table-cell>
          <md-table-cell style="padding-left: 30px">
            <router-link
              :to="{
                name: 'peserta-update',
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
                  >Update Data Peserta</md-tooltip
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
                  >Delete Data Peserta</md-tooltip
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

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.nama).includes(toLower(term)));
  }

  return items;
};

export default {
  components: {},
  bodyClass: "login-page",
  //   data() {},
  data: () => ({
    classicModal: false,
    search: "",
    searched: [],
    selectedBatch: ""
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
    ...mapState("peserta", ["pesertaList"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  methods: {
    ...mapActions("batch", ["getBatchList"]),
    ...mapActions("peserta", ["getPesertaList", "deletePeserta"]),
    async onFetchData() {
      await this.getBatchList();
      await this.getPesertaList();
    },
    onDelete(id) {
      this.$confirm({
        message: `Yakin ingin menghapus data Peserta?`,
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
              this.deletePeserta({
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
      this.getPesertaList({
        batch_id: this.selectedBatch
      });
      this.searched = searchByName(this.pesertaList, this.search);
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
    this.searched = this.pesertaList;
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="css"></style>
