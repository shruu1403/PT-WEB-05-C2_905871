// fill in javascript code here
const myForm=document.querySelector("form")
const namee=document.getElementById("name")
const doctID=document.getElementById("docID")
const spec=document.getElementById("dept")
const expp=document.getElementById("exp")
const mail=document.getElementById("email")
const mob=document.getElementById("mbl")

let tbody=document.querySelector("tbody")
 let allTask=[]
 myForm.addEventListener("submit",function(e)
{
    e.preventDefault();
    let del;
    Data=
    {
        name:namee.value,
        docID:doctID.value,
        specialization:spec.value,
        experience:expp.value,
        email:mail.value,
        mobile:mob.value
    }
    console.log(Data["name"])

    if(expp.value>=5)
    {
        Data["Role"]="Senior"
    }
    else if(expp.value >=2 && expp.value<5)
    {
        Data["Role"]="Junior"
    }
    else if(expp.value<=1)
    {
        Data["Role"]="Trainee"
    }
    allTask.push(Data)

    tbody.innerHTML=""

    allTask.map((ele)=>
    {
        const tr=document.createElement("tr")
        const td1=document.createElement("td")
        const td2=document.createElement("td")
        const td3=document.createElement("td")
        const td4=document.createElement("td")
        const td5=document.createElement("td")
        const td6=document.createElement("td")
        const td7=document.createElement("td")
        const td8=document.createElement("td")
        let btn =document.createElement("button")

        btn.innerText="DELETE"
        btn.addEventListener("click",function()
    {
        del=allTask.indexOf(ele)
        tr.innerHTML=""
        if(del!==-1)
        {
            allTask.splice(del,1)

        }        
    })

        td1.innerText=ele.name
        td2.innerText=ele.docID
        td3.innerText=ele.specialization
        td4.innerText=ele.experience
        td5.innerText=ele.email
        td6.innerText=ele.mobile
        td7.innerText=ele.Role
        td8.append(btn)

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        console.log(tr.innerText)
        tbody.append(tr)

    })
})


