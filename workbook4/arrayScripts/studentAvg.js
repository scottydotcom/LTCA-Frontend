let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92]},
  { name: "Pursalane", scores: [92, 89, 96, 100, 94]},
  { name: "Siddalee", scores: [86, 72, 92]},
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
  { name: "Elisha", scores: [89, 100]},
  { name: "Ezra", scores: [100, 99, 100, 87]},
];
for(let i = 0; i < students.length; i++){
  let sum = 0;
  for (let j = 0; j < students[i].scores.length; j++){
    sum += students[i].scores[j];
  }
  let avg = sum / students[i].scores.length; 
  console.log(`${students[i].name}'s average score is ${avg.toFixed(2)}`);
}