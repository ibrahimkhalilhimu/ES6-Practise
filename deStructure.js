// object thaka propati bar kora mana furo ekta line theke nidisto kora khuja ana

const person = {name:'kalu miya',  age:17, job:'facebooker', gfName:'dlu', address:'kocu khet',phone:'017475454544', friends:['jalu','halu','malu']}
console.log(person.gfName);

// or

const person = {name:'kalu miya',  age:17, job:'facebooker', gfName:'dlu', address:'kocu khet',phone:'017475454544', friends:['jalu','halu','malu']}
const gfName = person.gfName
const phone =person.phone
console.log(gfName,phone);

// or

const person = {name:'kalu miya',  age:17, job:'facebooker', gfName:'dlu', address:'kocu khet',phone:'017475454544', friends:['jalu','halu','malu']}

const { gfName, phone } = person
console.log(gfName,phone);

// array theke li vave nam bar kora jay taholo

const friends = ['shakib','jolil','kalu','saiful']
const [first] = friends
console.log(first)