/*!
 * fullpage.js Fading Effect Extension 0.0.9 for fullPage.js v3
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distribute.
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
window.fp_fadingEffectExtension=function(){var n,o,l,a,e=this,r=fp_utils,s=fp_utils.$,t=fullpage_api.getFullpageData(),c=t.options,f=t.internals,i=c.scrollingSpeed,d=".fullpage-wrapper",u=".active",p=".fp-section",m=p+u,v=".fp-slide",g=".fp-slidesContainer",w=v+u,E="fp-fading-animations",h="#"+E,y="fp-fading-sheet",S="#"+y;function T(e){e.detail?(a=!1,H()):(a=l.autoScrolling,C())}function O(){var e;(e=s(d)[0]).addEventListener("afterResponsive",T),e.addEventListener("destroy",H);var t=c.scrollOverflowHandler;c.scrollOverflowHandler=null,l=r.deepExtend({},c),a=l.autoScrolling,c.scrollOverflowHandler=t,l.scrollOverflowHandler=t,a=l.autoScrolling,c.scrollBar=!1,_("sections")&&fullpage_api.setAutoScrolling(!0);var n=_("slides")?B(v):"",i=_("sections")?B(p):"";c.fadingEffect&&b(y,i+n),f.removeAnimation(s(g)),clearTimeout(o),o=setTimeout(x,300)}function _(e){return!0===c.fadingEffect||c.fadingEffect===e}function b(e,t){if(!s("#"+e).length){var n=document.head||document.getElementsByTagName("head")[0];r.appendTo((i=e,o=t,(l=document.createElement("style")).type="text/css",l.id=i,l.styleSheet?l.styleSheet.cssText=o:l.appendChild(document.createTextNode(o)),l),n)}var i,o,l}function x(){n="all "+i+"ms "+c.easingcss3;var e=_("slides")?A(v):"",t=_("sections")?A(p):"";b(E,e+t)}function A(e){return e+"{-webkit-transition: "+n+";transition: "+n+";}"}function B(e){return(e===v?".fp-slidesContainer {width: 100% !important;transform: none!important;}":"")+e+"{width: 100% !important;position: absolute !important;left: 0;top: 0;visibility: hidden;opacity: 0;}"+e+".active{visibility: visible;opacity: 1;}"}function H(){if(r.remove(s(h)),L()){var e=s(w,s(m)[0])[0],t=s(g,s(m)[0]);f.removeAnimation(t),r.remove(s(S)),c.scrollBar=l.scrollBar,fullpage_api.setAutoScrolling(a),null!=e&&f.silentLandscapeScroll(e)}}function L(){return s(S).length}function C(){c.fadingEffect=!0,L()||(O(),window.scrollTo(0,0),f.silentScroll(0))}e.update=function(e){r.remove(s(h)),i=e,x()},e.turnOn=C,e.turnOff=H,e.apply=O,e.c=f.c;var N=e["common".charAt(0)];return"complete"===document.readyState&&N("fadingEffect"),window.addEventListener("load",function(){N("fadingEffect")}),e};