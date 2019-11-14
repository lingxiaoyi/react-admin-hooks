import React, { Component } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

const colors = [
  '#3395ff',
  '#43b748',
  '#ffbe00',
  '#ff5a5f',
  '#6ccedf',
  '#8543E0',
  '#3436C7',
  '#223273'
];

export default ({
  dataSource = [],
  xAxisKey,
  yAxisKey,
  legendLabels,
}) => {
  let xdata = [...new Set(dataSource.map(l => l[xAxisKey]))];
  let seriesData = [];

  seriesData = yAxisKey.map((item, i) => ({
    name: Array.isArray(legendLabels) ? legendLabels[i] : item,
    type: 'line',
    showSymbol: false,
    zlevel: yAxisKey.length - i,
    data: dataSource.map(l => l[item])
  }))
    
  const getOptions = () => {
    return {
      grid: {
        left: 25,
        right: 30,
        bottom: 70,
        top: 20,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: legendLabels,
        bottom: 25,
        // show: true
      },
      color: colors,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        // inverse: reverse,
        data: xdata,
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff',
          }
        },
        axisLabel: {
          textStyle: {
            color: '#666',
            fontSize: 12
          }
        }
      },
      yAxis: {
        type: 'value',
        scale: true,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: ['#e8e8e8']
          }
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#666',
            fontSize: 12
          },
          formatter: function (value) {
            return (value >= 10000) ? value / 10000 + 'w' : value;
          }
        }
      },
      series: seriesData
    }
  }
  
  return (
    <div className="chart chart-line">
      <ReactEchartsCore
        style={{ height: '480px' }}
        echarts={echarts}
        option={getOptions()}
        notMerge={true}
        lazyUpdate={true} />
    </div>
  )
}