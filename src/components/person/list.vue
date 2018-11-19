<template>
	<div class="container" style="position: relative;margin-top:7%;">
		<div id='mystate' style="height: 600px;background-color: #4d5d6d;"> </div>
		<div style="height: 40px;line-height: 60px;"> ------------------华盛顿------------------</div>
		<div class="legislators" style="display: block;">

			<template v-for="(items,index) in statePersonLists">
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
											<h3>
												<span class="tweet-party">{{ item.party=='Republican' ? '共和党' : '民主党' }}</span>
												<p>{{item.name}}</p>
											</h3>
											<p class="tw-legislator" style="line-height: 0;">
												{{item.party}}
											</p>

											<!-- 粉丝和意识形态 -->
											<div class="meta-wrap">
												<div class="row">

													<template v-if=" item.leadership== 0 && item.leadership== '0'">
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

											<p>{{item.text1}}</p>

											<p>{{item.text2}}</p>

											<p>{{item.text3}}</p>

											<p>{{item.text0}}</p>

											<!-- 人物基本信息结束  -->

										</div>
									</div>
								</div>
							</div>
						</div>
					</template>

				</div>
			</template>

		</div>
	</div>
</template>

<script>
// import '../assets/js/clean-blog.min'

let zhouJson = require("../../assets/person/json/zhou.json");

//import echarts from 'echarts'
export default {
  name: "index",
  data() {
    return {
      statePersonLists: []
    };
  },
  mounted() {
    let that = this;

    //let zhouJson = require('../../assets/person/json/zhou.json');

    this.statePersonLists = [];

    //首选加州的数据
    let temparray = zhouJson.California;

    this.pushMan(temparray);

    //---地图内容开始---
    let usaJson = require("../../assets/person/list/state.json");

    const tmpcontent = document.getElementById("mystate");

    const myChart = this.$echarts.init(tmpcontent);
    myChart.hideLoading();

    this.$echarts.registerMap("USA", usaJson, {
      Alaska: {
        // 把阿拉斯加移到美国主大陆左下方
        left: -131,
        top: 25,
        width: 15
      },
      Hawaii: {
        left: -110, // 夏威夷
        top: 28,
        width: 5
      },
      "Puerto Rico": {
        // 波多黎各
        left: -76,
        top: 26,
        width: 2
      }
    });

    let option = {
      baseOption: {
        timeline: {
          show: false,
          autoPlay: true,
          loop: false,
          playInterval: 1000,
          currentIndex: 0,
          tooltip: {
            show: false
          },
          axisType: "category",
          data: ["115th"]
        },
        visualMap: {
          show: false,
          right: "10%",
          min: 0,
          max: 1,
          precision: 1,
          inRange: {
            color: [
              "#ffffff",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026"
            ]
          },
          text: ["High", "Low"], // 文本，默认为数值文本
          calculable: true
        }
      },
      options: [
        {
          title: {
            text: "",
            x: "center",
            textStyle: {
              fontSize: 20
            }
          },
          tooltip: {
            trigger: "item",
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function(params) {
              var value = params.value;
              return params.name + ":" + value + "%";
            }
          },
          series: [
            {
              name: "USA PopEstimates",
              type: "map",
              map: "USA",
              itemStyle: {
                emphasis: {
                  label: {
                    show: true
                  }
                }
              },
              textFixed: {
                Alaska: [20, -20]
              },
              data: require("../../assets/person/json/a.json")
            }
          ]
        }
      ]
    };

    myChart.setOption(option);
    myChart.on("click", function(params) {
      alert(params.name);
      that.handelStatesChange();
      alert("od");
    });
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
    //---地图内容结束---
  },
  methods: {
    pushMan(temparray) {
      let that = this;
      //人员信息变更
      let temparray1 = [];
      let listindex = 0;
      let total = temparray.length;
      //遍历默认的键值为加利福尼亚州的人员数据
      temparray.forEach(function(value, index) {
        var manjson = require("../../assets/person/json/man/" +
          value +
          ".json");
        //当图片不为空的时候装在图片
        if (manjson.picture != "") {
          //装在人员数据
          let temp = {
            party: manjson.party,
            name: manjson.name,
            title: manjson.personal.Born,
            imageUrl: require("../../assets/person/json/image/225/" +
              manjson.picture),
            urlname: value,
            description: manjson.description,
            social: manjson.social,
            leadership: manjson.leadership,
            economic: manjson.economic,
            type: manjson.type,
            updates: manjson.updates,
            followers: manjson.followers,
            following: manjson.following
          };

          var tempjson = manjson.personal;
          var tempnum = 0;
          for (var name in tempjson) {
            if (name != "Born") {
              temp["text" + tempnum] = name + ":" + tempjson[name];
              tempnum++;
            }
          }

          if (listindex % 2 == 0) {
            console.log("0");
            temparray1 = [];
            temparray1.push(temp);
            if (index + 1 == total) {
              that.statePersonLists.push(temparray1);
            }
          } else {
            temparray1.push(temp);
            that.statePersonLists.push(temparray1);
          }
          listindex++;
        }
      });
    },

    //点击人物跳转至详细页面
    detailUrl(val) {
      alert(val);
      console.log(val);
      //this.$router.push('/person/detail');
      this.$router.push({ path: "/person/detail", query: { name: val } });
    },

    //更新地图列表,val为州英文名称
    handelStatesChange(val) {
      let tempstr = "../../assets/person/${val}json";

      this.statePersonLists = [
        [
          {
            name: "特朗普",
            party: "Republican",
            manUrlName: "顶顶顶",
            emailUrl: "顶顶顶",
            emailUrlName: "烦烦烦",
            phone: "phone",
            type: "顶顶顶",
            updates: "100",
            followers: "0",
            following: "23",
            twitterName: "发个公告",
            imageUrl: require("../../assets/person/image/Donald_Trump.jpg")
          },
          {
            name: "特拉给",
            party: "的风格",
            manUrlName: "",
            emailUrl: "",
            emailUrlName: "",
            phone: "phone",
            type: "",
            updates: "",
            followers: "",
            following: "",
            twitterName: "",
            imageUrl: require("../../assets/person/image/Donald_Trump.jpg")
          }
        ],
        [
          {
            name: "奥巴马",
            party: "Republican",
            manUrlName: "",
            emailUrl: "",
            emailUrlName: "",
            phone: "phone",
            type: "",
            updates: "r",
            followers: "3",
            following: "e",
            twitterName: "",
            imageUrl: require("../../assets/person/image/Donald_Trump.jpg")
          },
          {
            name: "ddfg",
            party: "ddd",
            manUrlName: "",
            emailUrl: "",
            emailUrlName: "",
            phone: "phone",
            type: "",
            updates: "0",
            followers: "10",
            following: "12",
            twitterName: "",
            imageUrl: require("../../assets/person/image/Donald_Trump.jpg")
          }
        ]
      ];
      console.log(this.statePersonLists);
    }
  }
};
</script>

<style>
@import "../../assets/person/css/card.css";
</style>