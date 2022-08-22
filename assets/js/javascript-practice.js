// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার blue করেদিতে পারো কিনা। 

const headingsTwo = document.getElementsByTagName('h2');
console.log(headingsTwo);
for ( let headingTwo of headingsTwo ) {
    headingTwo.style.color = '#3F07F8';
}