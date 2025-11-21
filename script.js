// Calendar Data
const races = [
  { round: 1, name: "Australian Grand Prix", location: "Melbourne", date: "14-16 มี.ค.", sprint: false },
  { round: 2, name: "Chinese Grand Prix", location: "Shanghai", date: "21-23 มี.ค.", sprint: true },
  { round: 3, name: "Japanese Grand Prix", location: "Suzuka", date: "4-6 เม.ย.", sprint: false },
  { round: 4, name: "Bahrain Grand Prix", location: "Sakhir", date: "11-13 เม.ย.", sprint: false },
  { round: 5, name: "Saudi Arabian Grand Prix", location: "Jeddah", date: "18-20 เม.ย.", sprint: false },
  { round: 6, name: "Miami Grand Prix", location: "Miami", date: "2-4 พ.ค.", sprint: true },
  { round: 7, name: "Emilia Romagna Grand Prix", location: "Imola", date: "16-18 พ.ค.", sprint: false },
  { round: 8, name: "Monaco Grand Prix", location: "Monte Carlo", date: "23-25 พ.ค.", sprint: false },
  { round: 9, name: "Spanish Grand Prix", location: "Barcelona", date: "30 พ.ค.-1 มิ.ย.", sprint: false },
  { round: 10, name: "Canadian Grand Prix", location: "Montreal", date: "13-15 มิ.ย.", sprint: false },
  { round: 11, name: "Austrian Grand Prix", location: "Spielberg", date: "27-29 มิ.ย.", sprint: false },
  { round: 12, name: "British Grand Prix", location: "Silverstone", date: "4-6 ก.ค.", sprint: false },
  { round: 13, name: "Belgian Grand Prix", location: "Spa-Francorchamps", date: "25-27 ก.ค.", sprint: true },
  { round: 14, name: "Hungarian Grand Prix", location: "Budapest", date: "1-3 ส.ค.", sprint: false },
  { round: 15, name: "Dutch Grand Prix", location: "Zandvoort", date: "29-31 ส.ค.", sprint: false },
  { round: 16, name: "Italian Grand Prix", location: "Monza", date: "5-7 ก.ย.", sprint: false },
  { round: 17, name: "Azerbaijan Grand Prix", location: "Baku", date: "19-21 ก.ย.", sprint: false },
  { round: 18, name: "Singapore Grand Prix", location: "Marina Bay", date: "3-5 ต.ค.", sprint: false },
  { round: 19, name: "United States Grand Prix", location: "Austin", date: "17-19 ต.ค.", sprint: true },
  { round: 20, name: "Mexico City Grand Prix", location: "Mexico City", date: "24-26 ต.ค.", sprint: false },
  { round: 21, name: "São Paulo Grand Prix", location: "Interlagos", date: "7-9 พ.ย.", sprint: true },
  { round: 22, name: "Las Vegas Grand Prix", location: "Las Vegas", date: "20-22 พ.ย.", sprint: false },
  { round: 23, name: "Qatar Grand Prix", location: "Lusail", date: "28-30 พ.ย.", sprint: true },
  { round: 24, name: "Abu Dhabi Grand Prix", location: "Yas Marina", date: "5-7 ธ.ค.", sprint: false },
]

