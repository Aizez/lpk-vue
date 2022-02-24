import ApiService from "../../api.service";
const state = {
  periodeList: [],
  periodeData: {}
};
const mutations = {
  setPeriodeList(state, payload) {
    state.periodeList = payload;
  },
  setPeriodeData(state, payload) {
    state.periodeData = payload;
  }
};
const actions = {
  async getPeriodeList(context) {
    try {
      let response = await ApiService.query("api/kota/periode");
      context.commit("setPeriodeList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createPeriode(context, { payload }) {
    try {
      await ApiService.post("api/kota/periode/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getPeriode(context, { id }) {
    try {
      let response = await ApiService.query(`api/kota/periode/get/${id}`);
      context.commit("setPeriodeData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updatePeriode(context, { id, payload }) {
    try {
      await ApiService.post(`api/kota/periode/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async deletePeriode(context, { id }) {
    try {
      await ApiService.delete(`api/kota/periode/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const periode = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default periode;
