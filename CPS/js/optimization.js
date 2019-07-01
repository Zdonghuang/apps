/*排程优化*/
    var arr=[
        {
            task_id:1,
            worker_id:['ME0001','ME0002','ME0003','EE0001','EE0002'],
            fan_id:13,
            ship_id:1,
            start_time:'10:00',
            end_time:'12:00',
            repaire_pay:2635.693334
        },
        {
            task_id:2,
            worker_id:['ME0004','ME0005','EE0003','EE0004','EE0005E','EE0006'],
            fan_id:15,
            ship_id:2,
            start_time:'10:45',
            end_time:'12:45',
            repaire_pay:2341.3988
        },{
            task_id:3,
            worker_id:['ME0010','EE0007','IT0001','IT0002'],
            fan_id:17,
            ship_id:1,
            start_time:'10:45',
            end_time:'13:15',
            repaire_pay:456.9838
        },{
            task_id:4,
            worker_id:['ME0011'],
            fan_id:14,
            ship_id:1,
            start_time:'11:00',
            end_time:'12:30',
            repaire_pay:548.4066672
        },{
            task_id:5,
            worker_id:['ME0006'],
            fan_id:18,
            ship_id:1,
            start_time:'11:30',
            end_time:'12:45',
            repaire_pay:336.7020001
        },{
            task_id:'task0006',
            worker_id:['EE0003','EE0004','EE0006'],
            fan_id:19,
            ship_id:1,
            start_time:'13:00',
            end_time:'16:15',
            repaire_pay:2098.098933
        },{
            task_id:'task0007',
            worker_id:['ME0004','ME0005'],
            fan_id:20,
            ship_id:1,
            start_time:'13:30',
            end_time:'16:15',
            repaire_pay:1445.080268
        },{
            task_id:'task0008',
            worker_id:['ME0008'],
            fan_id:20,
            ship_id:2,
            start_time:'11:00',
            end_time:'15:30',
            repaire_pay:1745.51953
        },{
            task_id:'task0009',
            worker_id:['ME0003', 'EE0001','EE0002'],
            fan_id:21,
            ship_id:2,
            start_time:'13:15',
            end_time:'17:00',
            repaire_pay:980.6226677
        },{
            task_id:'task0010',
            worker_id:['ME0002','ME0007', 'EE0007', 'IT0001','IT0002'],
            fan_id:23,
            ship_id:2,
            start_time:'15:00',
            end_time:'16:00',
            repaire_pay:4240.59267
        }
    ];
    sech();
    function sech(){
        for(var i=0; i<arr.length;i++) {
            var dip ='';
            for(var j=0;j<arr[i].worker_id.length;j++){
                dip+='<b>'+arr[i].worker_id[j]+'</b>'+' '
            }
            var w = ((Ms(arr[i].end_time) - Ms(arr[i].start_time)) / 900) * 16;
            var l = ((Ms(arr[i].start_time) - 28800) / 900) * 16;

            var oDiv = document.createElement('div');
            oDiv.className = 'prog';
            var dis = '<i class="time1">' + arr[i].start_time + '</i>\
        <i class="time2">' + arr[i].end_time + '</i>\
        <div class="tab_task" >\
            <h3>风机<b>' + arr[i].fan_id + '</b>号 任务名称</h3>\
        <p>船号: '  + arr[i].ship_id + '</p>\
        <div class="clearfix" style="margin-top: 12px">\
            <p class="fl tab_pop" style="margin-top: 0">人员：</p>\
        <div class="fl tab_id" >'+dip+'</div>\
        </div>\
        <p>时间：<b>2017-05-07</b></p>\
        <p>费用：<b>' + arr[i].repaire_pay + '</b>元</p>'
                if (arr[i].ship_id == 1) {
                    oDiv.style.background = 'rgb(0,146,200)';
                } else {
                    oDiv.style.background = 'rgb(43,153,0)';
                }
                oDiv.style.width = w + 'px';
                oDiv.style.left = l + 'px';
                oDiv.innerHTML = dis;
                $('.task_td').eq(i).html(oDiv);
                //alert($('.task_td').length)
            }
            $('.task_td').each(function(i,element){
                $('.prog').on('mouseover',function(){
                    $(this).find('div.tab_task').show();
                }).on('mouseout',function(){
                    $(this).find('div.tab_task').hide();
                })
            });

            function Ms(time){
                var h = time.substring(0,time.indexOf(':'));
                var s1 = h*3600;
                var m=time.substring(time.indexOf(':')+1);
                var s2 = m*60;
                return s1+s2;
            }
    }