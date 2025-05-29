const dates = [
  { day: "Monday" },
  { day: "Tuesday" },
  { day: "Wednesday" },
  { day: "Thursday" },
  { day: "Friday" },
];

const details = [
  {
    subject: "Flag Ceremony",
    code: "",
    name: "",
    time: "7:00 - 7:30",
    color: "363B40",
  },
  {
    subject: "Home room",
    code: "",
    name: "",
    time: "7:00 - 7:30",
    color: "363B40",
  },
  {
    subject: "Home room",
    code: "",
    name: "",
    time: "7:00 - 7:30",
    color: "363B40",
  },
  {
    subject: "Home room",
    code: "",
    name: "",
    time: "7:00 - 7:30",
    color: "363B40",
  },
  {
    subject: "Home room",
    code: "",
    name: "",
    time: "7:00 - 7:30",
    color: "363B40",
  },
  {
    subject: "English",
    code: "ENG 07",
    name: "Galvez",
    time: "7:30 - 8:30",
    color: "3a59d1",
  },
  {
    subject: "Science",
    code: "SNC 07",
    name: "Galvez",
    time: "7:30 - 8:30",
    color: "E55050",
  },
  {
    subject: "Filipino",
    code: "FPO 07",
    name: "Arbulante",
    time: "7:30 - 8:30",
    color: "A86523",
  },

  {
    subject: "Science",
    code: "SNC 07",
    name: "Mutuc",
    time: "7:30 - 8:30",
    color: "E55050",
  },
  {
    subject: "EsP",
    code: "ESP 07",
    name: "Arbulante",
    time: "7:30 - 8:30",
    color: "8F87F1",
  },
  {
    subject: "Mathematics",
    code: "MTH 07",
    name: "Castillo",
    time: "8:30 - 9:30",
    color: "399918",
  },
  {
    subject: "Mathematics",
    code: "MTH 07",
    name: "Castillo",
    time: "8:30 - 9:30 AM",
    color: "399918",
  },

  {
    subject: "AP",
    code: "1007",
    name: "Guevarra",
    time: "8:30 - 9:30 AM",
    color: "E9A319",
  },
  {
    subject: "Filipino",
    code: "FPO 07",
    name: "Arbulante",
    time: "8:30 - 9:30 AM",
    color: "A86523",
  },
  {
    subject: "AP",
    code: "1007",
    name: "Guevarra",
    time: "8:30 - 9:30 AM",
    color: "E9A319",
  },
  {
    subject: "Recess",
    code: "",
    name: "",
    time: "9:30 - 9:45",
    color: "363B40",
  },
  {
    subject: "Recess",
    code: "",
    name: "",
    time: "9:30 - 9:45",
    color: "363B40",
  },
  {
    subject: "Recess",
    code: "",
    name: "",
    time: "9:30 - 9:45",
    color: "363B40",
  },
  {
    subject: "Recess",
    code: "",
    name: "",
    time: "9:30 - 9:45",
    color: "363B40",
  },
  {
    subject: "Recess",
    code: "",
    name: "",
    time: "9:30 - 9:45",
    color: "363B40",
  },
  {
    subject: "Music",
    code: "MSC 07",
    name: "Lacap",
    time: "9:45 - 10:45",
    color: "483AA0",
  },
  {
    subject: "English",
    code: "ENG 07",
    name: "Galvez",
    time: "9:45 - 10:45",
    color: "3a59d1",
  },

  {
    subject: "Science",
    code: "SNC 07",
    name: "Mutuc",
    time: "9:45 - 10:45",
    color: "E55050",
  },
  {
    subject: "English",
    code: "ENG 07",
    name: "Galvez",
    time: "9:45 - 10:45",
    color: "3a59d1",
  },
  {
    subject: "Elective",
    code: "ELC 07",
    name: "--",
    time: "9:45 - 10:45",
    color: "183B4E",
  },
  {
    subject: "TLE",
    code: "2907",
    name: "Tapire",
    time: "10:45 - 11:45",
    color: "DE3163",
  },
  {
    subject: "AP",
    code: "1007",
    name: "Guevarra",
    time: "10:45 - 11:45",
    color: "E9A319",
  },

  {
    subject: "Mathematics",
    code: "MTH 07",
    name: "Castillo",
    time: "10:45 - 11:45",
    color: "399918",
  },
  {
    subject: "Health",
    code: "HTH 07",
    name: "Concepcion",
    time: "10:45 - 11:45",
    color: "E52020",
  },
  {
    subject: "Filipino",
    code: "FPO 07",
    name: "Arbulante",
    time: "10:45 - 11:45",
    color: "A86523",
  },
  {
    subject: "Launch",
    code: "",
    name: "",
    time: "11:45 - 12:30",
    color: "363B40",
  },
  {
    subject: "Launch",
    code: "",
    name: "",
    time: "11:45 - 12:30",
    color: "363B40",
  },
  {
    subject: "Launch",
    code: "",
    name: "",
    time: "11:45 - 12:30",
    color: "363B40",
  },
  {
    subject: "Launch",
    code: "",
    name: "",
    time: "11:45 - 12:30",
    color: "363B40",
  },
  {
    subject: "Launch",
    code: "",
    name: "",
    time: "11:45 - 12:30",
    color: "363B40",
  },
  {
    subject: "Filipino",
    code: "FPO 07",
    name: "Arbulante",
    time: "12:30 - 1:30",
    color: "A86523",
  },
  {
    subject: "TLE",
    code: "2907",
    name: "Tapire",
    time: "12:30 - 1:30",
    color: "DE3163",
  },
  {
    subject: "Arts",
    code: "AR 07",
    name: "Ortega",
    time: "12:30 - 1:30",
    color: "219C90",
  },
  {
    subject: "Mathematics",
    code: "MTH 07",
    name: "Castillo",
    time: "12:30 - 1:30",
    color: "399918",
  },
  {
    subject: "English",
    code: "ENG 07",
    name: "Galvez",
    time: "12:30 - 1:30",
    color: "3a59d1",
  },
  {
    subject: "AP",
    code: "1007",
    name: "Guevarra",
    time: "1:30 - 2:30 AM",
    color: "E9A319",
  },
  {
    subject: "TLE",
    code: "2907",
    name: "Tapire",
    time: "1:30 - 2:30",
    color: "DE3163",
  },

  {
    subject: "PE",
    code: "SNC 07",
    name: "Mutuc",
    time: "1:30 - 2:30",
    color: "384B70",
  },
  {
    subject: "TLE",
    code: "2907",
    name: "Tapire",
    time: "1:30 - 2:30",
    color: "DE3163",
  },
  {
    subject: "Science",
    code: "SNC 07",
    name: "Mutuc",
    time: "1:30 - 2:30",
    color: "E55050",
  },
  {
    subject: "EsP",
    code: "ESP 07",
    name: "Arbulante",
    time: "2:30 - 3:30",
    color: "8F87F1",
  },
  {
    subject: "EsP",
    code: "ESP 07",
    name: "Arbulante",
    time: "2:30 - 3:30",
    color: "8F87F1",
  },

  {
    subject: "Early Out",
    code: " ",
    name: " ",
    time: "",
    color: "363B40",
  },
  {
    subject: "EsP",
    code: "ESP 07",
    name: "Arbulante",
    time: "2:30 - 3:30",
    color: "8F87F1",
  },
  {
    subject: "Early Out",
    code: " ",
    name: " ",
    time: "",
    color: "363B40",
  },
];

function appendDays() {
  const dayBox = document.getElementById("dayBox");

  dates.forEach((date) => {
    dayBox.innerHTML += ` <div class="card-day">` + date.day + `</div>`;
  });
}

function appendDetails() {
  const topBox = document.getElementById("topBox");

  details.forEach((detail) => {
    topBox.innerHTML +=
      ` <div
            class="card"
            style="
              border-left: 8px solid #` +
      detail.color +
      `;
              color: #` +
      detail.color +
      `;
            "
          >
            <div class="subject-teacher-wrapper">
              <div class="subject-main-wrapper">
                <div class="subject-detail-wrapper">
                  <div class="subject-name">` +
      detail.subject +
      `</div>
                  <div class="subject-code">` +
      detail.code +
      `</div>
                  <div class="edit"></div>
                  <img src="src/assets/icons/edit.svg" />Edit
                </div>
              </div>
              <div class="teacher-name">` +
      detail.name +
      `</div>
            </div>
            <div class="time">` +
      detail.time +
      `</div>
          </div>`;
  });
}

appendDays();
appendDetails();
