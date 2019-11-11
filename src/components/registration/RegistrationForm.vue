<template>
  <div id="registration-form">
    <form id="registration-form-content" method="post" @submit="informIsSubmittingForm()">
      <button
        type="button"
        @click="goToPage('1')"
        class="top-button"
        v-if="page === '2'"
      >Previous Page</button>
      <p class="welcome" v-if="page === '1'">Hello!</p>
      <div v-if="page === '1'">
        <Radio
          label="*Are you registering as an individual or for a group?"
          name="format"
          :model="format"
          :onChange="informFormTouched"
          :options="[{id: 'format-individual', value: 'Individual', optionLabel: 'Individual'}, 
        {id: 'format-group', value: 'Group', optionLabel: 'Group'}]"
        />
      </div>
      <div v-if="page === '2'">
        <div v-if="format.value === 'Individual'">
          <Radio
            label="*Do you want us to help you form a group, or would you prefer going solo?"
            name="individual-need-group"
            :model="individualNeedGroup"
            :options="[{id: 'individual-need-group-true', value: 'True', optionLabel: 'Sure, help me find a group!'}, 
        {id: 'individual-need-group-false', value: 'False', optionLabel: 'No thanks, I prefer going solo!'}]"
          />
          <FormInput
            type="text"
            label="*Name"
            name="individual-name"
            placeholder="Your beautiful name here :)"
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
            :onInput="validateAge"
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
            placeholder="No spam from us, promise!"
            :model="individualEmail"
            :onInput="validateEmail"
            :onBlur="s => {
            if (!validateFilled(s)) {
                validateEmail(s, 'blur');
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
            v-if="individualNeedGroup.value === 'False'"
            type="text"
            label="*Team Name"
            name="individual-team-name"
            placeholder="Get creative here!"
            :model="individualTeamName"
            :onBlur="validateFilled"
          />
          <FormInput
            type="text"
            label="Dietary Requirements"
            name="individual-diet"
            placeholder="Vegan/vegetarian/allergies/etc."
            :model="individualDiet"
          />
          <Radio
            label="*What is your T-shirt size?"
            name="individual-shirt"
            :model="individualShirt"
            :options="[{id: 'individual-shirt-xs', value: 'XS', optionLabel: 'XS'}, 
        {id: 'individual-shirt-s', value: 'S', optionLabel: 'S'},
        {id: 'individual-shirt-m', value: 'M', optionLabel: 'M'},
        {id: 'individual-shirt-l', value: 'L', optionLabel: 'L'},
        {id: 'individual-shirt-xl', value: 'XL', optionLabel: 'XL'}]"
          />
          <div class="content-block">
            <label for="feedback">Any other questions/feedback?</label>
            <textarea maxlength="2540"/>
          </div>
          <Checkbox name="individual-confirm" :model="individualConfirm">
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
        </div>
        <div v-else>
          <FormInput
            type="text"
            label="*Team Name"
            name="group-team-name"
            placeholder="Get creative here!"
            :model="groupTeamName"
            :onBlur="validateFilled"
          />
          <div class="content-block" style="padding-bottom: 30px;">
            <label for="team-name">Team Members</label>
            <p class="additional-info">
              Each team can have up to 4 members. Please add members to the
              team (including yourself of course) and fill in all their necessary details.
            </p>

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
          </div>
          <div class="content-block">
            <label for="feedback">Any other questions/feedback?</label>
            <textarea maxlength="2540"/>
          </div>
          <Checkbox name="group-confirm" :model="groupConfirm">
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
        </div>
      </div>
      <button
        type="button"
        @click="() => {
            if (format.value) {
                goToPage('2');
            }
        }"
        class="bottom-button"
        v-if="page === '1'"
        :disabled="format.value ? null : ''"
      >Next Page</button>
      <button
        type="submit"
        class="bottom-button"
        v-if="page === '2'"
        :disabled="checkSubmitConditions()"
      >Submit</button>
    </form>
    <svg
      viewBox="0 0 1440 240.41"
      xmlns="http://www.w3.org/2000/svg"
      style="transform: translateY(-26px);"
    >
      <path
        d="m0 128 48 26.7c48 26.3 144 80.3 240 85.3s192-37 288-42.7c96-5.3 192 26.7 288 16 96-10.3 192-64.3 288-80 96-16.3 192 5.7 240 16l48 10.7v-160h-1440z"
        fill="#79c89f"
      ></path>
    </svg>
    <TNCModal id="form-tnc-modal"/>
    <RulesModal id="form-rules-modal"/>
    <ConfirmationModal
      id="form-member-remove-confirmation-modal"
      :positiveFunc="removeMember"
      :positiveFuncArgs="[removeCandidateID]"
    >Are you sure you want to remove Member #{{removeCandidatePos}}?</ConfirmationModal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Radio from "@/components/registration/Radio.vue";
