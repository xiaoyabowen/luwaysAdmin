
function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y =date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + '';
    console.log(Y+M+D)
    return Y+M+D;
}

// JavaScript Document
var nstr = new Date(); // 获取当前日期

// timestampToTime(nstr)


var timestampStr = nstr.getTime();
console.log(timestampStr)
var date = '2018-10-26'
var timestamp = new Date(date).getTime();
console.log(timestamp)


var changedYear = nstr.getFullYear(); // 年份
var changedMonth = nstr.getMonth(); // 月份
var dnow = nstr.getDate(); // 今日日期
var n1str = new Date(changedYear, changedMonth, 1); // 当月第一天Date
var initfirstday = n1str.getDay(); // 当月第一天星期几
var daynumber = getMonthAllDay(changedMonth, changedYear);

showCanledar(changedMonth, initfirstday, dnow, daynumber,changedYear);

// 是否为闰年
function is_leap(year) {
	return (year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0)
			: res = (year % 4 == 0 ? 1 : 0));
}

// 获取当月的天数
function getMonthAllDay(month, year) {
	var m_days = new Array(31, 28 + is_leap(year), 31, 30, 31, 30, 31, 31, 30,
			31, 30, 31);
	return m_days[month];
}
 
// 获得某年某月某日是星期几
function getFirstWeekDay(year, month, day) {
	var date = new Date();
	date.setFullYear(year);
	date.setMonth(month);
	date.setDate(day);
	return date.getDay();
}

// 默认的日期  年 月  显示
$(".txt_Year").html(changedYear)
$(".txt_blue").html(changedMonth+1)
// 左右箭頭   点击
// 年月份减少
$(".signincalendar").on("click",".direct_pre",function(){
    var monthNum = $(".txt_blue").html();
    var yearNumAdd = $(".txt_Year").html();
    monthNum--
    if (monthNum == 0){
        monthNum = 12
        yearNumAdd --
        $(".txt_Year").html(yearNumAdd)
        $(".txt_blue").html(monthNum)
    } else {
        $(".txt_blue").html(monthNum)
        var changedYear =$(".txt_Year").text()
        console.log(changedYear)
        var changedMonth = $(".txt_blue").text()
        console.log(changedMonth)
        commChanged(changedYear,changedMonth);
    }

})
// 年月份增加
$(".signincalendar").on("click",".direct_next",function(){
	var monthNum = $(".txt_blue").html();
	var yearNumAdd = $(".txt_Year").html();
    monthNum++
	// console.log(monthNum)
	if (monthNum == 13){
        monthNum = 1
		yearNumAdd ++
        $(".txt_Year").html(yearNumAdd)
        $(".txt_blue").html(monthNum)
        // commChanged();
	} else {
        $(".txt_blue").html(monthNum)
        var changedYear = getNewYear()
		// console.log(changedYear)
       var changedMonth = getNewMonth()
		// console.log(changedMonth)
         commChanged(changedYear,changedMonth);
	}
})


function commChanged(changedYear,changedMonth) {

    var changedMonth =  changedMonth
    var firstweekday = getFirstWeekDay(changedYear, parseInt(changedMonth) - 1, 1);
    // console.log("firstweekday="+firstweekday);

    var allday = getMonthAllDay(parseInt(changedMonth) - 1, changedYear);       //获取当月的天数
    // console.log("allday="+allday);

    showCanledar(changedMonth, firstweekday, 1, allday,changedYear);
}

// 获得表格行数
function requiredRows(allday, firstday) {
    var trstr = Math.ceil((allday + firstday) / 7);
    // alert("trstr"+trstr);
    return trstr;
}



