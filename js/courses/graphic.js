import {onSnapshot,collection, query, where, db} from "../firebase-configure.js"

let search = document.getElementById("search");
let searchBtn = document.getElementById("search-Btn");


let graphiceBody = document.getElementById("graphice-Body");

function graphicStudents() {
    const q = query(
        collection(db, 'students'),
        where('coursename', '==', "Graphic Designing"),
      )
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        // attendanceBody.innerHTML = ''
        querySnapshot.forEach((doc) => {
          console.log(doc.id)
          graphiceBody.innerHTML += `
                <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          ${doc.data().studentname}
        </th>
        <td class="px-6 py-4">
          ${doc.data().studentFather}
        </td>
        <td class="px-6 py-4">
        ${doc.data().rollNo}
        </td>
        <td class="px-6 py-4">
        ${doc.data().contact}
        </td>
        <td class="px-6 py-4">
        ${doc.data().cnic}
        </td>
        <td class="px-6 py-4">
        ${doc.data().tutor}
        </td>
        <td class="px-6 py-4">
        ${doc.data().coursename}
        </td>
      </tr>
      `
        })
    })
}
graphicStudents();
















// let cardss = document.getElementById("cardss");
// function seacrh() {
//     try {
//         const q = query(collection(db, "students"), where("rollNo", "==", search.value));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(doc.data());
//     cardss.innerHTML = `
//     <h1 class="text-center text-[40px] font-bold text-[#8dc63f]">SMIT</h1>
//     <div class="student-Image">
//         <img src="${doc.data().iMage}" alt="">
//     </div>
//     <div class="datass">
//         <h4 style="font-size: 30px">${doc.data().studentname}</h4>
//     <h4 style="font-size: 30px">${doc.data().studentFather}</h4>
//     <h4 style="font-size: 30px">${doc.data().coursename}</h4>
//     <h4 style="font-size: 30px">${doc.data().rollNo}</h4>
//     </div>
//     `
//     search.value = "";
//   });
// });
//     }
//     catch {
//         console.log("user nhi ha")
//     }
// }

// searchBtn.addEventListener("click", seacrh)




