<template>
  <div class="hero-content">
    <div class="icon-wrapper">
      <WTHIcon />
      <div class="cloud-icon-wrapper">
        <CloudIcon />
      </div>
    </div>
    <h1>What The Hack: Environment</h1>
    <div class="hero-content-secondary">
      <div>
        <h2>18th - 19th September 2021</h2>
        <h2>Singapore University of Technology and Design</h2>
      </div>
      <a href="https://sutdwth21.devpost.com/project-gallery" class="register-button">View Submissions</a>
    </div>
    <RegistrationGuideModal />
  </div>
</template>

<script>
import openModalMixin from '@/mixins/openModalMixin';
import WTHIcon from '@/sections/hero/WTHIcon';
import CloudIcon from '@/sections/hero/CloudIcon';

export default {
  name: 'hero-content',
  components: {
    RegistrationGuideModal: () => import(/* webpackPrefetch: true */ '@/content-modals/RegistrationGuideModal'),
    WTHIcon,
    CloudIcon,
  },
  mixins: [openModalMixin],
};
</script>

<style scoped>
.hero-content {
  position: relative;
  height: 87.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-content > .icon-wrapper {
  width: calc(400px + 28vw);
  margin-left: 12vw;
  margin-bottom: 20px;
  position: relative;
}

.cloud-icon-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(80%);
  width: 23vw;
  max-width: 300px;
}

.hero-content h1 {
  font-family: var(--font-secondary), sans-serif;
  font-size: calc(3vw + 14px);
  font-weight: 900;
  color: var(--color-title-text);
  margin-left: 30vw;
  margin-bottom: 8px;
  transition: color 0.6s ease-out;
}

.hero-content-secondary {
  display: flex;
  margin-left: 30vw;
}

.hero-content h2 {
  font-family: var(--font-primary), sans-serif;
  font-size: calc(1vw + 10px);
  font-weight: 400;
  color: var(--color-title-text);
  transition: color 0.6s ease-out;
}

.register-button {
  display: block;
  align-items: center;
  margin-left: 20px;
  text-decoration: none;
  font-size: 24px;
  font-family: var(--font-secondary), sans-serif;
  font-weight: 700;
  background-color: var(--color-title-text);
  color: var(--color-cta-text);
  padding: 20px 36px;
  height: fit-content;
  transition: background-color 0.6s ease-out, color 0.6s ease-out;
  line-height: 1;
}

.register-button.register-button-disabled {
  cursor: not-allowed;
  background-color: var(--color-gray);
}

.caution-button {
  display: inline-flex;
  align-items: center;
  margin-left: 20px;
  text-decoration: none;
  font-size: 24px;
  font-family: var(--font-secondary), sans-serif;
  font-weight: 700;
  background-color: var(--color-accent);
  color: var(--color-caution-text);
  padding: 32px 40px;
  width: 265px;
  height: 0;
  transition: background-color 0.6s ease-out, color 0.6s ease-out;
  line-height: 0px;
}

@media (max-width: 1180px) {
  .caution-button {
    padding: 32px 31px;
  }
}

@media (--desktop-narrow) {
  .hero-content-secondary {
    display: flex;
    flex-direction: column;
  }

  .register-button {
    width: fit-content;
    margin-top: 30px;
    margin-left: 110px;
  }

  .caution-button {
    margin-top: 30px;
    margin-left: 110px;
  }

  .cloud-icon-wrapper {
    display: none;
  }
}

@media (--mobile-wide) {
  .hero-content > * {
    transform: translateY(-10vh);
  }

  .hero-content > .icon-wrapper {
    width: 80vw;
    margin-left: 8vw;
  }

  .hero-content > h1 {
    margin-left: 22vw;
  }

  .hero-content-secondary {
    margin-left: 22vw;
  }

  .register-button {
    font-size: 22px;
    padding: 18px 36px;
  }

  .caution-button {
    font-size: 22px;
    padding: 28px 35px;
    width: 240px;
  }
}

@media (--mobile-narrow) {
  .hero-content > svg {
  }

  .hero-content > h1 {
    margin-top: 30px;
    font-size: calc(3vw + 24px);
    margin-left: 0;
    text-align: center;
    padding: 0 30px;
    line-height: 1;
  }

  .hero-content-secondary {
    margin-top: 30px;
    margin-left: 0;
    text-align: center;
    padding: 0 30px;
  }

  .hero-content h2 {
    font-size: 16px;
  }

  .register-button {
    font-size: 16px;
    padding: 14px 28px;
    margin-left: auto;
    margin-right: auto;
  }

  .caution-button {
    font-size: 16px;
    padding: 22px 30px;
    width: 185px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
