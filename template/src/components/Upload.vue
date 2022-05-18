<template>
  <div class="uploadWrapper">
    <el-upload
      :before-upload="beforeUpload"
      :before-remove="handleRemove"
      :http-request="uploadFileRequest"
      :on-change="handleChange"
      :on-error="handleError"
      ref="upload"
    >
      <el-button>
        {{ text }}
      </el-button>
      <div slot="tip" class="el-upload__tip">
        <div>{{ tips }}</div>
      </div>
    </el-upload>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Upload extends Vue {
  @Prop() text!: string; // 按钮文字
  @Prop() url!: string; // 请求地址
  @Prop() isAdd!: boolean; // 是否是新增

  data: any = {}; //存放formdata数据

  getFileType(name: string) {
    const end = name.lastIndexOf('.');
    const suffix = name.substring(end, name.length);
    return suffix === '.csv' || suffix === '.xlsx' || suffix === '.xls';
  }

  handleError() {
    this.warningMessage('文件上传失败');
  }

  warningMessage(msg: string) {
    this.$message({ message: msg, type: 'warning' });
  }

  beforeUpload(file: any) {
    if (file.size === 0) return;
    if (!this.getFileType(file.name)) {
      this.$message.error('仅支持上传csv、xlsx、xls格式的文件');
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.warningMessage('仅支持5M以内的文件');
      return false;
    }
    const formData: any = new FormData();
    formData.append('file', file);
    this.data = formData;
  }

  handleRemove(file: any) {
    this.$emit('removeFiles', file);
  }

  uploadFileRequest() {
    this.$emit('upload', true);
    this.$dart.http
      .ajax({
        method: 'post',
        url: this.url + `?isCoverImport=${!this.isAdd}`,
        data: this.data
      })
      .then((res: any) => {
        if (res.Code === 0) {
          this.$emit('changeSXButton');
        }
      });
  }
}
</script>

<style scoped lang="scss">
@import './css/Upload.scss';
</style>
