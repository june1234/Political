<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mx-auto">
          <div class="row" style="background-color: #fff;margin-bottom:20px; ">
            <h4 style="width:100%;line-height:60px;text-align:center;">美国政治观察</h4>
            <div class="col-lg-4 col-md-12 mx-auto">
              <div id="POITICIANS" style="width:100%;height:300px;"></div>
              <p>POITICIANS</p>
              <p>政治人物：建立政治人物知识库。从基本信息、教育状况、从政经历、现任职务、党团职务、早期经历和个人生活等多个维度记录政治人物的特征，绘制人物从政经历的时间轴，建立关系图谱。</p>
            </div>
            <div class="col-lg-4 col-md-12 mx-auto">
              <div id="IDEOLOGY" style="width:100%;height:300px;"></div>
              <p>IDEOLOGY</p>
              <p>意识倾向：美国历史上大多数政治人物意识倾向的主要方向是“自由主义”与“保守主义”（也称为“左”与“右”），我们通过DW-NOMINATE模型，对国会议员的投票结果进行分析，得到其意识倾向及领导力评分。此评分完全依据投票数据得出结论，无主观因素成分，具体方法见</p>
            </div>
            <div class="col-lg-4 col-md-12 mx-auto">
              <div id="MAP" style="width:100%;height:300px;"></div>
              <p>POLITICAL MAP</p>
              <p>政治图谱：平台允许用户在美国地图上和自由保守的意识形态地图上查看美国历史上的每一次国会唱名表决信息。通过历史数据，直观的展示美国政治版图的变化。使用SkoposLabs的数据对美国国会审议中的议案投票结果提供预测</p>
            </div>
          </div>
          <div class="row" style="background-color: #fff;margin-bottom:20px;">
            <h4 style="width:100%;line-height:60px;text-align:center;">最新动态</h4>
            <div class="col-lg-5 col-md-12 mx-auto">
              <a href="#">
                <img src="../../assets/index/u658.png" alt="" style="width:100%;">
              </a>
              <ul>
                <li style="line-height:100px;"><span>政治人物：300人</span></li>
                <li style="line-height:100px;"><span>法案：400个</span></li>
                <li style="line-height:100px;"><span>新闻言论：10000条</span></li>
                <li style="line-height:100px;"><span>推特：40000条</span></li>
              </ul>
              <img src="../../assets/line.png" alt="" style="width:100%;">
            </div>
            <div class="col-lg-7 col-md-12 mx-auto">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">白宫言论</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">国会言论</a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <ul style="width:100%;">
                    <li class="clearbox" style="padding:10px 0;">
                      <img src="../../assets/logo.png" alt="言论人头像" style="float:left;border-radius:50%;width:10%;">
                      <div style="float:left;width:90%;">
                        <h6 style="">Twitter (@VP): RT @SecondLady: Great visit at the KK Children's and Women's Hospital in Singapore where I met with ...</h6>
                        <p style="font-size:12px;color:rgb(181, 180, 180);line-height:20px;">2018-11-14 08:58:04</p>
                        <p>RT @SecondLady: Great visit at the KK Children's and Women's Hospital in Singapore where I met with art therapists and observed an art ther…</p>
                      </div>
                    </li>
                    <li class="clearbox" style="padding:10px 0;">
                      <img src="../../assets/logo.png" alt="言论人头像" style="float:left;border-radius:50%;width:10%;">
                      <div style="float:left;width:90%;">
                        <h6 style="">Twitter (@VP): Important discussion with India's Prime Minister @narendramodi while in Singapore. Spoke about our s...</h6>
                        <p style="font-size:12px;color:rgb(181, 180, 180);line-height:20px;">2018-11-14 08:16:45</p>
                        <p>Important discussion with India's Prime Minister @narendramodi while in Singapore. Spoke about our shared vision of a free and open Indo-Pacific & reaffirmed our commitment to strengthen security and counterterrorism cooperation and coordination. #VPinAsia #ASEAN https:\/\/t.co\/Cjqkr0RQWr</p>
                      </div>
                    </li>
                    <li class="clearbox" style="padding:10px 0;">
                      <img src="../../assets/logo.png" alt="言论人头像" style="float:left;border-radius:50%;width:10%;">
                      <div style="float:left;width:90%;">
                        <h6 style="">Twitter (@VP): Critical discussion with India's Prime Minister @narendramodi while in Singapore. Spoke about our sh...</h6>
                        <p style="font-size:12px;color:rgb(181, 180, 180);line-height:20px;">2018-11-14 07:50:19</p>
                        <p>Critical discussion with India's Prime Minister @narendramodi while in Singapore. Spoke about our shared vision of a free and open Indo-Pacific & reaffirmed our commitment to strengthen security and counterterrorism cooperation and coordination. #VPinAsia #ASEAN https:\/\/t.co\/jfIyA9jiVw</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <ul style="width:100%;">
                    <li class="clearbox" style="padding:10px 0;">
                      <img src="../../assets/logo.png" alt="言论人头像" style="float:left;border-radius:50%;width:10%;">
                      <div style="float:left;width:90%;">
                        <p>RT @DanRather Please pause today and think of and give thanks to the brave firefighters who are risking their lives in hellish conditions in California to save others. My heart is also with those who have already lost so much, and the desperate fight against the infernos continues.</p>
                        <p style="font-size:12px;color:rgb(181, 180, 180);line-height:20px;">2018-11-11T01:43:47</p>
                      </div>
                    </li>
                    <li class="clearbox" style="padding:10px 0;">
                      <img src="../../assets/logo.png" alt="言论人头像" style="float:left;border-radius:50%;width:10%;">
                      <div style="float:left;width:90%;">
                        <p>RT @ConnieSchultz “Brown keeps winning in Ohio because he has spent his entire career obsessing, first &amp; foremost, over the concerns of workers.\n\n“Not just white workers, the way Trump did in ‘16. All workers.”\n\nDisclosure: I’m married to that “raspy, rumpled populist.”</p>
                        <p style="font-size:12px;color:rgb(181, 180, 180);line-height:20px;">
                          2018-11-11T00:47:17
                        </p>
                      </div>
                    </li>
                    <li class="clearbox" style="padding:10px 0;">
                      <img src="../../assets/logo.png" alt="言论人头像" style="float:left;border-radius:50%;width:10%;">
                      <div style="float:left;width:90%;">
                        <p>
                          Congrats @HarleyRouda! I look foward to working with you! #BlueWave QT @HarleyRouda It has been the privilege of a lifetime to work beside all of you and make history in Orange County. I am incredibly honored to represent you.
                        </p>
                        <p style="font-size:12px;color:rgb(181, 180, 180);line-height:20px;">
                          2018-11-11T00:44:27-05:00
                        </p>
                      </div>
                    </li>
                    <li class="clearbox" style="padding:10px 0;">
                      <img src="../../assets/logo.png" alt="言论人头像" style="float:left;border-radius:50%;width:10%;">
                      <div style="float:left;width:90%;">
                        <p>
                          RT @LAFDtalk #WoolseyFire want to donate? PLEASE READ Donations dropped to fire stations causing problems for crews at those stations Thank you! </p>
                        <p style="font-size:12px;color:rgb(181, 180, 180);line-height:20px;">
                          2018-11-11T00:40:53
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="background-color: #fff;margin-bottom:20px;">
            <h4 style="width:100%;line-height:60px;text-align:center;">美国总统</h4>
            <div class="col-md-6 col-xs-12">
              <div class="legislator-wrap">
                <!-- react-empty: 1428 -->
                <div class="party_D">
                  <div class="row">
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                      <a title="Robert P. Casey" href="#">
                        <img src="../../assets/index/Trump.jpg" class="img-tweet">
                      </a>
                    </div>
                    <div class="col-lg-8 col-sm-12 col-xs-12">
                      <h3>
                        <span class="tweet-party">共和党</span>
                        <a title="Robert P. Casey" href="#">Donald Trump</a>
                      </h3>
                      <a href="#" class="tw-legislator" target="_blank">
                        Democratic
                      </a>
                      <div class="meta-wrap" style="padding:0;">
                        <div class="row">
                          <div class="col-lg-4">
                            <p><span class="count">领导力</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">经济形态</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">社会形态</span><br><span>100</span></p>
                          </div>
                        </div>
                      </div>
                      <p>Spouse(s):Eve Sanderson</p>
                      <p>Children:2</p>
                      <p>Education:Stanford University (BA)Harvard University (JD)</p>
                      <p>Political party:Democratic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <h4>人物关系图谱</h4>
            </div>
            <h4 style="width:100%;text-align:left;margin-left:10px;">争议</h4>
            <p><span>诺贝尔和平奖</span> <span>骂人事件</span> <span>“视频门”</span> <span>“川蔡通话”</span> <span>不被“一个中国”限制</span></p>
          </div>
          <div class="row" style="background-color: #fff;margin-bottom:20px;">
            <h4 style="width:100%;line-height:60px;text-align:center;">热点政治人物</h4>
            <div class="col-md-6 col-xs-12">
              <div class="legislator-wrap">
                <!-- react-empty: 1428 -->
                <div class="party_D">
                  <div class="row">
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                      <a title="Robert P. Casey" href="#">
                        <img src="../../assets/index/Mike_Pompeo.jpg" class="img-tweet">
                      </a>
                    </div>
                    <div class="col-lg-8 col-sm-12 col-xs-12">
                      <h3>
                        <span class="tweet-party">共和党</span>
                        <a title="Robert P. Casey" href="#">Mike.Pompeo</a>
                      </h3>
                      <a href="#" class="tw-legislator" target="_blank">
                        Democratic
                      </a>
                      <div class="meta-wrap" style="padding:0;">
                        <div class="row">
                          <div class="col-lg-4">
                            <p><span class="count">领导力</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">经济形态</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">社会形态</span><br><span>100</span></p>
                          </div>
                        </div>
                      </div>
                      <p>Spouse(s):Susan Pompeo</p>
                      <p>Children:1</p>
                      <p>Education:United States Military Academy (BS)Harvard University (JD)</p>
                      <p>Political party:Republican</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <h4>柱形图</h4>
              <div></div>
              <p>个人简介</p>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="legislator-wrap">
                <!-- react-empty: 1428 -->
                <div class="party_D">
                  <div class="row">
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                      <a title="john" href="#">
                        <img src="../../assets/index/john.jpg" class="img-tweet">
                      </a>
                    </div>
                    <div class="col-lg-8 col-sm-12 col-xs-12">
                      <h3>
                        <span class="tweet-party">共和党</span>
                        <a title="Robert P. Casey" href="#">John.F.Kelly</a>
                      </h3>
                      <a href="#" class="tw-legislator" target="_blank">
                        Democratic
                      </a>
                      <div class="meta-wrap" style="padding:0;">
                        <div class="row">
                          <div class="col-lg-4">
                            <p><span class="count">领导力</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">经济形态</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">社会形态</span><br><span>100</span></p>
                          </div>
                        </div>
                      </div>
                      <p>Spouse(s):Karen Hernest</p>
                      <p>Children:3</p>
                      <p>Education:University of Massachusetts Boston (BA)Georgetown University (MA)National Defense University (MS)</p>
                      <p>Political party:Republican</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="legislator-wrap">
                <!-- react-empty: 1428 -->
                <div class="party_D">
                  <div class="row">
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                      <a title="Robert P. Casey" href="#">
                        <img src="../../assets/index/Mike.jpg" class="img-tweet">
                      </a>
                    </div>
                    <div class="col-lg-8 col-sm-12 col-xs-12">
                      <h3>
                        <span class="tweet-party">共和党</span>
                        <a title="Robert P. Casey" href="#">Mike.Pence</a>
                      </h3>
                      <a href="#" class="tw-legislator" target="_blank">
                        Democratic
                      </a>
                      <div class="meta-wrap" style="padding:0;">
                        <div class="row">
                          <div class="col-lg-4">
                            <p><span class="count">领导力</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">经济形态</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">社会形态</span><br><span>100</span></p>
                          </div>
                        </div>
                      </div>
                      <p>Spouse(s):Karen Batten (m.1985)</p>
                      <p>Children:3, including Charlotte</p>
                      <p>Education:Hanover College (BA)Indiana University – Purdue University Indianapolis (JD)</p>
                      <p>Political party:Republican</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="legislator-wrap">
                <!-- react-empty: 1428 -->
                <div class="party_D">
                  <div class="row">
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                      <a title="Mike" href="#">
                        <img src="../../assets/index/James.jpg" class="img-tweet">
                      </a>
                    </div>
                    <div class="col-lg-8 col-sm-12 col-xs-12">
                      <h3>
                        <span class="tweet-party">共和党</span>
                        <a title="Robert P. Casey" href="#">James.Mattis</a>
                      </h3>
                      <a href="#" class="tw-legislator" target="_blank">
                        Democratic
                      </a>
                      <div class="meta-wrap" style="padding:0;">
                        <div class="row">
                          <div class="col-lg-4">
                            <p><span class="count">领导力</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">经济形态</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">社会形态</span><br><span>100</span></p>
                          </div>
                        </div>
                      </div>
                      <p>Spouse(s):</p>
                      <p>Children:</p>
                      <p>Education:</p>
                      <p>Political party:</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="legislator-wrap">
                <!-- react-empty: 1428 -->
                <div class="party_D">
                  <div class="row">
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                      <a title="Robert P. Casey" href="#">
                        <img src="../../assets/index/Sherrod.Brown.jpg" class="img-tweet">
                      </a>
                    </div>
                    <div class="col-lg-8 col-sm-12 col-xs-12">
                      <h3>
                        <span class="tweet-party">共和党</span>
                        <a title="Robert P. Casey" href="#">Sherrod.Brown</a>
                      </h3>
                      <a href="#" class="tw-legislator" target="_blank">
                        Democratic
                      </a>
                      <div class="meta-wrap" style="padding:0;">
                        <div class="row">
                          <div class="col-lg-4">
                            <p><span class="count">领导力</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">经济形态</span><br><span>100</span></p>
                          </div>
                          <div class="col-lg-4">
                            <p><span class="count">社会形态</span><br><span>100</span></p>
                          </div>
                        </div>
                      </div>
                      <p>Spouse(s):Larke Ummel(m.1979; div.1987)Connie Schultz (m.2004)</p>
                      <p>Children:4</p>
                      <p>Education:EducationYale University (BA)Ohio State University (MA, MPA)</p>
                      <p>Political party:Democratic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Pager -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '../assets/js/clean-blog.min'