// Team Car Specifications
const teamCars = {
  "team-red-bull": {
    name: "Red Bull Racing",
    car: "RB21",
    engine: "Red Bull Powertrains RBPTH003",
    chassis: "Carbon fibre monocoque",
    power: "~1000 HP",
    weight: "798 kg (with driver)",
    highlights: "Dominant aerodynamics, exceptional downforce in high-speed corners",
    carImage: "/placeholder.svg?height=400&width=700",
  },
  "team-ferrari": {
    name: "Scuderia Ferrari",
    car: "SF-25",
    engine: "Ferrari 066/12",
    chassis: "Carbon fibre composite",
    power: "~1000 HP",
    weight: "798 kg (with driver)",
    highlights: "Powerful engine, strong straight-line speed, improved reliability",
    carImage: "/placeholder.svg?height=400&width=700",
  },
  "team-mercedes": {
    name: "Mercedes-AMG Petronas",
    car: "W16",
    engine: "Mercedes-AMG F1 M15 E Performance",
    chassis: "Carbon fibre monocoque",
    power: "~1000 HP",
    weight: "798 kg (with driver)",
    highlights: "Advanced hybrid technology, superior energy recovery system",
    carImage: "/placeholder.svg?height=400&width=700",
  },
  "team-mclaren": {
    name: "McLaren F1 Team",
    car: "MCL39",
    engine: "Mercedes-AMG F1 M15 E Performance",
    chassis: "Carbon fibre composite",
    power: "~1000 HP",
    weight: "798 kg (with driver)",
    highlights: "Balanced performance, excellent tire management, consistent pace",
    carImage: "/placeholder.svg?height=400&width=700",
  },
  "team-aston-martin": {
    name: "Aston Martin Aramco",
    car: "AMR25",
    engine: "Mercedes-AMG F1 M15 E Performance",
    chassis: "Carbon fibre monocoque",
    power: "~1000 HP",
    weight: "798 kg (with driver)",
    highlights: "Innovative aerodynamics, strong development pace throughout season",
    carImage: "/placeholder.svg?height=400&width=700",
  },
  "team-alpine": {
    name: "BWT Alpine F1 Team",
    car: "A525",
    engine: "Renault E-Tech RE25",
    chassis: "Carbon fibre composite",
    power: "~1000 HP",
    weight: "798 kg (with driver)",
    highlights: "Works team advantage, unique engine characteristics",
    carImage: "/placeholder.svg?height=400&width=700",
  },
  "team-williams": {
    name: "Williams Racing",
    car: "FW47",
    engine: "Mercedes-AMG F1 M15 E Performance",
    chassis: "Carbon fibre monocoque",
    power: "~1000 HP",
    weight: "798 kg (with driver)",
    highlights: "Historic team rebirth, improved performance and development",
    carImage: "/placeholder.svg?height=400&width=700",
  },
  "team-rb": {
    name: "Visa Cash App RB F1 Team",
    car: "VCARB 02",
    engine: "Red Bull Powertrains RBPTH003",
    chassis: "Carbon fibre composite",
    power: "~1000 HP",
    weight: "798 kg (with driver)",
    highlights: "Red Bull technology, young driver development focus",
    carImage: "/placeholder.svg?height=400&width=700",
  },
  "team-haas": {
    name: "MoneyGram Haas F1 Team",
    car: "VF-25",
    engine: "Ferrari 066/12",
    chassis: "Carbon fibre monocoque",
    power: "~1000 HP",
    weight: "798 kg (with driver)",
    highlights: "Ferrari partnership, cost-effective performance approach",
    carImage: "/placeholder.svg?height=400&width=700",
  },
  "team-sauber": {
    name: "Stake F1 Team Kick Sauber",
    car: "C45",
    engine: "Ferrari 066/12",
    chassis: "Carbon fibre composite",
    power: "~1000 HP",
    weight: "798 kg (with driver)",
    highlights: "Becoming Audi works team in 2026, future-focused development",
    carImage: "/placeholder.svg?height=400&width=700",
  },
}

