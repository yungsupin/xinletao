/**
 * Created by yungsupin on 2018/3/5.
 */
//����ģ�����̨ͨ��ajax���̨��������
//д��ں���
//1.��ȡ�������ݼ�һ���˵�
$(function(){
    $.ajax({
        type:"get",
        url:"/category/queryTopCategory",
        success:function(info){
            console.log(info);
            var html = document.querySelector(".first");
            var menu = template("tmp",info);
            html.innerHTML = menu;
        //    ��Ⱦ�����˵�
            rendSecond(info.rows[0].id)
        }
    });
//    2.�����һ���˵���������Ⱦ�����˵�
    $('.first').on('click','li',function(){
        $(this).addClass("now").siblings().removeClass("now");
        var id = $(this).data('id');
        rendSecond(id);
    //    ������������µ�0��0��λ��
        mui('.mui-scroll-wrapper').scroll()[1].scrollTo(0,0,300);
    });
//   ��ȡ�Ҳ�����ݼ��Ƕ����˵�

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