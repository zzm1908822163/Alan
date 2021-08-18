if ($response.statusCode != 200) {
  $done(null);
}


var obj = JSON.parse(body);
var title = City_ValidCheck(obj['city']);//+Area_check(obj['country']);
var subtitle = ISP_ValidCheck(obj['org']);
var ip = obj['query'];
var description = '服务商:'+obj['isp'] + '\n'+'地区:' +City_ValidCheck(obj['regionName'])+ '\n' + 'IP:'+ obj['query'] + '\n' +'时区:'+ obj['timezone'];
$done({title, subtitle, ip, description});