// Drivers Data with detailed information
const drivers = [
  {
     number: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    teamClass: "team-red-bull",
    color: "#1e3a8a",
    nationality: "เนเธอร์แลนด์",
    age: 27,
    debut: "2015",
    championships: 4,
    wins: 63,
    podiums: 109,
    bio: "แชมป์โลก 4 สมัยติดต่อกัน (2021-2024) นักแข่งที่มีความสามารถโดดเด่นและสถิติที่น่าทึ่งในวัย 27 ปี ถือเป็นหนึ่งในนักแข่งที่ดีที่สุดในยุคปัจจุบัน",
    image: "/img/Drivers/1.jpg", 
  },
  {
    number: 22,
    name: "Yuki Tsunoda",
    team: "Red Bull Racing",
    teamClass: "team-red-bull",
    color: "#1e3a8a",
    nationality: "ญี่ปุ่น",
    age: 24,
    debut: "2021",
    championships: 0,
    wins: 0,
    podiums: 0,
    bio: "นักแข่งญี่ปุ่นที่ได้รับโปรโมตขึ้นมาเป็นนักแข่งหลักกับเรดบูลในปี 2025 หลังจากพัฒนาตัวเองอย่างต่อเนื่อง มีความเร็วสูงและความก้าวร้าว แม้จะมีรูปร่างเล็กแต่มีความสามารถสูง เป็นนักแข่งญี่ปุ่นคนแรกที่ขับให้เรดบูลเรซซิ่ง",
    image: "img/Drivers/22.jpg",
  },
  {
    number: 44,
    name: "Lewis Hamilton",
    team: "Scuderia Ferrari",
    teamClass: "team-ferrari",
    color: "#dc2626",
    nationality: "อังกฤษ",
    age: 40,
    debut: "2007",
    championships: 7,
    wins: 105,
    podiums: 201,
    bio: "ตำนานแห่ง F1 แชมป์โลก 7 สมัย ย้ายมาเฟอร์รารี่ในปี 2025 เพื่อไล่ตามความฝันคว้าแชมป์สมัยที่ 8 กับทีมในตำนาน ถือสถิติชัยชนะมากที่สุดในประวัติศาสตร์",
    image: "/img/Drivers/44.jpg",
  },
  {
    number: 16,
    name: "Charles Leclerc",
    team: "Scuderia Ferrari",
    teamClass: "team-ferrari",
    color: "#dc2626",
    nationality: "โมนาโก",
    age: 27,
    debut: "2018",
    championships: 0,
    wins: 7,
    podiums: 38,
    bio: "ดาวรุ่งของเฟอร์รารี่ จับคู่กับตำนาน Hamilton ในปี 2025 มีความเร็วสูงมากในวันคุณสมบัติ กำลังพัฒนาตัวเองเพื่อคว้าแชมป์โลกสมัยแรก",
    image: "/img/Drivers/16.jpg", 
  },
  {
    number: 63,
    name: "George Russell",
    team: "Mercedes-AMG Petronas",
    teamClass: "team-mercedes",
    color: "#06b6d4",
    nationality: "อังกฤษ",
    age: 27,
    debut: "2019",
    championships: 0,
    wins: 2,
    podiums: 13,
    bio: "นักแข่งหมายเลข 1 ของเมอร์เซเดสในปี 2025 มีความเร็วสูงและกำลังนำทีมสู่การกลับมาแข่งขันแชมป์โลก มีศักยภาพสูงในการคว้าแชมป์โลก",
    image: "/img/Drivers/63.jpg", 
  },
  {
    number: 12,
    name: "Andrea Kimi Antonelli",
    team: "Mercedes-AMG Petronas",
    teamClass: "team-mercedes",
    color: "#06b6d4",
    nationality: "อิตาลี",
    age: 18,
    debut: "2025",
    championships: 0,
    wins: 0,
    podiums: 0,
    bio: "มือใหม่ที่มีความสามารถสูงจากอิตาลี ได้รับโอกาสขึ้นมาแข่งกับเมอร์เซเดสตั้งแต่อายุ 18 ปี แชมป์ F2 ปี 2024 ถือเป็นหนึ่งในดาวรุ่งที่สดใสที่สุด",
    image: "/img/Drivers/12.jpg", 
  },
  {
    number: 4,
    name: "Lando Norris",
    team: "McLaren F1 Team",
    teamClass: "team-mclaren",
    color: "#f97316",
    nationality: "อังกฤษ",
    age: 25,
    debut: "2019",
    championships: 0,
    wins: 4,
    podiums: 23,
    bio: "ดาวรุ่งที่มีความสามารถสูง มีความเร็วและความสม่ำเสมอที่ดีเยี่ยม กำลังเป็นผู้นำทีมแมคลาเรนสู่ความสำเร็จ อยู่ในช่วงสุดยอดของอาชีพ",
    image: "/img/Drivers/4.jpg", 
  },
  {
    number: 81,
    name: "Oscar Piastri",
    team: "McLaren F1 Team",
    teamClass: "team-mclaren",
    color: "#f97316",
    nationality: "ออสเตรเลีย",
    age: 24,
    debut: "2023",
    championships: 0,
    wins: 2,
    podiums: 8,
    bio: "มือใหม่ที่มีผลงานโดดเด่น ได้รับการยอมรับว่าเป็นหนึ่งในดาวรุ่งที่สดใสที่สุด จับคู่กับนอร์ริสเป็นคู่หูที่แข็งแกร่ง มีอนาคตที่สดใสในวงการ F1",
    image: "/img/Drivers/81.jpg", 
  },
  {
    number: 14,
    name: "Fernando Alonso",
    team: "Aston Martin Aramco",
    teamClass: "team-aston-martin",
    color: "#10b981",
    nationality: "สเปน",
    age: 43,
    debut: "2001",
    championships: 2,
    wins: 32,
    podiums: 106,
    bio: "ตำนานที่ยังคงแข่งด้วยความเร็วสูงในปี 2025 แชมป์โลก 2 สมัย มีประสบการณ์และความสามารถที่ไม่มีใครเทียบได้ เป็นแรงบันดาลใจให้นักแข่งรุ่นใหม่",
    image: "/img/Drivers/14.jpg", 
  },
  {
    number: 18,
    name: "Lance Stroll",
    team: "Aston Martin Aramco",
    teamClass: "team-aston-martin",
    color: "#10b981",
    nationality: "แคนาดา",
    age: 26,
    debut: "2017",
    championships: 0,
    wins: 0,
    podiums: 3,
    bio: "นักแข่งที่มีประสบการณ์สูง กำลังพัฒนาฝีมือในทีมแอสตันมาร์ติน มีศักยภาพในการทำผลงานที่ดีขึ้นในปี 2025",
    image: "/img/Drivers/18.jpg", 
  },
  {
    number: 10,
    name: "Pierre Gasly",
    team: "BWT Alpine F1 Team",
    teamClass: "team-alpine",
    color: "#ec4899",
    nationality: "ฝรั่งเศส",
    age: 29,
    debut: "2017",
    championships: 0,
    wins: 1,
    podiums: 4,
    bio: "นักแข่งที่มีความเร็วสูง คว้าชัยชนะได้ 1 ครั้งใน Monza 2020 กำลังเป็นผู้นำทีมแอลไพน์พร้อมเครื่องยนต์ Mercedes ใหม่",
    image: "/img/Drivers/10.jpg", 
  },
  {
    number: 43,
    name: "Jack Doohan",
    team: "BWT Alpine F1 Team",
    teamClass: "team-alpine",
    color: "#ec4899",
    nationality: "ออสเตรเลีย",
    age: 22,
    debut: "2025",
    championships: 0,
    wins: 0,
    podiums: 0,
    bio: "มือใหม่จากออสเตรเลีย ลูกชายของตำนาน MotoGP Mick Doohan ได้รับโอกาสขึ้นมาแข่งใน F1 ปี 2025 หลังผลงานดีใน F2 มีศักยภาพสูง",
    image: "/img/Drivers/43.jpg", 
  },
  {
    number: 23,
    name: "Alex Albon",
    team: "Williams Racing",
    teamClass: "team-williams",
    color: "#3b82f6",
    nationality: "ไทย",
    age: 29,
    debut: "2019",
    championships: 0,
    wins: 0,
    podiums: 2,
    bio: "นักแข่งชาวไทย กลับมาสู่ F1 อย่างแข็งแกร่ง กำลังเป็นผู้นำทีมวิลเลียมส์ให้กลับมาแข่งขันได้ในระดับแถวหน้า มีความสามารถสูงและเป็นที่ยอมรับ",
    image: "/img/Drivers/23.jpg", 
  },
  {
    number: 55,
    name: "Carlos Sainz",
    team: "Williams Racing",
    teamClass: "team-williams",
    color: "#3b82f6",
    nationality: "สเปน",
    age: 30,
    debut: "2015",
    championships: 0,
    wins: 4,
    podiums: 26,
    bio: "นักแข่งสเปนที่มีความสม่ำเสมอสูง ย้ายมาวิลเลียมส์ในปี 2025 เพื่อช่วยพัฒนาทีม มีประสบการณ์สูงและความสามารถในการทำคะแนนอย่างต่อเนื่อง",
    image: "/img/Drivers/55.jpg", 
  },
  {
    number: 30,
    name: "Liam Lawson",
    team: "Visa Cash App RB F1",
    teamClass: "team-rb",
    color: "#6366f1",
    nationality: "นิวซีแลนด์",
    age: 23,
    debut: "2023",
    championships: 0,
    wins: 0,
    podiums: 0,
    bio: "ดาวรุ่งจากนิวซีแลนด์ที่มีความเร็วสูงและความก้าวร้าว ได้รับโอกาสแข่งใน F1 หลังจากผลงานที่โดดเด่นในซีรีส์รอง มีสไตล์การขับที่ก้าวร้าวและไม่กลัวที่จะแซง เป็นหนึ่งในนักแข่งรุ่นใหม่ที่น่าจับตามองในโปรแกรมเรดบูล",
    image: "/img/Drivers/30.jpg",
  },
  {
    number: 6,
    name: "Isack Hadjar",
    team: "Visa Cash App RB",
    teamClass: "team-rb",
    color: "#6366f1",
    nationality: "ฝรั่งเศส",
    age: 20,
    debut: "2025",
    championships: 0,
    wins: 0,
    podiums: 0,
    bio: "มือใหม่จากฝรั่งเศส ผลงานดีเด่นใน F2 ทำให้ได้รับโอกาสจากโปรแกรมพัฒนานักแข่งของเรดบูล มีความสามารถสูงและเป็นอนาคตที่สดใส",
    image: "/img/Drivers/6.jpg", 
  },
  {
    number: 31,
    name: "Esteban Ocon",
    team: "MoneyGram Haas F1",
    teamClass: "team-haas",
    color: "#9ca3af",
    nationality: "ฝรั่งเศส",
    age: 28,
    debut: "2016",
    championships: 0,
    wins: 1,
    podiums: 3,
    bio: "นักแข่งที่มีความสม่ำเสมอดี ย้ายมาฮาสในปี 2025 เพื่อช่วยพัฒนาทีม คว้าชัยชนะได้ที่ฮังการี 2021 มีประสบการณ์สูง",
    image: "/img/Drivers/31.jpg", 
  },
  {
    number: 87,
    name: "Oliver Bearman",
    team: "MoneyGram Haas F1",
    teamClass: "team-haas",
    color: "#9ca3af",
    nationality: "อังกฤษ",
    age: 19,
    debut: "2025",
    championships: 0,
    wins: 0,
    podiums: 0,
    bio: "ดาวรุ่งจากอังกฤษ ได้รับโอกาสขึ้นมาแข่งเต็มเวลากับฮาสในปี 2025 หลังผลงานที่น่าประทับใจเมื่อขึ้นมาแทนที่นักแข่งฟรารี่ในปี 2024 มีอนาคตสดใส",
    image: "/img/Drivers/87.jpg", 
  },
  {
    number: 27,
    name: "Nico Hulkenberg",
    team: "Stake F1 Kick Sauber",
    teamClass: "team-sauber",
    color: "#22c55e",
    nationality: "เยอรมันนี",
    age: 35,
    debut: "2013",
    championships: 0,
    wins: 0,
    podiums: 0,
    bio:"นิโค ฮูลเคนเบิร์ก นักแข่งชาวเยอรมัน เปิดตัวใน F1 ปี 2010 กับทีม Williams เคยคว้าโพลในปีแรกของอาชีพที่บราซิล",
    image: "/img/Drivers/27.jpg", 
  },
  {
    number: 5,
    name: "Gabriel Bortoleto",
    team: "Stake F1 Kick Sauber",
    teamClass: "team-sauber",
    color: "#22c55e",
    nationality: "บราซิล",
    age: 20,
    debut: "2025",
    championships: 0,
    wins: 0,
    podiums: 0,
    bio: "ดาวรุ่งจากบราซิล แชมป์ F3 ปี 2023 และผลงานโดดเด่นใน F2 ได้รับโอกาสขึ้นมาแข่งใน F1 ปี 2025 เป็นความหวังใหม่ของแฟนบราซิล",
    image: "/img/Drivers/5.jpg",
  },
]

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderCalendar()
  renderDrivers()
  initNavigation()
  initCounters()
  initBackToTop()
  initFilters()
  initModal()
})

