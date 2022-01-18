<template>
  <div>
    <mt-header  style="border-bottom: 1px soild black">
      <router-link to="/choosesite" slot="left">
        <mt-button icon="back">UME影城 (杭州城西店)</mt-button>
      </router-link>
    </mt-header>

    <!-- 徐高广-选择场馆内的座位页 -->
    <div class="room">
      <!-- 上部分 -->
      <div id="head_div">
        <!-- 座位列表 -->
        <div id="seat_msg">
          <div class="head_seat1">
            <!--提示信息-->
            <a class="seat_noa"><img src="/img/xggpic/已选.jpg" />&nbsp;已选</a
            >
            <a class="seat_noa"><img src="/img/xggpic/未选.jpg" />&nbsp;空座</a
            >
            <a class="seat_noa cursor:not-allowed"
              ><img src="/img/xggpic/有人.jpg" />&nbsp;已售</a
            >
          </div>
          <div class="head_seat2">
            <div class="shuangtou">
              <div class="tu">
                <img src="" alt="" />
              </div>
              <div id="display">4号DTS临境音激光厅 银幕</div>
            </div>
          </div>
        </div>

        <div>
          <!-- 左侧字母悬浮排序（相当于座位排列） -->
          <div class="zuo">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
            </ul>
          </div>
          <div id="seat" class="you">
            <!--可选座位-->
            <div class="seatsRow">
              <!--第一排-->
              <a class="seat"><img src="/img/xggpic/有人.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/有人.jpg" /></a>
              <!-- <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a> -->
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/有人.jpg" /></a>
            </div>

            <div class="seatsRow">
              <!--第二排-->
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/有人.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/有人.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/有人.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
            </div>

            <div class="seatsRow">
              <!--第三排-->
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
            </div>

            <div class="seatsRow">
              <!--第四排-->
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/有人.jpg" /></a>
            </div>

            <div class="seatsRow">
              <!--第五排-->
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
            </div>

            <div class="seatsRow">
              <!--第六排-->
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
            </div>

            <div class="seatsRow">
              <!--第7排-->
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
            </div>
            <div class="seatsRow">
              <!--第10排-->
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat"><img src="/img/xggpic/未选.jpg" /></a>
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
              <a class="seat_no"><img src="/img/xggpic/空白.jpg" /></a>
            </div>
          </div>
        </div>
      </div>

      <!-- 下部分 -->
      <div class="bottom-div">
        <!--右边的电影详情-->
        <div class="boxr">
          <div class="boxr1">
            <li>为了疫情防控，观影需全程戴上口罩</li>
            <br>
          </div>
          <div class="boxr2">
            <li><h5>长津湖</h5></li>
            <li><a>今天</a> 12月12日 20:00-22:03 <a>国语 2D</a></li>
          </div>

          <div id="buy">
            <div id="seat_selected">
              <p></p>
              <div id="selected_seat"></div>
              <br />

              <div id="allseats">
                <a style="font-size: 15px"> 已选择 </a>
                
                <a style="font-size: 15px">个座位,</a>
                <a style="color: red; font-size: 15px; font-weight: 600"
                  >再次点击可取消</a
                >
                <!-- <span2
                  style="color: red; font-size: 15px; font-weight: 600"
                ></span2> -->
              </div>
            </div>

            <div>
              <a id="mdx">买东西</a>
              <span id="fh"></span>
              <br>
              <a>单价: &nbsp;&nbsp;&nbsp;<b>￥&nbsp;&nbsp;33.00 元</b></a>

              <div id="total">
                总价:
                <a style="color: red">￥</a>
                <span> 0.00元 </span>
              </div>
            </div>
          </div>
          <div class="boxr4">
            <button type="button" class="btna" id="pay">
              <span style="color: red; font-size: 15px">
                0
              </span>
              <a>清先选座</a></button>
                  <div>
                    111
                    <button class="xtt">1</button>
                  </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  let xtt=$(".xtt")
  xtt.onclick=()=>{
    console.log(123)
  }
