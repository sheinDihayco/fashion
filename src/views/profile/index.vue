<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="vh-100 d-flex align-items-center justify-content-center">
        <button class="button mb-4 mt-4 mx-2" :button="true" @click="back()">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div class="container mb-4 p-4">
          <div class="form-container mx-auto">
            <h2 class="text-center fw-bold">Complete Your Profile</h2>
            <p class="text-center welcome-text">
              Don't worry, only you can see your personal data.No one else will
              be able to see it.
            </p>

            <div class="user mb-3">
              <i class="fa-solid fa-user"></i>
              <button class="edit-icon">
                <i class="fa-solid fa-pen icon"></i>
              </button>
            </div>

            <form>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter Phone Number</label>
                <div class="form-control d-flex align-items-center">
                  <select class="country-code" required>
                    <option value="+1">+1</option>
                    <option value="+63">+63</option>
                  </select>
                  <input
                    type="text"
                    class="phone-input"
                    placeholder="Phone number"
                    required
                  />
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Gender</label>
                <div class="dropdown-wrapper position-relative">
                  <select class="form-select form-control gender">
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <button type="submit" class="btn btn-primary w-100 mt-2">
                Complete Profile
              </button>

              <p class="text-center mt-4">
                Would you like to display your location?
                <a :button="true" @click="location()" class="sign-up-link">
                  View Location
                </a>
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
    async back() {
      this.$router.push('/signin');
    },
    async location() {
      this.$router.push('/location');
    },
  },
});
</script>

<style scoped>
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
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 50px;
}

.country-code {
  width: 70px;
  border: none;
  background-color: transparent;
  margin-right: 10px;
  font-size: 1rem;
}

.phone-input {
  flex-grow: 1;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding-left: 5px;
}
@media (max-width: 576px) {
  .country-code {
    width: 60px;
  }

  .phone-input {
    font-size: 0.9rem;
  }
  .gender .option {
    width: 60px;
  }
}
.form-control input,
.form-control select {
  border-radius: 50px;
}
.dropdown-wrapper {
  position: relative;
}

.dropdown-icon {
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  color: #6c757d;
}
.welcome-text {
  margin-bottom: 2rem;
  font-size: 1rem;
  position: absolute;
  top: 140px;
  left: 5px;
  padding: 5px;
}
.edit-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #6c3f24;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
}
.icon {
  font-size: 18px;
  color: #ffffff;
  position: absolute;
  right: 25%;
  top: 30%;
}
.edit-icon:hover {
  background-color: #5a3320;
}
.container {
  text-align: center;
  font-family: 'Arial', sans-serif;
  display: fixed;
  margin-top: 200px;
}

h2 {
  color: #3e2723;
  font-size: 1.8rem;
  position: absolute;
  top: 100px;
  left: 60px;
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

.user {
  position: relative;
  display: inline-block;
  background-color: #dadada;
  padding: 10px;
  border-radius: 50%;
  border: 1px #292929;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dadada;
  margin: 0 auto;
  margin-top: 100px;
}

.user {
  font-size: 80px;
  color: #757575;
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
    margin: auto;
  }
}
</style>
