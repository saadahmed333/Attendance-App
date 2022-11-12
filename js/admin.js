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

function front() {

   const q = query(collection(db, "class"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    courseSection.innerHTML = "";
  querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.id)
      courseSection.innerHTML += `
      <ul class="course-section">
      <li>${doc.data().course}</li>
      <li>${doc.data().tutor}</li>
      <li>${doc.data().timing}</li>
      <li>${doc.data().schedule}</li>
      <li>${doc.data().section}</li>
      <li>${doc.data().batch}</li>
      <i class="fa-solid fa-pen-to-square" onclick="updateCourse('${doc.id}')"  id="edit" ></i>
      <i class="fa-solid fa-trash" onclick="deletedCourse('${doc.id}')"></i>
      </ul>
      <br />
      `
    //   id="deletedd"
  });
});

}
front()

async function deletedCourse(id) {
    await deleteDoc(doc(db, "class", id));
}
window.deletedCourse = deletedCourse;




// async function updateCourse(id) {
//   const washingtonRef = doc(db, "class", id);
//   await updateDoc(washingtonRef, {
//   capital: true
// });
// }
// window.updateCourse = updateCourse;

// let modals = document.getElementById("modals");
// function modalss() {
//   modals.innerHTML = `
//   <div class="py-12 hidden w-[100%] transition duration-150 ease-in-out z-10 absolute top-0 right-1 bottom-0 left-0" id="modal">
//   <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
//       <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
//           <h1 class="text-black text-[20px] font-lg font-bold tracking-normal leading-tight mb-4 text-center">Add Class</h1>
//           <label for="name" class="text-gray-800 text-[18px] font-bold leading-tight tracking-normal">Course Name</label>
//           <div class="relative">
//           <input id="courseName" class="mb-[5px] text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Saad" type="text" />
//           </div>
//           <label for="email2" class="mb-[5px] mt-[10px] text-gray-800 font-bold leading-tight tracking-normal text-[18px]">Tutor</label>
//           <div class="relative mb-[5px]">
//               <input id="tutorName" class=" text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Tutor Name" type="text"/>
//           </div>
//           <label for="expiry" class="mb-[5px] mt-[10px] text-gray-800 font-bold leading-tight tracking-normal text-[18px]">Timing</label>
//           <div class="relative mb-[5px] mt-[5px]">
//               <input id="timing" class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="time" type="text"/>
//           </div>
//           <label for="cvc" class="mb-[5px] mt-[10px] text-gray-800 text-[18px] font-bold leading-tight tracking-normal ">Section Name</label>
//           <div class="relative mb-[5px] mt-[5px]">
//               <input id="sectionName" class="mb-[5px]  text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Section Name" />
//           </div>
//           <label for="cvc" class="mb-[5px] mt-[10px] text-gray-800 text-[18px] font-bold leading-tight tracking-normal ">Batch Number</label>
//           <div class="relative mb-[5px] mt-[5px]">
//               <input id="BatchNumber" class="mb-[5px]  text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Batch Number" />
//           </div>
//           <label for="cvc" class="mb-[5px] mt-[10px] text-gray-800 text-[18px] font-bold leading-tight tracking-normal ">Schedule Of Classes</label>
//           <div class="relative mb-[5px] mt-[5px]">
//               <input id="scheduleClass" class="mb-[5px]  text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="schedule of classes" type="text"/>
//           </div>
//           <div class="flex items-center justify-start w-full mt-[20px]">
//               <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" id="submit">Submit</button>
//               <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick="modalHandler()">Cancel</button>
//           </div>
//           <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
//               <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                   <path stroke="none" d="M0 0h24v24H0z" />
//                   <line x1="18" y1="6" x2="6" y2="18" />
//                   <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//           </button>
//       </div>
//   </div>
// </div>
//   `
// }
