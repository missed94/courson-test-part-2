import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: "1",
        name: "Product 1",
        description: "Description 1",
        image: "logo.png",
        price: 100,
        quantity: 1,
        selected: true,
      },
      {
        id: "2",
        name: "Product 2",
        description: "Description 2",
        image: "logo.png",
        price: 200,
        quantity: 1,
        selected: true,
      },
    ],
    customer: {
      name: "",
      address: "",
      phone: "",
      email: "",
    },
  },
  getters: {
    products: (state) => state.products,
    customer: (state) => state.customer,
  },
  mutations: {
    updateProductQuantity(state, { productId, quantity }) {
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.quantity = Number(quantity);
      }
      if (product.quantity <= 0) {
        product.selected = false;
      }
    },
    toggleProductSelection(state, productId) {
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.selected = !product.selected;
      }
    },
    updateCustomerInfo(state, customerInfo) {
      state.customer = { ...state.customer, ...customerInfo };
    },
    resetState(state) {
      state.products.forEach((product) => {
        product.quantity = 1;
        product.selected = true;
      });
      state.customer = {
        name: "",
        address: "",
        phone: "",
        email: "",
      };
    },
  },
});
