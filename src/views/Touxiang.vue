<template>
  <div>
    <div>
      <van-uploader :after-read="afterRead" />
      <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px" enctype="multipart/form-data">
        
      
       <el-form-item label="文件" prop="file">
        <img :src="form.data" style="width:50%;height:50%"  >
          <input type="file" id="file_input" >
     
        </el-form-item>  
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
        <el-button @click="downloadfile">下载</el-button>
      </div>
    </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>