<template>
  <div class="content">
    <vue-confirm-dialog></vue-confirm-dialog>
    <h3 class="h2" style="margin-top: 65px;">
      <i class="fa fa-book" style="padding-right: 10px; font-size: 40px"></i
      ><strong>Daftar Mata Kuliah KOTA</strong>
    </h3>
    <div
      class="main"
      style="border-radius: 20px; margin-top: 30px; min-height: 400px; box-shadow: 5px 5px #c5c5c5; padding-bottom: 70px"
    >
      <div
        class="main main-raised"
        style="border-radius: 50px; float:right; top: 45px; right: 200px; height: 0px"
        v-if="auth.user.level == 'admin' || auth.user.level == 'superuser'"
      >
        <p
          class="md-list-item-router md-layout gradient2"
          style="border-radius: 50px; box-shadow: 5px 5px #c5c5c5"
        >
          <md-button
            @click="myFunction()"
            class="md-button1 md-simple"
            style="height: 40px; width: 220px;"
          >
            <!-- <p style="color: white; font-size: 20px; padding: 10px 7px 0px 0px">
              +
            </p> -->
            <span
              style="color: white; font-size: 14px; text-transform: capitalize"
            >
              Tambah Daftar MK KOTA
            </span>
          </md-button>
        </p>
      </div>
      <div
        class="main main-raised"
        style="float:right; top: 45px; height: 0px"
        v-if="auth.user.level == 'admin' || auth.user.level == 'superuser'"
      >
        <a
          href="#/dashboard/manajemen-periode"
          class="md-list-item-router md-layout gradient1"
          style=" border-radius: 50px; box-shadow: 5px 5px #c5c5c5"
        >
          <md-button
            class="md-button1 md-simple"
            style="height: 40px; width: 170px;"
          >
            <span
              style="color: white; font-size: 14px; text-transform: capitalize"
            >
              Manage Periode
            </span>
          </md-button>
        </a>
      </div>
      <md-table
        v-model="laporanList"
        md-sort="name"
        md-sort-order="asc"
        style="padding: 50px 10px 50px 10px; border-radius: 20px;"
        md-fixed-header
      >
        <md-table-toolbar style="padding-left: 10px">
          <div class="md-toolbar-section-start">
            <md-field style="padding: 5px 0px 0px 15px; max-width: 300px;">
              <label>Pilih Periode...</label>
              <md-select
                name="periode.id"
                id="periode.id"
                v-model="selectedPeriode"
                @input="searchOnTable"
                md-dense
                style="border: 0px"
              >
                <md-option
                  v-for="(periode, key) in periodeList"
                  :key="key"
                  :value="periode.id"
                  style="width:100%; left: 10px;"
                >
                  <div
                    v-if="periode.semester == '01' || periode.semester == '1'"
                  >
                    {{ periode.tahun }} (Ganjil)
                  </div>
                  <div
                    v-if="periode.semester == '02' || periode.semester == '2'"
                  >
                    {{ periode.tahun }} (Genap)
                  </div>
                </md-option>
              </md-select>
            </md-field>
            <md-field
              style="margin-left: 30px; padding: 5px 0px 0px 15px; max-width: 300px;"
            >
              <label>Pilih Prodi...</label>
              <md-select
                name="prodi.id"
                id="prodi.id"
                v-model="selectedProdi"
                @input="searchOnTable"
                md-dense
                style="border: 0px"
              >
                <md-option
                  v-for="(prodi, key) in prodiList"
                  :key="key"
                  :value="prodi.id"
                  style="width:100%; left: 10px;"
                >
                  {{ prodi.singkatan_prodi }} - {{ prodi.nama_prodi }}
                </md-option>
              </md-select>
            </md-field>
          </div>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Kode" md-sort-by="mata_kuliah.kode_mk">
            {{ item.mata_kuliah.kode_mk }}
          </md-table-cell>
          <md-table-cell
            md-label="Nama Mata Kuliah"
            md-sort-by="mata_kuliah.nama_mk"
            style="max-width: 185px; padding-left: 15px"
          >
            {{ item.mata_kuliah.nama_mk }}
          </md-table-cell>
          <md-table-cell
            md-label="Dosen Pengampu"
            md-sort-by="dosen.nama"
            style="max-width: 190px"
          >
            {{ item.dosen.nama }}
          </md-table-cell>
          <md-table-cell
            md-label="Kuota Dibuka"
            md-sort-by="kuota_dibuka"
            style="padding: 0px 50px 0px 30px"
          >
            {{ item.kuota_dibuka }}
          </md-table-cell>
          <md-table-cell
            md-label="Peserta"
            md-sort-by="kuota_terisi"
            style="padding: 0px 50px 0px 70px"
          >
            {{ item.kuota_terisi }}
          </md-table-cell>
          <md-table-cell md-label="Sisa" style="padding: 0px 30px 0px 50px">
            {{ parseInt(item.kuota_dibuka) - parseInt(item.kuota_terisi) }}
          </md-table-cell>
          <md-table-cell
            md-label="Cadangan"
            md-sort-by="cadangan"
            style="padding: 0px 70px 0px 50px"
            v-if="auth.user.level == 'guest'"
          >
            {{ item.cadangan }}
          </md-table-cell>
          <md-table-cell
            md-label="Cadangan"
            md-sort-by="cadangan"
            style="padding: 0px 70px 0px 50px"
            v-if="auth.user.level == 'admin' || auth.user.level == 'superuser'"
          >
            {{ item.cadangan }}
          </md-table-cell>
          <md-table-cell
            v-if="auth.user.level == 'admin' || auth.user.level == 'superuser'"
          >
            <router-link
              :to="{
                name: 'report-mata-kuliah-update',
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
                  >Update Daftar Mata Kuliah</md-tooltip
                ></i
              >
            </router-link>
          </md-table-cell>
          <md-table-cell
            v-if="auth.user.level == 'admin' || auth.user.level == 'superuser'"
          >
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
                  >Delete Daftar Mata Kuliah</md-tooltip
                ></i
              >
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
      <br />
      <div
        class="md-layout md-layout-item md-gutter"
        style="padding-right: 100px; float: right"
      >
        <div style="width: 100px;">
          <p><strong></strong></p>
        </div>
        <div class="a" style="padding-left: 10px">
          <p>Kuota Dibuka</p>
        </div>
        <div class="b" style="padding-left: 20px">
          <p>Peserta</p>
        </div>
        <div class="c" style="padding-left: 20px">
          <p>Sisa</p>
        </div>
        <div class="a" style="margin-right: 10px">
          <p>Cadangan</p>
        </div>
      </div>
      <div
        class="md-layout md-layout-item md-gutter"
        style="padding-right: 80px; float: right"
      >
        <div style="width: 100px;">
          <p style="font-size: 16px"><strong>Jumlah</strong></p>
        </div>
        <div class="a" style="padding-left: 10px">
          <p>{{ laporanHasil.total_kuota_dibuka }}</p>
        </div>
        <div class="b" style="padding-left: 5px">
          <p>{{ laporanHasil.total_kuota_terisi }}</p>
        </div>
        <div class="c" style="padding-left: 0px">
          <p>{{ laporanHasil.total_kouta_tersedia }}</p>
        </div>
        <div class="a">
          <p>{{ laporanHasil.total_cadangan }}</p>
        </div>
      </div>
      <br />
    </div>
    <md-progress-bar md-mode="indeterminate" v-if="sending" />

    <md-snackbar :md-active.sync="userSaved"
      >Proses menghapus berhasil</md-snackbar
    >
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const toLower = text => {
  return text.toString().toLowerCase();
};

