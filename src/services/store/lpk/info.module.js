import ApiService from "../../api.service";
const state = {
  infoList: [],
  infoData: {}
};
const mutations = {
  setInfoList(state, payload) {
    state.infoList = payload;
  },
  setInfoData(state, payload) {
    state.infoData = payload;
  }
};
const actions = {
  async getInfoList(context) {
    try {
      let response = await ApiService.query("api/lpk/info");
      context.commit("setInfoList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createInfo(context, { payload }) {
    try {
      await ApiService.post("api/lpk/info/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getInfo(context, { id }) {
    try {
      let response = await ApiService.query(`api/lpk/info/get/${id}`);
      context.commit("setInfoData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateInfo(context, { id, payload }) {
    try {
      await ApiService.post(`api/lpk/info/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async deleteInfo(context, { id }) {
    try {
      await ApiService.delete(`api/lpk/info/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const info = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default info;
