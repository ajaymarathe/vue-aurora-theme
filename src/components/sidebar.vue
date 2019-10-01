<template>
  <div>
    <div class="sidebar">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-user" aria-hidden="true"></i>
          <router-link to="/user">User Profile</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-table" aria-hidden="true"></i>
          <router-link to="/">Tables</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <router-link to="/">Auth</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-file" aria-hidden="true"></i>
          <router-link to="/" href="#pageSubmenu" data-toggle="collapse">
            <span>Pages</span>
            <i class="fa fa-sort-desc float-right" aria-hidden="true"></i>
          </router-link>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Blank page</a>
            </li>
            <li>
              <a href="#">Header page</a>
            </li>
            <li>
              <a href="#">Footer Page</a>
            </li>
          </ul>
        </li>
        <li class="list-group-item">
          <i class="fa fa-check-square" aria-hidden="true"></i>
          <router-link to="/">Components</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Maps</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Graphs</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="list-group-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <router-link to="/">Dashboard</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>