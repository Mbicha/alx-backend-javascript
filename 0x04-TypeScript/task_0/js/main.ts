interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Charles',
    lastName: 'Mbithi',
    age: 27,
    location: 'Kisumu',
}

const student2: Student = {
    firstName: 'Sylvia',
    lastName: 'Ndanu',
    age: 23,
    location: 'Nairobi',
}

const studentList = [student1, student2];

const tbl = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((myObj) => {
    const tblRow = document.createElement('tr');
    const firstNameData = document.createElement('td');
    const locationData = document.createElement('td');
    firstNameData.textContent = myObj.firstName;
    locationData.textContent = myObj.location;
    tblRow.appendChild(firstNameData);
    tblRow.appendChild(locationData);
    tbody.appendChild(tblRow);
});
tbl.appendChild(tbody);
document.body.appendChild(tbl);
