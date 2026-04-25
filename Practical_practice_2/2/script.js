// Reusable function to create a skill bar
function createSkillBar(skillName, percentage) {
    const container = document.getElementById("skillsContainer");
  
    // Create elements
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");
  
    const name = document.createElement("div");
    name.classList.add("skill-name");
    name.textContent = skillName;
  
    const bar = document.createElement("div");
    bar.classList.add("skill-bar");
  
    const fill = document.createElement("div");
    fill.classList.add("skill-fill");
    fill.textContent = percentage + "%";
  
    // Append structure
    bar.appendChild(fill);
    skillDiv.appendChild(name);
    skillDiv.appendChild(bar);
    container.appendChild(skillDiv);
  
    // Animate width
    setTimeout(() => {
      fill.style.width = percentage + "%";
    }, 100);
  }
  
  // Example usage
  createSkillBar("HTML", 90);
  createSkillBar("CSS", 80);
  createSkillBar("JavaScript", 75);
  createSkillBar("Python", 70);
  