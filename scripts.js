// // 
//  afficher pour chaque skill la liste sa description
  function adddesc(){
   var txt=document.getElementById("des1")
   if(txt.innerHTML=="Afficher Detail"){
      document.getElementById("des1").innerHTML="ok";
   }
   else{
      document.getElementById("des1").innerHTML="Afficher Detail"
   }
 
  }
//popup
  function showPopup(bool,id) {
   
  
  const popup = document.getElementById('popup');
if (bool) {
    opacity(popup,id);

  const skills = document.getElementsByClassName('skill');
  for (let i = 0; i < skills.length; i++) {
   

// Parcourir chaque élément pour récupérer son ID
  
    if(skills[i].id===id){
      attributeColor(i);
     
    }

      skills[i].style.pointerEvents = 'none';
      skills[i].style.opacity = '0';
     
     
 
} }else {
  document.getElementById('popup').style.visibility = 'hidden'
  
  const skills = document.getElementsByClassName('skill');
  for (let i = 0; i < skills.length; i++) {
      skills[i].style.pointerEvents = 'auto';
      skills[i].style.opacity = '1';
}
 
}
}
//chaque skill , la couleur de la popup
function attributeColor( i){
  const popup = document.getElementById('popup');
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFD700", "#800080", "#00FFFF", "#FF1493"];
  
   popup.style.backgroundColor=colors[i];
}


// opacité +transition
function opacity(popup,id) {
  const opacit = ['0', '0.3', '0.5', '0.7', '0.8', '1'];  // Dernière opacité à 1
  let time = 90;  // Ajustement du délai pour chaque étape
  popup.style.visibility = 'visible';  // Affiche le popup dès le début

  for (let i = 0; i < opacit.length; i++) {
    setTimeout(((i) => {
      return () => {
        popup.style.opacity = opacit[i];
      };
    })(i), time * i);  // Multiplie le délai par l'index pour un effet progressif
  }
  const text=document.getElementById(id).innerHTML;
  console.log(text)
  document.getElementById("desc").innerHTML=text;
  
    setTimeout(()=>{

      setTimeout(()=>{
        
    setTimeout(()=>{
     popup.style.left='50%';
     popup.style.top='50%';
    },50)

     popup.style.left='80%';
    },50)
     popup.style.left='40%';
     popup.style.top='40%';

    },50)
}

