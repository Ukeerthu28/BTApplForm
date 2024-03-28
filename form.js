function handlerFunction(){
    new MultiSelectTag('00NVt000000NmAP')  // id
    }
    
    function handlerRole(){
        var selectedRole=document.getElementById('00NVt000000NmGr').value;
        if(selectedRole =='Other'){
            OtherRole.style.display='block';
            OtherRole.setAttribute("required","");
        }else{
            OtherRole.style.display='none';
            OtherRole.removeAttribute("required","");
        }
    }
    
    function handlerAssociate(){
        var selectedAssociate=document.getElementById('00NVt000000Nm3x').value;
         if(selectedAssociate=='District' ||selectedAssociate=='Organization'){
            supportTitle.style.display='block';
            istitle.style.display='none';
        }else if(selectedAssociate =='School'){
            istitle.style.display='block';
            supportTitle.style.display='none';
        }
        else{
            istitle.style.display='none';
            supportTitle.style.display='none';
        }
    }