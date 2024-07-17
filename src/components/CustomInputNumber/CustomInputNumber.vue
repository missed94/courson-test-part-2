<template>
  <div class="custom-input">
    <label v-if="label" class="custom-input__label">{{ label }}</label>
    <div class="d-flex align-items-center">
      <button type="button" class="custom-input__button" @click="decrement">
        -
      </button>
      <input
        class="custom-input__input"
        type="number"
        :value="value"
        :placeholder="placeholder"
        :min="min"
        :max="max"
        :step="step"
        @input="updateValue"
      />
      <button type="button" class="custom-input__button" @click="increment">
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInputNumber",
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
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
    increment() {
      if (this.value < this.max) {
        this.$emit("input", this.value + 1);
      }
    },
    decrement() {
      if (this.value > this.min) {
        this.$emit("input", this.value - 1);
      }
    },
  },
};
</script>

<style scoped>
.custom-input__label {
  display: block;
  margin-bottom: 0.5rem;
}

.custom-input__input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.custom-input__button {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
}

.custom-input__button:hover {
  background-color: #e0e0e0;
}
</style>
