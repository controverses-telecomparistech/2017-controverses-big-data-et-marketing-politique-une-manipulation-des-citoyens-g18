var matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,3,0,0,0,0,0,0,0,0,0,0],
  [0, 0, 0, 0, 1, 3, 0, 1, 0, 0, 0, 0, 0, 1,0,0,0,1,0,2,3,0,0,3,0,0,1,0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0,0,0,0,0,0,0,0,0,2,0,0,0,2,2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,3,3],
  [0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,2,2,3,2,1,1,1,0,0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,2,2,3,2,1,0,0,1,1],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,2,2,3,2,1,0,0,1,1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,2,2,3,2,1,0,0,0,0],
  [0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,2,2,3,0,3,0,0,3,3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
  [0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0,2,0,2,2,0,0,0,0,0,0,0,0,2,2],
  [0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0,2,0,2,2,0,0,0,0,0,0,0,0,2,2],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0,3,0,3,3,0,0,0,0,0,0,0,0,3,3],
  [0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0,2,0,2,0,0,0,0,0,0,0,0,0,0,2],
  [0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,1,0,1,3,0,0,0,0,0,0,0,0,1,1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1, 0, 1, 0, 0, 2, 3, 0, 0, 0, 0, 0, 1, 0,1,0,0,3,1,2,2,3,0,0,1,1,0,0],
  [1, 0, 0, 0, 0, 2, 3, 0, 0, 1, 0, 0, 1, 0,1,0,0,3,0,2,2,3,2,0,1,1,0,0],
];

var labels = ["Par","INSEE", "CNIL", "CE", "Ex","Ico","IPSOS", "GAFA", "EAP", "CA","Cat","Ar","NB","Cev", "BL", "TDT", "NGP","LMP","FV","LM","LF","AT","TE","LIB","LQ","MM","CPF","CPA"];
var labels1 = ["Parlement","INSEE", "CNIL","CEPD","Exécutif","Ico", "IPSOS", "GAFA", "Entreprises d'analyse publicitaire (ComScore, Nielsen)", "Cambridge analytica","Catalist","Aristotle","Nation Builder","Cevipof", "Blue labs", "The Data Trust", "NGP VAN","Liegey-Muller-Pons","FEDERA VOX","Le Monde","Le Figaro","Atlantico","The Economist","Libération","La Quadrature du net","Mr Mondialisation","Candidats présidentiels français","Candidats présidentiels américains"];
var cats = ["Politique","Politique", "Politique","Politique","Politique","Politique","Entreprise", "Entreprise", "Entreprise", "Entreprise","Entreprise","Entreprise", "Entreprise","Ecole", "Société", "Société", "Société", "Société","Société","Journal","Journal","Journal","Journal","Journal","Association","Forum","Candidats","Candidats"];
var colorCats = {"Politique" : "#dfde26", "Entreprise" : "#58c649","Journal":"#0606e0","Ecole":"#1bf6ff","Société":"#C71585","Forum":"#9370DB","Association":"#8B4513","Candidats":"#ffa500"};
//colorCats = {"constructeur" : "#48926d", "equipementier" : "#429941", "etat" : "#28827d", "usager" : "#0269d6", "ong" : "#39914f", "media" : "#0974bf", "chercheur" : "#54b02a"};
var colors = [];
for(var i = 0; i < labels1.length; i++)
  colors[i] = colorCats[cats[i]];

$(".legend").find("li").each(function() {
  var lgspan = $(this).find("span").first();
  lgspan.css("background-color", colorCats[lgspan.attr("class")]);
});