const translations = {
        en: {
          // project 
          P1:"Remote Work and Leave Management Platform",
          P1_1:"Technology: Angular",
          P1_2:"Client: Department of Languages, University of Namur",
          P1_3:"Development of a platform for managing remote work and leave requests for the university's Department of Languages. The solution provides administrators and users with tools to easily handle remote work requests, track leave, and access detailed follow-up reports.",

          P2:"Order Management Application for Fruit and Vegetable Suppliers",
          P2_1:"Technology: React",
          P2_2:"Client: Fruit and Vegetable Suppliers",
          P2_3:"Design of an application to streamline order management. It allows customers to place orders, and suppliers to validate and confirm these orders. The application also includes a real-time tracking feature for ongoing orders.",

          P3:"Administrative Process Platform for Studying Abroad (in progress)",
          P3_1:"Client: Students",
          P3_2:"Technology: Html,Css and js for frontend, Flask for backend",
          P3_3:"Creation of a centralized platform designed for students beginning their administrative procedures for studying abroad. The platform aims to simplify access to information, track procedural steps, and provide useful resources for students involved in international mobility.Objective: Offer structured support for students in their processes for studying abroad.",
          footer_A:"About me",
          footer_S:"Skills",
          footer_C:"Contacts",



        // Skills
        Front: "Front-end",
        Back: "Back-end",
        Si: "IS Modeling",
        Pr: "Programming",
        Ad: "Data Analysis",
        Co: "Containerization",
        aboutMe: "About Me",
        skills: "Skills",
        skill: "Skill",
        projects: "Projects",
        contact: "Contact",
        proj: "Projects",
        hi: "Hello, I'm Sami Ouakli!",
        introText: `I am a recent computer science graduate specialized in development and programming, currently pursuing a master's in data science. My academic background combines a strong foundation in software development with advanced analytical techniques, equipping me to tackle complex challenges in data-driven fields.`,
        footerText:"© Sami Ouakli. All rights reserved.",
        Certificat:"Certificate of Achievement",
        footer_P:"Projects",
      },
      fr: {
        // Projet
        P1: "Plateforme de Gestion du Travail à Distance et des Congés",
        P1_1: "Technologie : Angular",
        P1_2: "Client : Département des Langues, Université de Namur",
        P1_3: "Développement d'une plateforme pour la gestion du télétravail et des demandes de congé pour le Département des Langues de l'université. La solution offre aux administrateurs et aux utilisateurs des outils pour gérer facilement les demandes de travail à distance, suivre les congés et accéder à des rapports de suivi détaillés.",
    
        P2: "Application de Gestion des Commandes pour les Fournisseurs de Fruits et Légumes",
        P2_1: "Technologie : React",
        P2_2: "Client : Fournisseurs de Fruits et Légumes",
        P2_3: "Conception d'une application pour simplifier la gestion des commandes. Elle permet aux clients de passer des commandes et aux fournisseurs de valider et confirmer celles-ci. L'application inclut également un suivi en temps réel pour les commandes en cours.",
    
        P3: "Plateforme de Processus Administratif pour les Études à l'Étranger (en cours)",
        P3_1: "Client : Étudiants",
        P3_2: "Technologie : Html, Css et js pour le front-end, Flask pour le back-end",
        P3_3: "Création d'une plateforme centralisée pour les étudiants commençant leurs démarches administratives pour les études à l'étranger. La plateforme vise à simplifier l'accès aux informations, à suivre les étapes procédurales et à fournir des ressources utiles pour les étudiants en mobilité internationale. Objectif : offrir un soutien structuré pour les étudiants dans leurs démarches pour les études à l'étranger.",
        footerText:"© Sami Ouakli. Tous droits réservés.",
        footer_P:"Projets",
        // Compétences
        Front: "Front-end",
        Back: "Back-end",
        Si: "Modélisation SI",
        Pr: "Programmation",
        Ad: "Analyse de données",
        Co: "Conteneurisation",
        aboutMe: "À propos de moi",
        skills: "Compétences",
        skill: "Compétence",
        projects: "Projets",
        contact: "Contact",
        proj: "Projets",
        hi: "Bonjour, je suis Sami Ouakli !",
        introText: `Je suis un diplômé récent en informatique, spécialisé en développement et programmation, et je poursuis actuellement un master en science des données. Mon parcours académique allie une solide formation en développement logiciel à des techniques analytiques avancées, me permettant de relever des défis complexes dans des domaines axés sur les données.`,
        Certificat:"Certificats",
        footer_A:"A propos",
        footer_S:"Compétences",
        footer_C:"Coordonnées",
      },
    
    nl: {
      Certificat:"Certificaat van Prestatie",
      // Project
      P1: "Platform voor Thuiswerken en Verlofbeheer",
      P1_1: "Technologie: Angular",
      P1_2: "Klant: Taaldepartement, Universiteit van Namen",
      P1_3: "Ontwikkeling van een platform voor het beheer van thuiswerk- en verlofaanvragen voor het Taaldepartement van de universiteit. De oplossing biedt beheerders en gebruikers tools om eenvoudig thuiswerkaanvragen te verwerken, verlof te volgen en gedetailleerde rapportages in te zien.",
  
      P2: "Bestelbeheertoepassing voor Groente- en Fruitleveranciers",
      P2_1: "Technologie: React",
      P2_2: "Klant: Groente- en Fruitleveranciers",
      P2_3: "Ontwerp van een applicatie voor het stroomlijnen van het bestelbeheer. Hiermee kunnen klanten bestellingen plaatsen en leveranciers deze bestellingen valideren en bevestigen. De applicatie bevat ook een real-time trackingfunctie voor lopende bestellingen.",
  
      P3: "Platform voor Administratieve Processen voor Buitenlands Studeren (in uitvoering)",
      P3_1: "Klant: Studenten",
      P3_2: "Technologie: Html, Css en js voor frontend, Flask voor backend",
      P3_3: "Ontwikkeling van een centraal platform voor studenten die aan hun administratieve procedures beginnen voor studie in het buitenland. Het platform vereenvoudigt de toegang tot informatie, volgt de procedurestappen en biedt nuttige hulpmiddelen voor studenten die aan internationale mobiliteit deelnemen. Doel: Gestructureerde ondersteuning bieden aan studenten bij hun procedures voor studie in het buitenland.",
  
      // Vaardigheden
      Front: "Front-end",
      Back: "Back-end",
      Si: "IS Modellering",
      Pr: "Programmeren",
      Ad: "Data-analyse",
      Co: "Containerisatie",
      aboutMe: "Over Mij",
      skills: "Vaardigheden",
      skill: "Vaardigheid",
      projects: "Projecten",
      contact: "Contact",
      proj: "Projecten",
      hi: "Hallo, ik ben Sami Ouakli!",
      introText: `Ik ben een recent afgestudeerde in de informatica, gespecialiseerd in ontwikkeling en programmering, en volg momenteel een master in data science. Mijn academische achtergrond combineert een sterke basis in softwareontwikkeling met geavanceerde analytische technieken, waardoor ik complexe uitdagingen kan aangaan in data-gedreven vakgebieden.`,
      footerText: "© Sami Ouakli. Alle rechten voorbehouden.",
      Certificat:"Certificaat van Prestatie",
      footer_A: "Over mij",
    footer_S: "Vaardigheden",
    footer_C: "Contacten",
    footer_P:"Projecten",
    },
  
        amz:{
            "aboutMe": "Ɣef-i",
            "skills": "Tizemrin",
            "projects": "Isenfaren",
            "contact": "Ttawil",
            "skill": "Isem",
            "proj": "Iɣermu",
            "hi": "Azul fell-ak, nekk d Sami Ouakli!",
            "introText": "Ssawḍeɣ seg melmi kan ad sɛuɣ lbak deg tussna n usselkim, s tmussni deg usnefli d usseḍru, yerna ttkemmileɣ, ass-a, lbak deg tussna n yisefka. Tagnit-inu tesdukkel tazmert ijehden n usnefli n tesnatwilt (technologiques analytiques) igerrzen, d ayen ay iyi-yesbedden mliḥ akken ad ssiwḍeɣ ad ssiwḍeɣ ɣer wuguren ixuṣṣen deg yiḥricen aydeg ttwaḍemnen yisefka. Nekk ttnadiɣ s lǧehd ɣef tegnit n uxeddim anda ara sqedceɣ tamussni-inu n usnefli (programmation) d tmussni-inu n tussna n yisefka akken ad ttekkeyɣ deg yisenfaren yesɛan azal ameqran. S tmuɣli n ulmud ikemlen d tmuɣli n tifrat n wuguren s usnulfu, ttḥulfuɣ s lferḥ imi ay d-awiɣ tizemmar-inu titekniyin d lḥir-inu ɣer yiwet n terbaɛt yesɛan tamuɣli.",
            "footerText": "© 2024 Sami Ouakli. Imeḍwan s umekkan."
        },
        ar:{
            "aboutMe": "نبذة عني",
            "skills": "المهارات",
            "projects": "المشاريع",
            "contact": "اتصال",
            "skill": "مهارة",
            "proj": "مشاريع",
            "hi": "مرحباً، أنا سامي وكلي!",
            "introText": "أنا خريج حديث بشهادة بكالوريوس في علوم الكمبيوتر، متخصص في التطوير والبرمجة، وأنا حالياً أتابع دراسة الماجستير في علوم البيانات. تجمع خلفيتي بين أساس قوي في تطوير البرمجيات وتقنيات تحليلية متقدمة، مما يؤهلني جيداً لمواجهة التحديات المعقدة في المجالات المعتمدة على البيانات. أنا أبحث بنشاط عن فرص عمل حيث يمكنني استخدام مهاراتي في البرمجة ومعرفتي في علوم البيانات للمساهمة في مشاريع مؤثرة. مع التزامي بالتعلم المستمر وشغفي لحل المشكلات بشكل مبتكر، أنا متحمس لإحضار مهاراتي الفنية وحماسي إلى فريق مستقبلي.",
            "footerText": "© 2024 سامي أوكلي. جميع الحقوق محفوظة."
        },
      
        
    };
