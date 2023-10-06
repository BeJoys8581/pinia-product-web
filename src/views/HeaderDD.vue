<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/" style="color: white; display: flex; align-items: center;">
        🍵 &nbsp&nbsp Joys Tea &nbsp&nbsp  🍶
      </a>
      <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <RouterLink to="/cart" li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: white;">Cart 🛒</a></RouterLink>
          <RouterLink to="/orderlist" li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: white;">Order 📃</a></RouterLink>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style>
  .img1 {
    width: 30%;
    height: 300%;

  }


</style>
