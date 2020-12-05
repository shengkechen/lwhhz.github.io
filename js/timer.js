<script>
        var day = document.querySelector('.day');
        var hour = document.querySelector('.hour');
        var minute = document.querySelector('.minute');
        var second = document.querySelector('.second');
        var inputTime = +new Date('2020-10-01 00:00:00'); //输入时间的时间戳 在这里修改时间
        countDown();// 我们先调用一次这个函数，防止第一次刷新页面有空白
        setInterval(countDown, 1000); //定时 每隔一秒调用一次函数

        //封装倒计时函数
        function countDown() {
            var nowTime = +new Date(); //当前时间的时间戳
            times = (inputTime - nowTime) / 1000; //毫秒转化为秒
            var d = parseInt(times / 60 / 60 / 24); //天数的获取
            d = d < 10 ? '0' + d : d; //小于10补0操作
            d = d + '天'; //把天这个字存放到显示时间的盒子里
            day.innerHTML = d; //把得到的时间放入计时的盒子里
            var h = parseInt(times / 60 / 60 % 24);
            h = h < 10 ? '0' + h : h;
            h = h + '时';
            hour.innerHTML = h;
            var m = parseInt(times / 60 % 60);
            m = m < 10 ? '0' + m : m;
            m = m + '分';
            minute.innerHTML = m;
            var s = parseInt(times % 60);
            s = s < 10 ? '0' + s : s;
            s = s + '秒';
            second.innerHTML = s;
            return d + '天' + h + '时' + m + '分' + s + '秒'; //必须有返回值
        }
    </script>
