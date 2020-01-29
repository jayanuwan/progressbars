<template>
  <div id="app">
    <div class="container">
      <ProgressContainer
        :bars = 'bars'
        :buttons = 'buttons'
        :limit = 'limit'
      /> 
    </div>
    

  </div>
</template>

<script>
import ProgressContainer from './components/ProgressContainer'
import ProgressService from './api/progressbars'

export default {
  name: 'app',
  components: {
    ProgressContainer
  },
  data(){
    return{
      "buttons": [
      ],
      "bars": [
      ],
      "limit": 0
    }
  },
  mounted(){
    this.loadProgressSettings()
  },
  methods:{
    loadProgressSettings(){
      ProgressService.getData( result => {
        this.bars = result.bars
        this.buttons = result.buttons
        this.limit = result.limit
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

$grid__bp-md: 768;

.container {
  max-width: $grid__bp-md * 1px;
  margin: 0 auto;
  &--fluid {
    margin: 0;
    max-width: 100%;
  }
}
.container {
  background-color: #fff;
  height: 100%;
  padding: 20px;
  text-align: center;
}
</style>
