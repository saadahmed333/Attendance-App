import {
  db,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  doc,
  setDoc,
} from './firebase-configure.js'
let searchattendance = document.getElementById('search-attendance')
let searchattendanceBtn = document.getElementById('search-attendance-Btn')


let studentBody = document.getElementById('student-Body')
let attendanceBody = document.getElementById('attendance-Body')
let attendanceDropdown = document.getElementById('attendance-Dropdown')


function allAttendance() {
  const q = query(collection(db, 'attendance'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    attendanceBody.innerHTML = ""
    querySnapshot.forEach((doc) => {
      attendanceBody.innerHTML += `
            <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
    ${doc.data().student}
  </th>
    <td class="px-6 py-4">
      ${doc.data().studentcourse}
    </td>
    <td class="px-6 py-4">
    ${doc.data().studentrollno}
    </td>
    <td class="px-6 py-4">
    ${doc.data().date}
    </td>
    <td class="px-6 py-4">
    ${doc.data().attend}
    </td>
   
  </tr>
  `
    })
  })
}
allAttendance()

let studentHead = document.getElementById("student-head");
let attendanceTable = document.getElementById("attendance-table");
let studentTable = document.getElementById("student-table");
let back = document.getElementById("back");


let studentId;
let studentName;
let studentRollno;
let studentCourse;
function getStudent() {
  back.innerHTML = `
  <i class="fa-solid fa-arrow-left font-bold text-[30px] cursor-pointer" onclick="backAttendance()"></i>
  `
  attendanceTable.style.display = "none";
  studentHead.innerHTML = `
  <tr>
      <th scope="col" class="px-6 py-3">
        Student name
      </th>
      <th scope="col" class="px-6 py-3">
        Father Name
      </th>
      <th scope="col" class="px-6 py-3">
        Roll Number
      </th>
      <th scope="col" class="px-6 py-3">
        Contact
      </th>
      <th scope="col" class="px-6 py-3">
        Cnic
      </th>
      <th scope="col" class="px-6 py-3">
        Tutor
      </th>
      <th scope="col" class="px-6 py-3">
        Course Name
      </th>
    </tr>
  `
  const q = query(
    collection(db, 'students'),
    where('rollNo', '==', searchattendance.value),
  )
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    studentBody.innerHTML = ''
    querySnapshot.forEach((doc) => {
      studentId = doc.id
      studentName = doc.data().studentname
      studentRollno = doc.data().rollNo
      studentCourse = doc.data().coursename
      console.log(doc.id)
      console.log(studentCourse)
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
    })
    attendanceDropdown.innerHTML = `
<select id="attendanceSelected"  class=" w-[40%] rounded-l-lg pl-[15px] text-gray-800 border-t border-b border-l">
<option value="Present">Present</option>
<option value="Absent">Absent</option>
<option value="Leave">Leave</option>
<option value="Late">Late</option>
</select>
<button onclick="setAttendance()" class="px-8 rounded-r-lg bg-[#8dc63f]  text-white font-bold h-[50px] uppercase border-[#8dc63f] border-t border-b border-r">Submit</button>
`
  })
}
searchattendanceBtn.addEventListener('click', getStudent)

let searchdropdownBtn = document.getElementById('search-dropdown-Btn')
const a = new Date();
async function setAttendance() {
  let attendanceSelected = document.getElementById('attendanceSelected')
  await addDoc(collection(db, 'attendance'), {
    student: studentName,
    studentid: studentId,
    studentrollno: studentRollno,
    studentcourse: studentCourse,
    attend: attendanceSelected.value,
    date: (a.getDate()),
  })
}
window.setAttendance = setAttendance



function backAttendance() {
  console.log("nhi howa")
  studentTable.style.display = "none";
  attendanceDropdown.style.display = "none";
  attendanceTable.style.display = "block";
  back.style.display = "none";
}

window.backAttendance = backAttendance;