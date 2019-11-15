<template>
  <div id="registration-form">
    <div class="registration-form-body">
      <button
        type="button"
        @click="$emit('page-change-event', '1')"
        class="top-button"
        v-if="page === '2'"
      >Previous Page</button>
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
              type="button"
              class="clause-buttons"
              @click="openModal('form-tnc-modal')"
            >terms and conditions</button> and
            <button
              type="button"
              class="clause-buttons"
              @click="openModal('form-rules-modal')"
            >participants' rules</button> as stipulated
            by the organisers of What The Hack 2020.
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

            <MemberBlock
              v-for="(member, idx) in membersMemory"
              :key="member.id"
              :member="member"
              :idx="idx"
              :openAccordion="openAccordion"
              :removeMember="removeMember"
              :commenceRemovalSeq="() => {
                removeCandidateID = member.id;
                removeCandidatePos = idx + 1;
                openModal('form-member-remove-confirmation-modal');
              }"
              :validateFilled="validateFilled"
              :validateAge="validateAge"
              :validateEmail="validateEmail"
            />

            <button
              type="button"
              id="add-member-button"
              :disabled="membersMemory.length >= 4 ? '' : null"
              @click="addMembers()"
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
              type="button"
              class="clause-buttons"
              @click="openModal('form-tnc-modal')"
            >terms and conditions</button> and
            <button
              type="button"
              class="clause-buttons"
              @click="openModal('form-rules-modal')"
            >participants' rules</button> as stipulated
            by the organisers of What The Hack 2020.
          </Checkbox>
        </form>
      </RegistrationContentBlock>
      <button
        type="button"
        @click="() => {
            if (format.value) {
                $emit('page-change-event', '2');
            }
        }"
        class="bottom-button"
        v-if="page === '1'"
        :disabled="format.value ? null : ''"
      >Next Page</button>
      <button
        type="button"
        class="bottom-button"
        v-if="page === '2'"
        @click="openModal('form-submission-confirmation-modal');"
      >Submit</button>
      <FormError v-if="page === '2'" class="submission-error">{{submissionErrorMsg}}</FormError>
      <button type="submit" hidden/>
    </div>
    <svg
      viewBox="0 0 1440 240.41"
      xmlns="http://www.w3.org/2000/svg"
      style="transform: translateY(-26px);"
    >
      <path
        d="m0 128 48 26.7c48 26.3 144 80.3 240 85.3s192-37 288-42.7c96-5.3 192 26.7 288 16 96-10.3 192-64.3 288-80 96-16.3 192 5.7 240 16l48 10.7v-160h-1440z"
        class="slope"
        fill="#3f626d"
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
          informIsSubmittingForm();
          submitForm(`registration-form-${format.value ? (format.value === 'Individual' ? 'individual' : 'group') : null}`);
        }
      }"
    >Are you sure you want to submit the form?</ConfirmationModal>
  </div>
</template>

<script>
import RegistrationContentBlock from "@/components/registration/RegistrationContentBlock.vue";
import Radio from "@/components/registration/Radio.vue";
import FormInput from "@/components/registration/FormInput.vue";
import Checkbox from "@/components/registration/Checkbox.vue";
import Textbox from "@/components/registration/Textbox.vue";
import FormBlock from "@/components/registration/FormBlock.vue";
import FormLabel from "@/components/registration/FormLabel.vue";
import FormLabelSub from "@/components/registration/FormLabelSub.vue";

import FormError from "@/components/registration/FormError.vue";

import MemberBlock from "@/components/registration/MemberBlock.vue";
import TNCModal from "@/components/TNCModal.vue";
import RulesModal from "@/components/RulesModal.vue";
import ConfirmationModal from "@/components/ConfirmationModal.vue";

import validateFilledMixin from "@/mixins/validateFilledMixin";
import validateAgeMixin from "@/mixins/validateAgeMixin";
import validateEmailMixin from "@/mixins/validateEmailMixin";
import openModalMixin from "@/mixins/openModalMixin";

