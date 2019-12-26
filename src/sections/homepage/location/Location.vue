<template>
  <section id="location" title="Location">
    <div class="location-body">
      <SectionHeader>Location</SectionHeader>
      <div class="location-content">
        <div class="location-content-main">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.724908687625!2d103.96194377917459!3d1.3414140115758566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssutd!5e0!3m2!1sen!2ssg!4v1525927478994"
            width="600"
            height="450"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="location-content-aside">
          <div class="aside-block" style="margin-bottom: 15px">
            <Para class="aside-refer">We are at <strong>8 Somapah Road, Singapore 487372</strong>.</Para>
          </div>
          <div class="aside-block">
            <SubHeader class="aside-number">By Train</SubHeader>
            <Para
              class="aside-refer"
              style="margin-top: 15px; margin-bottom: 15px"
              >Alight at
              <span>Upper Changi MRT Station</span> (DT34) and take
              Exit B – our campus will be on your left when you exit the station</Para
            >
          </div>
          <div class="aside-block">
            <SubHeader class="aside-number">By Bus</SubHeader>
            <Para class="aside-refer" style="margin-top: 15px" >Alight at one of the bus stops along Somapah Road and walk to our
              Campus.
              <br />
              Buses available: 2, 5, 20, 24</Para
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from "../../../components/SectionHeader";
import Para from "@/components/Para";
import SubHeader from "@/components/SubHeader";

export default {
  name: "location",
  components: {
    SubHeader,
    Para,
    SectionHeader
  }
};
</script>

<style scoped>
#location {
  position: relative;
}

.location-body {
  background-color: var(--slope-body-color);
  width: 100%;
  padding-top: 50px;
  transform: translateY(-1px);
  transition: background-color 0.6s ease-out;
}

.location-content {
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
  margin-top: 30px;
}

.location-content-aside {
  position: relative;
  z-index: 1;
  width: 38%;
  align-self: center;
}

.aside-number {
}

.aside-refer {
}

.aside-block + .aside-block {
  margin-top: 20px;
}

iframe {
  width: 32vw;
  height: 40vw;
  margin: auto;
}

@media (--desktop-narrow) {
  .location-content {
    padding: 0 100px;
    flex-direction: column;
  }
  iframe {
    width: 80vw;
    height: 50vw;
    margin: auto;
  }
}

@media (--mobile-wide) {
  .location-content {
    flex-direction: column;
  }

  .location-content-main {
    width: 100%;
    margin-bottom: 30px;
  }

  .location-content-aside {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .aside-block + .aside-block {
    margin-top: 0px;
    /* margin-left: 20px; */
  }

  .aside-block {
    text-align: center;
  }

  .aside-number {
    font-size: calc(5px + 2.5vw);
  }

  .aside-refer {
    font-size: calc(5px + 1.5vw);
    align-self: center;
  }

  iframe {
    width: 80vw;
    height: 50vw;
    margin: auto;
  }
}

@media (--mobile-narrow) {
  #location {
    padding-bottom: 100px;
  }

  iframe {
    width: 80vw;
    height: 50vw;
    margin: auto;
  }

  .location-content {
    padding: 0 30px;
  }
}
</style>
