<template>
  <div id="registration-form">
    <div class="registration-form-body">
      <FormButton
        linkAction="non-router"
        :onClick="{func: communicatePageChangeToParent, args: ['1']}"
        class="top-button"
        v-if="page === '2'"
      >Previous Page</FormButton>
      <p class="welcome" v-if="page === '1'">Hello!</p>
      <RegistrationContentBlock v-if="page === '1'">
        <Radio
          label="*Are you registering as an individual or for a group?"
          name="format"
          :model="format"
          :onChange="{func: informFormTouched, args: []}"
          :options="[{id: 'format-individual', value: 'Individual', optionLabel: 'Individual'}, 
        {id: 'format-group', value: 'Group', optionLabel: 'Group'}]"
        />
      </RegistrationContentBlock>
      <RegistrationContentBlock v-if="page === '2' && format.value === 'Individual'">
        <form
          id="registration-form-individual"
          name="registration-form-individual"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="registration-form-individual">
          <input type="hidden" name="bot-field">
          <Radio
            label="*Do you want us to help you form a group, or would you prefer going solo?"
            name="individual-need-group"
            :model="individualNeedGroup"
            :onChange="{func: validateFilled, args: [individualNeedGroup]}"
            :options="[{id: 'individual-need-group-true', value: 'True', optionLabel: 'Sure, help me find a group!'}, 
        {id: 'individual-need-group-false', value: 'False', optionLabel: 'No thanks, I prefer going solo!'}]"
          />
          <FormInput
            type="text"
            label="*Name"
            name="individual-name"
            placeholder="Your cool name :)"
            :model="individualName"
            :onBlur="validateFilled"
          />
          <FormInput
            additionalInfo="You need to be at least 13 years of age at the time of event 
        to be eligible to participate. If you are over 13 but under 18 years of age, 
        you will be eligible to participate only if you have parental consent (parental 
        consent forms will be sent out to you later)."
            type="date"
            label="*Date of Birth"
            name="individual-dob"
            placeholder="When is your birthday?"
            :model="individualDob"
            :onBlur="s => {
            if (!validateFilled(s)) {
                validateAge(s, 'blur');
            }
        }"
          />
          <FormInput
            type="text"
            label="*Email Address"
            name="individual-email"
            placeholder="No spam, promise!"
            :model="individualEmail"
            :onBlur="s => {
            if (!validateFilled(s)) {
                validateEmail(s);
            }
        }"
          />
          <FormInput
            type="text"
            label="*School/Company/Organisation"
            name="individual-org"
            placeholder="Where are you from?"
            :model="individualOrg"
            :onBlur="validateFilled"
          />
          <FormInput
            type="text"
            label="Dietary Requirements"
            name="individual-diet"
            placeholder="Halal/allergies/etc."
            :model="individualDiet"
          />
          <Radio
            label="*What is your T-shirt size?"
            name="individual-shirt"
            :model="individualShirt"
            :onChange="{func: validateFilled, args: [individualShirt]}"
            :options="[{id: 'individual-shirt-xs', value: 'XS', optionLabel: 'XS'}, 
        {id: 'individual-shirt-s', value: 'S', optionLabel: 'S'},
        {id: 'individual-shirt-m', value: 'M', optionLabel: 'M'},
        {id: 'individual-shirt-l', value: 'L', optionLabel: 'L'},
        {id: 'individual-shirt-xl', value: 'XL', optionLabel: 'XL'}]"
          />
          <Textbox
            label="Any other questions/feedback?"
            name="individual-others"
            :model="individualOthers"
          />
          <Checkbox
            name="individual-confirm"
            :model="individualConfirm"
            :onChange="{func: validateFilled, args: [individualConfirm]}"
          >
            I confirm that I am above 13 years of age and have read and agree to the
            <button
              id="form-tnc-modal-button-indiv"
              type="button"
              class="clause-buttons"
              @click="openModal('form-tnc-modal', 'form-tnc-modal-button-indiv')"
            >terms and conditions</button> and
            <button
              id="form-rules-modal-button-indiv"
              type="button"
              class="clause-buttons"
              @click="openModal('form-rules-modal', 'form-rules-modal-button-indiv')"
            >participants' rules</button> as stipulated
            by the organisers of What The Hack 2020.
          </Checkbox>
          <Checkbox
            name="individual-pdpa-confirm"
            :model="individualPDPAConfirm"
            :onChange="{func: validateFilled, args: [individualPDPAConfirm]}"
          >
            By submitting my details here, I agree that What The Hack 2020 may
            collect, use and disclose the information above, within the organising committee,
            for planning purposes. My personal data will not be retained and will be disposed
            appropriately upon the completion of this event.
          </Checkbox>
        </form>
      </RegistrationContentBlock>
      <RegistrationContentBlock v-if="page === '2' && format.value === 'Group'">
        <form
          id="registration-form-group"
          name="registration-form-group"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="registration-form-group">
          <input type="hidden" name="bot-field">
          <FormInput
            type="text"
            label="*Team Name"
            name="group-team-name"
            placeholder="Get creative here!"
            :model="groupTeamName"
            :onBlur="validateFilled"
          />
          <FormBlock style="padding-bottom: 30px;">
            <FormLabel :forValue="team-members">Team Members</FormLabel>
            <FormLabelSub>
              Each team can have up to 4 members. Please add members to the
              team (including yourself of course) and fill in all their necessary details.
            </FormLabelSub>

            <Accordion
              v-for="(member, idx) in membersMemory"
              :key="member.id"
              accordionName="members-accordion"
              :accordionIdx="idx"
              :accordionMaxIdx="membersMemory.length - 1"
              maxHeight="2600"
              :removeFunc="() => {
                removeCandidateID = member.id;
                removeCandidatePos = idx + 1;
                openModal('form-member-remove-confirmation-modal', `members-accordion-trigger-${idx}`);
              }"
            >
              <template v-slot:title>{{`Member #${idx + 1}`}}</template>
              <FormInput
                style="margin-top: 30px;"
                type="text"
                label="*Name"
                :name="`member-${member.id}-name`"
                placeholder="Your cool name :)"
                :model="member.name"
                :onBlur="validateFilled"
              />
              <FormInput
                additionalInfo="You need to be at least 13 years of age at the time of event 
                    to be eligible to participate. If you are over 13 but under 18 years of age, 
                    you will be eligible to participate only if you have parental consent (parental 
                    consent forms will be sent out to you later)."
                type="date"
                label="*Date of Birth"
                :name="`member-${member.id}-dob`"
                :model="member.dob"
                :onBlur="s => {
                    if (!validateFilled(s)) {
                        validateAge(s, 'blur');
                    }
                }"
              />
              <FormInput
                type="text"
                label="*Email Address"
                :name="`member-${member.id}-email`"
                placeholder="No spam, promise!"
                :model="member.email"
                :onBlur="s => {
                    if (!validateFilled(s)) {
                        validateEmail(s);
                    }
                }"
              />
              <FormInput
                type="text"
                label="*School/Company/Organisation"
                :name="`member-${member.id}-org`"
                placeholder="Where are you from?"
                :model="member.org"
                :onBlur="validateFilled"
              />
              <FormInput
                type="text"
                label="Dietary Requirements"
                :name="`member-${member.id}-diet`"
                placeholder="Halal/allergies/etc."
                :model="member.diet"
              />
              <Radio
                label="*What is your T-shirt size?"
                :name="`member-${member.id}-shirt`"
                :model="member.shirt"
                :onChange="{func: validateFilled, args: [member.shirt]}"
                :options="[{id: `member-${member.id}-shirt-xs`, value: 'XS', optionLabel: 'XS'}, 
                {id: `member-${member.id}-shirt-s`, value: 'S', optionLabel: 'S'},
                {id: `member-${member.id}-shirt-m`, value: 'M', optionLabel: 'M'},
                {id: `member-${member.id}-shirt-l`, value: 'L', optionLabel: 'L'},
                {id: `member-${member.id}-shirt-xl`, value: 'XL', optionLabel: 'XL'}]"
              />
            </Accordion>

            <button
              type="button"
              id="add-member-button"
              :disabled="membersMemory.length >= 4 ? '' : null"
              @click="addMembers"
            >
              <span
                style="display: inline-block; font-size: 50px; transform: translateY(3px); margin-right: 5px;"
              >+</span> Add Team Member
            </button>
          </FormBlock>
          <Textbox label="Any other questions/feedback?" name="group-others" :model="groupOthers"/>
          <Checkbox
            name="group-confirm"
            :model="groupConfirm"
            :onChange="{func: validateFilled, args: [groupConfirm]}"
          >
            I confirm that I am above 13 years of age and have read and agree to the
            <button
              id="form-tnc-modal-button-grp"
              type="button"
              class="clause-buttons"
              @click="openModal('form-tnc-modal', 'form-tnc-modal-button-grp')"
            >terms and conditions</button> and
            <button
              id="form-rules-modal-button-grp"
              type="button"
              class="clause-buttons"
              @click="openModal('form-rules-modal', 'form-rules-modal-button-grp')"
            >participants' rules</button> as stipulated
            by the organisers of What The Hack 2020.
          </Checkbox>
          <Checkbox
            name="group-pdpa-confirm"
            :model="groupPDPAConfirm"
            :onChange="{func: validateFilled, args: [groupPDPAConfirm]}"
          >
            By submitting my details here, I agree that What The Hack 2020 may
            collect, use and disclose the information above, within the organising committee,
            for planning purposes. My personal data will not be retained and will be disposed
            appropriately upon the completion of this event.
          </Checkbox>
        </form>
      </RegistrationContentBlock>
      <FormButton
        linkAction="non-router"
        :onClick="{func: communicatePageChangeToParent, args: ['2']}"
        class="bottom-button"
        v-if="page === '1'"
        :disabled="format.value ? null : ''"
      >Next Page</FormButton>
      <FormButton
        id="form-submission-confirmation-modal-button"
        linkAction="non-router"
        :onClick="{func: openModal, args: ['form-submission-confirmation-modal', 'form-submission-confirmation-modal-button']}"
        class="bottom-button"
        v-if="page === '2'"
      >Submit</FormButton>
      <FormError v-if="page === '2'" class="submission-error">{{submissionErrorMsg}}</FormError>
      <button type="submit" hidden/>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 240.4"
      style="transform: translateY(-27px);"
    >
      <path
        class="slope"
        d="M0 128l48 27c48 26 144 80 240 85s192-37 288-43c96-5 192 27 288 16 96-10 192-64 288-80s192 6 240 16l48 11V0H0z"
      ></path>
    </svg>
    <TNCModal id="form-tnc-modal"/>
    <RulesModal id="form-rules-modal"/>
    <ConfirmationModal
      id="form-member-remove-confirmation-modal"
      :positiveFunc="removeMember"
      :positiveFuncArgs="[removeCandidateID]"
    >Are you sure you want to remove Member #{{removeCandidatePos}}?</ConfirmationModal>
    <ConfirmationModal
      id="form-submission-confirmation-modal"
      :positiveFunc="() => {
        if (!validateAll()) {
          submitForm(`registration-form-${format.value ? (format.value === 'Individual' ? 'individual' : 'group') : null}`);
        }
      }"
    >Are you sure you want to submit the form?</ConfirmationModal>
  </div>
