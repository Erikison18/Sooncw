//  api/manage/kd-order/page   管理端 在线监控
//  api/merchant/order/ext/page   商户端 在线监控 / 神鹰轨迹小程序 车辆搜索分页显示、车辆列表

const outData =  
{
  equipmentManages: [
    {
      occurAddr: '',
      snNo: '', //snNo查询其他接口
      equipmentType: '',
      provider: '',
      gpsStatus: '',
      status: '',
      alarmFlag: '',
      gpsStatusStr: '',
      statusStartDayStr: '',
      statusStartTimeStr: '',
      speed: '',
      distance: '',
      simNo: '',
      signalTime: '',
      occurTime: '',
      simNo: '',
      alarmDescription: '',
      locationType: '',
      electric: '',
    }
  ],
  carNo: '',
  carVinNo: '',
  carAlarmInfo: '',
  carExtInfo: '',
  merchantName: '',
  networkName: '',
  orderNo: '',
  installationTime: '',
  carownerName: '',
  carownerMobile: '',
  carModel: '',

  id: '',
  gpsNameDesc: '', // 截取数字，snNo查询其他接口
  longitude: '',
  latitude: ''
}
