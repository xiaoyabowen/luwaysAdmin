
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
// console.log(timestampStr)


// var timestamp = new Date(date).getTime();
// console.log(timestamp)


var changedYear = nstr.getFullYear(); // 年份
var changedMonth = nstr.getMonth(); // 月份
var dnow = nstr.getDate(); // 今日日期
var n1str = new Date(changedYear, changedMonth, 1); // 当月第一天Date
var initfirstday = n1str.getDay(); // 当月第一天星期几
var daynumber = getMonthAllDay(changedMonth, changedYear);


commChanged(changedYear,changedMonth+1)

// 是否为闰年
function is_leap(year) {
	return (year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0)
			: res = (year % 4 == 0 ? 1 : 0));
}

// 获取当月的天数
function getMonthAllDay(month, year) {
	var m_days = new Array(31, 28 + is_leap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
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
    sessionStorage.setItem('skuData','');
    window.location.reload()
    var monthNum = $(".txt_blue").html();
    var yearNumAdd = $(".txt_Year").html();
    monthNum--
    if (monthNum == 0){
        monthNum = 12
        yearNumAdd --
        $(".txt_Year").html(yearNumAdd)
        $(".txt_blue").html(monthNum)
        var changedYear =$(".txt_Year").text()
        var changedMonth = $(".txt_blue").text()
        commChanged(changedYear,changedMonth);
    } else {
        $(".txt_blue").html(monthNum)
        var changedYear =$(".txt_Year").text()
        // console.log(changedYear)
        var changedMonth = $(".txt_blue").text()
        // console.log(changedMonth)
        commChanged(changedYear,changedMonth);
    }

})
// 年月份增加
$(".signincalendar").on("click",".direct_next",function(){
    // console.log(1)
    sessionStorage.setItem('skuData','');
	var monthNum = $(".txt_blue").html();
	var yearNumAdd = $(".txt_Year").html();
    monthNum++
	// console.log(monthNum)
	if (monthNum == 13){
        monthNum = 1
		yearNumAdd ++
        $(".txt_Year").html(yearNumAdd)
        $(".txt_blue").html(monthNum)
        var changedYear = getNewYear()
        var changedMonth = getNewMonth()
        commChanged(changedYear,changedMonth);
	} else {
        $(".txt_blue").html(monthNum)
        var changedYear = getNewYear()
		// console.log(changedYear)
       var changedMonth = getNewMonth()
		// console.log(changedMonth)
         commChanged(changedYear,changedMonth);
	}
})

function daysOfMonth(){
    var MonthYear =$(".txt_Year").text()
    console.log(MonthYear)
    var MonthMonth = $(".txt_blue").text()
    // 获取到当前月份的全部日期
    let daysOfMonth = '';
    let fullYear = MonthYear;
    let month = MonthMonth;
    let lastDayOfMonth = new Date(fullYear, month, 0).getDate();
    for (var i = 1; i <= lastDayOfMonth; i++) {
        daysOfMonth+=fullYear + '-' + month + '-' + i;
        daysOfMonth+=',';
    };
    activeDateStr = daysOfMonth.substring(0, daysOfMonth.lastIndexOf(','));
    return activeDateStr;
}


