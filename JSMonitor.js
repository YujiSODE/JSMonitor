/*JSMonitor.js
*
*    Copyright (c) 2016 Yuji SODE <yuji.sode@gmail.com>
*
*    This software is released under the MIT License.
*    See LICENSE or http://opensource.org/licenses/mit-license.php
*/
//the input log monitoring interface with JavaScript
//color='R,G,B,alpha', and every value is between 0 and 255
//it returns function that draws a graph at 1 px
//available format for returned function: function([value(, ..., value)]); value is an array of sc@tag@v
//sc, tag, and v are scale, tag (e.g., timestamp), and given numerical value, respectively. the given value is shown as "v*sc" in graph
function _JSMonitor(color){
  //============================================================================
  var slf=window,r9=slf.Math.random().toFixed(9).replace(/\./g,''),_rgba=color.split(/,/),
      //=== element generator ===
      f=function(elName,elId,targetId){var t=slf.document.getElementById(targetId),E=slf.document.createElement(elName);E.id=elId;return t.appendChild(E);},
      //=== it sets CSS style to target tag ===
      setCss=function(tgt,pos){var s=tgt.style;s.position=pos,s.top='0px',s.left='0px';};
  //=== this method estimates max value of an array. ===
  slf.Array.prototype.mx=function(){return this.sort(function(a,b){return b-a;})[0];};
  //============================================================================
  var bd,_div,divGrph,divCtrl,
      /*<Output control>*/
      fRes,resLbl,resIp,br01,rstB,adLbl,adIp,sbB,
      /*<image for graph>*/
      _c0,_ctx,_img,_ul,r;
  //=== <div tag to draw graph> ===
  bd=slf.document.getElementsByTagName('body')[0],bd.id='bd'+r9;
  _div=f('div','div_'+r9,bd.id),bd.removeAttribute('id');
  setCss(_div,'relative');
  divGrph=f('div','grph'+r9,_div.id),divCtrl=f('div','ctrl'+r9,_div.id);
  //=== </div tag to draw graph> ===
  //<Output control>
  //form for output
  fRes=f('form','fRes'+r9,divCtrl.id),fRes.name='Result',fRes.action='mailto:123.ex@qwerty.com?subject='+slf.document.getElementsByTagName('title')[0].innerHTML,fRes.method='post',fRes.enctype='text/plain';
  resLbl=f('label','resLabel'+r9,fRes.id),resLbl.innerHTML='Log:';
  resIp=f('textarea','resTxt'+r9,resLbl.id),resIp.name='R',resIp.value='/*<'+slf.Date()+'>*/\n';
  br01=f('br','br01_'+r9,fRes.id);
  rstB=f('input','reset'+r9,fRes.id),rstB.type='button',rstB.value='Clear';
  rstB.addEventListener('click',function(){resIp.value='/*<'+slf.Date()+'>*/\n',slf.document.getElementById(divGrph.id).innerHTML='';},true);
  //email address for output
  adLbl=f('label','adrsLbl'+r9, fRes.id),adLbl.innerHTML='<br>Email address:';
  adIp=f('input','adrs'+r9,adLbl.id),adIp.type='email',adIp.value='123.ex@qwerty.com';
  sbB=f('input','submit'+r9,fRes.id),sbB.type='submit',sbB.value='Output as email';
  //<address change event>
  adIp.addEventListener('change',function(){slf.document.getElementById(fRes.id).action='mailto:'+this.value+'?subject='+slf.document.getElementsByTagName('title')[0].innerHTML;},true);
  //</address change event>
  //</Output control>
  //<image for graph>
  _c0=f('canvas','_canvas0'+r9,_div.id),_c0.width=1,_c0.height=1;
  _ctx=_c0.getContext('2d');
  _img=_ctx.createImageData(1,1),_img.data.set(_rgba),_ctx.putImageData(_img,0,0);
  _ul=_c0.toDataURL('img/png');
  r=_c0.parentNode.removeChild(_c0),r=null;
  //</image for graph>
  //================== <returned function; draws a graph at 1 px> =================
  //available format: function([value(, ..., value)]); value is an array of sc@tag@v
  //sc, tag, and v are scale, tag (e.g., timestamp), and given numerical value, respectively. the given value is shown as "v*sc" in graph
  return function(V){var _v,i=0,n=V.length,log=slf.document.getElementById(resIp.id),grph=slf.document.getElementById(divGrph.id);log.value+=V.join(',')+'\n';while(i<n){_v=V[i].split(/@/),grph.innerHTML+='<img src='+_ul+' width=1 height='+_v[2]*_v[0]+'>',i+=1;}};
  //===============================================================================
}