function cart(){
var menuItems = document.getElementsByClassName('menuItems');
var str = '';
		for(i=0; i<3; i++){
        if(menuItems[i].checked===true)
        {
        str += menuItems[i].value+"";
        }
        alert(str);
        }
}