function commChanged(changedYear,changedMonth) {

    var changedMonth =  changedMonth
    var firstweekday = getFirstWeekDay(changedYear, parseInt(changedMonth) - 1, 1);

    var allday = getMonthAllDay(parseInt(changedMonth) - 1, changedYear);       //获取当月的天数
    $(".alldayNum").val(allday)

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
    // 获取后台对应日期的数据
    var dataJson = {};
    dataJson.skuId = getQueryParam("skuId").skuId;
    dataJson.startTime = changedYear + "-" + month + "-" + dnow
    dataJson.endTime = changedYear + "-" + month + "-" + allday
    myAjax(getDateAgeBand,dataJson,handle);
    function handle(data,param) {
        console.log(data)
        sessionStorage.setItem('skuData', JSON.stringify(data));
    }

    DATASTR = sessionStorage.getItem('skuData')
    DATA = JSON.parse(DATASTR)
    console.log(DATA)
    var rows = requiredRows(allday, firstday);
    var tb = "<table data-role='none' cellpadding='0px' cellspacing='3px' id='dates'>";
    tb += "<tr class='firsttr'><td colspan='7'  align='center'>";
    tb += '<div class="h3 cf" style="margin-top: 0;">\n' +
        '        <div class="year_month"><span class="txt_Year"></span>年<span class="txt_blue"></span>月 </div>\n' +
        '        <div class="direct direct_pre"><a href="javascript:void(0)" hidefocus="true" title="前一月">《<i class="icon i_exp_ll"></i></a></div>\n' +
        '        <div class="direct direct_next"><a href="javascript:void(0)" hidefocus="true" title="后一月">》<i class="icon i_exp_rl"></i></a></div>\n' +
        '    </div>'
    tb += "</td></tr>";
    tb += "<tr class='firsttr'><td colspan='7'  align='center'>";
    tb += "<div class='allCheck'><label class=\"checkbox-inline i-checks\">\n" +
        "                        <input type=\"checkbox\" class='i_check' value=\"1\" name=\"weekArr\">\n" +
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
            date_str = idx - firstday + 1; // 计算日期
            (date_str <= 0 || date_str > allday) ?  tb+="<td style='background:#fff'> </td>" : tb += '<td class="tdActive">\n' +
                '                    <div class=" normal">\n' +
                '                        <em class="nowDateDay">'+getzf(date_str)+'</em> ' +
                '                        <p class="price"><i class="priceNum">'+(DATA.data.list['date'+getzf(date_str)]?DATA.data.list['date'+getzf(date_str)][0].stock:'暂无')+'</i></p>\n' +
                '                        <var><i class="Surplus"></i></var>\n' +
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

    $(".startTime").val(changedYear + "-" + month + "-" + dnow);
    $(".endTime").val(changedYear + "-" + month + "-" + allday);


    $('.i_check').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
        increaseArea: '20%'
    });
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

