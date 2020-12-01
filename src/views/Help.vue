<template>
  <div class="page-container feedback-page-container">

    <div class="help-info-item description">
      PicQh，基于 GitHub API 搭建的图床神器，图片外链自动使用 jsDelivr 进行 CDN 加速，免费、稳定、高效。
      <br>
      只需一个 GitHub 账号，免下载安装，打开网站即可使用，轻松解决图床难题。
      <br>
      建议将此网站添加至收藏夹，方便下次使用 😊
      <br/>
      使用:前往GitHub新建token令牌
    </div>

    <div class="help-info-item">
      作者：
      <el-link type="primary" href="https://qianhuiya.gitee.io/" target="_blank">@qianhuiya</el-link>
    </div>

    <div class="help-info-item">
      仓库：
      <el-link type="primary" href="https://qianhuiya.gitee.io/" target="_blank">
        https://qianhuiya.gitee.io/
      </el-link>
    </div>

    <div class="help-info-item">
      声明：请勿通过此网站上传违反你当地法律的图片，一切后果与此网站无关。
    </div>
  </div>
</template>

<script>

export default {
  name: "Help",
}
</script>

<style scoped lang="scss">

.feedback-page-container {
  .help-info-item {
    font-size: 15.8px;
    padding: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }


  }

  .description {
    font-weight: bold;
    line-height: 28px;
  }

  .red-text {
    color: #de1a1a;
  }
}

</style>
