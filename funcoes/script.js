/*var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running","television"]
};
console.log(day1.squirrel);
  // → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
console.log(day1.events[0])
day1.name='Caio'
console.log(day1.name)
console.log(day1)*/

/*let list = [];

function addAttributes(name, idade, peso) {
    list.push(name, idade, peso);
    return list;
}

console.log(addAttributes('Filipi', 17, 61.5));

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}*/

/*function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));
  // → [76, 9, 4, 1]*/

 
/* 
  function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
  }
  
  function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
      var entry = journal[i], index = 0;
      if (hasEvent(event, entry)) index += 1;
      if (entry.squirrel) index += 2;
      table[index] += 1;
    }
    return table;
  }

  function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  }
  
  console.log(phi([76, 9, 4, 1]));
  // → 0.068599434

var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
// → true
console.log(map["touched tree"]);
// → -0.081
console.log(map)
var journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break",
              "peanuts", "beer"],
     squirrel: true},

  ];

function gatherCorrelations(journal) {
    var phis = {};
    console.log('phis atual:',phis)
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        console.log('events atual',events)
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            console.log('o event atual é:',event)
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
            }
    }
    return phis;
}

var correlations = gatherCorrelations(journal);
console.log(correlations.pizza);
console.log(correlations)
  // → 0.068599434

  for (var event in correlations)
  console.log(event + ": " + correlations[event]);
*/

const nome = document.querySelector('#nome_task')
const area = document.querySelector('#area_task')
const list_task = document.querySelector('#list_task')
const situacao = document.querySelector('#situacao')
const btn_cadastrar = document.querySelector('#cadastrar')
let tasks = []

btn_cadastrar.addEventListener('click', () => {
    tasks.push({name: nome.value, area: area.value, situacao: situacao.value})
    nome.value = '' // Limpa o campo de entrada nome
    area.value = '' // Limpa o campo de entrada area
    situacao.value = '' // Limpa o campo de entrada situacao

    // Limpa a lista de tarefas antes de adicionar as novas
    list_task.innerHTML = ''

    for (let i = 0; i < tasks.length; i++) {
        let task = document.createElement('div')
        task.classList.add('task')

        let p1 = document.createElement('p')
        p1.innerText = 'Nome: ' + tasks[i].name
        task.append(p1)

        let p2 = document.createElement('p')
        p2.innerText = 'Área: ' + tasks[i].area
        task.append(p2)

        let p3 = document.createElement('p')
        p3.innerText = 'Situação: ' + tasks[i].situacao
        p3.classList.add(tasks[i].situacao)
        task.append(p3)

        list_task.append(task)
    }
    console.log(tasks)
})
