function takeANumber(name, katzDeliLine){
  katzDeliLine.push(`${name}`)
  return( `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
