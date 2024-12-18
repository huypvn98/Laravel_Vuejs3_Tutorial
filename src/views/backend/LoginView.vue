<script setup></script>

<template>
  <div class="login-container">
    <div class="login-wrapper">
        <div class="panel-head">
            <h2 class="heading-1">Đăng nhập</h2>
            <div class="description">Chào mừng bạn đến với hệ thống <br> <span>VUE SYSTEM</span> </div>
        </div>
            <div class="panel-body">
              <div class="form-row mb20">
                <div class="label">Tên đăng nhập</div>
                <input
                  type="text"
                  name="email"
                  value=""
                  class="input-text"
                  autocomplete="off"
                />
              </div>
              <div class="form-row mb-5">
                <div class="label">
                    <div class="uk-flex uk-flex-between">
                        <span>Mật khẩu</span>
                        <a href="" title="" class="forgot">Quên mật khẩu</a>
                    </div>
                </div>
                <input
                  type="text"
                  name="password"
                  value=""
                  class="input-text"
                  autocomplete="off"
                />
              </div>
              <div class="form-row mb20">
                    <div class="uk-flex uk-flex-middle">
                        <input
                            type="checkbox"
                            name="remember"
                            class="input-checkbox"
                            id="forgot-password"
                        >
                        <label for="forgot-password">Ghi nhớ mật khẩu?</label>
                    </div>
              </div>
              <div class="form-row mb-5">
                    <button class="uk-button btn-login">Đăng nhập</button>
              </div>
            </div>
    <div class="panel-foot">
        copyright huypvn1998@gmail.com 
    </div>
    </div>
    
  </div>
</template>

<style scoped>
    .login-container{
        padding-top: 100px
    }

    .login-wrapper{
        width: 410px;
        margin: 0 auto;
        border-radius: 5px;
        box-shadow: 0 0.125rem 0 rgba(10, 10, 10, 04);
        padding: 48px;
        background: #fff;
    }

    .login-container .panel-head{
        text-align: center;
        margin-bottom: 30px;
    }
    .login-wrapper .heading-1{
        font-weight: 700;
        text-transform: uppercase;
        font-size: 24px;
    }
    .login-container .description{
        font-size: 15px;
        color: #000;
    }
    .btn-login{
        background: var(--color-background);
        width: 100%;
        border-radius: 5px;
        height: 40px;
        color: #fff;
    }

    .login-wrapper .panel-foot{
        text-align: center;
    }
    .login-wrapper .label{
        font-weight: 600;
        margin-bottom: 5px;
        color: #000;
    }

    .form-row .forgot{
        color: rgb(230, 83, 60);
        font-size: 13px;
    }

    /* .input-check */
</style>
