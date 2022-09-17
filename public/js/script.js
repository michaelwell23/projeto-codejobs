var c = 0;
function menu(){
  if(c % 2 == 0) {
document.querySelector('.cont_drobpdown_menu').className = "cont_drobpdown_menu active";    
document.querySelector('.cont_icon_trg').className = "cont_icon_trg active";    
c++; 
  }else{
document.querySelector('.cont_drobpdown_menu').className = "cont_drobpdown_menu disable";        
document.querySelector('.cont_icon_trg').className = "cont_icon_trg disable";        
c++;
  }
}