<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { productStore } from '../stores/product.js'

import { cartStore } from '../stores/cart'
const cart_store = cartStore()

const route = useRoute();
const id = parseInt(route.params.id);

const product = productStore()
const list = computed(() => product.productList)

const tea = computed(() => {
  return list.value.find(product => product.id === id);
});


</script>
<template>
 <!-- Coffee Products -->
 <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div class="my-3 p-3">
    <RouterLink to="/" class="my-button"> ← Back </RouterLink>
    <h2 class="display-5"> {{ tea.name }} 🍶</h2>
      <p class="lead">🍃 {{ tea.type }} 🌿</p>
    </div>
   <div class="bg shadow-sm mx-auto">
  <img class="img2" :src="tea.img" width="200" height="300" />
</div>
<br>
    <h3>{{ tea.price }} Bath/cups 🍵</h3>
 <br> <h6 style="text-align: center;">{{ tea.detail }}</h6><br> <br>
 <div>
<button type="button" class="Cardbtn" @click="cart_store.add_cart(tea.id, tea.name, tea.price)" >
  <span class="Cardbtn__text">Add Item </span>
  <span class="Cardbtn__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>
</div>
 <br>

 </div> 
  </template>
  


<style>
.bg {
  width: 45%;
  height: 350px;
  margin-top: -20px;
  border-radius: 100px;
  background-color: #303030;
}

.img2 {
  width: 450px;
  height: 350px;
  margin-top: 0px;
  margin-left: 10px;
  border-radius: 100px;

}


/* cart-button */
.Cardbtn {
  position: relative;
  width: 160px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #34974d;
  background-color: #3aa856;
  transition: all 0.3s;
  margin-left: 510px;
}

.Cardbtn, .Cardbtn__icon, .Cardbtn__text {
  transition: all 0.3s;
}

.Cardbtn .Cardbtn__text {
  transform: translateX(30px);
  color: #fff;
  font-weight: 600;
}

.Cardbtn .Cardbtn__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 45px;
  background-color: #34974d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Cardbtn .svg {
  width: 30px;
  stroke: #fff;
}

.Cardbtn:hover {
  background: #34974d;
}

.Cardbtn:hover .Cardbtn__text {
  color: transparent;
}

.Cardbtn:hover .Cardbtn__icon {
  width: 148px;
  transform: translateX(0);
}

.Cardbtn:active .Cardbtn__icon {
  background-color: #2e8644;
}

.Cardbtn:active {
  border: 1px solid #2e8644;
}


/* back-button */

.my-button {
  margin-top: 20px;
  margin-left: -1100px;
  background-color: rgb(20, 9, 31);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
}

.my-button:after {
  content: "";
  background-color: rgba(0, 0, 0, 0.637);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.my-button:hover:after {
  animation: ripple_401 1s ease-out;
}

@keyframes ripple_401 {
  0% {
    width: 5px;
    height: 5px;
    opacity: 1;
  }

  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
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
  background-color: #2b2b2b;
  border-radius: 21px;

}

.product-device-2 {
  left: 0;
  background-color: #2b2b2b;
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