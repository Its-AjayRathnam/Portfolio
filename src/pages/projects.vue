<template>
  <div>
    <div class="about d-flex">
      <div class="container">
        <div class="d-flex justify-lg-space-evenly titles">
          <div class="tab-titles">
            <p
              class="tab-links active-link"
              style="
                top: 0;
                font-size: 2rem;
                padding-left: 2%;
                padding-bottom: 2%;
                color: #dfc57b;
              "
              @click="opentab($event, 'experience')"
            >
              Experience
            </p>
            <p
              class="tab-links"
              style="
                top: 0;
                font-size: 2rem;
                padding-left: 2%;
                padding-bottom: 2%;
                color: #dfc57b;
              "
              @click="opentab($event, 'projects')"
            >
              Projects
            </p>
            <p
              class="tab-links"
              style="
                top: 0;
                font-size: 2rem;
                padding-left: 2%;
                padding-bottom: 2%;
                color: #dfc57b;
              "
              @click="opentab($event, 'education')"
            >
              Education
            </p>
          </div>
        </div>
        <div class="tab-contents active-tab ga-3" id="experience">
          <ul>
            <li>
              <span>Junior Software Engineer</span><br />LogicValley Technologies Pvt.
              Ltd. - Coimbatore <br />
              July 2022 - August 2023
            </li>
            <li style="padding-top: 3%">
              <span>Software Programmer</span><br />Descpro Technologies Pvt. Ltd. -
              Palakkad
              <br />
              August 2023 - Present
            </li>
          </ul>
        </div>
        <div class="tab-contents" id="projects">
          <ul>
            <li>
              <span>Second Letter Generation Bot</span>
              <br />
              <p><span>Environment:</span> C# .Net Framework / MongoDB</p>
              The second visit letter generation Bot is developed for Marston Holdings.
              The bot generate the Second Visit Letter for all the High Court cases, So
              that the Bot can send the 2nd Visit Outbound Letters to corresponding
              clients on every day.
            </li>
            <li>
              <span>Engage Client Services Bot</span><br />
              <p><span>Environment:</span> C# .Net Framework / MongoDB</p>
              The Bot reads the mail from particular officers, and download .csv file from
              the mail. Then compare .xml file from SSRS portal and fetch the value and
              volume followed by amend the figures in .csv file.
            </li>
            <li>
              <span>CAI Dashboard</span><br />
              <p><span>Environment:</span> C# .Net Framework / MongoDB</p>
              The CAI Dashboard is an user friendly dashboard to create Chatbots. User can
              generate QnA, Utterances for bots in CAI dashboard. These utterances are
              trained and published in LUIS / CLU cloud-based conversational Al service
              that applies custom machine-learning intelligence to a user's
              conversational, natural language text to predict overall meaning, and pull
              out relevant, detailed information.
            </li>
            <li>
              <span>Omnyk</span><br />
              <p><span>Environment:</span> C# .Net core / PostGreSql</p>
              Omnyk is a medical related application which calculates the data from user.
              It records the HeartRate, Spo2, and O2 level of patients and sends fallback
              alert to emergency contacts if the levels reach below limit
            </li>
          </ul>
        </div>
        <div class="tab-contents" id="education">
          <ul>
            <li>
              <span>2022 - 2024</span><br />Master of Computer Applications<br />Alagappa
              University, Karaikudi<br />Grade - 9.1
            </li>
            <li>
              <span>2019 - 2022</span><br />Bachelor of Science in Computer Science<br />St.Xavier's
              College(Autonomous),Palayamkottai, Tirunelveli<br />Grade - 8.7
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    opentab(event, tabname) {
      const tablinks = document.getElementsByClassName("tab-links");
      const tabcontents = document.getElementsByClassName("tab-contents");

      // Remove 'active-link' class from all tab links
      for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
      }

      // Remove 'active-tab' class from all tab contents
      for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }

      // Add 'active-link' class to the clicked tab
      event.currentTarget.classList.add("active-link");

      // Show the corresponding tab content
      document.getElementById(tabname).classList.add("active-tab");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: static;
  margin-bottom: 10%;
}
.titles {
  width: 100%;
}
#about {
  color: #ababab;
}
.sub-title {
  font-size: 50px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  padding-top: 5px;
}

.tab-titles {
  display: flex;
  gap: 10px;
  margin-bottom: 3%;
  flex-wrap: wrap;
  min-width: 80%;
  justify-content: start;
}
.tab-links {
  margin-right: 3em;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}
.tab-links::after {
  content: "";
  width: 0;
  height: 3px;
  background: #dfc57b;
  position: absolute;
  left: 13px;
  bottom: -8px;
  transition: 0.5s;
}
.tab-links.active-link::after {
  width: 50%;
}
.tab-contents ul li {
  list-style: none;
  margin: 10px 0;
  font-family: Crimson Text, "Times New Roman", Times, serif;
  padding-left: 4%;
}
.tab-contents ul li span {
  color: #7f9d73;
  text-wrap: wrap;
  font-size: 1.2rem;
  font-weight: 500;
}
.tab-contents ul li p span {
  color: #c6865e;
  font-size: 1rem;
  font-weight: 300;
}
.tab-contents {
  display: none;
}
.tab-contents.active-tab {
  display: block;
}
</style>
