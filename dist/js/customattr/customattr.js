"use strict";var bimCustomAttr={fromSelf:!1,ind:"1",currentUrl:null,currentModelid:null,currentModelVersion:null,currentSDBPath:null,currentUserid:null,currentUsername:null,targetDBID:null,btnElement:null,attrDictionaryData:null,beVisible:!1,dockingPanelNone:function(){bimViewPointNew&&bimViewPointNew.hiddenViewPoint_new(),bimFileterColoring&&bimFileterColoring.hideColoringButtonFrame()},initialize:function(){bimCustomAttr.currentUrl=BimBdip.view_modelUrl,bimCustomAttr.currentModelid=BimBdip.lvmid,bimCustomAttr.currentModelVersion=BimBdip.modelVersion,bimCustomAttr.currentSDBPath=BimBdip.sdbPath,bimCustomAttr.currentUserid=BimBdip.currentUserid,bimCustomAttr.currentUsername=BimBdip.currentUsername;var t=BimBdip.view.getSelection();if(bimCustomAttr.targetDBID=new Array,t&&0<t.length)for(var e=0;e<t.length;e++)bimCustomAttr.getUsedDBIDs(t[e]);else bimCustomAttr.targetDBID.push("1");var i=BimBdip.view.settingsTools.getControl("toolbar-propertiesTool");bimCustomAttr.btnElement=i.container,bimCustomAttr.getAttrDictionary()},extraInitialize:function(){bimCustomAttr.currentUrl=BimBdip.view_modelUrl,bimCustomAttr.currentModelid=BimBdip.lvmid,bimCustomAttr.currentModelVersion=BimBdip.modelVersion,bimCustomAttr.currentSDBPath=BimBdip.sdbPath,bimCustomAttr.currentUserid=BimBdip.currentUserid,bimCustomAttr.currentUsername=BimBdip.currentUsername;var t=BimBdip.view.getSelection();if(bimCustomAttr.targetDBID=new Array,t&&0<t.length)for(var e=0;e<t.length;e++)bimCustomAttr.getUsedDBIDs(t[e])},getUsedDBIDs:function(t){var e=!0;BimBdip.view.model.getData().instanceTree.enumNodeChildren(t,function(t){e=!1,bimCustomAttr.getUsedDBIDs(t)}),e&&bimCustomAttr.targetDBID.push(t)},getAttrDictionary:function(){var t=new FormData;t.append("modelid",bimCustomAttr.currentModelid),t.append("modelversion",bimCustomAttr.currentModelVersion),$.ajax({url:publicJS.tomcat_url+"/ModelAttributeExpand_getAttrDictionary.action",type:"POST",data:t,dataType:"JSON",async:!1,processData:!1,contentType:!1,success:function(t){var e=JSON.parse(t);bimCustomAttr.attrDictionaryData=e.data},error:function(){}})},customattr_load:function(){var t=this;bimCustomAttr.fromSelf=!0,t.dockingPanelNone(),bimCustomAttr.fromSelf=!1,t.initialize(),t.toggleVisibilityForCustomAttr()},hiddenCustomAttr:function(){hideSidePanel(),window.parent.hideSidePanel(),bimCustomAttr.clearContent(),bimCustomAttr.btnElement&&($(bimCustomAttr.btnElement).removeClass("active"),$(bimCustomAttr.btnElement).addClass("inactive")),bimCustomAttr.beVisible=!1,bimCustomAttr.ind="1"},onlyHiddenCustomAttrButton:function(){bimCustomAttr.btnElement&&($(bimCustomAttr.btnElement).removeClass("active"),$(bimCustomAttr.btnElement).addClass("inactive")),bimCustomAttr.beVisible=!1,bimCustomAttr.ind="1"},setVisibleForCustomAttr:function(t){bimCustomAttr.beVisible=t;var e=$("#m-attribute");t?(bimCustomAttr.loadContent(),bimCustomAttr.fromSelf=!0,hideSidePanel(),window.parent.hideSidePanel(),bimCustomAttr.fromSelf=!1,e.css("right","0px")):(e.css("right","-300px"),bimCustomAttr.clearContent()),bimCustomAttr.btnElement.classList.toggle("active")},toggleVisibilityForCustomAttr:function(){bimCustomAttr.setVisibleForCustomAttr(!bimCustomAttr.beVisible)},clearContent:function(){$("#m-attribute").html("")},showAllAnnotation:function(){bimCustomAttr.getDbidByCustom(),bimCustomAttr.loadContent()},hideAllAnnotation:function(){$("div[name='customattr_annotation']").each(function(){null!=this&&this.remove()})},loadContent:function(){bimCustomAttr.showCustomAttr(bimCustomAttr.targetDBID)},showCustomAttr:function(t){var e=new FormData;e.append("modelid",bimCustomAttr.currentModelid),e.append("modelversion",bimCustomAttr.currentModelVersion),e.append("dbids",t.join(",")),$.ajax({url:publicJS.tomcat_url+"/ModelAttributeExpand_getCustomAttrList.action",type:"POST",data:e,dataType:"JSON",timeout:3e4,async:!1,processData:!1,contentType:!1,success:function(t){bimCustomAttr.clearContent();var e=JSON.parse(t);bimCustomAttr.showData(e.data)},error:function(){bimCustomAttr.clearContent(),Dialog.alert(bdip4dLang[langType][-15255])}})},showData:function(t){var e,i,n,a="",r="";if(r+="<h2>"+bdip4dLang[langType][-15256]+"</h2>",r+='<div class=" btnClose " onclick="bimCustomAttr.hiddenCustomAttr()">×</div>',r+='<div class="attribute_content">',t&&0!=t.length){for(var o=0;o<t.length;o++){r+='<div class="panelClassification">',r+='<div class="panelClassification_title">',r+='<div class="attributeName" title="'+t[o].attrCategory+'"><icon></icon>'+t[o].attrCategory+"</div>","#BIM#custom#BIM#"==t[o].attrCategoryType&&(r+='<b class="delAttributes fa fa-trash fa-a5x" title="'+bdip4dLang[langType][-15260]+'"></b>'),r+='<b class="addAttributes fa fa-plus-square fa-a5x" title="'+bdip4dLang[langType][-15258]+'"></b>',r+="</div>",r+='<ul class="panelClassification_ul" style="display:block;">',e=t[o].attrData;for(var s=0;s<e.length;s++)if(e[s].attrName){if(i=e[s].attrName,a="#BIM#custom#BIM#"==e[s].description||"HTTP1"==e[s].description?"newAtt":"oldAtt",n=e[s].attrValue,r+='<li class="panelClassification_list '+a+'" _description="'+e[s].description+'" _dataid="'+e[s].id+'">',r+='<div class="panelClassification_name">',r+='<input type="text" class="panelClassification_input" value="'+i+'" title="'+i+'" readonly="readonly">',r+="</div>",r+='<div class="panelClassification_contetn">',r+='<b class="attributesControl fa fa-trash fa-a5x" onclick="bimCustomAttr.deleteAttribute(event)"></b>',"HTTP0"==e[s].description||"HTTP1"==e[s].description){var l=n;-1==n.indexOf("http://")&&-1==n.indexOf("https://")&&(l="http://"+n),r+='<a class="attributeUrl" href="'+l+'" title="'+l+'" target="_blank" style="width:60%;padding: 3px 5px 3px 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"> '+n+"</a>",r+='<b class="fa fa-repeat fa-a5x" onclick="bimCustomAttr.changeAttributeUrl(event)"></b>'}else{var d=e[s].attrName.indexOf("族"),u=e[s].attrName.indexOf("类型");"system"!=e[s].description||-1==d&&-1==u?r+='<input type="text" class="panelClassification_input classificationValue" title="'+n+'" onchange="bimCustomAttr.changeAttribute(event)" value="'+n+'" >':r+='<input type="text" class="panelClassification_input classificationValue" title="'+n+'" value="'+n+'" readonly="readonly">'}r+="</div>",r+="</li>"}r+="</ul>",r+="</div>"}r+="</div>",r+='<div class="attribute_footer">',r+='<input type="button" onclick="bimCustomAttr.newClassIfication()" class="newCategory btn btn-info" value="'+bdip4dLang[langType][-15257]+'">',r+='<input type="button" class="newAttribute btn btn-info" value="'+bdip4dLang[langType][-15258]+'">',r+='<input type="button" onclick="bimCustomAttr.saveAction()" class="saveAttribute btn btn-info" value="'+bdip4dLang[langType][-15259]+'">',r+="</div>"}else r+="</div>",r+='<div class="attribute_footer">',r+='<input type="button" onclick="bimCustomAttr.newClassIfication()" class="newCategory btn btn-info" value="'+bdip4dLang[langType][-15257]+'">',r+='<input type="button" class="newAttribute btn btn-info" value="'+bdip4dLang[langType][-15258]+'">',r+='<input type="button" onclick="bimCustomAttr.saveAction()" class="saveAttribute btn btn-info" value="'+bdip4dLang[langType][-15259]+'">',r+="</div>";$("#m-attribute").html(r),r="",this.bindShowMenu(),this.bindAddAttribute(),this.bindDelAttribute()},bindShowMenu:function(){$(".attributeName").bind("click",function(t){var e=t.target,i=e.parentNode.nextElementSibling,n=e.children[0];"block"==i.style.display?(n.style.background="url("+publicJS.tomcat_url+"/img/modeltool/xia.png)",i.style.display="none"):(n.style.background="url("+publicJS.tomcat_url+"/img/modeltool/xial.png)",i.style.display="block")})},newClassIfication:function(){var t="";t+='<div class="panelClassification newClassIfication">',t+='<div class="panelClassification_title">',t+='<div class="attributeName"><icon></icon> <input class="attrClass" onchange="bimCustomAttr.checkCategory(event)" type="text" placeholder="'+bdip4dLang[langType][-16446]+'"></div>',t+='<b class="addAttributes fa fa-plus-square fa-a5x" title="'+bdip4dLang[langType][-15258]+'"></b>',t+="</div>",t+='<ul class="panelClassification_ul" style="display:block;">',t+="</ul>",t+="</div>",$(".attribute_content").append(t),$(".attribute_content").scrollTop($(".attribute_content")[0].scrollHeight),this.bindAddAttribute()},bindAddAttribute:function(){$(".panelClassification_title .addAttributes").bind("click",function(t){var e=(t=t.srcElement?t.srcElement:t.target).parentNode.nextSibling;bimCustomAttr.addAttribute(e)})},bindDelAttribute:function(){$(".panelClassification_title .delAttributes").bind("click",function(t){var e=(t=t.srcElement?t.srcElement:t.target).previousSibling.innerText;bimCustomAttr.delAttribute(t.parentNode.nextSibling,e)})},addAttribute:function(t){var e="",i="";(i=document.createElement("li")).className="panelClassification_list newAttributeLi",e+='<div class="panelClassification_name newAttributeDiv">',e+='<div class="dropdown-sin-2 dropdown-sin-2-'+bimCustomAttr.ind+'"><select style="display:none"placeholder="'+bdip4dLang[langType][-15261]+'"></select></div>',e+="</div>",e+='<div class="panelClassification_contetn">',e+='<input type="text" class="panelClassification_input attrValue" title="'+bdip4dLang[langType][-15262]+'" placeholder="'+bdip4dLang[langType][-15262]+'" >',e+='<b class="delAttributes fa fa-trash fa-a5x" onclick="bimCustomAttr.delNewAttr(event)" title="'+bdip4dLang[langType][-15263]+'"></b>',e+="</div>",i.innerHTML=e,t.appendChild(i);var n=".dropdown-sin-2-"+bimCustomAttr.ind;this.addSelectInput(n),bimCustomAttr.ind++},delNewAttr:function(t){(t=t.srcElement?t.srcElement:t.target).parentNode.parentNode.remove()},delAttribute:function(e,t){if(0<e.children.length)layer.msg(bdip4dLang[langType][-15264],{icon:2,time:2e3});else{var i=bimCustomAttr.targetDBID,n=new FormData;n.append("dbids",i.join(",")),n.append("modelid",bimCustomAttr.currentModelid),n.append("modelversion",bimCustomAttr.currentModelVersion),n.append("category",t),$.ajax({url:publicJS.tomcat_url+"/ModelAttributeExpand_deleteCustomAttrCategory.action",type:"POST",data:n,dataType:"JSON",async:!1,processData:!1,contentType:!1,success:function(t){layer.msg(bdip4dLang[langType][-15265],{icon:1,time:1e3}),e.parentNode.remove()},error:function(){layer.msg(bdip4dLang[langType][-15266],{icon:2,time:1e3})}})}},addSelectInput:function(t){$(t).dropdown({data:bimCustomAttr.attrDictionaryData,input:'<input type="text" maxLength="20" placeholder="'+bdip4dLang[langType][-15267]+'">',searchNoData:'<li style="color:#ddd"><input class="newAttributeBtn" type="button" value="'+bdip4dLang[langType][-15268]+'" onclick="bimCustomAttr.newAttribute(event)"></li>',choice:function(){var e=this,t="",i=e.$choseList[0].innerText;t=0<this.$choseList[0].parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.children[1].length?e.$choseList[0].parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.children[0].children[1].value:e.$choseList[0].parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.children[0].innerText;var n=new FormData;if(n.append("modelid",bimCustomAttr.currentModelid),n.append("modelversion",bimCustomAttr.currentModelVersion),n.append("dbids",bimCustomAttr.targetDBID.join(",")),n.append("attrName",i),n.append("category",t),$.ajax({url:publicJS.tomcat_url+"/ModelAttributeExpand_beExistAttr.action",type:"POST",data:n,dataType:"JSON",async:!1,processData:!1,contentType:!1,success:function(t){if(1==JSON.parse(t).data)return Dialog.alert(bdip4dLang[langType][-15269]),$(".saveAttribute").hide(),void(e.$choseList[0].parentNode.parentNode.style.border="1px solid red");e.$choseList[0].parentNode.parentNode.style.border="none",$(".saveAttribute").show()},error:function(){}}),0<this.$choseList[0].children[0].children.length)var a=this.$choseList[0].children[0].children[0].getAttribute("data-id");"0"==a?this.$choseList.parent().parent().parent().next(".panelClassification_contetn").html("<input type='date' style='width:100%'>"):this.$choseList.parent().parent().parent().next(".panelClassification_contetn").html('<input type="text" class="panelClassification_input attrValue" title="'+bdip4dLang[langType][-15262]+'" placeholder="'+bdip4dLang[langType][-15262]+'" ><b class="delAttributes fa fa-trash fa-a5x" onclick="bimCustomAttr.delNewAttr(event)" title="'+bdip4dLang[langType][-15263]+'"></b>')}})},newAttribute:function(t){var i=(t=t.srcElement?t.srcElement:t.target).parentNode.parentNode.parentNode.parentNode,e=t.parentNode.parentNode.previousSibling.children[0].value,n=new Dialog;n.Width=300,n.Height=100,n.Title=bdip4dLang[langType][-15271],n.InnerHtml='<div class="addDictionary"style="position:  absolute;top: 35%;width: 100%;"><input type="text" value="'+e+'" style="margin:0 auto;padding:0;width:150px;height:30px;text-indent:5px;display:  block;border-radius:  3px;border: 1px solid #ccc;outline:  none;"></div>',n.OKEvent=function(){var e=window.parent.document.getElementsByClassName("addDictionary")[0].children[0].value,t=new FormData;t.append("modelid",bimCustomAttr.currentModelid),t.append("modelversion",bimCustomAttr.currentModelVersion),t.append("attrName",e),$.ajax({url:publicJS.tomcat_url+"/ModelAttributeExpand_addDictionary.action",type:"POST",data:t,dataType:"JSON",async:!1,processData:!1,contentType:!1,success:function(t){"222"==JSON.parse(t).code?Dialog.alert(bdip4dLang[langType][-15269]):Dialog.alert(bdip4dLang[langType][-15279],function(){n.close(),i.parentNode.className="panelClassification_name",i.innerHTML='<input type="text" class="panelClassification_input" style="color:#808080;text-indent:5px;" value="'+e+'" title="'+e+'" readonly="readonly">',i.style.border="none",$(".saveAttribute").show(),bimCustomAttr.getAttrDictionary()})},error:function(){Dialog.alert(bdip4dLang[langType][-15272])}})},n.show(),n.okButton.value=bdip4dLang[langType][-15259]},deleteAttribute:function(t){var e=(t=t.srcElement?t.srcElement:t.target).parentNode.parentNode,i=e.getAttribute("_dataid").split(","),n=new FormData;n.append("modelid",bimCustomAttr.currentModelid),n.append("modelversion",bimCustomAttr.currentModelVersion),n.append("ids",i.join(",")),$.ajax({url:publicJS.tomcat_url+"/ModelAttributeExpand_deleteCustomAttr.action",type:"POST",data:n,dataType:"JSON",async:!1,processData:!1,contentType:!1,success:function(t){layer.msg(bdip4dLang[langType][-15273],{icon:1,time:1e3}),e.remove()},error:function(){layer.msg(bdip4dLang[langType][-15266],{icon:2,time:1e3})}})},changeAttributeUrl:function(t){(t=t.srcElement?t.srcElement:t.target).parentNode.innerHTML='<input type="text" class="panelClassification_input classificationValue" autofocus onchange="bimCustomAttr.changeAttribute(event)">',t.parentNode.parentNode.className="panelClassification_list m-changeAttribute"},changeAttribute:function(t){(t=t.srcElement?t.srcElement:t.target).parentNode.parentNode.className="panelClassification_list m-changeAttribute",null!=t.getAttributeNode("autofocus")&&t.removeAttribute("autofocus")},checkCategory:function(e){var t=(e=e.srcElement?e.srcElement:e.target).value;if("0"!=t.length){var i=new FormData;i.append("modelid",bimCustomAttr.currentModelid),i.append("modelversion",bimCustomAttr.currentModelVersion),i.append("dbids",bimCustomAttr.targetDBID.join(",")),i.append("category",t),$.ajax({url:publicJS.tomcat_url+"/ModelAttributeExpand_beExistAttrCategory.action",type:"POST",data:i,dataType:"JSON",async:!1,processData:!1,contentType:!1,success:function(t){1==JSON.parse(t).data?(Dialog.alert(bdip4dLang[langType][-15275]),$(".saveAttribute").hide(),e.parentNode.parentNode.style.border="1px solid red"):(e.parentNode.parentNode.style.border="none",$(".saveAttribute").show())},error:function(){}})}else Dialog.alert(bdip4dLang[langType][-15274])},saveAction:function(){var t,e=bimCustomAttr.targetDBID.join(","),i=new Array,n=new Array,a=new Array,r={},o="",s="",l="",d="",u={},c="",p="";$(".newAttributeLi").each(function(){0!=(p=0<$(this).find(".dropdown-selected").length?$(this).find(".dropdown-selected")[0].innerText:$(this).find(".panelClassification_input").val()).length?(0<$(this).parent().prev().find(".attrClass").length?category=$(this).parent().prev().find(".attrClass").val():category=$(this).parent().prev().find(".attributeName").text(),c=$(this).find(".attrValue").val(),r={attrName:p,category:category,attrValue:c},i.push(r)):Dialog.alert(bdip4dLang[langType][-15277])}),$(".newClassIfication").each(function(){0!=(o=$(this).find(".attrClass").val()).length?(n.push(o),s=n.join(",")):Dialog.alert(bdip4dLang[langType][-15278])}),$(".m-changeAttribute").each(function(){l=$(this).find(".classificationValue").val(),d=$(this).attr("_dataid"),description=$(this).attr("_description"),u={ids:d,attrValue:l,description:description},a.push(u)}),t={addAttr:{dbids:e,attrData:i},addCategory:{dbids:e,categorys:s},updateAttrValue:a};var m=new FormData;m.append("modelid",bimCustomAttr.currentModelid),m.append("modelversion",bimCustomAttr.currentModelVersion),m.append("userid",bimCustomAttr.currentUserid),m.append("multiData",JSON.stringify(t)),$.ajax({url:publicJS.tomcat_url+"/ModelAttributeExpand_multi.action",type:"POST",dataType:"JSON",data:m,async:!1,processData:!1,contentType:!1,success:function(){layer.msg(bdip4dLang[langType][-15279],{icon:1,time:1e3}),bimCustomAttr.showCustomAttr(bimCustomAttr.targetDBID)},error:function(){layer.msg(bdip4dLang[langType][-15280],{icon:2,time:1e3})}})},loadAnnotation:function(t){if((t=new Array).push(7147),t.push(1812),t.push(2982),t&&0<t.length)for(var e=0;e<t.length;e++){var i=t[e];BimBdip.view.model.getData().instanceTree.enumNodeFragments(i,function(t){_gyroext.loadCustomAttrAnnotation(i,t)})}},selectSelf:function(t){var e=t.getAttribute("refdbid");BimBdip.view.select(parseInt(e))},showHongWaFamilyInfo:function(){if(bimCustomAttr.extraInitialize(),1<bimCustomAttr.targetDBID.length)Dialog.alert(bdip4dLang[langType][-16447]);else{var t=new FormData;t.append("modelid",bimCustomAttr.currentModelid),t.append("modelversion",bimCustomAttr.currentModelVersion),t.append("dbids",bimCustomAttr.targetDBID.join(",")),$.ajax({url:publicJS.tomcat_url+"/ModelAttributeExpand_getHWGuidByDbid.action",type:"POST",dataType:"JSON",data:t,processData:!1,contentType:!1,success:function(t){var e=JSON.parse(t).data;e&&null!=e&&0<e.length?window.open("http://www.hwzuku.com/open/zuDetail/"+e):Dialog.alert(bdip4dLang[langType][-16448]+"<a class='herf-text'  target='_blank' href='http://www.hwzuku.com'>"+bdip4dLang[langType][-16449]+"</a>"+bdip4dLang[langType][-16450])},error:function(t){Dialog.alert(bdip4dLang[langType][-16448]+"<a class='herf-text'  target='_blank' href='http://www.hwzuku.com'>"+bdip4dLang[langType][-16449]+"</a>"+bdip4dLang[langType][-16450])}})}}};