<template>
   <div>
       <div class="progress-bar-container">
           <div class="percentage">{{ progressPercentage }}</div>
           <div class="proggress-bar" :style="progressStyles"></div>
       </div>
   </div>
</template>

<script>
  export default {
    props:{
        adjestment:{
            type :Number,
            default: 0

        },
        max:{
            type:Number,
            defauult: 100 
        }
    },  
    data () {
      return {
          currentValue: 0
      }
    },
    computed:{
      
      progressValue(){
          return parseInt( ( this.currentValue / this.max )  * 100 )
      },
      progressPercentage(){
          return `${ this.progressValue }%`
      },
      widthPercentage(){
          let percentage = this.progressValue > 100 ? 100 : this.progressValue

          return `${ percentage }%`
      },
      progressStyles(){
        let styles =  {
            width: this.widthPercentage
        }

        if( this.progressValue > 100 ){
            styles.backgroundColor = 'red'
        }

        return styles

      }
    },
    mounted(){
        this.setCurrentValue( this.adjestment )
    },
    methods:{
        change( payload ){
            this.setCurrentValue( payload.adjestment )
        },
        setCurrentValue( adjestment ){
            this.currentValue += adjestment
            this.currentValue = this.currentValue < 0 ? 0 : this.currentValue 
        }
    } 
  }
</script>

<style lang="scss" scoped>

    .progress-bar-container{
        border: 1px solid #88d8b0;
        width:100%;
        margin: 5px 0 5px 0;
        height: 40px;
        > .percentage {
            padding: 9px;
            font-weight: bold;
        }
    }

    .proggress-bar{
        background-color: #88d8b0;
        height:40px;
        margin-top: -39px;
        
    }
</style>