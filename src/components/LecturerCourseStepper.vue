<template>
<v-content>
  <v-stepper v-model="stepper">
    <v-stepper-header>
      <v-stepper-step :complete="stepper > 1" step="1">Upload File</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="stepper > 2" step="2">Setting Feedback Sheet</v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <el-upload
        class="upload-demo"
        action=""
        :on-change="handleChange"
        :on-remove="handleRemove"
        :on-exceed="handleExceed"
        accept=".xls, .xlsx"
        :auto-upload="false">
    
     <el-button slot="trigger" size="medium" type="primary">Select File</el-button>
    
    </el-upload>
    <br/>
    <el-button size="medium" type="success" @click="save">Upload</el-button>


      </v-stepper-content>

      <v-stepper-content step="2">
        <LecturerCourseCard/>
        <v-row justify="center">
        </v-row>
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
</v-content>
</template>

<script>
import { mapGetters } from "vuex";
import StudentPreCard from "@/components/StudentPreCard";
import ViewFeedback from "@/components/ViewFeedback";
import LecturerCourseCard from "@/components/LecturerCourseCard";
  export default {
    data () {
      return {
        stepper: "",
         outputs: [], 
      fileData:'', 
      }
    },
    components:{
        StudentPreCard,
        ViewFeedback,
        LecturerCourseCard
    },
    created(){
      this.getStepper()
    },
    methods: {
      
        handleChange(file, fileList){
            this.fileTemp = file.raw;
            if(this.fileTemp){
                if((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') 
                    || (this.fileTemp.type == 'application/vnd.ms-excel')){
                    this.importfxx(this.fileTemp);
                } else {
                    this.$message({
                        type:'warning',
                        message:'附件格式错误，请删除后重新上传！'
                    })
                }
            } else {
                this.$message({
                    type:'warning',
                    message:'请上传附件！'
                })
            }
        },
        handleExceed(){
            this.$message({
                type:'warning',
                message:'超出最大上传文件数量的限制！'
            })
            return;
        },
        handleRemove(file,fileList){
            this.fileTemp = null
        },
              importfxx(obj) {
            let _this = this;
            let inputDOM = this.$refs.inputer;
 
            this.file = event.currentTarget.files[0];
 
            var rABS = false; 
            var f = this.file;
 
            var reader = new FileReader();
            FileReader.prototype.readAsBinaryString = function(f) {
                var binary = "";
                var rABS = false; 
                var pt = this;
                var wb; 
                var outdata;
                var reader = new FileReader();
                reader.onload = function(e) {
                    var bytes = new Uint8Array(reader.result);
                    var length = bytes.byteLength;
                    for (var i = 0; i < length; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
                    var XLSX = require("xlsx");
                    if (rABS) {
                        wb = XLSX.read(btoa(fixdata(binary)), {
                        type: "base64"
                        });
                    } else {
                        wb = XLSX.read(binary, {
                        type: "binary"
                        });
                    }
                    outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); 
                    let arr = [];
                    outdata.map(v => {
                        let obj = {}
                        obj.Group = v['Group']
                        obj.ID = v['ID']
                        arr.push(obj)
                    });
                    _this.da=arr;
                    _this.dalen=arr.length;
                    
                    _this.outputs = arr;
                    return arr;
                };
                reader.readAsArrayBuffer(f);
            };
            
            if (rABS) {
                reader.readAsArrayBuffer(f);
            } else {
                reader.readAsBinaryString(f);
            }
        },
        save(){
          var previousGroup = -1
          var lastGroup = this.outputs[this.outputs.length-1].Group
            for(var i=0;i<this.outputs.length;i++){
              var currentGroup = this.outputs[i].Group
              this.addValue(currentGroup,this.outputs[i].ID)
              if(previousGroup!=currentGroup){
                if(i==0){
                  this.addGroup(currentGroup,lastGroup)
                }else{
                  this.addGroup(currentGroup,previousGroup)
                }
                
              }
              previousGroup = currentGroup
            }
        },
        
        getStepper(){
          this.$http.get('/api/getStepperStatus', {
        params: {name: "LCourse"}
      }).then( (res) => {
        this.stepper = res.data[0].stepper;
      })
        },
        setStepper(){
      this.$http.post('/api/setStepperStatus', {
        stepper: "2", name: "LCourse"
      }).then( (res) => {
        console.log('res', res);
      })
    },
    getValue() {
      this.$http.get('/api/getValue', {
        params: {id: 4}
      }).then( (res) => {
        this.inpContent = res.data[0].name;
        console.log(this.inpContent);
      })
    },
    setValue() {
      this.$http.post('/api/setValue', {
        name: "sad",id: "3"
      }).then( (res) => {
        console.log('res', res);
      })
    },
    addValue(name,id) {
      this.$http.post('/api/addInfo', {
        name: name,id: id
      }).then( (res) => {
        console.log('res', res);
      })
    },
    addGroup(groupName,markingGroup) {
      this.$http.post('/api/addGroup', {
        name: groupName, AssessingGroup:markingGroup
      }).then( (res) => {
        console.log('res', res);
      })
    },
  }
  }
</script>