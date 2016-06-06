title: Router
speaker: Cloud
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: moon
usemathjax: yes

[slide]   
# 前端路由  
 大部分的复杂的网站，都会把业务解耦为模块进行处理。这些网站中又有很多的网站会把适合的部分应用Ajax进行数据交互，展现给用户，很明显处理这样的数据通信交互，不可避免的会涉及到跟URL打交道，让数据交互的变化反映到URL的变化上，进而可以给用户机会去通过保存的URL链接，还原刚才的页面内容板块的布局，这其中包括Ajax局部刷新的变化。
 通过记录URL来记录web页面板块上Ajax的变化，我们可以称之为 Ajax标签化 。而对于较大的framework，我们称之为 路由系统 ，比如AngularJs等。

[slide]  
适应范围：SPA   
优缺点基本与SPA一致  

[slide]   
## 路由需要解决的问题   
  
* 跳转页面  
* 收藏网址  
* 前进后退  
* 权限控制  
...
----  
## 路由的解决方式   
* hashchange  
* history对象  


[slide]  
# hashchange   
----
* 兼容性好
* 路径处理方便

[slide]  
# history对象
----
* 让用户察觉不到  
* 能储存state对象 

[slide]  
## 兼容性
history&&history.pushState兼容如下：  
* chrome true；  
* Firefox true；  
* IE10 true;   
* IE<=9 false;   

hashchange兼容如下：  
* IE9 true;   
* IE8 true;   
* IE7 false;   
* ...   

[slide]  
## 触发情况
页面load时，onhashchange默认触发情况： 
* chrome 需主动trigger才能触发  
* FF 需主动trigger才能触发  
* IE 需主动trigger才能触发  
  
页面load时，onpopstate默认触发情况： 
* chrome <34版本之前的默认触发   
* FF 默认不触发  
* IE 默认不触发 

[slide]
# react-router
![img](/react-router.png)
 

[slide]
#参考文档
[深入理解 react-router 路由系统](https://segmentfault.com/q/1010000002647280)  
[react-router中文文档](http://react-guide.github.io/react-router-cn/)  
[前端路由实现与 react-router 源码分析](http://www.alloyteam.com/2016/05/router/)  
