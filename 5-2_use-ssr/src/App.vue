<template>
  <div :class="['main', cls]">
    <h3>{{ message }}</h3>
    <button @click="handleClick">Toggle</button>
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";

export default {
  setup() {
    const isActivity = ref(false);
    const cls = computed(() => (isActivity.value ? "activate" : "deactivate"));
    const handleClick = () => {
      isActivity.value = !isActivity.value;
    };

    return {
      isActivity,
      message: "Hello World",
      cls,
      handleClick,
    };
  },
};
</script>

<style>
h3 {
  color: #42b983;
}
.main {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px 12px;
  transition: background 0.3s linear;
}
.activate {
  background: #000;
}
.deactivate {
  background: #fff;
}
</style>
