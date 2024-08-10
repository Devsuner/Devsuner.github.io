var posts=["2024/08/09/第一篇文章/","2024/08/08/hello-world/","2024/08/09/linux学习/linux第二课/","2024/08/09/linux学习/第一课/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };