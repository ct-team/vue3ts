<template>
  <div class="search-wrapper" v-loading="slideLoading">
    <el-form :model="form" class="demo-form-inline">
      <el-form-item style="margin-left: 100px;">
        <el-button
          type="primary"
          :disabled="isSX === '已生效'"
          @click="handleSX"
          v-if="$dart.permission.is('oper')"
        >
          {{ isSX }}
        </el-button>
      </el-form-item>
      <el-form-item
        v-for="(item, index) in config"
        :label="item.label"
        :key="index"
      >
        <div style="display: flex;">
          <Upload
            :text="'添加导入'"
            :url="item.uploadUrl"
            :isAdd="true"
            :ref="'add' + index"
            @changeSXButton="changeSXButton"
            v-if="$dart.permission.is('oper')"
          ></Upload>
          <div style="margin-left: 100px;"></div>
          <Upload
            :text="'覆盖导入'"
            :url="item.uploadUrl"
            :isAdd="false"
            :ref="'update' + index"
            @changeSXButton="changeSXButton"
            v-if="$dart.permission.is('oper')"
          ></Upload>
          <div style="margin-left: 100px;"></div>
          <el-button
            style="height: 28px;margin-top: 1px"
            type="primary"
            @click="handleExport(item.export, index)"
            v-if="$dart.permission.is('view')"
          >
            导出
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { takeEffect } from '@/api/index';
import Upload from '@/components/Upload.vue';
import con from '@/config/const';

@Component({
  components: {
    Upload
  }
})
export default class Button extends Vue {
  config: any = con.buttonConfig;
  slideLoading = false;
  isSX: string = '未生效'; //是否生效
  fileFlag: boolean = false; //是否上传过文件

  handleExport(url: any, index: number) {
    this.$dart.http
      .ajax({
        method: 'get',
        url: url,
        data: { IsUserIdExport: index === 0 }
      })
      .then((res: any) => {
        if (res.Code === 0) {
          window.open(res.Data);
        }
      });
  }

  changeSXButton() {
    this.isSX = '未生效';
    this.fileFlag = true;
  }

  handleSX() {
    if (!this.fileFlag) {
      this.$message({
        message: '请先上传文件',
        type: 'warning'
      });
      return;
    }
    this.isSX = '已生效';
    this.setSlideLoading(true);
    takeEffect()
      .then((res: any) => {
        if (res.Code === 0) {
          (this.$refs.add0 as any)[0].$refs.upload.clearFiles();
          (this.$refs.add1 as any)[0].$refs.upload.clearFiles();
          (this.$refs.update0 as any)[0].$refs.upload.clearFiles();
          (this.$refs.update1 as any)[0].$refs.upload.clearFiles();
          this.$message({
            message: '生效成功',
            type: 'success'
          });
        }
        this.setSlideLoading(false);
      })
      .catch(() => {
        this.setSlideLoading(false);
      });
  }

  setSlideLoading(type: boolean): void {
    this.slideLoading = type;
  }
}
</script>

<style lang="scss">
.search-wrapper {
  overflow: hidden;
  margin: 10px 0;
  padding: 15px 15px 0 15px;
  background-color: #f7f7f7;
  border: 1px solid #e3e3e3;
}
</style>
