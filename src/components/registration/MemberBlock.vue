<template>
  <div class="member-block" :id="`member-block-${member.id}`">
    <div class="member-block-title" :id="`member-block-title-${member.id}`">
      <h2>{{`Member #${idx + 1}`}}</h2>
      <svg
        enable-background="new 0 0 47.971 47.971"
        viewBox="0 0 47.971 47.971"
        xmlns="http://www.w3.org/2000/svg"
        @click="removeMember(member.id)"
      >
        <path
          d="m28.228 23.986 18.864-18.864c1.172-1.171 1.172-3.071 0-4.242-1.172-1.172-3.07-1.172-4.242 0l-18.864 18.864-18.865-18.864c-1.172-1.172-3.07-1.172-4.242 0-1.172 1.171-1.172 3.071 0 4.242l18.865 18.864-18.865 18.864c-1.172 1.171-1.172 3.071 0 4.242.586.585 1.354.878 2.121.878s1.535-.293 2.121-.879l18.865-18.864 18.864 18.864c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879c1.172-1.171 1.172-3.071 0-4.242z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 451.85 257.57"
        xmlns="http://www.w3.org/2000/svg"
        @click="openAccordion(member.id)"
      >
        <path
          d="m225.92 354.71a31.59 31.59 0 0 1 -22.37-9.27l-194.28-194.28a31.64 31.64 0 0 1 44.73-44.75l171.9 171.91 171.93-171.91a31.64 31.64 0 0 1 44.74 44.75l-194.28 194.29a31.56 31.56 0 0 1 -22.37 9.26z"
          transform="translate(0 -97.14)"
        ></path>
      </svg>
    </div>
    <div class="member-block-content" :id="`member-block-content-${member.id}`">
      <FormInput
        type="text"
        label="*Name"
        name="individual-name"
        placeholder="Your beautiful name here :)"
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
        name="individual-dob"
        :model="member.dob"
        :onInput="validateAge"
        :onBlur="s => {
                    if (!validateFilled(s)) {
                        validateAge(s);
                    }
                }"
      />
      <FormInput
        type="text"
        label="*Email Address"
        name="individual-email"
        placeholder="No spam from us, promise!"
        :model="member.email"
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
        :model="member.org"
        :onBlur="validateFilled"
      />
      <FormInput
        type="text"
        label="Dietary Requirements"
        name="individual-diet"
        placeholder="Vegan/vegetarian/allergies/etc."
        :model="member.diet"
      />
      <Radio
        label="*What is your T-shirt size?"
        name="individual-shirt"
        :model="member.shirt"
        :options="[{id: 'individual-shirt-xs', value: 'XS', optionLabel: 'XS'}, 
                {id: 'individual-shirt-s', value: 'S', optionLabel: 'S'},
                {id: 'individual-shirt-m', value: 'M', optionLabel: 'M'},
                {id: 'individual-shirt-l', value: 'L', optionLabel: 'L'},
                {id: 'individual-shirt-xl', value: 'XL', optionLabel: 'XL'}]"
      />
    </div>
  </div>
</template>

<script>
import Radio from "@/components/registration/Radio.vue";
import FormInput from "@/components/registration/FormInput.vue";

export default {
  name: "member-block",
  components: {
    Radio,
    FormInput
  },
  props: {
    member: Object,
    idx: Number,
    openAccordion: Function,
    removeMember: Function,
    validateFilled: Function,
    validateAge: Function,
    validateEmail: Function
  }
};
</script>

<style scoped>
.member-block:first-of-type {
  margin-top: 50px;
}

.member-block {
  border: 2px solid var(--color-regular-text);
  padding: 20px 30px;
}

.member-block + .member-block {
  margin-top: 10px;
}

.member-block-title {
  display: flex;
}

.member-block-title > h2 {
  font-family: var(--font-primary), sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-regular-text);
  margin-right: auto;
}

.member-block-title svg:nth-child(2) {
  width: 17.5px;
  cursor: pointer;
}

.member-block-title svg:nth-child(3) {
  width: 25px;
  cursor: pointer;
  margin-left: 30px;
}

.member-block-title svg > path {
  fill: var(--color-regular-text);
}

.member-block-content {
  max-height: 0px;
  /* max-height: 999px; */
  overflow: hidden;
  transition: max-height 0.6s ease-out;
  /* padding-top: 50px; */
}

.member-block-content > div:first-child {
  margin-top: 50px;
}

.member-block-content > div:last-child {
  margin-bottom: 50px;
}
</style>


