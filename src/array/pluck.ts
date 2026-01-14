export const pluck=(elements,field)=>{
    return elements.map(element=>element[field])
}


pluck([{name:'Alice',age:30},{name:'Bob',age:25}],'name') // ['Alice','Bob']