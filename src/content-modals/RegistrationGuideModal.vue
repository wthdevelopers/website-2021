<template>
  <ContentModal id="registration-guide-modal">
    <div class="registration-guide-content">
      <Para :className="['registration-guide-note', 'guide-text-description']"
        >Note that all participants would need to submit a registration form.</Para
      >
      <div class="registration-guide-title-container">
        <SubHeader :className="['registration-guide-title', 'guide-text-title']">Do you have a team already?</SubHeader>
      </div>
      <div class="straight-line" />
      <div class="guide-content-container">
        <SubHeader :className="['guide-text', 'guide-text-title', 'yes-text']">Yes</SubHeader>
        <SubHeader :className="['guide-text', 'guide-text-title', 'no-text']">No</SubHeader>
        <Para :className="['guide-text', 'guide-text-description', 'has-team-text']">
          Get all your group members to fill up the form
          <Para
            className="guide-text-highlight"
            :onClick="
              () =>
                openNewTab(
                  'https://forms.office.com/Pages/ResponsePage.aspx?id=drd2NJDpck-5UGJImDFiPbne1iyIR1hKtYGeiPHQbEBUQ1lTQzZUU0UwQzhaRUtDSklZTlBaUEpYNy4u',
                )
            "
          >
            here!
          </Para>
        </Para>
        <Para :className="['guide-text', 'guide-text-description', 'join-slack-text']">
          Submit your email
          <Para
            className="guide-text-highlight"
            :onClick="
              () =>
                openNewTab(
                  'https://forms.office.com/Pages/ResponsePage.aspx?id=drd2NJDpck-5UGJImDFiPR24uD3WZ21BkLabbC4MqJJUQlpXUVU5R0pFNkdMWUdZQUhFOEIxVTY4My4u',
                )
            "
          >
            here
          </Para>
          to join the Slack channel to find a team!
        </Para>
        <Para :className="['guide-text', 'guide-text-description', 'reminder-text']">
          After forming a team, remember to come back to register
          <Para
            className="guide-text-highlight"
            :onClick="
              () =>
                openNewTab(
                  'https://forms.office.com/Pages/ResponsePage.aspx?id=drd2NJDpck-5UGJImDFiPbne1iyIR1hKtYGeiPHQbEBUQ1lTQzZUU0UwQzhaRUtDSklZTlBaUEpYNy4u',
                )
            "
          >
            here!
          </Para>
        </Para>
      </div>
    </div>
  </ContentModal>
</template>

<script>
import ContentModal from '@/components/ContentModal.vue';
import SubHeader from '@/components/SubHeader.vue';
import Para from '@/components/Para.vue';

export default {
  name: 'registration-guide-modal',
  components: {
    ContentModal,
    SubHeader,
    Para,
  },
  methods: {
    openNewTab: function(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
#registration-guide-modal {
  padding: 20px 20px 0;
}

.registration-guide-content {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.registration-guide-note {
  margin-bottom: 16px;
  text-align: center;
}

.registration-guide-title-container {
  border: 5px solid var(--color-accent);
  border-radius: 10px;
  padding: 12px 24px;
  text-align: center;
  max-width: 50%;
}

.registration-guide-title {
  border: none;
  line-height: normal;
}

.straight-line {
  height: 32px;
  width: 5px;
  background-color: var(--color-accent);
}

.guide-content-container {
  position: relative;
  height: 250px;
  border: 5px solid var(--color-accent);
  border-radius: 5px;
  width: 65%;
}

.guide-content-container:after {
  background-color: var(--slope-body-color);
  bottom: -8px;
  content: '';
  height: 50%;
  left: -8px;
  position: absolute;
  width: 50%;
}

.guide-text {
  background-color: var(--slope-body-color);
  border: none;
  line-height: normal;
  text-align: center;
  z-index: 2000;
}

.guide-text-highlight {
  border-bottom: 3px solid var(--color-subheader-text);
  line-height: 1;
  cursor: pointer;
  font-size: inherit;
}

.guide-text-highlight:hover {
  color: var(--color-subheader-text);
}

.yes-text {
  position: absolute;
  top: 15%;
  left: 0;
  transform: translateX(-50%);
}

.no-text {
  position: absolute;
  top: 15%;
  right: 0;
  transform: translateX(50%);
}

.has-team-text {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateX(-50%);
  width: 280px;
}

.join-slack-text {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateX(50%);
  width: 350px;
}

.reminder-text {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(60%);
  width: 60%;
}

@media (max-width: 1600px) {
  .has-team-text,
  .join-slack-text {
    width: 300px;
  }
}

@media (max-width: 1440px) {
  #registration-guide-modal {
    width: 80vw;
  }

  >>> .modal-slope-clausal {
    width: 80vw;
  }

  .has-team-text,
  .join-slack-text {
    width: 250px;
  }
}

@media (--desktop-narrow) {
  .reminder-text {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(60%);
  }

  .has-team-text,
  .join-slack-text {
    width: 200px;
  }

  .guide-text-title {
    font-size: 24px;
  }

  .guide-text-description {
    font-size: 20px;
  }
}

@media (--mobile-wide) {
  #registration-guide-modal {
    padding: 50px 8vw;
    height: 60vh;
    width: 90vw;
  }

  >>> .modal-slope-clausal {
    width: 90vw;
  }

  .yes-text,
  .no-text {
    top: 10%;
  }

  .has-team-text,
  .join-slack-text {
    top: 25%;
    width: 110px;
  }

  .guide-content-container {
    height: 300px;
  }
}

@media (--mobile-narrow) {
  #registration-guide-modal {
    padding: 50px 16px;
  }

  .guide-text-title {
    font-size: 20px;
  }

  .has-team-text,
  .join-slack-text {
    top: 25%;
    width: 110px;
  }

  .guide-text-description {
    font-size: 18px;
  }
}
</style>
