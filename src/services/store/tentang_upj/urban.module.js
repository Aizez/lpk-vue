import ApiService from "../../api.service";
const state = {
  urbanList: [],
  urbanData: {}
};
const mutations = {
  setUrbanList(state, payload) {
    state.urbanList = payload;
  },
  setUrbanData(state, payload) {
    state.urbanData = payload;
  }
};
const actions = {
  async getUrbanList(context) {
    try {
      let response = await ApiService.query("api/vue/urban");
      context.commit("setUrbanList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createUrban(context, { payload }) {
    try {
      await ApiService.post("api/vue/urban/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getUrban(context, { id }) {
    try {
      let response = await ApiService.query(`api/vue/urban/get/${id}`);
      context.commit("setUrbanData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateUrban(context, { id, payload }) {
    try {
      await ApiService.post(`api/vue/urban/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  }
  // async deleteUrban(context, { id }) {
  //   try {
  //     await ApiService.delete(`api/vue/urban/delete/${id}`);
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // }
};
const getters = {};

const urban = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default urban;
