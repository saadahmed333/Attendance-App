import {onSnapshot,collection, query, where, db} from "./firebase-configure.js"

let search = document.getElementById("search");
let searchBtn = document.getElementById("search-Btn");



let cardss = document.getElementById("cardss");

function seacrh() {
    try {
        const q = query(collection(db, "students"), where("rollNo", "==", search.value));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    cardss.innerHTML = `
    <h1 class="text-center text-[40px] font-bold text-[#8dc63f]">SMIT</h1>
    <div class="student-Image">
        <img src="${doc.data().iMage}" alt="">
    </div>
    <div class="datass">
        <h4 style="font-size: 30px">${doc.data().studentname}</h4>
    <h4 style="font-size: 30px">${doc.data().studentFather}</h4>
    <h4 style="font-size: 30px">${doc.data().coursename}</h4>
    <h4 style="font-size: 30px">${doc.data().rollNo}</h4>
    </div>
    `
    search.value = "";
  });
});
    }
    catch {
        console.log("user nhi ha")
    }
}

searchBtn.addEventListener("click", seacrh)