var activeDate = '';
// 鼠标 默认  点击 每个  加   activeDiv
$(".signincalendar").on("click","td.tdActive",function(){
    $(".addPeople").html('')
    // $(".dataBox").hide()
    var nowDayActive = $(this).children(".normal").children(".nowDateDay").text()
    if ($(this).children(".normal").is(".activeDiv")) {
        $(this).children(".normal").removeClass("activeDiv")
        /*$(".rightContent").hide()*/
        // $(".dateNumCheck").hide()
        var StockHtml = ''
        if ($("td.tdActive").children(".activeDiv").length != 0){
            StockHtml += '<tr>\n' +
                '                                    <td class="addName" data-addId="2">成人</td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="peopleInput adultPrice" value="">\n' +
                '                                        <input type="hidden" class="openType adultOpen" value="0">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="numInput adultSurplus" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageStart" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageEnd" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>0</td>\n' +
                '                                    <td style="padding-left: 10px">\n' +
                '                                        <div  class="div1 close1">\n' +
                '                                            <div class="div2 close2" onclick="selectSubTask()"></div>\n' +
                '                                        </div>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td class="addName" data-addId="5">青年</td>\n' +
                '                                    <td><input type="text" class="peopleInput yongPrice" value="">' +
                '                                       <input type="hidden" class="openType yongOpen" value="0">' +
                '                                    </td>\n' +
                '                                    <td><input type="text" class="numInput yongSurplus" value=""></td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageStart" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageEnd" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>0</td>\n' +
                '                                    <td style="padding-left: 10px">\n' +
                '                                        <div  class="yong1 close1">\n' +
                '                                            <div class="yong2 close2" onclick="selectSubTaskYong()"></div>\n' +
                '                                        </div>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td class="addName" data-addId="6">老人</td>\n' +
                '                                    <td><input type="text" class="peopleInput oldPrice" value=""><input type="hidden" class="openType oldOpen" value="0"></td>\n' +
                '                                    <td><input type="text" class="numInput oldSurplus" value=""></td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageStart" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageEnd" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>0</td>\n' +
                '                                    <td style="padding-left: 10px">\n' +
                '                                        <div  class="old1 close1">\n' +
                '                                            <div class="old2 close2" onclick="selectSubTaskOld()"></div>\n' +
                '                                        </div>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td class="addName" data-addId="3">儿童</td>\n' +
                '                                    <td><input type="text" class="peopleInput childPrice" value=""><input type="hidden" class="openType childOpen" value="0"></td>\n' +
                '                                    <td><input type="text" class="numInput childSurplus" value=""></td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageStart" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageEnd" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>0</td>\n' +
                '                                    <td style="padding-left: 10px">\n' +
                '                                        <div  class="child1 close1">\n' +
                '                                            <div class="child2 close2" onclick="selectSubTaskChild()"></div>\n' +
                '                                        </div>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td class="addName" data-addId="4">婴儿</td>\n' +
                '                                    <td><input type="text" class="peopleInput babyPrice" value=""><input type="hidden" class="openType babyOpen" value="0"></td>\n' +
                '                                    <td><input type="text" class="numInput babySurplus" value=""></td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageStart" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageEnd" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>0</td>\n' +
                '                                    <td style="padding-left: 10px">\n' +
                '                                        <div  class="baby1 close1">\n' +
                '                                            <div class="baby2 close2" onclick="selectSubTaskBaby()"></div>\n' +
                '                                        </div>\n' +
                '                                    </td>\n' +
                '                                </tr>'
            $(".addPeople").append(StockHtml)
        }else{
            $(".dataBox").hide()
            $(".dateNumCheck").hide()
            $(".addPeople").append('')
        }

       /* if ($("td.tdActive").children(".activeDiv").length == 1){
            $(".addPeople").html('')
            if (DATA.data.key.indexOf(nowDayActive) == -1){
                StockHtml += '<tr>\n' +
                    '                                    <td class="addName" data-addId="2">成人</td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="peopleInput adultPrice" value="">\n' +
                    '                                        <input type="hidden" class="openType adultOpen" value="0">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="numInput adultSurplus" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="div1 close1">\n' +
                    '                                            <div class="div2 close2" onclick="selectSubTask()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="5">青年</td>\n' +
                    '                                    <td><input type="text" class="peopleInput yongPrice" value="">' +
                    '                                       <input type="hidden" class="openType yongOpen" value="0">' +
                    '                                    </td>\n' +
                    '                                    <td><input type="text" class="numInput yongSurplus" value=""></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="yong1 close1">\n' +
                    '                                            <div class="yong2 close2" onclick="selectSubTaskYong()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="6">老人</td>\n' +
                    '                                    <td><input type="text" class="peopleInput oldPrice" value=""><input type="hidden" class="openType oldOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput oldSurplus" value=""></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="old1 close1">\n' +
                    '                                            <div class="old2 close2" onclick="selectSubTaskOld()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="3">儿童</td>\n' +
                    '                                    <td><input type="text" class="peopleInput childPrice" value=""><input type="hidden" class="openType childOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput childSurplus" value=""></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="child1 close1">\n' +
                    '                                            <div class="child2 close2" onclick="selectSubTaskChild()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="4">婴儿</td>\n' +
                    '                                    <td><input type="text" class="peopleInput babyPrice" value=""><input type="hidden" class="openType babyOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput babySurplus" value=""></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="baby1 close1">\n' +
                    '                                            <div class="baby2 close2" onclick="selectSubTaskBaby()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>'
            }else {
                StockHtml += '<tr>\n' +
                    '                                    <td class="addName" data-addId="2">成人</td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="peopleInput adultPrice" value="'+DATA.data.list['date'+nowDayActive][0].marketPrice+'">\n' +
                    '                                        <input type="hidden" class="openType adultOpen" value="0">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="numInput adultSurplus" value="'+DATA.data.list['date'+nowDayActive][0].stock+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="'+DATA.data.list['date'+nowDayActive][0].ageFrom+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="'+DATA.data.list['date'+nowDayActive][0].ageTo+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="div1 close1">\n' +
                    '                                            <div class="div2 close2" onclick="selectSubTask()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="5">青年</td>\n' +
                    '                                    <td><input type="text" class="peopleInput yongPrice" value="'+DATA.data.list['date'+nowDayActive][1].marketPrice+'">' +
                    '                                       <input type="hidden" class="openType yongOpen" value="0">' +
                    '                                    </td>\n' +
                    '                                    <td><input type="text" class="numInput yongSurplus" value="'+DATA.data.list['date'+nowDayActive][1].stock+'"></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="'+DATA.data.list['date'+nowDayActive][1].ageFrom+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="'+DATA.data.list['date'+nowDayActive][1].ageTo+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="yong1 close1">\n' +
                    '                                            <div class="yong2 close2" onclick="selectSubTaskYong()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="6">老人</td>\n' +
                    '                                    <td><input type="text" class="peopleInput oldPrice" value="'+DATA.data.list['date'+nowDayActive][2].marketPrice+'"><input type="hidden" class="openType oldOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput oldSurplus" value="'+DATA.data.list['date'+nowDayActive][2].stock+'"></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="'+DATA.data.list['date'+nowDayActive][2].ageFrom+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="'+DATA.data.list['date'+nowDayActive][2].ageTo+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="old1 close1">\n' +
                    '                                            <div class="old2 close2" onclick="selectSubTaskOld()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="3">儿童</td>\n' +
                    '                                    <td><input type="text" class="peopleInput childPrice" value="'+DATA.data.list['date'+nowDayActive][3].marketPrice+'"><input type="hidden" class="openType childOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput childSurplus" value="'+DATA.data.list['date'+nowDayActive][3].stock+'"></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="'+DATA.data.list['date'+nowDayActive][3].ageFrom+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="'+DATA.data.list['date'+nowDayActive][3].ageTo+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="child1 close1">\n' +
                    '                                            <div class="child2 close2" onclick="selectSubTaskChild()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="4">婴儿</td>\n' +
                    '                                    <td><input type="text" class="peopleInput babyPrice" value="'+DATA.data.list['date'+nowDayActive][4].marketPrice+'"><input type="hidden" class="openType babyOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput babySurplus" value="'+DATA.data.list['date'+nowDayActive][3].stock+'"></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="'+DATA.data.list['date'+nowDayActive][3].ageFrom+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="'+DATA.data.list['date'+nowDayActive][3].ageTo+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="baby1 close1">\n' +
                    '                                            <div class="baby2 close2" onclick="selectSubTaskBaby()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>'
                if (DATA.data.list['date'+nowDayActive][0].saleType == 1){
                    $(".div1").attr("class","div1 open1")
                    $(".div2").attr("class","div2 open2")
                }
                if (DATA.data.list['date'+nowDayActive][1].saleType == 1){
                    $(".yong1").attr("class","yong1 yongopen1")
                    $(".yong2").attr("class","yong2 yongopen2")
                }
                if (DATA.data.list['date'+nowDayActive][2].saleType == 1){
                    $(".old1").attr("class","old1 oldopen1")
                    $(".old2").attr("class","old2 oldopen2")
                }
                if (DATA.data.list['date'+nowDayActive][3].saleType == 1){
                    $(".child1").attr("class","child1 childopen1")
                    $(".child2").attr("class","child2 childopen2")

                }
                if (DATA.data.list['date'+nowDayActive][4].saleType == 1){
                    $(".baby1").attr("class","baby1 babyopen1")
                    $(".baby2").attr("class","baby2 babyopen2")

                }
            }
            $(".addPeople").append(StockHtml)


        }*/

        $(".dateNum").html($(".activeDiv").length)

        // $(this).children(".normal").children(".price_low_tag").removeClass("price_low_tagShow")
    }else {
        $(".dataBox").show()
        $(".dateNumCheck").show()
        var txt_Year = $(".txt_Year").html();
        var txt_blue = $(".txt_blue").html();
        activeDate += txt_Year+"-"+txt_blue+"-"+nowDayActive
        activeDate += ","
        activeDateStr = activeDate.substring(0, activeDate.lastIndexOf(','));
        $(this).children(".normal").addClass("activeDiv")
        $(".rightContent").show()
        var priceNum = $(this).children(".normal").children(".price").children(".priceNum").text()
        var Surplus = $(this).children(".normal").children("var").children(".Surplus").text()
        $(".dateNum").html($(".activeDiv").length)
        var StockHtml = ''
        // $(this).children(".normal").children(".price_low_tag").addClass("price_low_tagShow")
        if ($("td.tdActive").children(".activeDiv").length == 1){

            if (DATA.data.key.indexOf(nowDayActive) == -1){
                StockHtml += '<tr>\n' +
                    '                                    <td class="addName" data-addId="2">成人</td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="peopleInput adultPrice" value="">\n' +
                    '                                        <input type="hidden" class="openType adultOpen" value="0">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="numInput adultSurplus" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="div1 close1">\n' +
                    '                                            <div class="div2 close2" onclick="selectSubTask()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="5">青年</td>\n' +
                    '                                    <td><input type="text" class="peopleInput yongPrice" value="">' +
                    '                                       <input type="hidden" class="openType yongOpen" value="0">' +
                    '                                    </td>\n' +
                    '                                    <td><input type="text" class="numInput yongSurplus" value=""></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="yong1 close1">\n' +
                    '                                            <div class="yong2 close2" onclick="selectSubTaskYong()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="6">老人</td>\n' +
                    '                                    <td><input type="text" class="peopleInput oldPrice" value=""><input type="hidden" class="openType oldOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput oldSurplus" value=""></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="old1 close1">\n' +
                    '                                            <div class="old2 close2" onclick="selectSubTaskOld()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="3">儿童</td>\n' +
                    '                                    <td><input type="text" class="peopleInput childPrice" value=""><input type="hidden" class="openType childOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput childSurplus" value=""></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="child1 close1">\n' +
                    '                                            <div class="child2 close2" onclick="selectSubTaskChild()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="4">婴儿</td>\n' +
                    '                                    <td><input type="text" class="peopleInput babyPrice" value=""><input type="hidden" class="openType babyOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput babySurplus" value=""></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="baby1 close1">\n' +
                    '                                            <div class="baby2 close2" onclick="selectSubTaskBaby()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>'
            }else {
                StockHtml += '<tr>\n' +
                    '                                    <td class="addName" data-addId="2">成人</td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="peopleInput adultPrice" value="'+DATA.data.list['date'+nowDayActive][0].marketPrice+'">\n' +
                    '                                        <input type="hidden" class="openType adultOpen" value="0">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="numInput adultSurplus" value="'+DATA.data.list['date'+nowDayActive][0].stock+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="'+DATA.data.list['date'+nowDayActive][0].ageFrom+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="'+DATA.data.list['date'+nowDayActive][0].ageTo+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="div1 close1">\n' +
                    '                                            <div class="div2 close2" onclick="selectSubTask()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="5">青年</td>\n' +
                    '                                    <td><input type="text" class="peopleInput yongPrice" value="'+DATA.data.list['date'+nowDayActive][1].marketPrice+'">' +
                    '                                       <input type="hidden" class="openType yongOpen" value="0">' +
                    '                                    </td>\n' +
                    '                                    <td><input type="text" class="numInput yongSurplus" value="'+DATA.data.list['date'+nowDayActive][1].stock+'"></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="'+DATA.data.list['date'+nowDayActive][1].ageFrom+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="'+DATA.data.list['date'+nowDayActive][1].ageTo+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="yong1 close1">\n' +
                    '                                            <div class="yong2 close2" onclick="selectSubTaskYong()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="6">老人</td>\n' +
                    '                                    <td><input type="text" class="peopleInput oldPrice" value="'+DATA.data.list['date'+nowDayActive][2].marketPrice+'"><input type="hidden" class="openType oldOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput oldSurplus" value="'+DATA.data.list['date'+nowDayActive][2].stock+'"></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="'+DATA.data.list['date'+nowDayActive][2].ageFrom+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="'+DATA.data.list['date'+nowDayActive][2].ageTo+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="old1 close1">\n' +
                    '                                            <div class="old2 close2" onclick="selectSubTaskOld()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="3">儿童</td>\n' +
                    '                                    <td><input type="text" class="peopleInput childPrice" value="'+DATA.data.list['date'+nowDayActive][3].marketPrice+'"><input type="hidden" class="openType childOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput childSurplus" value="'+DATA.data.list['date'+nowDayActive][3].stock+'"></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="'+DATA.data.list['date'+nowDayActive][3].ageFrom+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="'+DATA.data.list['date'+nowDayActive][3].ageTo+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="child1 close1">\n' +
                    '                                            <div class="child2 close2" onclick="selectSubTaskChild()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>\n' +
                    '                                <tr>\n' +
                    '                                    <td class="addName" data-addId="4">婴儿</td>\n' +
                    '                                    <td><input type="text" class="peopleInput babyPrice" value="'+DATA.data.list['date'+nowDayActive][4].marketPrice+'"><input type="hidden" class="openType babyOpen" value="0"></td>\n' +
                    '                                    <td><input type="text" class="numInput babySurplus" value="'+DATA.data.list['date'+nowDayActive][3].stock+'"></td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageStart" value="'+DATA.data.list['date'+nowDayActive][3].ageFrom+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>\n' +
                    '                                        <input type="text" class="ageEnd" value="'+DATA.data.list['date'+nowDayActive][3].ageTo+'">\n' +
                    '                                    </td>\n' +
                    '                                    <td>0</td>\n' +
                    '                                    <td style="padding-left: 10px">\n' +
                    '                                        <div  class="baby1 close1">\n' +
                    '                                            <div class="baby2 close2" onclick="selectSubTaskBaby()"></div>\n' +
                    '                                        </div>\n' +
                    '                                    </td>\n' +
                    '                                </tr>'

            }
            $(".addPeople").append(StockHtml)
            if (DATA.data.list['date'+nowDayActive][0].saleType == 1){
                $(".div1").attr("class","div1 open1")
                $(".div2").attr("class","div2 open2")
            }
            if (DATA.data.list['date'+nowDayActive][1].saleType == 1){
                $(".yong1").attr("class","yong1 yongopen1")
                $(".yong2").attr("class","yong2 yongopen2")
            }
            if (DATA.data.list['date'+nowDayActive][2].saleType == 1){
                $(".old1").attr("class","old1 oldopen1")
                $(".old2").attr("class","old2 oldopen2")
            }
            if (DATA.data.list['date'+nowDayActive][3].saleType == 1){
                $(".child1").attr("class","child1 childopen1")
                $(".child2").attr("class","child2 childopen2")

            }
            if (DATA.data.list['date'+nowDayActive][4].saleType == 1){
                $(".baby1").attr("class","baby1 babyopen1")
                $(".baby2").attr("class","baby2 babyopen2")

            }

        }
         if ($("td.tdActive").children(".activeDiv").length > 1) {
            StockHtml += '<tr>\n' +
                '                                    <td class="addName" data-addId="2">成人</td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="peopleInput adultPrice" value="">\n' +
                '                                        <input type="hidden" class="openType adultOpen" value="0">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="numInput adultSurplus" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageStart" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageEnd" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>0</td>\n' +
                '                                    <td style="padding-left: 10px">\n' +
                '                                        <div  class="div1 close1">\n' +
                '                                            <div class="div2 close2" onclick="selectSubTask()"></div>\n' +
                '                                        </div>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td class="addName" data-addId="5">青年</td>\n' +
                '                                    <td><input type="text" class="peopleInput yongPrice" value="">' +
                '                                       <input type="hidden" class="openType yongOpen" value="0">' +
                '                                    </td>\n' +
                '                                    <td><input type="text" class="numInput yongSurplus" value=""></td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageStart" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageEnd" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>0</td>\n' +
                '                                    <td style="padding-left: 10px">\n' +
                '                                        <div  class="yong1 close1">\n' +
                '                                            <div class="yong2 close2" onclick="selectSubTaskYong()"></div>\n' +
                '                                        </div>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td class="addName" data-addId="6">老人</td>\n' +
                '                                    <td><input type="text" class="peopleInput oldPrice" value=""><input type="hidden" class="openType oldOpen" value="0"></td>\n' +
                '                                    <td><input type="text" class="numInput oldSurplus" value=""></td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageStart" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageEnd" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>0</td>\n' +
                '                                    <td style="padding-left: 10px">\n' +
                '                                        <div  class="old1 close1">\n' +
                '                                            <div class="old2 close2" onclick="selectSubTaskOld()"></div>\n' +
                '                                        </div>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td class="addName" data-addId="3">儿童</td>\n' +
                '                                    <td><input type="text" class="peopleInput childPrice" value=""><input type="hidden" class="openType childOpen" value="0"></td>\n' +
                '                                    <td><input type="text" class="numInput childSurplus" value=""></td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageStart" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageEnd" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>0</td>\n' +
                '                                    <td style="padding-left: 10px">\n' +
                '                                        <div  class="child1 close1">\n' +
                '                                            <div class="child2 close2" onclick="selectSubTaskChild()"></div>\n' +
                '                                        </div>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td class="addName" data-addId="4">婴儿</td>\n' +
                '                                    <td><input type="text" class="peopleInput babyPrice" value=""><input type="hidden" class="openType babyOpen" value="0"></td>\n' +
                '                                    <td><input type="text" class="numInput babySurplus" value=""></td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageStart" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input type="text" class="ageEnd" value="">\n' +
                '                                    </td>\n' +
                '                                    <td>0</td>\n' +
                '                                    <td style="padding-left: 10px">\n' +
                '                                        <div  class="baby1 close1">\n' +
                '                                            <div class="baby2 close2" onclick="selectSubTaskBaby()"></div>\n' +
                '                                        </div>\n' +
                '                                    </td>\n' +
                '                                </tr>'
            $(".addPeople").append(StockHtml)

        }



        if(DATA.success) {

        }else{
            layer.msg("请求失败", {icon: 2,time:1000,shade: 0.01});
        }
    }



})


