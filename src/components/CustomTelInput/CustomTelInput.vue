<template>
  <div class="custom-tel-input">
    <label v-if="label" class="d-block mb-2">{{ label }}</label>
    <TheMask
      class="custom-tel-input__input p-2 w-100"
      v-model="editableValue"
      :placeholder="placeholder"
      :mask="mask"
      masked
    />
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";

export default {
  name: "CustomTelInput",
  components: {
    TheMask,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter value",
    },
    mask: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // Через value и событие @input почему то отказывается работать, в примерах библиотеки расписано именно такое решение
      editableValue: this.value,
    };
  },
  watch: {
    editableValue(newVal) {
      this.$emit("input", newVal);
    },
  },
};
</script>

<style scoped>
.custom-tel-input__input {
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
