Yogurt.BottomTap=CLASS({preset:function(){"use strict";return NODE},init:function(t){"use strict";var o=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarColor?"#333":BROWSER_CONFIG.Yogurt.ToolbarColor;t.setDom({style:{height:60,color:"#fff"},c:content=DIV({style:{position:"fixed",bottom:0,backgroundColor:o,height:60,width:"100%",textAlign:"center"}})})}}),Yogurt.Button=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,l,d=e.img,c=e.title,a=e.href,s=e.target,f=(e.style,void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ButtonColor?"#333":BROWSER_CONFIG.Yogurt.ButtonColor);n=A({style:{display:"block",textAlign:"center",paddingTop:20,paddingBottom:20,cursor:"pointer",textDecoration:"none",color:f,fontSize:24,border:"1px solid "+f,borderRadius:5,touchCallout:"none",userSelect:"none",backgroundColor:"#fff"},href:a,target:s,on:{mouseover:function(){n.addStyle({color:"#fff",backgroundColor:f})},mouseout:function(){n.addStyle({color:f,backgroundColor:"#fff"})}}}),void 0!==c&&n.prepend(DIV({c:r=SPAN({c:void 0===c?"":c})})),void 0!==d&&n.prepend(DIV({style:{marginBottom:void 0!==c?5:0},c:[d]})),t.setDom(n),o.setTitle=i=function(t){r.empty(),r.append(t)},o.getImg=u=function(){return d},o.tap=l=function(){EVENT.fireAll({node:o,name:"tap"})}}}),Yogurt.Checkbox=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,l,d,c,a,s,f,p,g=e.name,S=e.label,C=e.value,v=e.wrapperStyle,y=e.inputStyle,O=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ButtonColor?"#333":BROWSER_CONFIG.Yogurt.ButtonColor;n=DIV({style:{textDecoration:"none",color:O,border:"1px solid "+O,paddingLeft:10},on:{tap:function(t){r.toggleCheck(),t.stop()}},c:[r=INPUT({style:{flt:"left",marginTop:10,marginRight:5},name:g,type:"checkbox",value:C,on:p}),i=SPAN({style:{flt:"left",padding:10,paddingLeft:0},c:S}),CLEAR_BOTH()]}),t.setWrapperDom(n),o.getName=u=function(){return g},o.getValue=l=function(){return r.getValue()},o.setValue=d=function(t){r.setValue(t)},o.select=c=function(){r.select()},o.blur=a=function(){r.blur()},o.addWrapperStyle=s=function(t){n.addStyle(t)},void 0!==v&&s(v),o.addInputStyle=f=function(t){r.addStyle(t)},void 0!==y&&f(y),o.on=p=function(t,e){"focus"===t||"blur"===t||"change"===t||"keydown"===t||"keypress"===t||"keyup"===t?EVENT({node:o,lowNode:r,name:t},e):EVENT({node:o,lowNode:n,name:t},e)}}}),Yogurt.Select=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,l,d,c,a,s,f,p,g=e.name,S=e.value,C=e.options,v=e.wrapperStyle,y=e.selectStyle;n=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666",borderLeft:"5px solid #666"},c:r=SELECT({style:{width:"100%",backgroundColor:"transparent",border:"none"},name:g,value:S,on:p})}),t.setWrapperDom(n),o.getName=i=function(){return g},o.getValue=u=function(){return r.getValue()},o.setValue=l=function(t){r.setValue(t)},o.select=d=function(){r.select()},o.blur=c=function(){r.blur()},o.addWrapperStyle=a=function(t){n.addStyle(t)},void 0!==v&&a(v),o.addSelectStyle=s=function(t){r.addStyle(t)},void 0!==y&&s(y),o.addOption=f=function(t){r.append(t)},void 0!==C&&EACH(C,function(t){f(t)}),o.on=p=function(t,e){"focus"===t||"blur"===t||"change"===t||"select"===t||"keydown"===t||"keypress"===t||"keyup"===t?EVENT({node:o,lowNode:r,name:t},e):EVENT({node:o,lowNode:n,name:t},e)}}}),Yogurt.Submit=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n=void 0===e?void 0:e.value,r=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ButtonColor?"#333":BROWSER_CONFIG.Yogurt.ButtonColor;t.setDom(input=INPUT({type:"submit",style:{display:"block",textAlign:"center",paddingTop:20,paddingBottom:20,cursor:"pointer",textDecoration:"none",color:r,fontSize:24,border:"1px solid "+r,borderRadius:5,touchCallout:"none",userSelect:"none",backgroundColor:"#fff",width:"100%"},value:n,on:{mouseover:function(){input.addStyle({color:"#fff",backgroundColor:r})},mouseout:function(){input.addStyle({color:r,backgroundColor:"#fff"})}}}))}}),Yogurt.Toolbar=CLASS(function(){"use strict";var t=999,o=50;return{preset:function(){return NODE},init:function(e,n,r){var i=void 0===r?void 0:r.left,u=void 0===r?void 0:r.title,l=void 0===r?void 0:r.right,d=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarColor?"#333":BROWSER_CONFIG.Yogurt.ToolbarColor,c=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarTextColor?"#fff":BROWSER_CONFIG.Yogurt.ToolbarTextColor;e.setDom(DIV({style:{backgroundColor:d,height:o,color:c},c:[DIV({style:{position:"fixed",top:0,backgroundColor:d,height:o,width:"100%",zIndex:t},c:[void 0===i?"":DIV({style:{position:"absolute",top:0,left:0},c:i}),H1({style:{paddingTop:13,fontSize:20,textAlign:"center",fontWeight:"bold"},c:void 0===u?"":u}),void 0===l?"":DIV({style:{position:"absolute",top:0,right:0},c:l})]})]}))}}}),Yogurt.ToolbarButton=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,l,d,c,a=e.img,s=e.title,f=e.href,p=e.target;n=A({style:{display:"block",padding:"16px 10px",cursor:"pointer",fontSize:16},href:f,target:p,c:[r=DIV({style:{flt:"left"},c:i=SPAN({c:void 0===s?"":s})}),CLEAR_BOTH()]}),void 0!==a&&(a.addStyle({flt:"left"}),void 0===a.getStyle("margin")&&void 0===a.getStyle("marginRight")&&a.addStyle({marginRight:5}),n.prepend(a),u=EVENT({node:a,name:"load"},function(){r.addStyle({marginTop:(a.getHeight()-r.getHeight())/2}),u.remove()})),t.setDom(n),o.setTitle=l=function(t){i.empty(),i.append(t)},o.getImg=d=function(){return a},o.tap=c=function(){EVENT.fireAll({node:o,name:"tap"})}}}),Yogurt.Wrapper=CLASS({preset:function(){"use strict";return NODE},init:function(t){"use strict";t.setDom(DIV({style:COMBINE([{backgroundColor:"#fff",color:"#000",fontSize:16,position:"absolute",left:0,top:0,width:"100%"},void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.WrapperStyle?{}:BROWSER_CONFIG.Yogurt.WrapperStyle])}))}});