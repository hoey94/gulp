"use strict";var filterExecute={finaldbids:null,finalTypeNames:null,type_floor:null,type_group:null,type_class:null,tree_id:null,condition_name:null,isDir:null,condition:null,final_condition:null,final_conditionid:null,init:function(){FilterAttribute.init(),filterExecute.finaldbids=[],filterExecute.finalTypeNames=[],filterExecute.type_floor="",filterExecute.type_group="",filterExecute.type_class="",filterExecute.tree_id="",filterExecute.condition_name="",filterExecute.isDir=!1,filterExecute.condition="",filterExecute.final_condition="",filterExecute.final_conditionid=""},checkMenuDbid:function(e){var t=!1;BimBdip.view.model.getData().instanceTree.enumNodeChildren(e,function(e){t=!0,filterExecute.checkMenuDbid(e)}),t||filterExecute.finaldbids.push(e)},modelAttributeTypes:function(){if(0==BimBdip.view.getSelection().length)filterExecute.finaldbids=filterExecute.getAllDbIds(BimBdip.view);else{filterExecute.finaldbids=[];for(var e=0;e<BimBdip.view.getSelection().length;e++)filterExecute.checkMenuDbid(BimBdip.view.getSelection()[e])}for(var t=new FormData,i="",l=0;l<filterExecute.finaldbids.length;l++)l==filterExecute.finaldbids.length-1?i+=filterExecute.finaldbids[l]:i+=filterExecute.finaldbids[l]+",";t.append("dbids",i),t.append("typeName",FilterAttribute.attr_floor),t.append("lvmid",BimBdip.lvmid),t.append("modelversion",BimBdip.modelVersion);$.ajax({url:publicJS.tomcat_url+"/modelSearchCondition.action",type:"post",data:t,async:!1,processData:!1,contentType:!1,dataType:"json",success:function(e){bimOriginFilter.loadTree(e)}})},arrNotSame:function(e){for(var t=[],i=0;i<e.length;i++)-1==t.indexOf(e[i])&&t.push(e[i]);return t},attribute_pro:function(){var e=new FormData,i="";filterExecute.finaldbids=chooseDbidYes();for(var t="",l=0;l<filterExecute.finaldbids.length;l++)l==filterExecute.finaldbids.length-1?t+=filterExecute.finaldbids[l]:t+=filterExecute.finaldbids[l]+",";e.append("dbIds",t),e.append("lvmid",BimBdip.lvmid),e.append("modelversion",BimBdip.modelVersion),e.append("typeName",filterExecute.finalTypeNames),$.ajax({url:publicJS.tomcat_url+"/modelSearchHightFirst.action",type:"post",data:e,async:!1,processData:!1,contentType:!1,dataType:"json",success:function(e){for(var t=0;t<e.length;t++)i+=" <option value="+e[t].name+">"+e[t].name+"</option>   ";document.getElementById("canshu").innerHTML=i}})},attribute_select:function(){for(var e=$("input[name='relation']:checked").val(),t="",i=document.getElementsByClassName("relations"),l=0;l<i.length;l++)t+=i[l].value+";";if(""!=(filterExecute.final_condition=t)){if(t=t.substring(0,t.length-1),filterExecute.finaldbids=chooseDbidYes(),0==filterExecute.finaldbids.length){if(0==BimBdip.view.getSelection().length)return filterExecute.modelAttributeTypes(),!0;filterExecute.finaldbids=[];for(var n=0;n<BimBdip.view.getSelection().length;n++)filterExecute.checkMenuDbid(BimBdip.view.getSelection()[n])}for(var r=new FormData,a="",o=0;o<filterExecute.finaldbids.length;o++)o==filterExecute.finaldbids.length-1?a+=filterExecute.finaldbids[o]:a+=filterExecute.finaldbids[o]+",";filterExecute.final_condition=t,r.append("dbIds",a),r.append("lvmid",BimBdip.lvmid),r.append("modelversion",BimBdip.modelVersion),r.append("typeName",filterExecute.finalTypeNames),r.append("connections",t),r.append("connectionCondition",e),filterExecute.final_condition=e+";"+t;var c=[];$.ajax({url:publicJS.tomcat_url+"/modelSearchHightSecound.action",type:"post",data:r,async:!1,processData:!1,contentType:!1,dataType:"json",success:function(e){if(0<e.length){BimBdip.view.clearSelection();for(var t=0;t<e.length;t++){var i=e[t]-0;c.push(i)}BimBdip.view.select(c),filterExecute.modelAttributeTypes()}}})}else Dialog.alert(bdip4dLang[langType][-16353])},attribute_refalse:function(){filterExecute.modelAttributeTypes()},getAllDbIds:function(e){for(var t=e.model.getData().instanceTree,i=new Array,l=Object.keys(t.nodeAccess.dbIdToIndex),n=0;n<l.length;n++)i.push(l[n]-0);return i},attribute_save:function(){for(var e=bimOriginFilter.zTree.getNodes(),t=0,i=e.length;t<i;t++)if(void 0!==e[t].children){e[t].chooseName==FilterAttribute.attr_floor?filterExecute.type_floor+=e[t].name.split("(")[0]+",":e[t].chooseName==FilterAttribute.attr_group?filterExecute.type_group+=e[t].name.split("(")[0]+",":e[t].chooseName==FilterAttribute.attr_class&&(filterExecute.type_class+=e[t].name.split("(")[0]+",");for(var l=e[t].children,n=0,r=l.length;n<r;n++)if(void 0!==l[n].children){l[n].chooseName==FilterAttribute.attr_group?filterExecute.type_group+=l[n].name.split("(")[0]+",":l[n].chooseName==FilterAttribute.attr_class&&(filterExecute.type_class+=l[n].name.split("(")[0]+",");for(var a=l[n].children,o=0,c=a.length;o<c;o++)filterExecute.type_class+=a[o].name.split("(")[0]+","}else l[n].chooseName==FilterAttribute.attr_group?filterExecute.type_group+=l[n].name.split("(")[0]+",":l[n].chooseName==FilterAttribute.attr_class&&(filterExecute.type_class+=l[n].name.split("(")[0]+",")}else e[t].chooseName==FilterAttribute.attr_floor?filterExecute.type_floor+=e[t].name.split("(")[0]+",":e[t].chooseName==FilterAttribute.attr_group?filterExecute.type_group+=e[t].name.split("(")[0]+",":e[t].chooseName==FilterAttribute.attr_class&&(filterExecute.type_class+=e[t].name.split("(")[0]+",");filterExecute.type_floor=filterExecute.type_floor.substring(0,filterExecute.type_floor.length-1),filterExecute.type_group=filterExecute.type_group.substring(0,filterExecute.type_group.length-1),filterExecute.type_class=filterExecute.type_class.substring(0,filterExecute.type_class.length-1);var d="",p=new FormData,s=BimBdip.lvmid,u=BimBdip.modelVersion;p.append("lmvid",s),p.append("modelversion",u),$.ajax({url:publicJS.tomcat_url+"/selectDir.action",type:"post",data:p,async:!1,processData:!1,contentType:!1,dataType:"json",success:function(e){if(filterExecute.type_floor="",filterExecute.type_group="",filterExecute.type_class="","200"==e.code){for(var t=0;t<e.data.length;t++)d+='<li onclick="filterExecute.valueScreen('+e.data[t].id+')"><input type="button" id="value'+e.data[t].id+'" valueId="'+e.data[t].id+'" value="'+e.data[t].conditionName+'" title="'+e.data[t].conditionName+'" ></li>';document.getElementById("m-screenUl").innerHTML=d,$(".m-screenBom").show(),$(".gray").show(),document.getElementById("box_gray").style.zIndex=1001}}})},attribute_true_save:function(){var e;e=filterExecute.final_condition,filterExecute.type_floor="",filterExecute.type_group="",filterExecute.type_class="";for(var t=bimOriginFilter.zTree.getNodes(),i=0,l=t.length;i<l;i++)if(void 0!==t[i].children){t[i].chooseName==FilterAttribute.attr_floor?filterExecute.type_floor+=t[i].name.split("(")[0]+",":t[i].chooseName==FilterAttribute.attr_group?filterExecute.type_group+=t[i].name.split("(")[0]+",":t[i].chooseName==FilterAttribute.attr_class&&(filterExecute.type_class+=t[i].name.split("(")[0]+",");for(var n=t[i].children,r=0,a=n.length;r<a;r++)if(void 0!==n[r].children){n[r].chooseName==FilterAttribute.attr_group?filterExecute.type_group+=n[r].name.split("(")[0]+",":n[r].chooseName==FilterAttribute.attr_class&&(filterExecute.type_class+=n[r].name.split("(")[0]+",");for(var o=n[r].children,c=0,d=o.length;c<d;c++)filterExecute.type_class+=o[c].name.split("(")[0]+","}else n[r].chooseName==FilterAttribute.attr_group?filterExecute.type_group+=n[r].name.split("(")[0]+",":n[r].chooseName==FilterAttribute.attr_class&&(filterExecute.type_class+=n[r].name.split("(")[0]+",")}else t[i].chooseName==FilterAttribute.attr_floor?filterExecute.type_floor+=t[i].name.split("(")[0]+",":t[i].chooseName==FilterAttribute.attr_group?filterExecute.type_group+=t[i].name.split("(")[0]+",":t[i].chooseName==FilterAttribute.attr_class&&(filterExecute.type_class+=t[i].name.split("(")[0]+",");filterExecute.type_floor=filterExecute.type_floor.substring(0,filterExecute.type_floor.length-1),filterExecute.type_group=filterExecute.type_group.substring(0,filterExecute.type_group.length-1),filterExecute.type_class=filterExecute.type_class.substring(0,filterExecute.type_class.length-1);var p=document.getElementById("m-srceenValue").value;if(""!=p){var s=new FormData,u=BimBdip.lvmid,f=BimBdip.modelVersion;s.append("lmvid",u),s.append("modelversion",f),s.append("dbids",filterExecute.finaldbids),s.append("condition",e),s.append("conditionName",p),s.append("treeId",filterExecute.tree_id),s.append("nodeType","0"),s.append("ifOpen","0"),s.append("ifDrag","1"),s.append("ifDrop","0"),s.append("attrFlow",filterExecute.type_floor),s.append("attrGroup",filterExecute.type_group),s.append("attrType",filterExecute.type_class),$.ajax({url:publicJS.tomcat_url+"/saveFilter.action",type:"post",data:s,async:!1,processData:!1,contentType:!1,dataType:"json",success:function(e){"200"==e.code&&(bimOriginFilter.loadTreeOther(),bimFileterColoring.selectFilterByLmvid(u,filterExecute.tree_id),filterExecute.closeScreen(),layer.msg(bdip4dLang[langType][-15334],{icon:1,time:1e3}))},error:function(){layer.msg(bdip4dLang[langType][-15335],{icon:2,time:1e3})}})}else layer.msg(bdip4dLang[langType][-15336],{icon:7,time:1e3})},closeScreen:function(){$(".m-screenBom").hide(),$(".gray").show(),document.getElementById("box_gray").style.zIndex=999,$("#m-srceenValue").text(),$(".m-srceenVal").text()},newScreen:function(){var n=new Dialog;n.Width=300,n.Height=100,n.Title=bdip4dLang[langType][-15337],n.InnerHtml='<div style="margin-top: 20px;" addDictionary><p><span style="display:inline-block;text-align:right;">'+bdip4dLang[langType][-15338]+' ：</span><input type="text" style="width: 60%;height: 22px;line-height: 22px;" id = "newConditionId" required="required"  /></p><p class="errorHelp" style="display:none;color:red">文件夹名称不能为空</p>',n.OKEvent=function(){var e=new FormData,t=window.parent.document.getElementById("newConditionId").value;if(""==t)return $(".errorHelp",window.parent.document).show(),setTimeout(function(){$(".errorHelp",window.parent.document).hide()},1e3),!0;var i=BimBdip.lvmid,l=BimBdip.modelVersion;e.append("lmvid",i),e.append("modelversion",l),e.append("conditionName",t),e.append("treeId","0"),e.append("nodeType","1"),e.append("ifOpen","0"),e.append("ifDrag","1"),e.append("ifDrop","1"),$.ajax({url:publicJS.tomcat_url+"/saveFilter.action",type:"post",data:e,async:!1,processData:!1,contentType:!1,dataType:"json",success:function(e){"200"==e.code?(filterExecute.tree_id=e.data.id,filterExecute.condition_name=e.data.conditionName,document.getElementById("m-srceenVal").innerHTML=filterExecute.condition_name,bimOriginFilter.loadTreeOther(),n.close()):Dialog.alert(bdip4dLang[langType][-15339])}})},n.show(),n.okButton.value=bdip4dLang[langType][-15340]},valueScreen:function(e){var t="value"+e,i=document.getElementById(t).value;document.getElementById("m-srceenVal").innerHTML=i,document.getElementById("m-srceenVal").setAttribute("title",i),filterExecute.tree_id=e,filterExecute.condition_name=i}};