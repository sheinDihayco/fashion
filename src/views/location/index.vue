<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="vh-100 d-flex align-items-center justify-content-center">
        <button class="button" :button="true" @click="back()">
          <i class="fa-solid fa-arrow-left"></i>
        </button>

        <div
          class="container mt-4 p-4"
          style="font-family: 'Arial', sans-serif"
        >
          <div class="user mb-4">
            <i class="bi bi-geo-alt-fill"></i>
          </div>

          <div class="form-container mx-auto">
            <!-- Title -->
            <h2 class="text-center fw-bold mt-4 mb-3">
              What is Your Location?
            </h2>
            <p class="text-center welcome-text">
              We need to know your location in order to suggest nearby services.
            </p>

            <!-- Submit Button -->
            <button type="submit" class="btn btn-primary w-100 mt-4 mb-4">
              Allow Location Access
            </button>
            <p class="location mt-3">Enter Location Manually</p>
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
.location {
  color: #6c3f24;
  font-weight: 600;
  text-decoration: none;
}
.container {
  text-align: center;
  font-family: 'Arial', sans-serif;
  position: fixed;
}
h2 {
  color: #3e2723;
  font-size: 1.8rem;
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
  background-color: #dadada;
  padding: 10px;
  border-radius: 50%;
  border: 1px #292929;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.user {
  font-size: 80px;
  color: #5a3320;
}
.button {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  position: absolute;
  margin-top: -150%;
  margin-right: 320px;
}
</style>
