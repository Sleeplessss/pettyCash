<template lang="html">
<v-app>
  <v-content>
    <h1>{{msg}}</h1>
    <v-btn color="success">Success</v-btn>
  </v-content>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>