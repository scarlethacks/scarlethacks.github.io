!function t(e,i,o){function n(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var m=i[r]={exports:{}};e[r][0].call(m.exports,function(t){var i=e[r][1][t];return n(i||t)},m,m.exports,t,e,i,o)}return i[r].exports}for(var a="function"==typeof require&&require,r=0;r<o.length;r++)n(o[r]);return n}({1:[function(t,e,i){"use strict";function o(t,e){t.setAttribute("glitch",e)}function n(t,e){o(t,!1),setTimeout(function(){o(t,!0),setTimeout(function(){n(t,e)},500)},(e[1]-e[0])*Math.random()+e[0])}var a=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(a=!0);var r=document.getElementById("scene-source"),s=document.getElementById("subtitle");if(a)s.innerText="";else{r.innerHTML='<a-scene style="display: none;" id="scene" antialias="false" effects=" colors, outline.sobel?, bloom, film,  godrays, glitch,  fxaa" film="sIntensity: 0.03; nIntensity: 0.2"  outline="enabled: false; width: 1.33 1.33; range: 0 10; strength: 3; smooth: true;"  colors="mode:hqprtom; mul: 0.66 0.5 0.66; pow: 1 1.33 1.66; quant: 0.3 0.3 0.1; orig: 0.33 0.66 0.66" bloom="filter: bloom!, bloom.filter, #customFilter(bloom_texture 0.3 0.6 0.5); strength: 0.5; radius:1.2" fxaa="true" godrays="src: #sun; threshold: 0. 0.33; intensity: 2" glitch="true" embedded="true">\n\t<a-assets>\n\t\t<a-asset-item id="mtl-crown" src="./public/obj/c3.mtl"></a-asset-item>\n\t\t<a-asset-item id="obj-crown" src="./public/obj/CrownHall1.obj"></a-asset-item>\n\t</a-assets>\n\t<a-light id="light" type="ambient" color="#FC4120"></a-entity>--\x3e\n\t<a-entity id="sun" position="0 3 35" rotation="0 0 0" camera universal-controls>\n\t\t<a-animation attribute="position" dur="5000" easing="linear" to="0 12 50"></a-animation>\n\t\t<a-animation attribute="rotation" dur="5000" easing="linear" to="-10 0 0"></a-animation>\n\t</a-entity>\n\t<a-entity obj-model="obj: #obj-crown; mtl: #mtl-crown;" position="0 5 0" scale="0.01 0.01 0.01"></a-entity>\n\t<a-plane position="0 -10 0" rotation="-90 0 0" width="400" height="400" color="#444444"></a-plane>\n\t<a-sky id="sky" color="#FC4120"></a-sky>\n</a-scene>\'';var l=document.getElementById("scene");l.addEventListener("loaded",function(){a||(l.style.display="block",n(l,[3e3,7e3]))}),l.addEventListener("click",function(t){s.innerText="Use arrow keys to move and cursor to look. To visit the application, hold G."});var c=1/0;window.addEventListener("keypress",function(t){if(103===(t.keyCode||t.which)){var e=Date.now();e<c&&(c=e),e-c>=1e3&&(window.location="./apply.html")}})}},{}]},{},[1]);
//# sourceMappingURL=maps/landing.js.map
