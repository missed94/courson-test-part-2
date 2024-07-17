<template>
  <li
    class="d-flex align-items-center justify-content-between list-group-item flex-wrap"
  >
    <div class="d-flex align-items-center">
      <CustomCheckbox
        :value="selected"
        :disabled="quantity <= 0"
        @input="$emit('select')"
      />
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
    <div class="m-3">
      {{ description }}
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <span class="me-2"> {{ price }} руб. </span>
      <CustomInputNumber
        :value="quantity"
        :min="1"
        @input="(v) => $emit('setQuantity', v)"
      />
    </div>
  </li>
</template>

<script>
import CustomCheckbox from "@/components/CustomCheckbox";
import CustomInputNumber from "@/components/CustomInputNumber";

export default {
  name: "ProductSelectionItem",
  components: {
    CustomCheckbox,
    CustomInputNumber,
  },
  props: {
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    img: { type: String, default: "" },
    selected: { type: Boolean, default: false },
  },
};
</script>
