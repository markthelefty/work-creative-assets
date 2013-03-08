/*********************************************
Minified JS
*********************************************/




/*********************************************
XX Days Old Job Alert Message
*********************************************/
$(function() {
  var jobDateText = $(".job-date").html()
    , jobDate = new Date(jobDateText)
    , today = new Date()
    , thirtyDaysInMS = 30 * 24 * 60 * 60 * 1000
    , differenceInMS = Math.abs(today - jobDate)
    , differenceInDays = Math.floor(differenceInMS / 1000 / 60 / 60 / 24);

  if (differenceInMS > thirtyDaysInMS) $(".date-message").show();
  $("span.daysOld").html(differenceInDays);
});





/*********************************************
Moment JS Converts Date Format Plugin 1.7.2
*********************************************/
(function(a){function E(a,b,c,d){var e=c.lang();return e[a].call?e[a](c,d):e[a][b]}function F(a,b){return function(c){return K(a.call(this,c),b)}}function G(a){return function(b){var c=a.call(this,b);return c+this.lang().ordinal(c)}}function H(a,b,c){this._d=a,this._isUTC=!!b,this._a=a._a||null,this._lang=c||!1}function I(a){var b=this._data={},c=a.years||a.y||0,d=a.months||a.M||0,e=a.weeks||a.w||0,f=a.days||a.d||0,g=a.hours||a.h||0,h=a.minutes||a.m||0,i=a.seconds||a.s||0,j=a.milliseconds||a.ms||0;this._milliseconds=j+i*1e3+h*6e4+g*36e5,this._days=f+e*7,this._months=d+c*12,b.milliseconds=j%1e3,i+=J(j/1e3),b.seconds=i%60,h+=J(i/60),b.minutes=h%60,g+=J(h/60),b.hours=g%24,f+=J(g/24),f+=e*7,b.days=f%30,d+=J(f/30),b.months=d%12,c+=J(d/12),b.years=c,this._lang=!1}function J(a){return a<0?Math.ceil(a):Math.floor(a)}function K(a,b){var c=a+"";while(c.length<b)c="0"+c;return c}function L(a,b,c){var d=b._milliseconds,e=b._days,f=b._months,g;d&&a._d.setTime(+a+d*c),e&&a.date(a.date()+e*c),f&&(g=a.date(),a.date(1).month(a.month()+f*c).date(Math.min(g,a.daysInMonth())))}function M(a){return Object.prototype.toString.call(a)==="[object Array]"}function N(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function O(a,b,c,d){var e,f,g=[];for(e=0;e<7;e++)g[e]=a[e]=a[e]==null?e===2?1:0:a[e];return a[7]=g[7]=b,a[8]!=null&&(g[8]=a[8]),a[3]+=c||0,a[4]+=d||0,f=new Date(0),b?(f.setUTCFullYear(a[0],a[1],a[2]),f.setUTCHours(a[3],a[4],a[5],a[6])):(f.setFullYear(a[0],a[1],a[2]),f.setHours(a[3],a[4],a[5],a[6])),f._a=g,f}function P(a,c){var d,e,g=[];!c&&h&&(c=require("./lang/"+a));for(d=0;d<i.length;d++)c[i[d]]=c[i[d]]||f.en[i[d]];for(d=0;d<12;d++)e=b([2e3,d]),g[d]=new RegExp("^"+(c.months[d]||c.months(e,""))+"|^"+(c.monthsShort[d]||c.monthsShort(e,"")).replace(".",""),"i");return c.monthsParse=c.monthsParse||g,f[a]=c,c}function Q(a){var c=typeof a=="string"&&a||a&&a._lang||null;return c?f[c]||P(c):b}function R(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function S(a){var b=a.match(k),c,d;for(c=0,d=b.length;c<d;c++)D[b[c]]?b[c]=D[b[c]]:b[c]=R(b[c]);return function(e){var f="";for(c=0;c<d;c++)f+=typeof b[c].call=="function"?b[c].call(e,a):b[c];return f}}function T(a,b){function d(b){return a.lang().longDateFormat[b]||b}var c=5;while(c--&&l.test(b))b=b.replace(l,d);return A[b]||(A[b]=S(b)),A[b](a)}function U(a){switch(a){case"DDDD":return p;case"YYYY":return q;case"S":case"SS":case"SSS":case"DDD":return o;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return r;case"Z":case"ZZ":return s;case"T":return t;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return n;default:return new RegExp(a.replace("\\",""))}}function V(a,b,c,d){var e,f;switch(a){case"M":case"MM":c[1]=b==null?0:~~b-1;break;case"MMM":case"MMMM":for(e=0;e<12;e++)if(Q().monthsParse[e].test(b)){c[1]=e,f=!0;break}f||(c[8]=!1);break;case"D":case"DD":case"DDD":case"DDDD":b!=null&&(c[2]=~~b);break;case"YY":c[0]=~~b+(~~b>70?1900:2e3);break;case"YYYY":c[0]=~~Math.abs(b);break;case"a":case"A":d.isPm=(b+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":c[3]=~~b;break;case"m":case"mm":c[4]=~~b;break;case"s":case"ss":c[5]=~~b;break;case"S":case"SS":case"SSS":c[6]=~~(("0."+b)*1e3);break;case"Z":case"ZZ":d.isUTC=!0,e=(b+"").match(x),e&&e[1]&&(d.tzh=~~e[1]),e&&e[2]&&(d.tzm=~~e[2]),e&&e[0]==="+"&&(d.tzh=-d.tzh,d.tzm=-d.tzm)}b==null&&(c[8]=!1)}function W(a,b){var c=[0,0,1,0,0,0,0],d={tzh:0,tzm:0},e=b.match(k),f,g;for(f=0;f<e.length;f++)g=(U(e[f]).exec(a)||[])[0],g&&(a=a.slice(a.indexOf(g)+g.length)),D[e[f]]&&V(e[f],g,c,d);return d.isPm&&c[3]<12&&(c[3]+=12),d.isPm===!1&&c[3]===12&&(c[3]=0),O(c,d.isUTC,d.tzh,d.tzm)}function X(a,b){var c,d=a.match(m)||[],e,f=99,g,h,i;for(g=0;g<b.length;g++)h=W(a,b[g]),e=T(new H(h),b[g]).match(m)||[],i=N(d,e),i<f&&(f=i,c=h);return c}function Y(a){var b="YYYY-MM-DDT",c;if(u.exec(a)){for(c=0;c<4;c++)if(w[c][1].exec(a)){b+=w[c][0];break}return s.exec(a)?W(a,b+" Z"):W(a,b)}return new Date(a)}function Z(a,b,c,d,e){var f=e.relativeTime[a];return typeof f=="function"?f(b||1,!!c,a,d):f.replace(/%d/i,b||1)}function $(a,b,c){var e=d(Math.abs(a)/1e3),f=d(e/60),g=d(f/60),h=d(g/24),i=d(h/365),j=e<45&&["s",e]||f===1&&["m"]||f<45&&["mm",f]||g===1&&["h"]||g<22&&["hh",g]||h===1&&["d"]||h<=25&&["dd",h]||h<=45&&["M"]||h<345&&["MM",d(h/30)]||i===1&&["y"]||["yy",i];return j[2]=b,j[3]=a>0,j[4]=c,Z.apply({},j)}function _(a,c){b.fn[a]=function(a){var b=this._isUTC?"UTC":"";return a!=null?(this._d["set"+b+c](a),this):this._d["get"+b+c]()}}function ab(a){b.duration.fn[a]=function(){return this._data[a]}}function bb(a,c){b.duration.fn["as"+a]=function(){return+this/c}}var b,c="1.7.2",d=Math.round,e,f={},g="en",h=typeof module!="undefined"&&module.exports,i="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),j=/^\/?Date\((\-?\d+)/i,k=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,l=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,m=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,n=/\d\d?/,o=/\d{1,3}/,p=/\d{3}/,q=/\d{1,4}/,r=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,s=/Z|[\+\-]\d\d:?\d\d/i,t=/T/i,u=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,v="YYYY-MM-DDTHH:mm:ssZ",w=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],x=/([\+\-]|\d\d)/gi,y="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),z={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},A={},B="DDD w M D d".split(" "),C="M D H h m s w".split(" "),D={M:function(){return this.month()+1},MMM:function(a){return E("monthsShort",this.month(),this,a)},MMMM:function(a){return E("months",this.month(),this,a)},D:function(){return this.date()},DDD:function(){var a=new Date(this.year(),this.month(),this.date()),b=new Date(this.year(),0,1);return~~((a-b)/864e5+1.5)},d:function(){return this.day()},dd:function(a){return E("weekdaysMin",this.day(),this,a)},ddd:function(a){return E("weekdaysShort",this.day(),this,a)},dddd:function(a){return E("weekdays",this.day(),this,a)},w:function(){var a=new Date(this.year(),this.month(),this.date()-this.day()+5),b=new Date(a.getFullYear(),0,4);return~~((a-b)/864e5/7+1.5)},YY:function(){return K(this.year()%100,2)},YYYY:function(){return K(this.year(),4)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return K(~~(this.milliseconds()/10),2)},SSS:function(){return K(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(a/60),2)+":"+K(~~a%60,2)},ZZ:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(10*a/6),4)}};while(B.length)e=B.pop(),D[e+"o"]=G(D[e]);while(C.length)e=C.pop(),D[e+e]=F(D[e],2);D.DDDD=F(D.DDD,3),b=function(c,d){if(c===null||c==="")return null;var e,f;return b.isMoment(c)?new H(new Date(+c._d),c._isUTC,c._lang):(d?M(d)?e=X(c,d):e=W(c,d):(f=j.exec(c),e=c===a?new Date:f?new Date(+f[1]):c instanceof Date?c:M(c)?O(c):typeof c=="string"?Y(c):new Date(c)),new H(e))},b.utc=function(a,c){return M(a)?new H(O(a,!0),!0):(typeof a=="string"&&!s.exec(a)&&(a+=" +0000",c&&(c+=" Z")),b(a,c).utc())},b.unix=function(a){return b(a*1e3)},b.duration=function(a,c){var d=b.isDuration(a),e=typeof a=="number",f=d?a._data:e?{}:a,g;return e&&(c?f[c]=a:f.milliseconds=a),g=new I(f),d&&(g._lang=a._lang),g},b.humanizeDuration=function(a,c,d){return b.duration(a,c===!0?null:c).humanize(c===!0?!0:d)},b.version=c,b.defaultFormat=v,b.lang=function(a,c){var d;if(!a)return g;(c||!f[a])&&P(a,c);if(f[a]){for(d=0;d<i.length;d++)b[i[d]]=f[a][i[d]];b.monthsParse=f[a].monthsParse,g=a}},b.langData=Q,b.isMoment=function(a){return a instanceof H},b.isDuration=function(a){return a instanceof I},b.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"}}),b.fn=H.prototype={clone:function(){return b(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?this._a[8]!=null?!!this._a[8]:!N(this._a,(this._a[7]?b.utc(this._a):b(this._a)).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(a){return T(this,a?a:b.defaultFormat)},add:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,1),this},subtract:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,-1),this},diff:function(a,c,e){var f=this._isUTC?b(a).utc():b(a).local(),g=(this.zone()-f.zone())*6e4,h=this._d-f._d-g,i=this.year()-f.year(),j=this.month()-f.month(),k=this.date()-f.date(),l;return c==="months"?l=i*12+j+k/30:c==="years"?l=i+(j+k/30)/12:l=c==="seconds"?h/1e3:c==="minutes"?h/6e4:c==="hours"?h/36e5:c==="days"?h/864e5:c==="weeks"?h/6048e5:h,e?l:d(l)},from:function(a,c){return b.duration(this.diff(a)).lang(this._lang).humanize(!c)},fromNow:function(a){return this.from(b(),a)},calendar:function(){var a=this.diff(b().sod(),"days",!0),c=this.lang().calendar,d=c.sameElse,e=a<-6?d:a<-1?c.lastWeek:a<0?c.lastDay:a<1?c.sameDay:a<2?c.nextDay:a<7?c.nextWeek:d;return this.format(typeof e=="function"?e.apply(this):e)},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()<b([this.year()]).zone()||this.zone()<b([this.year(),5]).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return a==null?b:this.add({d:a-b})},startOf:function(a){switch(a.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(a){return this.startOf(a).add(a.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return b.utc([this.year(),this.month()+1,0]).date()},lang:function(b){return b===a?Q(this):(this._lang=b,this)}};for(e=0;e<y.length;e++)_(y[e].toLowerCase(),y[e]);_("year","FullYear"),b.duration.fn=I.prototype={weeks:function(){return J(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(a){var b=+this,c=this.lang().relativeTime,d=$(b,!a,this.lang()),e=b<=0?c.past:c.future;return a&&(typeof e=="function"?d=e(d):d=e.replace(/%s/i,d)),d},lang:b.fn.lang};for(e in z)z.hasOwnProperty(e)&&(bb(e,z[e]),ab(e.toLowerCase()));bb("Weeks",6048e5),h&&(module.exports=b),typeof ender=="undefined"&&(this.moment=b),typeof define=="function"&&define.amd&&define("moment",[],function(){return b})}).call(this);


/*********************************************
Moment JS Settings
*********************************************/
$(function () {
  $('.date, .job-date').each(function (index, dateElem) {
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
jQuery jPList Plugin 3.1.0.337
*********************************************/
(function(e){var d=function(a,b){var c={};c.options=$.extend(!0,{items_box:".list",item_path:".list-item",panel_path:".panel",no_results:".jplist-no-results",redraw_callback:"",animate_to_top:"",animate_to_top_duration:1E3,ask_event:"jplist_ask",answer_event:"jplist_answer",force_ask_event:"jplist_force_ask",restore_event:"jplist_restore",status_event:"jplist_status",cookies:!1,expiration:-1,cookie_name:"jplist",control_types:{"drop-down":{class_name:"control_dropdown",options:{}},select:{class_name:"control_select",
options:{}},placeholder:{class_name:"control_placeholder",options:{paging_length:7,prev_arrow:"&lt;",next_arrow:"&gt;",first_arrow:"&lt;&lt;",last_arrow:"&gt;&gt;"}},label:{class_name:"control_label",options:{}},textbox:{class_name:"control_textbox",options:{ignore:"[~!@#$%^&*()+=`'\"/\\_]+"}}}},a);c.controller=new $.fn.jplist.controller(b,c.options);return e.extend(this,c)};d.prototype.sort=function(a,b,c,d){this.controller.panel.jplist_box.trigger(this.controller.options.status_event,[new e.fn.jplist.status(a,
"sort","drop-down",{path:b,type:c,order:d})])};d.prototype.items_per_page=function(a,b){this.controller.panel.jplist_box.trigger(this.controller.options.status_event,[new e.fn.jplist.status(a,"paging","drop-down",{number:b})])};d.prototype.filter_path=function(a,b){this.controller.panel.jplist_box.trigger(this.controller.options.status_event,[new e.fn.jplist.status(a,"filter","drop-down",{path:b,filter_type:"path"})])};d.prototype.filter_text=function(a,b,c){this.controller.panel.jplist_box.trigger(this.controller.options.status_event,
[new e.fn.jplist.status(a,"filter","textbox",{value:b,path:c,filter_type:"text",ignore:""})])};d.prototype.jump_page=function(a,b){var c;c=parseInt(b,10);!isNaN(c)&&0<c&&(c={current_page:c-1},c=new e.fn.jplist.status(a,"paging","placeholder",c),this.controller.panel.jplist_box.trigger(this.controller.options.status_event,[c]))};e.fn.jplist=function(a){return this.each(function(){var b=new d(a,$(this));$(this).data("jplist",b)})}})(jQuery);(function(){jQuery.fn.jplist.helper={};jQuery.fn.jplist.helper.get_outer_html=function(e){for(var d="",a=e[0].attributes,b=e.html(),e=e[0].tagName.toString().toLowerCase(),d=d+("<"+e+" "),c=0;c<a.length;c++)null!=a[c].nodeValue&&""!=a[c].nodeValue&&(d+=a[c].nodeName+"=",d+='"'+a[c].nodeValue+'" ');return d+">"+b+("</"+e+">")};jQuery.fn.jplist.helper.get_statuses_by_action=function(e,d){for(var a=[],b,c=0;c<d.length;c++)b=d[c],b.action==e&&a.push(b);return a}})(jQuery);(function(){var e=function(d,a,b){return jQuery.extend(this,{jq_path:d,data_type:a,attr_name:b})};e.prototype.equal=function(d,a){var b=!1;a?this.jq_path===d.jq_path&&(b=!0):this.jq_path===d.jq_path&&this.data_type===d.data_type&&this.attr_name===d.attr_name&&(b=!0);return b};e.prototype.in_list=function(d){for(var a,b=!1,c=0;c<d.length;c++)if(a=d[c],a.equal(this,!0)){b=!0;break}return b};jQuery.fn.jplist.path=function(d,a,b){this.in_list=this.equal=this.attr_name=this.data_type=this.jq_path=null;
return new e(d,a,b)}})(jQuery);(function(e){var d=function(a,b){var c={jq_element:a,path:b,text:null,html:null};c.text=a.text();c.html=a.html();return e.extend(this,c)};jQuery.fn.jplist.pathitem=function(a,b){this.html=this.text=this.jq_element=this.path=null;return new d(a,b)}})(jQuery);(function(e){var d,a=function(b,a,f){f={html:null,pathitems:[],jq_element:b,index:f};d=jQuery.fn.jplist.helper;f.html=d.get_outer_html(b);for(var g,h,b=0;b<a.length;b++)g=a[b],h=f.jq_element.find(g.jq_path),0<h.length&&(g=new jQuery.fn.jplist.pathitem(h,g),f.pathitems.push(g));return e.extend(this,f)};a.prototype.find_pathitem=function(b){for(var a=null,d,g=0;g<this.pathitems.length;g++)if(d=this.pathitems[g],d.path.equal(b,!0)){a=d;break}return a};jQuery.fn.jplist.dataitem=function(b,c,d){this.find_pathitem=
this.jq_element=this.pathitems=this.html=null;return new a(b,c,d)}})(jQuery);(function(e){var d=function(b,a){for(var c,d=0;d<b.dataitems.length;d++)c=b.dataitems[d],c.jq_element.is(a)&&b.dataitems.splice(d,1)},a=function(b,a){a.each(function(){d(b,e(this))})},b=function(b,a,c){a=new jQuery.fn.jplist.dataitem(a,b.paths,c);b.dataitems.push(a)},c=function(a,c){c.each(function(c){b(a,e(this),c)})},f=function(a,c,d){if(0<c.length)for(var c=c.find(d),f=0;f<c.length;f++)d=c.eq(f),b(a,d,f);a.dataview=e.merge([],a.dataitems)},g=function(b,a,c){c={dataitems:[],dataview:[],paths:c,
items_box:b,item_path_inside_box:a};f(c,b,a);return e.extend(this,c)};g.prototype.reset_dataview=function(){this.dataview=e.merge([],this.dataitems)};g.prototype.modify_dataview=function(b){e.isFunction(b)&&b(this.dataview)};g.prototype.add_dataitem=function(a,c){b(this,a,c)};g.prototype.add_dataitems=function(b){c(this,b)};g.prototype.del_dataitem=function(b){d(this,b)};g.prototype.del_dataitems=function(b){a(this,b)};g.prototype.indexof=function(b){for(var a,c=-1,d=0;d<this.dataitems.length;d++)if(a=
this.dataitems[d],a.jq_element.is(b)){c=d;break}return c};g.prototype.update_paths=function(b){this.paths=b;f(this,this.items_box,this.item_path_inside_box)};g.prototype.dataview_to_string=function(){var b,a="",c;for(c=0;c<this.dataview.length;c++)b=this.dataview[c],a+=b.html;return a};jQuery.fn.jplist.collection=function(b,a,c){this.dataview_to_string=this.items_box=this.modify_dataview=this.reset_dataview=null;return new g(b,a,c)}})(jQuery);(function(e){var d=function(a,b,c,d){return e.extend(this,{action:b,name:a,type:c,data:d})};d.prototype.indexof=function(a,b){for(var c=-1,d,g=0;g<a.length;g++)if(d=a[g],d[b]==this[b]){c=g;break}return c};jQuery.fn.jplist.status=function(a,b,c,f){return new d(a,b,c,f)}})(jQuery);(function(e){jQuery.fn.jplist.filters={};jQuery.fn.jplist.filters.remove_characters=function(d,a){return void 0==d||null==d?"":d.replace(RegExp(a,"ig"),"").toLowerCase()};jQuery.fn.jplist.filters.path_filter=function(d,a){for(var b,c,f=[],g=0;g<a.length;g++)b=a[g],"default"==d.jq_path?f.push(b):(c=b.find_pathitem(d),null!=c&&f.push(b));return f};jQuery.fn.jplist.filters.inverted_path_filter=function(d,a){for(var b,c,f=[],g,h,i=!1,l=0;l<a.length;l++)b=a[l],i=!1,void 0!=d&&0<d.length&&(d.each(function(){h=
e(this).attr("data-path");"default"==h?i=!0:(g=new jQuery.fn.jplist.path(h,null,null),c=b.find_pathitem(g),null!=c&&(i=!0))}),i&&f.push(b));return f};jQuery.fn.jplist.filters.text_filter=function(d,a,b,c){for(var f,g,e=[],i,l=0;l<b.length;l++)f=b[l],g=f.find_pathitem(a),"default"==a.jq_path?e.push(f):null!=g&&(g=jQuery.fn.jplist.filters.remove_characters(g.text,c),i=jQuery.fn.jplist.filters.remove_characters(d,c),-1!=g.indexOf(i)&&e.push(f));return e};jQuery.fn.jplist.filters.date_filter=function(d,
a,b,c,f,g){for(var e,i,l=[],n=0;n<f.length;n++)e=f[n],i=e.find_pathitem(c),null!=i&&(null==d||void 0==d||""==d||null==a||void 0==a||""==a||null==b||void 0==b||""==b?l.push(e):(i=jQuery.fn.jplist.sort.format_datetime(i.text,g),null!=i&&void 0!=i&&"function"===typeof i.getFullYear&&i.getFullYear()==d&&i.getMonth()-1==a&&i.getDate()==b&&l.push(e)));return l};jQuery.fn.jplist.filters.pager_filter=function(d,a){var b=[];return b=a.slice(d.start,d.end)};jQuery.fn.jplist.filters.range_filter=function(d,
a,b,c,f,e){for(var b=[],h,i=0;i<a.length;i++)c=a[i],h=c.find_pathitem(d),null!=h&&(h=parseInt(h.text,10),!isNaN(h)&&h>=f&&h<=e&&b.push(c));return b};jQuery.fn.jplist.filters.date_range_filter=function(d,a,b,c,f,e,h,i,l){for(var n=[],o,k,m,j,p=0;p<a.length;p++)o=a[p],k=o.find_pathitem(d),null!=k&&(m=null==c||void 0==c||""==c||null==f||void 0==f||""==f||null==e||void 0==e||""==e,j=null==h||void 0==h||""==h||null==i||void 0==i||""==i||null==l||void 0==l||""==l,m||j?n.push(o):(j=jQuery.fn.jplist.sort.format_datetime(k.text,
b),null!=j&&void 0!=j&&"function"===typeof j.getFullYear&&(k=new Date(c,f,e),m=new Date(h,i,l),j.setHours(0),j.setMinutes(0),j.setSeconds(0),j>=k&&j<=m&&n.push(o))));return n}})(jQuery);(function(e){jQuery.fn.jplist.sort={};var d=function(b,a){var c,d=null;c=b.replace(/{year}|{month}|{day}|{hour}|{min}|{sec}/g,".*");c=RegExp(c,"g").exec(a);null!=c&&1<c.length&&(d=c[1]);return d},a=function(b,a){var c=null;if("{month}"==b){a=a.toLowerCase();if("january"==a||"jan"==a||"jan."==a)c=0;if("february"==a||"feb"==a||"feb."==a)c=1;if("march"==a||"mar"==a||"mar."==a)c=2;if("april"==a||"apr"==a||"apr."==a)c=3;"may"==a&&(c=4);if("july"==a||"jun"==a||"jun."==a)c=5;if("april"==a||"jul"==a||"jul."==
a)c=6;if("august"==a||"aug"==a||"aug."==a)c=7;if("september"==a||"sep"==a||"sep."==a)c=8;if("october"==a||"oct"==a||"oct."==a)c=9;if("november"==a||"nov"==a||"nov."==a)c=10;if("december"==a||"dec"==a||"dec."==a)c=11;null===c&&(c=parseInt(a,10),isNaN(c)||c--)}else c=parseInt(a,10);return c},b=function(b,c){var f,e,g,h,j,p,c=c.replace(/\./g,"\\."),c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)"),c=c.replace(/\[/g,"\\["),c=c.replace(/\]/g,"\\]");f=c.replace("{year}","(.*)");e=d(f,b);null!=e&&(e=a("{year}",
e));f=c.replace("{day}","(.*)");h=d(f,b);null!=h&&(h=a("{day}",h));f=c.replace("{month}","(.*)");g=d(f,b);null!=g&&(g=a("{month}",g));f=c.replace("{hour}","(.*)");j=d(f,b);null!=j&&(j=a("{hour}",j));f=c.replace("{min}","(.*)");p=d(f,b);null!=p&&(p=a("{min}",p));f=c.replace("{sec}","(.*)");f=d(f,b);null!=f&&(f=a("{sec}",f));if(null==e||isNaN(e)||void 0==e)e=1900;if(null==g||isNaN(g)||void 0==g)g=0;if(null==h||isNaN(h)||void 0==h)h=1;if(null==j||isNaN(j)||void 0==j)j=0;if(null==p||isNaN(p)||void 0==
p)p=0;if(null==f||isNaN(f)||void 0==f)f=0;return new Date(e,g,h,j,p,f)},c=function(a,c,b,d){a=a.find_pathitem(d);c=c.find_pathitem(d);d=parseFloat(a.text.replace(/[^0-9\.]+/g,""));c=parseFloat(c.text.replace(/[^0-9\.]+/g,""));return d==c?0:"asc"==b?NaN==d?1:NaN==c?-1:d-c:NaN==d?1:NaN==c?-1:c-d},f=function(a,c,b,d){a=a.find_pathitem(d);c=c.find_pathitem(d);d=a.text.toString().replace(/[^a-zA-Z0-9]+/g,"").toLowerCase();c=c.text.toString().replace(/[^a-zA-Z0-9]+/g,"").toLowerCase();return d==c?0:"asc"==
b?d>c?1:-1:d<c?1:-1},g=function(a,c,d,f,g){a=a.find_pathitem(f);c=c.find_pathitem(f);""==e.trim(g)?(f=new Date(Date.parse(a.text)),g=new Date(Date.parse(c.text))):(f=b(a.text,g),g=b(c.text,g));return f==g?0:"asc"==d?f>g?1:-1:f<g?1:-1},h=function(a,b,d,e){var k=0,m,j,p;if(0<d.length){m=d[e];if("default"!=m.data.path){j=new jQuery.fn.jplist.path(m.data.path,m.data.type,null);p=m.data.order;if(void 0==m.data.date_time_format||null==m.data.date_time_format)m.data.date_time_format="";switch(m.data.type){case "text":k=
f(a,b,p,j);break;case "number":k=c(a,b,p,j);break;case "datetime":k=g(a,b,p,j,m.data.date_time_format);break;case "date":k=g(a,b,p,j,m.data.date_time_format)}}else k=a.index,m=b.index,k=k===m?0:NaN==k?1:NaN==m?-1:k-m;0==k&&e+1<d.length&&(k=h(a,b,d,e+1))}return k};jQuery.fn.jplist.sort.double_sort=function(a,c){c.sort(function(c,b){return h(c,b,a,0)})};jQuery.fn.jplist.sort.numbers=function(a,b,d){d.sort(function(d,f){c(d,f,a,b)});return d};jQuery.fn.jplist.sort.text=function(a,c,b){b.sort(function(b,
d){f(b,d,a,c)});return b};jQuery.fn.jplist.sort.datetime=function(a,c,b){b.sort(function(b,d){g(b,d,a,c,"")});return b};jQuery.fn.jplist.sort.format_datetime=function(a,c){return b(a,c)}})(jQuery);(function(){jQuery.fn.jplist.paging={};jQuery.fn.jplist.paging.get=function(e,d,a){var b,c,f,e=parseInt(e,10);isNaN(e)&&(e=0);d=parseInt(d,10);isNaN(d)&&(d=e);f=jQuery.fn.jplist.paging.get_pages_num(e,d);a=parseInt(a,10);isNaN(a)&&(a=0);a>f-1&&(a=0);b=a*d;c=b+d;c>e&&(c=e);b>c&&(b=a=0,c=d,c>e&&(c=e));return{items_on_page:d,current_page:a,items_number:e,start:b,end:c,pages_number:f,prev_page:jQuery.fn.jplist.paging.get_prev_page(a),next_page:jQuery.fn.jplist.paging.get_next_page(e,d,a)}};jQuery.fn.jplist.paging.get_pages_num=
function(e,d){d=parseInt(d,10);e=parseInt(e,10);return Math.ceil(e/d)};jQuery.fn.jplist.paging.get_next_page=function(e,d,a){d=parseInt(d,10);a=parseInt(a,10);e=parseInt(e,10);e=jQuery.fn.jplist.paging.get_pages_num(e,d);return a>=e-1?e-1:a+1};jQuery.fn.jplist.paging.get_prev_page=function(e){e=parseInt(e,10);return 0>=e?0:e-1}})(jQuery);(function(e){jQuery.fn.jplist.cookies={};jQuery.fn.jplist.cookies.set_cookie=function(d,a,b){var a=escape(a),c=new Date,b=parseInt(b,10);-1==b||NaN==b?document.cookie=d+"="+a+";path=/;":(c.setDate(c.getDate()+b),document.cookie=d+"="+a+";path=/; expires="+c.toUTCString())};jQuery.fn.jplist.cookies.get_cookie=function(d){var a,b,c,f=null;c=document.cookie.split(";");for(var e=0;e<c.length;e++)if(a=c[e].substr(0,c[e].indexOf("=")),b=c[e].substr(c[e].indexOf("=")+1),a=a.replace(/^\s+|\s+$/g,""),a==d){f=
unescape(b);break}return f};jQuery.fn.jplist.cookies.save_cookies=function(d,a,b){d=JSON.stringify(d);jQuery.fn.jplist.cookies.set_cookie(a,d,b)};jQuery.fn.jplist.cookies.restore_cookies=function(d){d=jQuery.fn.jplist.cookies.get_cookie(d);d=e.parseJSON(d);if(null==d||void 0==d)d=[];return d}})(jQuery);(function(e){var d=function(a){var b;if(void 0!=a.control_type_class&&null!=a.control_type_class)b=a.control_type_class.render,void 0!=b&&e.isFunction(b)&&b(a)},a=function(a){var b;if(void 0!=a.control_type_class&&null!=a.control_type_class)b=a.control_type_class.init_events,void 0!=b&&e.isFunction(b)&&b(a)},b=function(a,b,g){a={jplist_box:a,options:b,jq_control:g,type:null,action:null,name:null,control_type:null,control_type_class:null,control_type_options:null};a.type=g.attr("data-control-type");
a.action=g.attr("data-control-action");a.name=g.attr("data-control-name");a.control_type=a.options.control_types[a.type];if(void 0!=a.control_type){if(void 0!=a.control_type.class_name)a.control_type_class=jQuery.fn.jplist[a.control_type.class_name];if(void 0!=a.control_type.options)a.control_type_options=a.control_type.options}d(a);return e.extend(this,a)};b.prototype.render=function(){d(this)};b.prototype.get_paths=function(){var a=[],b;if(void 0!=this.control_type_class&&null!=this.control_type_class)b=
this.control_type_class.get_paths,void 0!=b&&e.isFunction(b)&&b(this,a);return a};b.prototype.get_status=function(a){var b=null,d;if(void 0!=this.control_type_class&&null!=this.control_type_class)d=this.control_type_class.get_status,void 0!=d&&e.isFunction(d)&&(b=d(a,this));return b};b.prototype.set_status=function(a){var b;if(a.action==this.action&&a.name==this.name&&void 0!=this.control_type_class&&null!=this.control_type_class)b=this.control_type_class.set_status,void 0!=b&&e.isFunction(b)&&b(a,
this)};b.prototype.init_events=function(){a(this)};jQuery.fn.jplist.panel_control=function(c,d,e){c=new b(c,d,e);a(c);return c}})(jQuery);(function(e){jQuery.fn.jplist.control_textbox={};jQuery.fn.jplist.control_textbox.get_paths=function(d,a){var b;b=d.jq_control.attr("data-path");void 0!=b&&""!=e.trim(b)&&null!=b&&(b=new jQuery.fn.jplist.path(b,null,null),b.in_list(a)||a.push(b))};jQuery.fn.jplist.control_textbox.get_status=function(d,a){var b;b={path:a.jq_control.attr("data-path"),filter_type:"text",ignore:""};b.value=d?"":a.jq_control.val();if(void 0!=a.control_type_options&&void 0!=a.control_type_options.ignore&&""!=a.control_type_options.ignore)b.ignore=
a.control_type_options.ignore;return new jQuery.fn.jplist.status(a.name,a.action,a.type,b)};jQuery.fn.jplist.control_textbox.init_events=function(d){d.jq_control.bind("keyup",function(){d.jplist_box.trigger(d.options.force_ask_event,[!1])})};jQuery.fn.jplist.control_textbox.set_status=function(d,a){void 0!=d.data&&void 0!=d.data.value&&a.jq_control.val(d.data.value)}})(jQuery);(function(e){jQuery.fn.jplist.control_dropdown={};jQuery.fn.jplist.control_dropdown.render=function(d){var a;a=d.jq_control.find("li:eq(0)");a.addClass("active");a=a.find("span");0>=d.jq_control.find(".panel").length&&d.jq_control.prepend('<div class="panel">'+a.text()+"</div>")};jQuery.fn.jplist.control_dropdown.get_paths=function(d,a){var b,c,f;d.jq_control.find("span").each(function(){b=e(this).attr("data-path");c=e(this).attr("data-type");void 0!=b&&""!=e.trim(b)&&null!=b&&(f=new jQuery.fn.jplist.path(b,
c,null),f.in_list(a)||a.push(f))})};jQuery.fn.jplist.control_dropdown.get_status=function(d,a){var b=null,c;d?(c=a.jq_control.find('li:has(span[data-default="true"])').eq(0),0>=c.length&&(c=a.jq_control.find("li:eq(0)"))):c=a.jq_control.find(".active");c=c.find("span");switch(a.action){case "paging":b={number:c.attr("data-number")};b=new jQuery.fn.jplist.status(a.name,a.action,a.type,b);break;case "sort":b={path:c.attr("data-path"),type:c.attr("data-type"),order:c.attr("data-order")};c=a.jq_control.attr("data-datetime-format");
if(void 0!=c&&null!=c)b.date_time_format=c;b=new jQuery.fn.jplist.status(a.name,a.action,a.type,b);break;case "filter":b={path:c.attr("data-path"),type:c.attr("data-type"),filter_type:"path"},b=new jQuery.fn.jplist.status(a.name,a.action,a.type,b)}return b};jQuery.fn.jplist.control_dropdown.set_status=function(d,a){var b;switch(a.action){case "filter":a.jq_control.find("li").removeClass("active");b=a.jq_control.find('li:has([data-path="'+d.data.path+'"])');b.addClass("active");a.jq_control.find(".panel").text(b.eq(0).text());
break;case "sort":a.jq_control.find("li").removeClass("active");b="default"==d.data.path?a.jq_control.find('li:has([data-path="'+d.data.path+'"])'):a.jq_control.find('li:has([data-path="'+d.data.path+'"][data-type="'+d.data.type+'"][data-order="'+d.data.order+'"])');b.addClass("active");a.jq_control.find(".panel").text(b.eq(0).text());break;case "paging":a.jq_control.find("li").removeClass("active"),b=a.jq_control.find('li:has([data-number="'+d.data.number+'"])'),0==b.length&&(b=a.jq_control.find('li:has([data-number="all"])')),
b.addClass("active"),a.jq_control.find(".panel").text(b.eq(0).text())}};jQuery.fn.jplist.control_dropdown.init_events=function(d){var a=e(document).find('[data-control-type="drop-down"]');e(document).click(function(){a.find("ul").hide()});e(document).unbind("jplist_dropdown_close").bind("jplist_dropdown_close",function(b,c){a.each(function(){e(this).is(c)||e(this).find("ul").hide()})});d.jq_control.find(".panel").unbind().click(function(a){var c;a.stopPropagation();a=e(this).parents("[data-control-type]");
c=a.find("ul");e(document).trigger("jplist_dropdown_close",[a]);c.is(":visible")?c.hide():c.show()});d.jq_control.find("li").unbind().click(function(){var a,c,f,g;a=jQuery.fn.jplist.control_dropdown.get_status(!1,d);g=e(this).find("span");c=g.attr("data-path");f=g.attr("data-number");if(void 0!=c)a.data.path=c,a.data.type=g.attr("data-type"),a.data.order=g.attr("data-order");else if(void 0!=f)a.data.number=f;d.jplist_box.trigger(d.options.status_event,[a])})}})(jQuery);(function(e){jQuery.fn.jplist.control_select={};jQuery.fn.jplist.control_select.get_paths=function(d,a){var b,c,f;d.jq_control.find("option").each(function(){b=e(this).attr("data-path");c=e(this).attr("data-type");void 0!=b&&""!=e.trim(b)&&null!=b&&(f=new jQuery.fn.jplist.path(b,c,null),f.in_list(a)||a.push(f))})};jQuery.fn.jplist.control_select.get_status=function(d,a){var b,c=null;d?(b=a.jq_control.find('option[data-default="true"]').eq(0),0>=b.length&&(b=a.jq_control.find("option").eq(0))):b=a.jq_control.find("option:selected");
switch(a.action){case "paging":c={number:b.attr("data-number")};c=new jQuery.fn.jplist.status(a.name,a.action,a.type,c);break;case "sort":c={path:b.attr("data-path"),type:b.attr("data-type"),order:b.attr("data-order")};b=a.jq_control.attr("data-datetime-format");if(void 0!=b&&null!=b)c.date_time_format=b;c=new jQuery.fn.jplist.status(a.name,a.action,a.type,c);break;case "filter":c={path:b.attr("data-path"),type:b.attr("data-type"),filter_type:"path"},c=new jQuery.fn.jplist.status(a.name,a.action,
a.type,c)}return c};jQuery.fn.jplist.control_select.set_status=function(d,a){var b;switch(a.action){case "filter":b=a.jq_control.find('option[data-path="'+d.data.path+'"]');b.get(0).selected=!0;break;case "sort":b="default"==d.data.path?a.jq_control.find('option[data-path="'+d.data.path+'"]'):a.jq_control.find('option[data-path="'+d.data.path+'"][data-type="'+d.data.type+'"][data-order="'+d.data.order+'"]');b.get(0).selected=!0;break;case "paging":b=a.jq_control.find('option[data-number="'+d.data.number+
'"]'),0==b.length&&(b=a.jq_control.find('option[data-number="all"]')),b.get(0).selected=!0}};jQuery.fn.jplist.control_select.init_events=function(d){d.jq_control.change(function(){var a,b,c;a=jQuery.fn.jplist.control_select.get_status(!1,d);b=e(this).find("option:selected");c=b.attr("data-path");b=b.attr("data-number");if(void 0!=c)a.data.path=c,a.data.type=e(this).attr("data-type"),a.data.order=e(this).attr("data-order");else if(void 0!=b)a.data.number=b;d.jplist_box.trigger(d.options.status_event,
[a])})}})(jQuery);(function(e){jQuery.fn.jplist.control_placeholder={};jQuery.fn.jplist.control_placeholder.render=function(a){var b,c,d,e;e=a.control_type_options;a.jq_control.html('<div class="pagingprev"></div><div class="pagingmid"></div><div class="pagingnext"></div>');b=a.jq_control.find(".pagingprev");c=a.jq_control.find(".pagingmid");d=a.jq_control.find(".pagingnext");a.jq_control.data("pagingprev",b);a.jq_control.data("pagingmid",c);a.jq_control.data("pagingnext",d);b.html('<span class="first" data-number="0">'+
e.first_arrow+'</span><span class="prev">'+e.prev_arrow+"</span>");d.html('<span class="next">'+e.next_arrow+'</span><span class="last">'+e.last_arrow+"</span>");a.jq_control.data("first",b.find(".first"));a.jq_control.data("prev",b.find(".prev"));a.jq_control.data("next",d.find(".next"));a.jq_control.data("last",d.find(".last"))};jQuery.fn.jplist.control_placeholder.get_status=function(a,b){var c;c=null;var d;d=b.jq_control.find("span[data-active]").eq(0);0>=d.length&&(d=b.jq_control.find("span").eq(0));
d=e.trim(d.attr("data-number"));a&&(d=0);if(""!==d){c=parseInt(d,10);c={current_page:c};d=b.jq_control.attr("data-items-per-page");if(void 0!=d&&""!=d)c.number=d;c=new jQuery.fn.jplist.status(b.name,b.action,b.type,c)}return c};jQuery.fn.jplist.control_placeholder.set_status=function(a,b){var c;if("paging"==b.name){if(void 0!=a.data&&void 0!=a.data.paging){c=a.data.paging;var e,g,h="",i;i=b.control_type_options;if(0<=c.current_page&&c.current_page<c.pages_number){b.jq_control.removeClass("hidden");
g=Math.floor(c.current_page/i.paging_length);e=i.paging_length*g;g=i.paging_length*(g+1);if(g>c.pages_number)g=c.pages_number;h+='<div class="pagesbox">';for(i=e;i<g;i++)h+="<span ",i==c.current_page&&(h+=' class="current" data-active="true" '),e=i+1,h+=' data-number="'+i+'" ',h+=">"+e+"</span> ";b.jq_control.data("pagingmid").html(h+"</div>");b.jq_control.data("prev").attr("data-number",c.prev_page).removeClass("current");b.jq_control.data("next").attr("data-number",c.next_page).removeClass("current");
b.jq_control.data("last").attr("data-number",c.pages_number-1).removeClass("current")}else b.jq_control.addClass("hidden");0==c.current_page?b.jq_control.data("pagingprev").addClass("hidden"):b.jq_control.data("pagingprev").removeClass("hidden");c.current_page==c.pages_number-1?b.jq_control.data("pagingnext").addClass("hidden"):b.jq_control.data("pagingnext").removeClass("hidden")}d(b)}};var d=function(a){var b,c=null;a.jq_control.find("span").unbind().bind("click",function(){b=e(this).attr("data-number");
c=jQuery.fn.jplist.control_placeholder.get_status(!1,a);c.data.current_page=parseInt(b,10);a.jplist_box.trigger(a.options.status_event,[c])})};jQuery.fn.jplist.control_placeholder.init_events=function(a){d(a)}})(jQuery);(function(){jQuery.fn.jplist.control_label={};jQuery.fn.jplist.control_label.set_status=function(e,d){var a,b;if("paging"==e.action&&void 0!=e.data&&void 0!=e.data.paging)a=e.data.paging,0>=a.pages_number?d.jq_control.html(""):(b=d.jq_control.attr("data-type"),b=b.replace("{current}",a.current_page+1),b=b.replace("{pages}",a.pages_number),b=b.replace("{start}",a.start+1),b=b.replace("{end}",a.end),b=b.replace("{all}",a.items_number),d.jq_control.html(b))}})(jQuery);(function(e){var d=function(a,b){for(var c=[],d,l,n,o=0;o<a.controls.length;o++)d=a.controls[o],d=d.get_status(b),null!=d&&(l=d.indexof(c,"name"),-1!=l?(n=c[l],n.action==d.action&&n.type!=d.type&&e.extend(!0,c[l],d)):c.push(d));return c},a=function(a,b){for(var c,d,e=0;e<b.length;e++){c=b[e];d=a;for(var n=c.name,o=c.action,k=[],m=void 0,j=0;j<d.controls.length;j++)m=d.controls[j],m.name==n&&m.action==o&&k.push(m);d=k;for(n=0;n<d.length;n++)d[n].set_status(c)}},b=function(b){for(var c,h=0;h<b.controls.length;h++)c=
b.controls[h],c.init_events();b.jplist_box.bind(b.options.answer_event,function(c,d){a(b,d)});b.jplist_box.bind(b.options.force_ask_event,function(a,c){b.jplist_box.trigger(b.options.ask_event,[d(b,c)])});b.jplist_box.bind(b.options.restore_event,function(c,d){a(b,d);b.jplist_box.trigger(b.options.ask_event,[d])});b.jplist_box.bind(b.options.status_event,function(a,c){var g;g=d(b,!1);for(var h=0;h<g.length;h++)g[h].name==c.name&&g[h].action==c.action&&e.extend(!0,g[h],c);b.jplist_box.trigger(b.options.ask_event,
[g])})},c=function(a,b){var c={jplist_box:a,options:b,paths:[],jq_panel:a.find(b.panel_path),jq_controls:null,controls:[]};c.jq_controls=c.jq_panel.find("[data-control-type]");for(var d,l=0;l<c.jq_controls.length;l++)d=c.jq_controls.eq(l),d=jQuery.fn.jplist.panel_control(c.jplist_box,c.options,d),c.controls.push(d);for(var n,l=0;l<c.controls.length;l++){d=c.controls[l];d=d.get_paths();for(var o=0;o<d.length;o++)n=d[o],n.in_list(c.paths)||c.paths.push(n)}return e.extend(this,c)};jQuery.fn.jplist.panel=
function(a,d){var e;e=new c(a,d);b(e);return e}})(jQuery);(function(e){var d=function(a,b,c){for(var d,e,a=jQuery.fn.jplist.helper.get_statuses_by_action("filter",c),c=0;c<a.length;c++)e=a[c],b.modify_dataview(function(a){d=new jQuery.fn.jplist.path(e.data.path,null,null);switch(e.data.filter_type){case "text":b.dataview=jQuery.fn.jplist.filters.text_filter(e.data.value,d,a,e.data.ignore);break;case "path":b.dataview=jQuery.fn.jplist.filters.path_filter(d,a);break;case "inverted_path":b.dataview=jQuery.fn.jplist.filters.inverted_path_filter(e.data.checked_checkboxes,
a);break;case "range":b.dataview=jQuery.fn.jplist.filters.range_filter(d,a,e.data.min,e.data.max,e.data.prev,e.data.next);break;case "date":b.dataview=jQuery.fn.jplist.filters.date_filter(e.data.year,e.data.month,e.data.day,d,a,e.data.format);break;case "date_range":b.dataview=jQuery.fn.jplist.filters.date_range_filter(d,a,e.data.format,e.data.prev_year,e.data.prev_month,e.data.prev_day,e.data.next_year,e.data.next_month,e.data.next_day)}})},a=function(a){a.jplist_box.bind(a.options.ask_event,function(b,
c){var i;a.options.cookies&&jQuery.fn.jplist.cookies.save_cookies(c,a.options.cookie_name,a.options.expiration);for(var l=0;l<a.collections.length;l++){i=a.collections[l];var n=a,o=i;i=c;o.reset_dataview();var k=o,m=void 0,m=jQuery.fn.jplist.helper.get_statuses_by_action("sort",i);jQuery.fn.jplist.sort.double_sort(m,k.dataview);d(n,o,i);for(var k=o,m=void 0,j=null,p=j=void 0,m=jQuery.fn.jplist.helper.get_statuses_by_action("paging",i),q=0;q<m.length;q++)j=m[q],p=void 0==j.data.current_page?0:j.data.current_page,
j=jQuery.fn.jplist.paging.get(k.dataview.length,j.data.number,p),m[q].data.paging=j,k.dataview=jQuery.fn.jplist.filters.pager_filter(j,k.dataview);k=n;o.items_box.html(o.dataview_to_string());k.jplist_box.trigger(k.options.answer_event,[i]);0>=o.dataview.length?(k.no_results_el.show(),o.items_box.hide()):(k.no_results_el.hide(),o.items_box.show());e.isFunction(k.options.redraw_callback)&&k.options.redraw_callback();i=void 0;""!=n.options.animate_to_top&&(i="auto"!=n.options.animate_to_top?e(n.options.animate_to_top).offset().top:
n.jplist_box.offset().top,e("html, body").animate({scrollTop:i},n.options.animate_to_top_duration))}})},b=function(a){var b;a.jplist_box.find(a.options.items_box).each(function(){b=new jQuery.fn.jplist.collection(e(this),a.options.item_path,a.panel.paths);a.collections.push(b)})},c=function(a,c){var d={jplist_box:a,options:c,panel:null,collections:[],no_results_el:null};d.panel=new jQuery.fn.jplist.panel(d.jplist_box,d.options);d.no_results_el=a.find(d.options.no_results);b(d);return e.extend(this,
d)};jQuery.fn.jplist.controller=function(b,d){var e=new c(b,d),i;a(e);e.options.cookies?(i=jQuery.fn.jplist.cookies.restore_cookies(e.options.cookie_name),0<i.length?e.jplist_box.trigger(e.options.restore_event,[i]):e.jplist_box.trigger(e.options.force_ask_event,[!0])):e.jplist_box.trigger(e.options.force_ask_event,[!0]);return e}})(jQuery);

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



/*********************************************
Wufoo form Embed JS (Job Alert Form)
*********************************************/
var q7x2m3;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'designdelux', 
'formHash':'q7x2m3', 
'autoResize':true,
'height':'500',
'async':true,
'header':'hide', 
'ssl':true};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { q7x2m3 = new WufooForm();q7x2m3.initialize(options);q7x2m3.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');



/*********************************************
Wufoo form Embed JS (Feedback Form)
*********************************************/
var z7x3z9;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'designdelux', 
'formHash':'z7x3z9', 
'autoResize':true,
'height':'605',
'async':true,
'header':'hide', 
'ssl':true};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { z7x3z9 = new WufooForm();z7x3z9.initialize(options);z7x3z9.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');







/*********************************************
jQuery ColorBox v1.3.34 - 2013-02-04
*********************************************/
(function(e,t,i){function o(i,o,n){var h=t.createElement(i);return o&&(h.id=V+o),n&&(h.style.cssText=n),e(h)}function n(e){var t=T.length,i=(N+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?C.width():C.height())/100:1)*parseInt(e,10))}function r(e){return P.photo||P.photoRegex.test(e)}function l(e){return P.retinaUrl&&i.devicePixelRatio>1?e.replace(P.photoRegex,P.retinaSuffix):e}function s(){var t,i=e.data(B,J);null==i?(P=e.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):P=e.extend({},i);for(t in P)e.isFunction(P[t])&&"on"!==t.slice(0,2)&&(P[t]=P[t].call(B));P.rel=P.rel||B.rel||e(B).data("rel")||"nofollow",P.href=P.href||e(B).attr("href"),P.title=P.title||B.title,"string"==typeof P.href&&(P.href=e.trim(P.href))}function a(i,o){e(t).trigger(i),st.trigger(i),e.isFunction(o)&&o.call(B)}function d(){var e,t,i,o,n,h=V+"Slideshow_",r="click."+V;P.slideshow&&T[1]?(t=function(){clearTimeout(e)},i=function(){(P.loop||T[N+1])&&(e=setTimeout($.next,P.slideshowSpeed))},o=function(){L.html(P.slideshowStop).unbind(r).one(r,n),st.bind(tt,i).bind(et,t).bind(it,n),m.removeClass(h+"off").addClass(h+"on")},n=function(){t(),st.unbind(tt,i).unbind(et,t).unbind(it,n),L.html(P.slideshowStart).unbind(r).one(r,function(){$.next(),o()}),m.removeClass(h+"on").addClass(h+"off")},P.slideshowAuto?o():n()):m.removeClass(h+"off "+h+"on")}function c(t){q||(B=t,s(),T=e(B),N=0,"nofollow"!==P.rel&&(T=e("."+Y).filter(function(){var t,i=e.data(this,J);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===P.rel}),N=T.index(B),-1===N&&(T=T.add(B),N=T.length-1)),O||(O=j=!0,m.css({visibility:"hidden",display:"block"}),k=o(at,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(g),_=x.height()+b.height()+g.outerHeight(!0)-g.height(),K=v.width()+y.width()+g.outerWidth(!0)-g.width(),z=k.outerHeight(!0),D=k.outerWidth(!0),P.returnFocus&&(e(B).blur(),st.one(ot,function(){e(B).focus()})),p.css({opacity:parseFloat(P.opacity),cursor:P.overlayClose?"pointer":"auto",visibility:"visible"}).show(),P.w=h(P.initialWidth,"x"),P.h=h(P.initialHeight,"y"),$.position(),rt&&C.bind("resize."+lt+" scroll."+lt,function(){p.css({width:C.width(),height:C.height(),top:C.scrollTop(),left:C.scrollLeft()})}).trigger("resize."+lt),d(),a(Z,P.onOpen),R.add(H).hide(),F.html(P.close).show()),$.load(!0))}function u(){!m&&t.body&&(Q=!1,C=e(i),m=o(at).attr({id:J,"class":ht?V+(rt?"IE6":"IE"):""}).hide(),p=o(at,"Overlay",rt?"position:absolute":"").hide(),W=o(at,"LoadingOverlay").add(o(at,"LoadingGraphic")),w=o(at,"Wrapper"),g=o(at,"Content").append(H=o(at,"Title"),E=o(at,"Current"),M=o(at,"Next"),S=o(at,"Previous"),L=o(at,"Slideshow"),F=o(at,"Close")),w.append(o(at).append(o(at,"TopLeft"),x=o(at,"TopCenter"),o(at,"TopRight")),o(at,!1,"clear:left").append(v=o(at,"MiddleLeft"),g,y=o(at,"MiddleRight")),o(at,!1,"clear:left").append(o(at,"BottomLeft"),b=o(at,"BottomCenter"),o(at,"BottomRight"))).find("div div").css({"float":"left"}),I=o(at,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),R=M.add(S).add(E).add(L),e(t.body).append(p,m.append(w,I)))}function f(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),c(this))}return m?(Q||(Q=!0,M.click(function(){$.next()}),S.click(function(){$.prev()}),F.click(function(){$.close()}),p.click(function(){P.overlayClose&&$.close()}),e(t).bind("keydown."+V,function(e){var t=e.keyCode;O&&P.escKey&&27===t&&(e.preventDefault(),$.close()),O&&P.arrowKey&&T[1]&&(37===t?(e.preventDefault(),S.click()):39===t&&(e.preventDefault(),M.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+V,"."+Y,i):e("."+Y).live("click."+V,i)),!0):!1}var p,m,w,g,x,v,y,b,T,C,k,I,W,H,E,L,M,S,F,R,P,_,K,z,D,B,N,A,O,j,q,U,$,G,Q,X={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},J="colorbox",V="cbox",Y=V+"Element",Z=V+"_open",et=V+"_load",tt=V+"_complete",it=V+"_cleanup",ot=V+"_closed",nt=V+"_purge",ht=!e.support.leadingWhitespace,rt=ht&&!i.XMLHttpRequest,lt=V+"_IE6",st=e({}),at="div";e.colorbox||(e(u),$=e.fn[J]=e[J]=function(t,i){var o=this;if(t=t||{},u(),f()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,J,e.extend({},e.data(this,J)||X,t))}).addClass(Y),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&c(o[0])}return o},$.position=function(e,t){function i(e){x[0].style.width=b[0].style.width=g[0].style.width=parseInt(e.style.width,10)-K+"px",g[0].style.height=v[0].style.height=y[0].style.height=parseInt(e.style.height,10)-_+"px"}var o,n,r,l=0,s=0,a=m.offset();C.unbind("resize."+V),m.css({top:-9e4,left:-9e4}),n=C.scrollTop(),r=C.scrollLeft(),P.fixed&&!rt?(a.top-=n,a.left-=r,m.css({position:"fixed"})):(l=n,s=r,m.css({position:"absolute"})),s+=P.right!==!1?Math.max(C.width()-P.w-D-K-h(P.right,"x"),0):P.left!==!1?h(P.left,"x"):Math.round(Math.max(C.width()-P.w-D-K,0)/2),l+=P.bottom!==!1?Math.max(C.height()-P.h-z-_-h(P.bottom,"y"),0):P.top!==!1?h(P.top,"y"):Math.round(Math.max(C.height()-P.h-z-_,0)/2),m.css({top:a.top,left:a.left,visibility:"visible"}),e=m.width()===P.w+D&&m.height()===P.h+z?0:e||0,w[0].style.width=w[0].style.height="9999px",o={width:P.w+D+K,height:P.h+z+_,top:l,left:s},0===e&&m.css(o),m.dequeue().animate(o,{duration:e,complete:function(){i(this),j=!1,w[0].style.width=P.w+D+K+"px",w[0].style.height=P.h+z+_+"px",P.reposition&&setTimeout(function(){C.bind("resize."+V,$.position)},1),t&&t()},step:function(){i(this)}})},$.resize=function(e){O&&(e=e||{},e.width&&(P.w=h(e.width,"x")-D-K),e.innerWidth&&(P.w=h(e.innerWidth,"x")),k.css({width:P.w}),e.height&&(P.h=h(e.height,"y")-z-_),e.innerHeight&&(P.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(k.css({height:"auto"}),P.h=k.height()),k.css({height:P.h}),$.position("none"===P.transition?0:P.speed))},$.prep=function(t){function i(){return P.w=P.w||k.width(),P.w=P.mw&&P.mw<P.w?P.mw:P.w,P.w}function h(){return P.h=P.h||k.height(),P.h=P.mh&&P.mh<P.h?P.mh:P.h,P.h}if(O){var l,s="none"===P.transition?0:P.speed;k.empty().remove(),k=o(at,"LoadedContent").append(t),k.hide().appendTo(I.show()).css({width:i(),overflow:P.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(g),I.hide(),e(A).css({"float":"none"}),l=function(){function t(){ht&&m[0].style.removeAttribute("filter")}var i,h,l=T.length,d="frameBorder",c="allowTransparency";O&&(h=function(){clearTimeout(U),W.remove(),a(tt,P.onComplete)},ht&&A&&k.fadeIn(100),H.html(P.title).add(k).show(),l>1?("string"==typeof P.current&&E.html(P.current.replace("{current}",N+1).replace("{total}",l)).show(),M[P.loop||l-1>N?"show":"hide"]().html(P.next),S[P.loop||N?"show":"hide"]().html(P.previous),P.slideshow&&L.show(),P.preloading&&e.each([n(-1),n(1)],function(){var t,i,o=T[this],n=e.data(o,J);n&&n.href?(t=n.href,e.isFunction(t)&&(t=t.call(o))):t=e(o).attr("href"),t&&(r(t)||n.photo)&&(i=new Image,i.src=t)})):R.hide(),P.iframe?(i=o("iframe")[0],d in i&&(i[d]=0),c in i&&(i[c]="true"),P.scrolling||(i.scrolling="no"),e(i).attr({src:P.href,name:(new Date).getTime(),"class":V+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(k),st.one(nt,function(){i.src="//about:blank"}),P.fastIframe&&e(i).trigger("load")):h(),"fade"===P.transition?m.fadeTo(s,1,t):t())},"fade"===P.transition?m.fadeTo(s,0,function(){$.position(0,l)}):$.position(s,l)}},$.load=function(t){var n,d,c,u=$.prep;j=!0,A=!1,B=T[N],t||s(),G&&m.add(p).removeClass(G),P.className&&m.add(p).addClass(P.className),G=P.className,a(nt),a(et,P.onLoad),P.h=P.height?h(P.height,"y")-z-_:P.innerHeight&&h(P.innerHeight,"y"),P.w=P.width?h(P.width,"x")-D-K:P.innerWidth&&h(P.innerWidth,"x"),P.mw=P.w,P.mh=P.h,P.maxWidth&&(P.mw=h(P.maxWidth,"x")-D-K,P.mw=P.w&&P.w<P.mw?P.w:P.mw),P.maxHeight&&(P.mh=h(P.maxHeight,"y")-z-_,P.mh=P.h&&P.h<P.mh?P.h:P.mh),n=P.href,U=setTimeout(function(){W.appendTo(g)},100),P.inline?(c=o(at).hide().insertBefore(e(n)[0]),st.one(nt,function(){c.replaceWith(k.children())}),u(e(n))):P.iframe?u(" "):P.html?u(P.html):r(n)?(n=l(n),e(A=new Image).addClass(V+"Photo").bind("error",function(){P.title=!1,u(o(at,"Error").html(P.imgError))}).one("load",function(){var e;P.retinaImage&&i.devicePixelRatio>1&&(A.height=A.height/i.devicePixelRatio,A.width=A.width/i.devicePixelRatio),P.scalePhotos&&(d=function(){A.height-=A.height*e,A.width-=A.width*e},P.mw&&A.width>P.mw&&(e=(A.width-P.mw)/A.width,d()),P.mh&&A.height>P.mh&&(e=(A.height-P.mh)/A.height,d())),P.h&&(A.style.marginTop=Math.max(P.mh-A.height,0)/2+"px"),T[1]&&(P.loop||T[N+1])&&(A.style.cursor="pointer",A.onclick=function(){$.next()}),ht&&(A.style.msInterpolationMode="bicubic"),setTimeout(function(){u(A)},1)}),setTimeout(function(){A.src=n},1)):n&&I.load(n,P.data,function(t,i){u("error"===i?o(at,"Error").html(P.xhrError):e(this).contents())})},$.next=function(){!j&&T[1]&&(P.loop||T[N+1])&&(N=n(1),$.load())},$.prev=function(){!j&&T[1]&&(P.loop||N)&&(N=n(-1),$.load())},$.close=function(){O&&!q&&(q=!0,O=!1,a(it,P.onCleanup),C.unbind("."+V+" ."+lt),p.fadeTo(200,0),m.stop().fadeTo(300,0,function(){m.add(p).css({opacity:1,cursor:"auto"}).hide(),a(nt),k.empty().remove(),setTimeout(function(){q=!1,a(ot,P.onClosed)},1)}))},$.remove=function(){e([]).add(m).add(p).remove(),m=null,e("."+Y).removeData(J).removeClass(Y),e(t).unbind("click."+V)},$.element=function(){return e(B)},$.settings=X)})(jQuery,document,window);





/*********************************************
ColorBox Job Alert Form Overlay Settings
*********************************************/
var __savedHeight = 0;
function resizeTheColorbox(height) {
  if (height > 0) {
    __savedHeight = new Number(height);
    var newHeight = __savedHeight + 50; // addition is the submit button offset

    $(".open-lightbox").colorbox.resize({
      height : newHeight
    });
    }
};
    $(function() {
      $(".open-lightbox").colorbox({
        "inline" : true,
        "href": "#job-alert iframe",
        "width": 600,
        "height": 620,
        "scrolling": false,
        "innerHeight": $("#job-alert iframe").height()   // Only deals with initial load
     });
   });
  $(document).bind('cbox_complete', function(){
  resizeTheColorbox(__savedHeight);
  });
  

/*********************************************
Feedback Form Settings
*********************************************/
$(".feedback-tab").click(function () {
    margin = +$('#feedback').css('margin-left').replace('px', '');
    if (margin < 0) {
        $('#feedback').animate({marginLeft: "0px"}, 200).addClass('feedback-shadow');
        $('.feedback-tab').attr('src', 'http://dsavlem5iobro.cloudfront.net/img/feedback-tab-in.png');
    } else {
        $('#feedback').animate({marginLeft: "-400px"}, 200).removeClass('feedback-shadow');
        $('.feedback-tab').attr('src', 'http://dsavlem5iobro.cloudfront.net/img/feedback-tab-out.png');
    }
});
			
			
			
			
