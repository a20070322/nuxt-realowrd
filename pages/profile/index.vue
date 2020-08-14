<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597214631354&di=241eb7e304b56c0dc03b7e4b4d311a98&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Forj360%2F6cb22faely1g06wggfj7aj208c08cmx5.jpg"
              class="user-img"
            />
            <h4>Eric Simons</h4>
            <p>Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games</p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow Eric Simons
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href>My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href>Favorited Articles</a>
              </li>
            </ul>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href>
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597214631354&di=241eb7e304b56c0dc03b7e4b4d311a98&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Forj360%2F6cb22faely1g06wggfj7aj208c08cmx5.jpg"
                />
              </a>
              <div class="info">
                <a href class="author">Eric Simons</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 29
              </button>
            </div>
            <a href class="preview-link">
              <h1>How to build webapps that scale</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href>
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597214631354&di=241eb7e304b56c0dc03b7e4b4d311a98&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Forj360%2F6cb22faely1g06wggfj7aj208c08cmx5.jpg"
                />
              </a>
              <div class="info">
                <a href class="author">Albert Pai</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 32
              </button>
            </div>
            <a href class="preview-link">
              <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li class="tag-default tag-pill tag-outline">Music</li>
                <li class="tag-default tag-pill tag-outline">Song</li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",
  name: "UserProfile",
};
</script>

<style>
</style>