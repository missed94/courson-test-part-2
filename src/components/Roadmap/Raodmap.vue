<template>
  <div class="roadmap">
    <div
      v-for="step in steps"
      :key="step"
      :class="['step p-3', { active: currentStep === step }]"
    >
      {{ step }}
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadmapComponent",
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    steps: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style scoped>
.roadmap {
  display: flex;
  justify-content: space-around;
}
.step {
  border: 1px solid #ccc;
  border-radius: 5px;
}
.step.active {
  background-color: green;
  color: white;
}
</style>
