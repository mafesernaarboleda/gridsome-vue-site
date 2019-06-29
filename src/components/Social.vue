<template>
  <div class="social">
    <a :href="socialLinks.github" target="_blank">
      <github-icon />
    </a>
    <a :href="socialLinks.twitter" target="_blank">
      <twitter-icon />
    </a>
    <a :href="socialLinks.mailto" target="_blank">
      <mail-icon />
    </a>
  </div>
</template>

<script>
import { GithubIcon, TwitterIcon, MailIcon } from 'vue-feather-icons'

import data from '~/data/social.json'

export default {
  components: {
    GithubIcon,
    TwitterIcon,
    MailIcon
  },
  data () {
    const { socialLinks } = data;
    return {
      socialLinks
    }
  }
};
</script>

<style>
 .social{
  display: flex;
  justify-items: center;
  margin-top: 40px;
  left: 0;
  right: 0;
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 7px;
  transition: all 0.5s;
}
 a:hover{
    width: 50px;
    height: 50px;
    background: #fff;
 }
 a:hover svg{
     stroke: #FF5961;
     transform: scale(1.2); 
 }
svg {
    transition: all 0.5s;
    stroke: #fff;
}
</style>