// Render Calendar
function renderCalendar() {
  const calendarGrid = document.getElementById("calendarGrid")
  calendarGrid.innerHTML = races
    .map(
      (race) => `
        <div class="race-card ${race.sprint ? "sprint" : ""}" data-type="${race.sprint ? "sprint" : "normal"}">
            <div class="race-round">รอบที่ ${race.round}</div>
            <h3 class="race-name">${race.name}</h3>
            <p class="race-location">📍 ${race.location}</p>
            <p class="race-date">📅 ${race.date}</p>
            ${race.sprint ? '<span class="sprint-badge">🏁 Sprint Race</span>' : ""}
        </div>
    `,
    )
    .join("")
}

// Render Drivers
function renderDrivers() {
  const driversGrid = document.getElementById("driversGrid")
  driversGrid.innerHTML = drivers
    .map(
      (driver) => `
        <div class="driver-card ${driver.teamClass}" style="border-color: ${driver.color};" data-team="${driver.teamClass}" data-driver-id="${driver.number}">
            <img src="${driver.image}" alt="${driver.name}" class="driver-image" loading="lazy">
            <div class="driver-number" style="color: ${driver.color};">${driver.number}</div>
            <h3 class="driver-name">${driver.name}</h3>
            <p class="driver-team">${driver.team}</p>
            <p class="driver-points">🏆 ${driver.championships} แชมป์ | 🏁 ${driver.wins} ชนะ</p>
        </div>
    `,
    )
    .join("")

  // Add click event to driver cards
  document.querySelectorAll(".driver-card").forEach((card) => {
    card.addEventListener("click", function () {
      const driverId = this.getAttribute("data-driver-id")
      showDriverModal(driverId)
    })
  })
}

