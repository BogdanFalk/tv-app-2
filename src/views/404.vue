<template>
<div class="black-bk">
    <v-layout  align-center justify-center column fill-height>
       
        <v-img :src="astro" class="four0four-img" min-width="200" max-width="200"  min-height="200" max-height="200"></v-img>
        <v-layout align-start justify-center row class="fourOfour-row">
        <div>
               <h1 class="fourOfour-text">404 Error</h1>
             <h2 class="fourOfour-sub-text">Don't panic, and make sure <br>to watch your oxygen levels.</h2>
        </div>
        <v-btn outline color="white" class="fourOfour-button" @click="backToSafety">Back to safety</v-btn>
        </v-layout>
    </v-layout>
    </div>
</template>

<script>
import {router} from "../_helpers"
export default {
    data() {
    return {
        astro: require("../assets/404/astro.png")
    };
  },
  methods:
  {
      backToSafety:function(){
          router.push("/tv");
      }
  }
  
}
</script>


<style>
::-webkit-scrollbar {display:none;}

.black-bk
{
    
    width: 100%;
    height: 100%;
    background-color: black;
    color:white;
}

.four0four-img
{
    margin-left:290px;
}

.fourOfour-text
{
    font-size:3rem;
}

.fourOfour-row
{
    max-height: 200px;
}

.fourOfour-sub-text
{
    font-weight: 200;
}

.fourOfour-button
{
    margin: auto;
    margin-left:35px;
    
}
</style>

