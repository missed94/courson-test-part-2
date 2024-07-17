<template>
  <form class="personal-information__form">
    <CustomInput v-model="formData.name" class="mb-4" label="ФИО" />
    <CustomInput v-model="formData.address" class="mb-4" label="Адрес" />
    <CustomTelInput
      v-model="formData.phone"
      class="mb-4"
      type="phone"
      label="Телефон"
      :mask="['+7 (###) ###-##-##']"
    />
    <CustomInput
      v-model="formData.email"
      class="mb-4"
      type="email"
      label="Электронная почта"
    />
    <button class="btn btn-secondary me-2" @click="$emit('getPrev', formData)">
      Назад
    </button>
    <button
      class="btn btn-primary"
      :disabled="!formIsCompleted"
      @click="$emit('getNext', formData)"
    >
      Далее
    </button>
  </form>
</template>

<script>
import CustomInput from "@/components/CustomInput";
import CustomTelInput from "@/components/CustomTelInput";

export default {
  name: "PersonalInformationForm",
  components: {
    CustomInput,
    CustomTelInput,
  },
  props: {
    customer: { type: Object, required: true },
  },
  data() {
    return {
      formData: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
    };
  },
  computed: {
    formIsCompleted() {
      return Object.values(this.formData).every((i) => i);
    },
  },
  created() {
    this.formData = this.customer;
  },
};
</script>

<style scoped>
.personal-information__form {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
