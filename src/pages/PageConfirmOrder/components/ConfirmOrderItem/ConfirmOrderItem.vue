<template>
  <li class="confirm-order-item list-group-item">
    <div class="d-flex align-items-center">
      <div class="me-1">
        <img
          src="../../../../assets/logo.png"
          alt="product-img"
          width="30"
          height="30"
        />
      </div>
      {{ name }}
    </div>
    <div class="m-3">{{ description }}</div>
    <div>{{ price }} руб. x {{ quantity }}</div>
  </li>
</template>

<script>
export default {
  name: "ConfirmOrderItem",
  props: {
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
  },
};
</script>

<style scoped>
.confirm-order-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
