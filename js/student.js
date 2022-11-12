import {
  db,
  onSnapshot,
  collection,
  query,
  addDoc,
  deleteDoc,
  doc,
} from './firebase-configure.js'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
  storage,
} from './firebase-configure.js'

let studentName = document.getElementById('studentName')
let fatherName = document.getElementById('fatherName')
let rollNumber = document.getElementById('rollNumber')
let contactNumber = document.getElementById('contactNumber')
let cnicNumber = document.getElementById('cnicNumber')
let courseName = document.getElementById('courseName')
let studentImage = document.getElementById('studentImage')
let studentSubmitBtn = document.getElementById('studentSubmit')
let assignClass = document.getElementById('assignClass')



let tBody = document.getElementById('st-tbody')


function front() {
  const q = query(collection(db, 'students'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
      tBody.innerHTML = ``
      querySnapshot.forEach((doc) => {
      console.log(doc.data())
      console.log(doc.id)
      tBody.innerHTML += `
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
    ${doc.data().assignClass}
    </td>
    <td class="px-6 py-4">
    ${doc.data().coursename}
    </td>
    <td class="px-6 py-4 text-right">
    <i class="fa-solid fa-trash" onclick="deletedStudent('${doc.id}')"></i>
    </td>
  </tr>
  `
    })
  })
}
front()


async function deletedStudent(id) {
  await deleteDoc(doc(db, 'students', id))
}
window.deletedStudent = deletedStudent

let modal = document.getElementById('modal')
let userImageUrl
async function uploadPic() {
  let file = studentImage.files[0]
  let imageRef = ref(storage, `images/${file.name}`)
  try {
    let uploaded = await uploadBytes(imageRef, file)
    userImageUrl = await getDownloadURL(imageRef)
    console.log(userImageUrl, 'downloadable URL')

    await addDoc(collection(db, 'students'), {
      studentname: studentName.value,
      studentFather: fatherName.value,
      rollNo: rollNumber.value,
      contact: contactNumber.value,
      cnic: cnicNumber.value,
      coursename: courseName.value,
      assignClass: assignClass.value,
      iMage: userImageUrl,
    })
    studentName.value = ''
    fatherName.value = ''
    rollNumber.value = ''
    contactNumber.value = ''
    cnicNumber.value = ''
    courseName.value = ''
    modal.style.display = 'block'
  } catch (e) {
    console.log(e)
  }
}
if (studentSubmitBtn) {
  studentSubmitBtn.addEventListener('click', uploadPic)
}


