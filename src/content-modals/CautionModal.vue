<template>
  <ContentModal :id="id">
    <h3>Event cancelled due to recent developments in 2019-nCoV (2019 Novel Coronavirus) situation</h3>
    <Para>
      Due to the recent developments in the 2019-nCoV situation, in which Singapore has raised the DORSCON
      level to orange, it is with a heavy heart that we have to call What The Hack 2020: Environment off.
      Nonetheless, we thank you for your assistance and support thus far and we apologize for all the
      inconvenience we have caused.
    </Para>
    <br>
    <br>
    <Para>What The Hack 2020 Organising Committee</Para>
    <!-- <h3>
      Precautionary measures taken to safeguard our community against the novel
      Coronavirus (2019-nCoV)
    </h3>
    <Para>We would require all participants to declare their travel history for the last 14 days.</Para>
    <br>
    <br>
    <Para>
      Do note that visitors who have visited Mainland China within the last 14
      days will not be allowed to be physically present to participate in What
      The Hack 2020: Environment.
    </Para>
    <br>
    <br>
    <Para>
      For those who have visited mainland China within the last 14 days, do
      drop us an email to either inform us that:
      <br>1. You will not be participating.
      <br>2. You will be participating remotely (i.e. from your home).
    </Para>
    <br>
    <br>
    <Para>
      Do note that at least 1 member from the team must be present during the
      exhibition and pitches made during the exhibition must be done in person.
      Any participant who is not feeling well should take the weekend to rest
      and recuperate.
    </Para>
    <br>
    <br>
    <Para>
      The following documents are provided in the confirmation email but are placed here for participants who still require them.
      <br>
      <br>
      <a
        href="https://storage.googleapis.com/website-hosting-2020/Travel%20Declaration%20Form.pdf"
      >1. Travel Declaration Form</a>
      <br>
      <br>
      <a
        href="https://storage.googleapis.com/website-hosting-2020/WTH2020%20Consent%20Form%20(18%20and%20above).pdf"
      >2. WTH2020 Consent Form (18 and above)</a>
      <br>
      <br>
      <a
        href="https://storage.googleapis.com/website-hosting-2020/WTH2020%20Consent%20Form%20(18%20and%20above).pdf"
      >3. WTH2020 Consent Form (Under 18)</a>
    </Para>-->
  </ContentModal>
</template>

<script>
import ContentModal from "@/components/ContentModal.vue";
import Para from "@/components/Para.vue";

export default {
  name: "caution-modal",
  components: {
    ContentModal,
    Para
  },
  props: {
    id: String
  }
};
</script>

<style scoped>
h3 {
  font-size: 24px;
  font-family: var(--font-primary), sans-serif;
  color: var(--color-regular-text);
  margin-bottom: 30px;
  text-align: center;
  text-decoration: underline;
}

@media (--mobile-narrow) {
  h3 {
    font-size: 20px;
  }
}
</style>
