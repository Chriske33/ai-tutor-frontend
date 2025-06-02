async function askAI() {
  const subject = document.getElementById("subject").value;
  const grade = document.getElementById("grade").value;
  const topic = document.getElementById("topic").value;

  const response = await fetch("https://ai-tutor-backend.onrender.com/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ subject, grade, topic })
  });

  const data = await response.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
}