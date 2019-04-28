// var serverUrl = "http://192.168.3.252:10909" // 访问ip地址
// var serverUrl = "http://192.168.3.52:10909" // 访问ip地址a
var serverUrl = "http://admin.resource.luways.com" // 访问ip地址



var loginUrl = serverUrl + "/adminRestfulController/login"; //登录 userName=456&password=456&code=xxxx
var logoutUrl = serverUrl + "/adminRestfulController/logout"; //退出
var changePasswordUrl = serverUrl + "/adminUserRestfulController/changePassword"; //  重置密码
var resetPwdUrl = serverUrl + "/adminRestfulController/us"; //  重置密码
var serverToken = '?token=bPra5sVLqHa24nmIdLBpXhnRP%2FtJhO1pr3vZ3v%2FOA8A%3D';

//获取轮播图全部列表
var getAllBannerLists = serverUrl + '/ban ner/getAllBannerLists';
//搜索轮播图
var getBannerListByTepes = serverUrl + '/banner/getBannerListByTepes';


// 列表接口
var ticketRestfulControllerList = serverUrl + "/ticketRestfulController/list" //门票管理    产品管理
var ticketRestfulControllerDetail = serverUrl + "/ticketRestfulController/detail" //门票管理    产品详情
var ticket = serverUrl + "/" //门票管理    产品管理    产品  删除
var ticketRestfulControllershowOfferPrice = serverUrl + "/ticketRestfulController/showOfferPrice" // 门票管理   产品管理  sku  查看
var skuSaveProduct = serverUrl + "/ticketRestfulController/sku/save" // 门票管理   产品管理  sku  查看
var ticketRestfulControllerdeleteOfferPrice = serverUrl + "/ticketRestfulController/deleteOfferPrice" // 门票管理   产品管理  sku
var ticketRestfulControllerEdit = serverUrl + "/ticketRestfulController/edit" // 门票管理   产品管理  添加编辑产品
var ticketRestfulControllerSave = serverUrl + "/ticketRestfulController/save" // 门票管理   产品管理  添加编辑产品
var batchDeleteLogic = serverUrl + "/ticketRestfulController/batchDeleteLogic" // 门票管理   产品管理   删除产品类型
var batchDeleteLogicOnSale = serverUrl + "/ticketRestfulController/onSale" // 门票管理   产品管理    上架
var batchDeleteLogicOffSale = serverUrl + "/ticketRestfulController/offSale" // 门票管理   产品管理    上架
var batchDeleteLogicHotSale = serverUrl + "/ticketRestfulController/hotSale" // 门票管理   产品管理    热销
var batchDeleteLogicNoSale = serverUrl + "/ticketRestfulController/noSale" // 门票管理   产品管理    取消热销


var editDateAgeBand = serverUrl + "/ticketRestfulController/editDateAgeBand" // sku  价格库存添加修改
var getDateAgeBand = serverUrl + "/ticketRestfulController/getDateAgeBand" // sku  日历价格  列表
var skuSave = serverUrl + "/ticketRestfulController/sku/save" // sku  日历价格  列表




var adminOrderRestfulControllerList = serverUrl + "/adminOrderRestfulController/list" // 门票管理    订单管理
var orderUpdateOrderRequest = serverUrl + "/adminOrderRestfulController/updateOrderRequest" // 门票管理    订单管理   订单状态
var orderUpdateOrderRequestDp = serverUrl + "/adminOrderRestfulController/updateDpOrderStatus" // 门票管理    订单管理    订单状态    取消
var sendMailAndFile = serverUrl + "/upDownController/sendMailAndFile" // 门票管理    订单管理    发送邮箱
var orderRecordSendMailAndFile = serverUrl + "/upDownController/orderRecordSendMailAndFile" // 门票管理    订单记录管理    发送邮箱

