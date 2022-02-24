import ApiService from "../../api.service";
const state = {
  pesertaList: [],
  pesertaData: {}
};
const mutations = {
  setPesertaList(state, payload) {
    state.pesertaList = payload;
  },
  setPesertaData(state, payload) {
    state.pesertaData = payload;
  }
};
const actions = {
  async getPesertaList(context, { batch_id } = { batch_id: "" }) {
    try {
      let params = new URLSearchParams();
      if (batch_id != "") {
        params.append("batch_id", batch_id);
      }
      let response = await ApiService.query("api/lpk/peserta?" + params);
      context.commit("setPesertaList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createPeserta(context, { payload }) {
    try {
      await ApiService.post("api/lpk/peserta/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getPeserta(context, { id }) {
    try {
      let response = await ApiService.query(`api/lpk/peserta/get/${id}`);
      context.commit("setPesertaData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updatePeserta(context, { id, payload }) {
    try {
      await ApiService.post(`api/lpk/peserta/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async deletePeserta(context, { id }) {
    try {
      await ApiService.delete(`api/lpk/peserta/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const peserta = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default peserta;
