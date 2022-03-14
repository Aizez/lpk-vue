import ApiService from "../../api.service";
const state = {
  statistikList: [],
  statistikData: {}
};
const mutations = {
  setStatistikList(state, payload) {
    state.statistikList = payload;
  },
  setStatistikData(state, payload) {
    state.statistikData = payload;
  }
};
const actions = {
  async getStatistikList(context) {
    try {
      let response = await ApiService.query("api/kota/statistik");
      context.commit("setStatistikList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createStatistik(context, { payload }) {
    try {
      await ApiService.post("api/kota/statistik/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getStatistik(context, { id }) {
    try {
      let response = await ApiService.query(`api/kota/statistik/get/${id}`);
      context.commit("setStatistikData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateStatistik(context, { id, payload }) {
    try {
      await ApiService.post(`api/kota/statistik/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  }
  // async deleteStatistik(context, { id }) {
  //   try {
  //     await ApiService.delete(api/scholarship/Statistiks/delete/${id});
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // }
};
const getters = {};

const statistik = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default statistik;
