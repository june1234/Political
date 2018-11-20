<template>
	<div class="container">

		<div class="row">
			<div class="col-md-6">
				<!--  人物卡片信息  -->
				<div class="legislator-wrap no-meta-bg">
					<!-- react-empty: 5011 -->
					<div :class="[ manArray.party=='Republican' ? 'party_R' : 'party_D' ]">
						<div class="row">
							<div class="col-lg-4 col-sm-12 col-xs-12">
								<a :title="[manArray.name]" href="#"><img :src="[manArray.imageUrl]" class="img-tweet"></a>
							</div>
							<div class="col-lg-8 col-sm-12 col-xs-12">
								<h3><span class="tweet-party">{{ manArray.party=='Republican' ? '共和党' : '民主党' }}</span>
								<p  >{{manArray.name}}</p></h3>
								<p class="tw-legislator">
									{{manArray.party}}
								</p>
								<template v-for="(it,index1) in manArray.text">
									<template v-if="index1<6">
										<p><span :class="[ manArray.party=='Republican' ? 'party_R' : 'party_D' ]">{{it['name']}}&nbsp;&nbsp; </span>{{it['val']}}</p>
									</template>
								</template>
							</div>
						</div>
					</div>
				</div>
				<!-- 人物卡片信息结束 -->

				<!-- 信息介绍左下角  -->
				<div class="text-center">
					<div class="row">
						<div class="col-xs-12">
							<div class="foll-wrapper">
								<p class="foll-wrap"><span class="detail-text">followers</span><br><span>44,717</span></p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-6">
							<div class="following-detail-wrapper">
								<p><span class="detail-text">following</span><br><span>179</span></p>
							</div>
						</div>
						<div class="col-xs-6">
							<div class="following-detail-wrapper">
								<p><span class="detail-text">updates</span><br><span>3,879</span></p>
							</div>
						</div>
					</div>
					<template v-for="(value,key,index) in manArray.detail">
						<template v-if="index>4">
							<div class="row">
								<div class="col-xs-12">
									<div class="tweet-wrapper">
										<div class="media">
											<div class="media-body">
												<div class="media-heading">
													<h2><p >{{key}}</p></h2></div>
												<p class="tweet-text">{{value}}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</template>
					</template>

				</div>
				<!-- 信息介绍左下角结束  -->
			</div>

			<!-- 人物详细信息介绍 右侧  -->
			<div class="tweets-detail-wrap col-md-6">

				<template v-for="(value,key,index) in manArray.detail">
					<template v-if="index<4">
						<div>
							<div class="tweet party_R row">
								<div class="col-xs-12">
									<div class="tweet-wrapper">
										<div class="media">
											<div class="media-body">
												<div class="media-heading">
													<h2><p>{{key}}</p></h2></div>
												<p class="tweet-date"> </p>
												<p class="tweet-text">{{value}}</p>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</template>

			</div>

			<!-- 人物详细信息介绍 右侧结束  -->
		</div>

		<template v-if="JSON.stringify(manArray.timeline)!='{}'">
			<section class="timeline" style="overflow-y: hidden;overflow-x: auto;margin-top: 30px;">
				<ol>
					<template v-for="(value,key,index) in manArray.timeline">
						<li>
						<!-- <li :onclick="showps()" :data-id="[index]" :data-name="timeline" :data-type="person"> -->
							<div>
								<time>{{value['date']}}</time>
								<p>{{key}} </p>
								<p>Preceded by:{{value['Preceded by']}} </p>
								<p>Succeeded by':{{value['Succeeded by']}} </p>

							</div>
						</li>
					</template>
					<li></li>
				</ol>

			</section>
		</template>
		<!-- 时间线  结束-->

		<div class="container mp30">

			<div class="row">
				<template v-if="talkArray.length>0">
					<div class="col-md-4">

						<div class="panel panel-default">

							<div class="panel-heading" style="background-color: #4d5d6d;color: #fff;">

								<span class="glyphicon glyphicon-list-alt"></span><b>言论数据</b>
							</div>

							<div class="panel-body">

								<div class="row">

									<div class="col-xs-12">

										<ul class="demo1">
											<template v-for="(value,index) in talkArray">
                                               <template v-if="index<10">
												<li class="news-item">

													<table cellpadding="4">

														<tr>

															<td><img :src="[manArray.imageUrl]" width="60" class="img-circle" /></td>

															<td>{{value.text}}
																<a href="#">Read more...</a>
															</td>

														</tr>

													</table>

												</li>
												</template>
											</template>

										</ul>

									</div>

								</div>

							</div>

							<div class="panel-footer">
								更多
							</div>

						</div>

					</div>
				</template>
				<div class="col-md-4">

					<div class="panel panel-default">

						<div class="panel-heading" style="background-color: #4d5d6d;color: #fff;">

							<span class="glyphicon glyphicon-list-alt"></span><b>动向数据</b></div>

						<div class="panel-body">

							<div class="row">

								<div class="col-xs-12">

									<ul class="demo2">

										<li class="news-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim...
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim...
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim...
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim...
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim...
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim...
											<a href="#">Read more...</a>
										</li>

									</ul>

								</div>

							</div>

						</div>

						<div class="panel-footer">
						</div>

					</div>

				</div>

				<div class="col-md-4">

					<div class="panel panel-default">

						<div class="panel-heading" style="background-color: #4d5d6d;color: #fff;">

							<span class="glyphicon glyphicon-list-alt"></span><b>开源数据</b></div>

						<div class="panel-body">

							<div class="row">

								<div class="col-xs-12">

									<ul id="demo3">

										<li class="news-item">Curabitur porttitor ante eget hendrerit adipiscing. Maecenas at magna accumsan, rhoncus neque id, fringilla dolor.
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Curabitur porttitor ante eget hendrerit adipiscing. Maecenas at magna accumsan, rhoncus neque id, fringilla dolor.
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Praesent ornare nisl lorem, ut condimentum lectus gravida ut. Ut velit nunc, vehicula volutpat laoreet vel, consequat eu mauris.
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Nunc ultrices tortor eu massa placerat posuere. Vivamus viverra sagittis nunc. Nunc et imperdiet magna. Mauris sed eros nulla.
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Morbi sodales tellus sit amet leo congue bibendum. Ut non mauris eu neque fermentum pharetra.
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">In pharetra suscipit orci sed viverra. Praesent at sollicitudin tortor, id sagittis magna. Fusce massa sem, bibendum id.
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Maecenas nec ligula sed est suscipit aliquet sed eget ipsum. Suspendisse id auctor nibh. Ut porttitor volutpat augue, non sodales odio dignissi id.
											<a href="#">Read more...</a>
										</li>

										<li class="news-item">Onec bibendum consectetur diam, nec euismod urna venenatis eget. Cras consequat convallis leo.
											<a href="#">Read more...</a>
										</li>

									</ul>

								</div>

							</div>

						</div>

						<div class="panel-footer">
						</div>

					</div>

				</div>

			</div>

		</div>
		<!-- 浮层开始了 -->
		<!-- 
		<div>
		<table class="table table-hover">
                        <tbody>
                          <tr v-for="(hor,index) in hors">
                            <td>{{index}}</td>
                            <td>
                              <div class="person" v-for="(v,i) in hor" @mouseenter="showps($event);" @mouseleave="hiddps($event)"> 
                                    <div>                                  
                                    </div>                                    
                                    <a>{{v}}</a>                                
                              </div>                              
                            </td>
                          </tr>
                        </tbody>  
 </table>
 
 </div>
 -->
 	<!-- 浮层结束了 -->
	</div>
	</div>
