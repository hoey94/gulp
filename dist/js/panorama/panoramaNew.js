"use strict";var bimPanorama={lmvId:null,modelUrl:null,userName:null,userId:null,btnElement:null,DBID:null,dt_fragId:null,fragId:null,externalId:null,dbId:null,jsonString:null,num_full:0,beVisible:!1,beVisibleUpload:!1,type:null,realpath:null,date:null,f2d_fragId:null,getselectdbid:null,fragIdDbidJsonString:null,init:function(){var a=BimBdip.view.getToolbar(!0).getControl("bimbdip_viewToolBar").getControl("bimbdip_button_panorama");bimPanorama.btnElement=a.container,bimPanorama.lmvId=BimBdip.lvmid,bimPanorama.modelUrl=BimBdip.view_modelUrl,bimPanorama.modelVersion=BimBdip.modelVersion,bimPanorama.userName=BimBdip.currentUsername,bimPanorama.userId=BimBdip.currentUserid},refreshOptions:function(){bimPanorama.selectAllTypeName("options"),$(".tagSet").css("display","none")},selectAllTypeName:function(m){var a=publicJS.tomcat_url+"/PanoramaNew_selectAllTypeName.action?modelid="+bimPanorama.lmvId;$.ajax({type:"GET",url:a,processData:!1,contentType:!1,dataType:"json",success:function(a){var e="";if(200==a.code){"showSelection"==m&&(e+="<li ><span style='color:#333' onclick='bimPanorama.selectOption(event)'>"+bdip4dLang[langType][-15e3]+"</span></li>");var n=a.data;if(0<n.length&&null!=n){for(var t=0;t<n.length;t++){var o=n[t].labelName,i=n[t].labelColor,l=n[t].labelid,r=n[t].isDefault;"setUp"==m?(e+="<tr>",e+="<td>","true"!=r&&(e+="<input type='checkbox' class='selectTag' id='"+l+"'/>",e+="<label></label>"),e+="</td>",e+="<td>",e+="true"!=r?"<span class='tagSpan' title='"+o+"' onClick='bimPanorama.updateLabelTypeName(this,\""+l+"\")'>"+o+"</span>":"<span class='tagSpan' title='"+o+"'>"+o+"</span>",e+="</td>",e+="<td >",e+="<span class='tagSpanShow'  labelid='"+l+"' style='background-color:"+i+"'>"+o+"</span>",e+="<span class='changeColor' onclick='changeColor(event)''></span>",e+="</td>",e+="</tr>",$("#setUp_body").html(e)):"editPanorama"==m?(e+="<li class='checkLi'><input type='checkbox' class= 'checkBox' name='checkBoxName' value='"+l+","+o+","+i+"' id='Labeltype"+l+"'/><label></label><div class='limitWid'><span style = 'background:"+i+";' title='"+o+"' id='spanId'>"+o+"</span></div></li>",$("#editCheckbox").html(e)):"showSelection"==m?(e+="<li ><span style = 'background:"+i+";' title='"+o+"'  id='"+l+"' onclick='bimPanorama.selectOption(event)'>"+o+"</span></li>",$(".selectOptions ul").html(e)):(e+="<li class='checkLi'><input type='checkbox' class= 'checkBox' name='checkBoxName' value='"+l+","+o+","+i+"' id='Labeltype"+l+"'/><label></label><div class='limitWid'><span style = 'background:"+i+";' title='"+o+"' id='spanId'>"+o+"</span></div></li>",$("#maskCheckbox").html(e))}"editPanorama"==m&&selectTag()}else bimPanorama.insertDefaultData()}},error:function(a){}})},insertDefaultData:function(){var a=new Date,e=a.getFullYear()+"/"+(a.getMonth()+1)+"/"+a.getDate()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),n=new FormData;n.append("lmvId",bimPanorama.lmvId),n.append("url",bimPanorama.modelUrl),n.append("modelVersion",bimPanorama.modelVersion),n.append("userName",bimPanorama.userName),n.append("userId",bimPanorama.userId),n.append("createTime",e);var t=publicJS.tomcat_url+"/PanoramaNew_insertDefaultLabelType.action";$.ajax({url:t,data:n,type:"POST",dataType:"text",processData:!1,contentType:!1,success:function(a){setTimeout(function(){bimPanorama.selectAllTypeName()},1e3)},error:function(){}})},insertLabelTypeInfo:function(){var a=new Date,e=(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),new FormData);bimFileterColoring.randomWord(!0,16,32);e.append("lmvId",bimPanorama.lmvId),e.append("url",bimPanorama.modelUrl),e.append("modelVersion",bimPanorama.modelVersion),e.append("userName",bimPanorama.userName),e.append("userId",bimPanorama.userId);var n=publicJS.tomcat_url+"/PanoramaNew_insertLabelTypeInfo.action";$.ajax({url:n,data:e,type:"POST",dataType:"text",processData:!1,contentType:!1,success:function(a){layer.msg(bdip4dLang[langType][-15161],{icon:1,time:1e3});bimPanorama.selectAllTypeName("setUp")},error:function(){}})},deleteLabelType:function(r){var a=publicJS.tomcat_url+"/PanoramaNew_getPanorama.action?lmvId="+BimBdip.lvmid,m=0;$.ajax({url:a,type:"POST",dataType:"json",processData:!1,contentType:!1,success:function(a){if("200"==a.code){for(var e=a.data,n=0;n<r.length;n++)for(var t=0;t<e.length;t++){var o=e[t].nameColorjson;if(""!=o&&-1!=o.indexOf(r[n]))return bimPanorama.updateLabeltoNullBynameColorjson(r),m+=1,!1}if(0==m){var i=publicJS.tomcat_url+"/PanoramaNew_deleteLabelTypeById.action?labelid="+r+"&lmvId="+BimBdip.lvmid,l=bdip4dLang[langType][-15448];Dialog.confirm(l,function(){$.ajax({url:i,type:"POST",dataType:"text",processData:!1,contentType:!1,success:function(a){layer.msg(bdip4dLang[langType][-15304],{icon:1,time:1e3});bimPanorama.selectAllTypeName("setUp"),$(".selectTag:checked").parentsUntil("tr").parent().remove()},error:function(a){}})})}}},error:function(a){}})},updateLabeltoNullBynameColorjson:function(a){var e=publicJS.tomcat_url+"/PanoramaNew_updateLabeltoNullBynameColorjson.action?labelid="+a+"&lmvId="+BimBdip.lvmid,n=bdip4dLang[langType][-16487];Dialog.confirm(n,function(){$.ajax({url:e,type:"POST",dataType:"text",processData:!1,contentType:!1,success:function(a){layer.msg(bdip4dLang[langType][-15304],{icon:1,time:1e3});bimPanorama.selectAllTypeName("setUp"),$(".selectTag:checked").parentsUntil("tr").parent().remove()},error:function(a){}})})},updateLabelTypeColor:function(a,e){var n=a.replace(/#/g,""),t=publicJS.tomcat_url+"/PanoramaNew_updateLabelTypeColor.action?labelid="+e+"&labelColor="+n;$.ajax({url:t,type:"POST",dataType:"text",processData:!1,contentType:!1,success:function(){layer.msg(bdip4dLang[langType][-15388],{icon:1,time:1e3});bimPanorama.selectAllTypeName("setUp")},error:function(){}})},updateLabelTypeName:function(e,n){var t=e.innerHTML;if(!(0<t.indexOf('type="text"'))){var o=document.createElement("input");o.type="text",o.style="width:60px;height:20px",o.value=t,e.innerHTML="",e.appendChild(o),o.focus(),o.onblur=function(){if(e.innerHTML=this.value==t?t:this.value){if(8<this.value.length)return layer.msg(bdip4dLang[langType][-16488],{icon:0,time:2e3}),!1;var a=publicJS.tomcat_url+"/PanoramaNew_updateLabelTypeName.action?labelid="+n+"&name="+o.value+"&lmvId="+BimBdip.lvmid;$.ajax({url:a,type:"POST",dataType:"text",processData:!1,contentType:!1,success:function(){bimPanorama.selectAllTypeName("setUp")},error:function(){}})}}}},checkMenuDbid:function(a){var e=!1;BimBdip.view.model.getData().instanceTree.enumNodeChildren(a,function(a){e=!0,bimPanorama.checkMenuDbid(a)}),e||bimPanorama.getselectdbid.push(a)},doPanorama:function(){$(".btn_haed").show(),$("#form_id").show(),$(".parmaBox2 .right").show(),bimPanorama.init();var a=new Date;bimPanorama.date=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();var e=BimBdip.view_modelUrl.lastIndexOf(".");if(bimPanorama.type=BimBdip.view_modelUrl.substr(e),".f2d"==bimPanorama.type){bimPanorama.DBID=BimBdip.view.getSelection()[0];var n=BimBdip.view.model.getData().fragments.dbId2fragId[bimPanorama.DBID];bimPanorama.f2d_fragId=n,bimPanorama.externalId="",bimPanorama.dbId=bimPanorama.DBID,$("#ifm1").attr("src","../modeltool/360jsp/bindNew?dbId="+bimPanorama.dbId+"&fragId="+bimPanorama.f2d_fragId+"&lmvId="+BimBdip.lvmid+"&url="+BimBdip.view_modelUrl+"&externalId="+bimPanorama.externalId+"&modelVersion="+BimBdip.modelVersion+"&jsonString="+bimPanorama.jsonString+"&createTime="+bimPanorama.date)}else{var o,i=[],l=[];bimPanorama.getselectdbid=[],bimPanorama.fragIdDbidJsonString="";for(var r=0;r<BimBdip.view.getSelection().length;r++)bimPanorama.checkMenuDbid(BimBdip.view.getSelection()[r]);for(r=0;r<bimPanorama.getselectdbid.length;r++){var m='"dbidArr":'+bimPanorama.getselectdbid[r];BimBdip.view.model.getData().instanceTree.enumNodeFragments(bimPanorama.getselectdbid[r],function(a){var e=BimBdip.view.getState(),n=JSON.stringify(e);n=n.replace(/\"/g,"'"),bimPanorama.jsonString=$.base64.btoa(n);var t=$.base64.atob(bimPanorama.jsonString);bimPanorama.fragId=a,l.push(bimPanorama.fragId),-1==bimPanorama.fragIdDbidJsonString.indexOf(m.toString())&&(o={dbidArr:bimPanorama.getselectdbid[r],fragIdArr:bimPanorama.fragId,jsonVal:t},i.push(o),bimPanorama.fragIdDbidJsonString=JSON.stringify(i)),$("#dbid").val(bimPanorama.getselectdbid[r]),$("#fragId").val(l),$("#lmvId").val(BimBdip.lvmid),$("#url").val(BimBdip.view_modelUrl),$("#modelVersion").val(BimBdip.modelVersion),$("#jsonString").val(t),$("#externalId").val(bimPanorama.externalId),$("#userName").val(BimBdip.currentUsername),$("#userId").val(BimBdip.currentUserid),$("#createTime").val(bimPanorama.date),$("#fragidDbidJson").val(bimPanorama.fragIdDbidJsonString)})}}bimPanorama.show2()},hideBox2:function(){$("#frm")[0].reset(),$(".panorama_name").text(""),$(".panorama_size").text(""),$(".panorama_progress").text("已上传0%"),$(".maskSpan span").text(""),$(".maskSpan").hide(),$("#maskCheckbox").empty(),$("#progress").hide(),$("#show360 embed").attr("src",""),$("#show360").hide(),$(".gray").hide(),chooseFile=0,uploadCount=0,document.getElementById("parmaBox2").style.top="-800px",$("#parmaBox2").hide(),bimPanorama.setVisibleForUpload(!bimPanorama.beVisibleUpload)},setVisibleForUpload:function(a){bimPanorama.init(),bimPanorama.beVisibleUpload=a;bimPanorama.clear(["svf"],"",""),0==bimPanorama.btnElement.classList.contains("active")&&bimPanorama.btnElement.classList.add("active")},show2:function(){$(".gray").show(),$("#parmaBox2").show(),$(".maskVal").show(),document.getElementById("parmaBox2").style.top="212px";bimPanorama.selectAllTypeName("options")},showAllPan:function(){bimPanorama.showAllPanToggle()},showAllPanToggle:function(){bimPanorama.setVisibleForPanorama(!bimPanorama.beVisible)},setVisibleForPanorama:function(a){if(bimPanorama.init(),bimPanorama.beVisible=a,bimPanorama.btnElement.classList.toggle("active"),a){bimPanorama.clear(["svf"],"","")}else $("#360showbox").hide(),bimPanorama.clean(),chatview.chatClean(),$("div[name='360ViewTags']").each(function(){null!=this&&this.remove()}),$(".overlayDivClass").remove()},showSelection:function(a){a.cancelBubble=!0;bimPanorama.selectAllTypeName("showSelection"),$(".selectOptions").toggle()},searchSelectPan:function(){var a=$("#search_name").val(),e=$("#search_Tag").text();e==bdip4dLang[langType][-15779]&&(e="");bimPanorama.clear(["svf"],a,e)},clear:function(n,t,o){var a=BimBdip.lvmid,e=publicJS.tomcat_url+"/PanoramaNew_getPanorama.action?lmvId="+a+"&name="+t+"&typeUrl="+o;$.ajax({type:"GET",url:e,processData:!1,contentType:!1,dataType:"json",success:function(a){if($("#360table").html(""),bimPanorama.cleanAll(),200==a.code){var e=a.data;bimPanorama.showPanoramaInfo(e,n,t,o)}},error:function(a){}})},clean:function(){_dbid="svf",$("#360showbox").hide();for(var a=document.getElementsByName("360ViewTags"),e=0;e<a.length;e++)a[e].style.display="none"},cleanAll:function(){for(var a=document.getElementsByClassName("pnamed"),e=0;e<a.length;e++)a[e].style.display="none";$(".overlayDivClass").remove()},restoreMark:function(a,e){BimBdip.view.restoreState(a),setTimeout(function(){show1(e)},800)},showAllLabelByDbid:function(a,e){if(BimBdip.view.restoreState(e),null!=a&&""!=a){var n=publicJS.tomcat_url+"/PanoramaNew_showAllLabelByDbid.action?dbid="+a+"&lmvId="+BimBdip.lvmid;$.ajax({url:n,type:"GET",processData:!1,contentType:!1,dataType:"json",success:function(a){var e="";200==a.code&&(e=a.data,bimPanorama.showPanoramaInfo(e,"","",""))},error:function(a){}})}},yincang:function(){$("#360showbox").hide(),bimPanorama.clean(),bimPanorama.setVisibleForPanorama(!1)},hide:function(){$(".box").css({opacity:"0",top:"-500px"}),$(".boxs").css({opacity:"0",top:"-500px"})},deletePanoramaById:function(i){var a=publicJS.tomcat_url+"/PanoramaNew_getPanoramaById.action?id="+i;$.ajax({url:a,type:"POST",dataType:"json",processData:!1,contentType:!1,success:function(a){if("200"==a.code)for(var e=a.data,n=0;n<e.length;n++){e[n].nameColorjson;var t=publicJS.tomcat_url+"/PanoramaNew_deletePanoramaById.action",o=bdip4dLang[langType][-15049];Dialog.confirm(o,function(){$.ajax({url:t,type:"get",data:{id:i},success:function(a){var e=i;$("#"+e).next().remove(),$("#"+e).remove(),$("#"+("a_"+i)).parent().remove()},error:function(){}})})}},error:function(){}})},updatePanoramaById:function(a,e){for(var n=[],t="",o=0;o<e.length;o++){var i=$(e[o]).val(),l={labelid:i.split(",")[0],labelname:i.split(",")[1],labelcolor:i.split(",")[2]};n.push(l),t=JSON.stringify(n)}var r=$("#editName").val(),m=new FormData;m.append("id",a),m.append("name",r),m.append("nameColorjson",t);var d=publicJS.tomcat_url+"/PanoramaNew_updatePanoramaById.action";$.ajax({url:d,type:"POST",data:m,dataType:"text",processData:!1,contentType:!1,success:function(a){$(".editBox").hide();bimPanorama.clear(["svf"],"","")},error:function(){}})},parmaFull:function(){window.location.protocol,window.location.host;var a=document.getElementById("parmaBox1"),e=document.getElementById("btn_full").getElementsByTagName("img")[0];0==bimPanorama.num_full?(a.style.top="0px",a.className="parmaBox1_full",document.getElementById("btn_full").title=bdip4dLang[langType][-15423],e.src="img/modeltool/closeScreens.png",bimPanorama.num_full=1):(a.style.top="200px",a.className="parmaBox1",document.getElementById("btn_full").title=bdip4dLang[langType][-15424],e.src="img/modeltool/fullScreens.png",bimPanorama.num_full=0)},hideBox1:function(){document.getElementById("parmaBox1").style.top="-600px",$("#parmaBox1").hide(),document.getElementById("parmaBox1").className="parmaBox1",document.getElementById("btn_full").title=bdip4dLang[langType][-15424],document.getElementById("btn_full").getElementsByTagName("img")[0].src="img/modeltool/fullScreens.png",bimPanorama.num_full=0},randomWord:function(a,e,n){var t="",o=e,i=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];a&&(o=Math.round(Math.random()*(n-e))+e);for(var l=0;l<o;l++)pos=Math.round(Math.random()*(i.length-1)),t+=i[pos];return t},showPanoramaInfo:function(a,e,n,t){if($("#panoramaTable").hasClass("dataTable")){var o=$("#panoramaTable").dataTable();o.fnClearTable(),o.fnDestroy()}var i="";void 0!==n&&void 0!==t&&$("#360showbox").show(),$("div[name='360ViewTags']").each(function(){null!=this&&this.remove()}),$(".overlayDivClass").remove();for(var l="",r=0;r<a.length;r++){var m=a[r].jsonString,d=a[r].id,s=new Date(a[r].createTime),c=s.getFullYear()+"/"+(s.getMonth()+1)+"/"+s.getDate();if(""==m||null==m||null==m||"null"==m)var p="";else p=m.replace(/'/g,'"');var u,b=a[r].nameColorjson;i+="<tr id='"+d+"' onclick='bimPanorama.restoreMark("+p+","+d+")'>",i+="<td title='"+(u=""==a[r].name?bdip4dLang[langType][-15421]:a[r].name)+"' class='text-hidden'>"+u+"</td>",i+="<td>"+c+"</td>",i+="<td><i class='editPanorama' style='background:url(img/icon/operate_wev8.png)'></i></td>",i+="</tr>",-1==l.indexOf(a[r].dbid)&&_gyroext.do(a[r].id,a[r].dbid,a[r].fragId,a[r].id,a[r].typeUrl,b,p),l+=a[r].dbid+","}$("#panoramaTable tbody").html(i),setPanoramaTag(a,p,d)},selectOption:function(a){var e=a.target||a.srcElement,n=$(e).text(),t=e.getAttribute("id"),o=e.style.background;$(".choiceTag").text(n),$(".choiceTag").attr("labelid",t),$(".choiceTag").css("background",o),$("#search_Tag").attr("title",n)}};