<template>
  <div style="position: relative;margin-top:7%;">
    <img src="../../assets/yanlun.png" alt="" style="width:100%;height:200px;">
    <div class="container" style="background-color:#fff;padding-top:20px;">
      <ul class="nav nav-pills" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">议题</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">言论</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div class="row" style="margin-top:20px;">
            <div class="col-lg-2 col-md-2 mx-auto">
              <h5 style="border:1px solid #888;line-height:40px;text-align:center;border-radius:10px;">议题的相关言论</h5>
            </div>
            <div class="col-lg-10 col-md-10 mx-auto">
              <ul>
                <li class="clearbox">
                  <img src="../../assets/logo.png" alt="" style="width:10%;float:left;margin-right:20px;">
                  <div style="float:left;line-height:20px;padding-bottom:20px;width:80%;">
                    <h6>作者名称</h6>
                    <p style="font-size:16px;">
                      言论内容
                    </p>
                    <span style="font-size:14px;color:#888;">时间</span>
                  </div>
                </li>
                <li class="clearbox">
                  <img src="../../assets/logo.png" alt="" style="width:10%;float:left;margin-right:20px;">
                  <div style="float:left;line-height:20px;padding-bottom:20px;width:80%;">
                    <h6>作者名称</h6>
                    <p style="font-size:16px;">
                      言论内容
                    </p>
                    <span style="font-size:14px;color:#888;">时间</span>
                  </div>
                </li>
                <li class="clearbox">
                  <img src="../../assets/logo.png" alt="" style="width:10%;float:left;margin-right:20px;">
                  <div style="float:left;line-height:20px;padding-bottom:20px;width:80%;">
                    <h6>作者名称</h6>
                    <p style="font-size:16px;">
                      言论内容
                    </p>
                    <span style="font-size:14px;color:#888;">时间</span>
                  </div>
                </li>
              </ul>
              <nav class="clearbox" aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div class="row" style="margin-top:20px;">
            <div class="col-lg-12 col-md-12 mx-auto">
              <ul>
                <li class="clearbox">
                  <img src="../../assets/logo.png" alt="" style="width:10%;float:left;margin-right:20px;">
                  <div style="float:left;line-height:20px;padding-bottom:20px;width:80%;">
                    <h6>作者名称</h6>
                    <p style="font-size:16px;">
                      言论内容
                    </p>
                    <span style="font-size:14px;color:#888;">时间</span>
                  </div>
                </li>
                <li class="clearbox">
                  <img src="../../assets/logo.png" alt="" style="width:10%;float:left;margin-right:20px;">
                  <div style="float:left;line-height:20px;padding-bottom:20px;width:80%;">
                    <h6>作者名称</h6>
                    <p style="font-size:16px;">
                      言论内容
                    </p>
                    <span style="font-size:14px;color:#888;">时间</span>
                  </div>
                </li>
                <li class="clearbox">
                  <img src="../../assets/logo.png" alt="" style="width:10%;float:left;margin-right:20px;">
                  <div style="float:left;line-height:20px;padding-bottom:20px;width:80%;">
                    <h6>作者名称</h6>
                    <p style="font-size:16px;">
                      言论内容
                    </p>
                    <span style="font-size:14px;color:#888;">时间</span>
                  </div>
                </li>
              </ul>
            </div>
            <nav aria-label="Page navigation example" style="margin-left:40px;">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "remarks",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped>
</style>
