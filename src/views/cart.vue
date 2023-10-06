<script setup>
import { computed } from 'vue'

import { cartStore } from '../stores/cart';
const cart_store = cartStore()
const cartItem = computed(() => cart_store.cart_show)



</script>

<template>
<br><br><br><br>
<div>
<RouterLink to="/" class="buttonback" style="color: white;"> ← Back </RouterLink>
</div>
<h1 style="margin-top: 20px; text-align: center;">Your Cart 🛒</h1>
<div style="display: flex;">
<button class="remove-bt" style="margin: 15px 15px;" @click="cart_store.clear_cart()">Clear Cart !!</button>
</div>

<h5 style="; font-weight: bold; text-align: right ;" >Total price {{ cart_store.total }} Baht.</h5>
  <table class="table">
      <thead>
          <tr>
              <th>Product</th>
              <th>Price/Cups</th>
              <th></th>
              <th>Price</th>
              <th></th>
              <th></th>
          </tr>
      </thead>
      <tbody v-for="(cart, index) in cartItem" :key="index">
          <tr>
              <td>
                  <img :src="cart.product.img" class="img-thumbnail" width="150" > &nbsp;
                 &nbsp; {{ cart.product.name }}
              </td>
              <td class="txt">{{ cart.product.price }} Baht</td>
              <td>
                  <button class="ct-bt" @click="cart_store.remove_counter(index)">-</button>&nbsp;
                  <span class="mx-2">{{ cart.counter }}</span>&nbsp;
                  <button class="ct-bt" @click="cart_store.add_counter(index)">+</button>
              </td>
              <td>{{ cart.total_price }} Baht</td>
              <td>
                  <button class="del1" @click="cart_store.remove_cart(index)">Cancel ❌ </button>
              </td>
              <td>
                <button class="button1" @click="cart_store.confirm_bt(cart.product.id, cart.product.name, cart.product.price, cart.counter)">Buy ✅</button>
              </td>
          </tr>
      </tbody>
  </table>
  <div style="margin-bottom: 20%;"></div>
</template>

<style>

.mx-2{
  font-size: 25px;
}

.buttonback {
  display: flex;
  height: 3em;
  width: 100px;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee4b;
  border-radius: 50px;
  letter-spacing: 1px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
  background: #221c1c;
}

.buttonback > svg {
  margin-right: 5px;
  margin-left: 5px;
  font-size: 20px;
  transition: all 0.4s ease-in;
}

.buttonback:hover > svg {
  font-size: 1.2em;
  transform: translateX(-5px);
}

.buttonback:hover {
  box-shadow: 9px 9px 33px rgb(0, 0, 0)
}

.table{
  margin-top: 10px;
}
/* counter-product-bt */
.ct-bt {
  font-family: monospace;
  font-size: 1.5rem;
  color: #FAFAFA;
  text-transform: uppercase;
  padding: 0px 12px;
  border-radius: 20px;
  background: #2a292881;
  box-shadow: 2px 3px #484646;
  cursor: pointer;
  margin: 0px 0;
}

.ct-bt:active {
  box-shadow: none;
  transform: translate(3px, 3px);
}
/* remove-product-bt */
.remove-bt {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.3em 1em;
  border: 3px solid #ff000081;
  border-radius: 30px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #ff0000;
  text-decoration: none;
  transition: 0.25s ease all;
  z-index: 1;
}

.remove-bt:before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: '';
  background-color: #ff0000;
  z-index: -1;
}

.remove-bt:hover, .remove-bt:focus {
  color: white;
}

.remove-bt:hover:before, .remove-bt:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

.remove-bt:active {
  transform: scale(0.9);
}

/* pay-button*/

.button1 {
  padding: 12.5px 30px;
  border: 0;
  border-radius: 100px;
  background-color: #00b73d8a;
  color: #ffffff;
  font-weight: bold; 
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

.button1:hover {
  background-color: #13c003;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.1);
}

.button1:active {
  background-color: #024214;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  box-shadow: none;
  transform: scale(0.98);
}

/* del-button*/

.del1 {
  padding: 12.5px 30px;
  border: 0;
  border-radius: 100px;
  background-color: #ff7f7fe5;
  color: #ffffff;
  font-weight: bold; 
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

.del1:hover {
  background-color: #ff0000c1;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.1);
}

.del1:active {
  background-color: #380000;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  box-shadow: none;
  transform: scale(0.98);
}

.mybackbutton {
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

.mybackbutton:after {
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

.mybackbutton:hover:after {
  animation: ripple_401 1s ease-out;
}


</style>