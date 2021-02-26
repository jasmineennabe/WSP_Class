<template>
  <div class="nav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">

          <div class="navbar-start">
            <a class="navbar-item">
              <i class="fas fa-globe-americas"></i>
              WSP In Class App
            </a>

            <router-link tag="a" class="navbar-item" to="/">
              Home
            </router-link>

            <router-link tag="a" class="navbar-item" to="/documentation">
              Documentation
            </router-link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <router-link tag="a" class="navbar-item" to="/about">
                  About
                </router-link>
                <router-link tag="a" class="navbar-item" to="/jobs">
                  Jobs
                </router-link>
                <router-link tag="a" class="navbar-item" to="/contact">
                  Contact
                </router-link>
                <hr class="navbar-divider">
                <router-link tag="a" class="navbar-item" to="/report">
                  Report an Issue
                </router-link>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

.navbar {
  margin: 0 80px;
}
.nav, .navbar-item, .navbar-menu, .navbar-start, .navbar-end {
  background-color: rgb(191, 182, 176);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}
.navbar-item:hover {
  background-color: rgba(191, 182, 176, .4);
}
.fa, .fas {
  padding-right: 10px;
}

</style>