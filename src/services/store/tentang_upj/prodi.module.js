import ApiService from "../../api.service";
const state = {
  prodiList: [],
  prodiData: {}
};
const mutations = {
  setProdiList(state, payload) {
    state.prodiList = payload;
  },
  setProdiData(state, payload) {
    state.prodiData = payload;
  }
};
const actions = {
  async getProdiList(context) {
    try {
      let response = await ApiService.query("api/vue/prodi");
      context.commit("setProdiList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createProdi(context, { payload }) {
    try {
      await ApiService.post("api/vue/prodi/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getProdi(context, { id }) {
    try {
      let response = await ApiService.query(`api/vue/prodi/get/${id}`);
      context.commit("setProdiData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateProdi(context, { id, payload }) {
    try {
      await ApiService.post(`api/vue/prodi/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  }
  // async deleteProdi(context, { id }) {
  //   try {
  //     await ApiService.delete(`api/vue/prodi/delete/${id}`);
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // }
};
const getters = {};

const prodi = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default prodi;
