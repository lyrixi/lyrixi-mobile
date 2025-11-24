// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

const tabs = function getTabs() {
  if (window.google) {
    return [
      {
        name: LocaleUtil.locale('购物', 'lyrixi.map.nearby.shop'),
        id: 'store'
      },
      {
        name: LocaleUtil.locale('吃喝', 'lyrixi.map.nearby.restaurant'),
        id: 'restaurant'
      },
      {
        name: LocaleUtil.locale('娱乐', 'lyrixi.map.nearby.recreation'),
        id: 'amusement_park,aquarium,movie_theater,museum,night_club,park,zoo'
      },
      {
        name: LocaleUtil.locale('景点', 'lyrixi.map.nearby.scenery'),
        id: 'library,park,rv_park'
      },
      {
        name: LocaleUtil.locale('出行', 'lyrixi.map.nearby.trip'),
        id: 'airport,bus_station,subway_station,taxi_stand,train_station,transit_station'
      },
      {
        name: LocaleUtil.locale('住宿', 'lyrixi.map.nearby.lodgings'),
        id: 'hotel,motel,campground,rv_park'
      }
    ]
  }

  if (window.BMap) {
    return [
      {
        name: LocaleUtil.locale('购物', 'lyrixi.map.nearby.shop')
      },
      {
        name: LocaleUtil.locale('吃喝', 'lyrixi.map.nearby.restaurant')
      },
      {
        name: LocaleUtil.locale('生活', 'lyrixi.map.nearby.live')
      },
      {
        name: LocaleUtil.locale('娱乐', 'lyrixi.map.nearby.recreation')
      },
      {
        name: LocaleUtil.locale('景点', 'lyrixi.map.nearby.scenery')
      },
      {
        name: LocaleUtil.locale('出行', 'lyrixi.map.nearby.trip'),
        id: '公交地铁'
      },
      {
        name: LocaleUtil.locale('住宿', 'lyrixi.map.nearby.lodgings')
      }
    ]
  }

  return [
    {
      name: LocaleUtil.locale('购物', 'lyrixi.map.nearby.shop'),
      id: 'shop'
    },
    {
      name: LocaleUtil.locale('吃喝', 'lyrixi.map.nearby.restaurant'),
      id: 'restaurant'
    }
  ]
}
export default tabs
