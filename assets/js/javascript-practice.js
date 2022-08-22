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