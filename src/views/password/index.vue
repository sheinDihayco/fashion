<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="vh-100 d-flex align-items-center justify-content-center">
        <button class="button" :button="true" @click="back()">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div class="container" style="font-family: 'Arial', sans-serif">
          <div class="form-container mx-auto">
            <!-- Title -->
            <h2 class="text-center fw-bold">New Password</h2>
            <p class="text-center welcome-text">
              Your new password must be different from previously used
              passwords.
            </p>

            <!-- Form -->
            <form>
              <!-- Current Password Input -->
              <div class="mb-4">
                <label class="form-label">Curernt Password</label>
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

              <!-- New Password Input -->
              <div class="mb-4">
                <label class="form-label"> New Password</label>
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
              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary w-100 my-4">
                Create New Password
              </button>
              <!-- Sign Up Link -->
              <p class="text-center mt-4">
                Complete Your Profile!
                <a :button="true" @click="profile()" class="profile-link"
                  >Profile</a
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
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'NewPasswordScreen',
  components: {
    IonPage,
    IonContent,
  },
  methods: {
    async profile() {
      this.$router.push('/profile');
    },
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
.profile-link {
  color: #6c3f24;
  font-weight: 600;
  text-decoration: none;
  text-decoration: underline;
}
.profile-link:hover {
  text-decoration: underline;
}
/* Button */
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
/* Responsive Design */
@media (max-width: 450px) {
  .form-container {
    padding: 1rem;
  }
}
</style>
