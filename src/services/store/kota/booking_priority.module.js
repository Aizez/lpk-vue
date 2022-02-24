import ApiService from "../../api.service";
const state = {
  bookingPriorityList: [],
  bookingPriorityData: {},
  bookedList: []
};
const mutations = {
  setBookingPriorityList(state, payload) {
    state.bookingPriorityList = payload;
  },
  setBookingData(state, payload) {
    state.bookingPriorityData = payload;
  },
  setBooked(state, payload) {
    state.bookedList = payload;
  }
};
const actions = {
  async getBookingPriorityList(
    context,
    { periode_id, prodi_id } = { periode_id: "", prodi_id: "" }
  ) {
    try {
      let params = new URLSearchParams();
      if (periode_id != "") {
        params.append("periode_id", periode_id);
      }
      if (prodi_id != "") {
        params.append("prodi_id", prodi_id);
      }
      let response = await ApiService.query(
        "api/kota/booking-priority?" + params
      );
      context.commit("setBookingPriorityList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createBookingPriority(context, { payload }) {
    try {
      await ApiService.post("api/kota/booking-priority/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getBookingPriority(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/kota/booking-priority/get/${id}`
      );
      context.commit("setBookingData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },
  async updateBookingPriority(context, { id, payload }) {
    try {
      await ApiService.post(`api/kota/booking-priority/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async booked(context, { periode_id }) {
    try {
      let params = new URLSearchParams();
      if (periode_id != "") {
        params.append("periode_id", periode_id);
      }
      let response = await ApiService.post(
        "api/kota/booking-priority/booked?" + params
      );
      context.commit("setBooked", response.data);
    } catch (error) {
      throw error;
    }
  },

  async deleteBookingPriority(context, { id }) {
    try {
      await ApiService.delete(`api/kota/booking-priority/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }

  // async reportBooking(context, { periode_id, prodi_id }) {
  //   try {
  //     let params = new URLSearchParams();
  //     if (periode_id != "") {
  //       params.append("periode_id", periode_id);
  //     }
  //     if (prodi_id != "") {
  //       params.append("prodi_id", prodi_id);
  //     }
  //     let response = await ApiService.post(`api/kota/booking/report` + params);
  //     context.commit("setBookingHasil", response.data);
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // }
};
const getters = {};

const bookingPriority = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default bookingPriority;
