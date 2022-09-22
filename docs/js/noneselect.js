document.addEvent('contextmenu',function(e){
    e=new Event(e);
    e.stop();
});
    
function NoneSelect() 
{
    document.body.ondrag = function () { 
        return false; 
    };

    document.body.onselectstart = function () { 
        return false; 
    };

    if(window.ie || window.opera) {
        document.body.setProperty("unselectable","on");
    }

    if(window.gecko) {
        document.body.setStyle("MozUserSelect","none");
    }
    
    if(window.webkit) {
        document.body.setStyle("KhtmlUserSelect","none");
    }
}

$(function(){
    $("body" || "input").bind("cut copy paste", function(){
        return false;
    });
});