// version fr et en :

    function translatePage() {
        const language = document.getElementById("language").value;
        document.getElementById("about-link").textContent = translations[language].aboutMe;
        
        document.getElementById("skills-link").textContent = translations[language].skills;
        document.getElementById("compet").textContent = translations[language].skills;
        document.getElementById("proj").textContent = translations[language].proj;
        document.getElementById("projects-link").textContent = translations[language].projects;
        // document.getElementById("contact-link").textContent = translations[language].contact;
        document.getElementById("hello").textContent = translations[language].hi;
        document.getElementById("intro").textContent = translations[language].introText;
        document.getElementById("footer-text").textContent = translations[language].footerText;
        document.getElementById("Front").textContent = translations[language].Front;
        document.getElementById("Back").textContent = translations[language].Back;
        document.getElementById("Si").textContent = translations[language].Si;
        document.getElementById("Ad").textContent = translations[language].Ad;
        document.getElementById("Pr").textContent = translations[language].Pr;
        document.getElementById("Co").textContent = translations[language].Co;

      // project 
      document.getElementById("P1").textContent = translations[language].P1;
      document.getElementById("P1_1").textContent = translations[language].P1_1;
      document.getElementById("P1_2").textContent = translations[language].P1_2;
      document.getElementById("P1_3").textContent = translations[language].P1_3;

      document.getElementById("P2").textContent = translations[language].P2;
      document.getElementById("P2_1").textContent = translations[language].P2_1;
      document.getElementById("P2_2").textContent = translations[language].P2_2;
      document.getElementById("P2_3").textContent = translations[language].P2_3;

      document.getElementById("P3").textContent = translations[language].P3;
      document.getElementById("P3_1").textContent = translations[language].P3_1;
      document.getElementById("P3_2").textContent = translations[language].P3_2;
      document.getElementById("P3_3").textContent = translations[language].P3_3;

      // Certificat
      document.getElementById("Certificat").textContent = translations[language].Certificat;
      document.getElementById("footer_A").textContent = translations[language].footer_A;
      document.getElementById("footer_C").textContent = translations[language].footer_C;
      document.getElementById("footer_P").textContent = translations[language].footer_P;
      document.getElementById("footer_S").textContent = translations[language].footer_S;




       
    }

