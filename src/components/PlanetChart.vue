<template>
  <div>
    <canvas id="planet-chart" style="max-height: 500px"></canvas>
  </div>
</template>

<script>
// import { Chart } from "chart.js";
// import { planetChartData } from "../planet-data.js";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from "chart.js";
import { mapActions, mapState } from "vuex";

// Chart.register(
//   ArcElement,
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   BubbleController,
//   DoughnutController,
//   LineController,
//   PieController,
//   PolarAreaController,
//   RadarController,
//   ScatterController,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   RadialLinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Decimation,
//   Filler,
//   Legend,
//   Title,
//   Tooltip
// );

export default {
  name: "PlanetChart",
  data() {
    return {
      planetChartData: {
        type: "horizontalBar",
        data: {
          labels: this.namaMk,
          datasets: [
            {
              label: "Jumlah Kuota Dibuka",
              data: this.totalDibuka,
              // data: [10, 12, 123, 123, 123, 123, 11, 11],
              backgroundColor: "#6f96e3",
              borderColor: "#252f99",
              borderWidth: 2
            },
            {
              label: "Jumlah Mahasiswa",
              data: this.totalTerisi,
              backgroundColor: "#65db82",
              borderColor: "#259942",
              borderWidth: 2
            }
          ]
        },
        options: {
          indexAxis: "y",
          responsive: true,
          plugins: {
            legend: {
              position: "right"
            }
          },
          lineTension: 1,
          scales: {
            // x: {
            //   stacked: true
            // },
            // y: {
            //   stacked: true,
            //   yAxes: [
            //     {
            //       ticks: {
            //         beginAtZero: true,
            //         padding: 25
            //       }
            //     }
            //   ]
            // }
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 10
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
    await this.loadChart();
    // const ctx = document.getElementById("planet-chart");
    // new Chart(ctx, this.planetChartData);
  },
  computed: {
    ...mapState("laporan", ["graphList"]),
    namaMk() {
      return this.graphList.data.map(
        value => `${value.nama_mk} (${value.singkatan_prodi})`
      );
    },
    totalDibuka() {
      return this.graphList.data.map(value => value.graph_dibuka);
    },
    totalTerisi() {
      return this.graphList.data.map(value => value.graph_terisi);
    }
  },
  methods: {
    ...mapActions("laporan", ["graph"]),
    loadChart() {
      this.planetChartData.data.labels = this.namaMk ?? [];
      this.planetChartData.data.datasets[0].data = this.totalDibuka ?? [];
      this.planetChartData.data.datasets[1].data = this.totalTerisi ?? [];
      const ctx = document.getElementById("planet-chart");
      new Chart(ctx, this.planetChartData);
    },
    async onFetchData() {
      // await this.kmeans();
      await this.graph();
    }
  }
};
</script>
