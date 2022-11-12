import {db , doc,onSnapshot ,collection, query, where, addDoc,deleteDoc} from "./firebase-configure.js"



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

submit.addEventListener("click", modal)

let burger = document.getElementById("burger");
let cross = document.getElementById("cross");
let side = document.getElementById("side");

burger.addEventListener("click", () => {
    side.style.left = "0px";
})
cross.addEventListener("click", () => {
    side.style.left = "-400px";
})


let courseSection = document.getElementById("course-section");

function front() {

   const q = query(collection(db, "class"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    courseSection.innerHTML = ""
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
      <i class="fa-solid fa-trash" onclick="deletedCourse('${doc.id}')" ></i>
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