// Show Driver Modal with Details
function showDriverModal(driverId) {
  const driver = drivers.find((d) => d.number == driverId)
  if (!driver) return

  const teamCar = teamCars[driver.teamClass]
  const modal = document.getElementById("driverModal")
  const modalBody = document.getElementById("modalBody")

  modalBody.innerHTML = `
        <div class="driver-detail-header">
            <img src="${driver.image}" alt="${driver.name}" class="driver-detail-image" loading="lazy">
            <div class="driver-detail-number" style="color: ${driver.color};">${driver.number}</div>
            <h2 class="driver-detail-name">${driver.name}</h2>
            <p class="driver-detail-team" style="color: ${driver.color};">${driver.team}</p>
        </div>

        <div class="driver-info-grid">
            <div class="info-item">
                <div class="info-label">สัญชาติ</div>
                <div class="info-value">${driver.nationality}</div>
            </div>
            <div class="info-item">
                <div class="info-label">อายุ</div>
                <div class="info-value">${driver.age} ปี</div>
            </div>
            <div class="info-item">
                <div class="info-label">เริ่มแข่ง F1</div>
                <div class="info-value">${driver.debut}</div>
            </div>
            <div class="info-item">
                <div class="info-label">แชมป์โลก</div>
                <div class="info-value">${driver.championships} สมัย</div>
            </div>
            <div class="info-item">
                <div class="info-label">ชัยชนะ</div>
                <div class="info-value">${driver.wins} ครั้ง</div>
            </div>
            <div class="info-item">
                <div class="info-label">ขึ้นโพเดียม</div>
                <div class="info-value">${driver.podiums} ครั้ง</div>
            </div>
        </div>

        <div class="driver-bio">
            <h3>ประวัติและผลงาน</h3>
            <p>${driver.bio}</p>
        </div>

        <div class="car-info" style="border-left-color: ${driver.color};">
            <div class="car-info" style="border-left-color: ${driver.color};">
          <h3>🏎️ ข้อมูลรถแข่ง ${teamCar.car}</h3>
    <img src="${teamCar.carImage}" alt="${teamCar.car}" class="driver-car-image" loading="lazy">
    <p class="car-name">${teamCar.car}</p>
</div>
            <div class="car-specs">
                <div class="spec-item">
                    <div class="spec-label">เครื่องยนต์</div>
                    <div class="spec-value">${teamCar.engine}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">โครงสร้าง</div>
                    <div class="spec-value">${teamCar.chassis}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">กำลังม้า</div>
                    <div class="spec-value">${teamCar.power}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">น้ำหนัก</div>
                    <div class="spec-value">${teamCar.weight}</div>
                </div>
            </div>
        </div>
    `

  modal.style.display = "block"
}

