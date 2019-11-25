<template>
<div id="ausers">
	<div id="header">
		<h2>用户列表</h2>
    </div>
	<button>添加</button>
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
				<td>{{item.id}}</td>
				<td>{{item.tel}}</td>
				<td>{{item.name}}</td>
				<td>{{item.note}}</td>
				<td>{{item.enable}}</td>
				<td>
					<button>修改</button>
					<button>删除</button>
				</td>
			</tr>
		</tbody>
	</table>
</div>
</template>
<script>
export default {
  name: 'ausers',
  data () {
    return {
	    list:this.$route.params.ulist
	  
	  /*list:[
		    {vid:1,vtel:'1234684966',vname:'张三',note:'dsfssdf',enable:true},
		    {vid:2,vtel:'132468498',vname:'李四',note:'dsfssdf',enable:true},
		    {vid:3,vtel:'135486451',vname:'王五',note:'dsfssdf',enable:true}]*/
    }
  },
  methods: {
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