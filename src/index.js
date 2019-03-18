/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  //counter for amount of triangles
  let counter=0;
  //array to know who have been found in triangle(2 lovers of 3)
  let trianglePopulation=[];
  
    //for-loop to check every member of speachones population
  for(let index=0; index<preferences.length;index+=1){
    //the lover of first person -index
    let firstLover=preferences[index];
    //the lover of second person
    let secondLover=preferences[firstLover-1];
    //the lover of third person
    let thirdLover=preferences[secondLover-1]
    //check if third person loves the first one
    if(((index)==thirdLover-1)){
      //check if someone from current triangle is registered among existed triangle
      
      //index of current triangle is already// not registered in triangle
      if ((trianglePopulation.indexOf(index)==-1)&&
          //not loves himself
        (index!=firstLover-1)){ 
          //increase counter
          counter+=1;
          //register lovers of first and second of the current triangle
          trianglePopulation.push(firstLover-1);
          trianglePopulation.push(secondLover-1);
      }
    }
  }
  return counter;
};
