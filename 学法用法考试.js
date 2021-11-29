// ==UserScript==
// @name         一年一度学法考试
// @namespace    http://wzfz.0577oa.net/
// @version      0.1
// @description  try to take over the world!
// @author       mcz
// @match        http://wzfz.0577oa.net/*
// @icon         http://wzfz.0577oa.net/Images/logo.gif
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @grant        unsafeWindow
// @grant        GM_log
// @grant        GM_setClipboard
// @grant        GM_addStyle
// ==/UserScript==
var study_css = ".egg_study_btn{outline:0;border:0;position:fixed;top:5px;left:5px;padding:12px 20px;border-radius:10px;cursor:pointer;background-color:#fff;color:#d90609;font-size:18px;font-weight:bold;text-align:center;box-shadow:0 0 9px #666777}.egg_manual_btn{transition:0.5s;outline:none;border:none;padding:12px 20px;border-radius:10px;cursor:pointer;background-color:#e3484b;color:rgb(255,255,255);font-size:18px;font-weight:bold;text-align:center;}.egg_auto_btn{transition:0.5s;outline:none;border:none;padding:12px 20px;border-radius:10px;cursor:pointer;background-color:#666777;color:rgb(255,255,255);font-size:18px;font-weight:bold;text-align:center;}.egg_setting_box{position:fixed;top:70px;left:5px;padding:12px 20px;border-radius:10px;background-color:#fff;box-shadow:0 0 9px #666777}.egg_setting_item{margin-top:5px;height:30px;width:140px;font-size:16px;display:flex;justify-items:center;justify-content:space-between}input[type='checkbox'].egg_setting_switch{cursor:pointer;margin:0;outline:0;appearance:none;-webkit-appearance:none;-moz-appearance:none;position:relative;width:40px;height:22px;background:#ccc;border-radius:50px;transition:border-color .3s,background-color .3s}input[type='checkbox'].egg_setting_switch::after{content:'';display:inline-block;width:1rem;height:1rem;border-radius:50%;background:#fff;box-shadow:0,0,2px,#999;transition:.4s;top:3px;position:absolute;left:3px}input[type='checkbox'].egg_setting_switch:checked{background:#fd5052}input[type='checkbox'].egg_setting_switch:checked::after{content:'';position:absolute;left:55%;top:3px}";
GM_addStyle(study_css);
(function() {
    'use strict';
    // Your code here...

    document.addEventListener('selectstart', function(e) {
        //GM_log(e.target.data);
        GM_setClipboard(e.target.data);
        $("textarea#zizhuPopupMainInput").val(e.target.data);
    }, false);

    GM_addStyle(`#zizhuPopupMain { position: fixed; z-index: 999; right: 0; bottom: 20px; background: #fff; }
                #zizhuPopupMain-hd { font-size: 14px; line-height: 30px; overflow: hidden; box-sizing: border-box; height: 30px; padding: 0 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis; color: #fff; background: #4d90fe; }
                #zizhuPopupMain-hd svg { display: none; margin-top: 2px; }
                #zizhuPopupMain-bd { box-sizing: border-box; height: 160px; padding: 10px; border: 1px solid #ccc; }
                #zizhuPopupMainInput { display: inline-block; box-sizing: border-box; width: 210px; height: 140px; padding: 0 10px; border: 1px solid #ccc; outline: none; }
                #zizhuPopupMainBtn { font-size: 13px; line-height: 39px; display: inline-block; width: 60px; height: 40px; margin-left: -5px; text-align: center; text-decoration: none; color: #fff; background: #4d90fe; }
                .zizhuPopupMainSmallHead { width: 32px; }
                .zizhuPopupMainSmallHead  #zizhuPopupMain-hd { padding: 0 4px; box-shadow: 1px 2px 3px rgba(12, 12, 12, .3); }
                .zizhuPopupMainSmallHead  #zizhuPopupMain-hd span { display: none; }
                .zizhuPopupMainSmallHead  #zizhuPopupMain-hd svg { display: block; }`)
    // 添加内容
    var smallCnt = `<div id="zizhuPopupMain">
		<div id="zizhuPopupMain-hd">
			<span>输入框</span>
			<svg t="1542846569380" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"  width="24" height="24"><defs><style type="text/css"></style></defs><path d="M215.51289 370.94645c2.566452 1.534959 5.383614 2.25332 8.16803 2.25332 5.476735 0 10.796904-2.800789 13.802354-7.839549 45.552475-76.69373 129.193431-124.343983 218.281445-124.343983 8.856715 0 16.023952-7.166213 16.023952-16.023952s-7.167237-16.023952-16.023952-16.023952c-100.338243 0-194.541765 53.658084-245.838058 140.022057C205.404672 356.596627 207.907679 366.440833 215.51289 370.94645z" p-id="1926" fill="#ffffff"></path><path d="M196.751594 417.501766c-8.607028-1.987261-17.229406 3.332908-19.24839 11.955286-4.78805 20.451798-7.495718 33.127492-7.495718 55.879682 0 8.856715 7.182586 16.023952 16.023952 16.023952 8.857738 0 16.024975-7.167237 16.024975-16.023952 0-19.309788 2.159176-29.387307 6.650467-48.588625C210.724841 428.125731 205.372949 419.519726 196.751594 417.501766z" p-id="1927" fill="#ffffff"></path><path d="M947.204451 876.167047 784.053628 713.013153c-0.441045-0.442068-0.893346-0.86367-1.351787-1.272993 41.450041-62.197574 65.652256-136.821155 65.652256-217.013569 0-216.480426-176.10895-392.589376-392.588353-392.589376-216.4661 0-392.589376 176.10895-392.589376 392.589376 0 216.47224 176.123276 392.58119 392.589376 392.58119 78.758762 0 152.117536-23.378453 213.647915-63.470567l-46.695508-46.694485c-49.01125 29.074176-105.971543 46.069245-166.952406 46.069245-181.131337 0-328.493569-147.343813-328.493569-328.48436 0-181.131337 147.361209-328.493569 328.493569-328.493569 181.130314 0 328.493569 147.362232 328.493569 328.493569 0 85.36932-33.002648 162.956396-86.567611 221.433228l36.58422 36.585243c1.251503 1.983167 2.732228 3.860934 4.459568 5.588275l163.15287 163.151847c6.259564 6.259564 14.459317 9.389858 22.659069 9.389858s16.415878-3.130294 22.659069-9.389858C959.724603 908.980383 959.724603 888.684128 947.204451 876.167047z" p-id="1928" fill="#ffffff"></path></svg>
		</div>
		<div id="zizhuPopupMain-bd">
			<textarea type="text" name="" placeholder="点击标题后看这里" id="zizhuPopupMainInput" ></textarea>
		</div>`
    // 添加到 body
    var odom = document.createElement("div");
    odom.id = "zizhuPopupMain";
    odom.innerHTML = smallCnt;
    document.body.appendChild(odom);

})();