var content = [[0], [1], [2], [3],[4],[5], [6], [7], [8], [9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[27]];

var contentText = [["Parlement", "Selon la Constitution, le Parlement français exerce une grande partie du pouvoir législatif et peut contrôler l’activité gouvernementale. Il est bicaméral, c'est-à-dire composé de deux chambres :  le Sénat et l'Assemblée Nationale.Présent au cœur du pouvoir législatif, le parlement a la possibilité d'adopter, proposer ou abroger une loi. Ainsi, fixant les règles régissant l'accès et le traitement de nos données, il se place également comme étant un acteur de premier plan.Pendant que le président de la République défend l'intérêt de la nation, le parlement défend celui du peuple. Selon le contexte, et la loi dont il est question, il n'adopte pas toujours la même position en matière de protection des données privées."],
                ["INSEE"," L’Institut national de la statistique et des études économiques (Insee) est chargé de la production, de l'analyse et de la publication des statistiques officielles en France : comptabilité nationale annuelle et trimestrielle, évaluation de la démographie nationale, du taux de chômage,etc. Il constitue une direction générale du ministère chargé des finances. Il dispose d’une indépendance de fait vis-à-vis du gouvernement, désormais garantie en droit par la loi1. Depuis mars 2012, son directeur est Jean-Luc Tavernier"],
                ["CNIL", "La Commission nationale de l'informatique et des libertés (CNIL) de France est une autorité administrative indépendante française. La CNIL est chargée de veiller à ce que l’informatique soit au service du citoyen et qu’elle ne porte atteinte ni à l’identité humaine, ni aux droits de l’Homme, ni à la vie privée, ni aux libertés individuelles ou publiques.Cette autorité est l'acteur principal en matière de protection des données en France. Et pour cause :<br>a) Elle est consultée sur tout projet de loi relatifs à la protection des données à caractère personnel ou au traitement de telles données<br>b) Elle peut être associée, à la demande du Premier ministre, à la définition de la position française dans les négociations internationales dans le domaine de la protection des données à caractère personnel. "],
                ["CEPD", "Le Contrôleur européen de la protection des données (CEPD) est une autorité de contrôle indépendante qui a pour mission première d’assurer que les institutions et organes européens respectent le droit à la vie privée et à la protection des données lorsqu’ils traitent des données à caractère personnel et élaborent de nouvelles politiques.Malgré son statut d'organisme de protection des données auprès de l'Union européenne, cette autorité apparaît comme un acteur de second rôle dans cette controverse. En effet, celle-ci ne peut ni légiférer ni attribuer de sanctions à quelconque organisme. Néanmoins elle gère les plaintes, mène des enquêtes et conseille le parlement européen en matière de loi sur le traitement des données."],
                ["Exécutif", "Il désigne le pouvoir chargé d'exécuter les lois, de définir les règles nécessaires à leur application et de gérer les affaires courantes de l'Etat. Avec le pouvoir législatif et le pouvoir judiciaire, il est l'un des trois pouvoirs constituant un Etat.L'intérêt du pouvoir exécutif est double :<br> Il doit à la fois garantir la sécurité de la Nation et préserver la liberté du peuple à disposer de ces données comme il l'entend. Et pour cause, nous le voyons à travers la proposition de ces deux lois citées ci-dessus. Même si elles ne sont pas forcément contradictoire, l'une dérégule l'accès aux données des individus tandis que la deuxième garantit un cadre respectueux de la vie privée."],
                ["Ico","L'Information Commissioner's Office est un organisme public non ministériel au Royaume-Uni, qui rend compte directement au Parlement et est financé par le Ministère de la Justice. C'est un bureau de régulation chargé du Data Protection Act de 1998, des Privacy and Electronic Communications Regulations mis en place en 2003 au Royaume-Uni et du Freedom of Information Act (2000)."],
                ["IPSOS", "Ipsos est une entreprise de sondages français et une société internationale de marketing d’opinion.Son rôle est de réaliser des :<br>-Études sur les médias et l'expression des marques (Ipsos Connect)<br>-Recherche marketing (Ipsos Marketing)<br>-Opinion et recherche sociale, recueil et traitement des données sur mobile, internet, face à face (Operations).<br>Ipsos est un acteur clé du marketing politique notamment parce qu'il produit ces sondages dont on entend beaucoup parler pendant les élections présidentielles. Ainsi, il se trouve au cœur de notre controverse. Ceci dit, cette place centrale ne lui garantit pas un poids important dans le débat sur le traitement des données en matière de politique."],
                ["GAFA", "GAFA (Google Apple Facebook Amazon) est l'expression utilisé pour désigner les géants du Web. A elles seules, ces quatre entreprises génèrent un chiffre d'affaire de 1 675 milliards de dollars. En tant qu'entreprises détenant un nombre record d'utilisateurs, elles sont une véritable mine de données qu'elles commercialisent. Parmi tous les acteurs cités, les GAFA sont incontestablement les plus importants de tous. Bénéficiant d'une puissance économique et d'une présence à l'échelle mondiale, ces entreprises détiennent des téraoctets de données sur leurs consommateurs. Ainsi, elle peut soit satisfaire son utilisateur en assurant la confidentialité de ses données ou commercialiser celles-ci à des fins économiques."],
                ["Entreprises d'analyse publicitaire (ComScore, Nielsen).", "Elles collectent des données des décodeurs TV numérique et les vendent."],
                ["Cambridge analytica", "C’est une boite de conseil et stratégie politique qui modélise la personnalité des électeurs pour mieux les cibler. Cambridge Analytica est sans aucun doute le « Data Brokers » qui a fait le plus parler de lui, son rôle au sein de la campagne de Donald Trump et du Brexit en fait un des acteurs les plus observés. La loi aux USA est bien plus souple en matière de protection des données, par conséquent aucune opposition majeure ne s’est opposée aux actions de CA. Mis à part le fait que Donald Trump est resté très discret sur son emploi du Big Data contrairement à Hillary Clinton"],
                ["Catalist", "Base de données du parti Démocrate. On y trouve une agrégation des données récoltées par les candidats démocrates au niveau National"], 
                ["Aristotle", "Boite de conseil et stratégie politique qui fourni des logiciels et de riches bases de données pour les campagnes électorales."],
                ["Nation Builder","Nation Builder est un entreprise Américaine fondée en 2009. Sa plateforme est développée pour organiser des campagnes électorales elle permet de gérer des données et de planifier une stratégie d’action. Elle a participé à la campagne de Donald Trump mais aussi à celle de la présidentielle 2017 (et aux primaires de la droite). Ses clients sont : Nicolas Sarkozy , Alain Juppé, Nathalie Kosciusko-Morizet, Bruno Le Maire, Jean-Luc Mélenchon François Fillon ou encore Jacques Cheminade.Grand favori de la présidentielle française en 2017, Nation Builder semble s’être imposé comme un acteur majeur parmi les data brokers depuis sa contribution à l’élection de Donald Trump"],
                ["Cevipof", "Le Centre de recherches politiques de Sciences Po (l'acronyme vient de l'ancien nom : Centre d'études de la vie politique française) est une unité mixte de recherche sous la tutelle de Sciences Po Paris et du CNRS. Son rôle est d'analyser les grands courants politiques, ainsi que les facteurs qui contribuent à orienter les comportements et les attitudes politiques de nos concitoyens.Grâce à son équipe d'ingénieur techniciens, Cevipof produit également des enquêtes d'opinions au même titre qu' Ipsos. Par conséquent, ce centre de recherche se retrouve aussi au cœur de la thématique du marketing politique. En plus de produire des chiffres présentant des tendances, le Cevipof analyse et interprète ces chiffres dans des rapport tandis que Ipsos se contente de publier les siens."],
                ["Blue labs", "C’est une société de conseil en stratégie politique fondée par des anciens de l'équipe statistique et big data d'Obama ; elle offre des solutions basées sur l'usage des données pour la gestion d'une campagne et pour la mobilisation d'électeurs."],
                ["The Data Trust", "Société privée étroitement rattachée au parti Républicain américain qui développe une base de données d'électeurs républicains."],
                ["NGP VAN", "Société privée associée au parti Démocrate américain et qui fournit des logiciels de gestion de campagne et de développement de base de données."],
                ["Liegey-Muller-Pons","Start-up lancée en 2013 par trois français. Elle est spécialisé dans l’analyse des données pour les campagnes électorales (agrégation de données pour la prévision des comportements) . Les trois français sont engagés par Jean-Paul Huchons pour les régionales d’Ile de France puis par François Hollande pour la présidentielle de 2012. C’est leur algorithme « 50+1 » qui est utilisé par l’équipe d’Emmanuel Macron pour sa campagne présidentielle.Cet acteur doit sa célébrité à la campagne (et victoire) d’Emmanuel Macron en 2017. LMP déclare doubler son chiffre d’affaire chaque année depuis 2013 et prévoit de lever 5 millions d’euros pour se developer en Europe .Parmi ses clients : Air bnb,Engie,la CFDT, les Verts allemands, le PSOE espagnol, le député italien Corrado Passera."],
                ["FEDERA VOX","Federavox est une start-up de stratégie électorale fondée par une élue, un spécialiste des méthodes de campagne américaines et un manager dans les médias"],
                
                ["Le Monde","Journal Français payant le plus lu en france, fondé en 1944. Sa ligne éditoriale est centre-gauche. Il est souvent cité comme un quotidien de « référence ». A partir de 2012 ( deuxième victoire d’Obama) le journal commence à écrire de nombreux articles sur le big data en général mais également sur son emploi en politique. L’importance du quotidien le Monde en tant que journal très prisé des français en fait un acteur important vis à vis de son rôle auprès de l’opinion publique."],
                ["Le Figaro","Le Figaro est un quotidien français fondé en 1826 sous le règne de Charles X. Il est à ce titre le plus ancien quotidien de la presse française encore publié. Il a été nommé d'après Figaro, le personnage de Beaumarchais, dont il met en exergue la réplique :« Sans la liberté de blâmer, il n'est point d'éloge flatteur. »<br>Sa ligne éditoriale est de droite gaulliste, libérale et conservatrice, selon le spectre politique français habituellement utilisé, et réunit une majorité de lecteurs de droite . Le Figaro est, depuis 2004, la propriété de l'industriel et sénateur Serge Dassault via la Société du Figaro et Dassault media. Comme de nombreux titres de la presse écrite, il bénéficie de subventions de la part de l'État français."],
                ["Atlantico","Site d’information Français fondé le 28 février 2011, ligne éditorialiste de droite. Revenus basés sur des subventions via contrats publicitaires. En 2012 peu après l’élection de Barack Obama pour son deuxième mandat le site s’intéresse à la transformation opérée par le big data dans l’économie mais également la politique. Avec une augmentation de 1 millions à 4 millions de visiteurs uniques par mois entre 2011 et 2015. Altantico s’est hissé à la 39eme place des sites les mieux référencé sur google news."],
                ["The Economist ","Magazine hebdomadaire anglais fondé en 1843. Sa ligne éditoriale defend une vision libérale classique à la fois en politique, en économie ou sur les questions de société. Réputé pour son « optimisme » vis à vis de la technologie.Le Journal a consacré de nombreux articles sur le role du big data dans les élections notamment américaines, après avoir salué l’importance du big data dans la campagne de barack obama en 2008 et 2012, défendu le big data lorsqu’il fut abondamment critiqué en 2014 par nombre de journaux tel le times ou le new-york times, le magazine s’est finalement interrogé sur les limites du big data au regard de la défaite d’Hillary Clinton (dont la campagne fut la plus « data-driven » de l’histoire ) .Souvent cité comme le quotidien le plus influent au monde, les 1 500 000 tirages de The Economist ainsi que le nombre important de visites sur la version en ligne en font un incontournable. Il est également salué pour la qualité de ses analyses. la plupart de ses lecteurs déclarent un revenu supérieur à 200 000 dollars."],
                ["Libération","Libération est un quotidien français paraissant le matin, disponible également dans une version en ligne.Fondé sous l'égide de Jean-Paul Sartre, le journal paraît pour la première fois le 18 avril 1973 et reprend le nom d'un titre de presse similaire créé en 1927 par le libertaire Jules Vignes, nom qui sera également celui d'un des journaux de la Résistance dirigé par Emmanuel d'Astier de La Vigerie.Situé à l'extrême gauche à ses débuts, Libération évolue vers la gauche sociale-démocrate à la fin des années 1970 après la démission de Jean-Paul Sartre en 1974. En 1978, le journal n'a déjà plus rien de maoïste : Serge July le décrit alors comme « libéral-libertaire ». Aujourd'hui, sa ligne éditoriale est toujours de centre gauche ou de gauche sociale-démocrate, selon l'échiquier politique français habituellement utilisé, et son lectorat est majoritairement de gauche"],
                ["La Quadrature du net","La Quadrature du Net est une association de défense des droits et libertés des citoyens sur Internet. Elle promeut une adaptation de la législation française et européenne qui soit fidèle aux valeurs qui ont présidé au développement d'Internet, notamment la libre circulation de la connaissance.À ce titre, La Quadrature du Net intervient notamment dans les débats concernant la liberté d'expression, le droit d'auteur, la régulation du secteur des télécommunications ou encore le respect de la vie privée."],
                ["Mr Mondialisation","Mr Mondialisation est un think tank informel et citoyen francophone à visée internationale. Son objectif principal est d’alimenter le débat libre dans la sphère publique autour des grands sujets mondiaux et locaux de notre temps."],
                ["Candidats présidentiels français","les hommes et les femmes politiques font de plus en plus appelle à des entreprises de Big Data spécialisées dans la stratégie électorale. Celles-ci vont utiliser les données des citoyens pour établir leurs profils puis identifier leurs besoins. En réaction à ces derniers, un projet est construit pour répondre à une sorte de demande. Il ne s’agit plus alors de politique où le projet est censé transcender la réalité mais plutôt de marketing où le citoyen est vu comme un client potentiel éprouvant un besoin. Celui-ci crée une demande à laquelle réagissent les candidats à travers une offre politique officiellement appelé programme. Cette façon de mener une campagne a donné naissance à la notion « d’homme politique sismographe ». En effet, en réaction à des signaux « émis » par le citoyen, l’homme politique construit un projet. Par ailleurs, identifier les besoins de chaque citoyen ne sert pas qu’à ça. En effet, cela permet également d’optimiser les campagnes. Autrement dit, les déploiements de publicités se fait de manière précise : à chaque profil est adressé une publicité en raccord avec ses besoins. De la même manière, les investissements électoraux se concentrent dans les zones où l’électorat est le plus réduit. Ainsi est née le marketing politique."],
                ["Candidats présidentiels américains","les hommes et les femmes politiques font de plus en plus appelle à des entreprises de Big Data spécialisées dans la stratégie électorale. Celles-ci vont utiliser les données des citoyens pour établir leurs profils puis identifier leurs besoins. En réaction à ces derniers, un projet est construit pour répondre à une sorte de demande. Il ne s’agit plus alors de politique où le projet est censé transcender la réalité mais plutôt de marketing où le citoyen est vu comme un client potentiel éprouvant un besoin. Celui-ci crée une demande à laquelle réagissent les candidats à travers une offre politique officiellement appelé programme. Cette façon de mener une campagne a donné naissance à la notion « d’homme politique sismographe ». En effet, en réaction à des signaux « émis » par le citoyen, l’homme politique construit un projet. Par ailleurs, identifier les besoins de chaque citoyen ne sert pas qu’à ça. En effet, cela permet également d’optimiser les campagnes. Autrement dit, les déploiements de publicités se fait de manière précise : à chaque profil est adressé une publicité en raccord avec ses besoins. De la même manière, les investissements électoraux se concentrent dans les zones où l’électorat est le plus réduit. Ainsi est née le marketing politique."]]

var chord = d3.layout.chord()
    .padding(.05)
    .sortSubgroups(d3.descending)
    .matrix(matrix);

var dim = Math.min($(window).width() / 2, $(window).height()) - 10;
var margX = ($(window).width() / 2 > $(window).height()) ? ($(window).width()/2 - $(window).height()) / 2 : 0;
var margY = ($(window).width() / 2 < $(window).height()) ? ($(window).height() - $(window).width()/2) / 2 : 0;

var width = dim,
    height = dim,
    innerRadius = dim * .4,
    outerRadius = innerRadius * 1.1;

var fill = d3.scale.ordinal()
    .domain(d3.range(4))
    .range(colors);

var svg = d3.select("body").append("svg")
    .attr("width", $(window).width() / 2)
    .attr("height", $(window).height() - 10)
  .append("g")
    .attr("transform", "translate(" + (dim / 2 + margX) + "," + (dim / 2 + margY) + ")");

var bg = [{ "x_axis": 0, "y_axis": 0, "radius": innerRadius, "color" : "#EEEEEE" }];
var circle = svg.selectAll("circle")
    .data(bg)
  .enter().append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", innerRadius)
    .style("fill", "#333");

svg.append("g").selectAll("path")
    .data(chord.groups)
  .enter().append("path")
    .style("fill", function(d) { return fill(d.index); })
    .style("stroke", function(d) { return fill(d.index); })
    .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1));

