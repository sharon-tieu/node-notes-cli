const fs = require('fs');

// read note function
if (process.argv[2] === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) return err;
    let parseData = JSON.parse(data);
    // console.log(parseData.notes);

    for (var key in parseData.notes) {
      console.log(`${key}: ${parseData['notes'][key]}`)
    }
  });
}

// create new note function
if (process.argv[2] === 'create') {
  let newNote = process.argv[3];
  let data = require('./data.json');
  // console.log('data:', data);
  data.notes[data.nextId] = newNote;
  data.nextId++;
  // console.log('new data:', data);

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return err;
  });
}

// delete note function
if (process.argv[2] === 'delete') {
  let data = require('./data.json');
  delete(data.notes[process.argv[3]]);
  console.log('data:', data);

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) return err;
  })
}

// update note function
if (process.argv[2] === 'update') {
  let data = require('./data.json');
  data.notes[process.argv[3]] = process.argv[4];

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) return err;
  })
}
