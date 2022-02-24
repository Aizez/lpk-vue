import ApiService from "../../api.service";
const state = {
  temaList: [],
  temaData: {}
};
const mutations = {
  setTemaList(state, payload) {
    state.temaList = payload;
  },
  setTemaData(state, payload) {
    state.temaData = payload;
  }
};
const actions = {
  async getTemaList(context) {
    try {
      let response = await ApiService.query("api/graduation/tema");
      context.commit("setTemaList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createTema(context, { payload }) {
    try {
      await ApiService.post("api/graduation/tema/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getTema(context, { id }) {
    try {
      let response = await ApiService.query(`api/graduation/tema/get/${id}`);
      context.commit("setTemaData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateTema(context, { id, payload }) {
    try {
      await ApiService.post(`api/graduation/tema/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  }
  // async deleteTema(context, { id }) {
  //   try {
  //     await ApiService.delete(`api/graduation/tema/delete/${id}`);
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // }
};
const getters = {};

const tema = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default tema;
