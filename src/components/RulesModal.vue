<template>
  <Modal :id="id" type="clausal">
    <svg
      class="cancel"
      @click="closeModal(id)"
      viewBox="0 0 375 375"
      width="300pt"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m187.5 679.86223a185.00057 185.00057 0 0 0 -184.9999998 185 185.00057 185.00057 0 0 0 184.9999998 184.99997 185.00057 185.00057 0 0 0 185-184.99997 185.00057 185.00057 0 0 0 -185-185zm-85.90632 78.87528a20.232308 20.232308 0 0 1 14.5181 6.13144l71.38822 71.38824 71.38825-71.38824a20.232308 20.232308 0 0 1 13.90867-6.12106 20.232308 20.232308 0 0 1 14.70258 34.73023l-71.3903 71.38825 71.3903 71.39029a20.232308 20.232308 0 1 1 -28.61125 28.60921l-71.38825-71.38824-71.38822 71.38824a20.232308 20.232308 0 1 1 -28.611275-28.60921l71.390325-71.39029-71.390325-71.38825a20.232308 20.232308 0 0 1 14.093175-34.74061z"
        transform="translate(0 -677.36222)"
      ></path>
    </svg>
    <h3>Participants' Rules</h3>
    <h4>1. Submission and Demonstration</h4>
    <Para>
      a. The Participants, whether individually or as a team, will be required to work on building solutions to problems broadly categorised according to the themes of Built Environment, Waste Reduction, Waste Management, and Transportation (“the Problem Themes”), more precisely described on the Competition website found at (domain name TBC). The Participants are to create solutions for their submission for the Competition using at least one of the technology categories, broadly categorised as Platforms and Applications, Internet of Things, Data Science / Artificial Intelligence, and Mechanical Design / Digital Fabrication / Robotics which are to be submitted for judging by a panel of judges.
      <br>
      <br>b. The Participants may only begin working (coding, building, analysing) on their Submissions at the official commencement time fixed by the Organiser and must complete building their prototype and any related materials for submission (hereafter referred to as “Submission”) by the end of the 24 hours after the official commencement time.
      <br>
      <br>c. Each Submission must:
      <br>
      <br>i. be submitted to the platform that the Organiser has provided to count as a valid submission.
      <br>
      <br>ii. adhere to these Terms and Conditions and any rules and regulations of the Competition set out at the beginning of the Hackathon;
      <br>
      <br>iii. not breach the terms and conditions of any embedded software or services used in the Submission;
      <br>
      <br>iv. not contain any malicious code or backdoors;
      <br>
      <br>v. not contain, depict or refer to any crude, vulgar, obscene, sexually explicit, disparaging, discriminatory, offensive, illegal or otherwise unsuitable or inappropriate language, activity or other content (as determined by the Organiser at its sole discretion);
      <br>
      <br>vi. not contain, depict or refer to any content which disparages or puts the Organiser, Sponsors, the Competition or any other person or entity in a negative light (as determined by the Organiser’s in its sole discretion); and
      <br>
      <br>vii. not contain any content that violates any law or any third party’s rights, including but not limited to any intellectual property rights, privacy, personal data protection and intellectual property rights.
      <br>
      <br>
    </Para>

    <h4>2. Judging</h4>
    <Para>
      a. At the end of the 24-hour hacking period, the Participants will be given at least 30 minutes, (any request for additional time may be granted at the sole discretion of the Organiser) to set up their presentation booths. Each Participant or team with a Submission will be given up to two (2) minutes to present his/her/their Submission to a panel of judges. The order of the Participants’ or teams’ presentations will be determined by the Organiser.
      <br>
      <br>b. Participants are to explain how their Submission fulfils the following equally weighted judging criteria:
      <br>
      <br>i. Creativity – How unique or interesting the idea is;
      <br>
      <br>ii. Execution – How well the idea has been pitched and displayed at the booth;
      <br>
      <br>iii. Scalability – How economically sustainable the idea is (in an economic sense); and
      <br>
      <br>iv. Environmental Impact - How the idea impacts the environment.
      <br>
      <br>c. The judging panel for each Prize Category are to be confirmed.
      <br>
      <br>
    </Para>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Para from "@/components/Para.vue";

import closeModalMixin from "@/mixins/closeModalMixin";

export default {
  name: "rules-modal",
  components: {
    Modal,
    Para
  },
  props: {
    id: String
  },
  mixins: [closeModalMixin]
};
</script>

<style scoped>
.cancel {
  width: 20px;
  position: absolute;
  top: 0px;
  right: 4vw;
  cursor: pointer;
}

.cancel > path {
  fill: var(--color-title-text);
  transition: fill 0.6s ease-out;
}

h3 {
  font-size: 24px;
  font-family: var(--font-primary), sans-serif;
  color: var(--color-regular-text);
  margin-bottom: 30px;
  text-align: center;
  text-decoration: underline;
}

h4 {
  font-size: 24px;
  font-family: var(--font-primary), sans-serif;
  color: var(--color-regular-text);
  margin-bottom: 30px;
  text-decoration: underline;
}

@media (--mobile-narrow) {
  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 20px;
  }
}
</style>


