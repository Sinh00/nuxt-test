<template>
  <div>
    <p>エレメント画面</p>
    <el-button @click="visible = true">ダイアログを開く</el-button>
    <el-dialog :visible.sync="visible" title="確認">
      <p>表示</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      visible: false,
    }
  },
}
</script>
