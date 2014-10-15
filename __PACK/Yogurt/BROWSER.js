Yogurt.Alert=CLASS({preset:function(){"use strict";return UUI.MODAL},params:function(){"use strict";return{wrapperStyle:{backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:function(t){return t>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20,fontSize:20}}},init:function(t,o,e){"use strict";o.append(e),UANI.FADE_IN({node:o.getNode()})}}),Yogurt.BottomBar=CLASS(function(){"use strict";return{preset:function(){return NODE},init:function(t,o,e){var n,r,i,u,l=e.buttons,d=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.BottomBarColor?"#666":BROWSER_CONFIG.Yogurt.BottomBarColor,f=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.BottomBarTextColor?"#fff":BROWSER_CONFIG.Yogurt.BottomBarTextColor,c=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.BottomBarHeight?70:BROWSER_CONFIG.Yogurt.BottomBarHeight,s=e.wrapperStyle,a=e.contentStyle;n=DIV({style:{height:c},c:r=DIV({style:{position:"fixed",left:0,bottom:0,backgroundColor:d,width:"100%"},c:DIV({style:{width:Yogurt.BottomButton.getWidth()*l.length,margin:"auto",padding:"12px 0",color:f},c:RUN(function(){var t=[];return EACH(l,function(o){t.push(o)}),t.push(CLEAR_BOTH()),t})})})}),t.setWrapperDom(n),t.setContentDom(r),o.addWrapperStyle=i=function(t){n.addStyle(t)},void 0!==s&&i(s),o.addContentStyle=u=function(t){r.addStyle(t)},void 0!==a&&u(a)}}}),Yogurt.BottomButton=CLASS(function(t){"use strict";var o,e=60,n=24;return t.getWidth=o=function(){return e},{preset:function(){return NODE},init:function(t,o,r){var i,u,l,d,f,c=r.img,s=r.title,a=r.href,g=r.target;i=A({style:{flt:"left",display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none",fontSize:12,width:e},href:a,target:g}),void 0!==s&&i.prepend(u=DIV({c:void 0===s?"":s})),void 0!==c&&(i.prepend(DIV({style:{marginBottom:void 0!==s?5:0},c:c})),c.addStyle({height:n})),t.setDom(i),o.setTitle=l=function(t){u.empty(),u.append(t)},o.getImg=d=function(){return c},o.tap=f=function(){EVENT.fireAll({node:o,name:"tap"})}}}}),Yogurt.Button=CLASS({preset:function(){"use strict";return UUI.BUTTON},params:function(){"use strict";var t=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ButtonColor?"#333":BROWSER_CONFIG.Yogurt.ButtonColor;return{style:{padding:"20px 0",color:t,fontSize:24,border:"1px solid "+t,borderRadius:5,backgroundColor:"#fff"},spacing:5,on:{mouseover:function(o,e){e.addStyle({color:"#fff",backgroundColor:t})},mouseout:function(o,e){e.addStyle({color:t,backgroundColor:"#fff"})}}}}}),Yogurt.Checkbox=CLASS({preset:function(){"use strict";return UUI.FULL_CHECKBOX},params:function(){"use strict";return{wrapperStyle:{padding:5}}}}),Yogurt.Confirm=CLASS({preset:function(){"use strict";return Yogurt.Alert},init:function(t,o,e,n){"use strict";o.append(DIV({style:{marginTop:20},c:[Yogurt.Button({style:{width:"47%",flt:"left"},c:"Yes",on:{tap:function(){n(),o.remove()}}}),Yogurt.Button({style:{width:"47%",flt:"right"},c:"No",on:{tap:function(){o.close()}}}),CLEAR_BOTH()]}))}}),Yogurt.Input=CLASS({preset:function(){"use strict";return UUI.FULL_INPUT},params:function(){"use strict";return{wrapperStyle:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666"}}}}),Yogurt.MenuLayout=CLASS(function(t){"use strict";var o,e,n=200,r=800;return t.getMenuWidth=o=function(){return n},t.getHideMenuWinWidth=e=function(){return r},{preset:function(){return NODE},init:function(t,o,e){var i,u,l,d,f,c,s,a,g,p,S,m,E,h,C,I,y,v=e.toolbar,R=e.leftMenu,A=e.rightMenu,N=e.bottomBar,B=!0,Y=!0,O=0;void 0!==R&&(O+=1),void 0!==A&&(O+=1),l=DIV({c:[void 0!==R?d=DIV({style:{position:"fixed",top:0,backgroundColor:"#222",width:n,height:"100%",overflowY:"scroll",onDisplayResize:function(t){return t>r?{left:0}:{left:-n}}},c:R}):"",void 0!==A?f=DIV({style:{position:"fixed",top:0,backgroundColor:"#222",width:n,height:"100%",overflowY:"scroll",onDisplayResize:function(t){return t>r?{right:0}:{right:-n}}},c:A}):"",v,c=DIV({style:{onDisplayResize:function(t){return t>r?{marginLeft:n,width:BODY.getWidth()-n*O}:{marginLeft:0,width:"100%"}}}})]}),v.addContentStyle({onDisplayResize:function(t){return t>r?{left:n,width:BODY.getWidth()-2*n}:{left:0,width:"100%"}}}),t.setWrapperDom(l),t.setContentDom(c),o.setBottomBar=p=function(t){N=t,N.addContentStyle({onDisplayResize:function(t){return t>r?{left:n,width:BODY.getWidth()-2*n}:{left:0,width:"100%"}}}),l.append(N)},void 0!==N&&p(N),o.removeBottomBar=S=function(){N.remove(),N=void 0},o.showLeftMenu=m=function(){WIN_WIDTH()>r||B===!0&&i!==!0&&(ANIMATE({node:c,keyframes:KEYFRAMES({from:{marginLeft:0},to:{marginLeft:n}})},function(){i=!0}),ANIMATE({node:v.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:n}})}),ANIMATE({node:d,keyframes:KEYFRAMES({from:{left:-n},to:{left:0}})}),void 0!==N&&ANIMATE({node:N.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:n}})}),B=!1,s=EVENT({node:v,name:"touchstart"},function(){h()}),a=EVENT({node:c,name:"touchstart"},function(){h()}),void 0!==N&&(g=EVENT({node:N,name:"touchstart"},function(){h()})))},o.hideLeftMenu=E=function(){WIN_WIDTH()>r||B!==!0&&i===!0&&(ANIMATE({node:c,keyframes:KEYFRAMES({from:{marginLeft:n},to:{marginLeft:0}})},function(){B=!0}),ANIMATE({node:v.getContentDom(),keyframes:KEYFRAMES({from:{left:n},to:{left:0}})}),ANIMATE({node:d,keyframes:KEYFRAMES({from:{left:0},to:{left:-n}})}),void 0!==N&&ANIMATE({node:N.getContentDom(),keyframes:KEYFRAMES({from:{left:n},to:{left:0}})}),i=!1,s.remove(),a.remove(),void 0!==g&&g.remove())},o.toggleLeftMenu=h=function(){WIN_WIDTH()>r||(B===!0&&i!==!0&&m(),B!==!0&&i===!0&&E())},o.showRightMenu=C=function(){WIN_WIDTH()>r||Y===!0&&u!==!0&&(ANIMATE({node:c,keyframes:KEYFRAMES({from:{marginLeft:0},to:{marginLeft:-n}})},function(){u=!0}),ANIMATE({node:v.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:-n}})}),ANIMATE({node:f,keyframes:KEYFRAMES({from:{right:-n},to:{right:0}})}),void 0!==N&&ANIMATE({node:N.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:-n}})}),Y=!1,s=EVENT({node:v,name:"touchstart"},function(){y()}),a=EVENT({node:c,name:"touchstart"},function(){y()}),void 0!==N&&(g=EVENT({node:N,name:"touchstart"},function(){y()})))},o.hideRightMenu=I=function(){WIN_WIDTH()>r||Y!==!0&&u===!0&&(ANIMATE({node:c,keyframes:KEYFRAMES({from:{marginLeft:-n},to:{marginLeft:0}})},function(){Y=!0}),ANIMATE({node:v.getContentDom(),keyframes:KEYFRAMES({from:{left:-n},to:{left:0}})}),ANIMATE({node:f,keyframes:KEYFRAMES({from:{right:0},to:{right:-n}})}),void 0!==N&&ANIMATE({node:N.getContentDom(),keyframes:KEYFRAMES({from:{left:-n},to:{left:0}})}),u=!1,s.remove(),a.remove(),void 0!==g&&g.remove())},o.toggleRightMenu=y=function(){WIN_WIDTH()>r||(Y===!0&&u!==!0&&C(),Y!==!0&&u===!0&&I())}}}}),Yogurt.Prompt=CLASS({preset:function(){"use strict";return Yogurt.Alert},init:function(t,o,e,n){"use strict";var r;o.append(FORM({c:[r=Yogurt.Input({style:{marginTop:10}}),Yogurt.Submit({style:{marginTop:20}})],on:{submit:function(){n(r.getValue()),o.remove()}}}))}}),Yogurt.Select=CLASS({preset:function(){"use strict";return UUI.FULL_SELECT},params:function(){"use strict";return{wrapperStyle:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666",borderLeft:"5px solid #666"}}}}),Yogurt.Slide=CLASS({preset:function(){"use strict";return UUI.PANEL}}),Yogurt.Slider=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,l,d,f,c,s,a=e.slides,g=e.wrapperStyle,p=e.contentStyle,S=e.isNotUsingDots,m=[],E=0;n=DIV({c:[DIV({style:{position:"relative"},c:[r=DIV({style:{overflowX:"hidden"},c:i=DIV({c:RUN(function(){var t=[];return EACH(a,function(o){t.push(o)}),t.push(CLEAR_BOTH()),t})})}),DIV({style:{position:"absolute",left:0,top:0,width:20,height:"100%",textAlign:"center",cursor:"pointer"},c:UUI.V_CENTER({wrapperStyle:{height:"100%"},c:IMG({src:Yogurt.R("left.png")})}),on:{tap:function(){d(E-1)}}}),DIV({style:{position:"absolute",right:0,top:0,width:20,height:"100%",textAlign:"center",cursor:"pointer"},c:UUI.V_CENTER({wrapperStyle:{height:"100%"},c:IMG({src:Yogurt.R("right.png")})}),on:{tap:function(){d(E+1)}}})]}),S===!0?"":UUI.V_CENTER({wrapperStyle:{height:20},c:DIV({style:{width:12*a.length,margin:"auto"},c:RUN(function(){var t=[];return REPEAT(a.length,function(o){var e;t.push(e=UUI.PANEL({wrapperStyle:{flt:"left",padding:"0 2px"},contentStyle:{backgroundColor:0===o?"#000":RGBA([128,128,128,.3]),width:8,height:8,borderRadius:4}})),m.push(e)}),t.push(CLEAR_BOTH()),t})})})]}),t.setWrapperDom(n),t.setContentDom(i),o.on("show",function(){u=o.getWidth(),o.addContentStyle({width:u*a.length}),EACH(a,function(t){t.addStyle({flt:"left",width:u})})}),o.scrollTo=d=function(t){0>t?t=a.length-1:t>=a.length&&(t=0),S!==!0&&m[E].addContentStyle({backgroundColor:RGBA([128,128,128,.3])}),void 0!==l&&(l.remove(),l=void 0),t>E?(E=t,l=INTERVAL(function(){return r.getEl().scrollLeft>=E*u?(r.getEl().scrollLeft=E*u,!1):void(r.getEl().scrollLeft+=u/50)})):E>t&&(E=t,l=INTERVAL(function(){return r.getEl().scrollLeft<=E*u?(r.getEl().scrollLeft=E*u,!1):void(r.getEl().scrollLeft-=u/50)})),S!==!0&&m[E].addContentStyle({backgroundColor:"#000"}),EVENT.fireAll({node:o,name:"scroll"})},o.on("touchstart",function(t){var e,n,i=r.getEl().scrollLeft,u=t.getLeft();o.on("touchmove",e=function(t){t.stop(),r.getEl().scrollLeft=i+u-t.getLeft()}),o.on("touchend",n=function(t){r.getEl().scrollLeft;u-t.getLeft()<0?d(E-1):u-t.getLeft()>0&&d(E+1),t.stop(),o.off("touchmove",e),o.off("touchend",n),o.off("mouseout",n)}),o.on("mouseout",n),t.stop()}),o.addWrapperStyle=f=function(t){n.addStyle(t)},void 0!==g&&f(g),o.addContentStyle=c=function(t){i.addStyle(t)},void 0!==p&&c(p),o.getPage=s=function(){return E}}}),Yogurt.Submit=CLASS({preset:function(){"use strict";return UUI.FULL_SUBMIT},params:function(){"use strict";var t=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ButtonColor?"#333":BROWSER_CONFIG.Yogurt.ButtonColor;return{style:{display:"block",textAlign:"center",paddingTop:20,paddingBottom:20,cursor:"pointer",textDecoration:"none",color:t,fontSize:24,border:"1px solid "+t,borderRadius:5,touchCallout:"none",userSelect:"none",backgroundColor:"#fff",width:"100%"},on:{mouseover:function(o,e){e.addStyle({color:"#fff",backgroundColor:t})},mouseout:function(o,e){e.addStyle({color:t,backgroundColor:"#fff"})}}}}}),Yogurt.Textarea=CLASS({preset:function(){"use strict";return UUI.FULL_TEXTAREA},params:function(){"use strict";return{wrapperStyle:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666"}}}}),Yogurt.Toolbar=CLASS(function(){"use strict";var t=999,o=50;return{preset:function(){return NODE},init:function(e,n,r){var i,u,l,d,f,c,s=void 0===r?void 0:r.left,a=void 0===r?void 0:r.title,g=void 0===r?void 0:r.right,p=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarColor?"#333":BROWSER_CONFIG.Yogurt.ToolbarColor,S=void 0===BROWSER_CONFIG.Yogurt?void 0:BROWSER_CONFIG.Yogurt.ToolbarBackgroundImage,m=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarTextColor?"#fff":BROWSER_CONFIG.Yogurt.ToolbarTextColor,E=void 0===r?void 0:r.wrapperStyle,h=void 0===r?void 0:r.contentStyle;i=DIV({style:{backgroundColor:"#333",height:o},c:l=DIV({style:{position:"fixed",top:0,backgroundColor:p,backgroundImage:S,height:o,width:"100%",zIndex:t,color:m},c:[void 0===s?"":DIV({style:{position:"absolute",top:0,left:0},c:s}),u=H1({style:{paddingTop:13,fontSize:20,textAlign:"center",fontWeight:"bold"},c:void 0===a?"":a}),void 0===g?"":DIV({style:{position:"absolute",top:0,right:0},c:g})]})}),e.setWrapperDom(i),e.setContentDom(l),n.addWrapperStyle=d=function(t){i.addStyle(t)},void 0!==E&&d(E),n.addContentStyle=f=function(t){l.addStyle(t)},void 0!==h&&f(h),n.setTitle=c=function(t){u.empty(),u.append(t)}}}}),Yogurt.ToolbarButton=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,l,d,f,c=e.img,s=e.title,a=e.href,g=e.target;n=A({style:{display:"block",padding:"16px 10px",cursor:"pointer",fontSize:16},href:a,target:g,c:[r=DIV({style:{flt:"left"},c:i=SPAN({c:void 0===s?"":s})}),CLEAR_BOTH()]}),void 0!==c&&(c.addStyle({flt:"left"}),void 0===c.getStyle("margin")&&void 0===c.getStyle("marginRight")&&c.addStyle({marginRight:5}),n.prepend(c),u=EVENT({node:c,name:"load"},function(){r.addStyle({marginTop:(c.getHeight()-r.getHeight())/2}),u.remove()})),t.setDom(n),o.setTitle=l=function(t){i.empty(),i.append(t)},o.getImg=d=function(){return c},o.tap=f=function(){EVENT.fireAll({node:o,name:"tap"})}}}),Yogurt.Wrapper=CLASS({preset:function(){"use strict";return NODE},init:function(t){"use strict";t.setDom(DIV({style:COMBINE([{backgroundColor:"#fff",color:"#000",fontSize:16},void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.WrapperStyle?{}:BROWSER_CONFIG.Yogurt.WrapperStyle])}))}});