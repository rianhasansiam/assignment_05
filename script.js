let myBalance = 5500;
const noyakhaliDonationBtn = document.getElementById("noyakhaliDonationBtn");
const feniDonationBtn = document.getElementById("feniDonationBtn");
const quotaDonationBtn = document.getElementById("quotaDonationBtn");
const donationbtn = document.getElementById("donationbtn");
const historyBtn = document.getElementById("historyBtn");
const noyakhaliHeading = document.getElementById("noyakhaliHeading");
const feniHeading = document.getElementById("feniHeading");
const quotaHading = document.getElementById("quotaHading")


// common function
function cashout(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  
  if(inputValue <= 0 || inputValue > myBalance || isNaN(inputValue) ){
    alert("Invalid Donation Amount")
    
  }
  else{
    myBalance = myBalance - inputValue;
    
  }

  
  return myBalance.toFixed(2);
}

// button noyakhali
let noykhaiCash=0
noyakhaliDonationBtn.addEventListener("click", function () {
  

const inputValue = parseFloat(document.getElementById('noyakhaliINput').value);

if(inputValue <= 0 || inputValue > myBalance || isNaN(inputValue) ){
  alert("Invalid Donation Amount")
  noyakhaliDonationBtn.removeAttribute("for")
}

else{
  const newBlance = cashout("noyakhaliINput");
  
  document.getElementById("finalbalance").innerText = `${newBlance} BDT`;

  noyakhaliDonationBtn.setAttribute("for","my_modal_6")
  
  
   noykhaiCash=noykhaiCash+inputValue
  document.getElementById('noykhaiCash').innerText=`${noykhaiCash.toFixed(2)} BDT`
  
  //  history added
  const div=document.createElement('div')
  div.classList.add('border','shadow-md','p-7','rounded-2xl','mb-6')
  div.innerHTML=`
              <h1 class="font-extrabold text-xl">${inputValue} Taka is ${noyakhaliHeading.innerText}</h1>
              <p class="text-sm text-gray-400 bg-gray-100 py-2 mt-3">Date : ${new Date()}</p>
          `
  
          document.getElementById('historySeciton').append(div)
document.getElementById('noyakhaliINput').value=''
}  


});



// feni button
let feniCash=600
feniDonationBtn.addEventListener("click", function () {
  

const inputValue = parseFloat(document.getElementById('feniInput').value);
if(inputValue <= 0 || inputValue > myBalance || isNaN(inputValue) ){
  alert("Invalid Donation Amount")
  feniDonationBtn.removeAttribute("for")
}

else{
  const newBlance = cashout("feniInput");
  
  document.getElementById("finalbalance").innerText = `${newBlance} BDT`;
  feniDonationBtn.setAttribute("for","my_modal_6")
  
  
  feniCash=feniCash+inputValue
  document.getElementById('feniCash').innerText=`${feniCash.toFixed(2)} BDT`
  
  //  history added
  const div=document.createElement('div')
  div.classList.add('border','shadow-md','p-7','rounded-2xl','mb-6')
  div.innerHTML=`
              <h1 class="font-extrabold text-xl">${inputValue} Taka is ${feniHeading.innerText}</h1>
              <p class="text-sm text-gray-400 bg-gray-100 py-2 mt-3">Date : ${new Date()}</p>
          `
  
          document.getElementById('historySeciton').append(div)
document.getElementById('feniInput').value=''
}  


});



// quota button
let quotaCash=2400
quotaDonationBtn.addEventListener("click", function () {
  


const inputValue = parseFloat(document.getElementById('quotaInput').value);
if(inputValue <= 0 || inputValue > myBalance || isNaN(inputValue) ){
  alert("Invalid Donation Amount")
  quotaDonationBtn.removeAttribute("for")
}

else{
  const newBlance = cashout("quotaInput");
  
  document.getElementById("finalbalance").innerText = `${newBlance} BDT`;
  quotaDonationBtn.setAttribute("for","my_modal_6")
  
  
  quotaCash=quotaCash+inputValue
  document.getElementById('quotaCash').innerText=`${quotaCash.toFixed(2)} BDT`
  
  //  history added
  const div=document.createElement('div')
  div.classList.add('border','shadow-md','p-7','rounded-2xl','mb-6')
  div.innerHTML=`
              <h1 class="font-extrabold text-xl">${inputValue} Taka is ${quotaHading.innerText}</h1>
              <p class="text-sm text-gray-400 bg-gray-100 py-2 mt-3">Date : ${new Date()}</p>
          `
  
          document.getElementById('historySeciton').append(div)
document.getElementById('quotaInput').value=''
}  


});







// history and donation button

donationbtn.addEventListener('click', function(){

  document.getElementById('donationSetion').classList.remove('hidden')
  document.getElementById('historySeciton').classList.add('hidden')
})

historyBtn.addEventListener('click', function(){

  document.getElementById('historySeciton').classList.remove('hidden')
  document.getElementById('donationSetion').classList.add('hidden')

})


// next page button

const blogSwitchBtn=document.getElementById('blogSwitchBtn')



blogSwitchBtn.addEventListener('click', function(){
  window.location.href=('./blog.html')
})

