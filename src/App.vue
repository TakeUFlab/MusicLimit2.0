<template>
  <tool></tool>
</template>

<script>
  import tool from './components/tool.vue'

  export default{
    name: 'app',
    components: {
      tool
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
    90deg,
    hsla(239, 83%, 84%, 1) 0%,
    hsla(204, 73%, 60%, 1) 50%,
    hsla(190, 68%, 50%, 1) 100%
  );
}
</style>