export default {
  bodyClass: "login-page",
  components: {},
  data: () => ({
    jumlah: [],
    classicModal: false,
    search: "x",
    search1: "x",
    searched: [],
    selectedPeriode: "",
    selectedProdi: ""
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
    ...mapState("laporan", ["laporanHasil", "laporanList"]),
    ...mapState("periode", ["periodeData", "periodeList"]),
    ...mapState("prodi", ["prodiData", "prodiList"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  methods: {
    ...mapActions("laporan", ["getLaporanList", "report", "deleteLaporan"]),
    ...mapActions("periode", ["getPeriode", "getPeriodeList"]),
    ...mapActions("prodi", ["getProdi", "getProdiList"]),
    async onFetchData() {
      await this.getLaporanList();
      await this.report({
        periode_id: this.selectedPeriode,
        prodi_id: this.selectedProdi
      });
      await this.getPeriodeList();
      await this.getProdiList();
    },
    onDelete(id) {
      this.$confirm({
        message: `Yakin ingin menghapus Daftar Mata Kuliah?`,
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
              this.deleteLaporan({
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
    myFunction: function() {
      window.open(
        "#/dashboard/report-mata-kuliah-create",
        "",
        "width=440,height=600"
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
      this.getLaporanList({
        periode_id: this.selectedPeriode,
        prodi_id: this.selectedProdi
      });
      this.report({
        periode_id: this.selectedPeriode,
        prodi_id: this.selectedProdi
      });
      // this.searched = searchByPeriode(this.laporanList, this.search);
    },
    classicModalHide() {
      this.classicModal = false;
    }
  },
  async mounted() {
    await this.onFetchData();
    // this.fillData();
    // this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  created() {
    this.searched = this.laporanList;
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="css">
.small {
  max-width: 600px;
  margin: 150px auto;
}

.gradient1 {
  background-image: linear-gradient(to bottom right, #4ac6ff, #144bb3);
}

.gradient2 {
  background-image: linear-gradient(to bottom right, #38e852, #14a82a);
}

.gradient3 {
  background-image: linear-gradient(to bottom right, #ff5f5f, #c40606);
}

/* .gradient3 {
  background-image: linear-gradient(to bottom right, #c4c4c4, #767676);
} */

div.a {
  width: 130px;
}

div.a p {
  font-size: 14px;
  color: rgb(29, 29, 29);
  letter-spacing: 0.8px;
}

div.b {
  width: 130px;
}

div.b p {
  font-size: 14px;
  color: rgb(29, 29, 29);
  letter-spacing: 0.8px;
}

div.c {
  width: 110px;
}

div.c p {
  font-size: 14px;
  color: rgb(29, 29, 29);
  letter-spacing: 0.8px;
  line-height: 24px;
}

@media screen and (max-width: 700px) {
  div.a {
    width: 100px;
  }

  div.b {
    width: 10px;
  }

  div.c {
    width: 300px;
    padding-bottom: 20px;
  }

  div.a p {
    font-size: 12px;
    color: rgb(29, 29, 29);
  }

  div.b p {
    font-size: 12px;
    color: rgb(29, 29, 29);
  }

  div.c p {
    font-size: 12px;
    color: rgb(29, 29, 29);
    text-align: justify;
  }
}
</style>
