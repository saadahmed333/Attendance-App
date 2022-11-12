import {db , onSnapshot ,collection, query, where,} from "./firebase-configure.js"



let burger = document.getElementById("burger");
let cross = document.getElementById("cross");
let side = document.getElementById("side");

burger.addEventListener("click", () => {
    side.style.left = "0px";
})
cross.addEventListener("click", () => {
    side.style.left = "-400px";
})


let table = document.getElementById("table");

function front() {

   const q = query(collection(db, "class"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(doc.data());
      table.innerHTML += `
      <tr id="table">
      <td>${doc.data().classname}</td>
      <td>${doc.data().tutor}</td>
      <td>${doc.data().timing}</td>
      <td>${doc.data().students}</td>
    </tr>
      `
  });
});

}
front()