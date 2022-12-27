let items = document.querySelector(".items")
let btn = document.querySelector(".btn")
// button's id

let b1 = document.querySelector("#b1")
let b2 = document.querySelector("#b2")
let b3 = document.querySelector("#b3")
let b4 = document.querySelector("#b4")
let b5 = document.querySelector("#b5")
let b6 = document.querySelector("#b6")
let b7 = document.querySelector("#b7")
let b8 = document.querySelector("#b8")
let b9 = document.querySelector("#b9")
let b10 = document.querySelector("#b10")

// info
let info = document.querySelector(".information");
let id = document.querySelector(".id");
let userId = document.querySelector(".userId");
let title = document.querySelector(".title");
let ok = document.querySelector(".ok")
ok.addEventListener("click", () => {
    info.style.display = "none"
})

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

b1.addEventListener("click", () => {
    items.innerHTML = ""
    page1()     
})
b2.addEventListener("click", () => {
    items.innerHTML = ""
    page2();
})
b3.addEventListener("click", () => {
    items.innerHTML = ""
    page3();
})
b4.addEventListener("click", () => {
    items.innerHTML = ""
    page4();
})
b5.addEventListener("click", () => {
    items.innerHTML = ""
    page5();
})
b6.addEventListener("click", () => {
    items.innerHTML = ""
    page6();
})
b7.addEventListener("click", () => {
    items.innerHTML = ""
    page7();
})
b8.addEventListener("click", () => {
    items.innerHTML = ""
    page8();
})
b9.addEventListener("click", () => {
    items.innerHTML = ""
    page9();
})
b10.addEventListener("click", () => {
    items.innerHTML = ""
    page10();
})

