<template>
  <div >
    <header class="masthead">
      <div class="overlay"></div>
      <div class="container">
      	 <div class="row">
                <div class="col-xs-12">
     <div class="search-wrapper">
                        <form class="formElem form-inline">
                            <div class="form-control-1 form-group">
                                <input type="text" placeholder="请选择要查看的届次" name="" class="form-control" />
                            </div>
                            <div class="form-control-2 form-group">
                                <label>国&nbsp;会</label>
                                <select type="" name="" class="form-control">
                                    <option>所有</option>
                                    <option>参议院</option>
                                    <option>众议院</option>
                                </select>
                            </div>
                            <div class="form-control-3 form-group">
                                <label>任&nbsp;期</label>
                                <input type="" name="" class="form-control" />
                            </div>
                            <div class="form-control-4 form-group">
                                <button type="submit" class="btn-search btn btn-default">search</button>
                            </div>
                        </form>
                    </div>
                    
              <ul style="width:100%;text-align:left;padding-bottom: 300px;">

                <li style="line-height:20px;padding-top: 30px;padding-left:30px;padding-bottom: 15px;">
                  <a href="#" style="color:#fff;font-size:18px;font-weight: 10;">副总统--彭斯</a>
                </li>
                <li style="line-height:20px;padding-left:150px;font-weight: 10;">
                  <a href="#" style="color:#eee;font-size:12px;padding-right: 40px;">内阁</a>
                  <a href="#" style="color:#eee;font-size:18px;">议题</a>
                </li>
                  <li style="line-height:30px;padding-left:80px;padding-bottom: 10px;">
                  <a href="#" style="color:#fff;font-size:20px;font-weight: 10;">总统--特朗普</a>
                </li>
                <li style="line-height:20px;font-weight: 10;">
                  <a href="#" style="color:#eee;font-size:14px;">议案</a>
                </li>
                <li style="line-height:18px;;padding-left:40px;font-weight: 10;">
                  <a href="#" style="color:#fff;font-size:16px;padding-right: 15px;">国会</a>
                  <a href="#" style="color:#eee;font-size:12px;">奥巴马</a>
                </li>
              </ul>
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
import '../../assets/mo/css/clean-blog.css';
<style scoped>
.masthead {
  margin-bottom: 50px;
  background-color: #868e96;
  background-attachment: scroll;
  position: relative;
  background-size: cover;
  background-image: url("../../assets/header.jpg");
}

.masthead .overlay {
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
    padding: 400px 0;
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


.search-wrapper{
    position: relative;
    min-height: 80px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 40%;
    box-shadow: 0 25px 49px 0 rgba(0,0,0,.2);
}

.col-xs-12{
	width: 100%;
}

.search-wrapper form{
	position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 0 0 70px;
    height: 80px;
}

.form-line{
	display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-flow: row wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
}

.search-wrapper .form-group{
	padding: 0 20px;
	display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
    	text-align: left;
}

.form-control-1{
	width: 38%;
	position: relative;
	height: 70px;
	margin-top: 10px;
}

.form-control-1 .form-control{
    margin-top: 14px;
    font-size: 18px !important;	
}

.form-control-2{
	width: 20%;
	position: relative;
}

.form-control-3{
	width: 26%;
	position: relative;
}

.form-control-4{
	width: 170px;
	padding: 0 !important;
}

.search-wrapper .form-inline .form-control{
	width: 100%;
    height: 34px;
    padding: 6px 0;
    font-family: libre-bold;
    font-size: 16px;
    line-height: 1.42857143;
    letter-spacing: .04em;
    color: #283039;
    border: none;
    border-radius: 0;
    box-shadow: none;
}

.search-wrapper select.form-control{
	-webkit-appearance: none;
    -webkit-border-radius: 0;
    -moz-appearance: none;
    text-indent: .01px;
    cursor: pointer;
}

.search-wrapper label{
    display: block;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 400;
    color: gray;
    text-transform: uppercase;
    letter-spacing: .04em;
    margin-bottom: 0;
    margin-top: 10px;	
}

.search-wrapper .btn-search{
	position: relative;
    margin-left: 1px;
    height: 80px;
    width: 100%;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 18px;
    text-align: left;
    color: #fff;
    letter-spacing: .04em;
    text-transform: uppercase;
    border: none;
    padding-left: 72px;
    background-color: #e4303b;
    border-top-right-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    display: inline-block;
}

.search-wrapper .btn-search:before{
	content: "";
    position: absolute;
    top: 27px;
    left: 30px;
    width: 27px;
    height: 27px;
    background: transparent url(../../assets/common/img/btn-search.svg) no-repeat top;
    background-size: 27px 27px;
}

.search-wrapper .form-control-1:before, .search-wrapper .form-control-2:before{
	position: absolute;
    right: 0;
    top: 0;
    content: "";
    height: 61px;
    width: 1px;
    background-color: rgba(0,0,0,.1);
}
</style>
