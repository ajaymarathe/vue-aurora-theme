<template>
  <div class="home">
    <aurora-navbar></aurora-navbar>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 pr-0">
          <aurora-sidebar class="sticky-top"></aurora-sidebar>
        </div>
        <div class="col-md-10">
          <div class="container">
            <!-- state cards -->
            <div class="row mt-4">
              <div class="col-md-3">
                <state-card
                  title="Total Traffic"
                  bgcolor="bg-gradient-red"
                  value="454,345"
                  subTitle="Since last month"
                  icon="fa fa-signal rounded"
                ></state-card>
              </div>
              <div class="col-md-3">
                <state-card
                  title="New Projects"
                  bgcolor="bg-gradient-orange"
                  value="259,347"
                  subTitle="Since last month"
                  icon="fa fa-cloud-download rounded"
                ></state-card>
              </div>
              <div class="col-md-3">
                <state-card
                  title="New Invoices"
                  bgcolor="bg-gradient-success"
                  value="465,455"
                  subTitle="Since last month"
                  icon="fa fa-envelope rounded"
                ></state-card>
              </div>
              <div class="col-md-3">
                <state-card
                  title="New Leads"
                  bgcolor="bg-gradient-skyblue"
                  value="658,389"
                  subTitle="Since last month"
                  icon="fa fa-paper-plane rounded"
                ></state-card>
              </div>
            </div>
            <!-- end state cards -->

            <!-- Charts -->
            <div class="row mt-4">
              <div class="col-md-6">
                <div class="card shadow-sm" style="background:#172B4E;">
                  <div class="card-header text-white d-flex justify-content-between">
                    <span>Traffic</span>

                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-primary">Week</button>
                      <button type="button" class="btn btn-primary">Month</button>
                      <button type="button" class="btn btn-primary">Year</button>
                    </div>
                  </div>
                  <div class="card-body">
                    <AuroraLineChart></AuroraLineChart>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card shadow-sm border">
                  <div class="card-header d-flex justify-content-between">
                    <span>Total Sales</span>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-primary">Week</button>
                      <button type="button" class="btn btn-primary">Month</button>
                      <button type="button" class="btn btn-primary">Year</button>
                    </div>
                  </div>
                  <div class="card-body">
                    <AuroraBarchart></AuroraBarchart>
                  </div>
                </div>
              </div>
            </div>
            <!-- end Charts -->

            <!-- Recent commments -->
            <div class="row mt-4">
              <div class="col-md-6">
                <div class="card border comment-section">
                  <div class="card-header">
                    <span>Recent Comments</span>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item p-2">
                        <Comment
                          :user="comment.user"
                          :image="comment.image"
                          :comment="comment.comment"
                          :status="comment.status"
                          :created_at="comment.created_at"
                        ></Comment>
                      </li>
                      <li class="list-group-item p-2">
                        <Comment
                          :user="comment.user"
                          :image="comment.image"
                          :comment="comment.comment"
                          :status="comment.status"
                          :created_at="comment.created_at"
                        ></Comment>
                      </li>
                      <li class="list-group-item p-2">
                        <Comment
                          :user="comment.user"
                          :image="comment.image"
                          :comment="comment.comment"
                          :status="comment.status"
                          :created_at="comment.created_at"
                        ></Comment>
                      </li>
                      <li class="list-group-item p-2">
                        <Comment
                          :user="comment.user"
                          :image="comment.image"
                          :comment="comment.comment"
                          :status="comment.status"
                          :created_at="comment.created_at"
                        ></Comment>
                      </li>
                      <li class="list-group-item p-2">
                        <Comment
                          :user="comment.user"
                          :image="comment.image"
                          :comment="comment.comment"
                          :status="comment.status"
                          :created_at="comment.created_at"
                        ></Comment>
                      </li>
                      <li class="list-group-item p-2">
                        <Comment
                          :user="comment.user"
                          :image="comment.image"
                          :comment="comment.comment"
                          :status="comment.status"
                          :created_at="comment.created_at"
                        ></Comment>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- new customer list -->
              <div class="col-md-6">
                <div class="card border customer-list">
                  <div class="card-header">
                    <span>New Customer List</span>
                  </div>
                  <div class="card-body p-0">
                    <div class="table-responsive">
                      <table class="table border-top-0">
                        <thead>
                          <tr class="sticky-top">
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Vidyut</td>
                            <td>Jamwal</td>
                            <td>@Vidyut</td>
                            <td>
                              <span class="badge badge-danger">admin</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>@John</td>
                            <td>
                              <span class="badge badge-info">member</span>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Surabhi</td>
                            <td>Surabhi</td>
                            <td>@Surabhi</td>
                            <td>
                              <span class="badge badge-warning">developer</span>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Kajal</td>
                            <td>Aggarwal</td>
                            <td>@Kajal</td>
                            <td>
                              <span class="badge badge-success">supporter</span>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Vidyut</td>
                            <td>Jamwal</td>
                            <td>@Vidyut</td>
                            <td>
                              <span class="badge badge-danger">admin</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>@John</td>
                            <td>
                              <span class="badge badge-info">member</span>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Surabhi</td>
                            <td>Surabhi</td>
                            <td>@Surabhi</td>
                            <td>
                              <span class="badge badge-warning">developer</span>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Kajal</td>
                            <td>Aggarwal</td>
                            <td>@Kajal</td>
                            <td>
                              <span class="badge badge-success">supporter</span>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Vidyut</td>
                            <td>Jamwal</td>
                            <td>@Vidyut</td>
                            <td>
                              <span class="badge badge-danger">admin</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>@John</td>
                            <td>
                              <span class="badge badge-info">member</span>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Surabhi</td>
                            <td>Surabhi</td>
                            <td>@Surabhi</td>
                            <td>
                              <span class="badge badge-warning">developer</span>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Kajal</td>
                            <td>Aggarwal</td>
                            <td>@Kajal</td>
                            <td>
                              <span class="badge badge-success">supporter</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-bottom: 4rem;"></div>
          </div>
          <div class="row">
            <div class="col-md-12 p-0">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import AuroraSidebar from "@/components/sidebar.vue";
import AuroraNavbar from "@/components/navbar.vue";

// stateCard
import StateCard from "@/components/state-card.vue";
// lineChart
import AuroraLineChart from "@/components/LineChart.vue";
// bar chart
import AuroraBarchart from "@/components/BarChart.vue";
import Comment from "@/components/Comment.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    AuroraSidebar,
    AuroraNavbar,
    StateCard,
    AuroraLineChart,
    AuroraBarchart,
    Comment,
    Footer
  },
  data: function() {
    return {
      comment: {
        user: "Kajal Aggarwal",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum",
        created_at: "April 14, 2016",
        status: "Active",
        image: "https://placehold.it/50x50"
      }
    };
  }
};
</script>
