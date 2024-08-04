<template>
  <!-- <div class="headerMenu d-flex"></div> -->
  <div class="d-flex flex-column justify-center align-center heading">
    <!-- <VIcon :icon="tabler.IconBrandHipchat"></VIcon> -->
    <div>
      <p
        :class="$vuetify.display.smAndDown ? 'mblView' : 'lapView'"
        style="
          text-align: center;
          font-family: Cinzel, Protest Revolution;
          opacity: 0.6;
          font-size: 40px;
        "
      >
        Ajay Rathnam
      </p>
      <VDivider class="w-100" :thickness="2" style="color: floralwhite" />
      <p
        class="mainFont"
        :class="$vuetify.display.smAndDown ? 'mblroleView' : 'lapView'"
        style="opacity: 0.6; text-align: center"
      >
        Software Developer
      </p>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Kaushan+Script&family=Permanent+Marker&family=Protest+Revolution&display=swap");

.heading {
  height: 100vh;
  width: 100vw;
}
.mblView {
  font-size: 32px;
  word-wrap: break-word;
}
.mblroleView {
  font-size: 17px;
}
.mblView,
.lapView:hover {
  opacity: 0.8 !important;
}
.contactIcon {
  position: absolute;
}
.mainFont {
  font-family: Cinzel, "Times New Roman", Times, serif;
}
.headerMenu {
  height: 5%;
}
</style>
<script setup>
import { IconBrandHipchat } from "@/components/tablerIcon";
</script>
