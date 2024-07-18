<template>
  <div id="app">
    <BaseLayout>
      <router-view />
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from "@/components/BaseLayout";

export default {
  name: "App",
  components: { BaseLayout },
};
</script>
