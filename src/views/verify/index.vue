<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="vh-100 d-flex align-items-center justify-content-center">
        <button class="button" :button="true" @click="back()">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div class="container">
          <div class="form-container mx-auto">
            <!-- Title -->
            <h2 class="text-center fw-bold">Verify Code</h2>
            <p class="text-center welcome-text">
              Please enter the code we just sent to email
              <span class="email-sample"> example@gmail.com</span>
            </p>

            <!-- Form -->
            <form>
              <div class="OTP gap-2 p-4">
                <div class="mb-4">
                  <div class="d-flex align-items-center">
                    <input
                      type="number"
                      class="form-control text-center"
                      placeholder="-"
                      required
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <div class="d-flex align-items-center">
                    <input
                      type="number"
                      class="form-control text-center"
                      placeholder="-"
                      required
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <div class="d-flex align-items-center">
                    <input
                      type="number"
                      class="form-control text-center"
                      placeholder="-"
                      required
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <div class="d-flex align-items-center">
                    <input
                      type="number"
                      class="form-control text-center"
                      placeholder="-"
                      required
                    />
                  </div>
                </div>
              </div>

              <!-- Sign Up Link -->
              <p class="text-center">Didn't recieve OTP?</p>
              <a :button="true" class="profile-link"> Resend Code</a>

              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary w-100 mt-4">
                Verify
              </button>
            </form>
          </div>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'verifyScreen',
  components: {
    IonPage,
    IonContent,
  },
  methods: {
    async back() {
      this.$router.push('/signin');
    },
  },
});
</script>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
  font-family: 'Arial', sans-serif;
}
h2 {
  color: #3e2723;
  font-size: 1.8rem;
}
.welcome-text {
  color: #6d4c41;
  margin-bottom: 2rem;
  font-size: 1rem;
}

label {
  font-size: 18px;
  margin-left: 8px;
  display: flex;
  align-items: center;
}
.form-control {
  border-radius: 50px;
  padding: 0.8rem 1rem;
  border: 1px solid #d7ccc8;
  width: 100%;
  box-sizing: border-box;
}

.input-group-text {
  background: none;
  border: none;
  cursor: pointer;
}
.profile-link {
  color: #6c3f24;
  font-weight: 600;
  text-decoration: none;
  text-decoration: underline;
  display: block;
  text-align: center;
  margin-top: -15px;
}
.profile-link:hover {
  text-decoration: underline;
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
.button {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  position: absolute;
  margin-top: -150%;
  margin-right: 320px;
}
.email-sample {
  color: #6c3f24;
  font-weight: 600;
  text-decoration: none;
  text-decoration: underline;
}
.OTP {
  display: inline-flex;
}
@media (max-width: 450px) {
  .form-container {
    padding: 1rem;
  }
}
</style>
