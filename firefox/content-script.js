
const cursor = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(cursor);
cursor.className = "kala-cursor";

const style = document.createElement('style');
document.head.appendChild(style)
style.innerHTML = `
.kala-cursor{
  padding: 0;
  border: 0;
  margin: 0;
  background-color: #0069c2;
  position: fixed;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  box-shadow: 0 0 20px #0069c2
              0 0 60px #0069c2
              0 0 100px #0069c2;
  animation: colors 5s infinite;
  z-index: 1000;
  display:none;
  pointer-events:none;
  transform: translate(-50%,-50%);
}

.kala-cursor:before{
  background-color: #0069c2;
  content: '';
  position: absolute;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  opacity: 0.2;
  transform: translate(-30%,-30%);
}

@keyframes colors{
  0% {
    filter: hue-rotate(0deg);
  }
  100%{
    filter: hue-rotate(360deg)
  }
}
`;

window.addEventListener("mousemove", (event) => {
  
  mousePos = { x: event.clientX, y: event.clientY };
  
  cursor.style.left = mousePos.x + "px";
  cursor.style.top = mousePos.y + "px";
  cursor.style.display = "block"

  function mouseStopped(){
    cursor.style.display = "none";
  }
  
  const timeout = setTimeout(mouseStopped, 1000)
});

window.addEventListener("mouseout", () => {
  cursor.style.display = "none"
});
