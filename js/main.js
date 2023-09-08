const MilestoneData = JSON.parse(data).data;

function loadMilestones() {
  const milestones = document.querySelector(".milestones");
  milestones.innerHTML = `${MilestoneData.map(function (milestone) {
    return ` <div class="milestone border-b">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" /></div>
      <div onclick="openMilestone(this)">
        <p>
         ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
      ${milestone.modules
        .map(function (module) {
          return ` <div class="module border-b">
        <p>${module.name}</p>
      </div>`;
        })
        .join("")}
    </div>
  </div>`;
  }).join("")}`;
}

function openMilestone(milestoneElement) {
  const currentPanel = milestoneElement.parentNode.nextElementSibling;
  const active = document.querySelector(".active");

  milestoneElement.classList.toggle("active");
  if (active && !milestoneElement.classList.contains("activ")) {
    active.classList.remove("active");
  }

  const shownPanel = document.querySelector(".show");
  if (!currentPanel.classList.contains("show") && shownPanel) {
    shownPanel.classList.remove("show");
  }

  currentPanel.classList.toggle("show");
}
loadMilestones();
