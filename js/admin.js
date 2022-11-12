let burger = document.getElementById("burger");
let cross = document.getElementById("cross");
let side = document.getElementById("side");

burger.addEventListener("click", () => {
    side.style.left = "0px";
})
cross.addEventListener("click", () => {
    side.style.left = "-400px";
})

import {db , doc,onSnapshot ,collection, query, where, addDoc,deleteDoc ,updateDoc} from "./firebase-configure.js"



let courseName = document.getElementById("courseName");
let tutorName = document.getElementById("tutorName");
let timing = document.getElementById("timing");
let sectionName = document.getElementById("sectionName");
let BatchNumber = document.getElementById("BatchNumber");
let scheduleClass = document.getElementById("scheduleClass");
let submit = document.getElementById("submit");



async function modal() {
     await addDoc(collection(db, "class"), {
        course: courseName.value,
        tutor: tutorName.value,
        timing: timing.value,
        section: sectionName.value,
        batch: BatchNumber.value,
        schedule: scheduleClass.value,
      });
}

if (submit) {
    submit.addEventListener("click", modal)
}






let courseSection = document.getElementById("course-section");

// function front() {

//    const q = query(collection(db, "class"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     courseSection.innerHTML = "";
//   querySnapshot.forEach((doc) => {
//       console.log(doc.data());
//       console.log(doc.id)
//       courseSection.innerHTML += `
//       <ul class="course-section">
//       <li>${doc.data().course}</li>
//       <li>${doc.data().tutor}</li>
//       <li>${doc.data().timing}</li>
//       <li>${doc.data().schedule}</li>
//       <li>${doc.data().section}</li>
//       <li>${doc.data().batch}</li>
//       <i class="fa-solid fa-pen-to-square" onclick="updateCourse('${doc.id}')"  id="edit" ></i>
//       <i class="fa-solid fa-trash" onclick="deletedCourse('${doc.id}')"></i>
//       </ul>
//       <br />
//       `
//     //   id="deletedd"
//   });
// });

// }
// front()
let tBody = document.getElementById('st-tbody')


function front() {
  const q = query(collection(db, 'class'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
      tBody.innerHTML = ``
      querySnapshot.forEach((doc) => {
      console.log(doc.data())
      console.log(doc.id)
      tBody.innerHTML += `
            <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
    ${doc.data().course}
    </th>
    <td class="px-6 py-4">
    ${doc.data().tutor}</
    </td>
    <td class="px-6 py-4">
    ${doc.data().timing}
    </td>
    <td class="px-6 py-4">
    ${doc.data().schedule}
    </td>
    <td class="px-6 py-4">
    ${doc.data().section}
    </td>
    <td class="px-6 py-4">
    ${doc.data().batch}
    </td>
    <td class="px-6 py-4 text-right">
    <i class="fa-solid fa-trash" onclick="deletedCourse('${doc.id}')"></i>
    </td>
  </tr>
  `
    })
  })
}
front()

async function deletedCourse(id) {
    await deleteDoc(doc(db, "class", id));
}
window.deletedCourse = deletedCourse;




