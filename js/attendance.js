import { db, collection, query, where, onSnapshot, addDoc, doc,setDoc } from "./firebase-configure.js";
let searchattendance = document.getElementById("search-attendance");
let searchattendanceBtn = document.getElementById("search-attendance-Btn");

let studentBody = document.getElementById("student-Body");
let attendanceDropdown = document.getElementById("attendance-Dropdown");

let studentId;
let studentName;
let studentRollno;
function getStudent() {
    const q = query(collection(db, "students"), where("rollNo", "==", searchattendance.value));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        studentBody.innerHTML = ""
        querySnapshot.forEach((doc) => {
            studentId = doc.id;
            studentName = doc.data().studentname;
            studentRollno = doc.data().rollNo;
            console.log(doc.id)
            studentBody.innerHTML += `
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
});
attendanceDropdown.innerHTML = `
<select id="attendanceSelected"  class=" w-[40%] rounded-l-lg pl-[15px] text-gray-800 border-t border-b border-l">
<option value="Present">Present</option>
<option value="Absent">Absent</option>
<option value="Leave">Leave</option>
<option value="Late">Late</option>
</select>
<button onclick="setAttendance()" class="px-8 rounded-r-lg bg-[#8dc63f]  text-white font-bold h-[50px] uppercase border-[#8dc63f] border-t border-b border-r">Submit</button>
`   
    });
 
}
searchattendanceBtn.addEventListener("click", getStudent);



let attendanceSelected = document.getElementById("attendanceSelected");
let searchdropdownBtn = document.getElementById("search-dropdown-Btn");
 const a = new Date()
console.log(a.getDate(), a.getMonth(), a.getFullYear());

async function setAttendance() {
  console.log("hogaya");
  console.log(attendanceSelected.value)
  await setDoc(doc(db, "attendance", studentId), {
    student: studentName,
    studentid: studentId,
    studentrollno: studentRollno,
    attend: attendanceSelect.value,
    date: (a.getDate(), a.getMonth(), a.getFullYear())
  });
}

window.setAttendance = setAttendance;