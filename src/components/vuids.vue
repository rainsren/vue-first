<template>
<div id="vuids">
	<div id="header">
		<h2>用户列表</h2>
    </div>
	<button>添加</button>
	<table class="table table-bordered table-hover table-striped">
		<thead>
			<th>编号</th>
			<th>用户名</th>
			<th>备注</th>
			<th>允许</th>
			<th>操作</th>
		</thead>
		<tbody>
			<tr v-for="item in list" :key="item.id">
				<td>{{item.uid}}</td>
				<td>{{item.uname}}</td>
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
import vueQr from 'vue-qr'
export default {
  name: 'vuids',
  data () {
    return {
		vid:this.$route.params.vid,
        vname:this.$route.params.vname,
      list:this.$route.params.vuidlist
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