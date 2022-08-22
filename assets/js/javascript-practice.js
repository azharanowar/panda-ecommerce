// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার blue করেদিতে পারো কিনা। 

const headingsTwo = document.getElementsByTagName('h2');
for ( let headingTwo of headingsTwo ) {
    headingTwo.style.color = '#3F07F8';
}



// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 

document.getElementById("backpackRow").addEventListener("mouseover", function() {
    document.getElementById("backpackRow").style.backgroundColor = 'tomato';
});



// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 

const cards = document.querySelectorAll(".card");
for ( let card of cards ) {
    card.classList.add('border-radius-30');
}



// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 

function watchCategory() {
    console.log("Hello from watch category!");
}



// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

const buttons = document.getElementsByClassName('btn');
for ( let button of buttons ) {
    button.addEventListener('click', function(event) {
        // event.target.parentNode.removeChild(event.target); // Delete button by clicking.
        // event.target.style.display = 'none'; // Hiding button by clicking.
    });
}



// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

document.getElementById("newsletterField").addEventListener('keyup', function() {
    let newsletterFieldValue = document.getElementById("newsletterField").value;
    let newsletterBtn = document.getElementById("newsletterBtn");
    if( newsletterFieldValue === 'email' ) {
        newsletterBtn.disabled = false;
    } else {
        newsletterBtn.disabled = true;
    }
    
})



// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 

document.getElementById("shoesOneImg").addEventListener('mouseenter', function(event) {
    const imgOldUrl = event.target.getAttribute('src');
    const imgNewUrl = imgOldUrl.replace('1', '3');
    event.target.setAttribute('src', imgNewUrl);
});




// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 

document.getElementById("newsletterRow").addEventListener('dblclick', function(event) {
    if ( event.target.id === 'newsletterRow' ) {
        document.getElementById("newsletterRow").style.backgroundColor = '#b9d4ff';
    }
});

