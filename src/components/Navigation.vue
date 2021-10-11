<template>
  <nav>
    <ul>
      <li>
        <router-link to="/catalog">Каталог</router-link>
      </li>
      <li>
        <router-link to="/orders">Заказы</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
  background-color: #757de8;
}

nav ul {
  margin: 0 10vw;
  padding: 0;
  display: inline-flex;
}

nav ul li {
  list-style: none;
}

nav ul li a {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  display: inline-block;
  padding: 20px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
}

nav ul li a.router-link-active {
  border-bottom-color: #3f50b5;
}
</style>
