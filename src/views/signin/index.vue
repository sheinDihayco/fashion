<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="vh-100 d-flex align-items-center justify-content-center">
        <div class="container">
          <div class="form-container mx-auto">
            <h2 class="text-center fw-bold">Sign In</h2>
            <p class="text-center welcome-text">
              Hi! Welcome back, you've been missed
            </p>

            <form class="container">
              <div class="mb-4">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div class="mb-4">
                <label class="form-label">Password</label>
                <div class="d-flex align-items-center">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="****************"
                    required
                  />
                  <div class="toggle-password-wrapper">
                    <button type="button" class="toggle-password">
                      <i class="bi bi-eye-slash"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="text-end">
                <a
                  :button="true"
                  @click="password()"
                  class="forgot-password-link"
                  >Forgot Password?</a
                >
              </div>

              <button
                :button="true"
                @click="profile()"
                class="btn btn-primary w-100 my-4"
              >
                Sign In
              </button>

              <div class="divider my-3">
                <span>Or sign in with</span>
              </div>

              <div class="d-flex justify-content-center gap-3">
                <button
                  type="button"
                  class="btn btn-outline-secondary rounded-circle btn-apple"
                >
                  <i class="fab fa-apple"></i>
                </button>

                <button
                  type="button"
                  class="btn btn-outline-secondary rounded-circle btn-google"
                >
                  <i class="fab fa-google"></i>
                </button>

                <button
                  type="button"
                  class="btn btn-outline-secondary rounded-circle btn-facebook"
                >
                  <i class="fab fa-facebook-f"></i>
                </button>
              </div>

              <p class="text-center mt-4">
                Don't have an account?
                <a :button="true" @click="signup()" class="sign-up-link"
                  >Sign Up</a
                >
              </p>
            </form>
          </div>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonRouterOutlet } from '@ionic/vue';

export default defineComponent({
  name: 'SignInScreen',
  components: {
    IonPage,
    IonContent,
    IonRouterOutlet,
  },
  methods: {
    async signup() {
      this.$router.push('signup');
    },
    async password() {
      this.$router.push('password');
    },
    async profile() {
      this.$router.push('/profile');
    },
  },
});
</script>

<style scoped>
.conatainer {
  padding: 30px;
  text-align: center;
  font-family: 'Arial', sans-serif;
}
.brand-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #a69485;
  margin-bottom: 1.5rem;
}

h2 {
  color: #3e2723;
  font-size: 1.8rem;
}
.welcome-text {
  margin-bottom: 2rem;
  font-size: 1rem;
}
.forgot-password-link,
.sign-up-link {
  color: #6c3f24;
  font-weight: 600;
  text-decoration: underline;
}
.forgot-password-link:hover,
.sign-up-link:hover {
  text-decoration: underline;
}

.form-control {
  border-radius: 50px;
  padding: 0.8rem 1rem;
  border: 1px solid #d7ccc8;
  width: 100%;
  box-sizing: border-box;
}

.toggle-password-wrapper {
  margin-left: -40px;
  display: flex;
  align-items: center;
}

.toggle-password {
  background: none;
  border: none;
  cursor: pointer;
  color: #6c757d;
  font-size: 1.2rem;
}

.toggle-password:focus {
  outline: none;
}

.input-group-text {
  background: none;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #6c3f24;
  border: none;
  border-radius: 50px;
  padding: 0.8rem;
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
}
.btn-primary:hover {
  background-color: #5a3320;
}
.btn-apple {
  border-color: #e9e9e9;
  color: #000;
}
.btn-apple:hover {
  background-color: #000;
  color: #fff;
}

.btn-google {
  border-color: #e9e9e9;
  color: #ea4335;
}
.btn-google:hover {
  background-color: #ea4335;
  color: #fff;
}

.btn-facebook {
  border-color: #e9e9e9;
  color: #1877f2;
}
.btn-facebook:hover {
  background-color: #1877f2;
  color: #fff;
}

.divider {
  text-align: center;
  position: relative;
}
.divider:before,
.divider:after {
  content: '';
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background: #d7ccc8;
}
.divider:before {
  left: 0;
}
.divider:after {
  right: 0;
}
.divider span {
  background: #fff;
  padding: 0 1rem;
  color: #6d4c41;
}
.container {
  font-family: 'Arial', sans-serif;
  display: fixed;
}
@media (max-width: 450px) {
  .form-container {
    padding: 1.5rem;
  }
}
</style>
