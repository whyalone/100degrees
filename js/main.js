window.onload = function() {
	var aHeader_li = document.getElementById('header').getElementsByTagName('li');
	var aTap_li = document.getElementById('tap').getElementsByTagName('li');
	var aInput_text = document.getElementsByTagName('input');
	var oUp_triangle = document.getElementById('up_triangle');
	var oDown_triangle = document.getElementById('down_triangle');
	var oUpdate_username = document.getElementById('username');
	var oUpdate_time = document.getElementById('time');
	var oUpdate_text = document.getElementById('upgread_text');
	var aHot_shop_tap_li = document.getElementById('hot_shop_tap').getElementsByTagName('li');
	var aMap_tap_li = document.getElementById('map_tap').getElementsByTagName('li');
	var aLife_style_li = document.getElementsByClassName('list_tab')[0].getElementsByTagName('li');
	var aCoupons_li = document.getElementsByClassName('list_tab')[1].getElementsByTagName('li');
	var aBbs_list_li = document.getElementById('bbs_list').getElementsByTagName('li');
	var aRecommend_tab_pic_li = document.getElementById('recommend_tab_pic').getElementsByTagName('li');
	var oRecommend_tab_show = document.getElementById('recommend_tab_show');
	var aMap_button_li = document.getElementById('map_button').getElementsByTagName('li');
	var oMap_pic = document.getElementById('map_pic');
	var oDaily_promotion_title_date = document.getElementById('daily_promotion_title').getElementsByTagName('div')[0];
	var aDaily_promotion_today_title_date = document.getElementById('daily_promotion_today_title').getElementsByTagName('span');
	var aTD = document.getElementsByTagName('table')[0].getElementsByTagName('td');
	var aDaily_promotion_cal_message = document.getElementsByClassName('daily_promotion_cal_message');

	var aUpadte_text = [{
		'username': '萱萱',
		'time': '5分钟前',
		'text': '那些灿烂华美的瞬间爆炸'
	}, {
		'username': 'why',
		'time': '10分钟前',
		'text': '秦王绕柱走'
	}, {
		'username': '渣渣',
		'time': '15分钟前',
		'text': '你的野区我养猪'
	}, {
		'username': '小猪',
		'time': '30分钟前',
		'text': '我就是那头猪'
	}, {
		'username': '阿狗',
		'time': '45分钟前',
		'text': '我是看猪的狗'
	}]

	var aDaily_data = [{
		'title': '本日主题温度是多少',
		'time': '1201',
		'text': '新华社北京12月27日电（记者白国龙、胡喆）国务院新闻办',
		'bgu': 'img/PROMOTION_PIC/0724.png',
		'day': 'THU'
	}, {
		'title': '估计快了的气氛',
		'time': '1230',
		'text': '白皮书约1111111字，除前言、结束语外共包括五个部分，',
		'bgu': 'img/PROMOTION_PIC/0724.png',
		'day': 'FRI'
	}, {
		'title': '萨达的萨达十大',
		'time': '1205',
		'text': '白皮书说，航天是当今世界最具挑战性和广泛带动性的高科技领域之一',
		'bgu': 'img/PROMOTION_PIC/0724.png',
		'day': 'MON'
	}, {
		'title': '俄日肯定会VC以太网',
		'time': '1216',
		'text': '为人类社会进步提供了重要动力。中国政府把发展航天事业作为',
		'bgu': 'img/PROMOTION_PIC/0721.png',
		'day': 'FRI'
	}, {
		'title': '去IP十多个哈市',
		'date': '1227',
		'text': '白皮书指出，2011年以来，中国航天事业持续快速发展，自',
		'bgu': 'img/PROMOTION_PIC/0724.png',
		'day': 'FRI'
	}, ]

	var myDate = new Date();
	oDaily_promotion_title_date.innerHTML = myDate.getFullYear() + '.' + myDate.getMonth();
	aDaily_promotion_today_title_date[0].innerHTML = myDate.getMonth();
	aDaily_promotion_today_title_date[1].innerHTML = myDate.getDate();

	var num = myDate.getDay() - (myDate.getDate() % 7)
	var month = myDate.getMonth() + 1;
	var monthPrv = myDate.getMonth();
	var monthNext = myDate.getMonth() + 2;
	var month_day_now = get_day_num(month);
	var month_day_prv = get_day_num(monthPrv);
	var timer = null;
	var j = 1;
	var p = 1;
	var d = month_day_prv;
	var hasDaily = [];
	var today = '';
	
	
	if(num < 0) {
		num = 7 + num //3
	}
	if(monthNext > 12) {
		monthNext = 1;
	}
	for(var i = num - 1; i > -1; i--) {
		var str = d;
		var str0 = monthPrv;
		if(str < 10) {
			str = '0' + str;
		}
		if(str0 < 10) {
			str0 = '0' + str0;
		}
		aTD[i]._daily_data = str0 + '' + str;
		aTD[i].innerHTML = '<div style="with=40px;height=40px">' + d + '</div>';
		aTD[i].style.background = "#f8f8f8";
		d--;
	} //初始化上个月的td

	for(var i = num; i < month_day_now + num; i++) {
		var str = j;
		var str0 = month;
		if(str < 10) {
			str = '0' + str;
		}
		if(str0 < 10) {
			str0 = '0' + str0;
		}
		if(parseInt(str)==myDate.getDate()&&parseInt(str0)==myDate.getMonth()+1){
			today = '<img class="daily_promotion_cal_inner_border" src="img/td_img.png" />'
		} else {
			today = '';
		}
		aTD[i]._daily_data = str0 + '' + str;
		aTD[i].innerHTML = today +'<div style="with=40px;height=40px">' + j + '</div>';
		j++;
	} //初始化这个月的td+为这个月的td添加_daily_data属性

	for(var i = month_day_now + num; i < aTD.length; i++) {
		var str = p;
		var str0 = monthNext;
		if(str < 10) {
			str = '0' + str;
		}
		if(str0 < 10) {
			str0 = '0' + str0;
		}
		aTD[i]._daily_data = str0 + '' + str;
		aTD[i].innerHTML = '<div style="with=40px;height=40px">' + p + '</div>';
		aTD[i].style.background = "#f8f8f8";
		p++;
	} //初始化下个月的td

	for(var i = 0; i < aTD.length; i++) {
		for(var j = 0; j < aDaily_data.length; j++) {
			if(aDaily_data[j].time == aTD[i]._daily_data) {
				aTD[i].style.background = 'url(' + aDaily_data[j].bgu + ')';
				aTD[i].style.backgroundSize = '38px 38px';
				aTD[i]._index = j;
				hasDaily.push(aTD[i]);
			}
		}
	}

	for(var i = 0; i < hasDaily.length; i++) {
		hasDaily[i].innerHTML = hasDaily[i].innerHTML + '<div class="daily_promotion_cal_message clear"><img class="daily_promotion_cal_trangle" src="img/trangle.png" /><img src=' + aDaily_data[hasDaily[i]._index].bgu + ' class="daily_promotion_cal_this" /><span>' + aDaily_data[hasDaily[i]._index].day + '</span><p>' + aDaily_data[hasDaily[i]._index].title + '</p><div><p class="daily_promotion_cal_this_text">' + aDaily_data[hasDaily[i]._index].text + '</p><a herf="#"></a></div></div>';

		hasDaily[i].getElementsByTagName('div')[0].onmouseover = function() {
			for(var j = 0; j < aDaily_promotion_cal_message.length; j++){
				aDaily_promotion_cal_message[j].style.display = 'none';
			}
			this.nextSibling.style.display = 'block';
		}

		hasDaily[i].getElementsByTagName('div')[0].onmouseout = function() {
			//			clearTimeout;
			var that = this;
			timer = setTimeout(function() {
				that.nextSibling.style.display = 'none';
			}, 1000);

		}
	}
	
		for(var i = 0; i < aDaily_promotion_cal_message.length; i++){
			aDaily_promotion_cal_message[i].onmouseover=function(){
				clearInterval(timer);
				this.style.display = 'block';
			}
			aDaily_promotion_cal_message[i].onmouseout=function(){
				this.style.display = 'none';
			}
		}

	function get_day_num(month) {
		if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
			return 31;
		} else if(month == 4 || month == 6 || month == 9 || month == 11) {
			return 30;
		} else if(month == 2) {
			if(myDate.getFullYear() % 4 == 0) {
				return 29;
			} else {
				return 28;
			}
		}
	}

	for(var i = 0; i < aMap_button_li.length; i++) {
		aMap_button_li[i].index = aMap_button_li[i].getElementsByTagName('span')[0].innerHTML;
		aMap_button_li[i].onclick = function() {
			for(var j = 0; j < aMap_button_li.length; j++) {
				aMap_button_li[j].className = 'map_button_' + aMap_button_li[j].index;
				aMap_button_li[j].style.background = '';
				aMap_button_li[j].style.color = '';
				aMap_button_li[j].getElementsByTagName('span')[0].style.color = '';
			}
			this.style.background = this.style.borderColor;
			this.style.color = '#FFF';
			this.getElementsByTagName('span')[0].style.color = '#FFF';
			oMap_pic.style.background = 'url(img/subway_' + this.index + '.png) no-repeat';
		}
	}

	for(var i = 0; i < aRecommend_tab_pic_li.length; i++) {
		aRecommend_tab_pic_li[i].onmouseover = function() {
			oRecommend_tab_show.style.backgroundImage = this.style.backgroundImage;
		}
	}

	for(var i = 0; i < aBbs_list_li.length; i++) {
		aBbs_list_li[i].onmouseover = function() {
			for(var j = 0; j < aBbs_list_li.length; j++) {
				var a = aBbs_list_li[j].className;
				aBbs_list_li[j].className = a.replace(' bbs_list_active', '');
			}
			this.className = this.className + ' bbs_list_active';
		}
	}

	for(var i = 0; i < aCoupons_li.length; i++) {
		aCoupons_li[i].onclick = function() {
			for(var j = 0; j < aCoupons_li.length; j++) {
				aCoupons_li[j].className = '';
			}
			this.className = 'list_tab_avtive';
		}
	}

	for(var i = 0; i < aLife_style_li.length; i++) {
		aLife_style_li[i].onclick = function() {
			for(var j = 0; j < aLife_style_li.length; j++) {
				aLife_style_li[j].className = '';
			}
			this.className = 'list_tab_avtive';
		}
	}

	for(var i = 0; i < aMap_tap_li.length; i++) {
		aMap_tap_li[i].index = i;
		aMap_tap_li[i].onclick = function() {
			var a = aMap_tap_li[this.index].className;
			if(this.index == 0 && a.indexOf(' title_tap_inactive') > -1) {
				aMap_tap_li[0].className = a.replace(' title_tap_inactive', ' title_tap_active');
				aMap_tap_li[1].className = a.replace(' title_tap_active', ' title_tap_inactive');
			} else if(this.index == 1 && a.indexOf(' title_tap_inactive') > -1) {
				aMap_tap_li[1].className = a.replace(' title_tap_inactive', ' title_tap_active');
				aMap_tap_li[0].className = a.replace(' title_tap_active', ' title_tap_inactive');
			}
		}
	}

	for(var i = 0; i < aHot_shop_tap_li.length; i++) {
		aHot_shop_tap_li[i].index = i;
		aHot_shop_tap_li[i].onclick = function(i) {
			var a = aHot_shop_tap_li[this.index].className;
			if(this.index == 0 && a.indexOf(' title_tap_inactive') > -1) {
				aHot_shop_tap_li[0].className = a.replace(' title_tap_inactive', ' title_tap_active');
				aHot_shop_tap_li[1].className = a.replace(' title_tap_active', ' title_tap_inactive');
			} else if(this.index == 1 && a.indexOf(' title_tap_inactive') > -1) {
				aHot_shop_tap_li[1].className = a.replace(' title_tap_inactive', ' title_tap_active');
				aHot_shop_tap_li[0].className = a.replace(' title_tap_active', ' title_tap_inactive');
			}
		}
	}

	for(var i = 0; i < aHeader_li.length; i++) {
		aHeader_li[i].onclick = function() {
			for(var j = 0; j < aHeader_li.length; j++) {
				var a = aHeader_li[j].className;
				if(a && a.indexOf(' city_active') > -1) {
					aHeader_li[j].className = a.replace(' city_active', '')
				}
			}
			this.className += ' city_active'
		}
	}

	for(var i = 0; i < aTap_li.length; i++) {
		aTap_li[i].onclick = function() {
			for(var j = 0; j < aTap_li.length; j++) {
				var a = aTap_li[j].className;
				if(a && a.indexOf('tap_active') > -1) {
					aTap_li[j].className = a.replace('tap_active', '')
				}
			}
			this.className += 'tap_active'
		}
	}

	for(var i = 0; i < aInput_text.length; i++) {
		if(aInput_text[i].type == 'text') {
			aInput_text[i].a = aInput_text[i].value;
			aInput_text[i].onfocus = function() {
				this.value = '';
				this.onblur = function() {
					this.value = this.a;
				}
			}

		}
	}

	oUpdate_username.innerHTML = aUpadte_text[0].username;
	oUpdate_time.innerHTML = aUpadte_text[0].time;
	oUpdate_text.innerHTML = aUpadte_text[0].text;
	aUpadte_text.index = 0;
	oUp_triangle.onclick = function() {
		if(aUpadte_text.index < aUpadte_text.length - 1) {
			aUpadte_text.index++
		} else {
			aUpadte_text.index = 0;
		}

		oUpdate_username.innerHTML = aUpadte_text[aUpadte_text.index].username;
		oUpdate_time.innerHTML = aUpadte_text[aUpadte_text.index].time;
		oUpdate_text.innerHTML = aUpadte_text[aUpadte_text.index].text;
	}
	oDown_triangle.onclick = function() {
		if(aUpadte_text.index > 0) {
			aUpadte_text.index--
		} else {
			aUpadte_text.index = aUpadte_text.length - 1;
		}

		oUpdate_username.innerHTML = aUpadte_text[aUpadte_text.index].username;
		oUpdate_time.innerHTML = aUpadte_text[aUpadte_text.index].time;
		oUpdate_text.innerHTML = aUpadte_text[aUpadte_text.index].text;
	}

}