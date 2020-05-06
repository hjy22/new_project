<template>
<v-content>
  <div v-if="upload==true">
      <div class="headline text-center">You have uploaded the student information already</div>
      </div>
      <div v-else>
    <v-card
    class="mx-auto"
    max-width="400px"
  >
  <v-card-title primary-title>
      <div class="headline">Upload Student Infomation</div>
      </v-card-title>
      <v-divider></v-divider>
      <br/>
    <el-upload
        class="upload-demo"
        action=""
        :on-change="handleChange"
        :on-remove="handleRemove"
        :on-exceed="handleExceed"
        accept=".xls, .xlsx"
        :auto-upload="false">
    
     <el-button style="margin-left: 150px" slot="trigger" size="medium" type="primary">Select File</el-button>
    
    </el-upload>
    <br/>
    <v-row justify="center">
    <el-button size="medium" type="success" @click="save">Upload</el-button>
    </v-row>
    <br/>
    </v-card>
      </div>
    </v-content>
</template>

<script>
  export default {
    data () {
      return {
         outputs: [], 
      fileData:'', 
      upload:false,
      }
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
              this.addInfo(currentGroup,this.outputs[i].ID)
              
              if(previousGroup!=currentGroup){
                this.addStepper(currentGroup)
                if(i==0){
                  this.addGroup(currentGroup,lastGroup)
                }else{
                  this.addGroup(currentGroup,previousGroup)
                }
                
              }
              previousGroup = currentGroup
            }
            this.upload = true;
        },
        addStepper(groupName) {
      this.$http.post('/api/addStepper', {
        name: groupName
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
    addInfo(name,id) {
      this.$http.post('/api/addInfo', {
        name: name,id: id
      }).then( (res) => {
        console.log('res', res);
      })
    },
  }
  }
</script>