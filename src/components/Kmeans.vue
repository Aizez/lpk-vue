<template>
  <div>
    <md-table
      v-model="kmeansList.data"
      md-sort="name"
      md-sort-order="asc"
      style="padding: 50px 10px 0px 10px; border-radius: 20px;"
    >
      <!-- <md-table-toolbar style="padding-left: 10px">
        <div class="md-toolbar-section-start">
          <md-field style="padding: 5px 0px 0px 15px; max-width: 300px;">
            <label>Pilih Prodi</label>
            <md-select
              name="prodi.id"
              id="prodi"
              v-model="selectedProdi"
              @input="searchOnTable"
              md-dense
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
      </md-table-toolbar> -->

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Kode" md-sort-by="kode_mk">
          {{ item.kode_mk }}
        </md-table-cell>
        <md-table-cell md-label="Nama Mata Kuliah" md-sort-by="nama_mk">
          {{ item.nama_mk }}
        </md-table-cell>
        <md-table-cell md-label="Prodi" md-sort-by="singkatan_prodi">
          {{ item.singkatan_prodi }}
        </md-table-cell>
        <md-table-cell
          md-label="Kuota Dibuka"
          md-sort-by="total_dibuka"
          style="text-align: center"
        >
          {{ item.total_dibuka }}
        </md-table-cell>
        <md-table-cell
          md-label="Mahasiswa Terverifikasi"
          md-sort-by="total_terisi"
          style="text-align: center"
        >
          {{ item.total_terisi }}
        </md-table-cell>
        <md-table-cell md-label="Keterangan" md-sort-by="keterangan">
          <div v-if="(item.total_terisi / item.total_dibuka) * 100 >= 75">
            {{ k3 }}
          </div>
          <div
            v-if="
              (item.total_terisi / item.total_dibuka) * 100 <= 74 &&
                (item.total_terisi / item.total_dibuka) * 100 >= 55
            "
          >
            {{ k2 }}
          </div>
          <div v-if="(item.total_terisi / item.total_dibuka) * 100 <= 54">
            {{ k1 }}
          </div>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const kmeans = require("node-kmeans");

export default {
  components: {},
  name: "Kmeans",
  data() {
    return {
      k1: "Kurang Diminati",
      k2: "Cukup Diminati",
      k3: "Banyak Diminati",
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
      await this.getPeriodeList();
      await this.getProdiList();
      this.reportKmeans();
    },
    onLogin() {
      this.$router.push({ name: "login" });
    },
    reportKmeans() {
      const mapData = this.kmeansList.data.map(value => {
        return [value.total_dibuka, value.total_terisi];
      });

      console.log(mapData);
      let self = this;
      let selectedCluster;
      // let clusters = [];
      kmeans.clusterize(mapData, { k: 3 }, (err, res) => {
        if (err) console.error(err);
        else {
          const clusterOne = res[0].centroid.reduce((previous, current) => {
            // console.log(previous);
            // console.log(current);
            return previous + current;
          });

          res[0]["total_centroid"] = clusterOne;

          const clusterTwo = res[1].centroid.reduce((previous, current) => {
            // console.log(previous);
            // console.log(current);
            return previous + current;
          });

          res[1]["total_centroid"] = clusterTwo;

          const clusterThree = res[2].centroid.reduce((previous, current) => {
            // console.log(previous);
            // console.log(current);
            return previous + current;
          });

          res[2]["total_centroid"] = clusterThree;

          const sortArr = res.sort(function(a, b) {
            var keyA = a.total_centroid,
              keyB = b.total_centroid;
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
          });

          let cluster1 = [];

          sortArr[0].clusterInd.forEach(value => {
            data[value].keterangan = this.k1;
            cluster1.push(data[value]);
          });

          console.log(cluster1);

          let cluster2 = [];

          sortArr[1].clusterInd.forEach(value => {
            data[value].keterangan = this.k2;
            cluster2.push(data[value]);
          });

          console.log(cluster2);

          let cluster3 = [];

          sortArr[2].clusterInd.forEach(value => {
            data[value].keterangan = this.k3;
            cluster3.push(data[value]);
          });

          console.log(cluster3);

          let matkulMerge = [...cluster1, ...cluster2, ...cluster3];

          this.hasil_kmeans = matkulMerge;
        }
      });
    },
    searchOnTable() {
      this.kmeans({
        prodi_id: this.selectedProdi
      });
      this.searched = searchByProdi(this.kmeansList, this.search);
    }
  },
  async mounted() {
    await this.onFetchData();
    // if (!this.isAuthenticated) {
    //   this.$router.push({ name: "login" });
    // }
  }
};
</script>

<style></style>
