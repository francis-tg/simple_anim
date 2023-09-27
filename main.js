const box = document.getElementsByClassName("box")[0];

document.addEventListener("keyup", (e) => {
	if (e.key === "ArrowRight") {
		box.style.transform = box.style.transform + " translateX(350px)";
		box.style.backgroundColor = "#007bff";
	} else if (e.key === "ArrowLeft") {
		box.style.transform =
			String(box.style.transform).split(" ")[1] + " translateX(0)";
		box.style.backgroundColor = "#885bff";
	} else if (e.key === "ArrowUp") {
		console.log(String(box.style.transform).split(" ")[1]);
		box.style.backgroundColor = "#0070ef";
		box.style.transform =
			String(box.style.transform).split(" ")[1] + " translateY(0)";
	} else if (e.key === "ArrowDown") {
		box.style.backgroundColor = "#888bff";
		box.style.transform = box.style.transform + " translateY(350px)";
	}
});
