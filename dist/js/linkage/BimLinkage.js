"use strict";var BimLinkage={iViewer:null,ifchoese:!0,be3DViewer:!0,clearNum:1,modelids:null,arH:null,countH:null,button1:null,button2:null,button3:null,button4:null,_SubToolbar1:null,_SubToolbar2:null,_SubToolbar3:null,_SubToolbar4:null,Toolbar1:null,Toolbar2:null,Toolbar3:null,Toolbar4:null,currentLmvId:null,currentThreeUrl:null,currentTwoUrl:null,modelVersion:null,treeId:null,count:1,isFirst:!0,winWidth:window.innerWidth,winHeight:window.innerHeight,dockingPanelNone:function(){var e=$(".markup");if(e&&0<e.length)for(var i=0;i<e.length;i++){e[i].style.display="none"}},changeToCad:function(){BimLinkage.show3D(),null!=BimLinkage._SubToolbar1&&BimLinkage._SubToolbar1.addControl(BimLinkage.button1),null!=BimLinkage._SubToolbar2&&BimLinkage._SubToolbar2.removeControl(BimLinkage.button2),null!=BimLinkage._SubToolbar3&&BimLinkage._SubToolbar3.addControl(BimLinkage.button3),BimLinkage.count=0},changeToViewer:function(){BimLinkage.show2D(),BimLinkage._SubToolbar1.removeControl(BimLinkage.button1),BimLinkage._SubToolbar2.addControl(BimLinkage.button2)},changeToCadlink:function(){BimLinkage.show2D(),BimLinkage._SubToolbar1.removeControl(BimLinkage.button1),BimLinkage._SubToolbar2.addControl(BimLinkage.button2),BimLinkage._SubToolbar3.removeControl(BimLinkage.button3)},changeToCadlink_small:function(){BimLinkage.show3D(),null!=BimLinkage._SubToolbar1&&BimLinkage._SubToolbar1.addControl(BimLinkage.button1),null!=BimLinkage._SubToolbar3&&BimLinkage._SubToolbar3.addControl(BimLinkage.button3),null!=BimLinkage._SubToolbar4&&BimLinkage._SubToolbar4.removeControl(BimLinkage.button4)},showTwoDModel:function(e,i){var n={docid2D:e[0].path,env:""},t=document.getElementById("menu");BimLinkage.iViewer=new Autodesk.Viewing.Private.GuiViewer3D(t,{}),BimBdip.td_view=BimLinkage.iViewer,Autodesk.Viewing.Initializer(n,function(){BimLinkage.iViewer.initialize(),BimLinkage.iViewer.load(n.docid2D,i),BimLinkage.iViewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT,function(e){setTimeout(function(){BimLinkage.iViewer.autocam.setHomeViewFrom(BimLinkage.iViewer.navigation.getCamera())},1e3),BimLinkage.iViewer.setGhosting(!1),BimLinkage.createToolbar(),0==BimLinkage.clearNum?(BimLinkage.clear3DBtn(),BimLinkage.clearNum=1):(BimLinkage.clear2DBtn(),BimLinkage.clearNum=0),BimLinkage.iViewer.addEventListener("selection",function(e){1==BimLinkage.ifchoese?(BimLinkage.iViewer.getProperties(BimLinkage.iViewer.getSelection()[0],BimLinkage.getSelectionCAD),BimLinkage.ifchoese=!1):BimLinkage.ifchoese=!0})})}),BimLinkage.changeToCad()},createToolbar:function(){BimLinkage._SubToolbar1=new Autodesk.Viewing.UI.ControlGroup("viewer_control_group"),BimLinkage.button1=new Autodesk.Viewing.UI.Button("viewer_tb_button_1"),BimLinkage.Toolbar1=BimLinkage.iViewer.getToolbar(!0),BimLinkage.button1.setIcon("changeViewer"),BimLinkage.button1.setToolTip(bdip4dLang[langType][-16101]),BimLinkage.button1.onClick=function(e){BimLinkage.clear3DBtn(),BimLinkage.show2DBtn(),BimLinkage.changeToViewer()},BimLinkage._SubToolbar2=new Autodesk.Viewing.UI.ControlGroup("viewer_control_group"),BimLinkage.button2=new Autodesk.Viewing.UI.Button("viewer_tb_button_1"),BimLinkage.Toolbar2=BimBdip.view.getToolbar(!0),BimLinkage.button2.setIcon("changeViewer"),BimLinkage.button2.setToolTip(bdip4dLang[langType][-16102]),BimLinkage.button2.onClick=function(e){BimLinkage.clear2DBtn(),BimLinkage.show3DBtn(),BimLinkage.changeToCad()},BimLinkage.Toolbar1.addControl(BimLinkage._SubToolbar1),BimLinkage.Toolbar2.addControl(BimLinkage._SubToolbar2),BimLinkage._SubToolbar1.addControl(BimLinkage.button1)},SelectTdModel:function(e,w,i,n,h){var k;BimLinkage.Id=i,BimLinkage.modelVersion=n,BimLinkage.currentThreeUrl=currentUrl;$("#menu").show();var L,t="../Linkage_getTdUrl.action?id="+BimLinkage.Id+"&url="+BimLinkage.currentThreeUrl;$.ajax({url:t,type:"POST",dataType:"json",async:!1,success:function(e){var i="";if(200==e.code){var n=e.data;if(null!=n[0].tdurl&&""!=n[0].tdurl&&null!=n[0].tdurl)if(0<n[0].tdurl.length){var t=n[0].tdurl.split(","),o=n[0].tdurlName;if(null==o||""==o||"undefined"==o||null==o){if(0<t[0].indexOf(".f2d")){for(var a=0;a<t.length;a++){var l=(k=t[a].replace(/(^\s*)|(\s*$)/g,"")).substr(k.lastIndexOf("/",k.lastIndexOf("/")-1)+1),r=l.lastIndexOf("/"),d=l.substring(0,r).replace("f2d_图纸__"," ");i+="<li>",i+='<input  type="text" readonly="readonly" class="iftdName" id="'+k+'" value="'+d+'" title="'+l+'"></input>',i+='<div class="m-change-box">',i+='<b class="changeNameBtn" value="'+bdip4dLang[langType][-16128]+'"></b>',i+='<input type="button"  class="u-saveName" style="display:none;margin-right: 5px;" value="'+bdip4dLang[langType][-16128]+'">',i+='<input type="button"  class="u-closeName" style="display:none;"  value="'+bdip4dLang[langType][-15110]+'">',i+="</div>",i+="</li>"}document.getElementById("txt_cad").value=w}}else{for(var g=JSON.parse(o),s=0;s<g.length;s++){var m=g[s].tdurlname,u=g[s].tdurlid;0<u.indexOf(".f2d")&&(i+="<li>",i+='<input type="text" readonly="readonly" class="td_Name" id="'+(u=u.replace(/(^\s*)|(\s*$)/g,""))+'" value="'+m+'" title="'+m+'"></input>',i+='<div class="m-change-box">',i+='<b class="changeNameBtn" value="'+bdip4dLang[langType][-16128]+'" ></b>',i+='<input type="button"  class="u-saveName" style="display:none;margin-right: 5px;"  value="'+bdip4dLang[langType][-16128]+'">',i+='<input type="button"  class="u-closeName" style="display:none;"  value="'+bdip4dLang[langType][-15110]+'">',i+="</div>",i+="</li>")}document.getElementById("txt_cad").value=g[0].tdurlname,L=g[0].tdurlname}BimLinkage.updateByName(L)}else $("#menu").hide();var c=n[0].url.split(";"),B=n[0].name;0<c[0].indexOf(".svf")&&(document.getElementById("showBox_vie").innerHTML="<h2>"+B+"</h2>"),$("#myTitle").html(i),BimLinkage.cadCheck(!0),$("#showBox_cad").bind("DOMNodeInserted",function(e){var i=$("#showBox_cad input").attr("id"),n=BimBdip.filepathUrlPre+h.baseUrl+"/",t=[{path:BimBdip.filepathUrlPre+i}];setTimeout(function(){var e={docid2D:t[0].path,env:""},i=document.getElementById("menu");BimLinkage.iViewer=new Autodesk.Viewing.Private.GuiViewer3D(i,{}),Autodesk.Viewing.Initializer(e,function(){BimLinkage.iViewer.initialize(),BimLinkage.iViewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT,function(e){if(setTimeout(function(){BimLinkage.iViewer.autocam.setHomeViewFrom(BimLinkage.iViewer.navigation.getCamera())},1e3),BimLinkage.iViewer.setGhosting(!1),1==document.getElementById("menu").style.zIndex){if($("#menu .settingsTools").is(":hidden"))return;BimLinkage.clear2DBtn(),BimLinkage._SubToolbar3=new Autodesk.Viewing.UI.ControlGroup("viewer_control_group3"),BimLinkage.button3=new Autodesk.Viewing.UI.Button("lmvdbg_viewer_tb_button_3"),BimLinkage.Toolbar3=BimLinkage.iViewer.getToolbar(!0),BimLinkage.button3.setIcon("changeViewer"),BimLinkage.button3.setToolTip(bdip4dLang[langType][-15385]),BimLinkage.button3.onClick=function(e){BimLinkage.changeToCadlink(),BimLinkage.clear3DBtn(),BimLinkage.show2DBtn()},BimLinkage.Toolbar3.addControl(BimLinkage._SubToolbar3),BimLinkage._SubToolbar3.addControl(BimLinkage.button3)}BimLinkage.iViewer.addEventListener("selection",function(e){1==BimLinkage.ifchoese?(BimLinkage._curSelSet=e.dbIdArray,BimLinkage.iViewer.getProperties(BimLinkage.iViewer.getSelection()[0],BimLinkage.getSelectionCAD),BimLinkage.ifchoese=!1):BimLinkage.ifchoese=!0})}),BimLinkage.iViewer.load(e.docid2D,n)})},1e3)})}},error:function(e){}})},updateByName:function(c){var B=BimBdip.modelObject.id;$("#saveName").click(function(){if(null==c||""==c||"undefined"==c||null==c){for(var e=[],i=$(".iftdName:eq(0)"),n=$(".iftdName"),t={tdurlid:i.attr("id"),tdurlname:i.val()},o=0;o<n.length;o++){if(""==(m={tdurlid:(s=n[o]).id,tdurlname:s.value}).tdurlname)return void layer.msg(bdip4dLang[langType][-15387],{icon:0,time:2e3});m.tdurlid==t.tdurlid&&(m=t),e.push(m)}var a=JSON.stringify(e)}else{var l=$(".td_Name:eq(0)"),r=$(".td_Name"),d={tdurlid:l.attr("id"),tdurlname:l.val()},g=[];for(o=0;o<r.length;o++){var s,m;if(""==(m={tdurlid:(s=r[o]).id,tdurlname:s.value}).tdurlname)return void layer.msg(bdip4dLang[langType][-15387],{icon:0,time:2e3});m.tdurlid==d.tdurlid&&(m=d),g.push(m)}a=JSON.stringify(g)}var u=currentUrl;$.ajax({url:"../Linkage_updateBytdUrlName.action?tdurlName="+a+"&id="+B+"&url="+u,type:"POST",dataType:"json",async:!1,success:function(){layer.msg(bdip4dLang[langType][-15388],{icon:1,time:1e3}),BimLinkage.cadCheck(!0),BimLinkage.showChangeBtn()},error:function(e){}})})},doClosecad:function(){$("#menu").hide(),$(".open2D").show()},doCloseVie:function(){$("#viewers").hide(),$(".open3D").show()},cadCheck:function(n){var e=$("#myTitle .iftdName"),i=$("#myTitle .td_Name");if(0<e.length)for(var t=0;t<e.length;t++)e[t].onclick=function(){if(1==n){var e=this.value,i=this.id;showBox_cad.innerHTML="<input type='text' readonly='readonly' id='"+i+"' value='"+e+"'>",myTitle.style.display="none",$(".title_cad img").attr("src","icon/downTriangle.png")}};else for(t=0;t<i.length;t++)i[t].onclick=function(){if(1==n){var e=this.value,i=this.id;showBox_cad.innerHTML="<input type='text' readonly='readonly' id='"+i+"' value='"+e+"'>",myTitle.style.display="none",$(".title_cad img").attr("src","icon/downTriangle.png")}}},changeCadName:function(){for(var e=$(".changeNameBtn"),i=$(".u-saveName"),n=$(".u-closeName"),t=$(".iftdName"),o=$(".td_Name"),a=0;a<e.length;a++)e[a].index=a,e[a].onclick=function(){BimLinkage.cadCheck(!1);var e=this.index;this.style.display="none",i[e].style.display="block",n[e].style.display="block",0<t.length?(t[e].focus(),t[e].readOnly=!1):(o[e].focus(),o[e].readOnly=!1),i[e].onclick=function(){this.style.display="none",n[e].style.display="none",0<t.length?t[e].readOnly=!0:o[e].readOnly=!0,$("#saveName").click(),BimLinkage.showChangeBtn()},n[e].onclick=function(){i[e].style.display="none",this.style.display="none",0<t.length?t[e].readOnly=!0:o[e].readOnly=!0,BimLinkage.showChangeBtn()}}},showChangeBtn:function(){for(var e=$("#myTitle li"),i=$(".changeNameBtn"),n=$(".u-saveName"),t=0;t<e.length;t++)e[t].index=t,e[t].onmouseover=function(){var e=this.index;"none"==n[e].style.display&&(i[e].style.display="block"),this.onmouseout=function(){i[e].style.display="none"}}},show3DBtn:function(){$("#viewers #navTools").show(),$("#viewers #lmvdbg_viewer_control_group").show(),$("#viewers #lmvdbg_viewer_control_group1").show(),$("#viewers #my-custom-buttons-toolbar").show(),$("#viewers #modelTools").show(),$("#viewers #settingsTools").show(),$("#viewers #bimbdip_viewToolBar").show()},show2DBtn:function(){$("#menu #navTools").show(),$("#menu #modelTools").show(),$("#menu #settingsTools").show(),$("#menu #lmvdbg_viewer_control_group").show()},clear3DBtn:function(){$("#viewers #navTools").hide(),$("#viewers #lmvdbg_viewer_control_group").hide(),$("#viewers #lmvdbg_viewer_control_group1").hide(),$("#viewers #my-custom-buttons-toolbar").hide(),$("#viewers #modelTools").hide(),$("#viewers #settingsTools").hide(),$("#viewers #bimbdip_viewToolBar").hide()},clear2DBtn:function(){$("#menu #navTools").hide(),$("#menu #modelTools").hide(),$("#menu #settingsTools").hide(),$("#menu #lmvdbg_viewer_control_group").hide()},show2D:function(){BimLinkage.be3DViewer=!1,BimBdip.be3DViewer=!1,$(".title_vie").show(),$("#conf_cad").hide(),$("#showBox_cad").css("width","85%"),$(".title_cad").css({width:"15.8%"}),$("#viewers").css({height:.4*BimLinkage.winHeight+"px",width:.3*BimLinkage.winWidth+"px",position:"absolute",right:"20px",top:"5%",zIndex:"1"}),$("#viewers .adsk-viewing-viewer").css({height:.4*BimLinkage.winHeight+"px",width:.3*BimLinkage.winWidth+"px",zIndex:"1"}),$("#menu").css({height:BimLinkage.winHeight+"px",width:BimLinkage.winWidth+"px",position:"absolute",top:"0px",right:"0",zIndex:"0",left:"inherit"}),$("#menu .adsk-viewing-viewer").css({height:BimLinkage.winHeight+"px",width:BimLinkage.winWidth+"px",zIndex:"1"}),$("#menu .canvas").css({height:BimLinkage.winHeight+"px",width:BimLinkage.winWidth+"px",zIndex:"0"}),$("#menu #myTitle").css({width:"100%",left:"inherit"}),$("#l").hide(),$("#LE").hide(),$(".titleName").hide(),BimBdip.view.onResizeCallback(),BimLinkage.iViewer.onResizeCallback(),$(function(){})},show3D:function(){BimLinkage.be3DViewer=!0,BimBdip.be3DViewer=!0,$(".title_cad").show(),$("#conf_cad").show(),$(".title_vie").hide(),$("#showBox_cad").css("width","60%"),$(".title_cad").css("width","100%"),$("#menu").css({height:.4*BimLinkage.winHeight+"px",width:.3*BimLinkage.winWidth+"px",position:"absolute",right:"20px",top:"5%",zIndex:"1",left:"inherit"}),$("#menu .adsk-viewing-viewer").css({height:.4*BimLinkage.winHeight+"px",width:.3*BimLinkage.winWidth+"px",zIndex:"1"}),$("#viewers").css({height:BimLinkage.winHeight+"px",width:BimLinkage.winWidth+"px",position:"absolute",top:"0",right:"0",zIndex:"0"}),$("#viewers .adsk-viewing-viewer").css({height:BimLinkage.winHeight+"px",width:BimLinkage.winWidth+"px",zIndex:"1"}),$("#viewers .canvas").css({height:BimLinkage.winHeight+"px",width:BimLinkage.winWidth+"px",zIndex:"0"}),$("#menu #myTitle").css({width:"67%",left:"23%"}),$("#l").show(),$("#LE").show(),$("#LE").css("left",""),$(".y").css("background-image","url(./img/ri.png)"),$(".titleName").show(),0==BimLinkage.isFirst&&(BimBdip.view.onResizeCallback(),BimLinkage.iViewer.onResizeCallback()),BimLinkage.isFirst=!1,$(function(){})},getSelectionCAD:function(e){if(null!=e.dbId&&0!=e.dbId.length){var i=e.dbId;BimLinkage.countH=0,null!=BimBdip.view&&""!=BimBdip.view&&BimBdip.view.getProperties(i,BimLinkage.JumpTo3D)}},JumpTo3D:function(e){if(null!=e.dbId&&0!=e.dbId.length){BimLinkage.countH;BimBdip.view.select(e.dbId);var i=BimBdip.view.getAggregateSelection();if(0<(i=BimBdip.view.getAggregateSelection()).length){var n=i[0];BimBdip.view.fitToView(n.selection,n.model)}else 0===i.length&&BimBdip.view.fitToView()}else BimLinkage.countH},getSelection3D:function(e){if(null!=e.dbId&&0!=e.dbId.length){var i=e.dbId;BimLinkage.countH=0,null!=BimLinkage.iViewer&&""!=BimLinkage.iViewer&&BimLinkage.iViewer.getProperties(i,BimLinkage.JumpToCAD)}},JumpToCAD:function(e){if(null!=e.dbId&&0!=e.dbId.length){BimLinkage.countH;BimLinkage.iViewer.select(e.dbId);var i=BimLinkage.iViewer.getAggregateSelection();if(0<(i=BimLinkage.iViewer.getAggregateSelection()).length){var n=i[0];BimLinkage.iViewer.fitToView(n.selection,n.model)}else 0===i.length&&BimLinkage.iViewer.fitToView()}else BimLinkage.countH}},showBox_cad=document.getElementById("showBox_cad");showBox_cad.onclick=function(){"none"==myTitle.style.display?(myTitle.style.display="block",$(".title_cad img").attr("src","icon/upTriangle.png")):(myTitle.style.display="none",$(".title_cad img").attr("src","icon/downTriangle.png"))};var img_down=document.getElementById("img_down");img_down.onclick=function(){"none"==myTitle.style.display?(myTitle.style.display="block",$(".title_cad img").attr("src","icon/upTriangle.png")):(myTitle.style.display="none",$(".title_cad img").attr("src","icon/downTriangle.png"))},$(".open2D").click(function(){$("#menu").show(),$(".open2D").hide()}),$(".open3D").click(function(){$("#viewers").show(),$(".open3D").hide()});