</template>

<script>
import RegistrationContentBlock from "@/components/RegistrationContentBlock.vue";
import Radio from "@/components/Radio.vue";
import FormButton from "@/components/FormButton.vue";
import FormInput from "@/components/FormInput.vue";
import Checkbox from "@/components/Checkbox.vue";
import Textbox from "@/components/Textbox.vue";
import FormBlock from "@/components/FormBlock.vue";
import FormLabel from "@/components/FormLabel.vue";
import FormLabelSub from "@/components/FormLabelSub.vue";
import FormError from "@/components/FormError.vue";
import Accordion from "@/components/Accordion.vue";

import validateFilledMixin from "@/mixins/validateFilledMixin";
import validateAgeMixin from "@/mixins/validateAgeMixin";
import validateEmailMixin from "@/mixins/validateEmailMixin";
import openModalMixin from "@/mixins/openModalMixin";

export default {
  name: "registration-form",
  components: {
    RegistrationContentBlock,
    Radio,
    FormButton,
    FormInput,
    Checkbox,
    Textbox,
    FormBlock,
    FormLabel,
    FormLabelSub,
    FormError,
    Accordion,
    TNCModal: () =>
      import(/* webpackPrefetch: true */ "@/components/TNCModal.vue"),
    RulesModal: () =>
      import(/* webpackPrefetch: true */ "@/components/RulesModal.vue"),
    ConfirmationModal: () =>
      import(/* webpackPrefetch: true */ "@/components/ConfirmationModal.vue")
  },
  props: {
    page: String
  },
  data() {
    return {
      removeCandidateID: "",
      removeCandidatePos: null,
      format: { value: "" },
      individualNeedGroup: { value: "", error: "" },
      individualName: { value: "", error: "" },
      individualDob: { value: "", error: "", success: false },
      individualEmail: {
        value: "",
        error: "",
        success: false
      },
      individualOrg: { value: "", error: "" },
      individualShirt: { value: "", error: "" },
      individualDiet: { value: "" },
      individualTeamName: { value: "", error: "" },
      groupTeamName: { value: "", error: "" },
      individualOthers: { value: "" },
      groupOthers: { value: "" },
      individualConfirm: { value: "", error: "" },
      groupConfirm: { value: "", error: "" },
      individualPDPAConfirm: { value: "", error: "" },
      groupPDPAConfirm: { value: "", error: "" },
      members: [
        {
          id: "one",
          taken: false,
          name: { value: "", error: "" },
          dob: { value: "", error: "", success: false },
          email: { value: "", error: "", success: false },
          org: { value: "", error: "" },
          shirt: { value: "", error: "" },
          diet: { value: "" }
        },
        {
          id: "two",
          taken: false,
          name: { value: "", error: "" },
          dob: { value: "", error: "", success: false },
          email: { value: "", error: "", success: false },
          org: { value: "", error: "" },
          shirt: { value: "", error: "" },
          diet: { value: "" }
        },
        {
          id: "three",
          taken: false,
          name: { value: "", error: "" },
          dob: { value: "", error: "", success: false },
          email: { value: "", error: "", success: false },
          org: { value: "", error: "" },
          shirt: { value: "", error: "" },
          diet: { value: "" }
        },
        {
          id: "four",
          taken: false,
          name: { value: "", error: "" },
          dob: { value: "", error: "", success: false },
          email: { value: "", error: "", success: false },
          org: { value: "", error: "" },
          shirt: { value: "", error: "" },
          diet: { value: "" }
        }
      ],
      membersMemory: [],
      submissionErrorMsg: ""
    };
  },
  mixins: [
    validateFilledMixin,
    validateAgeMixin,
    validateEmailMixin,
    openModalMixin
  ],
  methods: {
    communicatePageChangeToParent(page) {
      this.$emit("page-change-event", page);
    },
    informFormTouched() {
      window.formTouched = true;
    },
    informIsSubmittingForm() {
      window.isSubmittingForm = true;
    },
    validateAll() {
      let testNum = 0;
      let validationConclusion = "";
      if (this.format.value === "Individual") {
        testNum += this.validateFilled(this.individualNeedGroup);
        testNum += this.validateFilled(this.individualName);
        testNum += this.validateFilled(this.individualOrg);
        testNum += this.validateFilled(this.individualShirt);
        testNum += this.validateFilled(this.individualConfirm);
        testNum += this.validateFilled(this.individualPDPAConfirm);

        if (!this.validateFilled(this.individualDob)) {
          testNum += this.validateAge(this.individualDob);
        } else {
          testNum++;
        }
        if (!this.validateFilled(this.individualEmail)) {
          testNum += this.validateEmail(this.individualEmail);
        } else {
          testNum++;
        }

        if (testNum) {
          validationConclusion =
            "There are some incomplete fields or invalid responses.";
        }
      } else if (this.format.value === "Group") {
        if (this.membersMemory.length >= 2) {
          testNum += this.validateFilled(this.groupTeamName);
          testNum += this.validateFilled(this.groupConfirm);
          testNum += this.validateFilled(this.groupPDPAConfirm);

          this.membersMemory.forEach(member => {
            testNum += this.validateFilled(member.name);
            testNum += this.validateFilled(member.org);
            testNum += this.validateFilled(member.shirt);

            if (!this.validateFilled(member.dob)) {
              testNum += this.validateAge(member.dob);
            } else {
              testNum++;
            }
            if (!this.validateFilled(member.email)) {
              testNum += this.validateEmail(member.email);
            } else {
              testNum++;
            }
          });

          if (testNum) {
            validationConclusion =
              "There are some incomplete fields or invalid responses.";
          }
        } else {
          validationConclusion =
            "If you are signing up as a team, you need at least two members (Duhhh!).";
        }
      }
      this.submissionErrorMsg = validationConclusion;
      return validationConclusion;
    },
    addMembers() {
      for (let i = 0; i < this.members.length; i++) {
        if (!this.members[i].taken) {
          this.members[i].taken = !this.members[i].taken;
          this.membersMemory.push(this.members[i]);
          break;
        }
      }
      setTimeout(() => {
        document.querySelector("#members-accordion-trigger-0").focus();
      }, 100);
    },
    removeMember(id) {
      for (let i = 0; i < this.members.length; i++) {
        if (this.members[i].id === id) {
          this.members[i].taken = !this.members[i].taken;

          this.members[i].name.value = "";
          this.members[i].name.error = "";

          this.members[i].dob.value = "";
          this.members[i].dob.error = "";
          this.members[i].dob.success = false;

          this.members[i].email.value = "";
          this.members[i].email.error = "";
          this.members[i].email.success = false;

          this.members[i].org.value = "";
          this.members[i].org.error = "";

          this.members[i].shirt.value = "";
          this.members[i].shirt.error = "";

          this.members[i].diet.value = "";
          this.members[i].diet.error = "";
          break;
        }
      }

      this.membersMemory = this.membersMemory.filter(
        member => member.id !== id
      );

      setTimeout(() => {
        document.querySelector("#members-accordion-trigger-0").focus();
      }, 100);
    },
    submitForm(id) {
      let form = document.getElementById(id);
      this.informIsSubmittingForm();
      fetch(form.action, {
        method: "POST",
        body: new URLSearchParams(new FormData(form))
      })
        .then(() => {
          let registeredFormat = this.format.value;
          let registeredName =
            this.format.value === "Individual"
              ? this.individualName.value
              : this.groupTeamName.value;
          let registeredEmails = [];
          if (this.format.value === "Individual") {
            registeredEmails.push(this.individualEmail.value);
          } else {
            this.membersMemory.forEach(member => {
              registeredEmails.push(member.email.value);
            });
          }
          window.registeredInfo = {
            format: registeredFormat,
            name: registeredName,
            emails: registeredEmails
          };

          this.$router.push({
            name: "registration-end",
            params: {
              outcome: "success"
            }
          });
        })
        .catch(() => {
          this.$router.push({
            name: "registration-end",
            params: {
              outcome: "failure"
            }
          });
        });
    }
  }
};
</script>


