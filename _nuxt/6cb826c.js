(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,4,5],{373:function(t,n,e){t.exports=e.p+"img/mainlogo.fadb36e.png"},374:function(t,n,e){"use strict";e.r(n);e(2),e(1);var l={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(n){console.log(n.data),t.menus=n.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},o=e(78),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("nav",{staticClass:"navbar_main_f"},[l("div",{staticClass:"navbar_top"},[l("div",{staticClass:"container"},[l("div",{staticClass:"navbar_main"},[l("div",[l("NuxtLink",{staticClass:"navbar_brand",attrs:{to:t.localePath("/")}},[l("img",{attrs:{src:e(373),alt:""}}),t._v(" "),l("div",[t._v(" "+t._s(t.$t("title")))])])],1),t._v(" "),l("div",{staticClass:"navbar_plugin"},[l("div",{staticClass:"show_call "},[l("a",{staticClass:"none_direction",attrs:{href:"tel:998998442147"}},[l("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M17.3082 16.2743C17.3082 16.5743 17.2415 16.8827 17.0998 17.1827C16.9582 17.4827 16.7748 17.766 16.5332 18.0327C16.1248 18.4827 15.6748 18.8077 15.1665 19.016C14.6665 19.2244 14.1248 19.3327 13.5415 19.3327C12.6915 19.3327 11.7832 19.1327 10.8248 18.7244C9.8665 18.316 8.90817 17.766 7.95817 17.0744C6.99984 16.3744 6.0915 15.5993 5.22484 14.741C4.3665 13.8743 3.5915 12.966 2.89984 12.016C2.2165 11.066 1.6665 10.116 1.2665 9.17435C0.866504 8.22435 0.666504 7.31602 0.666504 6.44935C0.666504 5.88268 0.766504 5.34102 0.966504 4.84102C1.1665 4.33268 1.48317 3.86602 1.92484 3.44935C2.45817 2.92435 3.0415 2.66602 3.65817 2.66602C3.8915 2.66602 4.12484 2.71602 4.33317 2.81602C4.54984 2.91602 4.7415 3.06602 4.8915 3.28268L6.82484 6.00768C6.97484 6.21602 7.08317 6.40768 7.15817 6.59102C7.23317 6.76602 7.27484 6.94102 7.27484 7.09935C7.27484 7.29935 7.2165 7.49935 7.09984 7.69102C6.9915 7.88268 6.83317 8.08268 6.63317 8.28268L5.99984 8.94102C5.90817 9.03268 5.8665 9.14102 5.8665 9.27435C5.8665 9.34102 5.87484 9.39935 5.8915 9.46602C5.9165 9.53268 5.9415 9.58268 5.95817 9.63268C6.10817 9.90768 6.3665 10.266 6.73317 10.6993C7.10817 11.1327 7.50817 11.5743 7.9415 12.016C8.3915 12.4577 8.82484 12.866 9.2665 13.241C9.69984 13.6077 10.0582 13.8577 10.3415 14.0077C10.3832 14.0243 10.4332 14.0493 10.4915 14.0743C10.5582 14.0993 10.6248 14.1077 10.6998 14.1077C10.8415 14.1077 10.9498 14.0577 11.0415 13.966L11.6748 13.341C11.8832 13.1327 12.0832 12.9743 12.2748 12.8743C12.4665 12.7577 12.6582 12.6993 12.8665 12.6993C13.0248 12.6993 13.1915 12.7327 13.3748 12.8077C13.5582 12.8827 13.7498 12.991 13.9582 13.1327L16.7165 15.091C16.9332 15.241 17.0832 15.416 17.1748 15.6243C17.2582 15.8327 17.3082 16.041 17.3082 16.2743Z",stroke:"#0034B9","stroke-width":"1.2","stroke-miterlimit":"10"}}),t._v(" "),l("path",{attrs:{d:"M14.4167 8.4987C14.4167 7.9987 14.025 7.23203 13.4417 6.60703C12.9083 6.03203 12.2 5.58203 11.5 5.58203",stroke:"#0034B9","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),l("path",{attrs:{d:"M17.3333 8.49935C17.3333 5.27435 14.725 2.66602 11.5 2.66602",stroke:"#0034B9","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v("\n\n              +998712000118\n            ")])])])])])]),t._v(" "),l("div",{staticClass:"navbar_bottom"},[l("div",{staticClass:"container"},[l("div",{staticClass:"navbar_bottom_f"},[l("ul",{staticClass:"navbar_nav"},t._l(t.menus,(function(n,e){return l("li",{key:e,staticClass:"nav-item"},[l("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+n.link)}},[t._v(t._s(n.title))])],1)})),0),t._v(" "),l("ul",{staticClass:"navbar_nav"},[l("li",{staticClass:"nav-item lang"},[l("div",[l("div",{staticClass:"main_language"},[l("button",{on:{click:function(n){t.isActive=!t.isActive}}},[l("svg",{attrs:{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.25225 13.75C11.2549 13.75 14.4996 10.7279 14.4996 7C14.4996 3.27208 11.2549 0.25 7.25225 0.25C3.24964 0.25 0.00488281 3.27208 0.00488281 7C0.00488281 10.7279 3.24964 13.75 7.25225 13.75ZM9.51142 11.8114C11.3774 11.0502 12.7158 9.37499 12.8735 7.39374C12.2108 7.73038 11.3752 8.00636 10.4227 8.19847C10.3028 9.60074 9.97622 10.8528 9.51142 11.8114ZM4.99308 2.18865C3.42503 2.82824 2.22962 4.1133 1.79424 5.68301C1.98076 5.84783 2.29838 6.05054 2.78169 6.25061C3.14311 6.40021 3.56457 6.53483 4.03552 6.64731C4.07833 4.90436 4.43664 3.33617 4.99308 2.18865ZM5.72273 8.43307C5.84893 9.52562 6.11295 10.4651 6.44634 11.1638C6.68312 11.66 6.92335 11.9686 7.10875 12.133C7.17468 12.1914 7.22241 12.2226 7.25225 12.2386C7.28209 12.2226 7.32982 12.1914 7.39576 12.133C7.58116 11.9686 7.82138 11.66 8.05816 11.1638C8.39155 10.4651 8.65558 9.52562 8.78177 8.43307C8.28869 8.47692 7.77699 8.5 7.25226 8.5C6.72752 8.5 6.21581 8.47692 5.72273 8.43307ZM4.08182 8.19847C4.20172 9.60073 4.52828 10.8528 4.99309 11.8114C3.12705 11.0502 1.78874 9.37499 1.63102 7.39373C2.29369 7.73037 3.12931 8.00636 4.08182 8.19847ZM8.86251 6.9172C8.35469 6.97065 7.81534 7 7.25226 7C6.68917 7 6.14982 6.97065 5.64199 6.9172C5.65257 5.24806 5.98225 3.80878 6.44634 2.83624C6.68312 2.34005 6.92335 2.03137 7.10875 1.86704C7.17469 1.80859 7.22241 1.77744 7.25225 1.76137C7.28209 1.77744 7.32982 1.80859 7.39576 1.86704C7.58116 2.03137 7.82138 2.34005 8.05816 2.83624C8.52225 3.80878 8.85193 5.24806 8.86251 6.9172ZM10.469 6.64731C10.4262 4.90437 10.0679 3.33617 9.51142 2.18865C11.0795 2.82824 12.2749 4.1133 12.7103 5.68301C12.5237 5.84784 12.2061 6.05055 11.7228 6.25061C11.3614 6.40022 10.9399 6.53483 10.469 6.64731Z",fill:"white"}})]),t._v(" "),"uz"==t.$i18n.locale?l("span",[t._v("Uz")]):t._e(),t._v(" "),"ru"==t.$i18n.locale?l("span",[t._v("Ру")]):t._e(),t._v(" "),"en"==t.$i18n.locale?l("span",[t._v("Eng")]):t._e()]),t._v(" "),t.isActive?l("div",[l("div",{staticClass:"lang_menu"},[l("div",{staticClass:"list_lang"},t._l(t.availableLocales,(function(n){return l("div",{key:n.code},[l("NuxtLink",{attrs:{to:t.switchLocalePath(n.code)}},[t._v(t._s(n.name))])],1)})),0)])]):t._e()])])]),t._v(" "),l("li",{staticClass:"nav_item order_tike "},[l("NuxtLink",{attrs:{to:"/visit"}},[t._v(t._s(t.$t("visits")))])],1)])])])])])}),[],!1,null,null,null);n.default=component.exports},375:function(t,n,e){"use strict";e.r(n);e(2),e(1);var l={data:function(){return{isActive:!1,menus:[],change_bg:{left:"7px",transition:".3s"}}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(n){console.log(n.data),t.menus=n.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},o=e(78),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("header",[l("div",{staticClass:"phone_menu",class:{show_menu:t.isActive}},[l("div",{staticClass:"container"},[l("div",{staticClass:"mobi_menu"},[l("div",{staticClass:"navbar_logo"}),t._v(" "),l("div",{staticClass:"navbar_menu"},[l("div",{staticClass:"hamburger"},[l("svg",{staticClass:"ham hamRotate ham1",class:{active:t.isActive},attrs:{viewBox:"0 0 100 100",width:"50"},on:{click:function(n){t.isActive=!t.isActive}}},[l("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),t._v(" "),l("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),t._v(" "),l("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])]),t._v(" "),l("div",{staticClass:"lang_group_f"},[l("div",{staticClass:"lang_groups"},[l("NuxtLink",{staticClass:"ml-3",attrs:{to:t.switchLocalePath("uz")}},[t._v("O’zbekcha")]),t._v(" "),l("NuxtLink",{attrs:{to:t.switchLocalePath("ru")}},[t._v("Русский")]),t._v(" "),l("NuxtLink",{staticClass:"mr-3",attrs:{to:t.switchLocalePath("en")}},[t._v("English")])],1)]),t._v(" "),t._l(t.menus,(function(n,e){return l("div",{key:e,staticClass:"main_links"},[l("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+n.link)}},[t._v(t._s(n.title))])],1)})),t._v(" "),l("div",{staticClass:"nav_item order_tike mt-4"},[l("NuxtLink",{attrs:{to:"/visit"}},[t._v(t._s(t.$t("visits")))])],1)],2)]),t._v(" "),l("div",{staticClass:"mobi_menu"},[l("div",{staticClass:"navbar_logo"},[l("img",{attrs:{src:e(373),alt:""}}),t._v(" "),l("div",[t._v(t._s(t.$t("title")))])]),t._v(" "),l("div",{staticClass:"navbar_menu"},[l("div",{staticClass:"hamburger"},[l("svg",{staticClass:"ham hamRotate ham1",class:{active:t.isActive},attrs:{viewBox:"0 0 100 100",width:"50"},on:{click:function(n){t.isActive=!t.isActive}}},[l("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),t._v(" "),l("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),t._v(" "),l("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])])])}),[],!1,null,null,null);n.default=component.exports},376:function(t,n,e){"use strict";e.r(n);e(2),e(1);var l={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(n){console.log(n.data),t.menus=n.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},o=e(78),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("footer",{staticClass:"phone_footer"},[l("div",{staticClass:"container"},[l("div",{staticClass:"logo_phonefooter"},[l("img",{attrs:{src:e(373),alt:""}}),t._v(" "),l("div",[t._v(t._s(t.$t("title")))])])])])}),[],!1,null,null,null);n.default=component.exports},377:function(t,n,e){"use strict";e.r(n);e(2),e(1);var l={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(n){console.log(n.data),t.menus=n.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},o=e(78),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("footer",{staticClass:"desktop_footer"},[l("div",{staticClass:"container"},[l("div",{staticClass:"footer_desktop"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-3"},[l("div",{staticClass:"footer_logo"},[l("img",{attrs:{src:e(373),alt:""}}),t._v(" "),l("div",[t._v(t._s(t.$t("title")))])])]),t._v(" "),t._l(t.menus,(function(n,e){return l("div",{key:e,staticClass:"col-xl-1.5 ml-5"},[l("div",{staticClass:"footer_name"},[t._v("\n           "+t._s(n.title)+"\n         ")]),t._v(" "),l("div",{staticClass:"footer_link"},[l("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+n.link)}},[t._v(t._s(n.title))])],1)])}))],2)])])])}),[],!1,null,null,null);n.default=component.exports},379:function(t,n,e){t.exports=e.p+"img/logo.2df0868.png"},409:function(t,n,e){"use strict";e.r(n);var l=e(374),o=e(375),c=e(376),r={components:{Footer:e(377).default,PhoneFooter:c.default,PhoneMenu:o.default,Navbar:l.default}},v=e(78),component=Object(v.a)(r,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",[l("Navbar"),t._v(" "),l("div",{staticClass:"container"},[l("PhoneMenu")],1),t._v(" "),l("section",{staticClass:"management"},[l("div",{staticClass:"container"},[l("h1",[t._v("Руководство")]),t._v(" "),l("div",{staticClass:"row"},t._l(4,(function(n){return l("div",{staticClass:"col-12 col-xl-3"},[l("div",[l("NuxtLink",{staticClass:"none_direction",attrs:{to:"/"}},[l("div",{staticClass:"main_blog_card"},[l("div",{staticClass:"blog_header"},[l("div",{staticClass:"blog_name"},[l("img",{attrs:{src:e(379),alt:""}})]),t._v(" "),l("div",[l("div",{staticClass:"blog_header_title"},[t._v("\n                     Mavlonova Madin Mirzahmevovna\n                   ")]),t._v(" "),l("div",{staticClass:"blog_leader"},[t._v("\n                     Директор музейа\n                   ")])])]),t._v(" "),l("div",{staticClass:"blog_desc"},[l("div",{staticClass:"management_data"},[l("div",{staticClass:"data_main"},[l("div",[l("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M8.60611 13.3651C9.50611 14.2281 10.5611 14.9301 11.7271 15.4281L12.2461 15.6491L13.8411 14.0291C14.2371 13.6271 14.8101 13.4531 15.3631 13.5691L19.2271 14.3781C19.8811 14.5171 20.3481 15.0941 20.3481 15.7621V18.5441C20.3481 19.5391 19.5421 20.3451 18.5471 20.3451H17.6921C13.7581 20.3451 9.87611 19.0421 6.94011 16.4241C6.69811 16.2091 6.46311 15.9861 6.23411 15.7581L6.27111 15.7951C6.04211 15.5661 5.82011 15.3311 5.60511 15.0891C2.98611 12.1541 1.68311 8.27213 1.68311 4.33813V3.48313C1.68311 2.48813 2.48911 1.68213 3.48411 1.68213H6.26611C6.93411 1.68213 7.51111 2.14913 7.6501 2.80313L8.46011 6.66713C8.57511 7.21913 8.40211 7.79313 8.00011 8.18913L6.38011 9.78413L6.60111 10.3031C7.09911 11.4681 7.74211 12.4651 8.60611 13.3651Z",stroke:"#B3B3B3","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v("\n                      +998 71 123-45-67\n                    ")]),t._v(" "),l("div",{staticClass:"data_main"},[l("div",[l("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M15 6.99997V11C15 12.473 16.194 13.667 17.667 13.667C19.14 13.667 20.334 12.473 20.334 11V11.001C20.334 5.84597 16.155 1.66797 11.001 1.66797C5.84697 1.66797 1.66797 5.84697 1.66797 11.001C1.66797 16.155 5.84497 20.335 11 20.335C13.577 20.335 15.911 19.29 17.6 17.601M15 11.001C15 13.2101 13.2091 15.001 11 15.001C8.79083 15.001 6.99997 13.2101 6.99997 11.001C6.99997 8.79183 8.79083 7.00097 11 7.00097C13.2091 7.00097 15 8.79183 15 11.001Z",stroke:"#B3B3B3","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v("\n                      nurulloyev@gmail.com\n                    ")]),t._v(" "),l("div",{staticClass:"data_main"},[l("div",[l("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M12 8.13598V11.999L14.667 13.239M19.998 11.999C19.998 16.4161 16.4171 19.997 12 19.997C7.58278 19.997 4.00195 16.4161 4.00195 11.999C4.00195 7.5818 7.58278 4.00098 12 4.00098C16.4171 4.00098 19.998 7.5818 19.998 11.999Z",stroke:"#B3B3B3","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v("\n                      ПН - ПТ с 11:00 по 16:00\n                      (перерыв на обед с 13:00 по  14:00)\n                    ")]),t._v(" "),l("div",{staticClass:"management_link"},[l("NuxtLink",{attrs:{to:"/"}},[t._v("Подробнее")])],1)])])])])],1)])})),0)])]),t._v(" "),l("PhoneFooter"),t._v(" "),l("Footer")],1)}),[],!1,null,null,null);n.default=component.exports}}]);