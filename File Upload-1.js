const form = document.querySelector("form");
var fileInput = document.getElementById("file-input"); // .file-input (class)

//form click
form.addEventListener("click", ()=>{
    fileInput.click();
})

// after file choose, what should happend?
var percentage = 0;
fileInput.onchange = ({target})=>{
    function updatePercentage(percentage,index) {
        document.getElementById("uploadPercentage"+index).innerText = percentage + "% "+index;
        document.getElementById("uploadProgress"+index).style.width =percentage+"%";
      }
      
      function sleepTimer(index) {
        console.log('sleep timer called ')
        var i = 0;
        var interval = setInterval(function() {
          updatePercentage(i, index);
          percentage=i;
          console.log(i)
          i++;
          if (i > 100) {
            clearInterval(interval);
          }
        }, 100); // Update the percentage every 100 milliseconds
      }
      
      // Usage example
    

    var progressArea = document.getElementById("progress-div")
    if(target.files.length > 0){
        

        var list = ""
        for(var i =0; i<target.files.length; i++){

          let imgUrl =  URL.createObjectURL(target.files[i])
          let fileName = target.files[i].name;
          var htm=   ` <li class="row">
               <img src="${imgUrl}" id="upload-img-preview"></img>
               <div class="content">
                <div class="details">
                    <span id="fileName" class="name">${fileName}</span>
                    <span id="uploadPercentage${i}" class="percent"></span>
                </div>
               <div class="Progress-bar">
                <div id="uploadProgress${i}" style="width:${percentage}%"  class="Progress"></div>
               </div>
            </div>
            </li>`
            list+=htm

           
          sleepTimer(i);
          
             
        }

        progressArea.innerHTML = list;
    }

    

    // var imgPrev = document.getElementById("upload-img-preview");
    // var fileNameDiv = document.getElementById("fileName");
    // var percentageDiv = document.getElementById("uploadPercentage");


    // fileNameDiv.innerText = target.files[0].name;
    // imgPrev.src = URL.createObjectURL(target.files[0])
    // let i=0;
   
    
    // for(let i=0; i<100; i++){
    //     setTimeout(() => {
    //     percentageDiv.innerText = i+"%";
            
    //     }, 100);
// }
}