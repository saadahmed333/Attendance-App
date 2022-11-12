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

// async function studentData() {
//     await addDoc(collection(db, "students"), {
//         studentname: studentName.value,
//         studentFather: fatherName.value,
//         rollNo: rollNumber.value,
//         contact: contactNumber.value,
//         cnic: cnicNumber.value,
//         coursename: courseName.value,
//       });
//       studentName.value = "";
//       fatherName.value = "";
//       rollNumber.value = "";
//       contactNumber.value = "";
//       cnicNumber.value = "";
//       courseName.value = "";
// }

let studentSection = document.getElementById('student-section')

function front() {
    const q = query(collection(db, 'students'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        studentSection.innerHTML = ''
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            console.log(doc.id)
            studentSection.innerHTML += `
            <ul class="course-section">
            <li>${doc.data().studentname}</li>
            <li>${doc.data().studentFather}</li>
            <li>${doc.data().rollNo}</li>
            <li>${doc.data().contact}</li>
            <li>${doc.data().cnic}</li>
            <li>${doc.data().coursename}</li>
            <i class="fa-solid fa-pen-to-square" onclick="updateCourse('${
                doc.id
            }')"  id="edit" ></i>
            <i class="fa-solid fa-trash" onclick="deletedStudent('${doc.id}')"></i>
            </ul>
            <br />
            `
        })
  })
}
front()

async function deletedStudent(id) {
    await deleteDoc(doc(db, 'students', id))
}
window.deletedStudent = deletedStudent

let modal = document.getElementById("modal");
let userImageUrl;
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
            iMage: userImageUrl,
        })
    studentName.value = ''
    fatherName.value = ''
    rollNumber.value = ''
    contactNumber.value = ''
    cnicNumber.value = ''
    courseName.value = ''
    modal.style.display = "block";
} catch (e) {
    console.log(e)
  }
}
studentSubmitBtn.addEventListener('click', uploadPic)

// async function uploadPic(user) {
//   let file = studentImage.files[0]
//   let imageRef = ref(storage, `images/${file.name}`)
//   try {
//     let uploaded = await uploadBytes(imageRef, file)
//     userImageUrl = await getDownloadURL(imageRef)
//     console.log(userImageUrl, 'downloadable URL')

//     await setDoc(doc(db, 'users', user), {
//       name: fullName.value,
//       email: signupEmail.value,
//       iMage: userImageUrl,
//     })
//     fullName.value = ''
//     signupEmail.value = ''
//     signupPassword.value = ''
//     signupConfirmPassword.value = ''
//     window.location = '../pages/chatapp.html'
//   } catch (e) {
//     console.log(e)
//   }
// }
