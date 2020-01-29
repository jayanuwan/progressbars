<template>
    <button @click="onButtonClick">{{this.adjestment}}</button>
</template>

<script>
  export default {
    props:{
        adjestment:{
            type :Number,
            default: 0

        }
    },  
    data () {
      return {
       
      }
    },
    computed:{
      customMessage(){
        return `${ this.message} see ya later`
      }
    },
    mounted(){
      this.message = 'bye!'
    },
    methods:{
        onButtonClick(){
            this.$emit( 'onClick', { adjestment : this.adjestment } )
        }
    } 
  }
</script>
<style lang="scss" scoped>
button {
    width: 3em;
    height: 2em;
    font-size: 1em;
    margin-left: 0.2em;
}
</style>