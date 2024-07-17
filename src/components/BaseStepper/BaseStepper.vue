<template>
  <div>
    <Roadmap class="mb-5" :currentStep="currentStep" :steps="steps" />
    <slot name="title" :title="title">
      <h2 v-if="title" class="mb-4">{{ title }}</h2>
    </slot>
    <slot />
  </div>
</template>
<script>
import Roadmap from "@/components/Roadmap";

export default {
  name: "BaseStepper",
  components: {
    Roadmap,
  },
  props: {
    currentStep: { type: Number, required: true },
    steps: { type: Number, default: 3 },
    title: { type: String, default: "" },
  },
};
</script>