svg.append("g").append('defs')
    .append('path')
    .attr({
      d: "M10 50 C10 0 90 0 90 50",
      id: "textPath"
    });

var ticks = svg.append("g").selectAll("g")
    .data(chord.groups)
  .enter().append("g").selectAll("g")
    .data(groupTicks)
  .enter().append("g")
    .attr("transform", function(d) {
      return "rotate(" + ((d.angle - Math.PI/2)*180/Math.PI) + ")"
          + "translate(" + outerRadius + ",0)";
    });

ticks.append("text")
    .attr("dy", "-10")
    .style("fill", "#EEEEEE")
    .text(function(d) { return d.label; })
    .attr("class", "labelTxt")

svg.append("g")
    .attr("class", "chord")
  .selectAll("path")
    .data(chord.chords)
  .enter().append("path")
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("fill", function(d) { return getColor(d); })
    .style("opacity", 1)
    .on("mouseover", chordFade(.1))
    .on("mouseout", chordFade(1));

// mix rgb
function getColor(d)
{
  var r, g, b;

  r =  parseInt(fill(d.target.index).substr(1, 2), 16) ;
  g =  parseInt(fill(d.target.index).substr(3, 2), 16);
  b = parseInt(fill(d.source.index).substr(5, 2), 16) * 1.0 / 2 + parseInt(fill(d.target.index).substr(5, 2), 16) * 1.0 / 2;
  return("#" + Math.floor(r).toString(16) + Math.floor(g).toString(16) + Math.floor(b).toString(16));
}
/*
//mix hsv
function getColor(d)
{
  var r1, g1, b1;
  var r2, g2, b2;
  r1 = parseInt(fill(d.source.index).substr(1, 2), 16);
  g1 = parseInt(fill(d.source.index).substr(3, 2), 16);
  b1 = parseInt(fill(d.source.index).substr(5, 2), 16);
  r2 = parseInt(fill(d.target.index).substr(1, 2), 16);
  g2 = parseInt(fill(d.target.index).substr(3, 2), 16);
  b2 = parseInt(fill(d.target.index).substr(5, 2), 16);
  var hsv1 = rgb2hsv(r1, g1, b1);
  var hsv2 = rgb2hsv(r2, g2, b2);
  return(hsv2rgb((hsv1[0] + hsv2[0])/2, (hsv1[1] + hsv2[1])/2, (hsv1[2] + hsv2[2])/2));
}

function rgb2hsv (r, g, b) {
 var computedH = 0;
 var computedS = 0;
 var computedV = 0;

 //remove spaces from input RGB values, convert to int
 var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
 var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
 var b = parseInt( (''+b).replace(/\s/g,''),10 ); 

 if ( r==null || g==null || b==null ||
     isNaN(r) || isNaN(g)|| isNaN(b) ) {
   alert ('Please enter numeric RGB values!');
   return;
 }
 if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
   alert ('RGB values must be in the range 0 to 255.');
   return;
 }
 r=r/255; g=g/255; b=b/255;
 var minRGB = Math.min(r,Math.min(g,b));
 var maxRGB = Math.max(r,Math.max(g,b));

 // Black-gray-white
 if (minRGB==maxRGB) {
  computedV = minRGB;
  return [0,0,computedV];
 }

 // Colors other than black-gray-white:
 var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
 var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
 computedH = 60*(h - d/(maxRGB - minRGB));
 computedS = (maxRGB - minRGB)/maxRGB;
 computedV = maxRGB;
 return [computedH,computedS,computedV];
}

function hsv2rgb(h, s, v)
{
  var rgb, i, data = [];
  if (s === 0) {
    rgb = [v,v,v];
  } else {
    h = h / 60;
    i = Math.floor(h);
    data = [v*(1-s), v*(1-s*(h-i)), v*(1-s*(1-(h-i)))];
    switch(i) {
      case 0:
        rgb = [v, data[2], data[0]];break;
      case 1:
        rgb = [data[1], v, data[0]];break;
      case 2:
        rgb = [data[0], v, data[2]];break;
      case 3:
        rgb = [data[0], data[1], v];break;
      case 4:
        rgb = [data[2], data[0], v];break;
      default:
        rgb = [v, data[0], data[1]];break;
    }
  }
  return '#' + rgb.map(function(x){ 
    return ("0" + Math.round(x*255).toString(16)).slice(-2);
  }).join('');
}*/

