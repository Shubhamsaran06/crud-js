document.getElementById("adddiv").setAttribute("style","display:none;");
document.getElementById("result").setAttribute("style","display:none;");
// document.getElementById("nodata").setAttribute("style","display:none;");

function show(){
    document.getElementById("adddiv").setAttribute("style","display:show;");
    document.getElementById("inpbtn1").setAttribute("style","display:show;");
    document.getElementById("inpbtn2").setAttribute("style","display:none;");
    document.getElementById("addhead").innerText="Add Contact";
}
function none(){
  document.getElementById("adddiv").setAttribute("style","display:none;");
}

function resultnone(){
  document.getElementById("result").setAttribute("style","display:none;");
}


function eye(i){
  
    document.getElementById("result").setAttribute("style","display:show;");
    data = JSON.parse(localStorage.getItem("contactdata"))
    console.log(data[i]);
    document.getElementById("result").innerHTML =(
           `<h3> Name: ${data[i].name} </h3>
            <h3> Phone Number: ${data[i].phnumber} </h3>
            <h4> Email Address: ${data[i].email} </h4>
            <h3> Address : ${data[i].address}   </h3>
            <button onclick="resultnone()" class="Add2btn">Ok</button>
           `
    );
}

function finddata(i){
  
  // let data1=[{name:"Ram",post:"HR"},{name:"Shyam",post:"Teacher"},{name:"Rama",post:"Manager"}]
  //  data1 = JSON.parse(localStorage.getItem("contactdata"))
  // console.log(data)
  
  let s = document.getElementById("search").value; 
  // console.log(s);
  data.find(function(a){
   if(s==a.name||s==a.post){
      a=[a]

      console.log(a);
      // console.log(h);
      // document.getElementById("maininput").innerHTML = a.map((value,index)=>{
      //     return(`
      //     <div class="mainin">
      //     <p> ${i} </p>
      //     <img src="usericon.png" alt="" style="width:40px">
      //     <p id="pname">${value.name}</p>
      //     <p id="pnum">${value.phnumber}</p>
      //     <div style="display:flex;">
      //     <button class="ibtn" onclick="eye(${a.i})"><i class="fa fa-eye" aria-hidden="true"></i></button>
      //     <button class="ibtn" onclick="deleted(${i})"><i class="fa fa-trash" aria-hidden="true"></i></button>
      //     <button class="ibtn" onclick="update(${i})"><i class="fa fa-pencil" aria-hidden="true"></i></button>
      //     </div>
    
      //    </div>
      //        `)   
      //     });
  //     }else{
  //     document.getElementById("div1").innerText="Data Not Found";
   }
})   

}






function update(i){
    document.getElementById("adddiv").setAttribute("style","display:show;");
    document.getElementById("inpbtn1").setAttribute("style","display:none;");
    document.getElementById("inpbtn2").setAttribute("style","display:show;");
    document.getElementById("addhead").innerText="Update Contact";
    data = JSON.parse(localStorage.getItem("contactdata"))
    
    document.getElementById("inpbtn2").addEventListener("click",newupdate)
    // console.log(data[i]);
    // let k = data[i].name;
    // console.log(k);
    document.getElementById("name").value = data[i].name;
    document.getElementById("num").value = data[i].phnumber;
    document.getElementById("email").value = data[i].email;
    document.getElementById("Address").value = data[i].address;

    function newupdate(){
         let k1=document.getElementById("name").value;
         let k2=document.getElementById("num").value;
         let k3=document.getElementById("email").value;
         let k4=document.getElementById("Address").value;
        
         
         data[i].name = k1 ;  
         data[i].phnumber=k2;
         data[i].email=k3;
         data[i].address=k4;

         if ((k1 == "" || k2 == "" || k3 =="" || k4 =="")) {
          alert("please fill the form");
        }else{
          

         let newobj = {k1,k2,k3,k4};
        //  console.log(newobj)

        newobj=data[i] ;
        console.log(data[i]);

     localStorage.setItem("contactdata", JSON.stringify(data))
       refresh()
      //  $("form")[0].reset();


       k1 = "" ;
        k2 = "" ;
         k3 ="" ;
          k4 ="" ;
        }
   }
  }


function deleted(i) {
        let copy = data
    copy.splice(i, 1)
    localStorage.setItem("contactdata", JSON.stringify(copy))
    console.log(copy);
    refresh()
  } 

let data =[];
refresh();
  function submit(e) {
    console.log(data)
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phnumber=document.getElementById("num").value;
    let address=document.getElementById("Address").value;
    if ((name == "" || email == "" || phnumber=="" || address=="")) {
      alert("please fill the form");
      
    }
    else {
      data = [...data, { name,email,phnumber,address }];
      localStorage.setItem("contactdata", JSON.stringify(data))
      refresh();
    }
    console.log(data);
  } 



  function refresh() {
    let element ;
       data = JSON.parse(localStorage.getItem("contactdata")) ;
      if(data==""){
        document.getElementById("maininput").innerText = `Contact list is Empty Please Add Contacts`;
        document.getElementById("maininput").setAttribute("style","color:white;font-size:30px");
        
      }else{
        
        
      document.getElementById("maininput").setAttribute("style","color:black");
      element = data.map(function(v,i){
       return(
        `<div class="mainin">
              <p> ${i+1} </p>
              <img src="usericon.png" alt="" style="width:40px">
              <p id="pname">${v.name}</p>
              <p id="pnum">${v.phnumber}</p>
              <div style="display:flex;">
              <button class="ibtn" onclick="eye(${i})"><i class="fa fa-eye" aria-hidden="true"></i></button>
              <button class="ibtn" onclick="deleted(${i})"><i class="fa fa-trash" aria-hidden="true"></i></button>
              <button class="ibtn" onclick="update(${i})"><i class="fa fa-pencil" aria-hidden="true"></i></button>
              </div>
        
             </div>`)
    })
    document.getElementById("maininput").innerHTML = element;
  }
   $("form")[0].reset();
  }

 




























   

