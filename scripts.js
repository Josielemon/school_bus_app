// Sample student data  // Add array from google sheets
let students = [
    {
        name: 'John Doe',
        classroom: '1A',
        busRoute: 'Route1',
        status: 'none',
    },
    {
        name: 'Jane Smith',
        classroom: '1A',
        busRoute: 'Route2',
        status: 'none',
    },
    {
        name: 'Bob Johnson',
        classroom: '1B',
        busRoute: 'Route1',
        status: 'none',
    },
]
const classroomList = document.getElementById('classroomList')
const busrouteList = document.getElementById('busrouteList')

function toggleStatus() {}

// Open tab view
function openView(viewName) {
    let tabcontent = document.getElementsByClassName('tabcontent')
    if (viewName === 'classroom') {
        document.getElementById(viewName).style.display = 'none'
        document.getElementById((busroute.style.display = 'block'))
    }

    if (viewName === 'busroute') {
        document.getElementById(viewName).style.display = 'none'
        document.getElementById((classroom.style.display = 'block'))
    }
    if (viewName === 'classroom') {
        filterByClass()
    } else {
        filterByRoute()
    }
}

// Filter students by classroom
function filterByClass() {
    const selectedClass = document.getElementById('classSelect').value
    const filteredStudents = students.filter(
        (student) => student.busRoute === selectedClass
    )
    displayStudents(classroomList, filteredStudents)
}

// Filter students by bus route
function filterByRoute() {
    const selectedRoute = document.getElementById('routeSelect').value
    const filteredStudents = students.filter(
        (student) => student.busRoute === selectedRoute
    )
    displayStudents(busrouteList, filteredStudents)
}
// Trasfer to difrent route temporarly
function changeRoute() {
    // Open route popup
}
// Display students in the specifiec container
function displayStudents(containerId, studentList) {
    const container = containerId
    container.innerHTML = ''

    studentList.forEach((student) => {
        const studentCard = (innerHTML = '')
        studentCard.onclick = function () {
            toggleStatus(student.name)
        }
        let statusText = 'Not Checked'
        if (student.status === 'checked-in') statusText = 'Arrived at School'
        if (student.status === 'checked-out') statusText = 'Left on Bus'

        studentCard.innerHTML = `
        <div id='student-card ${student.status}'>
        <h3>${student.name}</h3>
        <p>Class: ${student.classroom}</p>
        <p>Bus Route: ${student.busRoute}</p>
        <p class="status-indicator">Status: ${statusText}</p>
        <p><button onclick="changeRoute()">Change route</button></p>
        </div>
    `
        container.appendChild(card)
    })
}
// // Initialize the first tab
document.getElementsByClassName('tablinks')[0].click()
