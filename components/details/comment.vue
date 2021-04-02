<template>
  <div class="comment">
    <div v-for="item in comment" :key="item.commentId">
      <div class="comment-header">
        <div class="user-detail">
          <el-avatar :src="item.avatar" :size="50"></el-avatar>
          <div>
            <p class="username">{{ item.userName }}</p>
            <p class="user-time">{{ item.createTime }}</p>
          </div>
        </div>
        <el-rate
          disabled
          show-score
          v-model="item.star"
          :icon-classes="iconClasses"
          text-color="#ff9900"
          disabled-void-icon-class="icon-rate-face-off"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
          score-template="{value}">
        </el-rate>
      </div>
      <p>{{ item.content }}</p>
    </div>

  </div>
</template>
1
<script>
import controller from './controller/comment.comtroller'

export default controller
</script>
