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
                <label for="current-password" class="form-label"
                  >Current Password</label
                >
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    id="current-password"
                    placeholder="****************"
                    required
                  />
                </div>
                <i class="bi bi-eye-slash toggle-password"></i>
              </div>

              <!-- New Password Input -->
              <div class="mb-4">
                <label for="new-password" class="form-label"
                  >New Password</label
                >
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    id="new-password"
                    placeholder="****************"
                    required
                  />
                </div>
                <i class="bi bi-eye-slash toggle-new-password"></i>
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
.form-label {
  font-size: 0.9rem;
  color: #6d4c41;
}
.form-control {
  border-radius: 50px;
  padding: 0.8rem;
  border: 1px solid #d7ccc8;
}
.toggle-password {
  position: absolute;
  right: 50px;
  top: 41%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #010101;
  position: fixed;
}
.toggle-new-password {
  position: absolute;
  right: 50px;
  top: 54%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #010101;
  position: fixed;
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
