<template>
    <div class="login">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                        <span class="checked">账号登录</span>
                        <span class="sep-line">|</span>
                        <span>扫码登录</span>
                    </h3>
                    <div class="input">
                        <input type="text" placeholder="请输入账号" >
                    </div>
                    <div class="input">
                        <input type="text" placeholder="请输入密码" >
                    </div>
                    <div class="btn-box">
                        <a href="javascript:;" class="btn" @click="login">登录</a>
                    </div>
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录/注册</div>
                        <div class="reg">立即注册<span>|</span>忘记密码？</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-link">
                <a href="">关于此商城</a> <span> | </span>
                <a href="">About Store</a> <span> | </span>
                <a href="">使用必读</a> <span> | </span>
                <a href="">帮助中心</a>
            </div>
            <div class="copyright">@2023 <span >boojac;</span> Copyright</div>
        </div>
    </div>


</template>

<script>
export default {

}
</script>

<style lang="scss">
/* 安全区域， 上中下模块*/
.login{
    &>.container{
        height: 113px;
        img{
            width: auto;
            height: 100%;
        }
    }
    .wrapper{
        background: url('../../public/imgs/login-bg.jpg') no-repeat center;
        .container{
            height: 576px;
            // position: relative;
            .login-form{
                box-sizing: border-box;
                padding-left: 31px;
                padding-right: 31px;
                width: 410px;
                height: 510px;
                background-color: #fff;
                position: absolute;
                bottom: 29px;
                right: 0;
                h3{
                    line-height: 23px;
                    font-size: 24px;
                    text-align: center;
                    margin: 40px auto 49px;
                    .checked{
                        color:#FF6600;
                    }
                    .sep-line{
                        margin:0 32px;
                    }
                }
                .input{
                    display: inline-block;
                    width: 348px;
                    height: 50px;
                    border: 1px solid #e5e5e5;
                    margin-bottom: 20px;
                    input{
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                        border: none;
                        padding: 18px;
                    }
                }
                .btn{
                    width: 100%;
                    line-height: 50px;
                    margin-top: 16px;
                    font-size: 16px;
                }
                .tips{
                    margin-top: 14px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    cursor: pointer;
                }
                .sms{
                    color: #FF6600;
                }
                .reg{
                    color: #999999;
                    span{
                        margin: 0 7px;
                    }
                }
            }
        }
    }
}
.footer{
    height: 100px;
    padding-top: 60px;
    color: #999999;
    font-size: 16px;
    text-align: center;
    background-color: #fff;
    .footer-link{
        a{
            color:#999999;
            display: inline-block;
        }
        span{
            margin: 0 10px;
        }
    }
    .copyright{
        margin-top: 13px;
    }
}
</style>