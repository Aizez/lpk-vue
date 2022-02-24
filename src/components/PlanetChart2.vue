<template>
  <div>
    <md-field>
      <label for="urban">Pilih Rumpun Urban</label>
      <md-select
        name="urban.id"
        id="urban"
        v-model="selectedUrban"
        md-dense
        @change="searchOnTable"
        @input="searchOnTable"
        style="border: 0px"
      >
        <md-option
          v-for="(urban, key) in urbanList"
          :key="key"
          :value="urban.id"
          style="width:100%; left: 10px;"
        >
          {{ urban.nama_urban }}
        </md-option>
      </md-select>
    </md-field>
    <bar-chart
      :chartData.sync="chartData.data"
      :options="chartData.options"
      style="height: 300px"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BarChart from "./Chart/BarChart.vue";

export default {
  components: { BarChart },
  name: "PlanetChart2",
  data() {
    return {
      selectedUrban: "",
      chartData: {
        data: {
          labels: this.namaMk,
          datasets: [
            {
              label: "Jumlah Kuota Dibuka",
              data: this.totalDibuka,
              // data: [10, 12, 123, 123, 123, 123, 11, 11],
              // backgroundColor: "rgba(30, 35, 107,.5)",
              // borderColor: "#161a4f",
              backgroundColor: "#6f96e3",
              borderColor: "#252f99",
              borderWidth: 2
            },
            {
              label: "Jumlah Mahasiswa",
              data: this.totalTerisi,
              // backgroundColor: "rgba(71, 183,132,.5)",
              // borderColor: "#47b784",
              backgroundColor: "#65db82",
              borderColor: "#259942",
              borderWidth: 2
            }
          ]
        },
        options: {
          // indexAxis: "y",
          responsive: true,
          maintainAspectRatio: false,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 2
                }
              }
            ]
          }
        }
      }
    };
  },
  async mounted() {
    await this.onFetchData();
  },
  computed: {
    ...mapState("laporan", ["laporanUrbanList"]),
    ...mapState("urban", ["urbanData", "urbanList"]),
    namaMk() {
      return this.laporanUrbanList.data.map(
        value => `${value.nama_mk} (${value.singkatan_prodi})`
      );
    },
    totalDibuka() {
      return this.laporanUrbanList.data.map(value => value.kuota_urban_dibuka);
    },
    totalTerisi() {
      return this.laporanUrbanList.data.map(value => value.kuota_urban_terisi);
    }
  },
  methods: {
    ...mapActions("laporan", ["laporanUrban"]),
    ...mapActions("urban", ["getUrban", "getUrbanList"]),
    async searchOnTable() {
      await this.laporanUrban({
        urban_id: this.selectedUrban
      });

      await this.loadChart();
      // this.searched = searchByPeriode(this.laporanList, this.search);
    },
    loadChart() {
      this.chartData.data.labels = this.namaMk;
      this.chartData.data.datasets[0].data = this.totalDibuka;
      this.chartData.data.datasets[1].data = this.totalTerisi;
      // const ctx = document.getElementById("planet-chart2");
      // new Chart(ctx, this.chartData);
    },
    async onFetchData() {
      // await this.getLaporanList();
      // await this.kmeans();
      await this.getUrbanList();

      await this.laporanUrban({
        urban_id: this.selectedUrban
      });
    }
  }
};
</script>

<style>
.small {
  height: 450px !important;
  margin-top: 0px !important;
}
</style>
