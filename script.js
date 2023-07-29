let myLeads = []
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-El");
console.log(ulEl);
const InputBtn = document.getElementById("input-btn");
let data=JSON.parse(localStorage.getItem("myLeads"));

if(data){
  myLeads=data
  render()
}

InputBtn.addEventListener("click", function saved() {
  myLeads.push(inputEl.value);
  render();
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

function render() {
  let list = "";
  for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML+="<li>"+myLeads[i]+"</li>" //instead innerHTML we used createElement() and append(), (same output)
    // li.textContent=myLeads[li]
    // ulEl.append(li)
    //to incr performance we used list variable to store html
    // list+="<li><a href='"+ myLeads[i] +"'>"+myLeads[i]+"</a></li>"
    //gonna use template string for easieness of multiline, by "" we cant write in multiline
    list += `<li>
           <a target="_blank" href='${myLeads[i]}'>
           ${myLeads[i]}
           </a>
           </li>`;
  }
  ulEl.innerHTML = list;
}

// localStorage.setItem("myLeads","https://react.dev/")

// localStorage.clear()
const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("click", function() {
  localStorage.clear()
  myLeads = []
  render()
})
const tabBtn=document.getElementById("tabbtn")

tabBtn.addEventListener("click",function tab(){
  chrome.tabs.query({active:true, currentWindow:true},function(tabs){
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); 
  render();
  })
})