var orderUpdateOrderRecordList = serverUrl + "/adminOrderRestfulController/orderRecordList" // 门票管理    订单记录管理
var orderUpdateChangeRecord = serverUrl + "/adminOrderRestfulController/changeRecord" // 门票管理    订单记录管理  添加编辑接口
var orderdp_orderDetail = serverUrl + "/adminOrderRestfulController/dp_orderDetail" // 门票管理    订单记录管理  新美大列表接口
var ordermfw_orderDetail = serverUrl + "/adminOrderRestfulController/mfw_orderDetail" // 门票管理    订单记录管理  蚂蜂窝列表接口
var orderOrderDetail = serverUrl + "/adminOrderRestfulController/detail" // 门票管理    订单记录管理  luways列表接口
var updateRemarkDpOrder = serverUrl + "/adminOrderRestfulController/updateRemarkDpOrder " // 门票管理    订单记录管理  新美大列表接口     预定备注
var updateDescriptionDpOrder = serverUrl + "/adminOrderRestfulController/updateDescriptionDpOrder " // 门票管理    订单记录管理  新美大列表接口     运营备注
var updateCost = serverUrl + "/adminOrderRestfulController/updateCost" // 门票管理    订单记录管理  新美大列表接口     供应商保存

var mfw_orderDetail = serverUrl + "/adminOrderRestfulController/mfw_orderDetail" // 门票管理    订单记录管理  蚂蜂窝   运营备注
var updateDescriptionMfoOrder = serverUrl + "/adminOrderRestfulController/updateDescriptionMfoOrder" // 门票管理    订单记录管理  蚂蜂窝   运营备注
var updateRemarkMfoOrder = serverUrl + "/adminOrderRestfulController/updateRemarkMfoOrder" // 门票管理    订单记录管理  蚂蜂窝   预定备注



var orderUpdateOrderRecordDelete = serverUrl + "/adminOrderRestfulController/orderRecordDelete" // 门票管理    订单记录管理  删除接口
var adminTicketTypeControllerList = serverUrl + "/adminTicketTypeController/list" // 门票管理    类型管理  列表接口
var adminTicketTypeControllerEdit = serverUrl + "/adminTicketTypeController/save" // 门票管理    类型管理  添加编辑接口
var adminTicketTypeControllerBatchDelete = serverUrl + "/adminTicketTypeController/batchDelete" // 门票管理    类型管理  删除接口




var uploadFile = "http://admin.resource.luways.com:10909/upDownController/uploadFile" // 门票管理    类型管理  删除接口
var uploadFileXia = "http://192.168.3.252:10909/upDownController/downloadFile/" // 门票管理    类型管理  删除接口





var hotelOrderRestfulControllerList = serverUrl + "/hotelOrderRestfulController/list" // 酒店管理   订单管理  列表

var businessRestfulControllerList = serverUrl + "/businessRestfulController/list" //  合作管理 列表接口             商旅用户
var businessRestfulControllerSave = serverUrl + "/businessRestfulController/save" //  合作管理  添加  修改         商旅用户
var businessRestfulControllerDelete = serverUrl + "/businessRestfulController/batchDelete" //  合作管理  删除列表       商旅用户
var businessRestfulControllerFindStart = serverUrl + "/businessRestfulController/findStart" //      商旅用户   启用  禁用 账户
var businessRestfulControllerFindStart = serverUrl + "/businessRestfulController/findStart" //      商旅订单    列表
var businessRestfulControllertoPage = serverUrl + "/businessRestfulController/toPage" //  总负责人  数据 渲染
var businessRestfulControllertoCheckPage = serverUrl + "/businessRestfulController/toCheckPage" //  未审核  渲染
var businessRestfulControllertoCheck = serverUrl + "/businessRestfulController/check" //  未审核   提交   接口

var adminUserRestfulControllerList = serverUrl + "/adminUserRestfulController/list" //  基础管理    员工管理  列表
var adminUserRestfulControllerRole = serverUrl + "/adminUserRestfulController/role" //  基础管理    员工管理  账户授权    列表
var adminUserRestfulControllerAddRole = serverUrl + "/adminUserRestfulController/addRole" //  基础管理    员工管理  账户授权    提交
var adminUserRestfulControllerDelete = serverUrl + "/adminUserRestfulController/delete" //  基础管理    员工管理  删除
var adminUserRestfulControllerDsave = serverUrl + "/adminUserRestfulController/save" //  基础管理    员工管理  添加编辑

