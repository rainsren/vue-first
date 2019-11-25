<template>
<div id="amids">
	<div id="header">
		<h2>代理商列表ddd</h2>
    </div>
	<button @click="add">添加</button>
	<table class="table table-bordered table-hover table-striped">
		<thead>
			<th>编号</th>
			<th>电话</th>
			<th>登录名</th>
			<th>备注</th>
			<th>允许</th>
			<th>操作</th>
		</thead>
		<tbody>
			<tr v-for="item in list" :key="item.id">
				<td>{{item.mid}}</td>
				<td>{{item.mtel}}</td>
				<td>{{item.mname}}</td>
				<td>{{item.note}}</td>
				<td>{{item.enable}}</td>
				<td>
					<button @click="edit">修改</button>
					<button @click="del">删除</button>
				</td>
			</tr>
		</tbody>
	</table>
	<div v-for="site in info" :key="site.id">{{ site.name }}</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'amids',
  data () {
    return {
	    list:this.$route.params.mlist,
	    info:[{id:1,name:'1234684966'},
		    {id:2,name:'132468498'},
		    {id:3,name:'135486451'}]
	  /*list:[
		    {vid:1,vtel:'1234684966',vname:'张三',note:'dsfssdf',enable:true},
		    {vid:2,vtel:'132468498',vname:'李四',note:'dsfssdf',enable:true},
		    {vid:3,vtel:'135486451',vname:'王五',note:'dsfssdf',enable:true}]*/
    }
  },
  methods: {
	  add(){
		  alert('add');
		  console.log('response.data');
		  axios
			.get('https://www.runoob.com/try/ajax/json_demo.json')
			.then(function (response){
				alert(response.data);
				console.log(response.data);
				response.data={
    name:"网站",
    num:3,
    sites: [
        {id:1, name:"Google", info:[ "Android", "Google 搜索", "Google 翻译" ] },
        { id:2,name:"Runoob", info:[ "菜鸟教程", "菜鸟工具", "菜鸟微信" ] },
        { id:3,name:"Taobao", info:[ "淘宝", "网购" ] }
    ]
};
this.info = response.data.sites})
			.catch(function (error) { // 请求失败处理
				console.log(error);
			});
	  },
	  edit(){
		  alert('edit')
	  },
	  del(){
		  alert('del')
	  }
  },
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
table {
  color:black;
}
</style>