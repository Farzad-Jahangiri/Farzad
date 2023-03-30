// function objectToArray(obj) {
//     return Object.entries(obj);
//   }



// const myObject = { a: 1, b: 2, c: 3 };
// const myArray = objectToArray(myObject);
// console.log(myArray); 



// function countDuplicateValues(arr) {
//     let counts = {};
//     for (let i = 0; i < arr.length; i++) {
//       if (counts[arr[i]]) {
//         counts[arr[i]] += 1;
//       } else {
//         counts[arr[i]] = 1;
//       }
//     }
//     return counts;
//   }
  

//   const arr = [1, 2, 3, 4, 2, 3, 5, 6, 4];
//   console.log(countDuplicateValues(arr));





















const topNote = (obj) => {
    const note = [];
    for (let stu of obj) {
        note.push(Math.max(...stu.notes));
    }
    return note;
}

const students = [{
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
},
{
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
}]

console.log(topNote(students));