/*********************************************
Minified JS
*********************************************/



/*********************************************
Moment JS Converts Date Format Plugin 1.7.2
*********************************************/
(function(a){function E(a,b,c,d){var e=c.lang();return e[a].call?e[a](c,d):e[a][b]}function F(a,b){return function(c){return K(a.call(this,c),b)}}function G(a){return function(b){var c=a.call(this,b);return c+this.lang().ordinal(c)}}function H(a,b,c){this._d=a,this._isUTC=!!b,this._a=a._a||null,this._lang=c||!1}function I(a){var b=this._data={},c=a.years||a.y||0,d=a.months||a.M||0,e=a.weeks||a.w||0,f=a.days||a.d||0,g=a.hours||a.h||0,h=a.minutes||a.m||0,i=a.seconds||a.s||0,j=a.milliseconds||a.ms||0;this._milliseconds=j+i*1e3+h*6e4+g*36e5,this._days=f+e*7,this._months=d+c*12,b.milliseconds=j%1e3,i+=J(j/1e3),b.seconds=i%60,h+=J(i/60),b.minutes=h%60,g+=J(h/60),b.hours=g%24,f+=J(g/24),f+=e*7,b.days=f%30,d+=J(f/30),b.months=d%12,c+=J(d/12),b.years=c,this._lang=!1}function J(a){return a<0?Math.ceil(a):Math.floor(a)}function K(a,b){var c=a+"";while(c.length<b)c="0"+c;return c}function L(a,b,c){var d=b._milliseconds,e=b._days,f=b._months,g;d&&a._d.setTime(+a+d*c),e&&a.date(a.date()+e*c),f&&(g=a.date(),a.date(1).month(a.month()+f*c).date(Math.min(g,a.daysInMonth())))}function M(a){return Object.prototype.toString.call(a)==="[object Array]"}function N(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function O(a,b,c,d){var e,f,g=[];for(e=0;e<7;e++)g[e]=a[e]=a[e]==null?e===2?1:0:a[e];return a[7]=g[7]=b,a[8]!=null&&(g[8]=a[8]),a[3]+=c||0,a[4]+=d||0,f=new Date(0),b?(f.setUTCFullYear(a[0],a[1],a[2]),f.setUTCHours(a[3],a[4],a[5],a[6])):(f.setFullYear(a[0],a[1],a[2]),f.setHours(a[3],a[4],a[5],a[6])),f._a=g,f}function P(a,c){var d,e,g=[];!c&&h&&(c=require("./lang/"+a));for(d=0;d<i.length;d++)c[i[d]]=c[i[d]]||f.en[i[d]];for(d=0;d<12;d++)e=b([2e3,d]),g[d]=new RegExp("^"+(c.months[d]||c.months(e,""))+"|^"+(c.monthsShort[d]||c.monthsShort(e,"")).replace(".",""),"i");return c.monthsParse=c.monthsParse||g,f[a]=c,c}function Q(a){var c=typeof a=="string"&&a||a&&a._lang||null;return c?f[c]||P(c):b}function R(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function S(a){var b=a.match(k),c,d;for(c=0,d=b.length;c<d;c++)D[b[c]]?b[c]=D[b[c]]:b[c]=R(b[c]);return function(e){var f="";for(c=0;c<d;c++)f+=typeof b[c].call=="function"?b[c].call(e,a):b[c];return f}}function T(a,b){function d(b){return a.lang().longDateFormat[b]||b}var c=5;while(c--&&l.test(b))b=b.replace(l,d);return A[b]||(A[b]=S(b)),A[b](a)}function U(a){switch(a){case"DDDD":return p;case"YYYY":return q;case"S":case"SS":case"SSS":case"DDD":return o;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return r;case"Z":case"ZZ":return s;case"T":return t;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return n;default:return new RegExp(a.replace("\\",""))}}function V(a,b,c,d){var e,f;switch(a){case"M":case"MM":c[1]=b==null?0:~~b-1;break;case"MMM":case"MMMM":for(e=0;e<12;e++)if(Q().monthsParse[e].test(b)){c[1]=e,f=!0;break}f||(c[8]=!1);break;case"D":case"DD":case"DDD":case"DDDD":b!=null&&(c[2]=~~b);break;case"YY":c[0]=~~b+(~~b>70?1900:2e3);break;case"YYYY":c[0]=~~Math.abs(b);break;case"a":case"A":d.isPm=(b+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":c[3]=~~b;break;case"m":case"mm":c[4]=~~b;break;case"s":case"ss":c[5]=~~b;break;case"S":case"SS":case"SSS":c[6]=~~(("0."+b)*1e3);break;case"Z":case"ZZ":d.isUTC=!0,e=(b+"").match(x),e&&e[1]&&(d.tzh=~~e[1]),e&&e[2]&&(d.tzm=~~e[2]),e&&e[0]==="+"&&(d.tzh=-d.tzh,d.tzm=-d.tzm)}b==null&&(c[8]=!1)}function W(a,b){var c=[0,0,1,0,0,0,0],d={tzh:0,tzm:0},e=b.match(k),f,g;for(f=0;f<e.length;f++)g=(U(e[f]).exec(a)||[])[0],g&&(a=a.slice(a.indexOf(g)+g.length)),D[e[f]]&&V(e[f],g,c,d);return d.isPm&&c[3]<12&&(c[3]+=12),d.isPm===!1&&c[3]===12&&(c[3]=0),O(c,d.isUTC,d.tzh,d.tzm)}function X(a,b){var c,d=a.match(m)||[],e,f=99,g,h,i;for(g=0;g<b.length;g++)h=W(a,b[g]),e=T(new H(h),b[g]).match(m)||[],i=N(d,e),i<f&&(f=i,c=h);return c}function Y(a){var b="YYYY-MM-DDT",c;if(u.exec(a)){for(c=0;c<4;c++)if(w[c][1].exec(a)){b+=w[c][0];break}return s.exec(a)?W(a,b+" Z"):W(a,b)}return new Date(a)}function Z(a,b,c,d,e){var f=e.relativeTime[a];return typeof f=="function"?f(b||1,!!c,a,d):f.replace(/%d/i,b||1)}function $(a,b,c){var e=d(Math.abs(a)/1e3),f=d(e/60),g=d(f/60),h=d(g/24),i=d(h/365),j=e<45&&["s",e]||f===1&&["m"]||f<45&&["mm",f]||g===1&&["h"]||g<22&&["hh",g]||h===1&&["d"]||h<=25&&["dd",h]||h<=45&&["M"]||h<345&&["MM",d(h/30)]||i===1&&["y"]||["yy",i];return j[2]=b,j[3]=a>0,j[4]=c,Z.apply({},j)}function _(a,c){b.fn[a]=function(a){var b=this._isUTC?"UTC":"";return a!=null?(this._d["set"+b+c](a),this):this._d["get"+b+c]()}}function ab(a){b.duration.fn[a]=function(){return this._data[a]}}function bb(a,c){b.duration.fn["as"+a]=function(){return+this/c}}var b,c="1.7.2",d=Math.round,e,f={},g="en",h=typeof module!="undefined"&&module.exports,i="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),j=/^\/?Date\((\-?\d+)/i,k=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,l=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,m=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,n=/\d\d?/,o=/\d{1,3}/,p=/\d{3}/,q=/\d{1,4}/,r=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,s=/Z|[\+\-]\d\d:?\d\d/i,t=/T/i,u=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,v="YYYY-MM-DDTHH:mm:ssZ",w=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],x=/([\+\-]|\d\d)/gi,y="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),z={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},A={},B="DDD w M D d".split(" "),C="M D H h m s w".split(" "),D={M:function(){return this.month()+1},MMM:function(a){return E("monthsShort",this.month(),this,a)},MMMM:function(a){return E("months",this.month(),this,a)},D:function(){return this.date()},DDD:function(){var a=new Date(this.year(),this.month(),this.date()),b=new Date(this.year(),0,1);return~~((a-b)/864e5+1.5)},d:function(){return this.day()},dd:function(a){return E("weekdaysMin",this.day(),this,a)},ddd:function(a){return E("weekdaysShort",this.day(),this,a)},dddd:function(a){return E("weekdays",this.day(),this,a)},w:function(){var a=new Date(this.year(),this.month(),this.date()-this.day()+5),b=new Date(a.getFullYear(),0,4);return~~((a-b)/864e5/7+1.5)},YY:function(){return K(this.year()%100,2)},YYYY:function(){return K(this.year(),4)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return K(~~(this.milliseconds()/10),2)},SSS:function(){return K(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(a/60),2)+":"+K(~~a%60,2)},ZZ:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(10*a/6),4)}};while(B.length)e=B.pop(),D[e+"o"]=G(D[e]);while(C.length)e=C.pop(),D[e+e]=F(D[e],2);D.DDDD=F(D.DDD,3),b=function(c,d){if(c===null||c==="")return null;var e,f;return b.isMoment(c)?new H(new Date(+c._d),c._isUTC,c._lang):(d?M(d)?e=X(c,d):e=W(c,d):(f=j.exec(c),e=c===a?new Date:f?new Date(+f[1]):c instanceof Date?c:M(c)?O(c):typeof c=="string"?Y(c):new Date(c)),new H(e))},b.utc=function(a,c){return M(a)?new H(O(a,!0),!0):(typeof a=="string"&&!s.exec(a)&&(a+=" +0000",c&&(c+=" Z")),b(a,c).utc())},b.unix=function(a){return b(a*1e3)},b.duration=function(a,c){var d=b.isDuration(a),e=typeof a=="number",f=d?a._data:e?{}:a,g;return e&&(c?f[c]=a:f.milliseconds=a),g=new I(f),d&&(g._lang=a._lang),g},b.humanizeDuration=function(a,c,d){return b.duration(a,c===!0?null:c).humanize(c===!0?!0:d)},b.version=c,b.defaultFormat=v,b.lang=function(a,c){var d;if(!a)return g;(c||!f[a])&&P(a,c);if(f[a]){for(d=0;d<i.length;d++)b[i[d]]=f[a][i[d]];b.monthsParse=f[a].monthsParse,g=a}},b.langData=Q,b.isMoment=function(a){return a instanceof H},b.isDuration=function(a){return a instanceof I},b.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"}}),b.fn=H.prototype={clone:function(){return b(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?this._a[8]!=null?!!this._a[8]:!N(this._a,(this._a[7]?b.utc(this._a):b(this._a)).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(a){return T(this,a?a:b.defaultFormat)},add:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,1),this},subtract:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,-1),this},diff:function(a,c,e){var f=this._isUTC?b(a).utc():b(a).local(),g=(this.zone()-f.zone())*6e4,h=this._d-f._d-g,i=this.year()-f.year(),j=this.month()-f.month(),k=this.date()-f.date(),l;return c==="months"?l=i*12+j+k/30:c==="years"?l=i+(j+k/30)/12:l=c==="seconds"?h/1e3:c==="minutes"?h/6e4:c==="hours"?h/36e5:c==="days"?h/864e5:c==="weeks"?h/6048e5:h,e?l:d(l)},from:function(a,c){return b.duration(this.diff(a)).lang(this._lang).humanize(!c)},fromNow:function(a){return this.from(b(),a)},calendar:function(){var a=this.diff(b().sod(),"days",!0),c=this.lang().calendar,d=c.sameElse,e=a<-6?d:a<-1?c.lastWeek:a<0?c.lastDay:a<1?c.sameDay:a<2?c.nextDay:a<7?c.nextWeek:d;return this.format(typeof e=="function"?e.apply(this):e)},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()<b([this.year()]).zone()||this.zone()<b([this.year(),5]).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return a==null?b:this.add({d:a-b})},startOf:function(a){switch(a.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(a){return this.startOf(a).add(a.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return b.utc([this.year(),this.month()+1,0]).date()},lang:function(b){return b===a?Q(this):(this._lang=b,this)}};for(e=0;e<y.length;e++)_(y[e].toLowerCase(),y[e]);_("year","FullYear"),b.duration.fn=I.prototype={weeks:function(){return J(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(a){var b=+this,c=this.lang().relativeTime,d=$(b,!a,this.lang()),e=b<=0?c.past:c.future;return a&&(typeof e=="function"?d=e(d):d=e.replace(/%s/i,d)),d},lang:b.fn.lang};for(e in z)z.hasOwnProperty(e)&&(bb(e,z[e]),ab(e.toLowerCase()));bb("Weeks",6048e5),h&&(module.exports=b),typeof ender=="undefined"&&(this.moment=b),typeof define=="function"&&define.amd&&define("moment",[],function(){return b})}).call(this);


/*********************************************
Moment JS Settings
*********************************************/
$(function () {
  $('.date').each(function (index, dateElem) {
    var $dateElem = $(dateElem);
    var formatted = moment($dateElem.text(), 'MM-DD-YYYY').format('MMMM D');
    $dateElem.text(formatted);
   })
 });
 
/*********************************************
Sets the type icond based on DIV text contents
*********************************************/
$(document).ready(
	function(){
   	$('.type:contains(Support)').addClass('support')
   	$('.type:contains(Design)').addClass('design')
   	$('.type:contains(Programming)').addClass('programming')
   	$('.type:contains(iOS)').addClass('ios')
   	$('.type:contains(Executive)').addClass('executive')
   	$('.type:contains(Miscellaneous)').addClass('miscellaneous')
  });
  
/*********************************************
Sort buttons list fade-in
*********************************************/
	$(".fadeTrigger").click(function() { 
    $(".list").hide().fadeIn(600);
  });

/*********************************************
jQuery jPList Plugin 3.1.0.314
*********************************************/
(function(e){var d=function(b,a){var c={};c.options=$.extend(!0,{items_box:".list",item_path:".list-item",panel_path:".panel",no_results:".jplist-no-results",redraw_callback:"",animate_to_top:"",animate_to_top_duration:1E3,ask_event:"jplist_ask",answer_event:"jplist_answer",force_ask_event:"jplist_force_ask",restore_event:"jplist_restore",status_event:"jplist_status",cookies:!1,expiration:-1,cookie_name:"jplist",control_types:{"drop-down":{class_name:"control_dropdown",options:{}},placeholder:{class_name:"control_placeholder",
options:{paging_length:7,prev_arrow:"&lt;",next_arrow:"&gt;",first_arrow:"&lt;&lt;",last_arrow:"&gt;&gt;"}},label:{class_name:"control_label",options:{}},textbox:{class_name:"control_textbox",options:{ignore:"[~!@#$%^&*()+=`'\"/\\_]+"}}}},b);c.controller=new $.fn.jplist.controller(a,c.options);return e.extend(this,c)};d.prototype.sort=function(b,a,c,f){this.controller.panel.jplist_box.trigger(this.controller.options.status_event,[new e.fn.jplist.status(b,"sort","drop-down",{path:a,type:c,order:f})])};
d.prototype.items_per_page=function(b,a){this.controller.panel.jplist_box.trigger(this.controller.options.status_event,[new e.fn.jplist.status(b,"paging","drop-down",{number:a})])};d.prototype.filter_path=function(b,a){this.controller.panel.jplist_box.trigger(this.controller.options.status_event,[new e.fn.jplist.status(b,"filter","drop-down",{path:a,filter_type:"path"})])};d.prototype.filter_text=function(b,a,c){this.controller.panel.jplist_box.trigger(this.controller.options.status_event,[new e.fn.jplist.status(b,
"filter","textbox",{value:a,path:c,filter_type:"text",ignore:""})])};d.prototype.jump_page=function(b,a){var c;c=parseInt(a,10);!isNaN(c)&&0<c&&(c={current_page:c-1},c=new e.fn.jplist.status(b,"paging","placeholder",c),this.controller.panel.jplist_box.trigger(this.controller.options.status_event,[c]))};e.fn.jplist=function(b){return this.each(function(){var a=new d(b,$(this));$(this).data("jplist",a)})}})(jQuery);(function(){jQuery.fn.jplist.helper={};jQuery.fn.jplist.helper.get_outer_html=function(e){for(var d="",b=e[0].attributes,a=e.html(),e=e[0].tagName.toString().toLowerCase(),d=d+("<"+e+" "),c=0;c<b.length;c++)null!=b[c].nodeValue&&""!=b[c].nodeValue&&(d+=b[c].nodeName+"=",d+='"'+b[c].nodeValue+'" ');return d+">"+a+("</"+e+">")};jQuery.fn.jplist.helper.get_statuses_by_action=function(e,d){for(var b=[],a,c=0;c<d.length;c++)a=d[c],a.action==e&&b.push(a);return b}})(jQuery);(function(){var e=function(d,b,a){return jQuery.extend(this,{jq_path:d,data_type:b,attr_name:a})};e.prototype.equal=function(d,b){var a=!1;b?this.jq_path===d.jq_path&&(a=!0):this.jq_path===d.jq_path&&this.data_type===d.data_type&&this.attr_name===d.attr_name&&(a=!0);return a};e.prototype.in_list=function(d){for(var b,a=!1,c=0;c<d.length;c++)if(b=d[c],b.equal(this,!0)){a=!0;break}return a};jQuery.fn.jplist.path=function(d,b,a){this.in_list=this.equal=this.attr_name=this.data_type=this.jq_path=null;
return new e(d,b,a)}})(jQuery);(function(e){var d=function(b,a){var c={jq_element:b,path:a,text:null,html:null};c.text=b.text();c.html=b.html();return e.extend(this,c)};jQuery.fn.jplist.pathitem=function(b,a){this.html=this.text=this.jq_element=this.path=null;return new d(b,a)}})(jQuery);(function(e){var d,b=function(a,b,f){f={html:null,pathitems:[],jq_element:a,index:f};d=jQuery.fn.jplist.helper;f.html=d.get_outer_html(a);for(var g,h,a=0;a<b.length;a++)g=b[a],h=f.jq_element.find(g.jq_path),0<h.length&&(g=new jQuery.fn.jplist.pathitem(h,g),f.pathitems.push(g));return e.extend(this,f)};b.prototype.find_pathitem=function(a){for(var b=null,f,d=0;d<this.pathitems.length;d++)if(f=this.pathitems[d],f.path.equal(a,!0)){b=f;break}return b};jQuery.fn.jplist.dataitem=function(a,c,f){this.find_pathitem=
this.jq_element=this.pathitems=this.html=null;return new b(a,c,f)}})(jQuery);(function(e){var d=function(a,b){for(var c,f=0;f<a.dataitems.length;f++)c=a.dataitems[f],c.jq_element.is(b)&&a.dataitems.splice(f,1)},b=function(a,b){b.each(function(){d(a,e(this))})},a=function(a,b,c){b=new jQuery.fn.jplist.dataitem(b,a.paths,c);a.dataitems.push(b)},c=function(b,c){c.each(function(c){a(b,e(this),c)})},f=function(b,c,k){if(0<c.length)for(var c=c.find(k),f=0;f<c.length;f++)k=c.eq(f),a(b,k,f);b.dataview=e.merge([],b.dataitems)},g=function(b,a,c){c={dataitems:[],dataview:[],paths:c,
items_box:b,item_path_inside_box:a};f(c,b,a);return e.extend(this,c)};g.prototype.reset_dataview=function(){this.dataview=e.merge([],this.dataitems)};g.prototype.modify_dataview=function(b){e.isFunction(b)&&b(this.dataview)};g.prototype.add_dataitem=function(b,c){a(this,b,c)};g.prototype.add_dataitems=function(b){c(this,b)};g.prototype.del_dataitem=function(b){d(this,b)};g.prototype.del_dataitems=function(a){b(this,a)};g.prototype.indexof=function(b){for(var a,c=-1,f=0;f<this.dataitems.length;f++)if(a=
this.dataitems[f],a.jq_element.is(b)){c=f;break}return c};g.prototype.update_paths=function(b){this.paths=b;f(this,this.items_box,this.item_path_inside_box)};g.prototype.dataview_to_string=function(){var b,a="",c;for(c=0;c<this.dataview.length;c++)b=this.dataview[c],a+=b.html;return a};jQuery.fn.jplist.collection=function(b,a,c){this.dataview_to_string=this.items_box=this.modify_dataview=this.reset_dataview=null;return new g(b,a,c)}})(jQuery);(function(e){var d=function(b,a,c,f){return e.extend(this,{action:a,name:b,type:c,data:f})};d.prototype.indexof=function(b,a){for(var c=-1,f,d=0;d<b.length;d++)if(f=b[d],f[a]==this[a]){c=d;break}return c};jQuery.fn.jplist.status=function(b,a,c,f){return new d(b,a,c,f)}})(jQuery);(function(e){jQuery.fn.jplist.filters={};jQuery.fn.jplist.filters.remove_characters=function(d,b){return void 0==d||null==d?"":d.replace(RegExp(b,"ig"),"").toLowerCase()};jQuery.fn.jplist.filters.path_filter=function(d,b){for(var a,c,f=[],g=0;g<b.length;g++)a=b[g],"default"==d.jq_path?f.push(a):(c=a.find_pathitem(d),null!=c&&f.push(a));return f};jQuery.fn.jplist.filters.inverted_path_filter=function(d,b){for(var a,c,f=[],g,h,i=!1,k=0;k<b.length;k++)a=b[k],i=!1,void 0!=d&&0<d.length&&(d.each(function(){h=
e(this).attr("data-path");"default"==h?i=!0:(g=new jQuery.fn.jplist.path(h,null,null),c=a.find_pathitem(g),null!=c&&(i=!0))}),i&&f.push(a));return f};jQuery.fn.jplist.filters.text_filter=function(d,b,a,c){for(var f,g,e=[],i,k=0;k<a.length;k++)f=a[k],g=f.find_pathitem(b),"default"==b.jq_path?e.push(f):null!=g&&(g=jQuery.fn.jplist.filters.remove_characters(g.text,c),i=jQuery.fn.jplist.filters.remove_characters(d,c),-1!=g.indexOf(i)&&e.push(f));return e};jQuery.fn.jplist.filters.date_filter=function(d,
b,a,c,f,e){for(var h,i,k=[],n=0;n<f.length;n++)h=f[n],i=h.find_pathitem(c),null!=i&&(null==d||void 0==d||""==d||null==b||void 0==b||""==b||null==a||void 0==a||""==a?k.push(h):(i=jQuery.fn.jplist.sort.format_datetime(i.text,e),null!=i&&void 0!=i&&"function"===typeof i.getFullYear&&i.getFullYear()==d&&i.getMonth()-1==b&&i.getDate()==a&&k.push(h)));return k};jQuery.fn.jplist.filters.pager_filter=function(d,b){var a=[];return a=b.slice(d.start,d.end)};jQuery.fn.jplist.filters.range_filter=function(d,
b,a,c,f,e){for(var a=[],h,i=0;i<b.length;i++)c=b[i],h=c.find_pathitem(d),null!=h&&(h=parseInt(h.text,10),!isNaN(h)&&h>=f&&h<=e&&a.push(c));return a};jQuery.fn.jplist.filters.date_range_filter=function(d,b,a,c,f,e,h,i,k){for(var n=[],o,l,m,j,p=0;p<b.length;p++)o=b[p],l=o.find_pathitem(d),null!=l&&(m=null==c||void 0==c||""==c||null==f||void 0==f||""==f||null==e||void 0==e||""==e,j=null==h||void 0==h||""==h||null==i||void 0==i||""==i||null==k||void 0==k||""==k,m||j?n.push(o):(j=jQuery.fn.jplist.sort.format_datetime(l.text,
a),null!=j&&void 0!=j&&"function"===typeof j.getFullYear&&(l=new Date(c,f,e),m=new Date(h,i,k),j.setHours(0),j.setMinutes(0),j.setSeconds(0),j>=l&&j<=m&&n.push(o))));return n}})(jQuery);(function(e){jQuery.fn.jplist.sort={};var d=function(b,a){var c,f=null;c=b.replace(/{year}|{month}|{day}|{hour}|{min}|{sec}/g,".*");c=RegExp(c,"g").exec(a);null!=c&&1<c.length&&(f=c[1]);return f},b=function(b,a){var c=null;if("{month}"==b){a=a.toLowerCase();if("january"==a||"jan"==a||"jan."==a)c=0;if("february"==a||"feb"==a||"feb."==a)c=1;if("march"==a||"mar"==a||"mar."==a)c=2;if("april"==a||"apr"==a||"apr."==a)c=3;"may"==a&&(c=4);if("july"==a||"jun"==a||"jun."==a)c=5;if("april"==a||"jul"==a||"jul."==
a)c=6;if("august"==a||"aug"==a||"aug."==a)c=7;if("september"==a||"sep"==a||"sep."==a)c=8;if("october"==a||"oct"==a||"oct."==a)c=9;if("november"==a||"nov"==a||"nov."==a)c=10;if("december"==a||"dec"==a||"dec."==a)c=11;null===c&&(c=parseInt(a,10),isNaN(c)||c--)}else c=parseInt(a,10);return c},a=function(a,c){var f,e,g,h,j,p,c=c.replace(/\./g,"\\."),c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)"),c=c.replace(/\[/g,"\\["),c=c.replace(/\]/g,"\\]");f=c.replace("{year}","(.*)");e=d(f,a);null!=e&&(e=b("{year}",
e));f=c.replace("{day}","(.*)");h=d(f,a);null!=h&&(h=b("{day}",h));f=c.replace("{month}","(.*)");g=d(f,a);null!=g&&(g=b("{month}",g));f=c.replace("{hour}","(.*)");j=d(f,a);null!=j&&(j=b("{hour}",j));f=c.replace("{min}","(.*)");p=d(f,a);null!=p&&(p=b("{min}",p));f=c.replace("{sec}","(.*)");f=d(f,a);null!=f&&(f=b("{sec}",f));if(null==e||isNaN(e)||void 0==e)e=1900;if(null==g||isNaN(g)||void 0==g)g=0;if(null==h||isNaN(h)||void 0==h)h=1;if(null==j||isNaN(j)||void 0==j)j=0;if(null==p||isNaN(p)||void 0==
p)p=0;if(null==f||isNaN(f)||void 0==f)f=0;return new Date(e,g,h,j,p,f)},c=function(a,c,b,f){a=a.find_pathitem(f);c=c.find_pathitem(f);f=parseFloat(a.text.replace(/[^0-9\.]+/g,""));c=parseFloat(c.text.replace(/[^0-9\.]+/g,""));return f==c?0:"asc"==b?NaN==f?1:NaN==c?-1:f-c:NaN==f?1:NaN==c?-1:c-f},f=function(a,c,b,f){a=a.find_pathitem(f);c=c.find_pathitem(f);f=a.text.toString().replace(/[^a-zA-Z0-9]+/g,"").toLowerCase();c=c.text.toString().replace(/[^a-zA-Z0-9]+/g,"").toLowerCase();return f==c?0:"asc"==
b?f>c?1:-1:f<c?1:-1},g=function(c,b,f,d,g){c=c.find_pathitem(d);b=b.find_pathitem(d);""==e.trim(g)?(d=new Date(Date.parse(c.text)),g=new Date(Date.parse(b.text))):(d=a(c.text,g),g=a(b.text,g));return d==g?0:"asc"==f?d>g?1:-1:d<g?1:-1},h=function(a,b,d,e){var l=0,m,j,p;if(0<d.length){m=d[e];if("default"!=m.data.path){j=new jQuery.fn.jplist.path(m.data.path,m.data.type,null);p=m.data.order;if(void 0==m.data.date_time_format||null==m.data.date_time_format)m.data.date_time_format="";switch(m.data.type){case "text":l=
f(a,b,p,j);break;case "number":l=c(a,b,p,j);break;case "datetime":l=g(a,b,p,j,m.data.date_time_format);break;case "date":l=g(a,b,p,j,m.data.date_time_format)}}else l=a.index,m=b.index,l=l===m?0:NaN==l?1:NaN==m?-1:l-m;0==l&&e+1<d.length&&(l=h(a,b,d,e+1))}return l};jQuery.fn.jplist.sort.double_sort=function(a,c){c.sort(function(c,b){return h(c,b,a,0)})};jQuery.fn.jplist.sort.numbers=function(a,b,f){f.sort(function(f,d){c(f,d,a,b)});return f};jQuery.fn.jplist.sort.text=function(a,c,b){b.sort(function(b,
d){f(b,d,a,c)});return b};jQuery.fn.jplist.sort.datetime=function(a,c,b){b.sort(function(b,f){g(b,f,a,c,"")});return b};jQuery.fn.jplist.sort.format_datetime=function(c,b){return a(c,b)}})(jQuery);(function(){jQuery.fn.jplist.paging={};jQuery.fn.jplist.paging.get=function(e,d,b){var a,c,f,e=parseInt(e,10);isNaN(e)&&(e=0);d=parseInt(d,10);isNaN(d)&&(d=e);f=jQuery.fn.jplist.paging.get_pages_num(e,d);b=parseInt(b,10);isNaN(b)&&(b=0);b>f-1&&(b=0);a=b*d;c=a+d;c>e&&(c=e);a>c&&(a=b=0,c=d,c>e&&(c=e));return{items_on_page:d,current_page:b,items_number:e,start:a,end:c,pages_number:f,prev_page:jQuery.fn.jplist.paging.get_prev_page(b),next_page:jQuery.fn.jplist.paging.get_next_page(e,d,b)}};jQuery.fn.jplist.paging.get_pages_num=
function(e,d){d=parseInt(d,10);e=parseInt(e,10);return Math.ceil(e/d)};jQuery.fn.jplist.paging.get_next_page=function(e,d,b){d=parseInt(d,10);b=parseInt(b,10);e=parseInt(e,10);e=jQuery.fn.jplist.paging.get_pages_num(e,d);return b>=e-1?e-1:b+1};jQuery.fn.jplist.paging.get_prev_page=function(e){e=parseInt(e,10);return 0>=e?0:e-1}})(jQuery);(function(e){jQuery.fn.jplist.cookies={};jQuery.fn.jplist.cookies.set_cookie=function(d,b,a){var b=escape(b),c=new Date,a=parseInt(a,10);-1==a||NaN==a?document.cookie=d+"="+b+";path=/;":(c.setDate(c.getDate()+a),document.cookie=d+"="+b+";path=/; expires="+c.toUTCString())};jQuery.fn.jplist.cookies.get_cookie=function(d){var b,a,c,f=null;c=document.cookie.split(";");for(var e=0;e<c.length;e++)if(b=c[e].substr(0,c[e].indexOf("=")),a=c[e].substr(c[e].indexOf("=")+1),b=b.replace(/^\s+|\s+$/g,""),b==d){f=
unescape(a);break}return f};jQuery.fn.jplist.cookies.save_cookies=function(d,b,a){d=JSON.stringify(d);jQuery.fn.jplist.cookies.set_cookie(b,d,a)};jQuery.fn.jplist.cookies.restore_cookies=function(d){d=jQuery.fn.jplist.cookies.get_cookie(d);d=e.parseJSON(d);if(null==d||void 0==d)d=[];return d}})(jQuery);(function(e){var d=function(a){var b;if(void 0!=a.control_type_class&&null!=a.control_type_class)b=a.control_type_class.render,void 0!=b&&e.isFunction(b)&&b(a)},b=function(a){var b;if(void 0!=a.control_type_class&&null!=a.control_type_class)b=a.control_type_class.init_events,void 0!=b&&e.isFunction(b)&&b(a)},a=function(a,b,g){a={jplist_box:a,options:b,jq_control:g,type:null,action:null,name:null,control_type:null,control_type_class:null,control_type_options:null};a.type=g.attr("data-control-type");
a.action=g.attr("data-control-action");a.name=g.attr("data-control-name");a.control_type=a.options.control_types[a.type];if(void 0!=a.control_type){if(void 0!=a.control_type.class_name)a.control_type_class=jQuery.fn.jplist[a.control_type.class_name];if(void 0!=a.control_type.options)a.control_type_options=a.control_type.options}d(a);return e.extend(this,a)};a.prototype.render=function(){d(this)};a.prototype.get_paths=function(){var a=[],b;if(void 0!=this.control_type_class&&null!=this.control_type_class)b=
this.control_type_class.get_paths,void 0!=b&&e.isFunction(b)&&b(this,a);return a};a.prototype.get_status=function(a){var b=null,d;if(void 0!=this.control_type_class&&null!=this.control_type_class)d=this.control_type_class.get_status,void 0!=d&&e.isFunction(d)&&(b=d(a,this));return b};a.prototype.set_status=function(a){var b;if(a.action==this.action&&a.name==this.name&&void 0!=this.control_type_class&&null!=this.control_type_class)b=this.control_type_class.set_status,void 0!=b&&e.isFunction(b)&&b(a,
this)};a.prototype.init_events=function(){b(this)};jQuery.fn.jplist.panel_control=function(c,f,d){c=new a(c,f,d);b(c);return c}})(jQuery);(function(e){jQuery.fn.jplist.control_textbox={};jQuery.fn.jplist.control_textbox.get_paths=function(d,b){var a;a=d.jq_control.attr("data-path");void 0!=a&&""!=e.trim(a)&&null!=a&&(a=new jQuery.fn.jplist.path(a,null,null),a.in_list(b)||b.push(a))};jQuery.fn.jplist.control_textbox.get_status=function(d,b){var a;a={path:b.jq_control.attr("data-path"),filter_type:"text",ignore:""};a.value=d?"":b.jq_control.val();if(void 0!=b.control_type_options&&void 0!=b.control_type_options.ignore&&""!=b.control_type_options.ignore)a.ignore=
b.control_type_options.ignore;return new jQuery.fn.jplist.status(b.name,b.action,b.type,a)};jQuery.fn.jplist.control_textbox.init_events=function(d){d.jq_control.bind("keyup",function(){d.jplist_box.trigger(d.options.force_ask_event,[!1])})};jQuery.fn.jplist.control_textbox.set_status=function(d,b){void 0!=d.data&&void 0!=d.data.value&&b.jq_control.val(d.data.value)}})(jQuery);(function(e){jQuery.fn.jplist.control_dropdown={};jQuery.fn.jplist.control_dropdown.render=function(d){var b;b=d.jq_control.find("li:eq(0)");b.addClass("active");b=b.find("span");0>=d.jq_control.find(".panel").length&&d.jq_control.prepend('<div class="panel">'+b.text()+"</div>")};jQuery.fn.jplist.control_dropdown.get_paths=function(d,b){var a,c,f;d.jq_control.find("span").each(function(){a=e(this).attr("data-path");c=e(this).attr("data-type");void 0!=a&&""!=e.trim(a)&&null!=a&&(f=new jQuery.fn.jplist.path(a,
c,null),f.in_list(b)||b.push(f))})};jQuery.fn.jplist.control_dropdown.get_status=function(d,b){var a=null,c;d?(c=b.jq_control.find('li:has(span[data-default="true"])').eq(0),0>=c.length&&(c=b.jq_control.find("li:eq(0)"))):c=b.jq_control.find(".active");c=c.find("span");switch(b.action){case "paging":a={number:c.attr("data-number")};a=new jQuery.fn.jplist.status(b.name,b.action,b.type,a);break;case "sort":a={path:c.attr("data-path"),type:c.attr("data-type"),order:c.attr("data-order")};c=b.jq_control.attr("data-datetime-format");
if(void 0!=c&&null!=c)a.date_time_format=c;a=new jQuery.fn.jplist.status(b.name,b.action,b.type,a);break;case "filter":a={path:c.attr("data-path"),type:c.attr("data-type"),filter_type:"path"},a=new jQuery.fn.jplist.status(b.name,b.action,b.type,a)}return a};jQuery.fn.jplist.control_dropdown.set_status=function(d,b){var a;switch(b.action){case "filter":b.jq_control.find("li").removeClass("active");a=b.jq_control.find('li:has([data-path="'+d.data.path+'"])');a.addClass("active");b.jq_control.find(".panel").text(a.eq(0).text());
break;case "sort":b.jq_control.find("li").removeClass("active");a="default"==d.data.path?b.jq_control.find('li:has([data-path="'+d.data.path+'"])'):b.jq_control.find('li:has([data-path="'+d.data.path+'"][data-type="'+d.data.type+'"][data-order="'+d.data.order+'"])');a.addClass("active");b.jq_control.find(".panel").text(a.eq(0).text());break;case "paging":b.jq_control.find("li").removeClass("active"),a=b.jq_control.find('li:has([data-number="'+d.data.number+'"])'),0==a.length&&(a=b.jq_control.find('li:has([data-number="all"])')),
a.addClass("active"),b.jq_control.find(".panel").text(a.eq(0).text())}};jQuery.fn.jplist.control_dropdown.init_events=function(d){var b=e(document).find('[data-control-type="drop-down"]');e(document).click(function(){b.find("ul").hide()});e(document).unbind("jplist_dropdown_close").bind("jplist_dropdown_close",function(a,c){b.each(function(){e(this).is(c)||e(this).find("ul").hide()})});d.jq_control.find(".panel").unbind().click(function(a){var b;a.stopPropagation();a=e(this).parents("[data-control-type]");
b=a.find("ul");e(document).trigger("jplist_dropdown_close",[a]);b.is(":visible")?b.hide():b.show()});d.jq_control.find("li").unbind().click(function(){var a,b,f,g;a=jQuery.fn.jplist.control_dropdown.get_status(!1,d);g=e(this).find("span");b=g.attr("data-path");f=g.attr("data-number");if(void 0!=b)a.data.path=b,a.data.type=g.attr("data-type"),a.data.order=g.attr("data-order");else if(void 0!=f)a.data.number=f;d.jplist_box.trigger(d.options.status_event,[a])})}})(jQuery);(function(e){jQuery.fn.jplist.control_placeholder={};jQuery.fn.jplist.control_placeholder.render=function(b){var a,c,f,d;d=b.control_type_options;b.jq_control.html('<div class="pagingprev"></div><div class="pagingmid"></div><div class="pagingnext"></div>');a=b.jq_control.find(".pagingprev");c=b.jq_control.find(".pagingmid");f=b.jq_control.find(".pagingnext");b.jq_control.data("pagingprev",a);b.jq_control.data("pagingmid",c);b.jq_control.data("pagingnext",f);a.html('<span class="first" data-number="0">'+
d.first_arrow+'</span><span class="prev">'+d.prev_arrow+"</span>");f.html('<span class="next">'+d.next_arrow+'</span><span class="last">'+d.last_arrow+"</span>");b.jq_control.data("first",a.find(".first"));b.jq_control.data("prev",a.find(".prev"));b.jq_control.data("next",f.find(".next"));b.jq_control.data("last",f.find(".last"))};jQuery.fn.jplist.control_placeholder.get_status=function(b,a){var c;c=null;var f;f=a.jq_control.find("span[data-active]").eq(0);0>=f.length&&(f=a.jq_control.find("span").eq(0));
f=e.trim(f.attr("data-number"));b&&(f=0);if(""!==f){c=parseInt(f,10);c={current_page:c};f=a.jq_control.attr("data-items-per-page");if(void 0!=f&&""!=f)c.number=f;c=new jQuery.fn.jplist.status(a.name,a.action,a.type,c)}return c};jQuery.fn.jplist.control_placeholder.set_status=function(b,a){var c;if("paging"==a.name){if(void 0!=b.data&&void 0!=b.data.paging){c=b.data.paging;var f,e,h="",i;i=a.control_type_options;if(0<=c.current_page&&c.current_page<c.pages_number){a.jq_control.removeClass("hidden");
e=Math.floor(c.current_page/i.paging_length);f=i.paging_length*e;e=i.paging_length*(e+1);if(e>c.pages_number)e=c.pages_number;h+='<div class="pagesbox">';for(i=f;i<e;i++)h+="<span ",i==c.current_page&&(h+=' class="current" data-active="true" '),f=i+1,h+=' data-number="'+i+'" ',h+=">"+f+"</span> ";a.jq_control.data("pagingmid").html(h+"</div>");a.jq_control.data("prev").attr("data-number",c.prev_page).removeClass("current");a.jq_control.data("next").attr("data-number",c.next_page).removeClass("current");
a.jq_control.data("last").attr("data-number",c.pages_number-1).removeClass("current")}else a.jq_control.addClass("hidden");0==c.current_page?a.jq_control.data("pagingprev").addClass("hidden"):a.jq_control.data("pagingprev").removeClass("hidden");c.current_page==c.pages_number-1?a.jq_control.data("pagingnext").addClass("hidden"):a.jq_control.data("pagingnext").removeClass("hidden")}d(a)}};var d=function(b){var a,c=null;b.jq_control.find("span").unbind().bind("click",function(){a=e(this).attr("data-number");
c=jQuery.fn.jplist.control_placeholder.get_status(!1,b);c.data.current_page=parseInt(a,10);b.jplist_box.trigger(b.options.status_event,[c])})};jQuery.fn.jplist.control_placeholder.init_events=function(b){d(b)}})(jQuery);(function(){jQuery.fn.jplist.control_label={};jQuery.fn.jplist.control_label.set_status=function(e,d){var b,a;if("paging"==e.action&&void 0!=e.data&&void 0!=e.data.paging)b=e.data.paging,0>=b.pages_number?d.jq_control.html(""):(a=d.jq_control.attr("data-type"),a=a.replace("{current}",b.current_page+1),a=a.replace("{pages}",b.pages_number),a=a.replace("{start}",b.start+1),a=a.replace("{end}",b.end),a=a.replace("{all}",b.items_number),d.jq_control.html(a))}})(jQuery);(function(e){var d=function(a,b){for(var c=[],d,k,n,o=0;o<a.controls.length;o++)d=a.controls[o],d=d.get_status(b),null!=d&&(k=d.indexof(c,"name"),-1!=k?(n=c[k],n.action==d.action&&n.type!=d.type&&e.extend(!0,c[k],d)):c.push(d));return c},b=function(a,b){for(var c,d,e=0;e<b.length;e++){c=b[e];d=a;for(var n=c.name,o=c.action,l=[],m=void 0,j=0;j<d.controls.length;j++)m=d.controls[j],m.name==n&&m.action==o&&l.push(m);d=l;for(n=0;n<d.length;n++)d[n].set_status(c)}},a=function(a){for(var c,h=0;h<a.controls.length;h++)c=
a.controls[h],c.init_events();a.jplist_box.bind(a.options.answer_event,function(c,d){b(a,d)});a.jplist_box.bind(a.options.force_ask_event,function(b,c){a.jplist_box.trigger(a.options.ask_event,[d(a,c)])});a.jplist_box.bind(a.options.restore_event,function(c,d){b(a,d);a.jplist_box.trigger(a.options.ask_event,[d])});a.jplist_box.bind(a.options.status_event,function(b,c){var h;h=d(a,!1);for(var g=0;g<h.length;g++)h[g].name==c.name&&h[g].action==c.action&&e.extend(!0,h[g],c);a.jplist_box.trigger(a.options.ask_event,
[h])})},c=function(a,b){var c={jplist_box:a,options:b,paths:[],jq_panel:a.find(b.panel_path),jq_controls:null,controls:[]};c.jq_controls=c.jq_panel.find("[data-control-type]");for(var d,k=0;k<c.jq_controls.length;k++)d=c.jq_controls.eq(k),d=jQuery.fn.jplist.panel_control(c.jplist_box,c.options,d),c.controls.push(d);for(var n,k=0;k<c.controls.length;k++){d=c.controls[k];d=d.get_paths();for(var o=0;o<d.length;o++)n=d[o],n.in_list(c.paths)||c.paths.push(n)}return e.extend(this,c)};jQuery.fn.jplist.panel=
function(b,d){var e;e=new c(b,d);a(e);return e}})(jQuery);(function(e){var d=function(a,b,c){for(var d,e,a=jQuery.fn.jplist.helper.get_statuses_by_action("filter",c),c=0;c<a.length;c++)e=a[c],b.modify_dataview(function(a){d=new jQuery.fn.jplist.path(e.data.path,null,null);switch(e.data.filter_type){case "text":b.dataview=jQuery.fn.jplist.filters.text_filter(e.data.value,d,a,e.data.ignore);break;case "path":b.dataview=jQuery.fn.jplist.filters.path_filter(d,a);break;case "inverted_path":b.dataview=jQuery.fn.jplist.filters.inverted_path_filter(e.data.checked_checkboxes,
a);break;case "range":b.dataview=jQuery.fn.jplist.filters.range_filter(d,a,e.data.min,e.data.max,e.data.prev,e.data.next);break;case "date":b.dataview=jQuery.fn.jplist.filters.date_filter(e.data.year,e.data.month,e.data.day,d,a,e.data.format);break;case "date_range":b.dataview=jQuery.fn.jplist.filters.date_range_filter(d,a,e.data.format,e.data.prev_year,e.data.prev_month,e.data.prev_day,e.data.next_year,e.data.next_month,e.data.next_day)}})},b=function(a){a.jplist_box.bind(a.options.ask_event,function(b,
c){var i;a.options.cookies&&jQuery.fn.jplist.cookies.save_cookies(c,a.options.cookie_name,a.options.expiration);for(var k=0;k<a.collections.length;k++){i=a.collections[k];var n=a,o=i;i=c;o.reset_dataview();var l=o,m=void 0,m=jQuery.fn.jplist.helper.get_statuses_by_action("sort",i);jQuery.fn.jplist.sort.double_sort(m,l.dataview);d(n,o,i);for(var l=o,m=void 0,j=null,p=j=void 0,m=jQuery.fn.jplist.helper.get_statuses_by_action("paging",i),q=0;q<m.length;q++)j=m[q],p=void 0==j.data.current_page?0:j.data.current_page,
j=jQuery.fn.jplist.paging.get(l.dataview.length,j.data.number,p),m[q].data.paging=j,l.dataview=jQuery.fn.jplist.filters.pager_filter(j,l.dataview);l=n;o.items_box.html(o.dataview_to_string());l.jplist_box.trigger(l.options.answer_event,[i]);0>=o.dataview.length?(l.no_results_el.show(),o.items_box.hide()):(l.no_results_el.hide(),o.items_box.show());e.isFunction(l.options.redraw_callback)&&l.options.redraw_callback();i=void 0;""!=n.options.animate_to_top&&(i="auto"!=n.options.animate_to_top?e(n.options.animate_to_top).offset().top:
n.jplist_box.offset().top,e("html, body").animate({scrollTop:i},n.options.animate_to_top_duration))}})},a=function(a){var b;a.jplist_box.find(a.options.items_box).each(function(){b=new jQuery.fn.jplist.collection(e(this),a.options.item_path,a.panel.paths);a.collections.push(b)})},c=function(b,c){var d={jplist_box:b,options:c,panel:null,collections:[],no_results_el:null};d.panel=new jQuery.fn.jplist.panel(d.jplist_box,d.options);d.no_results_el=b.find(d.options.no_results);a(d);return e.extend(this,
d)};jQuery.fn.jplist.controller=function(a,d){var e=new c(a,d),i;b(e);e.options.cookies?(i=jQuery.fn.jplist.cookies.restore_cookies(e.options.cookie_name),0<i.length?e.jplist_box.trigger(e.options.restore_event,[i]):e.jplist_box.trigger(e.options.force_ask_event,[!0])):e.jplist_box.trigger(e.options.force_ask_event,[!0]);return e}})(jQuery);

/*********************************************
Jplist Reset Button
*********************************************/
(function(){jQuery.fn.jplist.control_reset={};jQuery.fn.jplist.control_reset.init_events=function(a){a.jq_control.unbind().click(function(){a.jplist_box.trigger(a.options.force_ask_event,[!0])})}})(jQuery);

/*********************************************
Jplist Settings
*********************************************/

			var init_api = function(){
				
				var api = $('#job-list').data('jplist');
				
				//filter by type with 'support'
				$('#filter-text-support').click(function(){
				
					var control_name = 'type-filter'
						,text = 'support'
						,path = '.type';
					
					api.filter_text(control_name, text, path);
				});
				
				//filter by type with 'design'
				$('#filter-text-design').click(function(){
				
					var control_name = 'type-filter'
						,text = 'design'
						,path = '.type';
					
					api.filter_text(control_name, text, path);
				});
				
				//filter by type with 'programming'
				$('#filter-text-programming').click(function(){
				
					var control_name = 'type-filter'
						,text = 'programming'
						,path = '.type';
					
					api.filter_text(control_name, text, path);
				});
				
				//filter by type with 'ios'
				$('#filter-text-ios').click(function(){
				
					var control_name = 'type-filter'
						,text = 'ios'
						,path = '.type';
					
					api.filter_text(control_name, text, path);
				});
				
				//filter by type with 'executive'
				$('#filter-text-executive').click(function(){
				
					var control_name = 'type-filter'
						,text = 'executive'
						,path = '.type';
					
					api.filter_text(control_name, text, path);
				});
				
				//filter by type with 'miscellaneous'
				$('#filter-text-miscellaneous').click(function(){
				
					var control_name = 'type-filter'
						,text = 'miscellaneous'
						,path = '.type';
					
					api.filter_text(control_name, text, path);
				});		
			};
					
			$('document').ready(function(){
			
				//init jplist
				$('#job-list').jplist({
					items_box: '.list' 
					,item_path: '.list-item'
					,cookies: true
					//reset btn
					,control_types: {
						'reset': {
							class_name: 'control_reset'
							,options: {}
						}
					}
				});
				
				//init api job-list
				init_api();				
			});
			
/*********************************************
This adds 'placeholder' to the items listed in the jQuery .support object. 
*********************************************/
jQuery(function() {
   jQuery.support.placeholder = false;
   test = document.createElement('input');
   if('placeholder' in test) jQuery.support.placeholder = true;
});
// This adds placeholder support to browsers that wouldn't otherwise support it. 
$(function() {
   if(!$.support.placeholder) { 
      var active = document.activeElement;
      $(':text').focus(function () {
         if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
            $(this).val('').removeClass('hasPlaceholder');
         }
      }).blur(function () {
         if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
            $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
         }
      });
      $(':text').blur();
      $(active).focus();
      $('form:eq(0)').submit(function () {
         $(':text.hasPlaceholder').val('');
      });
   }
});


