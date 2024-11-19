//your JS code here. If required.
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Expires in 'days'
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

function applyPreferences() {
  const savedFontSize = getCookie("fontValue");
  const savedFontColor = getCookie("fontColor");

  if (savedFontSize) {
    document.body.style.fontSize = `${savedFontSize}px`;
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.body.style.color = savedFontColor;
    document.getElementById("fontcolor").value = savedFontColor;
  }
}

const fontVal=document.getElementById('fontsize').value;
const fontColor=document.getElementById('fontcolor').value;

document.getElementById('submitButton').addEventListener('click',(e)=>{
	e.preventDefault();
	
	document.cookie="fontValue=fontVal";
	document.cookie="fontColor=fontColor";

	setCookie("fontValue", fontVal, 7); 
	  setCookie("fontColor", fontColor, 7);
})
