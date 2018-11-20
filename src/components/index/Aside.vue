<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top" id="mainNav">
      <div class="container" style="margin-left:100px;margin-right:100px;">
        <a class="navbar-brand" href="/">
          <img src="../../assets/1.svg" alt="">
          <span style="color:#f00;font-size:30px;">美国</span>   
          政治人物观察
          </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive" style="margin-right:-10%">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">人&nbsp;&nbsp;&nbsp;物</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item"  @click="pathPersonList" href="javascript:return 0">州政要</a>
                <a class="dropdown-item"  @click="pathPersonN" href="javascript:return 0">内阁人员</a>
                <a class="dropdown-item" @click="pathPersonC" href="javascript:return 0">参议院</a>
                <a class="dropdown-item" @click="pathPersonZ" href="javascript:return 0">众议院</a>
                <a class="dropdown-item" @click="pathPersonD" href="javascript:return 0">民主党</a>
                <a class="dropdown-item" @click="pathPersonR" href="javascript:return 0">共和党</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                国&nbsp;&nbsp;&nbsp;会
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/content/congress">概&nbsp;&nbsp;&nbsp;&nbsp;述</router-link>
                <router-link class="dropdown-item" to="/content/committee">委&nbsp;员&nbsp;会</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/content/Issues" class="nav-link">议&nbsp;&nbsp;&nbsp;案</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/content/Remarks" class="nav-link">言&nbsp;&nbsp;&nbsp;论</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">说&nbsp;&nbsp;&nbsp;明</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },

  methods: {
  	  	pathPersonList(){
  		this.$router.push('/content/person/list');
  	},
  	  	pathPersonN(){
  		this.$router.push('/content/person/neige');
  	},
  	  	pathPersonC(){
  		this.$router.push('/content/person/cyy');
  	},
  	  	pathPersonZ(){
  		this.$router.push('/content/person/zyy');
  	},
  	 pathPersonD(){
  		this.$router.push('/content/person/dparty');
  	},
    	 pathPersonR(){
  		this.$router.push('/content/person/rparty');
  	},	
    Router(url){
      return this.$router.push(url)
    }
  }
}
</script>

<style scoped>
#mainNav {
  width: 100%;
  position: absolute;
  border-bottom: 1px solid #e9ecef;
  background-color: #000;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

#mainNav .navbar-brand {
  font-weight: 800;
  color: #343a40;
}

#mainNav .navbar-toggler {
  font-size: 12px;
  font-weight: 800;
  padding: 13px;
  text-transform: uppercase;
  color: #343a40;
}

#mainNav .navbar-nav > li.nav-item > a {
  font-size: 16px;
 /* font-weight: 600;*/
  letter-spacing: 1px;
  text-transform: uppercase;
}

@media only screen and (min-width: 992px) {
  #mainNav {
    border-bottom: 1px solid transparent;
    background: transparent;
  }
  #mainNav .navbar-brand {
    padding: 10px 20px;
    color: #fff;
  }
  #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {
    color: #fff;
  }
  #mainNav .navbar-nav > li.nav-item > a {
    padding: 10px 20px;
    color: #fff;
  }
  #mainNav .navbar-nav > li.nav-item > a:focus, #mainNav .navbar-nav > li.nav-item > a:hover {
    color:#fff;
  }
}

@media only screen and (min-width: 992px) {
  #mainNav {
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
  }
  #mainNav.is-fixed {
    /* when the user scrolls down, we hide the header right above the viewport */
    position: fixed;
    top: -67px;
    -webkit-transition: -webkit-transform 0.2s;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
    border-bottom: 1px solid white;
    background-color: rgba(255, 255, 255, 0.9);
  }
  #mainNav.is-fixed .navbar-brand {
    color: #212529;
  }
  #mainNav.is-fixed .navbar-brand:focus, #mainNav.is-fixed .navbar-brand:hover {
    color: #0085A1;
  }
  #mainNav.is-fixed .navbar-nav > li.nav-item > a {
    color: #212529;
  }
  #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus, #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {
    color: #0085A1;
  }
  #mainNav.is-visible {
    /* if the user changes the scrolling direction, we show the header */
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

</style>
