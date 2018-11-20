<template>
	<div class="container" style="margin-top: 80px;">
    <div><h1 class="main-title badge badge-secondary" style="width: 100%;line-height: 40px;font-size: 30px;">美国众议院议员名录</h1></div>
		<div class="legislators" style="display: block;">
			
			<template v-for="(lists,key,index) in statePersonLists">
					<div style="height: 40px;line-height: 60px;font-size: 24px;"> ------------------{{key}}------------------</div>
					<template v-for="items in lists">
						<div class="row">
							<template v-for="item in items">

								<div class="col-md-6 col-xs-12">
									<div class="legislator-wrap">
										<!-- react-empty: 3793 -->

										<div :class="[ item.party=='Republican' ? 'party_R' : 'party_D' ]">
											<div class="row">
												<div class="col-lg-4 col-sm-12 col-xs-12">
													<a :title="[item.name]" href="javascript:return 0" @click="detailUrl([item.urlname])">
														<img :src="[item.imageUrl]" class="img-tweet">
													</a>
												</div>
												<div class="col-lg-8 col-sm-12 col-xs-12">
													<h3><span class="tweet-party">{{ item.party=='Republican' ? '共和党' : '民主党' }}</span>
								<p >{{item.name}}</p>
								</h3>
													<p class="tw-legislator" style="line-height: 0;">
														{{item.party}}
													</p>

													<!-- 粉丝和意识形态 -->
													<div class="meta-wrap">
														<div class="row">

															<template v-if=" item.leadership== 0 || item.leadership== '0' || typeof(item.leadership) == 'undefined'">
																<div class="col-xs-4">
																	<p><span class="count">推特粉丝</span><br><span>{{item.following}}</span></p>
																</div>
																<div class="col-xs-4">
																	<p><span class="count">推特关注</span><br><span>{{item.followers}}</span></p>
																</div>
																<div class="col-xs-4">
																	<p><span class="count">推特发文</span><br><span>{{item.updates}}</span></p>
																</div>
															</template>
															<template v-else>
																<div class="col-xs-4">
																	<p><span class="count">领导力</span><br><span>{{item.leadership}}</span></p>
																</div>
																<div class="col-xs-4">
																	<p><span class="count">经济形态</span><br><span>{{item.economic}}</span></p>
																</div>
																<div class="col-xs-4">
																	<p><span class="count">社会形态</span><br><span>{{item.social}}</span></p>
																</div>
															</template>

														</div>
													</div>
													<!-- 粉丝和意识形态结束 -->

													<!-- 人物基本信息  -->
													<template v-for="(it,index1) in item.text">
														<template v-if="index1<6">
															<p><span :class="[ item.party=='Republican' ? 'party_R' : 'party_D' ]">{{it['name']}}&nbsp;&nbsp; </span>{{it['val']}}</p>
														</template>
													</template>

													<!-- 人物基本信息结束  -->

												</div>
											</div>
										</div>
									</div>
								</div>
							</template>

						</div>
					
				</template>
			</template>
		</div>

	</div>

</template>

<script>
	// import '../assets/js/clean-blog.min'
	import AppHeader from "@/components/index/Header.vue"

	//import echarts from 'echarts'
	export default {
		name: 'index',
		data() {
			return {
				statePersonLists: {}
			}
		},
		components: {
			AppHeader
		},
		mounted() {
			let that = this;

			this.statePersonLists = {};

			//首选加州的数据
			let temparray = require('../../assets/person/json/zhongyiyuan.json');
			//检索所有的州
			for(name in temparray) {
				this.pushMan(temparray[name], name);
			}

			console.log(this.statePersonLists);

		},
		methods: {

			pushMan(temparray, keyname) {
				let that = this;
				//人员信息变更
				let temparray1 = [];
				let listindex = 0;
				let total = temparray.length;
				that.statePersonLists[keyname] = [];
				//遍历默认的键值为加利福尼亚州的人员数据
				temparray.forEach(function(value, index) {
					try {

						var manjson = require("../../assets/person/json/man/" + value + ".json");
						var tmpimg = "";
						try {
							tmpimg = require("../../assets/person/json/image/225/" + manjson.picture)
						} catch(e) {
							try {
								tmpimg = require("../../assets/person/json/image/225/" + manjson.picture + ".jpg")
							} catch(e) {
								tmpimg = require("../../assets/person/json/image/225/webwxgetmsgimg.jpg")
							}
						}

						//当图片不为空的时候装在图片
						if(manjson.picture != "") {

							//装在人员数据

							let temp = {
								party: manjson.party,
								name: manjson.name,
								title: manjson.personal.Born,
								imageUrl: tmpimg,
								urlname: value,
								description: manjson.description,
								social: manjson.social,
								leadership: manjson.leadership,
								economic: manjson.economic,
								type: manjson.type,
								updates: manjson.Tweets,
								followers: manjson.Followers,
								following: manjson.Following
							};

							var tempjson = manjson.personal;
							var tempnum = 0;
							temp['text'] = [];
							temp["text"][tempnum] = {
								'name': "职务",
								'val': manjson.duty
							};
							tempnum++;
							for(var name in tempjson) {

								temp["text"][tempnum] = {
									'name': name,
									'val': tempjson[name]
								};
								tempnum++;

							}

							if(listindex % 2 == 0) {
								console.log("0");
								temparray1 = [];
								temparray1.push(temp);
								if((index + 1) == total) {
									that.statePersonLists[keyname].push(temparray1);
								}
							} else {
								temparray1.push(temp);
								that.statePersonLists[keyname].push(temparray1);
							}

							listindex++;
						}
					} catch(e) {
						console.log("文件不存在" + e.message);
					}
				});

			},

			//点击人物跳转至详细页面
			detailUrl(val) {

				this.$router.push({
					path: '/person/detail',
					query: {
						name: val
					}
				});
			},

		}
	}
</script>

<style>

	@import "../../assets/person/css/card.css";
</style>