var adminRoleRestfulControllerList = serverUrl + "/adminRoleRestfulController/list" //  基础管理    角色管理  列表
var adminRoleRestfulControllerASave = serverUrl + "/adminRoleRestfulController/save" //  基础管理    角色管理  添加编辑
var adminRoleRestfulControllerAdelete = serverUrl + "/adminRoleRestfulController/delete" //  基础管理    角色管理  删除
var resourceRestfulControllerList = serverUrl + "/resourceRestfulController/list" //  基础管理    角色管理  分配权限




var searchAllIntentionSheet = serverUrl + "/adminCustomizedController/searchAllIntentionSheet" // 订制需求  所有列表
var insertCustomerDemand = serverUrl + "/adminCustomizedController/insertCustomerDemand" // 订制需求  添加订制需求

/*

if (window.location.pathname.indexOf('login.html') < 0) {
    checkUser();
}*/

//===================公用方法=============================

function ajaxSubmit(url, getData, callback) {
    getData = getData || {};
    checkUser();
    var user = getUserInfo();
    getData.token = user.token;
    doAjax(url, getData, callback);
}

function ajaxWithUser(url, getData, callback) {
    getData = getData || {};
    checkUser();
    var user = getUserInfo();
    getData.token = user.token;
    myAjax(url, getData, callback);
}

function ajaxGet_withoutUser(url, getData, callback) {
    getData = getData || {};
    myLoginAjax(url, getData, callback);
}
// 登陆   ajax 方法
function myLoginAjax(url, param, func) {
    if (!url.startsWith(serverUrl)) {
        url = serverUrl + url;
    }

    param = param || {};

    $.ajax({
        url: url,
        type: "post",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: param,

        success: function (data) {
            console.log(data)
            if (data) {
                if (!data.success) {
                    layer.msg("<em style='color:red'>账号或者密码错误</em>", {
                        time: 1200,
                        icon: 2
                    });
                } else {
                    setUserInfo(data.data);
                    addClass(document.querySelector(".login"), "active")
                    setTimeout(function () {
                        addClass(document.querySelector(".sk-rotating-plane"), "active")
                        document.querySelector(".login").style.display = "none"
                    }, 800)
                    setTimeout(function () {
                        removeClass(document.querySelector(".login"), "active")
                        removeClass(document.querySelector(".sk-rotating-plane"), "active")
                        document.querySelector(".login").style.display = "block"
                    }, 3000)
                    window.location.href = "../index/index.html";
                }
            } else {
                // reload();
                layer.msg("网络错误", 5);
            }
        },
        error: function () {
            //layer.close(index);
            layer.msg("请求出错", {
                icon: 2
            });
        }

    });
}

//打开新页
function openNewWindow(url, params) {
    var text = "";
    if (isNotBlank(params)) {
        text = "?";
        for (var key in params) {
            text = text + key + "=" + params[key] + "&"
        }
    }
    if (url.indexOf('login.html') == -1) {
        location.href = url + text;
    } else {
        location.href = url + text;
    }
}


function checkUser() {
    var user = getUserInfo();
    if (!user || !user.token) {
        openLogin();
    }
}
// session   Id问题
function setUserInfo(user) {
    sessionStorage.setItem('user_admin', JSON.stringify(user));
    var timestamp = (new Date()).valueOf();
    sessionStorage.setItem('user_admin_time', JSON.stringify(timestamp));
}

function removeUserInfo(user) {
    sessionStorage.setItem('user_admin', '');
    sessionStorage.setItem('supplierList', '');
    sessionStorage.setItem('otaPID', '');
}

function getUserInfo() {
    var timestamp = (new Date()).valueOf();
    var oldTimestamp = sessionStorage.getItem('user_admin_time');
    if (isBlank(oldTimestamp)) {
        return null;
    }
    if (timestamp - oldTimestamp > (60 * 60 * 24 * 7 * 1000)) {
        return null;
    }
    var user = sessionStorage.getItem('user_admin');
    if (isNotBlank(user)) {
        return JSON.parse(user);
    } else {
        return null;
    }
}

function getUserToken() {
    var user = getUserInfo();
    return encodeURIComponent(user.token);
}


