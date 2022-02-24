import ApiService from "../../api.service";
const state = {
  periodList: [],
  periodData: {}
};
const mutations = {
  setPeriodList(state, payload) {
    state.periodList = payload;
  },
  setPeriodData(state, payload) {
    state.periodData = payload;
  }
};
const actions = {
  async getPeriodeList(context) {
    try {
      let response = await ApiService.get("api/scholarship/periods");
      context.commit("setPeriodList", response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async createPeriod(context, { payload }) {
    try {
      await ApiService.post("api/scholarship/periods/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getPeriod(context, { id }) {
    try {
      let response = await ApiService.get(api/scholarship/periods/get/${id});
      context.commit("setPeriodData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updatePeriod(context, { id, payload }) {
    try {
      await ApiService.post(api/scholarship/periods/update/${id}, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async deletePeriod(context, { id }) {
    try {
      await ApiService.delete(api/scholarship/periods/delete/${id});
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const period = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default period;