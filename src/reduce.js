const nums =[12,324,56,78,8]
 
const total = nums.reduce((sum,num)=>sum+num,0)
console.log(total);
const friends = [{name: "Rashed",money: 414},{name: "Rashed",money: 414},{name: "kashed",money: 44},{name: "pashed",money: 41}]
const totalMoney = friends.reduce((sum,friends)=>sum+friends.money,0)
console.log(totalMoney);