export default {
  name: "registration-form",
  components: {
    RegistrationContentBlock,
    Radio,
    FormInput,
    Checkbox,
    Textbox,
    FormBlock,
    FormLabel,
    FormLabelSub,
    FormError,
    MemberBlock,
    TNCModal,
    RulesModal,
    ConfirmationModal
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
    informFormTouched() {
      window.formTouched = true;
    },
    informIsSubmittingForm() {
      window.isSubmittingForm = true;
    },
    validateAll() {
      let testString = "";
      let validationConclusion = "";
      if (this.format.value === "Individual") {
        testString = this.validateFilled(this.individualNeedGroup);
        testString = this.validateFilled(this.individualName);
        testString = this.validateFilled(this.individualOrg);
        testString = this.validateFilled(this.individualShirt);
        testString = this.validateFilled(this.individualConfirm);

        if (!this.validateFilled(this.individualDob)) {
          testString = this.validateAge(this.individualDob);
        } else {
          testString = "invalid";
        }
        if (!this.validateFilled(this.individualEmail)) {
          testString = this.validateEmail(this.individualEmail);
        } else {
          testString = "invalid";
        }

        if (testString) {
          validationConclusion =
            "There are some incomplete fields or invalid responses.";
        }
      } else if (this.format.value === "Group") {
        if (this.membersMemory.length >= 2) {
          testString = this.validateFilled(this.groupTeamName);
          testString = this.validateFilled(this.groupConfirm);

          this.membersMemory.forEach(member => {
            testString = this.validateFilled(member.name);
            testString = this.validateFilled(member.org);
            testString = this.validateFilled(member.shirt);

            if (!this.validateFilled(member.dob)) {
              testString = this.validateAge(member.dob);
            } else {
              testString = "invalid";
            }
            if (!this.validateFilled(member.email)) {
              testString = this.validateEmail(member.email);
            } else {
              testString = "invalid";
            }
          });

          if (testString) {
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
    openAccordion(a) {
      let memberBlock = document.querySelector(`#member-block-${a}`);

      let memberBlockContent = document.querySelector(
        `#member-block-content-${a}`
      );
      let memberBlockTitle = document.querySelector(`#member-block-title-${a}`);
      let memberBlockTitleH2 = memberBlockTitle.children[0];
      let memberBlockTitleCancel = memberBlockTitle.children[1];
      let memberBlockTitleArrow = memberBlockTitle.children[2];
      let memberBlockTitleCancelPath = memberBlockTitleCancel.firstChild;
      let memberBlockTitleArrowPath = memberBlockTitleArrow.firstChild;

      if (
        memberBlockContent.style.maxHeight === "0px" ||
        !memberBlockContent.style.maxHeight
      ) {
        memberBlockContent.style.maxHeight = "2600px";
        memberBlock.style.border = "2px solid var(--color-accent)";
        memberBlockTitleH2.style.color = "var(--color-accent)";
        memberBlockTitleCancelPath.style.fill = "var(--color-accent)";
        memberBlockTitleArrowPath.style.fill = "var(--color-accent)";
      } else {
        memberBlockContent.style.maxHeight = "0px";
        setTimeout(() => {
          memberBlock.style.border = "2px solid var(--color-regular-text)";
          memberBlockTitleH2.style.color = "var(--color-regular-text)";
          memberBlockTitleCancelPath.style.fill = "var(--color-regular-text)";
          memberBlockTitleArrowPath.style.fill = "var(--color-regular-text)";
        }, 600);
      }
    },
    addMembers() {
      for (let i = 0; i < this.members.length; i++) {
        if (!this.members[i].taken) {
          this.members[i].taken = !this.members[i].taken;
          this.membersMemory.push(this.members[i]);
          break;
        }
      }
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
    },
    submitForm(id) {
      let form = document.getElementById(id);
      form.submit();
    }
  }
};
</script>


<style>
.registration-form-body {
  transform: translateY(-26px);
  position: relative;
  /* border: 1px solid red; */
}

.top-button,
.bottom-button {
  cursor: pointer;
  position: absolute;
  font-family: var(--font-primary), sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--slope-body-color);
  padding: 4px 20px;
  background-color: var(--color-regular-text);
  border: none;
  z-index: 1;
}

.top-button:disabled,
.bottom-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.welcome {
  position: absolute;
  left: 24vw;
  top: 0;
  font-family: var(--font-primary), sans-serif;
  font-size: 46px;
  font-weight: 700;
  color: var(--color-regular-text);
  z-index: 1;
}

.top-button {
  left: 24vw;
  top: 0;
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

@media only screen and (max-width: 1000px) {
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

@media only screen and (max-width: 570px) {
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

