var bookmarkName=document.getElementById('bookmarkName');
var bookmarkUrl=document.getElementById('bookmarkUrl');
var webList=[]

if(localStorage.getItem("linksData")){
    webList=JSON.parse(localStorage.getItem("linksData"))
     displayWebsites();
}

function addWebsite(){
    
   if(bookmarkName.value&&bookmarkUrl.value){ 

     var website={
    name:bookmarkName.value,
    url:bookmarkUrl.value
   }
   
   webList.push(website);
   console.log(webList);
   localStorage.setItem("linksData",JSON.stringify(webList))
 
    clearWebsite();
   displayWebsites();
     
  }


  else{
    document.getElementById('contantDiv').innerHTML= 
`
    <div class="rounded-2  p-4  mx-auto head-content bg-white ">  
                     <div class="box-header  d-flex justify-content-between align-items-center mb-4">
                
                        <div class="circles d-flex">
                            <span class="rounded-circle me-2 bg-danger"></span>
                            <span class="rounded-circle me-2 bg-warning"></span>
                            <span class="rounded-circle me-2 bg-success"></span>
                        </div>
                        <button class="btn border-0" onclick="notValidate()"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <p class="pb-2 m-0">Site Name or Url is not valid, Please follow the rules below :</p>
                    <ol class="rules list-unstyled m-0">
                        <li><i class="fa-regular fa-circle-right"></i>Site name must contain at least 3 characters</li>
                        <li><i class="fa-regular fa-circle-right"></i>Site URL must be a valid one</li>
                    </ol> 
                    </div> 
                    `
                    

} 

}




function clearWebsite(){
    bookmarkName.value="";
    bookmarkUrl.value="";
}




function displayWebsites(){
    var cartoona="";
    for(var i=0;i<webList.length;i++){
        cartoona+=`
          <tr>
                <td>${i+1}</td>
                <td>${webList[i].name}</td>

                <td><button class="btn  btn-visit"><i class="fa-solid fa-eye pe-2"></i><a  href="${webList[i].url}" class="text-decoration-none  text-white " >Visit</a>   </button></td>
                <td><button class="btn btn-delete" onclick="deleteWebsite(${i})"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
            </tr>
        `
    }
    document.getElementById('tableBody').innerHTML=cartoona;
    
}




function deleteWebsite(index){
  webList.splice(index,1);
  localStorage.setItem("linksData",JSON.stringify(webList))
  displayWebsites();
}


function validateItem(name){
    var regix =/^\w{3,}$/;
if(regix.test(name)){
    bookmarkName.classList.replace('is-invalid','is-valid')
   
}
else{
    bookmarkName.classList.add('is-invalid')
    
}
}

function validateproduct(url){
    var regix =/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
if(regix.test(url)){
    bookmarkUrl.classList.replace('is-invalid','is-valid')
    return true
    
}
else{
    bookmarkUrl.classList.add('is-invalid')
    return false
}
}

function notValidate(){
 document.getElementById('contantDiv').innerHTML=`
       <div class="  p-4  d-none  " >
        <div class="head-content bg-white  mx-auto rounded-2"> 
        </div>
        </div>
   `  
  
}


