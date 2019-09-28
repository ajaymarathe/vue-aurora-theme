<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Aurora</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <div class="dropdown">
              <a class="nav-link" id="dropdownMenuButton" data-toggle="dropdown">
                <img class="rounded-circle" src="https://placehold.it/40x40" />
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span>Profile</span>
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fa fa-history" aria-hidden="true"></i>
                  <span>Activity</span>
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fa fa-desktop" aria-hidden="true"></i>
                  <span>Support</span>
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  <span>Settings</span>
                </a>
                <hr />
                <a class="dropdown-item" href="#">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data: function() {
    return {
      message: "navbar"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>