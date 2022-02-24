import ApiService from "../../api.service";
const state = {
  batchList: [],
  batchData: {}
};
const mutations = {
  setBatchList(state, payload) {
    state.batchList = payload;
  },
  setBatchData(state, payload) {
    state.batchData = payload;
  }
};
const actions = {
  // async getBatchList(context, { program_id } = { program_id: "" }) {
  //   try {
  //     let params = new URLSearchParams();
  //     if (program_id != "") {
  //       params.append("program_id", program_id);
  //     }
  //     let response = await ApiService.query("api/lpk/batch?" + params);
  //     context.commit("setBatchList", response.data);
  //   } catch (error) {
  //     // console.log(error);
  //     throw error;
  //   }
  // },
  async getBatchList(context) {
    try {
      let response = await ApiService.query("api/lpk/batch");
      context.commit("setBatchList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createBatch(context, { payload }) {
    try {
      await ApiService.post("api/lpk/batch/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getBatch(context, { id }) {
    try {
      let response = await ApiService.query(`api/lpk/batch/get/${id}`);
      context.commit("setBatchData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateBatch(context, { id, payload }) {
    try {
      await ApiService.post(`api/lpk/batch/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async deleteBatch(context, { id }) {
    try {
      await ApiService.delete(`api/lpk/batch/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const batch = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default batch;
