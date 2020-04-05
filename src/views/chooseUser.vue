<template>
<v-content>
  <!-- <div id="app"> -->
    <!-- <LecturerMenu/> -->
    <!-- <v-btn @click="print">aaa</v-btn> -->
    <!-- <el-upload
        class="upload-demo"
        action=""
        :on-change="handleChange"
        :on-remove="handleRemove"
        :on-exceed="handleExceed"
        accept=".xls, .xlsx"
        :auto-upload="false">
    <el-button size="small" type="primary">点击上传</el-button>
    
    </el-upload>

    <v-btn size="small" type="primary" @click="test">导入</v-btn>
    <v-btn size="small" type="primary" @click="setValue">set</v-btn>
    <v-btn size="small" type="primary" @click="getValue">get</v-btn>
    <v-btn size="small" type="primary" @click="addValue">add</v-btn> -->

    <IdentityChosen/>
    <!-- <Footer/> -->
  <!-- </div> -->
  </v-content>
  
</template>

<script>
import LecturerMenu from "@/components/LecturerMenu";
import IdentityChosen from "@/components/IdentityChosen";
import Footer from "@/components/Footer";
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'
// import nodeXlsx from 'node-xlsx';

// var xlsx = require('node-xlsx');
// var fs = require('fs');

export default {
  name: 'choose',
  data(){
    return{
      inpContent: '',
      // outputs: [], // 保存读取出来的数据
      // fileData:'', // 保存选择的文件
    }
  },
  components:{
    inpContent: 'choose',
    Footer,
    LecturerMenu,
    IdentityChosen
  },
  // methods: {
  //           //上传文件时处理方法  
  //       handleChange(file, fileList){
  //           this.fileTemp = file.raw;
  //           if(this.fileTemp){
  //               if((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') 
  //                   || (this.fileTemp.type == 'application/vnd.ms-excel')){
  //                   this.importfxx(this.fileTemp);
  //               } else {
  //                   this.$message({
  //                       type:'warning',
  //                       message:'附件格式错误，请删除后重新上传！'
  //                   })
  //               }
  //           } else {
  //               this.$message({
  //                   type:'warning',
  //                   message:'请上传附件！'
  //               })
  //           }
  //       },
  //       //超出最大上传文件数量时的处理方法
  //       handleExceed(){
  //           this.$message({
  //               type:'warning',
  //               message:'超出最大上传文件数量的限制！'
  //           })
  //           return;
  //       },
  //       //移除文件的操作方法
  //       handleRemove(file,fileList){
  //           this.fileTemp = null
  //       },
  //             importfxx(obj) {
  //           let _this = this;
  //           let inputDOM = this.$refs.inputer;
  //           // 通过DOM取文件数据
 
  //           this.file = event.currentTarget.files[0];
 
  //           var rABS = false; //是否将文件读取为二进制字符串
  //           var f = this.file;
 
  //           var reader = new FileReader();
  //           //if (!FileReader.prototype.readAsBinaryString) {
  //           FileReader.prototype.readAsBinaryString = function(f) {
  //               var binary = "";
  //               var rABS = false; //是否将文件读取为二进制字符串
  //               var pt = this;
  //               var wb; //读取完成的数据
  //               var outdata;
  //               var reader = new FileReader();
  //               reader.onload = function(e) {
  //                   var bytes = new Uint8Array(reader.result);
  //                   var length = bytes.byteLength;
  //                   for (var i = 0; i < length; i++) {
  //                       binary += String.fromCharCode(bytes[i]);
  //                   }
  //                   //此处引入，用于解析excel
  //                   var XLSX = require("xlsx");
  //                   if (rABS) {
  //                       wb = XLSX.read(btoa(fixdata(binary)), {
  //                       //手动转化
  //                       type: "base64"
  //                       });
  //                   } else {
  //                       wb = XLSX.read(binary, {
  //                       type: "binary"
  //                       });
  //                   }
  //                   outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); 
  //                   //outdata就是读取的数据（不包含标题行即表头，表头会作为对象的下标）
  //                   //此处可对数据进行处理
  //                   let arr = [];
  //                   outdata.map(v => {
  //                       let obj = {}
  //                       obj.Group = v['Group']
  //                       obj.ID = v['ID']
  //                       arr.push(obj)
  //                   });
  //                   _this.da=arr;
  //                   _this.dalen=arr.length;
                    
  //                   _this.outputs = arr;
  //                   return arr;
  //               };
  //               reader.readAsArrayBuffer(f);
  //           };
            
  //           if (rABS) {
  //               reader.readAsArrayBuffer(f);
  //           } else {
  //               reader.readAsBinaryString(f);
  //           }
  //       },
  //       test(){
  //           for(var i=0;i<this.outputs.length;i++){
  //             // console.log(this.outputs[i].Group)
  //                     this.addValue(this.outputs[i].Group,this.outputs[i].ID)
  //                   }
  //       },
  //   getValue() {
  //     // axios.get('/', {params: ''})
  //     this.$http.get('/api/getValue', {
  //       params: {id: 1}
  //     }).then( (res) => {
  //       console.log('res', res);
  //       // this.inpContent = res.data[0].name;
  //       // console.log(this.inpContent);
  //     })
  //   },
  //   setValue() {
  //     // axios.post('/', {})
  //     this.$http.post('/api/setValue', {
  //       name: "sad",id: "3"
  //     }).then( (res) => {
  //       console.log('res', res);
  //     })
  //   },
  //   addValue() {
  //     // axios.post('/', {})
  //     this.$http.post('/api/addValue', {
  //       name: "sad",id: "3"
  //     }).then( (res) => {
  //       console.log('res', res);
  //     })
  //   },
  // }
}
</script>