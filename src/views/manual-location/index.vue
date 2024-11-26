<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="vh-100">
        <div class="title-container">
          <button class="button" @click="back()">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <h2 class="page-title">Enter Your Location</h2>
        </div>

        <div class="search-container">
          <div class="search-bar">
            <i class="fas fa-search search-icon"></i>
            <input
              class="search-input"
              type="search"
              placeholder="Golden Avenue"
            />
            <i class="bi bi-x-circle clear-icon"></i>
          </div>
        </div>

        <div class="results-container">
          <div class="current-location">
            <i class="fas fa-map-marker-alt location-icon"></i>
            <span>Use my current location</span>
          </div>

          <div class="search-result">
            <p class="result-label">SEARCH RESULT</p>
            <div class="result-container">
              <i class="fas fa-map-marker-alt location-icon"></i>
              <div class="result-details">
                <span class="result-title">Golden Avenue</span>
                <span class="result-address">8502 Preston Rd. Ingl...</span>
              </div>
            </div>
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
      this.$router.push('/location');
    },
  },
});
</script>

<style scoped>
.vh-100 {
  position: relative;
  height: 100vh;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
}

.button {
  border-radius: 50px;
  border-color: #6c757d;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  color: #6c757d;
  top: 15px;
  left: 20px;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
}

.page-title {
  color: #3e2723;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
}
.search-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 0 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background: #f5f5f5;
  border-radius: 25px;
  padding: 10px 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.search-icon {
  font-size: 1rem;
  color: #6d4c41;
  margin-right: 10px;
}

.search-input {
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #333;
  background: transparent;
}

.clear-icon {
  font-size: 1.2rem;
  color: #9e9e9e;
  cursor: pointer;
}

.results-container {
  margin: 20px;
}

.current-location {
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 1rem;
  color: #6d4c41;
  font-weight: bolder;
}
.current-location .location-icon {
  font-size: 1.2rem;
  color: #6d4c41;
  margin-right: 10px;
}

.search-result {
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
}

.result-label {
  font-size: 0.9rem;
  font-weight: bold;
  color: #757575;
  margin-bottom: 10px;
}

.result-container {
  display: flex;
  align-items: center;
}

.location-icon {
  font-size: 1.2rem;
  color: #6d4c41;
  margin-right: 10px;
}

.result-details {
  display: flex;
  flex-direction: column;
}

.result-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #6d4c41;
}

.result-address {
  font-size: 0.9rem;
  color: #757575;
}
</style>
