<template>
<div id=ulogin>
	<h2>用户登陆</h2>
	<button @click="login">用户</button>
	<form action="/service/login/user" method="POST" >
		手机号:<input type="text" name="tel"><br>
		密  码:<input type="password" name="password"><br>
	    <input type="submit" value="登陆">
	</form>
	<a href="/service/login/regist">用户注册:regist</a>
</div>
</template>

<script>
export default {
  name: 'ulogin',
  data () {
    return {
      msg: '欢迎使用云梯宝'
    }
  },
  methods:{
	login:function(){
		this.$router.push({ name: 'uhome', params:{
      		list:[
				{id:1,vid:'00000039',vname:'创业中心',pid:'00200137',pname:'1号楼1单元',Fbit:'0101000000010000010001100111100000000000000000000000000000000000'},
				{id:2,vid:'00000039',vname:'创业中心',pid:'00200138',pname:'1号楼2单元',Fbit:'0000001100010000010001100000000000000000000000000000000000000000'},
				{id:3,vid:'00000040',vname:'秦皇小区',pid:'00200139',pname:'3号楼3单元',Fbit:'0000110000010000010001100111100000000000000000000000000000000000'}]
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
