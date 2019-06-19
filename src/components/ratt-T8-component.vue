<template>
  <v-carousel-item class="v-carousel-ratt-T8">

      <!-- <v-layout align-space-around justify-center row fill-height>
      
      </v-layout> -->

  </v-carousel-item>
</template>

<script>
/* eslint-disable */
import globals from "../_helpers/globals"
import rattParser from "../_helpers/rattParser"
import { request } from 'http';
import axios from 'axios';
import { setInterval } from 'timers';
export default {
    data(){
        return{
            tram8UrlId:"1558",
            rattData:[]
        }
    },
    methods:
    {
        getTram8Data:function()
        {   
            console.log("Getting Tram 8 Data!");
            axios
            .get(globals.data().RATT_BASE_URL+this.tram8UrlId)
            .then(response=>{          
                this.rattData=rattParser.tryParse(response.data);
            })
            .catch(e => {
                console.log(e.message);
            })
        }
    },
    mounted()
    {
       this.getTram8Data()
       setInterval(()=>
       {
           this.getTram8Data();
           console.log("Tram 8 Data refreshed!")
       },120000)
       
    }
}
</script>


<style>
.v-carousel-ratt-T8 {
  height: 100%;
}

.v-window__container {
  height: 100%;
}
.v-carousel-ratt-T8{
  height: 100%;
  background-color: orangered;
}

</style>
