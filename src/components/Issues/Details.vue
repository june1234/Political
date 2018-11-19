<template>
  <div class="container" style="background-color:#fff;padding-top:20px;">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/Issues">法案列表</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">详情</li>
      </ol>
    </nav>
    <h4>议案概述</h4>
    <p>国会法案（英语：Act of Congress）是由美国宪法授权美国政府所制定颁布的成文法。当议案在国会两院以简单多数的得票通过，接着再由总统签署后即完成立法，并正式成为联邦法律。在颁布成为联邦法律之前，议案必须通过参众两院的半数投票同意后，再经总统签署。</p>
    <h4>议案的立法过程</h4>
    <p>
      经国会参众两院认可的成文法或决议文（resolution）必须经过以下任一程序才可成为法律：
      1. 美国总统的签署、
      2. 在国会开议期间，总统收到法案后十天内无作为（不做任何回应，十天的期限不含星期日），或
      3. 在总统行使否决后由国会于会期内发起覆议（法案必须获得三分之二以上的投票支持才可推翻总统的否决）。
      经由前两种程序通过的法案将由总统“颁布”（promulgation）实行。若法案是经由第三种方式通过，由最后覆议期间国会的议会主席颁布法律。
      在美国宪法的规定中，若总统在时限内未对议案或决议文表示意见并交还国会，议案将自动成为法律；然而，若国会在这段期间内休会，那议案便会被废弃且无法发起覆议（参见：口袋否决）。此外，若总统在国会休会期间否决了议案或决议文，覆议成功的条件需要获得国会两院三分之二以上的投票支持。
      成为法律的国会法案会列在《美国联邦法律大全》（United States Statutes at Large）中。和民间私人出版的《美国法典》相较，几乎所有的法案都有做出小幅的文字修正。
      所有国会法案都不得违反宪法，也不得超越宪法赋予国会的权力。否则美国最高法院将能够宣布法案违宪。
    </p>
    <h4>{{list.title}}</h4>
    <div class="row">
      <div class="col-md-12 mx-auto">
        <ul class="nav justify-content-end" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">概述</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">详细</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">文本</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h5>概述</h5>
            <span>来源</span>
            <p>
              {{list.overview}}
            </p>
            <button type="button" class="btn btn-danger" style="float:right;">继续阅读</button>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <h5>议案的详情</h5>
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <h5>议案的文本</h5>
          </div>
        </div>
      </div>
      <h5 style="width:100%;line-height:40px;margin-left:20px;">提案人</h5>
      <div class="col-lg-5 col-md-5 mx-auto">
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
                  <a title="Robert P. Casey" href="#">{{list.sponsor_name}}</a>
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
      <div class="col-lg-7 col-md-7 mx-auto">
        <h6>散点图</h6>
      </div>
      <div class="col-md-12 mx-auto">
        <p>提案：<span></span></p>
         <p>状态:<span></span></p>
         <p>先期预测:<span>{{list.prognosis}}</span></p>
         <p>近期法案:<span></span></p>
      </div>
      <div class="col-md-12 mx-auto">
        <Timeline
            :timeline-items="timelineItems"
            :message-when-no-items="messageWhenNoItems"/>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from 'timeline-vuejs'
export default {
  name: "IssuesDetails",
  data() {
    return {
      list:{},
      history:{},
    messageWhenNoItems: '',
    timelineItems: [
      {
        year: {
          from: '2018',
          to: '2017'
        },
        items: [
          {
            nameMonth: 'JAN 9, 2017',
            title: 'Related Bill — Passed House (Senate next)',
            description:
              'This activity took place on a related bill, H.R. 302, possibly in lieu of similar activity on S. 2836.'
          },
          {
            nameMonth: 'MAY 14, 2018',
            title: 'Introduced',
            description:
              'Bills and resolutions are referred to committees which debate the bill before possibly sending it on to the whole chamber.'
          },
          {
            nameMonth: 'JUN 6, 2018',
            title: 'Considered by Senate Committee on Homeland Security and Governmental Affairs',
            description:
              'A committee held a hearing or business meeting about the bill.'
          },
          {
            nameMonth: 'JUN 13, 2018',
            title: 'Ordered Reported',
            description:
              'A committee has voted to issue a report to the full chamber recommending that the bill be considered further. Only about 1 in 4 bills are reported out of committee.'
          },
          {
            nameMonth: 'SEP 4, 2018',
            title: 'Reported by Senate Committee on Homeland Security and Governmental Affairs',
            description:
              'Reported by Senate Committee on Homeland Security and Governmental Affairs":"A committee issued a report on the bill, which often provides helpful explanatory background on the issue addressed by the bill and the bills intentions.'
          },
          {
            nameMonth: 'SEP 6, 2018',
            title: 'Related Bill — Passed Senate with Changes (back to House)',
            description:
              'This activity took place on a related bill, H.R. 302, possibly in lieu of similar activity on S. 2836.'
          },
          {
            nameMonth: 'OCT 3, 2018',
            title: 'Related Bill — Senate Agreed to Changes',
            description:
              'This activity took place on a related bill, H.R. 302, possibly in lieu of similar activity on S. 2836.","Related Bill — Enacted — Signed by the President":"This activity took place on a related bill, H.R. 302, possibly in lieu of similar activity on S. 2836.'
          },

        ]
      }
          ]
    };
  },
 components: {
    Timeline
  },
  created(){
     const res=require('../../assets/issues/bill.json')
     const {id}=this.$route.query
     for(let i in res){
         if(res[i].id===id){
           this.list= res[i]
           this.history=res[i].history
         }
      }
      this.messageWhenNoItems=this.list.title
      const items=[]
      for(let j in this.history){
        const item={}
        item.nameMonth=j
        for(let k in this.history[j]){
          item.title=k
          item.description=this.history[j][k]
        }
        items.push(item)
      }
     
    this.timelineItems.items=items
  },
  methods: {

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
