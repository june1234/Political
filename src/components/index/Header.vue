<template>
  <div class="masthead">
    <header>
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <div class="input-group" id="searchName">
                <input type="text" class="form-control" aria-label="Text input with dropdown button" style="height:60px;border:0;">
                <select class="custom-select" id="inputGroupSelect01" style="height:60px;border:0;">
                  <option selected>请选择大洲</option>
                  <option value="1">全部</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                  <option value="4">Three</option>
                </select>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" id="search">搜索</button>
                </div>
              </div>
              <ul style="width:40%;text-align:left;">
                <li style="line-height:40px;">
                  <a href="#" style="color:#eee;font-size:30px;">总统</a>
                </li>
                <li style="line-height:40px;padding-left:10px;">
                  <a href="#" style="color:#eee;font-size:26px;">副总统</a>
                </li>
                <li style="line-height:40px;padding-left:20px;">
                  <a href="#" style="color:#eee;font-size:24px;">内阁</a>
                  <a href="#" style="color:#eee;font-size:24px;">内阁</a>
                </li>
                <li style="line-height:40px;padding-left:15px;">
                  <a href="#" style="color:#eee;font-size:24px;">议案</a>
                </li>
                <li style="line-height:40px;">
                  <a href="#" style="color:#eee;font-size:22px;">国会</a>
                  <a href="#" style="color:#eee;font-size:30px;">奥巴马</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "appheader",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped>
.masthead {
  margin-bottom: 50px;
  background-color: #868e96;
  background-attachment: scroll;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: url("../../assets/header.jpg");
}

.masthead .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #212529;
  opacity: 0.5;
}

.masthead .page-heading,
.masthead .post-heading,
.masthead .site-heading {
  padding: 200px 0 150px;
  color: white;
}

@media only screen and (min-width: 768px) {
  .masthead .page-heading,
  .masthead .post-heading,
  .masthead .site-heading {
    padding: 300px 0;
  }
}

.masthead .page-heading,
.masthead .site-heading {
  text-align: center;
}

.masthead .page-heading h1,
.masthead .site-heading h1 {
  font-size: 50px;
  margin-top: 0;
}

.masthead .page-heading .subheading,
.masthead .site-heading .subheading {
  font-size: 24px;
  font-weight: 300;
  line-height: 1.1;
  display: block;
  margin: 10px 0 0;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

@media only screen and (min-width: 768px) {
  .masthead .page-heading h1,
  .masthead .site-heading h1 {
    font-size: 80px;
  }
}

.masthead .post-heading h1 {
  font-size: 35px;
}

.masthead .post-heading .meta,
.masthead .post-heading .subheading {
  line-height: 1.1;
  display: block;
}

.masthead .post-heading .subheading {
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0 30px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.masthead .post-heading .meta {
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  font-family: "Lora", "Times New Roman", serif;
}

.masthead .post-heading .meta a {
  color: #fff;
}

@media only screen and (min-width: 768px) {
  .masthead .post-heading h1 {
    font-size: 55px;
  }
  .masthead .post-heading .subheading {
    font-size: 30px;
  }
}
.btn-outline-secondary {
  background-color: #f00;
  color: #fff;
}
.btn-outline-secondary:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.btn-outline-secondary:not(:disabled):not(.disabled):active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
#search {
  padding: 0 20px 0 50px;
  font-size: 25px;
  border: 0;
}
#search::before {
  content: "";
  position: absolute;
  top: 19px;
  left: 20px;
  width: 25px;
  height: 25px;
  background: transparent url(../../assets/5.svg) no-repeat top;
  background-size: 25px 25px;
}
#searchName {
  position: relative;
}
#searchName::before {
  position: absolute;
  left: 297px;
  top: 6px;
  content: "";
  height: 50px;
  width: 1px;
  background-color: rgb(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>
