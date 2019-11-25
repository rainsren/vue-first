<template>
<div id=alogin>
	<h2>企业终端登陆</h2>
	<button @click="login">企业</button>
	<form action="/service/login/admin" method="POST" >
		登录名:<input type="text" name="name"><br>
		密  码:<input type="password" name="password"><br>
	    <input type="submit" value="登陆">
	</form>
</div>
</template>


<script>
export default {
  name: 'alogin',
  data () {
    return {
    }
  },
  methods:{
	login:function(){
		this.$router.push({ name: 'ahome', params:{
    }})
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