// Modal Controls
function initModal() {
  const modal = document.getElementById("driverModal")
  const closeBtn = document.querySelector(".close")

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
    }
  })
}

// Navigation
function initNavigation() {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("navMenu")

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        navMenu.classList.remove("active")
      }
    })
  })
}

// Counter Animation
function initCounters() {
  const counters = document.querySelectorAll(".stat-number")
  const observerOptions = {
    threshold: 0.5,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target
        const target = Number.parseInt(counter.getAttribute("data-count"))
        animateCounter(counter, target)
        observer.unobserve(counter)
      }
    })
  }, observerOptions)

  counters.forEach((counter) => observer.observe(counter))
}

function animateCounter(element, target) {
  let current = 0
  const increment = target / 50
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current)
    }
  }, 30)
}

// Back to Top Button
function initBackToTop() {
  const backToTop = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add("visible")
    } else {
      backToTop.classList.remove("visible")
    }
  })

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}

// Filters
function initFilters() {
  // Calendar filter
  const filterBtns = document.querySelectorAll(".filter-btn")
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")
      const raceCards = document.querySelectorAll(".race-card")

      raceCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block"
        } else {
          card.style.display = card.getAttribute("data-type") === filter ? "block" : "none"
        }
      })
    })
  })

  // Team filter
  const teamFilterBtns = document.querySelectorAll(".team-filter-btn")
  teamFilterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      teamFilterBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      const team = this.getAttribute("data-team")
      const driverCards = document.querySelectorAll(".driver-card")

      driverCards.forEach((card) => {
        if (team === "all") {
          card.style.display = "block"
        } else {
          card.style.display = card.getAttribute("data-team") === team ? "block" : "none"
        }
      })
    })
  })
}