// 全选  按钮
$(".signincalendar").on('ifChecked',"input[name=weekArr]", function(event){
    $(".addPeople").html('')
    var allDayNum = $(".alldayNum").val()
    $(".dateNum").html(allDayNum)
    $(".normal").addClass("activeDiv")
    var StockHtml = ''
    StockHtml += '<tr>\n' +
        '                                    <td class="addName" data-addId="2">成人</td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="peopleInput adultPrice" value="">\n' +
        '                                        <input type="hidden" class="openType adultOpen" value="0">\n' +
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="numInput adultSurplus" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="ageStart" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="ageEnd" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>0</td>\n' +
        '                                    <td style="padding-left: 10px">\n' +
        '                                        <div  class="div1 close1">\n' +
        '                                            <div class="div2 close2" onclick="selectSubTask()"></div>\n' +
        '                                        </div>\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '                                <tr>\n' +
        '                                    <td class="addName" data-addId="5">青年</td>\n' +
        '                                    <td><input type="text" class="peopleInput yongPrice" value="">' +
        '                                       <input type="hidden" class="openType yongOpen" value="0">' +
        '                                    </td>\n' +
        '                                    <td><input type="text" class="numInput yongSurplus" value=""></td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="ageStart" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="ageEnd" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>0</td>\n' +
        '                                    <td style="padding-left: 10px">\n' +
        '                                        <div  class="yong1 close1">\n' +
        '                                            <div class="yong2 close2" onclick="selectSubTaskYong()"></div>\n' +
        '                                        </div>\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '                                <tr>\n' +
        '                                    <td class="addName" data-addId="6">老人</td>\n' +
        '                                    <td><input type="text" class="peopleInput oldPrice" value=""><input type="hidden" class="openType oldOpen" value="0"></td>\n' +
        '                                    <td><input type="text" class="numInput oldSurplus" value=""></td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="ageStart" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="ageEnd" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>0</td>\n' +
        '                                    <td style="padding-left: 10px">\n' +
        '                                        <div  class="old1 close1">\n' +
        '                                            <div class="old2 close2" onclick="selectSubTaskOld()"></div>\n' +
        '                                        </div>\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '                                <tr>\n' +
        '                                    <td class="addName" data-addId="3">儿童</td>\n' +
        '                                    <td><input type="text" class="peopleInput childPrice" value=""><input type="hidden" class="openType childOpen" value="0"></td>\n' +
        '                                    <td><input type="text" class="numInput childSurplus" value=""></td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="ageStart" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="ageEnd" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>0</td>\n' +
        '                                    <td style="padding-left: 10px">\n' +
        '                                        <div  class="child1 close1">\n' +
        '                                            <div class="child2 close2" onclick="selectSubTaskChild()"></div>\n' +
        '                                        </div>\n' +
        '                                    </td>\n' +
        '                                </tr>\n' +
        '                                <tr>\n' +
        '                                    <td class="addName" data-addId="4">婴儿</td>\n' +
        '                                    <td><input type="text" class="peopleInput babyPrice" value=""><input type="hidden" class="openType babyOpen" value="0"></td>\n' +
        '                                    <td><input type="text" class="numInput babySurplus" value=""></td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="ageStart" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>\n' +
        '                                        <input type="text" class="ageEnd" value="">\n' +
        '                                    </td>\n' +
        '                                    <td>0</td>\n' +
        '                                    <td style="padding-left: 10px">\n' +
        '                                        <div  class="baby1 close1">\n' +
        '                                            <div class="baby2 close2" onclick="selectSubTaskBaby()"></div>\n' +
        '                                        </div>\n' +
        '                                    </td>\n' +
        '                                </tr>'
    $(".addPeople").append(StockHtml)
    $(".rightContent").show()
    daysOfMonth();
});
$(".signincalendar").on('ifUnchecked',"input[name=weekArr]", function(event){
    $(".dateNum").html("0")
    $(".normal").removeClass("activeDiv")
    $(".rightContent").hide()
});