function isFunction(func) {
    if (typeof (func) == "function") {
        return true;
    }
    return false;
}

function isJson(obj) {
    return typeof (obj) == "object" &&
        Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
}

function isNullJson(obj) {
    return isJson(obj) && JSON.stringify(obj) == '{}';
}


/**
 *常用函数
 */
function msgSuccess(result) {
    layer.msg(result, {
        icon: 1,
        time: 800,
        shade: 0.01
    });
}

function msgFail(result) {
    layer.msg(result, {
        icon: 2,
        time: 800,
        shade: 0.01
    });
}

function loading(type) {
    var type = type == undefined ? 1 : type;
    var index = layer.load(type, {
        shade: [0.1, '#fff']
    });
    return index;
}

function isBlank(data) {
    return (data == "" || typeof (data) == "undefined" || data == null) ? true : false;
}

function isNotBlank(data) {
    return (data == "" || typeof (data) == "undefined" || data == null) ? false : true;
}

function getRadioChecked(name) {
    var t = [];
    $('input[name="' + name + '"]:checked').each(function () {
        t.push($(this).val());
    });
    return t;
}

function setRadioChecked(name, value) {
    $("input[name='" + name + "']:radio").each(function () {
        var data = $(this).val();
        if (value == data) {
            $(this).prop('checked', true);
        }

    });
}

function setCheckChecked(name, value) {
    for (var i = 0; i < value.length; i++) {
        $("input[name='" + name + "']:checkbox").each(function () {
            var data = $(this).val();
            if (value[i] == data) {
                $(this).prop('checked', true);
            }
        });
    }
}

function htmlRadio(data, fieldName) {
    var html = "";
    for (var i = 0; i < data.length; i++) {
        html += '<div class="radio radio-info radio-inline">';
        html += '        <input type="radio" id="' + fieldName + data[i].id + '"  name="' + fieldName + '" value ="' + data[i].id + '"  data-value="' + data[i].id + '">';
        html += '<label for="' + fieldName + data[i].id + '">' + data[i].name + ' </label>';
        html += '</div>';
    }
    return html;
}

function htmlCheckBox(data, fieldName) {
    var html = "";
    for (var i = 0; i < data.length; i++) {
        html += '<div class="checkbox checkbox-success checkbox-inline">';
        html += '<input type="checkbox" id="' + fieldName + data[i].id + '" name="' + fieldName + '"  value ="' + data[i].id + '"  data-value="' + data[i].id + '">';
        html += '<label for="' + fieldName + data[i].id + '">' + data[i].name + ' </label>';
        html += '</div>';

    }
    return html;
}

function multipleSelect(data, dom) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        content += '<option value="' + data[i].id + '">' + data[i].name + '</option>'
    }

    $(dom).empty();
    $(dom).append(content);
    //更新内容刷新到相应的位置
    $(dom).selectpicker('render');
    $(dom).selectpicker('refresh');
}

//空校验
function showValidate(dom) {
    $(dom).parent().find('.validate').show().delay(3000).hide(300);
}

function showValidateMsg(dom, msg) {
    $(dom).parent().find('.validate').show().delay(3000).hide(300);
    $(dom).parent().find('.validate').text(msg);
}

//表单重置
function resetForm(dom) {
    $(dom)[0].reset();
}

//动态填写下拉框
function changeSelect(id, obj) {
    var optionStr = '';
    for (var i = 0; i < obj.length; i++) {
        optionStr = optionStr + "<option value='" + obj[i].id + "'>" + obj[i].name + "</option>"
    }
    $("#" + id).html(optionStr);
}

//动态填写下拉框
function appendSelect(id, obj, msg) {
    var selectMsg = isBlank(msg) ? "请选择" : msg;
    var optionStr = '';
    optionStr = optionStr + "<option value=''>" + selectMsg + "</option>";
    for (var i = 0; i < obj.length; i++) {
        optionStr = optionStr + "<option value='" + obj[i].id + "'>" + obj[i].name + "</option>"
    }
    $("#" + id).html(optionStr);
}

// 时间戳转换 成日期格式    年月日
function timestampToTime(timestamp) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + '';
    return Y + M + D;
}

