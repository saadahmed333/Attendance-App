import {onSnapshot,collection, query, where, db} from "../firebase-configure.js"

let search = document.getElementById("search");
let searchBtn = document.getElementById("search-Btn");


let webBody = document.getElementById("web-Body");

function graphicStudents() {
    const q = query(
        collection(db, 'students'),
        where('coursename', '==', "Web and Mobile Development"),
      )
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        // attendanceBody.innerHTML = ''
        querySnapshot.forEach((doc) => {
          console.log(doc.id)
          webBody.innerHTML += `
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





