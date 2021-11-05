
function attachEvents() {
    getStudents()
}
const tbody = document.querySelector(`#results tbody`);
document.getElementById("form").addEventListener("submit", onSubmit)

attachEvents()

async function onSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = Number(formData.get('grade'));

    if (firstName && lastName && facultyNumber && Number(grade)) {
        const student = {
            firstName,
            lastName,
            facultyNumber,
            grade,
        };

        await postStudents(student)

        
        event.target.reset();
        getStudents();
    }

}

async function getStudents(){
    const url = 'http://localhost:3030/jsonstore/collections/students'
    const res = await fetch(url);
    const data = await res.json();

    const rows = Object.values(data).map(createRow).join('')
    tbody.innerHTML = rows
}

function createRow(student){
    return `<tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade.toFixed(2)}</td>
    </tr>`;
}

async function postStudents(student){
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const options = {
        method : 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(student)
    }
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}