import api from "./api";

export const CustomersService = {
  list: async () => {
    const response = await api.get("/customers");
    return response.data;
  },

  findById: async (id) => {
    const response = await api.get(`/customers/${id}`);
    return response.data;
  },

  delete: async (id) => {
    await api.delete(`/customers/${id}`);
  },

  create: async (payload) => {
    const response = await api.post(`/customers`, payload);
    return response.data;
  },

  update: async (id, payload) => {
    const response = await api.put(`/customers/${id}`, payload);
    return response.data;
  },
};
