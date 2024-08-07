<script setup>
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconX,
} from "@tabler/icons-vue";
const contactDetail = ref({
  name: "",
  email: "",
  contactNo: "",
  message: "",
});
const contactForm = ref();
const snackbar = ref(false);
const loading = ref(false);
const clearForm = () => {
  contactDetail.value = {
    name: null,
    email: null,
    message: null,
    contactNo: null,
  };
};
const onSave = async () => {
  contactForm.value.validate().then(({ valid }) => {
    if (valid) {
      loading.value = true;
      let url =
        "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbww27MW5BfXMjMN0pkDastPRcrVRRuCqEYYP4hs8EJN6Vi5czuZCM3ds4S-x2Miue_f/exec";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(contactDetail.value),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          loading.value = false;
          snackbar.value = true;
          clearForm();
          console.log(response);
        })
        .catch((error) => {
          alert("There was an error sending your message. Please try again.");
          console.error("Error:", error);
        });
    }
  });
};
</script>
<template>
  <div class="contact">
    <p
      class="d-flex align-center"
      style="
        top: 0;
        left: 300px;
        font-size: 2rem;
        padding-left: 2%;
        padding-bottom: 2%;
        color: #dfc57b;
      "
    >
      Contact
    </p>
    <div :class="$vuetify.display.smAndDown ? 'ma-4 mt-0' : 'ma-12 mt-0'">
      <div
        class="container"
        :style="$vuetify.display.smAndDown ? 'width: auto' : 'width: 90%'"
      >
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>CONTACT</span>
              </div>
              <div class="app-contact">CONTACT INFO : its.ajayrathnam@gmail.com</div>
            </div>
            <v-form ref="contactForm" class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                  <v-text-field
                    v-model="contactDetail.name"
                    class="app-form-control"
                    placeholder="NAME"
                    :rules="[
                      () => (contactDetail.name?.length > 0 ? true : 'Name is required'),
                    ]"
                  />
                </div>
                <div class="app-form-group">
                  <v-text-field
                    class="app-form-control"
                    v-model="contactDetail.email"
                    placeholder="EMAIL"
                    type="email"
                    :rules="[
                      () =>
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactDetail.email)
                          ? true
                          : 'Invalid email address!!',
                    ]"
                  />
                </div>
                <div class="app-form-group">
                  <v-text-field
                    class="app-form-control"
                    v-model="contactDetail.contactNo"
                    placeholder="CONTACT NO"
                    :rules="[
                      () =>
                        /^(\+91[\-\s]?)?[6-9]\d{9}$/.test(contactDetail.contactNo)
                          ? true
                          : 'Contact number is required',
                    ]"
                  />
                </div>
                <div class="app-form-group message">
                  <v-text-field
                    class="app-form-control"
                    v-model="contactDetail.message"
                    placeholder="MESSAGE"
                    :rules="[
                      () =>
                        contactDetail.message?.length > 0 ? true : 'Message is required',
                    ]"
                  />
                </div>
                <div class="app-form-group buttons d-flex justify-space-between w-100">
                  <v-btn :prepend-icon="IconX" class="app-form-button" @click="clearForm"
                    >CANCEL</v-btn
                  >
                  <v-btn
                    :loading="loading"
                    class="app-form-button"
                    color="green"
                    @click="onSave"
                    :prepend-icon="IconBrandTelegram"
                  >
                    SEND
                  </v-btn>
                </div>
                <div class="app-contact-me buttons d-flex justify-end ga-3 pt-5">
                  <VBtn
                    :icon="IconBrandGithub"
                    class="app-form-button"
                    @click="clear"
                    color="black"
                    size="30"
                  ></VBtn>
                  <VBtn
                    :icon="IconBrandLinkedin"
                    class="app-form-button"
                    @click="submitMessage"
                    color="blue"
                    size="30"
                  ></VBtn>
                </div>
              </div>
            </v-form>
            <v-snackbar v-model="snackbar" multi-line color="green"
              ><p>Sent Successfully!!</p>
              <template v-slot:actions>
                <v-btn color="red" variant="text" @click="snackbar = false">
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//@import "@/styles/contact.scss";

.contact {
  width: 100vw;
}

.container {
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
}

.screen {
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
  padding-bottom: 2rem;
}

.screen:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.close {
  background: #ed1c6f;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #ea1d6f;
  font-size: 26px;
}

.app-title:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #ea1d6f;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: #ea1d6f;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: #b9134f;
}

.credits {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #ffa4bd;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  font-weight: normal;
}

.credits-link {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.dribbble {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}
.app-contact-me {
  position: absolute;
  left: 3.2rem;
}
</style>
