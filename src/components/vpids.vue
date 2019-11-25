<template>
<div id="vpids">
	<div id="header">
		<h2>设备列表</h2>
    </div>
	<table class="table table-bordered table-hover table-striped">
		<thead>
			<th>id</th>
			<th>设备编号</th>
			<th>设备名称</th>
			<th>楼层</th>
			<th>楼层状态</th>
			<th>操作</th>
		</thead>
		<tbody>
			<tr v-for="item in list" :key="item.id">
				<td>{{item.id}}</td>
				<td>{{item.pid}}</td>
				<td>{{item.pname}}</td>
				<td>{{item.fnames}}</td>
				<td>{{item.FStatus}}</td>
				<td>
					<button>修改</button>
					<button>控制</button>
				</td>
			</tr>
		</tbody>
	</table>
</div>
</template>
<script>
import vueQr from 'vue-qr'
export default {
  name: 'vpids',
  data () {
    return {
        vid:this.$route.params.vid,
        vname:this.$route.params.vname,
      list:this.$route.params.vpidlist
    }
  },
  methods: {
	  
  },
  components: {
      vueQr
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