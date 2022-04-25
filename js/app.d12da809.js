(function(){"use strict";var t={3683:function(t,e,n){var i=n(144),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-header",[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"1"}},[t._v("Home")]),i("el-submenu",{attrs:{index:"2"}},[i("template",{slot:"title"},[t._v("Blogs")]),i("el-menu-item",{attrs:{index:"2-1"}},[t._v("Machine Learning")]),i("el-menu-item",{attrs:{index:"2-2"}},[t._v("Probability and Statistics")]),i("el-menu-item",{attrs:{index:"2-3"}},[t._v("tbd.")])],2),i("el-menu-item",{attrs:{index:"3"}},[t._v("Music")])],1),i("div",{staticClass:"line"})],1),i("el-main",[i("div",{attrs:{id:"app"}},[i("img",{attrs:{alt:"Vue logo",src:n(5722),width:"200"}}),i("HelloWorld",{attrs:{msg:"Welcome to Cleverctz's Blog!"}})],1)])],1)},p=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("p",[t._v(" A webpage to display his Tremendous Genius! ")]),n("router-view"),n("h3",[t._v("Contents")]),n("ul",[n("el-link",{staticClass:"el-button el-button",attrs:{href:"https://www.zhihu.com/people/ctz-99/posts"}},[t._v("Notes for Machine Learning")]),n("p"),n("router-link",{staticClass:"el-button el-button",attrs:{to:"pic"}},[t._v("Roll a Picture")]),n("router-link",{staticClass:"el-button el-button",attrs:{to:"pic1"}},[t._v("Roll a Picture")]),n("p"),n("router-link",{staticClass:"el-button el-button",attrs:{to:"music"}},[t._v("Classic Music")]),n("p"),n("router-link",{staticClass:"el-button el-button",attrs:{to:"pop"}},[t._v("Pop Music")]),n("p"),n("router-link",{staticClass:"el-button el-button",attrs:{to:"thoughts"}},[t._v("Thoughts")]),n("p"),n("el-link",{staticClass:"el-button el-button",attrs:{href:"http://live.bilibili.com/23746325"}},[t._v("Live")])],1),n("h3",[t._v("Contact the Author")]),n("ul",[t._v(" No Way! ")])],1)},c=[],a={name:"HelloWorld",props:{msg:String},methods:{handleUpdateClick(){this.$forceUpdate()}}},l=a,s=n(1001),u=(0,s.Z)(l,r,c,!1,null,"bd261e3e",null),m=u.exports,f={name:"App",components:{HelloWorld:m}},g=f,d=(0,s.Z)(g,o,p,!1,null,null,null),v=d.exports,b=n(8345),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("div",{staticClass:"head"},[n("span",{},[t._v("Music Part（Updating 4/25）")])])]),n("el-main",[n("p",[t._v("旨在带领对音乐（古典）或对cleverctz感兴趣的伙伴入门")]),n("p",[t._v("包含一点点乐理知识、一点点个人理解、非常多的曲目/作曲家安利，基本都有比较推荐的演奏链接，但可能会失效，有任何想法且你有cleverctz联系方式可以找他")]),n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"肖  邦",name:"first"}},[t._v(" “双性同体”的作曲家 "),n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Piano Concerto No.1 in E minor, Op.11 ")]),n("div",[t._v("第一乐章为Allegro maestoso(庄严的快板)，弦乐组主导，主题回环")]),n("div",[t._v("第二乐章为Romanze(Larghetto)（浪漫，稍慢的）")]),n("div",[t._v("第三乐章为Rondo(Vivace)(活泼的回旋曲)")]),n("div",[t._v("肖赛冠军的演绎:")]),n("el-link",{attrs:{href:"https://www.bilibili.com/video/BV1CQ4y1i7cz?spm_id_from=333.337.search-card.all.click"}},[t._v("刘晓禹-华沙爱乐乐团")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Ballade No.1 in G minor, Op.23 ")]),n("div",[t._v("叙事曲体裁的开山之作，据说是格局较大的一曲。")]),n("el-link",{attrs:{href:"https://www.bilibili.com/video/BV19b411U7Uk/?spm_id_from=333.788.recommend_more_video.13"}},[t._v("鲁宾斯坦")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Ballade No.2 in F major, Op.38 ")]),n("div",[t._v("第二叙事曲，第一部分平和舒缓")]),n("div",[t._v("第二部分雷厉风行，乍听与冬风相似")]),n("div",[t._v("回环的")]),n("el-link",{attrs:{href:"https://www.bilibili.com/video/BV1xs411X72Z?spm_id_from=333.337.search-card.all.click"}},[t._v("李云迪")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Ballade No.3 in A flat major, Op.47 ")]),n("div",[t._v("仍在品鉴中tbd.")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Ballade No.4 in A flat major, Op.52 ")]),n("div",[t._v("tbd.")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" 平稳的行板与辉煌的大波兰舞曲 Op.22 ")]),n("div",[t._v("Andante spianato et Grande polonaise brillante, Op.22")]),n("div",[t._v("丝滑")]),n("div",[n("el-link",{attrs:{href:"https://www.bilibili.com/video/BV1Vy4y1M7ee?spm_id_from=333.337.search-card.all.click"}},[t._v("李云迪")])],1)],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(' Polonaise No.6 in A flat, Op.53 "Heroic" ')]),n("div",[t._v("荡气回肠，著名的英雄波兰舞曲")]),n("el-link",{attrs:{href:"https://www.bilibili.com/video/BV1ys411X7Ue?spm_id_from=333.337.search-card.all.click"}},[t._v("霍洛维茨")])],2)],1)],1),n("el-tab-pane",{attrs:{label:"拉赫玛尼诺夫",name:"second"}},[t._v(" 悲壮而浪漫的俄系作曲家，他的和弦总是那么动听 "),n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Piano Concerto No.2 in C minor, Op.18 ")]),n("div",[t._v("全曲分三个乐章,第一乐章为Moderato(中庸的快板),乐章开始采用cleverctz的手无法实现的和弦,而后转琶音,再接弦乐,弦乐主导,钢琴的演奏比较凌厉,有悲壮感 ")]),n("div",[t._v("第二乐章为Adagio sostenuto(慢板),依然是弦乐主导,此乐章舒缓回环")]),n("div",[t._v("第三乐章为Allegro scherzando(谐谑曲快板),如其名,此乐章较前两乐章欢快跳脱,但尾声依然有厚重感")]),n("el-link",{attrs:{href:"https://www.bilibili.com/video/BV1sx41117YL?spm_id_from=333.337.search-card.all.click"}},[t._v("郎朗，约37min，此版钢琴声音")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Prelude in C Sharp Minor, Op.3, No.2 ")]),n("div",[t._v("悲壮感十足，弹完出一身汗，典型的拉赫曲风及和弦编排")]),n("el-link",{attrs:{href:"https://www.bilibili.com/video/BV1h5411w74v?spm_id_from=333.337.search-card.all.click"}},[t._v("阿什肯纳齐,4min38s")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Prelude in G Minor, Op.23, No.5 ")]),n("div",[t._v("结构简单的三段体，前后激昂辉煌，中段抒情；梦比优斯奥特曼的某个BGM旋律有些相似")]),n("el-link",{attrs:{href:"https://www.bilibili.com/video/BV16K4y1e7J9?p=8"}},[t._v("拉赫玛尼诺夫,4min01s，亲自演奏")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Symphony No.2 in E minor, op.27 ")]),n("div",[t._v("仍在品鉴中tbd.")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" 爱的忧伤 Liebesleid ")]),n("div",[t._v("改编自克莱斯勒的作品，从原曲的小提琴/钢琴合奏变为钢琴独奏。")]),n("div",[t._v("3/4拍，主旋律的伴奏以3组和弦为主，圆舞曲风格，装饰音多，情绪主要依赖演奏者表达，你也可以认为这首改编曲非常啰嗦。")]),n("div",[t._v("忧伤的主要表现形式为零碎的下行音阶，当然演奏者也可以自己选择弹得或悲壮或谐谑。")]),n("div",[t._v("留一个cleverctz演奏的位置（")])],2)],1)],1),n("el-tab-pane",{attrs:{label:"贝多芬",name:"third"}},[t._v(" 最近才稍微get到一点他的好听 "),n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Piano Sonata NO.8 in C minor,op.13 'Pathetique' ")]),n("div",[t._v("这是令人熟知的悲怆奏鸣曲")]),n("div",[t._v("第一乐章为Grave(庄板)-Allegro(快板) di molto e con brio(多而华丽的),这两个特点鲜明到不需要阐释。第一部分的主要特色为突强和突弱，节奏松散；第二部分回环两次节奏工整，速度较快，考验维持短音的稳定性（不踩踏板）；第三部分风格结合前两者，有乐段的复现。")]),n("div",[t._v("第二乐章为Adagio cantabile(如歌的柔板)，耳熟能详，练完再锐评")]),n("div",[t._v("第三乐章为Rondo(Allegro)(愉快的回旋曲),耳熟能详，练完再锐评")]),n("div",[t._v("再留一个cleverctz演奏的位置（")])],2)],1)],1),n("el-tab-pane",{attrs:{label:"乐理小知识",name:"fourth"}},[t._v("tbd.")])],1)],1)],1)},h=[],_={data(){const t=this.$createElement;return{activeName:"TestComp",tableData:[{type:"--",name:"Andante spianato et Grande polonaise brillante, Op.22",artist:t("el-link",{attrs:{href:"https://www.bilibili.com/video/BV1Vy4y1M7ee?spm_id_from=333.337.search-card.all.click"}},["李云迪"]),time:"14min-",comments:"丝滑"},{type:"--",name:'Polonaise No.6 in A flat, Op.53 "Heroic"',artist:t("el-link",{attrs:{href:"https://www.bilibili.com/video/BV1ys411X7Ue?spm_id_from=333.337.search-card.all.click"}},["霍洛维茨"]),time:"7min+",comments:"震撼"}]}},methods:{handleClick(t,e){console.log(t,e)}}},w=_,k=(0,s.Z)(w,x,h,!1,null,"3cd83586",null),y=k.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdf"},[n("a",[t._v("不久的将来这个模块将会展开，目前先祝你开心，度过这个难熬的疫情。")])])}],P={name:"TestThoughts"},A=P,N=(0,s.Z)(A,C,O,!1,null,null,null),B=N.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("div",{staticClass:"head"},[n("span",{},[t._v("Pop Music Part（Updating 4/14）")])])]),n("el-main",[n("p",[t._v("旨在安利一些clever所爱的流行歌曲，这里和网易云/QQ音乐歌单的最大区别就在于，你可以看到cleverctz的锐评")]),n("p",[t._v("有任何想法且你有cleverctz联系方式可以找他，希望以后这个网站能有较强的交互性")]),n("p",[t._v("这个模块的曲目的更新频率会高一些")]),n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"霓虹味道",name:"second"}},[n("p",[t._v("舒适区：Aimer,YOASOBI,泽野弘之")]),n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",[n("template",{slot:"title"},[t._v(" Avid 泽野弘之/瑞葵 ")]),n("div",[t._v("迷茫感，也许很适合当下的处境。等看完86再来更新。")]),n("el-link",{attrs:{href:"https://music.163.com/song?id=1835951859&userid=474515122"}},[t._v("网易云原曲")]),n("el-link",{attrs:{href:"https://www.bilibili.com/video/BV1t3411J7UU?spm_id_from=333.337.search-card.all.click"}},[t._v("Animenz Piano ver")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" ViEW 泽野弘之/瑞葵 ")]),n("div",[t._v("清新，惬意，zlgg力荐")]),n("el-link",{attrs:{href:"https://music.163.com/song?id=507116417&userid=474515122"}},[t._v("网易云原曲")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" 残響散歌 Aimer ")]),n("div",[t._v("鬼灭2的OP,带感的摇滚风，比较容易听腻，偶尔听听还行")]),n("el-link",{attrs:{href:"https://music.163.com/song?id=1897084229&userid=474515122"}},[t._v("网易云原曲")]),n("el-link",{attrs:{href:"https://www.bilibili.com/video/BV1hS4y1M7wL?spm_id_from=333.999.0.0"}},[t._v("Animenz Piano ver")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" たぶん YOASOBI ")]),n("div",[t._v("失恋小曲，经典转调，哈哈，虽然我没有遇到过")]),n("el-link",{attrs:{href:"https://music.163.com/song?id=1459343252&userid=474515122"}},[t._v("网易云原曲")])],2),n("el-collapse-item",[n("template",{slot:"title"},[t._v(" もう少しだけ只要多一点 YOASOBI ")]),n("div",[t._v("很积极哦，祝你也开心")]),n("el-link",{attrs:{href:"https://music.163.com/song?id=1840862630&userid=474515122"}},[t._v("网易云原曲")])],2)],1)],1),n("el-tab-pane",{attrs:{label:"华子味道",name:"third"}},[n("p",[t._v("舒适区：孙燕姿，张国荣，周杰伦")]),n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",[n("template",{slot:"title"},[t._v(" 天黑黑 孙燕姿 ")]),n("div",[t._v("不是我的方言，这是这首曲唯一不让我产生共鸣的点。")]),n("el-link",{attrs:{href:"https://music.163.com/song?id=287749&userid=474515122"}},[t._v("网易云原曲")])],2)],1)],1),n("el-tab-pane",{attrs:{label:"",name:"fourth"}},[t._v("定时任务补偿")])],1)],1)],1)},z=[],E={data(){return{activeName:"TestPop"}},methods:{handleClick(t,e){console.log(t,e)}}},T=E,V=(0,s.Z)(T,M,z,!1,null,"2434dea4",null),j=V.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("p",[t._v('交替点击"Roll a Picture"(Updating 4/25)')]),n("img",{attrs:{src:t.a,width:"200"}})])])},U=[],R={name:"RandomPicture",data(){return{url:[[n(9105)],[n(6735)],[n(4423)],[n(3354)],[n(527)],[n(7479)],[n(3945)],[n(196)],[n(3728)],[n(8482)],[n(1478)],[n(3959)],[n(4520)],[n(5892)],[n(6257)],[n(1019)],[n(3374)],[n(8343)],[n(7378)],[n(5881)],[n(2641)],[n(3517)],[n(5857)],[n(4743)],[n(4462)],[n(1645)],[n(2211)],[n(1006)],[n(4133)],[n(5752)],[n(7464)],[n(3810)],[n(3013)],[n(7589)],[n(6399)],[n(2119)],[n(2534)],[n(596)],[n(8022)],[n(7537)],[n(3744)],[n(9027)],[n(4517)],[n(9874)],[n(1814)],[n(6207)],[n(9378)],[n(5359)],[n(4992)],[n(7777)],[n(8839)],[n(2315)],[n(7887)],[n(3457)],[n(2700)],[n(6288)],[n(984)],[n(3269)],[n(9127)],[n(8079)],[n(5055)],[n(915)],[n(8293)],[n(531)],[n(5608)],[n(4850)],[n(8256)],[n(8998)],[n(7148)],[n(3240)],[n(731)],[n(5280)],[n(1304)],[n(705)],[n(6363)],[n(4884)],[n(3730)],[n(1371)],[n(7926)],[n(7606)],[n(5671)],[n(3382)],[n(7322)],[n(8374)],[n(6816)],[n(9290)],[n(7936)],[n(946)],[n(561)],[n(4495)],[n(3273)],[n(2705)],[n(7662)],[n(7765)],[n(7666)],[n(7163)],[n(9563)],[n(5794)],[n(9340)],[n(4307)],[n(703)],[n(5149)],[n(1866)],[n(2222)],[n(9003)],[n(7470)],[n(3807)],[n(4585)],[n(63)],[n(9264)],[n(3907)],[n(6149)],[n(1845)],[n(485)],[n(5587)],[n(6349)],[n(9907)],[n(56)],[n(7697)],[n(1033)],[n(447)],[n(1067)],[n(9704)],[n(5888)],[n(7292)],[n(2128)],[n(7969)],[n(6213)],[n(7374)],[n(980)],[n(8051)],[n(2462)],[n(3893)],[n(6414)],[n(852)],[n(4426)],[n(8460)],[n(3518)],[n(7535)],[n(5712)],[n(4854)]]}},created(){this.i=Math.floor(141*Math.random()),this.a=this.url[this.i][0]}},Z=R,$=(0,s.Z)(Z,S,U,!1,null,null,null),L=$.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("p",[t._v('交替点击"Roll a Picture"(Updating 4/25)')]),n("img",{attrs:{src:t.a,width:"200"}})])])},H=[],W={name:"RandomPicture1",data(){return{url:[[n(9105)],[n(6735)],[n(4423)],[n(3354)],[n(527)],[n(7479)],[n(3945)],[n(196)],[n(3728)],[n(8482)],[n(1478)],[n(3959)],[n(4520)],[n(5892)],[n(6257)],[n(1019)],[n(3374)],[n(8343)],[n(7378)],[n(5881)],[n(2641)],[n(3517)],[n(5857)],[n(4743)],[n(4462)],[n(1645)],[n(2211)],[n(1006)],[n(4133)],[n(5752)],[n(7464)],[n(3810)],[n(3013)],[n(7589)],[n(6399)],[n(2119)],[n(2534)],[n(596)],[n(8022)],[n(7537)],[n(3744)],[n(9027)],[n(4517)],[n(9874)],[n(1814)],[n(6207)],[n(9378)],[n(5359)],[n(4992)],[n(7777)],[n(8839)],[n(2315)],[n(7887)],[n(3457)],[n(2700)],[n(6288)],[n(984)],[n(3269)],[n(9127)],[n(8079)],[n(5055)],[n(915)],[n(8293)],[n(531)],[n(5608)],[n(4850)],[n(8256)],[n(8998)],[n(7148)],[n(3240)],[n(731)],[n(5280)],[n(1304)],[n(705)],[n(6363)],[n(4884)],[n(3730)],[n(1371)],[n(7926)],[n(7606)],[n(5671)],[n(3382)],[n(7322)],[n(8374)],[n(6816)],[n(9290)],[n(7936)],[n(946)],[n(561)],[n(4495)],[n(3273)],[n(2705)],[n(7662)],[n(7765)],[n(7666)],[n(7163)],[n(9563)],[n(5794)],[n(9340)],[n(4307)],[n(703)],[n(5149)],[n(1866)],[n(2222)],[n(9003)],[n(7470)],[n(3807)],[n(4585)],[n(63)],[n(9264)],[n(3907)],[n(6149)],[n(1845)],[n(485)],[n(5587)],[n(6349)],[n(9907)],[n(56)],[n(7697)],[n(1033)],[n(447)],[n(1067)],[n(9704)],[n(5888)],[n(7292)],[n(2128)],[n(7969)],[n(6213)],[n(7374)],[n(980)],[n(8051)],[n(2462)],[n(3893)],[n(6414)],[n(852)],[n(4426)],[n(8460)],[n(3518)],[n(7535)],[n(5712)],[n(4854)]]}},created(){this.i=Math.floor(141*Math.random()),this.a=this.url[this.i][0]}},I=W,Y=(0,s.Z)(I,G,H,!1,null,null,null),F=Y.exports;i["default"].use(b.Z);const Q=[{path:"/pic",name:"RandomPicture",component:L},{path:"/pic1",name:"RandomPicture1",component:F},{path:"/music",name:"TestComp",component:y},{path:"/pop",name:"TestPop",component:j},{path:"/thoughts",name:"TestThoughts",component:B},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5830))}],X=new b.Z({mode:"hash",base:"/multi/",routes:Q});var q=X,J=n(4720),D=n.n(J);i["default"].use(D()),i["default"].config.productionTip=!1,i["default"].use(b.Z),new i["default"]({router:q,render:t=>t(v)}).$mount("#app")},5722:function(t,e,n){t.exports=n.p+"img/homepage.883ca07c.png"},9105:function(t,e,n){t.exports=n.p+"img/0.efa42a09.png"},6735:function(t,e,n){t.exports=n.p+"img/1.9f5c1581.png"},1478:function(t,e,n){t.exports=n.p+"img/10.d5789050.png"},703:function(t,e,n){t.exports=n.p+"img/100.8fc17e55.png"},5149:function(t,e,n){t.exports=n.p+"img/101.bc992d29.png"},1866:function(t,e,n){t.exports=n.p+"img/102.eff554f1.png"},2222:function(t,e,n){t.exports=n.p+"img/103.24b05d07.png"},9003:function(t,e,n){t.exports=n.p+"img/104.3bcb8773.png"},7470:function(t,e,n){t.exports=n.p+"img/105.852aac87.png"},3807:function(t,e,n){t.exports=n.p+"img/106.1723f547.png"},4585:function(t,e,n){t.exports=n.p+"img/107.4426cc5c.png"},63:function(t,e,n){t.exports=n.p+"img/108.feba3f9d.png"},9264:function(t,e,n){t.exports=n.p+"img/109.034490fe.png"},3959:function(t,e,n){t.exports=n.p+"img/11.e8cda5ff.png"},3907:function(t,e,n){t.exports=n.p+"img/110.b78f697d.png"},6149:function(t,e,n){t.exports=n.p+"img/111.fef6f7e4.png"},1845:function(t,e,n){t.exports=n.p+"img/112.16ab2555.png"},485:function(t,e,n){t.exports=n.p+"img/113.87f66a76.png"},5587:function(t,e,n){t.exports=n.p+"img/114.ec4c1b2c.png"},6349:function(t,e,n){t.exports=n.p+"img/115.d1d26011.png"},9907:function(t,e,n){t.exports=n.p+"img/116.cbac485f.png"},56:function(t,e,n){t.exports=n.p+"img/117.c8c60656.png"},7697:function(t,e,n){t.exports=n.p+"img/118.827773af.png"},1033:function(t,e,n){t.exports=n.p+"img/119.39470088.png"},4520:function(t,e,n){t.exports=n.p+"img/12.b79f2bc0.png"},447:function(t,e,n){t.exports=n.p+"img/120.cef79865.png"},1067:function(t,e,n){t.exports=n.p+"img/121.480fc2b0.png"},9704:function(t,e,n){t.exports=n.p+"img/122.67d2a136.png"},5888:function(t,e,n){t.exports=n.p+"img/123.78ac9f57.png"},7292:function(t,e,n){t.exports=n.p+"img/124.cd12f659.png"},2128:function(t,e,n){t.exports=n.p+"img/125.96e2a10b.png"},7969:function(t,e,n){t.exports=n.p+"img/126.f220ef00.png"},6213:function(t,e,n){t.exports=n.p+"img/127.a06dd3a5.png"},7374:function(t,e,n){t.exports=n.p+"img/128.dcd9f022.png"},980:function(t,e,n){t.exports=n.p+"img/129.1a0a1182.png"},5892:function(t,e,n){t.exports=n.p+"img/13.0cac2ca6.png"},8051:function(t,e,n){t.exports=n.p+"img/130.326127ab.png"},2462:function(t,e,n){t.exports=n.p+"img/131.d94403c3.png"},3893:function(t,e,n){t.exports=n.p+"img/132.d40f480a.png"},6414:function(t,e,n){t.exports=n.p+"img/133.258ce16c.png"},852:function(t,e,n){t.exports=n.p+"img/134.5edd5e44.png"},4426:function(t,e,n){t.exports=n.p+"img/135.d08edc02.png"},8460:function(t,e,n){t.exports=n.p+"img/136.de935a37.png"},3518:function(t,e,n){t.exports=n.p+"img/137.b5b3bcec.png"},7535:function(t,e,n){t.exports=n.p+"img/138.6f1b2224.png"},5712:function(t,e,n){t.exports=n.p+"img/139.4d53719e.png"},6257:function(t,e,n){t.exports=n.p+"img/14.9f12b3b9.png"},4854:function(t,e,n){t.exports=n.p+"img/140.49ea6075.png"},1019:function(t,e,n){t.exports=n.p+"img/15.dbcd0f23.png"},3374:function(t,e,n){t.exports=n.p+"img/16.2c2ee320.png"},8343:function(t,e,n){t.exports=n.p+"img/17.a30650e8.png"},7378:function(t,e,n){t.exports=n.p+"img/18.246410b8.png"},5881:function(t,e,n){t.exports=n.p+"img/19.380315be.png"},4423:function(t,e,n){t.exports=n.p+"img/2.689968de.png"},2641:function(t,e,n){t.exports=n.p+"img/20.8629a412.png"},3517:function(t,e,n){t.exports=n.p+"img/21.5c90151f.png"},5857:function(t,e,n){t.exports=n.p+"img/22.16be2104.png"},4743:function(t,e,n){t.exports=n.p+"img/23.7f8731f3.png"},4462:function(t,e,n){t.exports=n.p+"img/24.a99eb8e9.png"},1645:function(t,e,n){t.exports=n.p+"img/25.bea96e2a.png"},2211:function(t,e,n){t.exports=n.p+"img/26.0099800b.png"},1006:function(t,e,n){t.exports=n.p+"img/27.4cafe7dc.png"},4133:function(t,e,n){t.exports=n.p+"img/28.20dbaa8a.png"},5752:function(t,e,n){t.exports=n.p+"img/29.fa6a7186.png"},3354:function(t,e,n){t.exports=n.p+"img/3.76b4a5e3.png"},7464:function(t,e,n){t.exports=n.p+"img/30.0d6f7ece.png"},3810:function(t,e,n){t.exports=n.p+"img/31.a731f9d2.png"},3013:function(t,e,n){t.exports=n.p+"img/32.d2972066.png"},7589:function(t,e,n){t.exports=n.p+"img/33.a995de24.png"},6399:function(t,e,n){t.exports=n.p+"img/34.d7dca018.png"},2119:function(t,e,n){t.exports=n.p+"img/35.9d139e71.png"},2534:function(t,e,n){t.exports=n.p+"img/36.c4b66dad.png"},596:function(t,e,n){t.exports=n.p+"img/37.0a6596bd.png"},8022:function(t,e,n){t.exports=n.p+"img/38.a6a3b154.png"},7537:function(t,e,n){t.exports=n.p+"img/39.cee2931e.png"},527:function(t,e,n){t.exports=n.p+"img/4.53f9da84.png"},3744:function(t,e,n){t.exports=n.p+"img/40.aad755b7.png"},9027:function(t,e,n){t.exports=n.p+"img/41.32581cbf.png"},4517:function(t,e,n){t.exports=n.p+"img/42.60339a4d.png"},9874:function(t,e,n){t.exports=n.p+"img/43.9195e0e8.png"},1814:function(t,e,n){t.exports=n.p+"img/44.18144208.png"},6207:function(t,e,n){t.exports=n.p+"img/45.cff37cd6.png"},9378:function(t,e,n){t.exports=n.p+"img/46.bb7e1406.png"},5359:function(t,e,n){t.exports=n.p+"img/47.25cb251e.png"},4992:function(t,e,n){t.exports=n.p+"img/48.b4f9350d.png"},7777:function(t,e,n){t.exports=n.p+"img/49.8c9552be.png"},7479:function(t,e,n){t.exports=n.p+"img/5.b99bcb7a.png"},8839:function(t,e,n){t.exports=n.p+"img/50.acd8a3a1.png"},2315:function(t,e,n){t.exports=n.p+"img/51.ec7e0c16.png"},7887:function(t,e,n){t.exports=n.p+"img/52.6ae3d50f.png"},3457:function(t,e,n){t.exports=n.p+"img/53.f8f025c9.png"},2700:function(t,e,n){t.exports=n.p+"img/54.c0795cf2.png"},6288:function(t,e,n){t.exports=n.p+"img/55.114b3747.png"},984:function(t,e,n){t.exports=n.p+"img/56.cf3fa043.png"},3269:function(t,e,n){t.exports=n.p+"img/57.d591b0fc.png"},9127:function(t,e,n){t.exports=n.p+"img/58.6f32acd1.png"},8079:function(t,e,n){t.exports=n.p+"img/59.1813ee97.png"},3945:function(t,e,n){t.exports=n.p+"img/6.2d1ae2a6.png"},5055:function(t,e,n){t.exports=n.p+"img/60.5b338599.png"},915:function(t,e,n){t.exports=n.p+"img/61.1b06eab5.png"},8293:function(t,e,n){t.exports=n.p+"img/62.af94d624.png"},531:function(t,e,n){t.exports=n.p+"img/63.78e52d9a.png"},5608:function(t,e,n){t.exports=n.p+"img/64.9312d4c6.png"},4850:function(t,e,n){t.exports=n.p+"img/65.79dc7325.png"},8256:function(t,e,n){t.exports=n.p+"img/66.3b52e040.png"},8998:function(t,e,n){t.exports=n.p+"img/67.458de038.png"},7148:function(t,e,n){t.exports=n.p+"img/68.a84a4e68.png"},3240:function(t,e,n){t.exports=n.p+"img/69.9e525f98.png"},196:function(t,e,n){t.exports=n.p+"img/7.d0165e0c.png"},731:function(t,e,n){t.exports=n.p+"img/70.6159eceb.png"},5280:function(t,e,n){t.exports=n.p+"img/71.882c7616.png"},1304:function(t,e,n){t.exports=n.p+"img/72.342db9b6.png"},705:function(t,e,n){t.exports=n.p+"img/73.e5396652.png"},6363:function(t,e,n){t.exports=n.p+"img/74.b54788d0.png"},4884:function(t,e,n){t.exports=n.p+"img/75.5918f271.png"},3730:function(t,e,n){t.exports=n.p+"img/76.03b15e0b.png"},1371:function(t,e,n){t.exports=n.p+"img/77.80aaa5e4.png"},7926:function(t,e,n){t.exports=n.p+"img/78.63bd5e71.png"},7606:function(t,e,n){t.exports=n.p+"img/79.a589e925.png"},3728:function(t,e,n){t.exports=n.p+"img/8.5ebcae9d.png"},5671:function(t,e,n){t.exports=n.p+"img/80.e4e1841d.png"},3382:function(t,e,n){t.exports=n.p+"img/81.d562072c.png"},7322:function(t,e,n){t.exports=n.p+"img/82.161fb9c2.png"},8374:function(t,e,n){t.exports=n.p+"img/83.448999ab.png"},6816:function(t,e,n){t.exports=n.p+"img/84.4bfe7662.png"},9290:function(t,e,n){t.exports=n.p+"img/85.147df734.png"},7936:function(t,e,n){t.exports=n.p+"img/86.1f4aac68.png"},946:function(t,e,n){t.exports=n.p+"img/87.8e5356c2.png"},561:function(t,e,n){t.exports=n.p+"img/88.c22b185e.png"},4495:function(t,e,n){t.exports=n.p+"img/89.e9d4566e.png"},8482:function(t,e,n){t.exports=n.p+"img/9.01f19b06.png"},3273:function(t,e,n){t.exports=n.p+"img/90.67c51cfa.png"},2705:function(t,e,n){t.exports=n.p+"img/91.5e159d44.png"},7662:function(t,e,n){t.exports=n.p+"img/92.001f9559.png"},7765:function(t,e,n){t.exports=n.p+"img/93.7e90ab60.png"},7666:function(t,e,n){t.exports=n.p+"img/94.5d9ad6d3.png"},7163:function(t,e,n){t.exports=n.p+"img/95.d9fb52af.png"},9563:function(t,e,n){t.exports=n.p+"img/96.410c4253.png"},5794:function(t,e,n){t.exports=n.p+"img/97.2a3e1708.png"},9340:function(t,e,n){t.exports=n.p+"img/98.22525a0c.png"},4307:function(t,e,n){t.exports=n.p+"img/99.f023f78b.png"}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var p=e[i]={exports:{}};return t[i](p,p.exports,n),p.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,p){if(!i){var r=1/0;for(s=0;s<t.length;s++){i=t[s][0],o=t[s][1],p=t[s][2];for(var c=!0,a=0;a<i.length;a++)(!1&p||r>=p)&&Object.keys(n.O).every((function(t){return n.O[t](i[a])}))?i.splice(a--,1):(c=!1,p<r&&(r=p));if(c){t.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}p=p||0;for(var s=t.length;s>0&&t[s-1][2]>p;s--)t[s]=t[s-1];t[s]=[i,o,p]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.fcf681de.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="cleverctz:";n.l=function(i,o,p,r){if(t[i])t[i].push(o);else{var c,a;if(void 0!==p)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+p){c=u;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+p),c.src=i),t[i]=[o];var m=function(e,n){c.onerror=c.onload=null,clearTimeout(f);var o=t[i];if(delete t[i],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/multi/"}(),function(){var t={143:0};n.f.j=function(e,i){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else{var p=new Promise((function(n,i){o=t[e]=[n,i]}));i.push(o[2]=p);var r=n.p+n.u(e),c=new Error,a=function(i){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var p=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;c.message="Loading chunk "+e+" failed.\n("+p+": "+r+")",c.name="ChunkLoadError",c.type=p,c.request=r,o[1](c)}};n.l(r,a,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,p,r=i[0],c=i[1],a=i[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(a)var s=a(n)}for(e&&e(i);l<r.length;l++)p=r[l],n.o(t,p)&&t[p]&&t[p][0](),t[p]=0;return n.O(s)},i=self["webpackChunkcleverctz"]=self["webpackChunkcleverctz"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3683)}));i=n.O(i)})();
//# sourceMappingURL=app.d12da809.js.map