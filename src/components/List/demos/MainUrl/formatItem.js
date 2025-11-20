import React from 'react'
import locale from 'library/utils/locale'

// 奖牌图片
const MEDAL_IMAGES = {
  GOLD: '//res.waiqin365.com/d/waiqin365_h5/rank/medal-gold.png',
  SILVER: '//res.waiqin365.com/d/waiqin365_h5/rank/medal-silver.png',
  COPPER: '//res.waiqin365.com/d/waiqin365_h5/rank/medal-copper.png'
}

// 转换单个排行榜项数据为 ListV2 所需格式
function formatItem(item, rankType) {
  const isCompletionRank = rankType?.id === '1'

  // 计算完成率
  const calculateRate = (complete, target) => {
    if (!target || target === 0) return '--'
    const rate = (complete / target) * 100
    return `${rate.toFixed(2)}%`
  }

  // 获取奖牌图片
  const getMedalImage = (rank) => {
    if (rank === 1) return MEDAL_IMAGES.GOLD
    if (rank === 2) return MEDAL_IMAGES.SILVER
    if (rank === 3) return MEDAL_IMAGES.COPPER
    return null
  }

  const targetLabel = isCompletionRank ? locale('目标') : locale('完成率')
  const targetValue = isCompletionRank
    ? item.target
      ? Number(item.target).toFixed(2)
      : '--'
    : calculateRate(item.complete, item.target)

  const completeValue = item.complete ? Number(item.complete).toFixed(2) : '--'
  const unitText = item.unit ? item.unit : ''

  const medalImage = getMedalImage(item.rank)

  return {
    id: item.user_id || item.rank,
    // 使用奖牌图片（前三名）或显示排名数字（第4名及以后）
    imageUrl: medalImage,
    // 如果没有奖牌图片，在 title 前显示排名
    title: (
      <span>
        {!medalImage && (
          <span style={{ display: 'inline-block', width: 24, fontWeight: 'bold', marginRight: 8 }}>
            {item.rank}
          </span>
        )}
        {item.user_name || '--'}
      </span>
    ),
    // 用户头像
    avatarUrl: item.user_face_small || '',
    // 描述：部门名
    description: item.dept_name || '--',
    // 右上角显示：完成量 + 单位
    note: `${completeValue}${unitText}`,
    // 右下角显示：目标或完成率
    content: `${targetLabel}:${targetValue}`
  }
}

export default formatItem
