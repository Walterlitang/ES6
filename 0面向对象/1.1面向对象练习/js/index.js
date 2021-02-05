var that;
class Tab{
    constructor(id){
        that=this;
        //获取元素
        this.main=document.querySelector(id);
        this.add=this.main.querySelector(".tabadd");
        //li的父元素
        this.ul=this.main.querySelector(".fisrstnav ul:first-child");
        //section的父元素
        this.section_f=this.main.querySelector('.tabscon');
        this.init();
    }
    //初始化
    init(){
        //init 初始化操作让相关的元素绑定事件
        this.updateNode();
        this.add.onclick=this.addTab;
        for(var i=0;i<this.list.length;i++){
            this.list[i].index=i;
            this.list[i].onclick=this.toggleTab;
            this.remove[i].onclick=this.removeTab;
            this.span[i].ondblclick=this.editTab;
        }
    }
    //获取所有的 li 和 section
    updateNode(){
        this.list=this.main.querySelectorAll("li");
        this.section=this.main.querySelectorAll("section");
        this.remove=this.main.querySelectorAll(".icon-guanbi");
        this.span=this.main.querySelectorAll(".fisrstnav li span:first-child");
    }
    //1.切换功能
    toggleTab(){
        that.clearClass();
        this.className="liactive";         
        that.section[this.index].className="conactive";
    }
    //清楚类名
    clearClass(){
        for(var i=0;i<this.list.length;i++){
            this.list[i].className="";
            this.section[i].className="";
        }
    }
    //2.添加功能
    addTab(){
        that.clearClass();
        //创建li元素和section
        var random=Math.random();
        var li_s='<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>';
        var section_s='<section class="conactive">'+random+'</section>';
        //把两个元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend',li_s);
        that.section_f.insertAdjacentHTML('beforeend',section_s);
        that.init();
    }
    //3.删除功能
    removeTab(e){
        //阻止冒泡
        e.stopPropagation();
        var index=this.parentNode.index;
        that.list[index].remove();//remove()方法可以直接删除元素
        that.init();
        //当我们删除的不是选定状态的，原来的状态 li 不变
        if(document.querySelector(".liactive")) return;
        //当我们删除了选中状态的这个li的时候，让他的前一个li处于选定状态
        index--;
        //手动调用我们的点击事件 不需要鼠标触发
        that.list[index] && that.list[index].cick();
    }
    //4.修改功能
    editTab(){
        //双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty();
    }
}

var tab=new Tab("#tab");
//tab.init();