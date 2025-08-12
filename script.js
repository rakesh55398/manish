// Confetti Animation
const canvas = document.querySelector('.confetti');
const ctx = canvas.getContext('2d');
let pieces = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function ConfettiPiece() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.size = Math.random() * 8 + 6;
    this.color = `hsl(${Math.random()*360},90%,65%)`;
    this.speed = Math.random() * 2 + 1.5;
    this.angle = Math.random() * Math.PI * 2;
    this.spin = (Math.random()-.5)*0.2;
}
for (let i=0; i<80; i++) pieces.push(new ConfettiPiece());
function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let p of pieces) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
        ctx.restore();
        p.y += p.speed;
        p.angle += p.spin;
        if(p.y > canvas.height+20) {
            p.y = -10; p.x = Math.random()*canvas.width;
        }
    };
    requestAnimationFrame(animate);
}
animate();

// RSVP button functionality
function showRSVPMessage(){
    document.getElementById('rsvp-msg').style.display='block';
};



// JS: Put inside <script> tags at bottom of your HTML, or merge with your script
function openWishModal() {
  document.getElementById('wishModal').classList.add('active');
}
function closeWishModal() {
  document.getElementById('wishModal').classList.remove('active');
}