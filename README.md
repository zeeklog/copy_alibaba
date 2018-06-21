# copy_alibaba
一键复制阿里巴巴矢量图标库SVG图标，无需下载

    阿里巴巴矢量图标库提供了大量的图标可供选择，当然，在尊重版权的前提下拿来放在项目上。
苦于每次想要使用图标库 的图标都需要下载图标===拉到文件夹====写文件路径/////或者是需要下载svg 后在经过啰嗦的复制粘贴才能放在项目上用。
追求效率的SP怎么可能容忍这种低效率的操作！！！！！！！
果断撸一段小脚本试试水，想不到效果好不错。
# 一、试水工具

      本次小试水使用了著名的userscript 插件： tempermonkey
       打开chrome 浏览器,地址栏输入：chrome://extensions/ 进入谷歌浏览器插件安装
       把mxclass_com_Tampermonkey_chrome插件.crx 文件拖拽到浏览器，自动安装插件
       安装插件后，把copy_alibaba.js中的脚本文件全部复制到Tampermonkey中（包括文章开头的注释）

# 二、 使用方法

1、打开任意阿里巴巴矢量库页面

![image](https://www.mxclass.com/data/attachment/forum/201806/21/150112e999ah979paahkgp.png)
          
2、点击你想要复制粘贴的图标，

 ![image](https://www.mxclass.com/data/attachment/forum/201806/21/150239t8244e70qbssqvc4.png)


脚本会自动获取你点击的图标的svg 复制到剪贴板

复制后可以直接粘贴在项目中使用，实现了点击即用，省去了各种繁琐的下载操作！

# 三、效果
 
打开脚本：   
刷新页面后，鼠标滑过不会出现遮罩，直接点击相应的图标即可实现复制到剪贴板：
  

【完结】
雕虫小技，代码有点乱，海涵。