</script>
<script>
$(document).ready(function () { //等待页面加载完成
    //  // 影院小贴士
    //  $(function () {
    //     $(".btn").click(function () {
    //         $(".main").fadeIn();
    //     });
    //     $(".btn1").click(function () {
    //         $(".main").fadeOut();
    //     });
    // });

    var seat_array = new Array(5);

    $('#bookNowButton').hide(); // 隐藏预定按钮

    var seat_num; //座位号
    var totle_price = 0; //总票价
    var ticket_price = 38; //票价
    //var max_seat = 5; //最大预定的座位个数
    var seat_count = 0;

    //获取座位的编号
    $('.seat').each(function () {
        //获取行号
        var row_num = parseInt($(this).index()) + 1;
        var column_num = parseInt($(this).parent().index()) + 1;
        //座位号 = 行-列
        seat_num = row_num + "-" + column_num;
    })

    $('.btn').each(function () {

    })


    //选座位
    $('.seat').click(function () {
        //判断该座位是否被选中
        if ($(this).hasClass('class_selected')) {
            //如果选中了，再次点击就是取消选中
            $(this).removeClass('class_selected');
            $(this).find('img').attr("src", "img/未选.jpg");
            //获取当前座位的坐标(在那一排，哪一个位置)
            var column_num = parseInt($(this).index()) + 1;
            var row_num = parseInt($(this).parent().index()) + 1;
            //在页面上显示出来选中的座位信息
            var seat_id = "seat_id_" + row_num + "-" + column_num;

            console.log(seat_id);

            //取消选择，然后将页面上显示的座位信息去掉
            $("#selected_seat ." + seat_id).remove();

            //计数器减1
            seat_count--;

            $("#allseats > span").html(seat_count); //更改显示出来的座位数


            //判断已经选这的座位数是否超出限制6，并且即将要选中的这个座位，是没有选中的
        } else if (seat_count < 6 && !$(this).hasClass('class_selected')) {

            //选中了 计数器+1
            seat_count++;

            $(this).addClass("class_selected"); // 添加选中css
            // //选中之后替换图片
            $(this).find('img').attr("src", "img/已选.jpg");

            //获取当前座位的坐标(在那一排，哪一个位置)
            var column_num = parseInt($(this).index()) + 1;
            var row_num = parseInt($(this).parent().index()) + 1;


            //在页面上显示出来选中的座位信息
            var seat_id = "selected_" + row_num + "_" + column_num;

            // $( "#selected_seat" ).append("<span style='border: 1px red solid; font-size:17px; font-weight:600; color:red; text-align: center; background-color: white;' class='seat_id"+row_num+"-"+column_num+" '>&nbsp;" + row_num+"排"+column_num  +"座&nbsp;</span>");

            $("#selected_seat").append(
                "<span style='border: 1px red solid; font-size:17px; font-weight:600; color:red; text-align: center; background-color: white;'  class='seat_id_" +
                row_num + "-" + column_num + " '>&nbsp;" + row_num + "排" + column_num +
                "座&nbsp;</span> ");



            $("#allseats > span").html(seat_count); //更改显示出来的座位数

        } else {
            alert("您选中的座位数已超出限制");
            // $('#allseats > span2').alert('')
        }

       


        //判断是否显示支付按钮
        if (seat_count > 0) {
            $('#text').show(); // 显示预定按钮
            $('#total>span').show()
        } else {
            $('#text').disabled;
            $('#total>span').hide() // 隐藏预定按钮
        }

        //计算总价
        total_bill = seat_count * ticket_price + ".00 元";
        $('#total > span').html(total_bill);



        let a = '请先选座'
        let b = '确认选座'
        $('#total')
        //判断是否按钮不可按
        if (seat_count > 0) {
            $('#total>#pay').html(b)
        } else {
            $('#total>#pay').html(a)
            $('.boxr4>button').disabled();
        }
    })
});
</script>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* 全 */
body,
.room,
html {
    width: 100%;

}

.room {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    padding: 1rem 0 0 0;
}

/* 上部分 */
#head_div {
    width: 100%;
    height: 400px;
    margin: auto;
    padding: 0 0.5rem 0 0.5rem;
    /*background-color: darkseagreen;*/
}
.head_seat1{
    padding: 0 4rem 0;
}
.seat_noa>img{
    width: 0.9rem;
    margin: 0  0.5rem 0 0.5rem;
}


/* 座位列表 */
#head_div>.seat_msg {
    width: 100%;
}

.head_seat2 {
    width: 100%;
    height: 4rem;
}

.head_seat2>.shuangtou {
    margin: 0 4rem 0 3rem;
}

#display {
    margin: 0 3rem 0 3rem;
    font-size: 0.5rem;
    
}

/* 左 */
ul {
    background-color: rgb(231, 228, 228);
    width: 16px;
    height: 14rem;
    /* margin: 0 auto; */
    line-height: 28px;
    /* position: fixed; */
    font-family: '黑体';
    font-weight: 100;
    font-size: 10px;
    text-align: center;
    float: left;
    border-radius: 2rem;
}



/* 座位 */




.seat {
    margin: 0px 0px 0px 5px;
}

.seat_no {
    cursor: not-allowed;
    margin: 0px 0px 0px 5px;
}

.seat_true {
    margin: 0px 0px 0px 5px;
}



/* 下部分 */


.bottom-div {
    list-style-type: none;
    background-color: rgb(245, 244, 244);
    width: 100%;
    height: 15rem;
    
    border-radius: 2rem 2rem 0 0;
}
.boxr1{
    font-size: 0.5rem;
    border-bottom:1px solid rgba(0, 0, 0, 0.054) ;
    font-weight: 200;
    padding: 1rem 0 0 1rem;
    height: 3rem;
}
.boxr2{
    width: 100%;
    height: 1em;
    font-size: 0.5rem;
    padding: 0.5rem 0 0 1rem;
}
h5{
    font-size: 1rem;
}
.boxr4{
    margin-top: 3rem;
    width: 100%;
    height: 4rem;
    background-color: rgb(245, 244, 244);
    padding: 1rem 1rem 1rem 1.5rem;
    position:absolute;
    
}
.btna {
    
    width: 20rem;
    height: 2rem;
    border-radius: 3rem 3rem;
    text-align: center;
    background-color: rgb(255, 0, 0);
    color: white;
    border: none;
}

/*座位选中标示*/
.class_selected {
    background-image: url('/src/assets/xggimg1/已选.jpg');
}
</style>