import AppHeader from "@/components/index/Header.vue";
export default {
  name: "index",
  data() {
    return {};
  },
  mounted() {
    this.POITICIANS();
    this.IDEOLOGY();
    this.MAP();
  },
  components: {
    AppHeader
  },
  methods: {
    POITICIANS() {
      const poiticians = document.querySelector("#POITICIANS");
      const poitiEcharts = this.$echarts.init(poiticians);
      // 指定图表的配置项和数据
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none"
          }
        },
        grid: {
          width: '100%',
          height:300
        },
        xAxis: [
          {
            type: "category",
            data: [
              "106th",
              "107th",
              "108th",
              "109th",
              "110th",
              "111th",
              "112th",
              "113th",
              "114th",
              "115th"
            ]
          },
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              show: false
            },
            data: [
              "1999",
              "2001",
              "2003",
              "2005",
              "2007",
              "2009",
              "2011",
              "2013",
              "2015",
              "2017",
              "2019"
            ]
          }
        ],
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "Republican Party",
            type: "line",
            data: [0.39, 0.4, 0.4, 0.4, 0.42, 0.43, 0.45, 0.48, 0.49, 0.5]
          },
          {
            name: "Democratic Party",
            color: "darkblue",
            type: "line",
            data: [
              -0.36,
              -0.37,
              -0.36,
              -0.37,
              -0.36,
              -0.34,
              -0.38,
              -0.38,
              -0.39,
              -0.39
            ]
          },
          {
            name: "Congressional Median(Midpoint)",
            color: "darkcyan",
            type: "line",
            data: [0.13, 0.12, 0.19, 0.22, -0.14, -0.19, 0.25, 0.22, 0.29, 0.28]
          },
          {
            tooltip: {
              show: false
            },
            name: "Range of Republican Party Ideology",
            color: "salmon",
            type: "scatter",
            data: [
              ["106th", 0.11],
              ["106th", 0.23],
              ["106th", 0.26],
              ["106th", 0.3],
              ["106th", 0.33],
              ["106th", 0.36],
              ["106th", 0.38],
              ["106th", 0.4],
              ["106th", 0.42],
              ["106th", 0.45],
              ["106th", 0.49],
              ["106th", 0.53],
              ["106th", 0.58],
              ["106th", 0.7],
              ["107th", 0.12],
              ["107th", 0.23],
              ["107th", 0.27],
              ["107th", 0.31],
              ["107th", 0.34],
              ["107th", 0.36],
              ["107th", 0.39],
              ["107th", 0.41],
              ["107th", 0.43],
              ["107th", 0.46],
              ["107th", 0.51],
              ["107th", 0.54],
              ["107th", 0.59],
              ["107th", 0.7],
              ["108th", 0.15],
              ["108th", 0.24],
              ["108th", 0.27],
              ["108th", 0.3],
              ["108th", 0.34],
              ["108th", 0.36],
              ["108th", 0.38],
              ["108th", 0.41],
              ["108th", 0.43],
              ["108th", 0.47],
              ["108th", 0.5],
              ["108th", 0.54],
              ["108th", 0.58],
              ["108th", 0.7],
              ["109th", 0.15],
              ["109th", 0.24],
              ["109th", 0.27],
              ["109th", 0.31],
              ["109th", 0.34],
              ["109th", 0.36],
              ["109th", 0.38],
              ["109th", 0.41],
              ["109th", 0.43],
              ["109th", 0.46],
              ["109th", 0.5],
              ["109th", 0.54],
              ["109th", 0.58],
              ["109th", 0.63],
              ["109th", 0.75],
              ["110th", 0.19],
              ["110th", 0.25],
              ["110th", 0.3],
              ["110th", 0.34],
              ["110th", 0.36],
              ["110th", 0.4],
              ["110th", 0.42],
              ["110th", 0.45],
              ["110th", 0.49],
              ["110th", 0.52],
              ["110th", 0.56],
              ["110th", 0.62],
              ["110th", 0.74],
              ["111th", 0.19],
              ["111th", 0.28],
              ["111th", 0.33],
              ["111th", 0.36],
              ["111th", 0.4],
              ["111th", 0.42],
              ["111th", 0.46],
              ["111th", 0.51],
              ["111th", 0.54],
              ["111th", 0.59],
              ["111th", 0.68],
              ["111th", 0.81],
              ["112th", 0.2],
              ["112th", 0.28],
              ["112th", 0.32],
              ["112th", 0.35],
              ["112th", 0.38],
              ["112th", 0.4],
              ["112th", 0.43],
              ["112th", 0.46],
              ["112th", 0.5],
              ["112th", 0.52],
              ["112th", 0.56],
              ["112th", 0.59],
              ["112th", 0.62],
              ["112th", 0.68],
              ["112th", 0.8],
              ["113th", 0.22],
              ["113th", 0.28],
              ["113th", 0.33],
              ["113th", 0.37],
              ["113th", 0.39],
              ["113th", 0.42],
              ["113th", 0.46],
              ["113th", 0.49],
              ["113th", 0.52],
              ["113th", 0.55],
              ["113th", 0.59],
              ["113th", 0.62],
              ["113th", 0.66],
              ["113th", 0.73],
              ["113th", 0.88],
              ["114th", 0.21],
              ["114th", 0.28],
              ["114th", 0.33],
              ["114th", 0.36],
              ["114th", 0.39],
              ["114th", 0.41],
              ["114th", 0.45],
              ["114th", 0.48],
              ["114th", 0.51],
              ["114th", 0.54],
              ["114th", 0.57],
              ["114th", 0.6],
              ["114th", 0.63],
              ["114th", 0.66],
              ["114th", 0.76],
              ["115th", 0.21],
              ["115th", 0.28],
              ["115th", 0.34],
              ["115th", 0.37],
              ["115th", 0.4],
              ["115th", 0.43],
              ["115th", 0.46],
              ["115th", 0.49],
              ["115th", 0.52],
              ["115th", 0.54],
              ["115th", 0.57],
              ["115th", 0.6],
              ["115th", 0.63],
              ["115th", 0.67],
              ["115th", 0.78]
            ]
          },
          {
            tooltip: {
              show: false
            },
            name: "Range of Democratic Party Ideology",
            color: "cornflowerblue",
            type: "scatter",
            data: [
              ["106th", -0.6],
              ["106th", -0.52],
              ["106th", -0.48],
              ["106th", -0.44],
              ["106th", -0.41],
              ["106th", -0.39],
              ["106th", -0.36],
              ["106th", -0.34],
              ["106th", -0.31],
              ["106th", -0.29],
              ["106th", -0.25],
              ["106th", -0.19],
              ["106th", -0.08],
              ["107th", -0.6],
              ["107th", -0.52],
              ["107th", -0.48],
              ["107th", -0.45],
              ["107th", -0.42],
              ["107th", -0.39],
              ["107th", -0.37],
              ["107th", -0.34],
              ["107th", -0.32],
              ["107th", -0.3],
              ["107th", -0.26],
              ["107th", -0.21],
              ["107th", -0.1],
              ["108th", -0.59],
              ["108th", -0.51],
              ["108th", -0.47],
              ["108th", -0.43],
              ["108th", -0.41],
              ["108th", -0.38],
              ["108th", -0.36],
              ["108th", -0.34],
              ["108th", -0.31],
              ["108th", -0.29],
              ["108th", -0.25],
              ["108th", -0.18],
              ["108th", -0.09],
              ["109th", -0.6],
              ["109th", -0.52],
              ["109th", -0.48],
              ["109th", -0.44],
              ["109th", -0.41],
              ["109th", -0.39],
              ["109th", -0.37],
              ["109th", -0.35],
              ["109th", -0.32],
              ["109th", -0.29],
              ["109th", -0.25],
              ["109th", -0.18],
              ["109th", -0.1],
              ["110th", -0.6],
              ["110th", -0.52],
              ["110th", -0.48],
              ["110th", -0.45],
              ["110th", -0.42],
              ["110th", -0.4],
              ["110th", -0.38],
              ["110th", -0.35],
              ["110th", -0.33],
              ["110th", -0.31],
              ["110th", -0.28],
              ["110th", -0.26],
              ["110th", -0.21],
              ["110th", -0.15],
              ["110th", -0.08],
              ["111th", -0.61],
              ["111th", -0.53],
              ["111th", -0.48],
              ["111th", -0.45],
              ["111th", -0.42],
              ["111th", -0.4],
              ["111th", -0.38],
              ["111th", -0.36],
              ["111th", -0.34],
              ["111th", -0.32],
              ["111th", -0.3],
              ["111th", -0.27],
              ["111th", -0.24],
              ["111th", -0.2],
              ["111th", -0.17],
              ["111th", -0.12],
              ["111th", -0.01],
              ["112th", -0.61],
              ["112th", -0.52],
              ["112th", -0.48],
              ["112th", -0.44],
              ["112th", -0.41],
              ["112th", -0.4],
              ["112th", -0.38],
              ["112th", -0.35],
              ["112th", -0.33],
              ["112th", -0.29],
              ["112th", -0.25],
              ["112th", -0.2],
              ["112th", -0.11],
              ["113th", -0.6],
              ["113th", -0.51],
              ["113th", -0.47],
              ["113th", -0.44],
              ["113th", -0.42],
              ["113th", -0.4],
              ["113th", -0.38],
              ["113th", -0.36],
              ["113th", -0.33],
              ["113th", -0.3],
              ["113th", -0.27],
              ["113th", -0.22],
              ["113th", -0.15],
              ["114th", -0.61],
              ["114th", -0.5],
              ["114th", -0.47],
              ["114th", -0.44],
              ["114th", -0.41],
              ["114th", -0.4],
              ["114th", -0.38],
              ["114th", -0.35],
              ["114th", -0.31],
              ["114th", -0.28],
              ["114th", -0.23],
              ["114th", -0.15],
              ["115th", -0.63],
              ["115th", -0.51],
              ["115th", -0.47],
              ["115th", -0.44],
              ["115th", -0.41],
              ["115th", -0.4],
              ["115th", -0.38],
              ["115th", -0.35],
              ["115th", -0.32],
              ["115th", -0.29],
              ["115th", -0.25],
              ["115th", -0.16]
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      poitiEcharts.setOption(option);
      window.addEventListener("resize", function() {
        poitiEcharts.resize();
      });
    },
    IDEOLOGY() {
      const IDEOLOGY = document.querySelector("#IDEOLOGY");
      console.log(IDEOLOGY);
      const IDEOLOGYEcharts = this.$echarts.init(IDEOLOGY);
      var res = require("../../assets/index/ideology.json");

      var itemStyle = {
        normal: {
          opacity: 0.8,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      };
      var a = [];
      var c = [];
      for (var i in res) {
        var b = {};
        var d = {};
        if (res[i].nominate_dim1 > 0) {
          b.name = res[i].bioname;
          b.value = [];
          b.chamber = res[i].chamber;
          b.state_abbrev = res[i].state_abbrev;
          b.district_code = res[i].district_code;
          b.party = res[i].party;
          b.description = res[i].description;
          b.value.push(res[i].nominate_dim1);
          b.value.push(res[i].nominate_dim2);
          b.value.push(res[i].leadership);
          a.push(b);
        }
        if (res[i].nominate_dim1 < 0) {
          d.name = res[i].bioname;
          d.value = [];
          d.chamber = res[i].chamber;
          d.state_abbrev = res[i].state_abbrev;
          d.district_code = res[i].district_code;
          d.party = res[i].party;
          d.description = res[i].description;
          d.value.push(res[i].nominate_dim1);
          d.value.push(res[i].nominate_dim2);
          d.value.push(res[i].leadership);
          c.push(d);
        }
      }
      var option = null;
      option = {
        color: ["#dd4444", "#4169E1"],
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            console.log(params);
            return (
              "姓名:" +
              params.data.name +
              "<br/>" +
              "选区:" +
              params.data.state_abbrev +
              params.data.district_code +
              "<br/>" +
              "政党:" +
              params.data.party +
              "<br/>" +
              "描述:" +
              params.data.description +
              "<br/>" +
              "社会/种族维度:" +
              params.value[0] +
              "<br/>" +
              "经济/再分配维度:" +
              params.value[1] +
              "<br/>" +
              "领导力 :" +
              params.value[2]
            );
          }
        },
        xAxis: {
          name: "经济/再分配维度",
          type: "value",
          min: -1.0,
          max: 1.0,
          splitNumber: 10
        },
        yAxis: {
          name: "社会/种族维度",
          type: "value",
          min: -1.0,
          max: 1.0,
          splitNumber: 10
        },
        grid: {
          boxWidth: "100%",
          boxDepth: 200,
          viewControl: {},
          light: {
            main: {
              intensity: 1.2,
              shadow: false
            },
            ambient: {
              intensity: 0.3
            }
          }
        },
        series: [
          {
            type: "scatter",
            data: a,
            shading: "lambert",
            itemStyle: itemStyle,
            label: {
              textStyle: {
                fontSize: 16,
                borderWidth: 1
              }
            }
          },
          {
            type: "scatter",
            data: c,
            shading: "lambert",
            itemStyle: itemStyle,
            label: {
              textStyle: {
                fontSize: 16,
                borderWidth: 1
              }
            }
          }
        ]
      };
      if (option && typeof option === "object") {
        IDEOLOGYEcharts.setOption(option, true);
      }
      window.addEventListener("resize", function() {
        IDEOLOGYEcharts.resize();
      });
    },
    MAP() {
      const MAP = document.querySelector("#MAP");
      const MAPEcharts = this.$echarts.init(MAP);
      var app = {},
        option = null;
      MAPEcharts.showLoading();
      var usaJson = require("../../assets/index/map.json");
      var res = require("../../assets/index/map2.json");
      var a = [];
      for (var i in res) {
        var b = {};
        if (
          res[i].properties.party == "Republican" &&
          res[i].properties.rep_sen == "Representative"
        ) {
          b.name = res[i].properties.name;
          b.district = res[i].properties.district;
          b.state = res[i].properties.state_label;
          b.party = res[i].properties.party;
          b.value = 0;
          a.push(b);
        }
        if (
          res[i].properties.party == "Democratic" &&
          res[i].properties.rep_sen == "Representative"
        ) {
          b.name = res[i].properties.name;
          b.district = res[i].properties.district;
          b.state = res[i].properties.state_label;
          b.party = res[i].properties.party;
          b.value = 1;
          a.push(b);
        }
      }
      MAPEcharts.hideLoading();
      this.$echarts.registerMap("USA", usaJson, {
        "Young, Don": {
          // 把阿拉斯加移到美国主大陆左下方
          left: -125,
          top: 25,
          width: 15
        },
        "Gabbard, Tulsi": {
          left: -110, // 夏威夷
          top: 28,
          width: 5
        },
        "Hanabusa, Colleen": {
          left: -108, // 夏威夷
          top: 30.1,
          width: 0.45
        }
      });
      option = {
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            console.log(params);
            return (
              "姓名:" +
              params.data.name +
              "<br/>" +
              "选区编号:" +
              params.data.district +
              "<br/>" +
              "地区:" +
              params.data.state +
              "<br/>" +
              "所属政党:" +
              params.data.party
            );
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 1,
          inRange: {
            color: ["#FFB6C1", "#6495ED"]
          },
          calculable: true
        },
        series: {
          data: a,
          type: "map",
          map: "USA"
        }
      };

      if (option && typeof option === "object") {
        MAPEcharts.setOption(option, true);
      }
      window.addEventListener("resize", function() {
        MAPEcharts.resize();
      });
    }
  }
};
</script>