</template>

<script>
	import AppHeader from "@/components/index/Header.vue"

	import newsbox from "../../assets/person/js/jquery.bootstrap.newsbox.min.js"

	export default {
		name: 'index',
		data() {
			return {
				manArray: {},
				talkArray: []
			}
		},
		components: {
			AppHeader
		},
		mounted() {
			let man = this.$route.query.name;
			let myman = require("../../assets/person/json/man/" + man + ".json");
			this.pushMan(myman);
			console.log(this.manArray);
			console.log(this.manArray.code);
			console.log(this.manArray.timeline);
			this.pushTalk();

		},
		methods: {
	    //浮层
	    showps(e){
	    	/*
            var pe = e.currentTarget.innerText; 
            var person;
            var name;
            var img;
            var type;
            var party;
            var description;
            var economic;
            var social;
            var leadership;
            
            try{
              person = require('@/assets/common/json/person/'+pe+'.json')
              name = person.name;
              img = person.picture;
              type = person.type;
              party = person.party;
              description = person.description;
              economic = person.economic;
              social = person.social;
              leadership = person.leadership;     
            }catch(err){
              name = "";
              img = "";
              type = "";
              party = "";
              description = "";
              economic = 0;
              social = 0;
              leadership = 0;
            }
            var image = ""; 
            // var image = require('@/assets/common/img/person/default.jpg');
            // if(img) 
            try{
              image = require('@/assets/common/img/person/'+img);
            }catch(err){
              image = require('@/assets/common/img/person/default.jpg');
            }
            var subscript = require('@/assets/common/img/subscript1.png');
            this.personal = 
            '<div class="personal" style="display: block;position: absolute;  margin-top: -340px; width: 300px; height: 310px; background-color: #2c3e50; z-index: 100; display: block; text-align: left; color: whitesmoke; border-radius:10px; box-shadow: 8px 8px 8px #888"><div><div class="effect" style="margin: 15px 20px;"><img style="position: absolute; top: 30px;width: 120px;  -webkit-box-shadow: 4px 4px 4px #888;  box-shadow: 4px 4px 4px #888;  border: 2px solid;" src="'+image+'"><div style="padding-left: 140px"><span style="line-height: 25px;width: 270px"><a style="display: block;">Economic</a><a class="score" style="display: block; font-size:2em; text-align: right; border-bottom: 1px solid #888; padding:3px">'+economic+'</a></span><span style="line-height: 25px;width: 270px"><a style="display: block;">Social</a><a class="score" style="display: block;font-size:2em; text-align: right; border-bottom: 1px solid #888; padding:3px">'+social+'</a></span><span style="line-height: 25px;width: 270px"><a style="display: block;">Leadership</a><a class="score" style="display: block;font-size:2em; text-align: right; border-bottom: 1px solid #888; padding:3px">'+leadership+'</a></span></div><div class="desc" style="font-size: 0.8em;  padding-top: 5px;  line-height: 35px; color: gold;"><div class="name" style="font-size: 1.4em;">Name:'+name+'</div><div class="party" style="font-size: 1.4em;text-align: center;">Party:'+party+'</div><div class="pos" style="font-size: 1.4em;text-align: right; padding-right: 20px">Position:'+type+'</div></div></div><div><img src="'+subscript+'" style="margin-top:-1px; padding-left:25px;width:80px;"></div></div></div>';

            var person = Vue.extend({
              template:this.personal
            })
            new person().$mount(e.currentTarget.firstElementChild);
            */
        },
			//加载言论信息
			pushTalk() {
				let that = this;
				let talk1 = require("../../assets/person/json/talk/2018-11-13.json");
				let talk2 = require("../../assets/person/json/talk/2018-11-14.json");
				let talk3 = require("../../assets/person/json/talk/2018-11-15.json");
				let talk4 = require("../../assets/person/json/talk/2018-11-16.json");
				console.log(that.manArray.code); 
				talk4.forEach(function(value, index) {
				
					if(value.code == that.manArray.code) {
						that.talkArray.push(value);
					}
				});
			
				talk3.forEach(function(value, index) {
					if(value.code == that.manArray.code) {
						that.talkArray.push(value);
					}
				});
				
				talk2.forEach(function(value, index) {
					if(value.code == that.manArray.code) {
						that.talkArray.push(value);
					}
				});
			
				talk1.forEach(function(value, index) {
					if(value.code == that.manArray.code) {
						that.talkArray.push(value);
					}
				});
			
		      
               console.log(that.talkArray);
			},
			//加载人员信息
			pushMan(manjson) {

				this.manArray = {};
						var tmpimg = "";
						try{
								tmpimg = require("../../assets/person/json/image/225/" + manjson.picture);
						}catch(e){
							try {
								tmpimg = require("../../assets/person/json/image/225/" + manjson.picture + ".jpg")
							} catch(e) {
								tmpimg = require("../../assets/person/json/image/225/webwxgetmsgimg.jpg")
							}
						}
				//当图片不为空的时候装在图片
				if(manjson.picture != "") {
					//装在人员数据
					this.manArray = {
						party: manjson.party,
						name: manjson.name,
						title: manjson.personal.Born,
						imageUrl: tmpimg,
						description: manjson.description,
						social: manjson.social,
						leadership: manjson.leadership,
						economic: manjson.economic,
						type: manjson.type,
						updates: manjson.updates,
						followers: manjson.followers,
						following: manjson.following,
						detail: manjson.detail,
						timeline: manjson.timeline,
						code: manjson.code
					};

					var tempjson = manjson.personal;
					
					var tempnum = 0;
					this.manArray['text'] = [];
					this.manArray["text"][tempnum] = {
						'name': "职务",
						'val': manjson.duty
					};
					tempnum++;
					for(var name in tempjson) {

						this.manArray["text"][tempnum] = {
							'name': name,
							'val': tempjson[name]
						};
						tempnum++;

					}
					

				} else {
					alert("人物数据有待更新");
				}

				
			}
		}
	}

	$(function() {

		$(".demo1").bootstrapNews({

			newsPerPage: 8,

			autoplay: true,

			pauseOnHover: true,

			direction: 'up',

			newsTickerInterval: 2000,

			navigation: false,

			onToDo: function() {

				//console.log(this);

			}

		});

		$(".demo2").bootstrapNews({

			newsPerPage: 6,

			autoplay: true,

			pauseOnHover: true,

			navigation: false,

			direction: 'down',

			newsTickerInterval: 2500,

			onToDo: function() {

				//console.log(this);

			}

		});

		$("#demo3").bootstrapNews({

			newsPerPage: 10,

			autoplay: false,

			onToDo: function() {

				//console.log(this);

			}

		});

	});
	//时间线控制
	(function() {

		// VARIABLES
		const timeline = document.querySelector(".timeline ol"),
			elH = document.querySelectorAll(".timeline li > div"),
			arrows = document.querySelectorAll(".timeline .arrows .arrow"),
			arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
			arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
			firstItem = document.querySelector(".timeline li:first-child"),
			lastItem = document.querySelector(".timeline li:last-child"),
			xScrolling = 280,
			disabledClass = "disabled";

		// START
		window.addEventListener("load", init);

		function init() {
			setEqualHeights(elH);
			animateTl(xScrolling, arrows, timeline);
			setSwipeFn(timeline, arrowPrev, arrowNext);
			setKeyboardFn(arrowPrev, arrowNext);
		}

		// SET EQUAL HEIGHTS
		function setEqualHeights(el) {
			let counter = 0;
			for(let i = 0; i < el.length; i++) {
				const singleHeight = el[i].offsetHeight;

				if(counter < singleHeight) {
					counter = singleHeight;
				}
			}

			for(let i = 0; i < el.length; i++) {
				el[i].style.height = `${counter}px`;
			}
		}

		// CHECK IF AN ELEMENT IS IN VIEWPORT
		// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
		function isElementInViewport(el) {
			const rect = el.getBoundingClientRect();
			return(
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}

		// SET STATE OF PREV/NEXT ARROWS
		function setBtnState(el, flag = true) {
			if(flag) {
				el.classList.add(disabledClass);
			} else {
				if(el.classList.contains(disabledClass)) {
					el.classList.remove(disabledClass);
				}
				el.disabled = false;
			}
		}

		// ANIMATE TIMELINE
		function animateTl(scrolling, el, tl) {
			let counter = 0;
			for(let i = 0; i < el.length; i++) {
				el[i].addEventListener("click", function() {
					if(!arrowPrev.disabled) {
						arrowPrev.disabled = true;
					}
					if(!arrowNext.disabled) {
						arrowNext.disabled = true;
					}
					const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
					if(counter === 0) {
						tl.style.transform = `translateX(-${scrolling}px)`;
					} else {
						const tlStyle = getComputedStyle(tl);
						// add more browser prefixes if needed here
						const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
						const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
						tl.style.transform = `translateX(${values}px)`;
					}

					setTimeout(() => {
						isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
						isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
					}, 1100);

					counter++;
				});
			}
		}

		// ADD SWIPE SUPPORT FOR TOUCH DEVICES
		function setSwipeFn(tl, prev, next) {
			const hammer = new Hammer(tl);
			hammer.on("swipeleft", () => next.click());
			hammer.on("swiperight", () => prev.click());
		}

		// ADD BASIC KEYBOARD FUNCTIONALITY
		function setKeyboardFn(prev, next) {
			document.addEventListener("keydown", (e) => {
				if((e.which === 37) || (e.which === 39)) {
					const timelineOfTop = timeline.offsetTop;
					const y = window.pageYOffset;
					if(timelineOfTop !== y) {
						window.scrollTo(0, timelineOfTop);
					}
					if(e.which === 37) {
						prev.click();
					} else if(e.which === 39) {
						next.click();
					}
				}
			});
		}

	})();
</script>

<style scoped> 

	@import "../../assets/person/css/normalize.css";
	@import "../../assets/person/css/default.css";
	@import "../../assets/person/css/bootstrap.min.css";
	@import "../../assets/person/css/bootstrap-theme.min.css";
	@import "../../assets/person/css/site.css";
	@import "../../assets/person/css/detail.css";
</style>