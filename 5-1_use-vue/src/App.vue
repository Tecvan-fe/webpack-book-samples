<template>
  <div>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "Hello World" };
  },
};
</script>

<style>
body {
  background: #000;
}
h3 {
  margin: 40px 0 0;
  color: #42b983;
}
</style>
