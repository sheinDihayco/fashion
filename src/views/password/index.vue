<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="vh-100 d-flex align-items-center justify-content-center">
        <button class="button mt-4 mb-4 mx-2" :button="true" @click="back()">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div
          class="container mt-4 p-4"
          style="font-family: 'Arial', sans-serif"
        >
          <div class="form-container mx-auto">
            <h2 class="text-center fw-bold">New Password</h2>
            <p class="text-center welcome-text">
              Your new password must be different from previously used
              passwords.
            </p>

            <form>
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
              <button type="submit" class="btn btn-primary w-100 my-4">
                Create New Password
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
  name: 'NewPasswordScreen',
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
  text-align: center;
  font-family: 'Arial', sans-serif;
  display: fixed;
}
h2 {
  color: #3e2723;
  font-size: 1.8rem;
  position: absolute;
  top: 100px;
  left: 105px;
}
.welcome-text {
  margin-bottom: 2rem;
  font-size: 1rem;
  position: absolute;
  top: 145px;
  left: 2px;
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
  border-color: #6c757d;
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: #6c757d;
  font-size: 1.2rem;
  position: absolute;
  top: 10px;
  left: 10px;
}

@media (max-width: 450px) {
  .form-container {
    padding: 1rem;
  }
}
</style>
