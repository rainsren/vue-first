<template>
<div id="mhome">
	<div id="header">
		<h2>代理商终端:{{mname}}--MID:{{mid}}</h2>
    </div>
    <div id="container" class="container">
	    <div id="left_side">
			<button @click="showvids">小区</button><br>
			<button @click='showpids'>设备</button><br>
	    </div>

	    <div id="content">
	    	<div id="contentbody">
	    		<router-view>欢迎使用云梯宝</router-view>
	    	</div>
	    </div>
	    
	    <div id="right_side">
	    </div>
    </div>
    <div id="footer">
        Copyright www.gotuo.cn
    </div>
</div>
</template>
<script>
export default {
  name: 'mhome',
  data () {
    return {
	  mname:this.$route.params.mname,
	  mid:this.$route.params.mid,
    }
  },
  methods: {
	showpids:function(){
	    this.$router.push({ name: 'mpids', params:{
		  mid:this.mid,
		  mname:this.mname,
          mplist:[
		    {id:1,pid:'00200137',pname:'1号楼1单元'},
		    {id:2,pid:'00200138',pname:'1号楼2单元'},
		    {id:3,pid:'00200139',pname:'3号楼3单元'}]
	  }})
	},
	showvids:function(){
	    this.$router.push({ name: 'mvids', params:{
		  mid:this.mid,
		  mname:this.mname,
          mvlist:[
		    {vid:1,vtel:'1234684966',vname:'张三',note:'dsfssdf',enable:true},
		    {vid:2,vtel:'132468498',vname:'李四',note:'dsfssdf',enable:true},
		    {vid:3,vtel:'135486451',vname:'王五',note:'dsfssdf',enable:true}]
	  }}) 
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#wrap{
    	width:1060px;  
    	margin:0 auto;  
	}
    #header{
    	margin:10px;  
    	height:80px;  
    	border:solid 1px #0000FF;  
	}
	#container{
	    position:relative;  
	    margin:10px;  
	    height:500px;  
	}
	#left_side{
    	position:absolute;  
    	top:0px;  
    	left:0px;  
    	border:solid 1px #0000FF;  
    	width:180px;  
    	height:100%;  
	}
	#content{
	    margin:0px 190px 0px 190px;
	    border:solid 1px #0000FF;
	    height:100%;
	}
	#right_side{
	    position:absolute;
	    top:0px;
	    right:0px;
	    border:solid 1px #0000FF;
	    width:180px;
	    height:100%;
	}
	#footer{
	    margin:10px;  
	    height:80px;  
	    border:solid 1px #0000FF;  
	}
</style>