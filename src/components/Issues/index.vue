<template>
  <div>
    <img src="" alt="">
    <div class="container" style="background-color:#fff;">
      <h3 style="color:#252525;line-height:60px;">议案列表</h3>
      <div class="row" style="margin-bottom:20px;">
        <div class="col-md-12 mx-auto">
          <div class="row">
            <div class="col-lg-6 col-md-12 mx-auto">
              <ul style="padding-left:0;">
                <h5 style="color:#fff;line-height:60px;background-color:rgb(163, 123, 224);border-radius: 10px;padding-left: 10px;">议案的种类</h5>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('S2836')">
                    <img src="../../assets/issues/S2836.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Preventing Emerging Threats Act of 2018
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                      May 14, 2018
                    </span>
                  </a>
                </li>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('S2098')">
                    <img src="../../assets/issues/S2098.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Foreign Investment Risk Review Modernization Act of 2018
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                      Nov 8, 2017
                    </span>
                  </a>
                </li>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('HR3364')">
                    <img src="../../assets/issues/HR3364.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Countering America’s Adversaries Through Sanctions Act
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                     Jul 24, 2017 115th Congress, 2017–2019
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-12 mx-auto">
              <ul style="padding-left:0;">
                <h5 style="color:#fff;line-height:60px;background-color:rgb(163, 123, 224);border-radius: 10px;padding-left: 10px;">议案的种类</h5>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('S2836')">
                    <img src="../../assets/issues/S2836.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Preventing Emerging Threats Act of 2018
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                      May 14, 2018
                    </span>
                  </a>
                </li>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('S2098')">
                    <img src="../../assets/issues/S2098.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Foreign Investment Risk Review Modernization Act of 2018
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                      Nov 8, 2017
                    </span>
                  </a>
                </li>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('HR3364')">
                    <img src="../../assets/issues/HR3364.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Countering America’s Adversaries Through Sanctions Act
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                     Jul 24, 2017 115th Congress, 2017–2019
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-12 mx-auto">
              <ul style="padding-left:0;">
                <h5 style="color:#fff;line-height:60px;background-color:rgb(163, 123, 224);border-radius: 10px;padding-left: 10px;">议案的种类</h5>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('S2836')">
                    <img src="../../assets/issues/S2836.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Preventing Emerging Threats Act of 2018
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                      May 14, 2018
                    </span>
                  </a>
                </li>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('S2098')">
                    <img src="../../assets/issues/S2098.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Foreign Investment Risk Review Modernization Act of 2018
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                      Nov 8, 2017
                    </span>
                  </a>
                </li>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('HR3364')">
                    <img src="../../assets/issues/HR3364.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Countering America’s Adversaries Through Sanctions Act
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                     Jul 24, 2017 115th Congress, 2017–2019
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-12 mx-auto">
              <ul style="padding-left:0;">
                <h5 style="color:#fff;line-height:60px;background-color:rgb(163, 123, 224);border-radius: 10px;padding-left: 10px;">议案的种类</h5>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('S2836')">
                    <img src="../../assets/issues/S2836.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Preventing Emerging Threats Act of 2018
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                      May 14, 2018
                    </span>
                  </a>
                </li>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('S2098')">
                    <img src="../../assets/issues/S2098.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Foreign Investment Risk Review Modernization Act of 2018
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                      Nov 8, 2017
                    </span>
                  </a>
                </li>
                <li class="clearbox" style="line-height:30px;">
                  <a href="#" @click="Router('HR3364')">
                    <img src="../../assets/issues/HR3364.png" alt="议题图片" style="width:15%;">
                    <span style="display:inline-block;font-size:16px; margin-left:10px;width:50%;text-overflow:ellipsis;">
                      Countering America’s Adversaries Through Sanctions Act
                    </span>
                    <span style="display:inline-block;color:#888;font-size:14px; margin-left:10px;width:26%;text-overflow:ellipsis;">
                     Jul 24, 2017 115th Congress, 2017–2019
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "issues",

  data() {
    return {};
  },

  methods: {
    Router(id){
      this.$router.push(`/Issues/detail/?id=${id}`)
    }
  }
};
</script>

<style scoped>
</style>
