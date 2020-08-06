// aga ai vave eksath korto

const ages =[12,15,16,13]
const ages2 = [14,17,18]
const allAges = ages.concat(ages2);
console.log(allAges)

// spreate operate ar ekta sohoj benifit holo

const ages1 =[12,15,16,13]
const ages3 = [14,17,18]
const allAges1 = [...ages1, ...ages3]
console.log(allAges1)

// aga amra nicar likhar modda l boro ta ai vave dakci

const business = 650;
const minister = 450;
const shocib = 550;
const maximun = Math.max(business, minister, shocib)
console.log(maximun);

// spreate opoerate ar maddoma ai vave kora jay

const business1 = 650;
const minister2 = 450;
const shocib3 = 550;
const takaPhoysa = [650,450,550];
const maximum = Math.max(...takaPhoysa)
console.log(maximum);

