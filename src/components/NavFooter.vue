<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../../public/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">关于此商城</a> <span> | </span>
      <a href="">About Store</a> <span> | </span>
      <a href="">使用必读</a> <span> | </span>
      <a href="">帮助中心</a>
    </div>
    <div class="copyright">@2023 <span class="doname">boojac;</span> Copyright</div>
  </div>
</template>

<script>
export default {
    name:"nav-footer"
}
</script>

<style lang="scss">
  .footer {
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      margin-bottom: 13px;
      a{
        color: #999999;
        display: inline-block;
      }
      .span{
        margin: 0 10px;
      }
    }
    .copyright {
      .doname{
        color: #FF6600;
      }
    }
  }
</style>