async function page1() {
    let b = 1;
    let res = await axios.get("/albums?_limit=10&_page=1")
    let rdata = res.data;
    let Title = []
    let Id = []
    let UserId = []
    rdata.forEach(function (l){
       let aa= `<li class = "item" id="i${b}">${l.title}</li>`
        items.innerHTML += aa;
        b++;
        Title.push(l.title)
        Id.push(l.id)
        UserId.push(l.userId)
    });
    for(let i = 1; i<=10; i++){
        let hozir = document.querySelector(`#i${i}`)
        hozir.addEventListener("click", () => {
            // console.log(j[i - 1]);
            info.style.display = "block"
            title.innerHTML = `Title: ${Title[i - 1]}`
            id.innerHTML = `ID: ${Id[i - 1]}`
            userId.innerHTML = `UserId: ${UserId[i - 1]}`
        })
     }
}
page1()
async function page2() {
    let b = 1;
    let res = await axios.get("/albums?_limit=10&_page=2")
    let rdata = res.data;
    let Title = []
    let Id = []
    let UserId = []
    rdata.forEach(function (l){
       let aa= `<li class = "item" id="i${b}">${l.title}</li>`
        items.innerHTML += aa;
        b++;
        Title.push(l.title)
        Id.push(l.id)
        UserId.push(l.userId)
    });
    for(let i = 1; i<=10; i++){
        let hozir = document.querySelector(`#i${i}`)
        hozir.addEventListener("click", () => {
            // console.log(j[i - 1]);
            info.style.display = "block"
            title.innerHTML = `Title: ${Title[i - 1]}`
            id.innerHTML = `ID: ${Id[i - 1]}`
            userId.innerHTML = `UserId: ${UserId[i - 1]}`
        })
     }
}
async function page3() {
    let b = 1;
    let res = await axios.get("/albums?_limit=10&_page=3")
    let rdata = res.data;
    let Title = []
    let Id = []
    let UserId = []
    rdata.forEach(function (l){
       let aa= `<li class = "item" id="i${b}">${l.title}</li>`
        items.innerHTML += aa;
        b++;
        Title.push(l.title)
        Id.push(l.id)
        UserId.push(l.userId)
    });
    for(let i = 1; i<=10; i++){
        let hozir = document.querySelector(`#i${i}`)
        hozir.addEventListener("click", () => {
            // console.log(j[i - 1]);
            info.style.display = "block"
            title.innerHTML = `Title: ${Title[i - 1]}`
            id.innerHTML = `ID: ${Id[i - 1]}`
            userId.innerHTML = `UserId: ${UserId[i - 1]}`
        })
     }
}
async function page4() {
    let b = 1;
    let res = await axios.get("/albums?_limit=10&_page=4")
    let rdata = res.data;
    let Title = []
    let Id = []
    let UserId = []
    rdata.forEach(function (l){
       let aa= `<li class = "item" id="i${b}">${l.title}</li>`
        items.innerHTML += aa;
        b++;
        Title.push(l.title)
        Id.push(l.id)
        UserId.push(l.userId)
    });
    for(let i = 1; i<=10; i++){
        let hozir = document.querySelector(`#i${i}`)
        hozir.addEventListener("click", () => {
            // console.log(j[i - 1]);
            info.style.display = "block"
            title.innerHTML = `Title: ${Title[i - 1]}`
            id.innerHTML = `ID: ${Id[i - 1]}`
            userId.innerHTML = `UserId: ${UserId[i - 1]}`
        })
     }
}
async function page5() {
    let b = 1;
    let res = await axios.get("/albums?_limit=10&_page=5")
    let rdata = res.data;
    let Title = []
    let Id = []
    let UserId = []
    rdata.forEach(function (l){
       let aa= `<li class = "item" id="i${b}">${l.title}</li>`
        items.innerHTML += aa;
        b++;
        Title.push(l.title)
        Id.push(l.id)
        UserId.push(l.userId)
    });
    for(let i = 1; i<=10; i++){
        let hozir = document.querySelector(`#i${i}`)
        hozir.addEventListener("click", () => {
            // console.log(j[i - 1]);
            info.style.display = "block"
            title.innerHTML = `Title: ${Title[i - 1]}`
            id.innerHTML = `ID: ${Id[i - 1]}`
            userId.innerHTML = `UserId: ${UserId[i - 1]}`
        })
     }
}
async function page6() {
    let b = 1;
    let res = await axios.get("/albums?_limit=10&_page=6")
    let rdata = res.data;
    let Title = []
    let Id = []
    let UserId = []
    rdata.forEach(function (l){
       let aa= `<li class = "item" id="i${b}">${l.title}</li>`
        items.innerHTML += aa;
        b++;
        Title.push(l.title)
        Id.push(l.id)
        UserId.push(l.userId)
    });
    for(let i = 1; i<=10; i++){
        let hozir = document.querySelector(`#i${i}`)
        hozir.addEventListener("click", () => {
            // console.log(j[i - 1]);
            info.style.display = "block"
            title.innerHTML = `Title: ${Title[i - 1]}`
            id.innerHTML = `ID: ${Id[i - 1]}`
            userId.innerHTML = `UserId: ${UserId[i - 1]}`
        })
     }
}
async function page7() {
    let b = 1;
    let res = await axios.get("/albums?_limit=10&_page=7")
    let rdata = res.data;
    let Title = []
    let Id = []
    let UserId = []
    rdata.forEach(function (l){
       let aa= `<li class = "item" id="i${b}">${l.title}</li>`
        items.innerHTML += aa;
        b++;
        Title.push(l.title)
        Id.push(l.id)
        UserId.push(l.userId)
    });
    for(let i = 1; i<=10; i++){
        let hozir = document.querySelector(`#i${i}`)
        hozir.addEventListener("click", () => {
            // console.log(j[i - 1]);
            info.style.display = "block"
            title.innerHTML = `Title: ${Title[i - 1]}`
            id.innerHTML = `ID: ${Id[i - 1]}`
            userId.innerHTML = `UserId: ${UserId[i - 1]}`
        })
     }
}
async function page8() {
    let b = 1;
    let res = await axios.get("/albums?_limit=10&_page=8")
    let rdata = res.data;
    let Title = []
    let Id = []
    let UserId = []
    rdata.forEach(function (l){
       let aa= `<li class = "item" id="i${b}">${l.title}</li>`
        items.innerHTML += aa;
        b++;
        Title.push(l.title)
        Id.push(l.id)
        UserId.push(l.userId)
    });
    for(let i = 1; i<=10; i++){
        let hozir = document.querySelector(`#i${i}`)
        hozir.addEventListener("click", () => {
            // console.log(j[i - 1]);
            info.style.display = "block"
            title.innerHTML = `Title: ${Title[i - 1]}`
            id.innerHTML = `ID: ${Id[i - 1]}`
            userId.innerHTML = `UserId: ${UserId[i - 1]}`
        })
     }
}
async function page9() {
    let b = 1;
    let res = await axios.get("/albums?_limit=10&_page=9")
    let rdata = res.data;
    let Title = []
    let Id = []
    let UserId = []
    rdata.forEach(function (l){
       let aa= `<li class = "item" id="i${b}">${l.title}</li>`
        items.innerHTML += aa;
        b++;
        Title.push(l.title)
        Id.push(l.id)
        UserId.push(l.userId)
    });
    for(let i = 1; i<=10; i++){
        let hozir = document.querySelector(`#i${i}`)
        hozir.addEventListener("click", () => {
            // console.log(j[i - 1]);
            info.style.display = "block"
            title.innerHTML = `Title: ${Title[i - 1]}`
            id.innerHTML = `ID: ${Id[i - 1]}`
            userId.innerHTML = `UserId: ${UserId[i - 1]}`
        })
     }
}
async function page10() {
    let b = 1;
    let res = await axios.get("/albums?_limit=10&_page=10")
    let rdata = res.data;
    let Title = []
    let Id = []
    let UserId = []
    rdata.forEach(function (l){
       let aa= `<li class = "item" id="i${b}">${l.title}</li>`
        items.innerHTML += aa;
        b++;
        Title.push(l.title)
        Id.push(l.id)
        UserId.push(l.userId)
    });
    for(let i = 1; i<=10; i++){
        let hozir = document.querySelector(`#i${i}`)
        hozir.addEventListener("click", () => {
            // console.log(j[i - 1]);
            info.style.display = "block"
            title.innerHTML = `Title: ${Title[i - 1]}`
            id.innerHTML = `ID: ${Id[i - 1]}`
            userId.innerHTML = `UserId: ${UserId[i - 1]}`
        })
     }
}