<style scoped>
.registration-form-body {
  transform: translateY(-26px);
  position: relative;
  /* border: 1px solid red; */
}

.top-button,
.bottom-button {
  position: absolute;
  z-index: 1;
}

.welcome {
  position: absolute;
  left: 24vw;
  top: 50px;
  font-family: var(--font-primary), sans-serif;
  font-size: 46px;
  font-weight: 700;
  color: var(--color-regular-text);
  z-index: 1;
}

.top-button {
  left: 24vw;
  top: 50px;
}

.bottom-button {
  right: 24vw;
  bottom: 70px;
}

svg > path {
  fill: var(--slope-body-color);
  /* transition: fill 0.6s ease-out; */
}

.clause-buttons {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  background-color: transparent;
  border: none;
  border-bottom: 1.5px dashed var(--color-regular-text);
  cursor: pointer;
}

#add-member-button {
  display: inline-block;
  cursor: pointer;
  margin-top: 50px;
  font-family: var(--font-secondary), sans-serif;
  font-size: 40px;
  font-weight: 900;
  color: var(--color-regular-text);
  background-color: var(--slope-body-color);
  border: none;
}

#add-member-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.submission-error {
  position: absolute;
  right: 24vw;
  bottom: 40px;
}

@media (--desktop-narrow) {
  .welcome {
    font-size: 40px;
    left: 16vw;
  }

  #add-member-button {
    font-size: 34px;
  }

  .top-button {
    left: 16vw;
  }

  .bottom-button {
    right: 16vw;
  }

  .submission-error {
    right: 16vw;
  }
}

@media (--mobile-narrow) {
  .welcome {
    font-size: 24px;
    left: 30px;
  }

  .top-button,
  .bottom-button {
    font-size: 20px;
  }

  .top-button {
    left: 30px;
  }

  .bottom-button {
    right: 30px;
  }

  .submission-error {
    left: 30px;
  }

  #add-member-button {
    font-size: 24px;
  }
}
</style>

