<template>
  <MainLayoutComponent>
    <HeaderComponent />
    <ContentLayoutComponent>
      <UrlBoxComponent />
      <ContentComponent />
    </ContentLayoutComponent>
    <FooterComponent />
  </MainLayoutComponent>
  <ModalComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./HeaderComponent.vue";
import MainLayoutComponent from "./MainLayoutComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import UrlBoxComponent from "./UrlBoxComponent.vue";
import ContentComponent from "./ContentComponent.vue";
import ContentLayoutComponent from "./ContentLayoutComponent.vue";
import ModalComponent from "./ModalComponent.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent,
    UrlBoxComponent,
    ContentComponent,
    ContentLayoutComponent,
    ModalComponent
  },
})
</script>