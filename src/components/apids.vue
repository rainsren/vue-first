<template>
<div id="apids">
	<div id="header">
		<h2>设备列表</h2>
    </div>
	<button>添加</button>
	<table class="table table-bordered table-hover table-striped">
		<thead>
			<th>编号</th>
			<th>设备编号</th>
			<th>设备名称</th>
			<th>操作</th>
		</thead>
		<tbody>
			<tr v-for="item in list" :key="item.id">
				<td>{{item.id}}</td>
				<td>{{item.pid}}</td>
				<td>{{item.pname}}</td>
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
  name: 'apids',
  data () {
    return {
        list:this.$route.params.plist,
	  	
	  /*list:[
		    {id:1,pid:'00200137',pname:'1号楼1单元'},
		    {id:2,pid:'00200138',pname:'1号楼2单元'},
		    {id:3,pid:'00200139',pname:'3号楼3单元'}]*/
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