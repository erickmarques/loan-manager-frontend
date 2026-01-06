import api from "./api";

export const LoansService = {
  list: async () => {
    const response = await api.get("/loans");
    return response.data;
  },

  findById: async (id) => {
    const response = await api.get(`/loans/${id}`);
    return response.data;
  },

  delete: async (id) => {
    await api.delete(`/loans/${id}`);
  },

  create: async (payload) => {
    const response = await api.post(`/loans`, payload);
    return response.data;
  },

  update: async (id, payload) => {
    const response = await api.put(`/loans/${id}`, payload);
    return response.data;
  },
};
