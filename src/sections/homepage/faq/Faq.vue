<template>
  <div id="faq">
    <SectionHeader>FAQs</SectionHeader>
    <div class="faq-content">
      <Accordion v-for="(item, idx) in faqArr" :key="idx" :accordionID="idx" maxHeight="600">
        <template v-slot:title>{{item.title}}</template>
        <Para style="margin: 30px 0 20px 0;">{{item.content}}</Para>
      </Accordion>
    </div>
    <svg
      style="transform: translateY(5.5px);"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        class="slope"
        d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,213.3C840,213,960,171,1080,144C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import Para from "@/components/Para.vue";
import Accordion from "@/components/Accordion.vue";

export default {
  name: "faq",
  components: {
    SectionHeader,
    Para,
    Accordion
  },
  data() {
    return {
      faqArr: [
        {
          title: "Who is eligible to participate?",
          content: `You need to be at least 13 years of age at the time of event 
          to be eligible to participate. If you are over 13 but under 18 years of age, 
          you will be eligible to participate only if you have parental consent (Please 
          print out the consent and indemnity form for your parent’s signature and bring 
          it on the day of the hackathon).`
        },
        {
          title: "Is this hackathon free?",
          content: `Yes, this hackathon is completely free. Come down and have fun, 
          you never know what your ideas might turn into!`
        },
        {
          title: "Are the themes open to interpretation?",
          content: `Yes, you can decide how you want to define your problem statement. 
          If you are unsure of any ideas, you may approach the organizers for 
          clarification at the hackathon!`
        },
        {
          title: "Can I start ideating before the competition?",
          content: `Yes, you can begin conceptualizing your ideas or planning your 
          approach to the themes before the competition. However only work done on the 
          prototype during the competition itself will be judged.`
        },
        {
          title: "Can I participate as an individual?",
          content: `Sure! You can sign up and particpate solely as an individual, or if
          you would like to, you could sign up as an individual and request for a group
          during registration and we will help you find a group!`
        },
        {
          title: "Where is the hackathon held and how can I get there?",
          content: `What The hack 2020 will be held in our lovely SUTD campus as usual!
          You can easily get here by public transport - you can ride the Downtown Line 
          all the way to DT34 Upper Changi MRT and reach our school from an underground 
          pass via Exit E or takes Buses 2, 5 and 24 which are served by the bus stop 
          right outside our school. Alternatively, If you are driving here, you can park 
          at our school's basement carpark.`
        },
        {
          title: "What should I bring to the event?",
          content: `Please bring your computers. We are in the process of securing 
          graphics-ready workstations for development and they should be available at the event! 
          Should you expect to use additional prototyping materials, such as Arduinos, electronics 
          and fabrication materials, do bring your own, or let us know before the event and we 
          might be able to help.`
        },
        {
          title: "How do we handle Intellectual Property (IP)?",
          content: `Please refer to the Terms and Conditions of the Competition with regards to IP.`
        },
        {
          title: "My question can't be found in the the FAQs!",
          content: `For any further queries or clarifications, either drop us a message via the contact
          form below or feel free to email us at whatthehack@sutd.edu.sg.`
        }
      ]
    };
  }
};
</script>

<style scoped>
.faq-content {
  margin: 0 150px;
}

@media (--desktop-narrow) {
  .faq-content {
    margin: 0 100px;
  }
}

@media (--mobile-narrow) {
  .faq-content {
    margin: 0 30px;
  }
}
</style>