// Returns an array of tick angles and labels, given a group.
function groupTicks(d) {
  return d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: (d.endAngle + d.startAngle) / 2,
      label: labels[d.index]
    };
  });
}

// Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(g, i) {
    svg.selectAll(".chord path")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
        .style("opacity", opacity);
      var desc = "";
      for (var i = 0; i < content[g.index].length; i++)
      {
        /*desc += "<div class=\"title\">";
        desc += contentText[content[g.index][i]][0];
        desc += "</div>";*/
        desc += contentText[content[g.index][i]][1];
      }
      $(".box").children(".title").text(labels1[g.index]);
      $(".box").children(".desc").html(desc);
  };
}

// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!

function chordFade(time){
  return function(d, i) {
    var thisD = d;
    //console.log(d.source.index + " - " + d.target.index);
    svg.selectAll(".chord path")
        .filter(function(d) { return(thisD != d); })
      .transition()
        .style("opacity", time);
      /*var desc = "";
      for (var i = 0; i < content[g.index].length; i++)
      {
        desc += "<div class=\"title\">";
        desc += contentText[content[g.index][i]][0];
        desc += "</div>";
        desc += contentText[content[g.index][i]][1];
      }
      $(".box").children(".title").text(labels[g.index]);
      $(".box").children(".desc").html(desc);*/
  };
}

// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!

$(document).ready(function(){
  var idx = 0;
  $(".labelTxt").each(function(){$(this).attr("transform", "rotate(" + 90 + ")translate(-" + ($(this).width()/2) + ")");$(this).css("fill", colorCats[cats[idx]]);idx++});

});
