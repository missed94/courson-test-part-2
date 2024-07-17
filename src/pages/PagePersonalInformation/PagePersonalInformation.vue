<template>
  <div class="page-personal-information p-4">
    <BaseStepper title="Шаг 2: Данные покупателя" :currentStep="2">
      <div class="d-flex justify-content-center w-100">
        <PersonalInformationForm
          :customer="customer"
          @getNext="getNext"
          @getPrev="getPrev"
        />
      </div>
    </BaseStepper>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import BaseStepper from "@/components/BaseStepper";
import PersonalInformationForm from "./components/PersonalInformationForm";

export default {
  name: "PagePersonalInformation",
  components: {
    BaseStepper,
    PersonalInformationForm,
  },
  computed: {
    ...mapGetters(["customer"]),
  },
  methods: {
    ...mapMutations(["updateCustomerInfo"]),
    getNext() {
      this.updateCustomerInfo(this.formData);
      this.$router.push("/step3");
    },
    getPrev() {
      this.updateCustomerInfo(this.formData);
      this.$router.push("/step1");
    },
  },
};
</script>
