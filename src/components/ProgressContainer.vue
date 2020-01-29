<template>
  <div>
    
      <template v-for="( value, i ) in bars">
        <ProgressBar :ref="'progressbar' + i " 
          :key = " i + `bar`" 
          :max = "limit"
          :adjestment = "value"
        />
      </template> 
      <select @change="onProgressBarSelect($event)" class="btn-option">
        <template v-for="( value, i ) in bars">
          <option :key="i+ 'progressoption'" value="">{{progressBarName(i)}}</option>
        </template>
      </select>
      <template v-for="( value, i ) in buttons">
        <ProgressButton @onClick="onButtonClick" :key=" i + `button`" :adjestment="value"/>
      </template>  
    

  </div>
</template>

<script>
import ProgressButton from './ProgressButton.vue'
import ProgressBar from './ProgressBar.vue'

export default {
  name: 'progress-container',
  components: {
    ProgressButton,
    ProgressBar
  },
  props:{
    bars:{
        type :Array
    },
    buttons:{
        type :Array
    },
    limit:{
        type:Number,
        defauult: 100 
    }
  },  
  data(){
    return{
      selectedProgressBarIndex: 0
    }
  },
  methods:{
    onButtonClick( payload ){
      this.$refs[ `progressbar${ this.selectedProgressBarIndex }` ][0].change( payload )
    },
    onProgressBarSelect( event ){
      this.selectedProgressBarIndex = event.target.selectedIndex
    },
    progressBarName( i ){
      return `#progress${i+1}`
    }
  }
}
</script>
<style lang="scss" scoped>
.btn-option {
  width: 10em;
  height: 2em;
  font-size: 1em;
}
</style>