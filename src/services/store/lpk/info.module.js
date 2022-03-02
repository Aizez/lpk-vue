import ApiService from "../../api.service";
const state = {
  infoList: [],
  infoData: {},
  dateData: [],
  dateList: [],
  latestList: [],
  previewList: [],
  postList: []
};
const mutations = {
  setInfoList(state, payload) {
    state.infoList = payload;
  },
  setInfoData(state, payload) {
    state.infoData = payload;
  },
  setDateData(state, payload) {
    state.dateData = payload;
  },
  setDateList(state, payload) {
    state.dateList = payload;
  },
  setLatestList(state, payload) {
    state.latestList = payload;
  },
  setPreviewList(state, payload) {
    state.previewList = payload;
  },
  setPostList(state, payload) {
    state.postList = payload;
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
  },

  async getDate(context) {
    try {
      let response = await ApiService.query(`api/lpk/info/date/${id}`);
      context.commit("setDate", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  async getDateList(context) {
    try {
      let response = await ApiService.query("api/lpk/info/date");
      context.commit("setDateList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  async getLatestList(context) {
    try {
      let response = await ApiService.query("api/lpk/info/latest");
      context.commit("setLatestList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  async getPreviewList(context) {
    try {
      let response = await ApiService.query("api/lpk/info/preview");
      context.commit("setPreviewList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  async getPostList(context) {
    try {
      let response = await ApiService.query("api/lpk/info/post");
      context.commit("setPostList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
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
