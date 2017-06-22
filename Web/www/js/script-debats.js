// load the mindmap
$(document).ready(function() {
  // enable the mindmap in the body
  $('body').mindmap();

  // add the data to the mindmap
  var root = $('body>ul>li').get(0).mynode = $('body').addRootNode($('body>ul>li>a').text(), {
    href:'/',
    url:'/',
    onclick:function(node) {
      onNodeClick(node);
    	$(node.obj.activeNode.content).each(function() {
    		this.hide();
    	});
    }
  });
  $('body>ul>li').hide();
  var addLI = function() {
    var parentnode = $(this).parents('li').get(0);
    if (typeof(parentnode)=='undefined') parentnode=root;
      else parentnode=parentnode.mynode;

    this.mynode = $('body').addNode(parentnode, $('a:eq(0)',this).text(), {
      href:$('a:eq(0)',this).attr('href'),
      onclick:function(node) {
        onNodeClick(node);
        $(node.obj.activeNode.content).each(function() {
          this.hide();
        });
        $(node.content).each(function() {
          this.show();
        });
      }
    });
    $(this).hide();
    $('>ul>li', this).each(addLI);
  };
  $('body>ul>li>ul').each(function() {
    $('>li', this).each(addLI);
  });
  // background colors
  $('a[href="/"]').addClass("color0");
  $('a[href="01"]').addClass("color01");
  for (var i = 1; i < 5; i++)
    $('a[href="' + i + '"]').addClass("color1");
  $('a[href="02"]').addClass("color02");
  for (var i = 5; i < 9; i++)
    $('a[href="' + i + '"]').addClass("color2");
  $('a[href="03"]').addClass("color03");
  for (var i = 9; i < 12; i++)
    $('a[href="' + i + '"]').addClass("color3");

});

titles = ["Vente des données", "Exploitation des données", "Transparence", "Vie privée", "Démocratie",
    "Représentatifs", "Exploitation", "Manipulation",
    "Efficacité","Fiabilité", "Influence sur les résultats"];
content = ["Les bases de données ont-elles droits de vendre les données à des particuliers ?Confidentialité et Condition de vente et d’achat des données personnelles?",
    "L’exploitation des données  n’est-elle pas une violation de la vie privée ?<br>Most of the data we had was from data that we collected either from interacting with people, which might mean either we called someone, someone donated money to us, or if they volunteered, or from voter registration records,” Rayid Ghani - Obama 2012 <br><a href='https://www.dawn.com/news/780327' target='_blank'>Plus d'infos</a>",
    "<html>Les politiques devraient-ils être transparents sur leur utilisation du Big Data et des sociétés de conseils en stratégie ?<br>  “You don’t want your analytical efforts to be obvious because voters get creeped out.” -Campagne Romney 2012 - <html>",
    "Comment Les entreprises du big data à l’usage du marketing politique se positionnent t elles sur la question de la vie privée?Que font elles de la  Vie privée?<br> “We are committed to protecting individual privacy at every turn — adhering to industry best practices on privacy and going above and beyond what’s required by law” Adam Fetcher - Obama 2012 -<br><a href='http://www.nytimes.com/2012/10/14/us/politics/campaigns-mine-personal-lives-to-get-out-vote.html' target='_blank'>Plus d'infos</a> ",
    "L’analyse du Big Data est-elle une menace pour la démocratie?<br> Le micro-targetting permis par le Big Data peut décourager le débat politique. Les candidats ne doivent plus chercher a convaincre en faisant des compromis mais plutots a faire voter ceux qui sont déjà convaincu ou en voie de l'être. ",
    "Les données récoltées réseaux sociaux sont-ils représentatifs d’un pays ?",
    "Comment les Big Data peuvent-elles être exploités au mieux pour aider à l’élection d’un président ?<br> Elles permettent de mettre en place une stratégie de ciblage efficace. Le candidat peut parler avec des mots et des arguments minutieusement choisis à des électeurs identifiés comme indécis mais ayant de forte chance d'être favorable au candidat.",
    "Manipulation des citoyens,manipulation de l’opinion,élécteurs comme produit<br>Data isn't a secret weapon but an enabler of better democracy and more public participation. I see the future use of data as enabling more personalised and relevant interactions with voters, to get them more education about issues, more involved in political discussions, and have them even participate in creating public policies.” Rayid Ghani - Obama 2012 <br><a href='https://www.dawn.com/news/780327' target='_blank'>Plus d'infos</a>",
    "<html>L’analyse du Big Data est-elle efficace ?<br> L'efficacité du micro-targetting en politique n'a pas été rigoureusement établi mais son usage important dans le monde commercial laisse peu de place au doute. Des experts notent qu'il faut tout de meme faire attention aux modeles statistiques utilises pour obtenir des resultats fiables.<br>Based on that, we were able to develop an exact kind of consumer model that corporate America does every day to predict how people vote -- not based on where they live but how they live, he said. 'That was critically important to our success.' -Ken Mehlman- directeur de campagne de George W. Bush <br><a href='http://www.nytimes.com/2004/11/19/politics/bush-campaign-manager-views-the-electoral-divide.html?_r=0' target='_blank'>Plus d'infos</a><html>",
    "Efficacité du ciblage<br>“We can tailor our message to people who care about taxes, who care about health care, who care about jobs, who care about regulation -- we can target that way,'' Ed Gillespie, the Republican National Committee chairman<br>But there is always a danger that the campaign will misfire or that the ads will seem like pandering, Hersh",
    ""]

var displayed = 0;

function onNodeClick(e)
{
	if (e.href != displayed)
		$('a[href="' + displayed + '"]').html("<div class=\"leave\">" + titles[displayed-1] + "</div>");
	if(e.href !== undefined && e.href != "/" && e.href[0] != '0') {
		displayed = e.href;
		$("#" + e.href).children(".text").css("display", "inline");
		$('a[href="' + e.href + '"]').html("<div class=\"leave\"><div class='nodeTitle'>" + titles[e.href-1] + "</div>" + content[e.href-1] + "</div>");
	}
}