// 取消按钮
$(".tableBoxBtnClose").click(function () {
    $(".rightContent").hide()
    $(".normal").removeClass("activeDiv")
    $(".price_low_tag").removeClass("price_low_tagShow")

})
// 保存并发布
$(".tableBoxBtnYesOut").click(function () {
    alert("暂未开放！！！")
})




function selectSubTask() {
    // 开关js
    var div2=document.getElementsByClassName("div2")[0];
    var div1=document.getElementsByClassName("div1")[0];
    div1.className=(div1.className=="div1 close1")?"div1 open1":"div1 close1";   //关闭状态
    div2.className=(div2.className=="div2 close2")?"div2 open2":"div2 close2";		//开启状态
    if (div1.className=="div1 close1"){
        $(".adultOpen").val("0")
    }else {
        $(".adultOpen").val("1")
    }


}
function selectSubTaskYong() {
    // 开关js
    var div2=document.getElementsByClassName("yong2")[0];
    var div1=document.getElementsByClassName("yong1")[0];
    div1.className=(div1.className=="yong1 close1")?"yong1 yongopen1":"yong1 close1";   //关闭状态
    div2.className=(div2.className=="yong2 close2")?"yong2 yongopen2":"yong2 close2";		//开启状态
    if (div1.className=="yong1 close1"){
        $(".yongOpen").val("0")
    }else {
        $(".yongOpen").val("1")
    }
    console.log($(".yongOpen").val())
}
function selectSubTaskOld() {
    // 开关js
    var div2=document.getElementsByClassName("old2")[0];
    var div1=document.getElementsByClassName("old1")[0];
    div1.className=(div1.className=="old1 close1")?"old1 oldopen1":"old1 close1";   //关闭状态
    div2.className=(div2.className=="old2 close2")?"old2 oldopen2":"old2 close2";		//开启状态
    if (div1.className=="old1 close1"){
        $(".oldOpen").val("0")
    }else {
        $(".oldOpen").val("1")
    }
}