//时间戳    精确到毫秒
function formatDateTime(timeStamp) {
    var date = new Date();
    date.setTime(timeStamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};

//年月日
function formatDateTimeYMD(timeStamp, flag) {
    var date = new Date();
    date.setTime(timeStamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    if (flag) {
        return y + '年' + m + '月' + d + '日';
    } else {
        return y + '-' + m + '-' + d;
    }
};

//克隆对象
function cloneObj(obj) {
    var str, newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj), //系列化对象
            newobj = JSON.parse(str); //还原
    } else {
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ?
                cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
};

//通用处理函数
function handleCommon(url, params, msgStr, func) {
    layer.msg(msgStr, {
        shade: [0.1, '##f5f5f5'],
        time: 0 //不自动关闭
            ,
        btn: ['确定', '取消'],
        yes: function (index) {
            layer.close(index);
            myAjax(url, params, func);
        },
        btn2: function (index, layero) {}
    });
}


/*--------------图片上传-----------*/
function uploadIcon() {
    $("#uploadForm input").click();
}

/*--------------图片上传后台-----------*/
$("#uploadForm input").change(function () {

    var formData = new FormData($(this).parent()[0]);
    $.ajax({
        url: 'http://store.quakoo.com/storage/guoguo/handle', //Server script to process data
        // url: 'http://activities-img.oss-cn-qingdao.aliyuncs.com', //Server script to process data
        type: 'POST',
        data: formData,
        sync: false,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (result) {
            if (result.ok != undefined) {
                $('#photoCover').val(result.ok);
                $("#iconView").attr('src', result.ok);
                $("#iconView").show();
                var data = JSON.stringify(result);
                $("#cover").val(result.ok);
            } else {
                layer.msg('上传失败！', {
                    icon: 2
                });
            }

        },
        error: function () {
            layer.msg('上传失败！', {
                icon: 2
            });
        }
    });
})

//缩略图
function ImageThumb(value, width, height) {
    var im = value.split(",")[0];
    var title = value.indexOf("http");
    var content = "";
    if (im && title == 0) {
        var index = im.lastIndexOf(".");
        var first = im.substr(0, index);
        var last = im.substr(index, im.length);
        var str = "_" + width + "_" + height;
        var imgsrc = first + str + last;
        content += "<img class='img' src='" + imgsrc + "' onclick=imageViewer('" + value + "') />";
        return content;
    } else {
        return '-';
    }
}

//缩略图
function ImageThumb(value, width, height, flag) {
    var im = value.split(",")[0];
    var title = value.indexOf("http");
    var content = "";
    if (im && title == 0) {
        var index = im.lastIndexOf(".");
        var first = im.substr(0, index);
        var last = im.substr(index, im.length);
        var str = "_" + width + "_" + height;
        var imgsrc = first + str + last;

        if (flag) {
            content += "<img class='img' src='" + imgsrc + "' onclick=imageViewer('" + value + "') />";
        } else {
            content += "<img class='img' src='" + imgsrc + "' onclick=viewImg('" + value + "') />";
        }

        return content;
    } else {
        return '-';
    }
}


function imageViewer(value) {
    $("#imgView").html("");
    var imgList = ImgList(value);
    $("#imgView").html(imgList);
    //$("#imgView").find('li').attr("display","none");
    var viewer = new Viewer(document.getElementById('imgView'), {
        url: 'data-original',
        hidden: function () {
            viewer.destroy();
        }
    });
    $("#imgView").find('img')[0].click();
}

function ImgList(value) {
    var imgs = value.split(",");
    var content = "";
    for (var i = 0, l = imgs.length; i < l; i++) {
        if (isNotBlank(imgs[i])) {
            content += '<li><img data-original=' + imgs[i] + ' src=' + imgs[i] + ' alt=图片' + i + '></li>';
        }
    }

    return content;
}

/*------------------图片轮播----------------*/
function viewImg(value) {
    var imgs = value.split(",");
    var json = ViewerList(imgs);
    layer.photos({
        photos: json,
        anim: 5,
        shade: 0.1
    }); //0-6的选择，指定弹出图片动画类型，默认随机
}

var ViewerList = function (imgs) {
    var json = {
        "title": "呵呵", //相册标题
        "id": 123, //相册id
        "start": 0, //初始显示的图片序号，默认0 -->
        "data": new Array() //相册包含的图片，数组格式
    }
    if (imgs.length < 2) {
        json.data.push({
            'src': imgs[0], //原图地址
            'thumb': imgs[0] //缩略图地址
        });
    } else {
        for (var i = 0; i < imgs.length - 1; i++) {
            json.data.push({
                'src': imgs[i], //原图地址
                'thumb': imgs[i] //缩略图地址
            });
        }
    }
    return json;
}



//tips
function MyTips(id, data) {
    var html = "",
        str = data,
        str1 = data.substring(0, 20);
    var l = data.length;
    if (l > 20) {
        html += '<span id=' + id + '\ onmouseover =\'showDesc(' + id + "," + JSON.stringify(str) + ')\' >';
        html += str1 + "...";
    } else {
        html += '<span>'
        html += str;
    }
    html += "</span>";
    return html;
}

function showDesc(id, desc) {
    var html = "<p>" + desc + "</p>"
    layer.tips("<span style='color:black'>" + html + "</span>", id, {
        tips: [1, '#3595CC'],
        time: 3000
    });
}
/*--------------图片上传插件-----------*/




/*-----------------------ajax请求------------------------------*/
function myAjax(url, param, func) {
    if (!url.startsWith(serverUrl)) {
        url = serverUrl + url;
    }

    param = param || {};

    //var index = loading();
    $.ajax({
        url: url,
        type: "post",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        cache: false,
        ifModified: true,
        crossDomain: true,
        asnyc: true,
        data: param,
        success: function (data) {
            // console.log(data)

            if (data && data.success) {
                //layer.close(index);
                if (typeof func == 'function') {
                    func(data, param);
                }
            } else {
                //layer.close(index);
                if (data && data.code == 400) {
                    openLogin();
                }
                // layer.msg("<em style='color:red'>" + data.msg + "</em>", {time: 1200, icon: 5});
            }

        },
        error: function () {
            //layer.close(index);
            layer.msg("请求出错", {
                icon: 2
            });
        }

    });
}

function doAjax(url, param, func) {
    if (!url.startsWith(serverUrl)) {
        url = serverUrl + url;
    }

    param = param || {};

    var index = loading(2);
    $.ajax({
        url: url,
        type: "post",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: param,
        complete: function (xhr, status) {
            //拦截器实现超时跳转到登录页面
            // 通过xhr取得响应头
            var REDIRECT = xhr.getResponseHeader("REDIRECT");
            //如果响应头中包含 REDIRECT 则说明是拦截器返回的
            if (REDIRECT == "REDIRECT") {
                var win = window;
                while (win != win.top) {
                    win = win.top;
                }
                //重新跳转到 login.html
                win.location.href = xhr.getResponseHeader("CONTEXTPATH");
            }
        },
        success: function (data) {
            layer.close(index);
            if (data && data.success) {
                if (typeof func == 'function') {
                    func(data, param);
                }
            } else {
                if (data && data.code == 400) {
                    openLogin();
                }
                layer.msg("<em style='color:red'>" + data.msg + "</em>", {
                    time: 1200,
                    icon: 5
                });
            }

        },
        error: function () {
            layer.close(index);
            layer.msg("请求出错", {
                icon: 2
            });
        }

    });
}

function openLogin() {

    window.location.href = "/luways_admin/login/login.html"

}

//刷新页面
function reLoad() {
    setTimeout(function () {
        window.location.reload();
    }, 1500);
}

//刷新表格
function handleTable(data, type, url) {
    if (type == 1) { //更新一行
        $table.bootstrapTable('updateByUniqueId', {
            id: data.id,
            row: data
        });
    } else if (type == 2) { //删除一行
        $table.bootstrapTable('removeByUniqueId', data.id);
    } else if (type == 3) { //刷新数据
        $table.bootstrapTable('refresh', {
            url: url
        });
    } else if (type == 4) { //删除很多行
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [data]
        });
    } else if (type == 5) { //分页刷新表格
        $table.bootstrapTable('refreshOptions', {
            pageNumber: 1
        });
    }
}

