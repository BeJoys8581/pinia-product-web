<script setup>
import { computed } from 'vue'
import { cartStore } from '../stores/cart'

const cart_store = cartStore()
const listOrder = computed(() => cart_store.cart_show_order)

</script>
<template>
    <br>
    <br><br><br>
    <div>
    <RouterLink to="/" class="buttonback" style="color: white;"> ← Back </RouterLink>
    <h1 style="margin-top: 40px; text-align: center;">Order-List 📃</h1>
    <table class="table">
      <thead>
          <tr>
              <th> Product </th>
              <th> Price </th>
              <th> Cups</th>
              <th> Price </th>
          </tr>
      </thead>
      <tbody v-for="(order, index) in listOrder" :key="index">
          <tr>
              <td>
                  <img :src="order.product.img" class="img-thumbnail" width="150" > &nbsp;
                  {{ order.product.name }}
              </td>
              <td class="txt">{{ order.product.price }} Bath.</td>
              <td>
                  <span class="mx-2">{{ order.counter }} Cups</span>  
              </td>
              <td>{{ order.total_price }} Baht.</td>
          </tr>
      </tbody>
  </table> <br>
  <h4 style="text-align: center;">Thank you & Have a good experience 🙏 </h4>
  <h1 style="text-align: center;">Total Price {{ cart_store.total }} Baht.</h1>
</div>
<div style="margin-bottom: 300px;"></div>
</template>
<style>
.remove-bt {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.3em 1em;
  border: 3px solid #FF0072;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #FF0072;
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
  background-color: #FF0072;
  z-index: -1;
}

.remove-bt:hover, .remove-bt:focus {
  color: white;
}

.remove-bt1:hover:before, .remove-bt:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

.remove-bt1:active {
  transform: scale(0.9);
}


</style>