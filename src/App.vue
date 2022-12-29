<template>
  <div class="wrapper">
    <header>
      <nav>
        <div class="navLeftSide">
          <h1><router-link to="/">Animall</router-link></h1>
        </div>
        <div class="navRightSide">
          <ul>
            <li class="navFlexItem"><router-link to="/BoardList">Board</router-link></li>
            <li class="navFlexItem"><router-link to="/NotYetDeveloped">Training</router-link></li>
            <li class="navFlexItem"><router-link to="/NotYetDeveloped">Shop</router-link></li>
            <li class="navFlexItem"><router-link to="/NotYetDeveloped">Trip</router-link></li>
            <li class="navFlexItem"><router-link to="/BoardList">Me</router-link></li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
.wrapper {
  width: auto;
  margin: 0 auto;
  background-color: #f1f3f5;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
nav {
  display: flex;
  justify-content: space-between;
}
.navLeftSide {
  display: inline-block;
}
.navRightSide {
  display: inline-block;
  justify-content: flex-end;
  margin: 2px 6px 2px 2px; /*상좌우하*/
}
a {
  text-decoration: none;
  color: black;
}
header {
  background-color: #ffdd33;
}
h1 {
  margin: 4px 4px 4px 7px;
  display: inline-block;
}
.navFlexItem {
  margin: 10px 2px 2px 2px;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .wrapper {
    width: 768px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .wrapper {
    width: 768px;
    margin: 0 auto;
  }
}
</style>
