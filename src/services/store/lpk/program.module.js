import ApiService from "../../api.service";
const state = {
  programList: [],
  programData: {}
};
const mutations = {
  setProgramList(state, payload) {
    state.programList = payload;
  },
  setProgramData(state, payload) {
    state.programData = payload;
  }
};
const actions = {
  async getProgramList(context) {
    try {
      let response = await ApiService.query("api/lpk/program");
      context.commit("setProgramList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createProgram(context, { payload }) {
    try {
      await ApiService.post("api/lpk/program/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getProgram(context, { id }) {
    try {
      let response = await ApiService.query(`api/lpk/program/get/${id}`);
      context.commit("setProgramData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateProgram(context, { id, payload }) {
    try {
      await ApiService.post(`api/lpk/program/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async deleteProgram(context, { id }) {
    try {
      await ApiService.delete(`api/lpk/program/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const program = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default program;
