var gloubleVariable={_launch:"",_reply:"",_confirm:"",_closed:"",_isReturn:"",status:0},workflowCollision={currentListName:null,markupObj:null,operateEditorTarget:null,init:function(){workflowCollision.currentListName="",workflowCollision.markupObj=""},main:function(t,e,i){null!=workflowCollision.markupObj&&workflowCollision.markupObj.duringEditMode&&workflowCollision.closeMarkUp(),workflowCollision.init(),workflowCollision.currentListName=i,null!=bimViewPointNew.markup&&bimViewPointNew.markup.duringEditMode&&bimViewPointNew.enterViewMode(),gloubleVariable.status="0",t&&(gloubleVariable.status=t);var o="",n="";if("0"==gloubleVariable.status){if(e)n=e.collisionLists,o=e.bimWorkflowDetail;else if(0==(n=bimViewPointNew.getCheckedSonNodes()).length)return void layer.msg(bdip4dLang[langType][-15996],{icon:7,time:2e3})}else o=e.bimWorkflowDetail,n=e.collisionLists;switch(gloubleVariable.status){case"0":loadFirstColorZone(),workflowCollision.initDetailTable(o),workflowCollision.initCollisionTable(n,o),workflowCollision.loadShareShunt(o),"cc"!=workflowCollision.currentListName&&"handle"!=workflowCollision.currentListName?(workflowCollision.initFooterButtonTable(),bindSaveSubmitShunt("0"),workflowCollision.firstStage()):workflowCollision.lockAllEditor();break;case"1":loadSecondColorZone(),workflowCollision.initDetailTable(o),workflowCollision.initCollisionTable(n,o),workflowCollision.loadShareShunt(o),"cc"!=workflowCollision.currentListName&&"handle"!=workflowCollision.currentListName?(workflowCollision.initFooterButtonTable(),bindSaveSubmitShunt("1"),o.createBy!=BimBdip.currentUserid&&workflowCollision.secondStage()):workflowCollision.lockAllEditor();break;case"2":loadThirdColorZone(),workflowCollision.initDetailTable(o),workflowCollision.initCollisionTable(n,o),workflowCollision.loadShareShunt(o),"cc"!=workflowCollision.currentListName&&"handle"!=workflowCollision.currentListName?(workflowCollision.initFooterButtonTable(),bindSaveSubmitShunt("2"),o.createBy==BimBdip.currentUserid&&workflowCollision.thirdStage()):workflowCollision.lockAllEditor();break;case"3":loadFourthColorZone(),workflowCollision.initDetailTable(o),workflowCollision.initCollisionTable(n,o),workflowCollision.loadShareShunt(o),"cc"!=workflowCollision.currentListName&&"handle"!=workflowCollision.currentListName?(bindSaveSubmitShunt("3"),workflowCollision.fourthStage()):workflowCollision.lockAllEditor()}},initDetailTable:function(t){var e="",i="",o="",n="",l=(e="",bdip4dLang[langType][-15997]);if(""!=t)i=t.createBy,o=t.createName,n=t.xmmc,l=t.title,t.receiveBy,t.receiveName,void 0!==t.ccBy&&(t.ccBy,t.ccName),e=t.id;else{try{n=window.parent.currentProjectName}catch(t){}i=BimBdip.currentUserid,o=BimBdip.currentUsername.trim()}$(".m-initating-process").empty();var a='<form id="collisionForm" enctype="multipart/form-data"><input type="hidden" name="bimWorkflowDetail.id" value="'+e+'"><div class="m-initating-title hei30 br34"><span>'+bdip4dLang[langType][34178]+'</span><input class="closeBtn closeInitating floright" onclick="clearTable()" type="button" value="×"></div><div class="m-initating-header "><div class="m-initating-header-title hei30"><input disabled="disabled" class="projectName userinput hei20 floleft firstStageTextarea" name="bimWorkflowDetail.title" cols="20" rows="1" style="overflow-y:hidden;" value="'+l+'" title="'+l+'"></textarea><div class="_export"><input type="button" value="'+bdip4dLang[langType][-15999]+'" onclick="workflowCollision.exportWord()"></div></div><div class="m-initating-header-content"><div class="wid50 floleft hei20"><span class="floleft wid usespan">'+bdip4dLang[langType][-16054]+'</span><input type="hidden" value="'+i+'" name="bimWorkflowDetail.createBy"><input type="hidden" value="'+o+'" name="bimWorkflowDetail.createName"><p class="initiatorName userinput hei20 floleft">'+o+'</p></div><div class="wid50 floleft hei20"><span class="floleft usespan">'+bdip4dLang[langType][-16001]+'</span><input type="text" disabled="disabled" class="projectName userinput hei20 floleft" name="bimWorkflowDetail.xmmc" cols="20" rows="1" style="overflow-y:hidden;" title="'+n+'" value ="'+n+'" ></input></div><div class="wid50 floleft hei20"><span class="floleft usespan">'+bdip4dLang[langType][896]+'</span><div class="dropdown-sin-1" readOnly="true" style="width: 153px;display: inline-block;"><select name="bimWorkflowDetail.receiveBy" style="display:none" placeholder="'+bdip4dLang[langType][-16003]+'"></select></div></div><div class="wid50 floleft hei20"><span class="floleft usespan">'+bdip4dLang[langType][-16004]+'</span><div class="dropdown-sin-2" style="width: 153px;display: inline-block;"><select name="ccBy" style="display:none" multiple placeholder="'+bdip4dLang[langType][-16005]+'"></select></div></div></div></div><div class="m-initating-content scroll_bar flcenter"></div><div class="m-initating-footer"><i class="line"></i><div class="solid_tishi"><p><i class="solid_xt blue_bg"></i><span>'+bdip4dLang[langType][28499]+'</span><i class="solid_xt orange_bg"></i><span>'+bdip4dLang[langType][-16007]+'</span><i class="solid_xt greenyellow_bg"></i><span>'+bdip4dLang[langType][-16008]+'</span></p></div><ul class="footer-process"><li class="'+gloubleVariable._launch+'">'+bdip4dLang[langType][-16009]+'</span><li class="'+gloubleVariable._reply+'">'+bdip4dLang[langType][-16010]+'</span><li class="'+gloubleVariable._confirm+'">'+bdip4dLang[langType][-16011]+'</span><li class="'+gloubleVariable._closed+'">'+bdip4dLang[langType][-16012]+'</span></ul><i class="line"></i><div class="footer-button"></div></div></form>';$(".m-initating-process").html(a)},initCollisionTable:function(t,B){var j="",_="",D="",I="";t.forEach(function(t,e){if(void 0===t.isParent||!t.isParent){var i=t.id;if(void 0!==t.vpId&&""!=t.vpId&&(i=t.vpId),void 0!==t.json?D=t.json:void 0!==t.viewpoint&&(D=t.viewpoint.json),void 0!==t.sjtxgyj){_=t.sjtxgyj;var o=BimBdip.currentUserid;void 0!==t.exField1&&"1"==gloubleVariable.status&&o==B.receiveBy&&(_=t.exField1)}else _="";if(void 0!==t.mxyzyj){I=t.mxyzyj;o=BimBdip.currentUserid;void 0!==t.exField2&&"2"==gloubleVariable.status&&o==B.createBy&&(I=t.exField2)}else I="";if(void 0!==t.type&&1==t.type){var n=workflowCollision.analysisStr(t.info);t.zxwz=n[1],t.lcbh=n[3],t.sjzy=n[4]}var l="";void 0!==t.markupData?l=t.markupData:void 0!==t.viewpoint&&(l=t.viewpoint.mark);var a=l.split("@#@"),r="";if(""!=a)for(var s=0;s<a.length;s++)r+=a[s].split("@BIM@")[1];var d=bdip4dLang[langType][1361],c=bdip4dLang[langType][-16015],p=bdip4dLang[langType][-16016],u=bdip4dLang[langType][-16017],f=bdip4dLang[langType][-16018],g=bdip4dLang[langType][22981],w=bdip4dLang[langType][-16020],b=bdip4dLang[langType][-16021],m=bdip4dLang[langType][-16022],h=bdip4dLang[langType][-16023],y=bdip4dLang[langType][-16024],k=bdip4dLang[langType][-16025],v=bdip4dLang[langType][-16026],C=bdip4dLang[langType][-16027],T=bdip4dLang[langType][-16029],L=bdip4dLang.getLang("-16031"),x=bdip4dLang[langType][-16030],S=bdip4dLang.getLang("-16032");j+='\n\t\t\t\t\t<table class="m-initating-table hei30" name="initating-table-'+e+'">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="bca colorWhite" colspan="6" style="text-indent: 3.7%;">'+d+'</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="center">'+c+'</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input readonly="readonly" name="collisionsWrapper.collisions['+e+'].zybh" maxlength="16" value="'+(void 0===t.zybh?"":t.zybh)+'" class="tableinput first firstStageInput fourthStageInput" type="text" maxlength="20">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class="center">'+p+'</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<select disabled="disabled" name="collisionsWrapper.collisions['+e+'].lbbh" class="tableSelect first firstStageSelect fourthStageSelect" style="width: 80%;margin: 0 auto;display: block;">\n\t\t\t\t\t\t\t\t\t<option value="A" '+(void 0===t.lbbh||"A"==t.lbbh?"selected":"")+'>A</option>\n\t\t\t\t\t\t\t\t\t<option value="B" '+("B"==t.lbbh?"selected":"")+'>B</option>\n\t\t\t\t\t\t\t\t\t<option value="C" '+("C"==t.lbbh?"selected":"")+'>C</option>\n\t\t\t\t\t\t\t\t\t<option value="D" '+("D"==t.lbbh?"selected":"")+'>D</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class="center">'+u+'</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<select disabled="disabled" name="collisionsWrapper.collisions['+e+'].yzdjbh" class="tableSelect first firstStageSelect fourthStageSelect" style="width: 80%;margin: 0 auto;display: block;">\n\t\t\t\t\t\t\t\t\t<option value="1" '+(void 0===t.yzdjbh||"1"==t.yzdjbh?"selected":"")+'>1</option>\n\t\t\t\t\t\t\t\t\t<option value="2" '+("2"==t.yzdjbh?"selected":"")+'>2</option>\n\t\t\t\t\t\t\t\t\t<option value="3" '+("3"==t.yzdjbh?"selected":"")+'>3</option>\n\t\t\t\t\t\t\t\t\t<option value="4" '+("4"==t.yzdjbh?"selected":"")+'>4</option>\n\t\t\t\t\t\t\t\t\t<option value="5" '+("5"==t.yzdjbh?"selected":"")+'>5</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="center">'+f+'</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input readonly="readonly" name="collisionsWrapper.collisions['+e+'].sjzy" maxlength="16" value="'+(void 0===t.sjzy?"":t.sjzy)+'" class="tableinput first firstStageInput fourthStageInput" type="text" maxlength="20">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class="center">'+g+'</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input readonly="readonly" name="collisionsWrapper.collisions['+e+'].zxwz" maxlength="16" value="'+(void 0===t.zxwz?"":t.zxwz)+'" class="tableinput first firstStageInput fourthStageInput" type="text" maxlength="30">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class="center">'+w+'</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input readonly="readonly" name="collisionsWrapper.collisions['+e+'].lcbh" maxlength="16" value="'+(void 0===t.lcbh?"":t.lcbh)+'" class="tableinput first firstStageInput fourthStageInput" type="text" maxlength="30">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td  class="bca colorWhite" colspan="6" style="text-indent: 3.7%;">'+b+'</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="center">'+m+'</td>\n\t\t\t\t\t\t\t<td colspan="2">\n\t\t\t\t\t\t\t\t<input readonly="readonly" name="collisionsWrapper.collisions['+e+'].tzhz" maxlength="16" value="'+(void 0===t.tzhz?"":t.tzhz)+'" class="tableinput first firstStageInput fourthStageInput" type="text" maxlength="40">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class="center">'+h+'</td>\n\t\t\t\t\t\t\t<td colspan="2">\n\t\t\t\t\t\t\t\t<input readonly="readonly" name="collisionsWrapper.collisions['+e+'].th" maxlength="16" value="'+(void 0===t.th?"":t.th)+'" class="tableinput first firstStageInput fourthStageInput" type="text" maxlength="40">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td  class="bca colorWhite" colspan="6" style="text-indent: 3.7%;">'+y+'</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="center">'+k+'</td>\n\t\t\t\t\t\t\t<td colspan="5">\n\t\t\t\t\t\t\t\t<textarea disabled="disabled" name="collisionsWrapper.collisions['+e+'].wtms" class="tableTextarea first firstStageTextarea fourthStageTextarea"style="overflow-y:hidden;" onpropertychange="this.style.height=this.scrollHeight + \'px\'" oninput="this.style.height=this.scrollHeight + \'px\'">'+(void 0===t.wtms?"":t.wtms)+'</textarea>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="center">'+v+'</td>\n\t\t\t\t\t\t\t<td colspan="5">\n\t\t\t\t\t\t\t\t<textarea disabled="disabled" class="tableTextarea first firstStageTextarea fourthStageTextarea" name="collisionsWrapper.collisions['+e+'].yhjy" style="overflow-y:hidden;" onpropertychange="this.style.height=this.scrollHeight + \'px\'" oninput="this.style.height=this.scrollHeight + \'px\'">'+(void 0===t.yhjy?"":t.yhjy)+'</textarea>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="center" colspan="6">'+C+'</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan="6">\n\t\t\t\t\t\t\t\t<div onclick="workflowCollision.fousPoint(event)" class="tableDiv">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="collisionsWrapper.collisions['+e+'].vpId" value="'+i+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="collisionsWrapper.collisions['+e+'].vpPicture" value="'+(void 0===t.picture?t.vpPicture:t.picture)+'">\n\t\t\t\t\t\t\t\t\t<img src="'+(void 0===t.picture?t.vpPicture:t.picture)+'" alt="'+bdip4dLang[langType][-16028]+'">\t\t\t\t\t\t\t\t\t<span _json="'+D+'" _mark="'+l+'" name="table_svg">'+r+'</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="center" colspan="6">'+T+'</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan="6">\n\t\t\t\t\t\t\t\t<div id="twoDimesional-div-'+e+'">'+(void 0===t.twoDimesional?"":t.twoDimesional)+'</div>\n\t\t\t\t\t\t\t\t<textarea id="twoDimesional-text-'+e+'" style="display:none" name="collisionsWrapper.collisions['+e+'].twoDimesional"></textarea>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td  class="bca colorWhite" colspan="6" style="text-indent: 3.7%;">'+x+'</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="center">'+L+'</td>\n\t\t\t\t\t\t\t<td colspan="5">\n\t\t\t\t\t\t\t\t<textarea disabled="disabled" class="tableTextarea second secondStageTextarea fourthStageTextarea" name="collisionsWrapper.collisions['+e+'].sjtxgyj" style="overflow-y:hidden;" onpropertychange="this.style.height=this.scrollHeight + \'px\'" oninput="this.style.height=this.scrollHeight + \'px\'">'+_+'</textarea>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="center">'+S+'</td>\n\t\t\t\t\t\t\t<td colspan="5">\n\t\t\t\t\t\t\t\t<textarea disabled="disabled" class="tableTextarea third thirdStageTextarea fourthStageTextarea" name="collisionsWrapper.collisions['+e+'].mxyzyj" style="overflow-y:hidden;" onpropertychange="this.style.height=this.scrollHeight + \'px\'" oninput="this.style.height=this.scrollHeight+ \'px\'">'+I+"</textarea>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t"}}),$(".m-initating-content").html(j),initTextarea(t,B.createBy),$(".m-initating-process").show()},analysisStr:function(t){return t.split("@#@")},initFooterButtonTable:function(){var t='<div id="initatingControls"><input class="saveInitating" type="button" value="'+bdip4dLang[langType][-16033]+'"><input class="submitInitating" type="button" value="'+bdip4dLang[langType][31582]+'"><input type="button" class="returnBtn '+gloubleVariable._isReturn+'" value="'+bdip4dLang[langType][15408]+'" onclick="checkReturn()"></div>';$("#collisionForm div.footer-button").html(t)},loadShareShunt:function(t){""==t&&"0"==gloubleVariable.status?workflowCollision.loadShareList(""):""!=t&&("unHandle"==workflowCollision.currentListName&&"0"==gloubleVariable.status?workflowCollision.loadShareList(t):workflowCollision.loadShareEcho(t))},loadShareList:function(d){var t=BimBdip.modelObject.project,e=publicJS.tomcat_url+"/hrm/selectUsersByProjectId.action",i=new FormData;i.append("projectId",t),$.ajax({url:e,type:"POST",data:i,dataType:"json",processData:!1,contentType:!1,success:function(t){if("200"==t.code){var e=$("#collisionForm").find("select[name='bimWorkflowDetail.receiveBy']"),i=$("#collisionForm").find("select[name='ccBy']"),o="";t.data.forEach(function(t,e){var i=BimBdip.currentUserid;null!=t&&i!=t.id&&(o+='<option value="'+t.id+'">'+t.lastname+"</option>")}),e.append(o),i.append(o);var n={input:'<input type="text" maxLength="20" placeholder="'+bdip4dLang[langType][-16035]+'">',choice:function(){}};if(""!=d){var l=d.receiveBy;""!=l&&$(".dropdown-sin-1").find('option[value="'+l+'"]').attr("selected",!0);var a=d.ccBys;if(""!=a&&null!=a&&"undefiend"!=typeof a)for(var r=a.substring(2,a.length-2).split("||"),s=r.length-1;0<=s;s--){$(".dropdown-sin-2").find('option[value="'+r[s].trim()+'"]')[0].selected=!0}}$(".dropdown-sin-1").dropdown(n),$(".dropdown-sin-2").dropdown(n)}else Dialog.alert(bdip4dLang[langType][-16036],function(){workflowCollision.clearTable()})},error:function(t){Dialog.alert(bdip4dLang[langType][-16037])}})},loadShareEcho:function(t){var e='<option value="'+t.receiveBy+'" selected="selected">'+t.receiveName+"</option>",i=t.ccBys,o=t.ccNames,n="";if(void 0!==i&&""!=i&&void 0!==o&&""!=o)for(var l=i.substring(2,i.length-2).split("||"),a=o.substring(2,o.length-2).split("||"),r=l.length-1;0<=r;r--)n+='<option value="'+l[r]+'" selected>'+a[r]+"</option>";$(".dropdown-sin-1").find("select[name='bimWorkflowDetail.receiveBy']").html(e),$(".dropdown-sin-2").find("select[name='ccBy']").html(n);var s={input:'<input type="text" maxLength="20" placeholder="'+bdip4dLang[langType][-16035]+'">',choice:function(){}};try{$(".dropdown-sin-1").dropdown(s),$(".dropdown-sin-2").dropdown(s),changeDropDownReadOnly("dropdown-sin-1",!0),changeDropDownReadOnly("dropdown-sin-2",!0)}catch(t){}},loadFirstColorZone:function(){gloubleVariable._launch="_btnOrange",gloubleVariable._reply="_btnGreen",gloubleVariable._confirm="_btnGreen",gloubleVariable._closed="_btnGreen",gloubleVariable._isReturn=""},loadSecondColorZone:function(){gloubleVariable._launch="_btnBlue",gloubleVariable._reply="_btnOrange",gloubleVariable._confirm="_btnGreen",gloubleVariable._closed="_btnGreen",gloubleVariable._isReturn="_show"},loadThirdColorZone:function(){gloubleVariable._launch="_btnBlue",gloubleVariable._reply="_btnBlue",gloubleVariable._confirm="_btnOrange",gloubleVariable._closed="_btnGreen",gloubleVariable._isReturn=""},loadFourthColorZone:function(){gloubleVariable._launch="_btnBlue",gloubleVariable._reply="_btnBlue",gloubleVariable._confirm="_btnBlue",gloubleVariable._closed="_btnOrange",gloubleVariable._isReturn=""},firstStage:function(){$(".firstStageInput").each(function(){$(this).removeAttr("readonly")}),$(".firstStageTextarea").each(function(){$(this).removeAttr("disabled")}),$(".firstStageSelect").each(function(){$(this).removeAttr("disabled")}),$(".firstStageA").each(function(){$(this).css("display","block")})},secondStage:function(){$(".secondStageTextarea").each(function(){$(this).removeAttr("disabled")})},thirdStage:function(){$(".thirdStageTextarea").each(function(){$(this).removeAttr("disabled")})},fourthStage:function(){},lockAllEditor:function(){changeDropDownReadOnly("dropdown-sin-1",!0),changeDropDownReadOnly("dropdown-sin-2",!0)},cleanAllButton:function(){$("#collisionForm div.footer-button").empty()},sendAjax:function(t,e,i){$.ajax({url:t,type:"POST",data:e,dataType:"json",processData:!1,contentType:!1,success:function(t){i(t)},error:function(t){}})},draft:function(t){var e=$("input[name='bimWorkflowDetail.xmmc']").val().trim();if(void 0!==e&&""!=e){var i=$("select[name='bimWorkflowDetail.receiveBy'] option:selected").val().trim();if(void 0!==i&&""!=i){var o=publicJS.tomcat_url+"/workflow/saveOrSubmit.action",n=new FormData($("#collisionForm")[0]);n.append("isSubmit",t),n.append("modelId",BimBdip.lvmid),n.append("bimWorkflowDetail.xmmc",e),n.append("prjId",BimBdip.modelObject.project);var l="";if("1"==t){l=bdip4dLang[langType][-16034];try{$("#collisionForm").find("table").each(function(){$(this).find(".first").each(function(){if($(this).is("input")){if(""==$(this).val())throw"————————"}else if($(this).is("textarea")){if(""==$(this).val())throw"————————"}else if($(this).is("select")){if(""==$(this).children("option:selected").val())throw"————————"}else if(""==$(this).val())throw"————————"})}),$(".w-e-text").each(function(){if("<p><br></p>"==$(this).html())throw"————————"}),workflowCollision.sendAjax(o,n,function(t){"200"==t.code?(layer.msg(l+bdip4dLang[langType][-16040],{icon:1,time:1e3}),workflowCollision.currentListName="handle",workflowCollision.reloadList()):layer.msg(l+bdip4dLang[langType][-16041],{icon:2,time:1e3}),clearTable()})}catch(t){Dialog.confirm(bdip4dLang[langType][-16042],function(){workflowCollision.sendAjax(o,n,function(t){"200"==t.code?(layer.msg(l+bdip4dLang[langType][-16040],{icon:1,time:1e3}),workflowCollision.currentListName="handle",workflowCollision.reloadList()):layer.msg(l+bdip4dLang[langType][-16041],{icon:2,time:1e3}),clearTable()})})}}else l=bdip4dLang[langType][-16033],workflowCollision.sendAjax(o,n,function(t){"200"==t.code?(layer.msg(l+bdip4dLang[langType][-16040],{icon:1,time:1e3}),workflowCollision.reloadList()):layer.msg(l+bdip4dLang[langType][-16041],{icon:2,time:1e3}),clearTable()})}}},check:function(t){var e=publicJS.tomcat_url+"/workflow/check.action",i=new FormData($("#collisionForm")[0]);i.append("isSubmit",t),i.append("prjId",BimBdip.modelObject.project);var o="";if("1"==t){o=bdip4dLang[langType][-16034];try{$("#collisionForm").find("table").each(function(){if(""==$(this).find(".second").val())throw"————————"}),workflowCollision.sendAjax(e,i,function(t){"200"==t.code?(layer.msg(o+bdip4dLang[langType][-16040],{icon:1,time:1e3}),workflowCollision.reloadList()):layer.msg(o+bdip4dLang[langType][-16041],{icon:2,time:1e3}),clearTable()})}catch(t){Dialog.confirm(bdip4dLang[langType][-16043],function(){workflowCollision.sendAjax(e,i,function(t){"200"==t.code?(layer.msg(o+bdip4dLang[langType][-16040],{icon:1,time:1e3}),workflowCollision.reloadList()):layer.msg(o+bdip4dLang[langType][-16041],{icon:2,time:1e3}),clearTable()})})}}else o=bdip4dLang[langType][-16033],workflowCollision.sendAjax(e,i,function(t){"200"==t.code?(layer.msg(o+bdip4dLang[langType][-16040],{icon:1,time:1e3}),workflowCollision.reloadList()):layer.msg(o+bdip4dLang[langType][-16041],{icon:2,time:1e3}),clearTable()})},checkReturn:function(){var t=publicJS.tomcat_url+"/workflow/checkReturn.action",e=new FormData($("#collisionForm")[0]);e.append("prjId",BimBdip.modelObject.project),$.ajax({url:t,type:"POST",data:e,dataType:"json",processData:!1,contentType:!1,success:function(t){"200"==t.code&&workflowCollision.reloadList(),clearTable()},error:function(t,e,i){}})},confirm:function(t){var e=publicJS.tomcat_url+"/workflow/confirm.action",i=new FormData($("#collisionForm")[0]);i.append("isSubmit",t),i.append("prjId",BimBdip.modelObject.project);var o="";if("1"==t){o=bdip4dLang[langType][-16034];try{$("#collisionForm").find("table").each(function(){if(""==$(this).find(".third").val())throw"————————"}),workflowCollision.sendAjax(e,i,function(t){"200"==t.code?(layer.msg(o+bdip4dLang[langType][-16040],{icon:1,time:1e3}),workflowCollision.reloadList()):layer.msg(o+bdip4dLang[langType][-16041],{icon:2,time:1e3}),clearTable()})}catch(t){Dialog.confirm(bdip4dLang[langType][-16043],function(){workflowCollision.sendAjax(e,i,function(t){"200"==t.code?(layer.msg(o+bdip4dLang[langType][-16040],{icon:1,time:1e3}),workflowCollision.reloadList()):layer.msg(o+bdip4dLang[langType][-16041],{icon:2,time:1e3}),clearTable()})})}}else o=bdip4dLang[langType][-16033],workflowCollision.sendAjax(e,i,function(t){"200"==t.code?(layer.msg(o+bdip4dLang[langType][-16040],{icon:1,time:1e3}),workflowCollision.reloadList()):layer.msg(o+bdip4dLang[langType][-16041],{icon:2,time:1e3}),clearTable()})},uploadTwoDimesionalImgage:function(){var t=publicJS.tomcat_url+"/workflow/uploadTwoDimesionalImgage.action",e=$("#collisionForm").serializeArray(),i={name:"isSubmit",value:isSubmit},o={name:"modelId",value:BimBdip.lvmid};e.push(i),e.push(o),jQuery.ajaxFileUpload({url:t,secureuri:!1,fileElementId:$("#file1").attr("id"),dataType:"json",success:function(t,e){},error:function(t,e,i){}})},exportWord:function(){var t=$('input[name="bimWorkflowDetail.id"]').val();if(void 0!==t&&""!=t){var e='<form action="'+(publicJS.tomcat_url+"/workflow/exportCollision.action?workflowId="+t)+'" enctype="multipart/form-data" method="post" style="display:none"></form>';$(".m-initating-process").append(e),$(".m-initating-process form")[1].submit()}else layer.msg(bdip4dLang[langType][-16045],{icon:7,time:1500})},fousPoint:function(t){var e="IMG"==t.target.nodeName?t.target.nextElementSibling:t.target.parentElement,i=e.getAttribute("_json"),o=e.getAttribute("_mark");if(null==workflowCollision.markupObj||""==workflowCollision.markupObj){null==BimBdip.view.getExtension("Autodesk.Viewing.MarkupsCore")&&BimBdip.view.loadExtension("Autodesk.Viewing.MarkupsCore");workflowCollision.markupObj=new Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore(BimBdip.view,{markupDisableHotkeys:!1}),workflowCollision.markupObj.load()}if(null!=bimViewPointNew.markup&&bimViewPointNew.markup.duringEditMode&&bimViewPointNew.enterViewMode(),workflowCollision.markupObj.duringEditMode&&(workflowCollision.markupObj.leaveEditMode(),workflowCollision.markupObj.hide()),""!=i){i=i.replace(/'/g,'"');var n=JSON.parse(i);BimBdip.view.restoreState(n),""!=o&&setTimeout(function(){if(workflowCollision.markupObj.show(),workflowCollision.markupObj.enterEditMode(),o&&0<o.replace(/(^\s*)|(\s*$)/g,"").length&&(markupList=o.split("@#@"),null!=markupList&&0<markupList.length))for(var t=0,e=markupList.length;t<e;t++){var i=markupList[t].split("@BIM@");workflowCollision.markupObj.loadMarkups(i[1].replace(/'/g,'"'),i[0])}},500)}$("#viewers").mousedown(function(){null!=workflowCollision.markupObj&&workflowCollision.markupObj.duringEditMode&&workflowCollision.closeMarkUp()})},clearCollisionMarkups:function(){null!=workflowCollision.markupObj&&workflowCollision.markupObj.duringEditMode&&(workflowCollision.markupObj.leaveEditMode(),workflowCollision.markupObj.hide())},closeMarkUp:function(){workflowCollision.markupObj.leaveEditMode(),workflowCollision.markupObj.hide(),BimBdip.view.unloadExtension("Autodesk.Viewing.MarkupsCore"),workflowCollision.markupObj=null},clearTable:function(){$(".m-initating-process").hide(),$(".m-initating-process").empty(),null!=workflowCollision.markupObj&&workflowCollision.markupObj.duringEditMode&&workflowCollision.closeMarkUp()},generatingList:function(t){var e='<div class="m-initating-title hei30 br34"><span>'+bdip4dLang[langType][-16046]+'</span><input class="closeBtn closeInitating floright" onclick="clearList()" type="button" value="×"></div><div id="m-backlog-title" class="m-backlog-title"><span><a href="#" onclick="workflowCollision.loadHandleList()">'+bdip4dLang[langType][-16047]+'</a></span><span><a href="#" onclick="workflowCollision.loadUnHandleList();">'+bdip4dLang[langType][-16048]+'</a></span><span><a href="#" onclick="workflowCollision.loadCcList()">'+bdip4dLang[langType][-16049]+'</a></span></div><div class="handle-children-title" style="display:none"><span class="bihuan_span"><a href="#" onclick="workflowCollision.loadHandleList(3)">'+bdip4dLang[langType][-16050]+'</a></span><span class="weibihuan_span"><a href="#" onclick="workflowCollision.loadHandleList(0)">'+bdip4dLang[langType][-16051]+'</a></span></div><div class="m-collision-table"><table id="backlogTable" class="table table-striped table-bordered" cellspacing="0" width="100%"><thead><tr><th style="background-image:none" class="text_none reme"><a name="deleteCollisionAElement" class="delete-collision-buton" href="#" _method="'+workflowCollision.currentListNamemethod+'" onclick="workflowCollision.deleteWorkflowByIds(event)">'+bdip4dLang[langType][-15046]+"</a></th><th>"+bdip4dLang[langType][-16053]+"</th><th>"+bdip4dLang[langType][-16054]+"</th><th>"+bdip4dLang[langType][-16055]+"</th><th>"+bdip4dLang[langType][-16056]+"</th></tr></thead></table></div>";$(".m-backlog-process").html(e),$("#backlogTable").dataTable({data:t,aLengthMenu:[14],bAutoWidth:!0,oLanguage:{sSearch:bdip4dLang[langType][-16057]+":",sInfo:bdip4dLang[langType][-16438]+"_"+bdip4dLang[langType][-16440]+"_TOTAL_"+bdip4dLang[langType][-16441],sZeroRecords:bdip4dLang[langType][-16059],sLengthMenu:bdip4dLang[langType][-16442]+" _MENU_"+bdip4dLang[langType][-16443],sInfoEmpty:bdip4dLang[langType][-16061],sInfoFiltered:"("+bdip4dLang[langType][-16444]+"_MAX_"+bdip4dLang[langType][-16445]+")",oPaginate:{sNext:bdip4dLang[langType][-16063],sLast:bdip4dLang[langType][-16064],sFirst:bdip4dLang[langType][-16065],sPrevious:bdip4dLang[langType][-16066]}},columns:[{data:"id",orderable:!1,defaultContent:"",class:"textInd width_w",render:function(t,e,i,o){return BimBdip.currentUserid==i.createBy?'<input type="checkbox" name="workflowId" _createBy="'+i.createBy+'" value = "'+t+'">':""}},{data:"title",defaultContent:"",class:"font_12",render:function(t,e,i,o){var n=i.exField4;return"cc"==workflowCollision.currentListName&&(n=i.ccRead),"0"==n?'<span class="text_span" title=" '+t+' ">'+t+'</span>&nbsp;&nbsp;<span _data="'+t+'" class="collision-isreadfield"></span>':'<span class="text_span" title=" '+t+' ">'+t+"</span>"}},{data:"createName",class:"font_12",defaultContent:""},{data:"receiveName",class:"font_12",defaultContent:"",render:function(t,e,i,o){return'<span class="text_span width_66" title=" '+t+' ">'+t+"</span>"}},{data:"createTime",class:"date_text",defaultContent:"",render:function(t,e,i,o){return new Date(t).Format("yyyy-MM-dd hh:mm:ss")}}]}),$("#m-backlog-process").show(),workflowCollision.bindListClickEvent(),$("#backlogTable").DataTable().on("click","tr td:nth-child(1)",function(){$(this).find("input")[0].checked?$("#backlogTable").find("a[name='deleteCollisionAElement']").css("display","block"):0==$("#m-backlog-process").find("#backlogTable").find("input:checked").length&&$("#backlogTable").find("a[name='deleteCollisionAElement']").css("display","none")})},loadHandleList:function(t){workflowCollision.currentListName="handle";var e,i=BimBdip.currentUserid,o=publicJS.tomcat_url+"/workflow/handle.action",n=BimBdip.lvmid,l=new FormData;l.append("currentUserId",i),l.append("modelId",n),void 0!==t&&l.append("status",t),e=workflowCollision.getTableMessage(o,l),workflowCollision.generatingList(e,"handle"),workflowCollision.showHandleChildrenTitle(),workflowCollision.changeColorStyle($("#m-backlog-title").find("span:eq(0)")),3==t?$(".handle-children-title").find("span:eq(0)").addClass("active"):0==t&&$(".handle-children-title").find("span:eq(1)").addClass("active");var a=$(".m-collision-table").height(),r=$(".handle-children-title").height();$(".m-collision-table #backlogTable_wrapper").css("height",a-r+"px")},loadUnHandleList:function(){workflowCollision.currentListName="unHandle";var t,e=BimBdip.currentUserid,i=publicJS.tomcat_url+"/workflow/unHandle.action",o=BimBdip.lvmid,n=new FormData;n.append("currentUserId",e),n.append("modelId",o),t=workflowCollision.getTableMessage(i,n),workflowCollision.generatingList(t,"unHandle"),workflowCollision.hideHandleChildrenTitle(),workflowCollision.changeColorStyle($("#m-backlog-title").find("span:eq(1)"))},loadCcList:function(){workflowCollision.currentListName="cc";var t,e=BimBdip.currentUserid,i=BimBdip.lvmid,o=publicJS.tomcat_url+"/workflow/getCcJson.action",n=new FormData;n.append("currentUserId",e),n.append("modelId",i),t=workflowCollision.getTableMessage(o,n),workflowCollision.generatingList(t),workflowCollision.hideHandleChildrenTitle(),workflowCollision.changeColorStyle($("#m-backlog-title").find("span:eq(2)"))},getTableMessage:function(t,e){var i="";return $.ajax({url:t,type:"POST",data:e,dataType:"json",async:!1,processData:!1,contentType:!1,success:function(t){i=t.data},error:function(t){}}),i},reloadList:function(){switch(workflowCollision.currentListName){case"cc":workflowCollision.loadCcList();break;case"handle":workflowCollision.loadHandleList();break;case"unHandle":default:workflowCollision.loadUnHandleList()}},deleteWorkflowByIds:function(t){var i="",e=$("#m-backlog-process").find('input[name="workflowId"]:checked');e.each(function(t){(t+=1)!=e.length?i=i+$(this).val()+",":i+=$(this).val()}),""!=i&&Dialog.confirm(bdip4dLang[langType][-16067],function(){var t=publicJS.tomcat_url+"/workflow/deleteWorkflowDetailByIdsList.action",e=new FormData;e.append("idsList",i),$.ajax({url:t,type:"POST",data:e,dataType:"json",processData:!1,contentType:!1,success:function(t){"200"==t.code&&("handle"==workflowCollision.currentListName?workflowCollision.loadHandleList():"unHandle"==workflowCollision.currentListName?workflowCollision.loadUnHandleList():"cc"==workflowCollision.currentListName&&workflowCollision.loadCcList())},error:function(t){}})})},changeColorStyle:function(t){t.css("background","#22a7f0"),t.find("a").css("color","#fff")},bindListClickEvent:function(){$("#backlogTable").DataTable().on("click","tr td:nth-child(2)",function(){var t=$("#backlogTable").DataTable().row(this).data().id,e=publicJS.tomcat_url+"/workflow/getDetailAndCollisionById.action",i=new FormData;i.append("workflowId",t);var o=this;$.ajax({url:e,type:"POST",data:i,dataType:"json",processData:!1,contentType:!1,success:function(t){var e=t.data;if("200"==t.code){workflowCollision.main(e.bimWorkflowDetail.status,e,workflowCollision.currentListName);var i=$(o).children("span:eq(1)");i&&i.remove(),workflowCollision.updateReadByStatusById(e.bimWorkflowDetail)}},error:function(t){}})})},updateReadByStatusById:function(t){var e="";e="handle"==workflowCollision.currentListName?"0"==gloubleVariable.status?("number"!=typeof t.status?parseInt(t.status):t.status)+1:t.status-1:t.status;var i=new FormData;i.append("workflowId",t.id),i.append("status",e),i.append("isRead",1),"cc"==workflowCollision.currentListName&&(i.append("operation","cc"),i.append("currentUserId",BimBdip.currentUserid));var o=publicJS.tomcat_url+"/workflow/updateReadByStatusById.action";$.ajax({url:o,type:"POST",data:i,dataType:"json",processData:!1,contentType:!1,success:function(t){},error:function(t){}})},showHandleChildrenTitle:function(){$("#m-backlog-process").find("div.handle-children-title").css("display","block")},hideHandleChildrenTitle:function(){$("#m-backlog-process").find("div.handle-children-title").css("display","none")},clearList:function(){$(".m-backlog-process").hide(),$(".m-backlog-process").empty()},getSendee:function(){$(".ui-autocomplete:eq(0)").show()},getCc:function(){$(".ui-autocomplete:eq(1)").show()}};function bindSaveSubmitShunt(t){switch($("#initatingControls .saveInitating").unbind(),$("#initatingControls .submitInitating").unbind(),t){case"0":$("#initatingControls .saveInitating").click(function(){workflowCollision.draft(0)}),$("#initatingControls .submitInitating").click(function(){workflowCollision.draft(1)});break;case"1":$("#initatingControls .saveInitating").click(function(){workflowCollision.check(0)}),$("#initatingControls .submitInitating").click(function(){workflowCollision.check(1)});break;case"2":$("#initatingControls .saveInitating").click(function(){workflowCollision.confirm(0)}),$("#initatingControls .submitInitating").click(function(){workflowCollision.confirm(1)});break;case"3":$("#initatingControls .saveInitating").click(function(){}),$("#initatingControls .submitInitating").click(function(){})}}function changeDropDownReadOnly(t,e){var i=$("."+t).data("dropdown");e?void 0!==i&&i.changeStatus("readonly"):void 0!==i&&i.changeStatus()}function initTextarea(t,e){var i=BimBdip.currentUserid,n=window.wangEditor,l=[];("0"==gloubleVariable.status&&i==e||void 0===e)&&(l=["head","bold","italic","underline","strikeThrough","foreColor","backColor","list","justify","emoticon","image","undo"]),t.forEach(function(t,e){var i=new n("#"+("twoDimesional-div-"+e)),o=$("#"+("twoDimesional-text-"+e));i.customConfig.onchange=function(t){o.val(t)},i.customConfig.uploadImgServer=publicJS.tomcat_url+"/workflow/uploadTwoDimesionalImgage.action",i.customConfig.uploadFileName="files",i.customConfig.uploadImgTimeout=2e4,i.customConfig.menus=l,i.customConfig.uploadImgHooks={before:function(t,e,i){},success:function(t,e,i){},fail:function(t,e,i){},error:function(t,e){},timeout:function(t,e){},customInsert:function(t,e,i){$(e.data).each(function(){t(this)})}},i.create(),o.val(i.txt.html()),"0"==gloubleVariable.status&&"handle"!=workflowCollision.currentListName&&"cc"!=workflowCollision.currentListName?i.$textElem.attr("contenteditable",!0):i.$textElem.attr("contenteditable",!1),copyBindEvent($(".w-e-text:eq("+e+")")[0])})}function copyBindEvent(l){l.addEventListener("paste",function(t){if(workflowCollision.operateEditorTarget=l,"Chrome"==GetBrowserType())for(var e=t.clipboardData,i=null,o=0;o<t.clipboardData.items.length;o++)if(-1!=e.items[o].type.indexOf("image")){i=e.items[o].getAsFile();var n=new window.FileReader;n.readAsDataURL(i),n.onloadend=function(){discussCompress(n.result)}}else if(-1!=e.items[o].type.indexOf("html")){$(t.clipboardData.getData("text/html")).find("img").each(function(){var t=document.createElement("canvas"),e=t.getContext("2d"),i=document.createElement("img"),o=$(this).attr("src");i.src=o;var n=new Image;e.drawImage(i,0,0,i.width,i.height),n.src=t.toDataURL("image/png"),discussCompress(n.src)})}})}function discussCompress(t){var i=new FormData;compressImg(t,1024,768,function(t){var e=dataURLToBlob(t);null!==e||void 0!==e||""!==e?(i.append("files",e),copyDoAjax(i)):Dialog.alert(bdip4dLang[langType][-16069])})}function copyDoAjax(t){var e=publicJS.tomcat_url+"/workflow/uploadTwoDimesionalImgage.action";$.ajax({url:e,type:"POST",data:t,processData:!1,contentType:!1,dataType:"json",success:function(t,e){var i='<img src="'+t.data+'" style="max-width:100%;">';$(workflowCollision.operateEditorTarget).append(i)},error:function(t,e,i){}})}function GetBrowserType(){var t=navigator.userAgent;return-1<t.indexOf("Opera")?"Opera":-1<t.indexOf("Firefox")?"FF":-1<t.indexOf("Chrome")?"Chrome":-1<t.indexOf("Safari")?"Safari":"IE"}function clearTable(){workflowCollision.clearTable()}function clearList(){workflowCollision.clearList()}function draft(t){workflowCollision.draft(t)}function checkReturn(){workflowCollision.checkReturn()}function loadFirstColorZone(){workflowCollision.loadFirstColorZone()}function loadSecondColorZone(){workflowCollision.loadSecondColorZone()}function loadThirdColorZone(){workflowCollision.loadThirdColorZone()}function loadFourthColorZone(){workflowCollision.loadFourthColorZone()}function collisionReport(){workflowCollision.loadHandleList()}function collisionUnHandle(){workflowCollision.loadUnHandleList()}function collisionCc(){workflowCollision.loadCcList()}function toCollisionTable(t,i){var e=publicJS.tomcat_url+"/workflow/getDetailAndCollisionById.action",o=new FormData;o.append("workflowId",t),$.ajax({url:e,type:"POST",data:o,dataType:"json",processData:!1,contentType:!1,success:function(t){var e=t.data;"200"==t.code&&(workflowCollision.main(e.bimWorkflowDetail.status,e,i),workflowCollision.updateReadByStatusById(e.bimWorkflowDetail))},error:function(t){}})}Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[i]:("00"+e[i]).substr((""+e[i]).length)));return t};