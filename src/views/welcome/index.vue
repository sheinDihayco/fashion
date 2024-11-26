<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="vh-100 d-flex align-items-center justify-content-center">
        <div class="container" style="font-family: 'Arial', sans-serif">
          <div class="form-container mx-auto"></div>
          <div class="welcome">
            <div class="image-grid">
              <div class="image-left">
                <img
                  class="main-image"
                  src="https://img.freepik.com/free-photo/beautiful-lady-trench-coat-black-shoes-heels-standing-dreamily-looking-aside_574295-5627.jpg"
                  alt=""
                />
              </div>
              <div class="image-right">
                <img
                  class="circle-image-1"
                  src="https://mdsassets.emaarmalls.com/mds/uploads/store/mainPicture/63c79bf9d2756.jpg"
                  alt=""
                />
                <img class="circle-image" src="../../image/image.png" alt="" />
              </div>
            </div>
            <div class="content">
              <h1 class="title">
                The <span class="highlight">Fashion App</span> That Makes You
                Look Your Best
              </h1>
              <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <button class="button">Let's Get Started</button>
              <p class="signin">
                Already have an account?
                <a :button="true" @click="signin()" class="signin-link"
                  >Sign In</a
                >
              </p>
            </div>
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
  name: 'welcomeScreen',
  components: {
    IonPage,
    IonContent,
    IonRouterOutlet,
  },
  methods: {
    async signin() {
      this.$router.push('signin');
    },
  },
});
</script>

<style scoped>
.welcome {
  padding: 30px;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

.image-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
}

.image-left {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.image-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
}

.main-image {
  border-radius: 150px;
  width: 200px;
  height: 350px;
  object-fit: cover;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.circle-image {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.circle-image-1 {
  border-radius: 150px;
  width: 150px;
  height: 190px;
  object-fit: cover;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.content {
  margin-top: 30px;
  text-align: center;
}

.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.4;
}

.highlight {
  color: #7f492a;
}

.subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.button {
  padding: 12px 25px;
  font-size: 16px;
  color: white;
  background-color: #6c3f24;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.button:hover {
  background-color: #5a2e18;
}

.signin {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

.signin-link {
  color: #623a24;
  text-decoration: none;
  font-weight: bold;
  text-decoration: underline;
}

.signin-link:hover {
  text-decoration: underline;
}
</style>
