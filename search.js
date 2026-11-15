const PAGES = [
  {
    "title": "Home",
    "url": "index.html",
    "keywords": "home"
  },
  {
    "title": "History",
    "url": "history.html",
    "keywords": "about founding 2009"
  },
  {
    "title": "Mission & Vision",
    "url": "mission-vision.html",
    "keywords": "values"
  },
  {
    "title": "Faculty and Staff",
    "url": "faculty.html",
    "keywords": "teachers instructors"
  },
  {
    "title": "Facilities",
    "url": "facilities.html",
    "keywords": "laboratory library"
  },
  {
    "title": "Nursing",
    "url": "nursing.html",
    "keywords": "program"
  },
  {
    "title": "Midwifery",
    "url": "midwifery.html",
    "keywords": "program"
  },
  {
    "title": "Curriculum",
    "url": "curriculum.html",
    "keywords": "subjects courses"
  },
  {
    "title": "Clinical Training",
    "url": "clinical-training.html",
    "keywords": "hospital practice"
  },
  {
    "title": "Student Service",
    "url": "student-service.html",
    "keywords": "counseling library"
  },
  {
    "title": "Organization",
    "url": "organization.html",
    "keywords": "student council society"
  },
  {
    "title": "Activities",
    "url": "activities.html",
    "keywords": "events"
  },
  {
    "title": "Requirements",
    "url": "requirements.html",
    "keywords": "documents admission"
  },
  {
    "title": "Application",
    "url": "application.html",
    "keywords": "apply enroll"
  },
  {
    "title": "Contact Information",
    "url": "contact-information.html",
    "keywords": "phone office hours"
  },
  {
    "title": "Location",
    "url": "location.html",
    "keywords": "address map"
  },
  {
    "title": "Email",
    "url": "email.html",
    "keywords": "mail"
  },
  {
    "title": "Contact Form",
    "url": "contact-form.html",
    "keywords": "message"
  }
];

const box = document.getElementById("site-search");
const list = document.getElementById("search-results");

if (box && list) {
  box.addEventListener("input", () => {
    const q = box.value.trim().toLowerCase();
    list.textContent = "";
    if (!q) { list.style.display = "none"; return; }

    const hits = PAGES.filter((p) => (p.title + " " + p.keywords).toLowerCase().includes(q));
    if (hits.length === 0) {
      const li = document.createElement("li");
      li.className = "no-result";
      li.textContent = "No results found";
      list.appendChild(li);
    }
    hits.forEach((p) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = p.url;
      a.textContent = p.title;
      li.appendChild(a);
      list.appendChild(li);
    });
    list.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box")) list.style.display = "none";
  });
}