/**
 * 构建form表单，以post方式提交
 * @param actionUrl  提交路径
 * @param parms      提交参数
 * @returns {___form0}
 */
function construtForm(actionUrl, parms) {
    var form = document.createElement("form");
    form.style.display = 'none';;
    form.action = actionUrl;
    form.method = "post";
    document.body.appendChild(form);


    for (var key in parms) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = parms[key];
        form.appendChild(input);

    }
    return form;
}


//地区切换

function areaChange() {
    var value = $(this).val();
    if (value == 2) {
        $(".totalarea").show();
    } else {
        $(".totalarea").hide();
    }
}

/*---------------CKeditor --------*/
var MyCKeditor = {
    getData: function () { //获取数据
        return CKEDITOR.instances.newContent.getData();
    },
    setData: function (data) { //设置数据
        CKEDITOR.instances.newContent.setData(data);
    }
}

/*-------------------------------新开Tab------------------*/
/**
 * 示例： addMenuItem("https://www.baidu.com","百度");
 */
function addMenuItem(dataUrl, menuName, paramFlag) {
    sessionStorage.setItem('otaPID', '');
    var timestamp = $.now();
    console.log(timestamp)
    var dataTime = (timestamp.toString()).substring((timestamp.toString()).length - 5);
    // 获取标识数据
    var flag = true;
    if (dataUrl == undefined || $.trim(dataUrl).length == 0) return false;

    var menuName = menuName,
        dataIndex = dataTime;
    var dataSrc = dataUrl.split('?')[0];
    // 选项卡菜单已存在
    $('.J_menuTab', window.parent.document).each(function () {
        if ($(this).data('id') == dataSrc) {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').siblings('.J_menuTab').removeClass('active');
                // 显示tab对应的内容区
                $('.J_mainContent .J_iframe', window.parent.document).each(function () {
                    if ($(this).data('id') == dataSrc) {
                        $(this).show().siblings('.J_iframe').hide();
                        return false;
                    }
                });
                refreshTab(dataUrl);
            }
            flag = false;
            return false;
        }
    });

    // 选项卡菜单不存在
    if (flag) {
        var str = '<a href="javascript:;" class="active J_menuTab" data-id="' + dataSrc + '">' + menuName + ' <i class="fa fa-times-circle"></i></a>';
        $('.J_menuTab', window.parent.document).removeClass('active');

        // 添加选项卡对应的iframe
        var str1 = '<iframe class="J_iframe" name="iframe' + dataIndex + '" width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataSrc + '" seamless></iframe>';
        $('.J_mainContent', window.parent.document).find('iframe.J_iframe').hide().parents('.J_mainContent').append(str1);

        $('.J_menuTabs .page-tabs-content', window.parent.document).append(str);

    }

    return false;

}

