import ApiService from "../../api.service";
const state = {
  laporanList: [],
  laporanData: {},
  laporanHasil: {},
  kmeansList: [],
  graphList: [],
  laporanUrbanList: [],
  kaprodiList: []
};
const mutations = {
  setLaporanList(state, payload) {
    state.laporanList = payload;
  },
  setLaporanData(state, payload) {
    state.laporanData = payload;
  },
  setLaporanHasil(state, payload) {
    state.laporanHasil = payload;
  },
  setKmeans(state, payload) {
    state.kmeansList = payload;
  },
  setGraph(state, payload) {
    state.graphList = payload;
  },
  setLaporanUrban(state, payload) {
    state.laporanUrbanList = payload;
  },
  setKaprodi(state, payload) {
    state.kaprodiList = payload;
  }
};
const actions = {
  async getLaporanList(
    context,
    { periode_id, prodi_id } = { periode_id: "", prodi_id: "" }
  ) {
    try {
      let params = new URLSearchParams();
      if (periode_id != "") {
        params.append("periode_id", periode_id);
      }
      if (prodi_id != "") {
        params.append("prodi_id", prodi_id);
      }
      let response = await ApiService.query("api/kota/laporan?" + params);
      context.commit("setLaporanList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createLaporan(context, { payload }) {
    try {
      await ApiService.post("api/kota/laporan/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getLaporan(context, { id }) {
    try {
      let response = await ApiService.query(`api/kota/laporan/get/${id}`);
      context.commit("setLaporanData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },
  async updateLaporan(context, { id, payload }) {
    try {
      await ApiService.post(`api/kota/laporan/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async report(context, { periode_id, prodi_id }) {
    try {
      let params = new URLSearchParams();
      if (periode_id != "") {
        params.append("periode_id", periode_id);
      }
      if (prodi_id != "") {
        params.append("prodi_id", prodi_id);
      }
      let response = await ApiService.post("api/kota/laporan/report?" + params);
      context.commit("setLaporanHasil", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  // async kmeans(context, { prodi_id }) {
  //   try {
  //     let params = new URLSearchParams();
  //     if (prodi_id != "") {
  //       params.append("prodi_id", prodi_id);
  //     }
  //     let response = await ApiService.post("api/kota/laporan/kmeans?" + params);
  //     context.commit("setKmeans", response.data);
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  async kmeans(context) {
    try {
      let response = await ApiService.post("api/kota/laporan/kmeans");
      context.commit("setKmeans", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  async graph(context) {
    try {
      let response = await ApiService.post("api/kota/laporan/graph");
      context.commit("setGraph", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  async laporanUrban(context, { urban_id }) {
    try {
      let params = new URLSearchParams();
      if (urban_id != "") {
        params.append("urban_id", urban_id);
      }
      let response = await ApiService.post("api/kota/laporan/urban?" + params);
      context.commit("setLaporanUrban", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  async kaprodi(context, { periode_id }) {
    try {
      let params = new URLSearchParams();
      if (periode_id != "") {
        params.append("periode_id", periode_id);
      }
      let response = await ApiService.post(
        "api/kota/laporan/kaprodi?" + params
      );
      context.commit("setKaprodi", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  async deleteLaporan(context, { id }) {
    try {
      await ApiService.delete(`api/kota/laporan/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }

  // async deleteLaporan(context, { id }) {
  //   try {
  //     await ApiService.delete(api/scholarship/Laporans/delete/${id});
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // }
};
const getters = {};

const laporan = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default laporan;
