<template>
  <div class="hello">
    <ul>
      <li>
        <router-link to="/alogin">公司</router-link>
      </li>
      <li>
        <router-link to="/mlogin">代理商</router-link>
      </li>
      <li>
        <router-link to="/vlogin">物业</router-link>
      </li>
      <li>
        <router-link to="/ulogin">用户</router-link>
      </li>
      <li>
        <a href="/api/">用户</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎使用云梯宝'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