function addReeMenuItem(dataUrl, menuName, paramFlag) {
    // sessionStorage.setItem('otaPID', '');
    var timestamp = $.now();
    console.log(timestamp)
    var dataTime = (timestamp.toString()).substring((timestamp.toString()).length - 5);
    console.log(dataTime)
    if (dataUrl == undefined || $.trim(dataUrl).length == 0) return false;

    var menuName = menuName,
        dataIndex = dataTime;
    var dataSrc = dataUrl;
    var str = '<a href="javascript:;" class="active J_menuTab" data-id="' + dataSrc + '">' + menuName + ' <i class="fa fa-times-circle"></i></a>';
    $('.J_menuTab', window.parent.document).removeClass('active');

    // 添加选项卡对应的iframe
    var str1 = '<iframe class="J_iframe" name="iframe' + dataIndex + '" width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataSrc + '" seamless></iframe>';
    $('.J_mainContent', window.parent.document).find('iframe.J_iframe').hide().parents('.J_mainContent').append(str1);

    $('.J_menuTabs .page-tabs-content', window.parent.document).append(str);
    window.location.reload();
    return false;
}


//关闭iframe自己，请在iframe里调用
function closeMyselfInIframe() {
    var thisHref = window.location.href;
    var A = document.createElement('a');
    $mainBody = $(window.parent.document).find("body");
    $mainBody.find("iframe.J_iframe").each(function () {
        var thissrc = $(this).attr("src");
        A.href = thissrc;
        var Href = A.href;
        if (Href === thisHref) {
            $mainBody.find('.page-tabs-content .J_menuTab[data-id="' + $(this).data("id") + '"] i').click();
        }
    });
}
//刷新iframe
function refreshTab(dataUrl) {
    var dataSrc = dataUrl.split('?')[0];
    var target = $('.J_iframe[data-id="' + dataSrc + '"]', window.parent.document);
    //显示loading提示
    var loading = layer.load();
    target.attr('src', dataUrl).load(function () {
        //关闭loading提示
        layer.close(loading);
    });
}

