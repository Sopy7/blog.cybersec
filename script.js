const posts = [
  "[Forum] New phishing scam targets banking apps.",
  "[Forum] Best practices to secure your Wi-Fi router.",
  "[Forum] Zero-day vulnerability discovered in web browsers.",
  "[Forum] Tips for securing your social media accounts."
];

let index = 0;
function rotatePosts() {
  document.getElementById('forum-post').innerText = posts[index];
  index = (index + 1) % posts.length;
}
setInterval(rotatePosts, 4000);
rotatePosts();
