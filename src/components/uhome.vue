<template>
<div id="uhome">
	<div id="header">
		<h2>用户终端</h2>
    </div>
	<vue-qr :text="qr" :size="200"></vue-qr><br>
	<table class="table table-bordered table-hover table-striped">
		<thead>
			<th>id</th>
			<th>小区编号</th>
			<th>小区</th>
			<th>设备编号</th>
			<th>设备名称</th>
			<th>操作</th>
		</thead>
		<tbody>
			<tr v-for="item in list" :key="item.id">
				<td>{{item.id}}</td>
				<td>{{item.vid}}</td>
				<td>{{item.vname}}</td>
				<td>{{item.pid}}</td>
				<td>{{item.pname}}</td>
				<td>
					<button v-on:click="ctrl(item.Fbit)">控制</button>
				</td>
			</tr>
		</tbody>
	</table>
	
	
	
</div>
</template>
<script>
import vueQr from 'vue-qr'
export default {
  name: 'uhome',
  data () {
    return {
		qr:"",
      list:this.$route.params.list
    }
  },
  methods: {
	  ctrl:function(Fbit){
		  this.qr=Fbit;
	  }
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