var that;
class Tab{
    constructor(id){
        that=this;
        this.main=document.querySelector(id);
        this.li=this.main.querySelectorAll("li");
        this.init();
    }
    init(){
        for(var i=0;i<this.li.length;i++){
            //this.li[i].index=i;
            this.li[i].onclick=this.tabToggle;
        }
    }
    clearClass(){
        for(var i=0;i<this.li.length;i++){
            this.className="";
        }
    }
    tabToggle(){
        that.clearClass();
        this.className="liactive";
    }
}
var tab=new Tab("#tab");