/* 显示日历 */
function showCanledar(month, firstday, dnow, allday,changedYear) {

    var rows = requiredRows(allday, firstday);
    var tb = "<table data-role='none' cellpadding='0px' cellspacing='3px' id='dates'>";
    tb += "<tr class='firsttr'><td colspan='7'  align='center'>";
    tb += '<div class="h3 cf">\n' +
        '        <div class="year_month"><span class="txt_Year"></span>年<span class="txt_blue"></span>月 </div>\n' +
        '        <div class="direct direct_pre"><a href="javascript:void(0)" hidefocus="true" title="前一月">《<i class="icon i_exp_ll"></i></a></div>\n' +
        '        <div class="direct direct_next"><a href="javascript:void(0)" hidefocus="true" title="后一月">》<i class="icon i_exp_rl"></i></a></div>\n' +
        '    </div>'
    tb += "</td></tr>";
    tb += "<tr class='firsttr'><td colspan='7'  align='center'>";
    tb += "<div class='allCheck'><label class=\"checkbox-inline i-checks\">\n" +
        "                        <input type=\"checkbox\" value=\"1\" name=\"weekArr\">\n" +
        "                        全选当月库存\n" +
        "                    </label></div>"
    tb += "</td></tr>";
    tb += "<tr class='secondtr'>";
    tb += "<td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td>";
    tb += "</tr>";
    for (var i = 0; i < rows; i++) {
        tb += "<tr>";
        for (var k = 0; k < 7; k++) { // 表格每行的单元格
            var idx = i * 7 + k; // 单元格自然序列号
            var date_str = idx - firstday + 1; // 计算日期
            (date_str <= 0 || date_str > allday) ?  tb+="<td style='background:#fff'> </td>" : tb += '<td class="tdActive">\n' +
                '                    <div class=" normal">\n' +
                '                        '+date_str+' ' +
                '                        <p class="price">¥<i class="priceNum">1380</i></p>\n' +
                '                        <var>余 <i class="Surplus">8</i></var>\n' +
				'<span class="price_low_tag ">完</span>'+
                '\n' +
                '                    </div>\n' +
                '                </td>'; // 过滤无效日期（小于等于零的、大于月总天数的）
            // 打印日期：今天底色为红
            // 查询月签到情况


        }
        tb += "</tr>";
        // 表格的行结束
    }
    tb += "</table>"; // 表格结束
    $(".signincalendar").html(tb);
    $(".txt_Year").html(changedYear)
    $(".txt_blue").html(month)
}
function getNewYear() {
    // alert("得到年");
    return $(".txt_Year").html()
}
// 获得下拉列表的月
function getNewMonth() {
    // alert("得到月");
    return  $(".txt_blue").html()
}


// 鼠标 默认  点击 每个  加   active
$(".signincalendar").on("click","td.tdActive",function(){
    if ($(this).children(".normal").is(".active")){
        $(this).children(".normal").removeClass("active")
        $(".rightContent").hide()
        $(this).children(".normal").children(".price_low_tag").removeClass("price_low_tagShow")
    }else {
        $(this).children(".normal").addClass("active")
        $(".rightContent").show()
        var priceNum = $(this).children(".normal").children(".price").children(".priceNum").text()
        var Surplus = $(this).children(".normal").children("var").children(".Surplus").text()
        $(".adultPrice").val(priceNum)
        $(".numSurplus").val(Surplus)
        $(this).children(".normal").children(".price_low_tag").addClass("price_low_tagShow")
        if ($("td.tdActive").children(".active").length >1){
            console.log(112223)
            $(".rightContent").show()
        }
    }
})





// 取消按钮
$(".tableBoxBtnClose").click(function () {
    $(".rightContent").hide()
	$(".normal").removeClass("active")
	$(".price_low_tag").removeClass("price_low_tagShow")

})
// 保存并发布
$(".tableBoxBtnYesOut").click(function () {
	alert("暂未开放！！！")
})




// 全选  按钮
$(".signincalendar").on("click",".checkbox-inline",function(){
    if($("input[name=weekArr]").prop("checked")) {
    	$(".normal").addClass("active")
        $(".rightContent").show()
    }else {
        $(".normal").removeClass("active")
        $(".rightContent").hide()
    }

})


function selectSubTask() {
    // 开关js
    var div2=document.getElementsByClassName("div2")[0];
    var div1=document.getElementsByClassName("div1")[0];
    div1.className=(div1.className=="div1 close1")?"div1 open1":"div1 close1";   //关闭状态
    div2.className=(div2.className=="div2 close2")?"div2 open2":"div2 close2";		//开启状态
}



