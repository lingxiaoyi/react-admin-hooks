// 拼接0
const add0 = s => s > 9 ? '' + s : '0' + s;

/**
 * 获取日期格式化
 * @param  {[type]} d 日期差 默认获取昨天
 * @param  {[type]} m 月差
 * @return {[type]}   format: 20180505
 */
export const getFormatDate = (d = -1, m = 0) => {
  const diff = 1000 * 60 * 60 * 24 * d + 1000 * 60 * 60 * 24 * 30 * m;
  const n = new Date(Date.now() + diff);

  return n.getFullYear() + add0(n.getMonth() + 1) + add0(n.getDate())
}

/**
 * 获取月份格式化
 * @param  {[type]} d 日期差 默认获取昨天
 * @param  {[type]} m 月差
 * @return {[type]}   format: 20180505
 */
export const getFormatMonth = (m = 0) => {
  const diff = 1000 * 60 * 60 * 24 * 30 * m;
  const n = new Date(Date.now() + diff);

  return n.getFullYear() + add0(n.getMonth() + 1)
}

/**
 * 判断日期是否是周末
 * @param  {[type]} date 20181010
 * @return {[type]}      [description]
 */
export const isWeekend = date => {
  date = date + '';
  var year = date.substr(0, 4),
    month = date.substr(4, 2) - 1,
    day = date.substr(6, 2);
  let d = new Date(year, month, day).getDay();
  return d === 0 || d === 6;
}

/**
 * 判断日期是否是今天
 * @param  {[type]} date 20181010
 * @return {[type]}      [description]
 */
export const isToday = (date = getFormatDate()) => {
  var year = date.substr(0, 4),
    month = date.substr(4, 2) - 1,
    day = date.substr(6, 2);
  return new Date(year, month, day).toDateString() === new Date().toDateString();
}

/**
 * 判断日期是否是昨天
 * @param  {[type]} date 20181010
 * @return {[type]}      [description]
 */
export const isYesterday = (date = getFormatDate()) => {
  if(typeof date !== 'string') {
    return false
  }
  var year = date.substr(0, 4),
    month = date.substr(4, 2) - 1,
    day = date.substr(6, 2) - 0 + 1;
  return new Date(year, month, day).toDateString() === new Date().toDateString();
}

/**
 * 判断指定日期的的几天前或几天后 默认昨天
 * @param  {[type]} date 20181010
 * @return {[type]}      [description]
 */
export const getCompareDate = (date = getFormatDate(), d = 0) => {
  var year = date.substr(0, 4),
    month = date.substr(4, 2) - 1,
    day = date.substr(6, 2);
  var n = new Date(year, month, day - 0 + d);
  return n.getFullYear() + add0(n.getMonth() + 1) + add0(n.getDate());
}

/**
 * 获取当前时间    2018-08-15 12:30
 * @return {[type]}   [description]
 */
export const getFormatCurTime = d => {
  let now = new Date(),
    curYear = now.getFullYear(),
    curMonth = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1) : '0' + (now.getMonth() + 1),
    curDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate(),
    curHours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours(),
    curMinu = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
  return [`${curYear}-${curMonth}-${curDate} ${curHours}:${curMinu}`, `${curYear}${curMonth}${curDate}`]
}

/**
 * 数字千分位
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export const thousandBit = str => {
  let reg = /\d(?=(?:\d{3})+(?:\.\d+|$))/g;
  return (str + '').replace(reg, '$&,');
}

/**
 * 获取树结构最里层的指定key集合
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export const getTreeInnerKeys = (data, key = 'id', childrenKey = 'children') => {
  let result = [];
  if(!data || !data.length) {
    return result;
  }
  let stack = [...data];
  let tmpNode;
  while (stack.length) {
    tmpNode = stack.shift();
    if (tmpNode[childrenKey] && tmpNode[childrenKey].length) {
      for (let i = tmpNode[childrenKey].length - 1; i >= 0; i--) {
        stack.unshift(tmpNode[childrenKey][i]);
      }
    }
    // else {
      tmpNode[key] && result.push(tmpNode[key])
    // }
  }
  return result;
}