<style scoped>
.legislator-wrap {
  background-color: #fff;
  position: relative;
  margin-left: 30px;
  margin-bottom: 40px;
  padding-top: 30px;
  padding-bottom: 15px;
  margin-top: 40px;
}
.legislator-wrap:before {
  content: "";
  position: absolute;
  left: 0;
  top: 153px;
  height: 83px;
  width: 100%;
  background-color: #fbfbfb;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
}
.legislator-wrap .row {
  margin-left: -15px;
  margin-right: -15px;
}
.legislator-wrap .row:after,
.legislator-wrap .row:before {
  content: " ";
  display: table;
}
.legislator-wrap img {
  display: inline-block;
  max-width: 100%;
  height: auto;
  position: absolute;
  left: -15px;
  top: 0;
  box-shadow: 0 50px 80px -40px #304356;
}
.legislator-wrap h3 {
  position: relative;
  margin-top: 48px;
  margin-bottom: 8px;
  font-family: libre-bold;
  font-size: 22px;
  line-height: 1em;
}
.legislator-wrap h3 .tweet-party {
    position: absolute;
    top: -48px;
    left: 0;
    display: block;
    font-family: Montserrat;
    font-size: 14px;
    letter-spacing: .04em;
    color: #fff;
    padding: 2px 12px;
    background-color: #24a3d7;
}
.legislator-wrap .meta-wrap p {
  font-size: 18px;
  letter-spacing: 0.02em;
}
.legislator-wrap .meta-wrap p .count {
  font-family: Montserrat;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #646c7e;
  display: inline-block;
  margin-bottom: 7px;
  text-transform: uppercase;
}
.legislator-wrap h3 a {
  color: #304356;
}
.legislator-wrap .tw-legislator {
  color: #1da1f2;
  font-size: 18px;
}
.legislator-wrap .meta-wrap {
  padding: 36px 15px 25px;
  margin-right: auto;
  margin-left: auto;
}
</style>
