<template>
  <div>
    <aurora-navbar></aurora-navbar>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 pr-0">
          <aurora-sidebar class="sticky-top"></aurora-sidebar>
        </div>
        <div class="col-md-10">
          <div>
            <div class="row mt-4">
              <div class="col-md-8">
                <div class="card mb-4">
                  <div class="card-header">Edit Profile</div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputEmail4">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputPassword4">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputEmail4">First name</label>
                          <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputEmail4">Last name</label>
                          <input type="text" class="form-control" placeholder="Last name" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress"
                          placeholder="1234 Main St"
                        />
                      </div>
                      <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress2"
                          placeholder="Apartment, studio, or floor"
                        />
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputCity">City</label>
                          <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputState">State</label>
                          <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="form-group col-md-2">
                          <label for="inputZip">Zip</label>
                          <input type="text" class="form-control" id="inputZip" />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="gridCheck" />
                          <label class="form-check-label" for="gridCheck">Check me out</label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-4 user-card">
                <div class="card">
                  <img class="card-img-top shadow" src="@/assets/img/bg1.jpg" alt />
                  <div class="user-img">
                    <div class="d-flex justify-content-center">
                      <img
                        class="img-fluid rounded-circle img-thumbnail"
                        src="@/assets/img/kajal.png"
                        alt
                      />
                    </div>
                    <div class="text-center">
                      <span>Kajal Aggarwal</span>
                      <p class="text-muted">Ceo/Founder</p>

                      <div class="p-3 text-justify">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta modi molestias aut nobis itaque! Voluptatum quia illo ad commodi neque tenetur molestiae. Cum, delectus nihil asperiores doloribus voluptatibus optio blanditiis!</p>
                      </div>
                      <div class="social-icons d-flex justify-content-between">
                        <i class="fa fa-facebook-square text-primary" aria-hidden="true"></i>
                        <i class="fa fa-twitter-square text-primary" aria-hidden="true"></i>
                        <i class="fa fa-weixin text-primary" aria-hidden="true"></i>
                        <i class="fa fa-google-plus text-primary" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuroraSidebar from "@/components/sidebar.vue";
import AuroraNavbar from "@/components/navbar.vue";

export default {
  name: "User",
  components: {
    AuroraSidebar,
    AuroraNavbar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>