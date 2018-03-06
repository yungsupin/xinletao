/**
 * Created by yungsupin on 2018/3/2.
 */
//写入口函数的作用
//1.等待页面加载完成
//2.防止全局变量污染

$(function(){

//    1.校验表单
    $("form").bootstrapValidator({
        //    配置校验的规则
        //    规则：用户名不能为空 长度2-6位
        //          密码不能为空  长度6-12位
        fields: {
            username: {
                //    给username配置校验规则
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength:{
                        min:2,
                        max:6,
                        message:'用户名长度应该是2-6位'
                    }
                }

            },
            password:{
                validators:{
                    notEmpty:{
                        message:'用户名不能位空'
                    },
                    stringLength:{
                        min:6,
                        max:12,
                        message:'密码长度应该是6-12位'
                    }
                }
            }
        },
    //    配置小图标 成功 失败 校验中
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },


    });

//    2.给表单注册一个校验成功的事件，当表单注册成功时阻止表单的默认提交事件，使用ajax进行提交
    $('form').on("success.form.bv",function(e){
        //阻止表单的默认行为
        e.preventDefault();
    //    通过ajax进行提交
        $.ajax({
            url:"/employee/employeeLogin",
            data:$("form").serialize(),
            type:"post",
            dataType:"json",
            success:function(info){
                console.log(info);
            },
        })
    })
});