//pdf 
function showCertificat(bool,id){
   
const button = document.getElementById(id);

// Récupérer l'image
const img = button.querySelector("img");


const imgSrc = img.src;


const newImg = document.createElement("img");
newImg.src = imgSrc;
newImg.alt = "Certificat";


const imageContainer = document.getElementById("imageContainer");
imageContainer.innerHTML = ""; 
imageContainer.appendChild(newImg); 
if(id!=='btn3'){
 
  if (window.innerWidth <= 600) {
    newImg.style.width='100%';
  newImg.style.marginTop='10%';}
  else if (window.innerWidth > 600 &&  (window.innerWidth <= 1080)){
    newImg.style.width='60%';
    newImg.style.marginTop='1%';
  }
  else{
    newImg.style.width='60%';
    newImg.style.marginTop='1%';
  }

  

}else{

  if (window.innerWidth <= 700) {
    newImg.style.width='100%';
  newImg.style.marginTop='10%';}
  else if (window.innerWidth > 700 &&  (window.innerWidth <= 1080)){
    newImg.style.width='45%';
  newImg.style.marginTop='2.5%';
  newImg.style.marginBottom='1%';
  }
  else{
    newImg.style.width='45%';
  newImg.style.marginTop='2.5%';
  newImg.style.marginBottom='1%';
  }
 

}



   
      document.getElementById('cert').style.visibility = 'visible'
  if(bool==false){
    document.getElementById('cert').style.visibility = 'hidden'
  }
      
    
  
  }
  function showCertificats(bool){
    document.getElementById('cert').style.visibility = 'visible'
    if(bool==false){
      document.getElementById('cert').style.visibility = 'hidden'
    }
  }

  