function selectSubTaskChild() {
    // 开关js
    var div2=document.getElementsByClassName("child2")[0];
    var div1=document.getElementsByClassName("child1")[0];
    div1.className=(div1.className=="child1 close1")?"child1 childopen1":"child1 close1";   //关闭状态
    div2.className=(div2.className=="child2 close2")?"child2 childopen2":"child2 close2";		//开启状态
    if (div1.className=="child1 close1"){
        $(".childOpen").val("0")
    }else {
        $(".childOpen").val("1")
    }
}
function selectSubTaskBaby() {
    // 开关js
    var div2=document.getElementsByClassName("baby2")[0];
    var div1=document.getElementsByClassName("baby1")[0];
    div1.className=(div1.className=="baby1 close1")?"baby1 babyopen1":"baby1 close1";   //关闭状态
    div2.className=(div2.className=="baby2 close2")?"baby2 babyopen2":"baby2 close2";		//开启状态
    if (div1.className=="baby1 close1"){
        $(".babyOpen").val("0")
    }else {
        $(".babyOpen").val("1")
    }
}

// 保存设置
$(".tableBoxBtnYes").click(function () {
    /*var ageBands = {
        skuId:getQueryParam("skuId").skuId,
        bands :[]
    };*/
    var bands = {
        date :[],
        saleDate : activeDateStr
    }
    for (var j=0;j<1;j++){
        // var activeDivObj = {};
        activeDivObj = []
        bands.date.push(activeDivObj)
        for (var i=0;i< $(".addPeople>tr").length;i++){
            var addObj = {};
            addObj.skuId = getQueryParam("skuId").skuId,
            addObj.bandId = $('.addPeople>tr:eq('+i+')').find($(".addName")).attr("data-addId")
            addObj.marketPrice = $('.addPeople>tr:eq('+i+')').find($(".peopleInput")).val()
            addObj.stock = $('.addPeople>tr:eq('+i+')').find($(".numInput")).val()
            addObj.saleType = $('.addPeople>tr:eq('+i+')').find($(".openType")).val()
            addObj.ageFrom = $('.addPeople>tr:eq('+i+')').find($(".ageStart")).val()
            addObj.ageTo = $('.addPeople>tr:eq('+i+')').find($(".ageEnd")).val()
            bands.date[j].push(addObj)
        }
    }

    console.log(bands)
    $.ajax({
        url: editDateAgeBand,
        type: "post",
        dataType: "json",
        data: {ageBands:JSON.stringify(bands)},

        success: function (data) {
            console.log(data)

            if (data && data.success) {
                layer.msg("保存成功", {icon:1,time:1000,shade: 0.01});
                window.location.reload()
                // sessionStorage.setItem('skuData', '');
                // window.location.reload()
            } else {
                console.log(1)
                //layer.close(index);
            }

        },
        error: function () {
            //layer.close(index);
            layer.msg("请求出错", {
                icon: 2
            });
        }

    });

    /*myAjax(editDateAgeBand,{activeDivArr:JSON.stringify(ageBands)},handle);
    function handle(data,param){
        console.log(data)

        if(data.success) {

        }else{
            layer.msg("请求失败", {icon: 2,time:1000,shade: 0.01});
        }
    }*/
})










