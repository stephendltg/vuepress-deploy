<template>
  <small id='VuePressVersioning'>
    Using vuepress version {{loc.version}}
    <span v-if="raw">
      <span v-if="upToDate >= 0">✅</span>
      <span v-else>⚠️</span>
      , latest version is {{raw.version}}
      </span>
  </small>
</template>

<script>
/*
For more information, see [Him & Her](https://himandher.me)

{{$page.title}}

<div class="highlighted">
    <TextMagic/>
</div>
<img :src="$withBase('/logo.png')" alt="foo">
*/
export default {
  name: "TextMagic",
  data() {
    return {
      loc: { version: 2},
      raw: { version: 35},
      upToDate: true
    };
  },
  computed: {

  },
  async mounted() {
    console.log('test')
  }
};
</script>

<style scoped>
#vuepress_versioning {
  color: grey;
  border-top: 2px solid grey;
}
</style>