import FormInput from "@/components/registration/FormInput.vue";
import Checkbox from "@/components/registration/Checkbox.vue";
import MemberBlock from "@/components/registration/MemberBlock.vue";
import TNCModal from "@/components/TNCModal.vue";
import RulesModal from "@/components/RulesModal.vue";
import ConfirmationModal from "@/components/ConfirmationModal.vue";

import validateFilledMixin from "@/mixins/validateFilledMixin";
import validateAgeMixin from "@/mixins/validateAgeMixin";
import validateEmailMixin from "@/mixins/validateEmailMixin";
import openModalMixin from "@/mixins/openModalMixin";

import { FormField, AgeFormField, EmailFormField, Member } from "@/interfaces";

export default Vue.extend({
  name: "registration-form",
  components: {
    Radio,
    FormInput,
    Checkbox,
    MemberBlock,
    TNCModal,
    RulesModal,
    ConfirmationModal
  },
  data() {
    return {
      page: "1",
      removeCandidateID: "",
      removeCandidatePos: null,
      format: { value: "" } as FormField,
      individualNeedGroup: { value: "", error: "" } as FormField,
      individualName: { value: "", error: "" } as FormField,
      individualDob: { value: "", error: "", success: false } as AgeFormField,
      individualEmail: {
        value: "",
        error: "",
        success: false
      } as EmailFormField,
      individualOrg: { value: "", error: "" } as FormField,
      individualShirt: { value: "" } as FormField,
      individualDiet: { value: "" } as FormField,
      individualTeamName: { value: "", error: "" } as FormField,
      groupTeamName: { value: "", error: "" } as FormField,
      individualConfirm: { value: "" } as FormField,
      groupConfirm: { value: "" } as FormField,
      members: [
        {
          id: "one",
          taken: false,
          name: { value: "", error: "" },
          dob: { value: "", error: "", success: false },
          email: { value: "", error: "", success: false },
          org: { value: "", error: "" },
          shirt: { value: "" },
          diet: { value: "" }
        },
        {
          id: "two",
          taken: false,
          name: { value: "", error: "" },
          dob: { value: "", error: "", success: false },
          email: { value: "", error: "", success: false },
          org: { value: "", error: "" },
          shirt: { value: "" },
          diet: { value: "" }
        },
        {
          id: "three",
          taken: false,
          name: { value: "", error: "" },
          dob: { value: "", error: "", success: false },
          email: { value: "", error: "", success: false },
          org: { value: "", error: "" },
          shirt: { value: "" },
          diet: { value: "" }
        },
        {
          id: "four",
          taken: false,
          name: { value: "", error: "" },
          dob: { value: "", error: "", success: false },
          email: { value: "", error: "", success: false },
          org: { value: "", error: "" },
          shirt: { value: "" },
          diet: { value: "" }
        }
      ] as Array<Member>,
      membersMemory: [] as Array<Member>
    };
  },
  mixins: [
    validateFilledMixin,
    validateAgeMixin,
    validateEmailMixin,
    openModalMixin
  ],
  methods: {
    informFormTouched(): void {
      window.formTouched = true;
    },
    informIsSubmittingForm(): void {
      window.isSubmittingForm = true;
    },
    checkSubmitConditions(): null | "" {
      if (this.format.value === "Individual") {
        if (this.individualNeedGroup.value === "True") {
          return this.individualName.value &&
            this.individualOrg.value &&
            this.individualShirt.value &&
            this.individualDob.success &&
            this.individualEmail.success &&
            this.individualConfirm.value
            ? null
            : "";
        } else if (this.individualNeedGroup.value === "False") {
          return this.individualName.value &&
            this.individualOrg.value &&
            this.individualTeamName.value &&
            this.individualShirt.value &&
            this.individualDob.success &&
            this.individualEmail.success &&
            this.individualConfirm.value
            ? null
            : "";
        } else {
          return "";
        }
      } else if (this.format.value === "Group") {
        if (
          this.groupTeamName.value &&
          this.groupConfirm.value &&
          this.membersMemory.length >= 2
        ) {
          return this.membersMemory
            .map(member => {
              return (
                member.name.value &&
                member.org.value &&
                member.shirt.value &&
                member.dob.success &&
                member.email.success
              );
            })
            .every(bool => bool)
            ? null
            : "";
        } else {
          return "";
        }
      } else {
        return "";
      }
    },
    goToPage(d: string): void {
      this.page = d;
    },
    openAccordion(a: string): void {
      let memberBlock = <HTMLElement>(
        document.querySelector(`#member-block-${a}`)
      );

      let memberBlockContent = <HTMLElement>(
        document.querySelector(`#member-block-content-${a}`)
      );
      let memberBlockTitle = <HTMLElement>(
        document.querySelector(`#member-block-title-${a}`)
      );
      let memberBlockTitleH2 = <HTMLElement>memberBlockTitle.children[0];
      let memberBlockTitleCancel = <SVGElement>memberBlockTitle.children[1];
      let memberBlockTitleArrow = <SVGElement>memberBlockTitle.children[2];
      let memberBlockTitleCancelPath = <SVGElement>(
        memberBlockTitleCancel.firstChild
      );
      let memberBlockTitleArrowPath = <SVGElement>(
        memberBlockTitleArrow.firstChild
      );

      if (
        memberBlockContent.style.maxHeight === "0px" ||
        !memberBlockContent.style.maxHeight
      ) {
        memberBlockContent.style.maxHeight = "2000px";
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
    addMembers(): void {
      for (let i = 0; i < this.members.length; i++) {
        if (!this.members[i].taken) {
          this.members[i].taken = !this.members[i].taken;
          this.membersMemory.push(this.members[i]);
          break;
        }
      }
    },
    removeMember(id: string): void {
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
    }
  }
});
</script>

<style>
#registration-form-content {
  transform: translateY(-26px);
  position: relative;
  background-color: var(--slope-body-color);
  transition: background-color 0.6s ease-out;
  padding: 150px 350px;
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
}

.top-button:disabled,
.bottom-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.welcome {
  position: absolute;
  left: 350px;
  top: 0;
  font-family: var(--font-primary), sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: var(--color-regular-text);
}

.top-button {
  left: 350px;
  top: 0;
}

.bottom-button {
  right: 350px;
  bottom: 0;
}

svg > path {
  fill: var(--slope-body-color);
  /* transition: fill 0.6s ease-out; */
}

/* FORM BLOCKS */

.content-block {
  position: relative;
  /* border: 1px solid yellow; */
}

.content-block + .content-block {
  margin-top: 100px;
}

/* INPUTS: TEXTAREA */

textarea {
  display: block;
  margin-top: 30px;
  background-color: transparent;
  border: 2px solid var(--color-regular-text);
  width: 700px;
  height: 350px;
  font-family: var(--font-secondary), sans-serif;
  font-size: 24px;
  font-weight: 900;
  color: var(--color-regular-text);
  padding: 10px 20px;
  resize: vertical;
}

textarea:focus {
  border: 2px solid transparent;
  color: var(--color-accent);
  outline: 2px solid var(--color-accent);
}

/* LABELS */

label {
  font-family: var(--font-primary), sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-regular-text);
}

/* OTHERS */

.additional-info {
  font-family: var(--font-primary), sans-serif;
  font-size: 20px;
  font-weight: 400;
  /* color: var(--color-regular-text); */
  color: #d3dbde;
  margin-top: 20px;
  padding: 0 10px;
}

.error-info {
  font-family: var(--font-primary), sans-serif;
  font-size: 20px;
  font-weight: 400;
  /* color: var(--color-regular-text); */
  color: #cc6675;
  margin-top: 20px;
  padding: 0 10px;
  height: 10px;
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
  font-size: 42px;
  font-weight: 900;
  color: var(--color-regular-text);
  background-color: var(--slope-body-color);
  border: none;
}

#add-member-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* #add-member-button:hover {
  color: lightgray;
} */
</style>

