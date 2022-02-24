import ApiService from "../../api.service";
const state = {
  detailProgramList: [],
  detailProgramData: {}
};
const mutations = {
  setDetailProgramList(state, payload) {
    state.detailProgramList = payload;
  },
  setDetailProgramData(state, payload) {
    state.detailProgramData = payload;
  }
};
const actions = {
  // async getDetailProgramList(context, { program_id } = { program_id: "" }) {
  //   try {
  //     let params = new URLSearchParams();
  //     if (program_id != "") {
  //       params.append("program_id", program_id);
  //     }
  //     let response = await ApiService.query("api/lpk/detail-program?" + params);
  //     context.commit("setDetailProgramList", response.data);
  //   } catch (error) {
  //     // console.log(error);
  //     throw error;
  //   }
  // },
  async getDetailProgramList(context) {
    try {
      let response = await ApiService.query("api/lpk/detail-program");
      context.commit("setDetailProgramList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createDetailProgram(context, { payload }) {
    try {
      await ApiService.post("api/lpk/detail-program/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getDetailProgram(context, { id }) {
    try {
      let response = await ApiService.query(`api/lpk/detail-program/get/${id}`);
      context.commit("setDetailProgramData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateDetailProgram(context, { id, payload }) {
    try {
      await ApiService.post(`api/lpk/detail-program/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async deleteDetailProgram(context, { id }) {
    try {
      await ApiService.delete(`api/lpk/detail-program/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const detailProgram = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default detailProgram;