/*********************************************
Sets the active button and fades the others
*********************************************/
$(document).ready(function(){
	$('.fadeTrigger').click(function() {	
			// Cache the button that was clicked in variable
			var clicked = $(this);
			var number = $('.fadeTrigger').index(this);	
			// Remove active class from all buttons - add active to selected button
			$('.fadeTrigger').addClass('faded');
			clicked.removeClass('faded');
			
			// Don't add # to URL
			return false;
	});
	
	$('.reset-btn').click(function() {	
		$('.fadeTrigger').removeClass('faded');
	});
});

/*********************************************
Replaces the value og the H2 with current selection
*********************************************/
$(document).ready(function(){
$("#filter-text-support").click(function(){$(".list-header h2").replaceWith("<h2>Support Jobs</h2>");});
$("#filter-text-design").click(function(){$(".list-header h2").replaceWith("<h2>Design Jobs</h2>");});
$("#filter-text-programming").click(function(){$(".list-header h2").replaceWith("<h2>Developer Jobs</h2>");});
$("#filter-text-ios").click(function(){$(".list-header h2").replaceWith("<h2>iOS Jobs</h2>");});
$("#filter-text-executive").click(function(){$(".list-header h2").replaceWith("<h2>Business &amp; Executive Jobs</h2>");});
$("#filter-text-miscellaneous").click(function(){$(".list-header h2").replaceWith("<h2>Miscellaneous &amp; Other Jobs</h2>");});
$(".reset-btn").click(function(){$(".list-header h2").replaceWith("<h2>All Jobs</h2>");});
});

/*********************************************
Populates Typeahead with locations listed on the page and removes duplicates
*********************************************/
$(function () {
    var category_array = $(".location").map(function() {
                         return $(this).text();
                     }).get();

    // Remove duplicates
    // Note - this assumes the exact same string (including uppercase/lowercase) 
    category_array = $.grep(category_array, function(v, k){
                return $.inArray(v, category_array) === k;
          });

    var autocomplete = $('#location-filter').typeahead({source: category_array}); 
});

/*********************************************
Wufoo form Embed JS (Post Job Form)
*********************************************/
var m7x2s3;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'designdelux', 
'formHash':'m7x2s3', 
'autoResize':true,
'height':'463',
'async':true,
'header':'show', 
'ssl':true};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { m7x2s3 = new WufooForm();m7x2s3.initialize(options);m7x2s3.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');



/*********************************************
Wufoo form Embed JS (Contact Form)
*********************************************/
var q7x2r1;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'designdelux', 
'formHash':'q7x2r1', 
'autoResize':true,
'height':'517',
'async':true,
'header':'show', 
'ssl':true};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { q7x2r1 = new WufooForm();q7x2r1.initialize(options);q7x2r1.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');
			
			
			
			