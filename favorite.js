

function getElementWhenItExists(selector){
  // flag to end recursive search if timed out
  console.log("++++++++++++++++++++++++");
  //
  let keepSearching = true

 var tid = setInterval(function(){
        //called 5 times each time after one second  
      //before getting cleared by below timeout. 
            const node = document.getElementsByClassName("ClawbackWarningOverlay-container")[0];
			    if ( !node && keepSearching){
		//return await delay(1000).then(search)
	}
	if(node){
		node.style.display = "none";
	}

   },1000); //delay is in milliseconds 

  //alert("after setInterval"); //called second

setTimeout(function(){
     clearInterval(tid); //clear above interval after 5 seconds
},1000*60*60*24);
  // recursively search for element every 100ms
  //
 

  // race search against timeout and return promise with
  //  found node or a timeout error
  //
 
}

const link = getElementWhenItExists('ClawbackWarningOverlay-container');
console.log(link);