<template>
  <div class="skills d-flex ga-2 flex-column justify-center align-start position-static">
    <p
      class="d-flex align-center"
      style="top: 0; left: 300px; font-size: 2rem; padding-bottom: 2%; color: #dfc57b"
    >
      Skills
    </p>
    <label for="">ASP .NET Core</label>
    <div class="progress d-flex justify-start align-center">
      <v-progress-linear
        value="90"
        max="100"
        bg-color="#E3E3E4"
        color="#7F9D73"
        model-value="90"
        height="10"
      ></v-progress-linear>
    </div>
    <label for="">.NET Web API</label>
    <div class="progress d-flex justify-start align-center">
      <v-progress-linear
        value="90"
        max="100"
        bg-color="#E3E3E4"
        color="#7F9D73"
        model-value="92"
        height="10"
      ></v-progress-linear>
    </div>
    <label for="">Mongo DB</label>
    <div class="progress d-flex justify-start align-center">
      <v-progress-linear
        value="90"
        max="100"
        bg-color="#E3E3E4"
        color="#7F9D73"
        model-value="70"
        height="10"
      ></v-progress-linear>
    </div>
    <label for="">PostGreSql</label>
    <div class="progress d-flex justify-start align-center">
      <v-progress-linear
        value="90"
        max="100"
        bg-color="#E3E3E4"
        color="#7F9D73"
        model-value="90"
        height="10"
      ></v-progress-linear>
    </div>
    <label for="">Selenium</label>
    <div class="progress d-flex justify-start align-center">
      <v-progress-linear
        value="90"
        max="100"
        bg-color="#E3E3E4"
        color="#7F9D73"
        model-value="82"
        height="10"
      ></v-progress-linear>
    </div>
    <label for="">RPA Automation</label>
    <div class="progress d-flex justify-start align-center">
      <v-progress-linear
        value="90"
        max="100"
        bg-color="#E3E3E4"
        color="#7F9D73"
        model-value="85"
        height="10"
      ></v-progress-linear>
    </div>
    <label for="">Chat Bot Development</label>
    <div class="progress d-flex justify-start align-center">
      <v-progress-linear
        value="90"
        max="100"
        bg-color="#E3E3E4"
        color="#7F9D73"
        model-value="85"
        height="10"
      ></v-progress-linear>
    </div>
    <label for="">RPA Automation</label>
    <div class="progress d-flex justify-start align-center">
      <v-progress-linear
        value="90"
        max="100"
        bg-color="#E3E3E4"
        color="#7F9D73"
        model-value="85"
        height="10"
      ></v-progress-linear>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.skills {
  padding-bottom: 15%;
  padding-left: 5%;
}
.skillsCard {
  text-align: center;
  height: 100vh;
  width: 90vw;
}
.progress {
  height: 2%;
  width: 80vw;
  align-items: start;
  padding-left: 4%;
}
label {
  align-items: start;
}
</style>
