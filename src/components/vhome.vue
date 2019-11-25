<template>
<div id="vhome">
	<div id="header">
		<h2>物业终端:{{vname}}--VID:{{vid}}</h2>
    </div>
    <div id="container" class="container">
	    <div id="left_side">
			<button @click='showpids'>设备:device</button><br>
	        <button @click='showuids'>用户编号:uid</button><br>
	    </div>

	    <div id="content">
	    	<div id="contentbody">
	    		<router-view>欢迎使用云梯宝</router-view>
	    	</div>
	    </div>
	    
	    <div id="right_side">
			<div id="right_sidebody">
			</div>
			<div id="result">result</div><br>
			<div id="ctrls">
			</div><br>
	    	<div id="opration">
			</div>
	    </div>
    </div>
    <div id="footer">
        Copyright www.gotuo.cn
    </div>
</div>
</template>
<script>
export default {
  name: 'vhome',
  data () {
    return {
	  vname:this.$route.params.vname,
      vid:this.$route.params.vid
    }
  },
  methods: {
	showpids:function(){
		//this.vname='sdfdsfs';
		//alert('showdevs');
	    this.$router.push({ name: 'vpids', params:{
		  vid:this.vid,
		  vname:this.vname,
          vpidlist:[
		    {id:1,pid:'00200137',pname:'1号楼1单元',fnames:'1,2,3,4,5,6,7,8,9,10',FStatus:'0101000000010000010001100111100000000000000000000000000000000000'},
		    {id:2,pid:'00200138',pname:'1号楼2单元',fnames:'1,2,3,4,5,6',FStatus:'0000001100010000010001100000000000000000000000000000000000000000'},
		    {id:3,pid:'00200139',pname:'3号楼3单元',fnames:'1,2,3,4,5,6,7,8',FStatus:'0000110000010000010001100111100000000000000000000000000000000000'}]
	  }})
	},
	showuids:function(){
	    this.$router.push({ name: 'vuids', params:{
		  vid:this.vid,
		  vname:this.vname,
          vuidlist:[
		    {uid:1,tel:'',uname:'张三',note:'dsfssdf',enable:true},
		    {uid:2,tel:'',uname:'李四',note:'dsfssdf',enable:true},
		    {uid:3,tel:'',uname:'王五',note:'dsfssdf',enable:true}]
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