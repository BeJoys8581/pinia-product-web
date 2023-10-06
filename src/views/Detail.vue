<script setup>
import{ ref } from "vue";
import { computed } from "vue";
import { productStore } from '../stores/product.js'

const product = productStore()
const list = computed(() => product.productList)

</script>
<template>
<div class="fuck">
  <div
    class="bg-body-tertiary pt-5 text-center "
    v-for="(tea, index) in list"
    :key="index"
  >
    <div class="my-3 p-3">
      <h2 class="display-5" style="margin-top: 70px;">{{ tea.name }}</h2>
      <p class="lead">{{ tea.type }} </p>
    </div>
   
    <div
      class="mx-auto"
      style="
        width: 45%;
        height: 320px;
        margin-top: -20px;
        border-radius: 21px 21px 0 0;
      "
    >
      <img :src="tea.img" width="450" height="300" style="margin-top: 10px;" />
    </div>
    <div class="d-flex gap-1 justify-content-center ">
      <RouterLink
        :to="{ name: 'Tea', params: { id: tea.id } }"
        class="button"
        type="button"
      >
        Tea Details 
      </RouterLink>
    </div>
  </div>
</div>

  </template>
  


<style>

img{
  width: 100%;
  height: 150px;
  border-radius: 10%;
  display: flex;
  object-fit: cover;
}

.fuck{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
}
.button {
 --color: #016c15;
 font-family: inherit;
 display: inline-block;
 width: 8em;
 height: 2.6em;
 line-height: 2.5em;
 margin: -120px;
 position: relative;
 overflow: hidden;
 border: 2px solid var(--color);
 transition: color .5s;
 z-index: 1;
 font-size: 17px;
 border-radius: 6px;
 font-weight: 500;
 color: var(--color);
}

.button:before {
 content: "";
 position: absolute;
 z-index: -1;
 background: var(--color);
 height: 150px;
 width: 200px;
 border-radius: 50%;
}

.button:hover {
 color: #fff;
}

.button:before {
 top: 100%;
 left: 100%;
 transition: all .7s;
}

.button:hover:before {
 top: -30px;
 left: -30px;
}

.button:active:before {
 background: #3a0ca3;
 transition: background 0s;
}

.container {
  
  max-width: 960px;
}

.icon-link > .bi {
  width: .75em;
  height: .75em;
}


.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #643400;
  transition: color .15s ease-in-out;
}
.site-header a:hover {
  color: #643400;
  text-decoration: none;
}


.product-device {
  position: absolute;
  right: 0;
  bottom: -5%;
  width: 300px;
  height: 740px;
  background-color: #003c58;
  border-radius: 21px;

}

.product-device-2 {
  left: 0;
  background-color: #003c58;
}


.flex-equal > * {
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}


</style>