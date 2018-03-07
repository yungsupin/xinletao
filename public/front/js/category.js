/**
 * Created by yungsupin on 2018/3/5.
 */
//分类模块向后台通过ajax向后台请求数据
//写入口函数
//1.获取左侧的内容即一级菜单
$(function(){
    $.ajax({
        type:"get",
        url:"/category/queryTopCategory",
        success:function(info){
            console.log(info);
            var html = document.querySelector(".first");
            var menu = template("tmp",info);
            html.innerHTML = menu;
        //    渲染二级菜单
            rendSecond(info.rows[0].id)
        }
    });
//    2.当点击一级菜单，重新渲染二级菜单
    $('.first').on('click','li',function(){
        $(this).addClass("now").siblings().removeClass("now");
        var id = $(this).data('id');
        rendSecond(id);
    //    让区域滚动重新到0，0的位置
        mui('.mui-scroll-wrapper').scroll()[1].scrollTo(0,0,300);
    });
//   获取右侧的内容即是二级菜单

    function rendSecond (id){
        $.ajax({
            type:"get",
            url:"/category/querySecondCategory",
            data:{id:id},
            success:function(info){
                console.log(info);
                var html = document.querySelector('.second');
                var menu = template('tmp1',info);
                html.innerHTML = menu;
            }
        })
    }


});