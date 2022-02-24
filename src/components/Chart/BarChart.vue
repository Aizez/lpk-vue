<script>
import { HorizontalBar, mixins } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  computed: {
    renderData() {
      return this.chartData;
    },
    myStyles() {
      return {
        height: `200px`,
        position: "relative"
      };
    }
  },
  mounted() {
    this.loadRenderChart();
  },
  watch: {
    chartData: {
      handler() {
        this.loadRenderChart();
      },
      deep: true
      // this.$data._chart.update();
    }
  },
  methods: {
    loadRenderChart() {
      this.renderChart(this.renderData, this.options);
    }
  }
};
</script>
