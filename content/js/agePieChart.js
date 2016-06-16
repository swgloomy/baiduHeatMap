/**
 * Created by gloomysw on 2016/06/15.
 */
var agePieOption = {
    backgroundColor:'#082740',
    legend: {
        orient: 'horizontal',
        left: 'left',
        bottom: 0,
        data: ['0-15岁  ','16-25岁','26-40岁','40岁以上'],
        textStyle:{
            color:'white',
            fontSize:11
        },
        itemHeight:8,
        left:'15px'
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '60%',
            center: ['50%', '39%'],
            itemStyle:{
                normal:{
                    label:{
                        show: true,
                        formatter: '{d}%'
                    },
                    labelLine :{show:true}
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        color:'white',
                        fontSize:10
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine:{
              normal:{
                  show:false,
                  length:2,
                  length2:2
              }
            },
            data:[
                {value:335, name:'0-15岁  '},
                {value:310, name:'16-25岁'},
                {value:234, name:'26-40岁'},
                {value:135, name:'40岁以上'}
            ]
        }
    ],
    color:['#4bcaff','#2a80b1', '#20bbb5', '#77fffa']
};

var agePieChart = echarts.init(document.getElementsByClassName('axon_showPieArea')[0]);
agePieChart.setOption(agePieOption);