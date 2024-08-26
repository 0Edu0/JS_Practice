// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//console.log(mockUpStrand());
const pAequorFactory = (number, arr) => {
  return {
    specimenNum: number,
    dna: arr,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randomIndex] === newBase){
          newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherPAequor) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i] === otherPAequor.dna[i]){
          identicalBases++;
        }
      }
      const percentage = (identicalBases / this.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common`);
    },
    willLikelySurvive() {
      let count = 0;
      this.dna.forEach(base => {
        if (base === "C" || base === "G"){
          count++;
        }
      });
      const survivalPercentage = (count / this.dna.length) * 100;
      if (survivalPercentage >= 60){
          return true;
        }else {
          return false;
        }
      }
    }
  };

const survivingPAequor = [];
let specimenNum = 1;
while (survivingPAequor.length < 30){
  const newPAequor = pAequorFactory(specimenNum, mockUpStrand());
  if (newPAequor.willLikelySurvive()){
    survivingPAequor.push(newPAequor);
  }
  specimenNum++
};

console.log(`Number of surviving P. aequor instances: ${survivingPAequor.length}`);
console.log(survivingPAequor);