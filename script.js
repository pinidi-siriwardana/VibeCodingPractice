// SECTION NAVIGATION

function showSection(section){

document.querySelectorAll(".section").forEach(sec=>{
sec.classList.add("hidden")
})

document.getElementById(section).classList.remove("hidden")

}


// DARK MODE

const themeToggle = document.getElementById("themeToggle")

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode")

})


// GPA CALCULATOR

function calculateGPA(){

let c1=Number(document.getElementById("c1").value)
let c2=Number(document.getElementById("c2").value)
let c3=Number(document.getElementById("c3").value)

let g1=Number(document.getElementById("g1").value)
let g2=Number(document.getElementById("g2").value)
let g3=Number(document.getElementById("g3").value)

let totalCredits=c1+c2+c3

let gpa=((c1*g1)+(c2*g2)+(c3*g3))/totalCredits

document.getElementById("gpaResult").innerText="GPA: "+gpa.toFixed(2)

}


// POMODORO TIMER

let time=1500
let timer

function startTimer(){

timer=setInterval(()=>{

let minutes=Math.floor(time/60)
let seconds=time%60

document.getElementById("time").innerText=
minutes+":"+(seconds<10?"0"+seconds:seconds)

time--

if(time<0){
clearInterval(timer)
alert("Time is up!")
}

},1000)

}

function resetTimer(){

clearInterval(timer)
time=1500
document.getElementById("time").innerText="25:00"

}


// IDEA BOARD

let members=[]
let ideas=[]

const memberInput=document.getElementById("newMemberInput")
const addMemberBtn=document.getElementById("addMemberBtn")
const memberList=document.getElementById("memberList")
const memberSelect=document.getElementById("memberSelect")

const ideaInput=document.getElementById("ideaInput")
const submitIdeaBtn=document.getElementById("submitIdeaBtn")

const ideasList=document.getElementById("ideasList")
const totalIdeas=document.getElementById("totalIdeas")

const filterInput=document.getElementById("filterInput")
const clearAllBtn=document.getElementById("clearAllBtn")

addMemberBtn.addEventListener("click",()=>{

const name=memberInput.value.trim()

if(name==="") return

members.push(name)

const li=document.createElement("li")
li.textContent=name
memberList.appendChild(li)

const option=document.createElement("option")
option.value=name
option.textContent=name
memberSelect.appendChild(option)

memberInput.value=""

})

submitIdeaBtn.addEventListener("click",()=>{

const member=memberSelect.value
const text=ideaInput.value.trim()

if(!member || text==="") return

const idea={
member:member,
text:text
}

ideas.push(idea)

displayIdeas()

ideaInput.value=""

})

function displayIdeas(list=ideas){

ideasList.innerHTML=""

list.forEach(idea=>{

const div=document.createElement("div")
div.classList.add("idea-card")

div.innerHTML=`<strong>${idea.member}</strong><p>${idea.text}</p>`

ideasList.appendChild(div)

})

totalIdeas.textContent=list.length

}

filterInput.addEventListener("input",()=>{

const keyword=filterInput.value.toLowerCase()

const filtered=ideas.filter(i=>
i.member.toLowerCase().includes(keyword)||
i.text.toLowerCase().includes(keyword)
)

displayIdeas(filtered)

})

clearAllBtn.addEventListener("click",()=>{

ideas=[]
displayIdeas()

})