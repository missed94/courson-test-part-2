<template>
  <div class="product-confirm-order p-4">
    <BaseStepper title="Шаг 3: Подтверждение заказа" :currentStep="3">
      <div class="mb-4">
        <h3>Товары</h3>
        <ul class="list-group mb-2">
          <ConfirmOrderItem
            v-for="product in selectedProducts"
            :key="product.id"
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :quantity="product.quantity"
          />
        </ul>
        <div>
          <strong>Итоговая стоимость: {{ totalCost }} руб.</strong>
        </div>
      </div>
      <ConfirmOrderBuyerInformation
        :name="customer.name"
        :address="customer.address"
        :phone="customer.phone"
        :email="customer.email"
      />
      <router-link to="/step2" class="btn btn-secondary me-2"
        >Назад</router-link
      >
      <button @click="submitOrder" class="btn btn-primary">
        Отправить заказ
      </button>
      <Modal name="order-status" adaptive @before-close="handleModalClose">
        <div
          class="d-flex flex-column align-items-center justify-content-center h-100 p-4"
        >
          <h3 class="mb-4">{{ modalMessage }}</h3>
          <button class="btn btn-primary" @click="$modal.hide('order-status')">
            Закрыть
          </button>
        </div>
      </Modal>
    </BaseStepper>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import BaseStepper from "@/components/BaseStepper";
import ConfirmOrderItem from "./components/ConfirmOrderItem";
import ConfirmOrderBuyerInformation from "./components/ConfirmOrderBuyerInformation";

export default {
  components: {
    BaseStepper,
    ConfirmOrderItem,
    ConfirmOrderBuyerInformation,
  },
  data() {
    return {
      modalMessage: "",
    };
  },
  computed: {
    ...mapGetters(["products", "customer"]),
    selectedProducts() {
      return this.products.filter((item) => item.selected);
    },
    totalCost() {
      return this.selectedProducts.reduce((sum, product) => {
        return sum + product.price * product.quantity;
      }, 0);
    },
  },
  methods: {
    ...mapMutations(["resetState"]),
    submitOrder() {
      const success = true;
      if (success) {
        this.modalMessage = "Заказ успешно отправлен!";
      } else {
        this.modalMessage = "Ошибка при отправке заказа.";
      }
      this.$modal.show("order-status");
    },
    handleModalClose() {
      this.resetState();
      this.$router.push("/step1");
    },
  },
};
</script>
