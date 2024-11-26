<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="vh-100 d-flex align-items-center justify-content-end">
        <button
          class="button mb-4 mt-4 mx-2"
          :button="true"
          @click="redirect()"
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
        <img src="../../image/splash.png" alt="" />
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'splashScreen',
  components: {
    IonPage,
    IonContent,
  },
  methods: {
    async redirect() {
      this.$router.push('/welcome');
    },
  },
});
</script>

<style scoped>
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
  right: 10px;
}
img {
  display: block;
  position: fixed;
}
</style>
