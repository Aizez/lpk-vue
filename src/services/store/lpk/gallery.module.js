import ApiService from "../../api.service";
const state = {
  galleryList: [],
  galleryData: {}
};
const mutations = {
  setGalleryList(state, payload) {
    state.galleryList = payload;
  },
  setGalleryData(state, payload) {
    state.galleryData = payload;
  }
};
const actions = {
  // async getGalleryList(context) {
  //   try {
  //     let response = await ApiService.query("api/lpk/gallery");
  //     context.commit("setGalleryList", response.data);
  //   } catch (error) {
  //     // console.log(error);
  //     throw error;
  //   }
  // },
  async getGalleryList(context, { program_id } = { program_id: "" }) {
    try {
      let params = new URLSearchParams();
      if (program_id != "") {
        params.append("program_id", program_id);
      }
      let response = await ApiService.query("api/lpk/gallery?" + params);
      context.commit("setGalleryList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createGallery(context, { payload }) {
    try {
      await ApiService.post("api/lpk/gallery/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getGallery(context, { id }) {
    try {
      let response = await ApiService.query(`api/lpk/gallery/get/${id}`);
      context.commit("setGalleryData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateGallery(context, { id, payload }) {
    try {
      await ApiService.post(`api/lpk/gallery/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async deleteGallery(context, { id }) {
    try {
      await ApiService.delete(`api/lpk/gallery/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const gallery = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default gallery;
