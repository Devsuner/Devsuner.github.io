var posts=["2024/08/09/第一篇文章/","2024/08/11/最近碰到的一些网络问题/","2024/08/08/hello-world/","2024/08/09/linux学习/linux第二课/","2024/08/09/linux学习/第一课/","2024/08/23/php速通/","2024/08/23/TC_08_31/","2024/09/10/CTF/MySQL的学习记录/","2024/09/05/CTF/dirserch收集信息/","2024/09/09/CTF/MySQL的常用指令/","2024/09/11/CTF/SQL注入基础/","2024/09/05/CTF/命令执行漏洞/","2024/09/05/CTF/弱口令爆破/","2024/09/05/CTF/文件上传,,包含漏洞/","2024/09/07/CTF/文件备份/","2024/09/06/CTF/暑假学习总结/","2024/09/06/CTF/请求头/","2024/08/19/linux学习/# 攻防世界web新手篇笔记/","2024/08/12/linux学习/Linux学第三课/","2024/08/21/环境配置问题/# MySQL的删除卸载/","2024/08/27/环境配置问题/MySQL的删除卸载/","2024/08/28/环境配置问题/MySQL的下载/","2024/08/31/环境配置问题/SQL的sqli-labs靶场配置/","2024/08/26/环境配置问题/kali/","2024/08/30/环境配置问题/pycharm环境设置/","2024/08/29/环境配置问题/php环境配置问题/","2024/09/01/环境配置问题/ubuntu/","2024/09/02/环境配置问题/vscode配置c/","2024/08/25/环境配置问题/中国蚁剑教程/","2024/08/22/环境配置问题/密码/","2024/08/23/环境配置问题/小皮Myadmin的配置/","2024/08/24/环境配置问题/虚拟机设置/","2024/09/18/CTF/一句话木马(webshell)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };