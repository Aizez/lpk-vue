import ApiService from "../../api.service";
const state = {
  testimoniList: [],
  testimoniData: {}
};
const mutations = {
  setTestimoniList(state, payload) {
    state.testimoniList = payload;
  },
  setTestimoniData(state, payload) {
    state.testimoniData = payload;
  }
};
const actions = {
  // async getTestimoniList(context) {
  //   try {
  //     let response = await ApiService.query("api/lpk/testimoni");
  //     context.commit("setTestimoniList", response.data);
  //   } catch (error) {
  //     // console.log(error);
  //     throw error;
  //   }
  // },
  async getTestimoniList(context, { program_id } = { program_id: "" }) {
    try {
      let params = new URLSearchParams();
      if (program_id != "") {
        params.append("program_id", program_id);
      }
      let response = await ApiService.query("api/lpk/testimoni?" + params);
      context.commit("setTestimoniList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createTestimoni(context, { payload }) {
    try {
      await ApiService.post("api/lpk/testimoni/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getTestimoni(context, { id }) {
    try {
      let response = await ApiService.query(`api/lpk/testimoni/get/${id}`);
      context.commit("setTestimoniData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateTestimoni(context, { id, payload }) {
    try {
      await ApiService.post(`api/lpk/testimoni/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async deleteTestimoni(context, { id }) {
    try {
      await ApiService.delete(`api/lpk/testimoni/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const testimoni = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default testimoni;