//时间选择
function timeSelectInit() {
    $('#startTime').datepicker({
        autoclose: true,
        todayHighlight: true,
        language: "zh-CN",
        clearBtn: true, //清除按钮
        format: "yyyy-mm-dd" //日期显示格式
    }).on('changeDate', function (e) {
        var startTime = new Date(e.date.valueOf());
        $('#endTime').datepicker('setStartDate', startTime);
    });

    //结束时间：
    $('#endTime').datepicker({
        autoclose: true,
        todayHighlight: true,
        clearBtn: true, //清除按钮
        language: "zh-CN", //语言设置
        format: "yyyy-mm-dd" //日期显示格式
    }).on('changeDate', function (e) {
        var startTime = new Date(e.date.valueOf());
        $('#startTime').datepicker('setEndDate', startTime);
    });
}



function transTime(value) {
    var s = value.split('----');
    var st = s[0].replace(/(^\s*)|(\s*$)/g, "");
    var et = s[1].replace(/(^\s*)|(\s*$)/g, "");
    return {
        start: new Date(st).getTime(),
        end: new Date(et).getTime()
    }
}


String.prototype.startsWith = String.prototype.startsWith || function (prefix) {
    return this.slice(0, prefix.length > this.length ? this.length : prefix.length) === prefix;
};


var getQueryParam = function () {
    var loc = location.search;
    var url = loc.substring(1, loc.length);
    var str = url.split("&");
    var json = {};
    for (x in str) {
        var s = str[x].split("=");
        json[s[0]] = decodeURI(s[1]);
    }
    // console.log(json);
    return json;
};

//展示layer的消息
function showMsg(msg, icon) {
    layer.msg("<em style='color:red'>" + data.msg + "</em>", {
        time: 1200,
        icon: icon || 1
    });
}

function getCommitPagerParam(params) {
    return {
        token: getUserInfo().token,
        page: (params.offset / params.limit) + 1,
        size: params.limit
    };
}
//校验数字
function ValidateNumber(e, pnumber) {
    if (!/^\d+$/.test(pnumber)) {
        e.value = /^\d+/.exec(e.value);
    }
    return false;
}

// 补0操作
function getzf(num) {
    if (parseInt(num) < 10) {
        num = '0' + num;
    }
    return num;
}


// js控制input框只能输入数字和一位小数点和小数点后面两位小数
function clearNoNum(obj) {
    //先把非数字的都替换掉，除了数字和.
    obj.value = obj.value.replace(/[^\d.]/g, "");
    //保证只有出现一个.而没有多个.
    obj.value = obj.value.replace(/\.{2,}/g, ".");
    //必须保证第一个为数字而不是.
    obj.value = obj.value.replace(/^\./g, "");
    //保证.只出现一次，而不能出现两次以上
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    //只能输入两个小数
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
}

// js控制input框只能输入数字
function keyUp(ob) {
    if (!ob.value.match(/^[\+\-]?\d*?\.?\d*?$/)) ob.value = ob.t_value;
    else ob.t_value = ob.value;
    if (ob.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/)) ob.o_value = ob.value;
}

//获取最近多少天日期
function getDay(day) {
    var today = new Date();
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = getzf(tMonth + 1);
    tDate = getzf(tDate);
    return tYear + "-" + tMonth + "-" + tDate;
}

// 键盘点击事件
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        $("#btn_search").trigger("click");
    }
});