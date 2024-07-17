<template>
  <div>
    <h3>Данные покупателя</h3>
    <p>ФИО: {{ name }}</p>
    <p>Адрес: {{ address }}</p>
    <p>Телефон: {{ phone }}</p>
    <p>Электронная почта: {{ email }}</p>
  </div>
</template>

<script>
export default {
  name: "ConfirmOrderBuyerInformation",
  props: {
    name: { type: String, default: "" },
    address: { type: String, default: "" },
    phone: { type: String, default: "" },
    email: { type: String, default: "" },
  },
};
</script>
