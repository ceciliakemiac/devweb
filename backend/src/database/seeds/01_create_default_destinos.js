const knex = require('knex');

module.exports = {
  async seed(knex) {
    try {
      await knex('destinos').del();

      await knex('destinos').insert([
        {
          descricao: 'Entre todos os planetas terrestres Mercúrio é um extremo: ele é o menor de todos, o mais denso entre eles (após corrigirmos a auto-compressão), aquele com a mais velha superfície, aquele com a maior de todas as variações diárias na temperatura da superfície, e o menos explorado entre eles.',
          nota: 0.0, numNotas: 0, periculosidade: 7.6, distanciaTerra: 0.39, temETs: false, image1: 'mercurio1.jpg', image2: 'mercurio2.png', image3: 'mercurio3.png', image4: 'mercurio4.png', nome: 'Mercúrio', tipo: 1
        },
        {
          descricao: 'Vênus é o segundo planeta a partir do Sol e o quarto menor planeta do Sistema Solar. Somente Mercúrio, Marte, e o anão Plutão são menores do que Vênus. De todos os planetas do Sistema Solar Vênus é o que mais se aproxima da Terra. Durante o seu movimento em torno do Sol, Vênus se aproxima a cerca de 40 milhões de quilômetros do nosso planeta. Vênus sempre chamou a atenção dos povos antigos devido à sua intensa presença no céu. Visto da Terra, Vênus pode superar em brilho todos os corpos celestes com excessão do Sol e da Lua. Deste modo Vênus situa-se como o terceiro objeto mais brilhante no céu. Sua luz fraca é suficiente para, em certas ocasiões, criar sombras de objetos no chão durante a noite. Vênus, quando está no máximo de seu brilho, pode ser visto no céu diurno.',
          nota: 0.0, numNotas: 0, periculosidade: 8.7, distanciaTerra: 0.28, temETs: true, image1: 'venus1.jpg', nome: 'Vênus', tipo: 1
        },
        {
          descricao: 'Antares é uma estrela supergigante vermelha que está chegando ao fim de sua vida. Quando não houver mais combustível para queimar, a estrela entrará em colapso e explodirá em uma supernova - "quando seu brilho rivalizar com o resto da galáxia", observaram os astrofísicos Paul Butterworth e Mike Arida. A estrela está entre as 20 mais brilhantes visíveis no céu noturno da Terra, embora seu brilho varie. Observadores amadores estimaram sua magnitude aparente entre 0,88 e 1,16. Os nomes em árabe e latino da estrela Antares significam "coração do Escorpião". Se você ver esta constelação no céu, descobrirá que Antares realmente parece residir no coração do Escorpião.',
          nota: 0.0, numNotas: 0, periculosidade: 9.7, distanciaTerra: 600.0, temETs: true, image1: 'antares1.jpg', image2: 'antares2.jpg', nome: 'Antares', tipo: 2
        },
        {
          descricao: 'Arcturus é uma estrela gigante vermelha no céu do Hemisfério Norte da Terra e a estrela mais brilhante da constelação de Boötes (o pastor). Arcturus também está entre as estrelas mais brilhantes que podem ser vistas da Terra. Os astrônomos dizem que Arcturus terminará como uma anã branca no final de sua vida. A maneira mais fácil de detectar Arcturus é seguindo a curva do "punho" da Ursa Maior. Hoje, os astrônomos sabem que Arcturus tem muito impacto, apesar de ser apenas cerca de 1,5 vezes a massa do sol. A olho nu, Arcturus parece brilhar cerca de 113 vezes mais que o sol, de acordo com Jim Kaler, professor emérito da Universidade de Illinois em Urbana-Champaign. Arcturus, no entanto, tem uma temperatura mais baixa que o sol, o que significa que grande parte da energia da estrela gigante vermelha é irradiada como calor.',
          nota: 0.0, numNotas: 0, periculosidade: 9.6, distanciaTerra: 36.6, temETs: true, image1: 'arcturus1.jpg', nome: 'Arcturus', tipo: 2
        },
        {
          descricao: 'O Cruzeiro do Sul é uma constelação proeminente no céu do sul. É a menor de todas as 88 constelações. Apesar de seu tamanho, é uma das constelações mais conhecidas no hemisfério sul. É facilmente reconhecível pelo asterismo em forma de cruz, formado por suas cinco estrelas mais brilhantes. A constelação está associada a várias histórias e figura com destaque em diferentes mitologias no hemisfério sul. Ele tem uma importância especial na Austrália e na Nova Zelândia, onde é circumpolar e pode ser visto ao longo do ano. O cruzeiro do sul é uma constelação famosa em muitas culturas. Os gregos antigos consideravam que fazia parte da constelação de Centaurus. Os gregos puderam vê-lo antes que suas estrelas caíssem abaixo do horizonte para a Europa e a maior parte do hemisfério norte. Alguns viram significado nisso, ligando o desaparecimento da cruz celestial do céu à crucificação de Cristo. O astrônomo grego do século 2 Ptolomeu listou as estrelas do cruzeiro do sul como parte da constelação Centaurus em seu Almagest. No ano 400 dC, a constelação não era mais visível na maior parte da Europa e os europeus não a redescobriram até as grandes expedições navais do final do século XV e início do século XVI.',
          nota: 0.0, numNotas: 0, periculosidade: 8.5, distanciaTerra: 88.0, temETs: true, image1: 'cruzeiro-do-sul1.jpg', image2: 'cruzeiro-do-sul2.jpg', image3: 'cruzeiro-do-sul1.jpg', nome: 'Cruzeiro do Sul', tipo: 3
        },
        {
          descricao: 'A galáxia de Andrômeda, o vizinho mais próximo da Via Láctea, é o objeto mais distante no céu que você pode ver a olho nu - mas apenas em uma noite clara de um local com um céu muito escuro. A galáxia é uma espiral bonita, mas um fato que você pode não estar ciente: estamos seguros por alguns bilhões de anos, mas Andrômeda está seguindo nosso caminho e em rota de colisão com a Via Láctea. A galáxia de Andrômeda e nossa Via Láctea reinam como as duas galáxias mais massivas e dominantes do Grupo Local de Galáxias. A Galáxia de Andrômeda é a maior galáxia do Grupo Local, que, além da Via Láctea, também contém a Galáxia Triangulum e cerca de 30 outras galáxias menores.',
          nota: 0.0, numNotas: 0, periculosidade: 9.1, distanciaTerra: 2537000.0, temETs: true, image1: 'andromeda1.jpg', nome: 'Andrômeda', tipo: 4
        },
        {
          descricao: 'O planeta vermelho Marte, nomeado para o deus romano da guerra, há muito tempo é um presságio no céu noturno. E, à sua maneira, a superfície vermelha e enferrujada do planeta conta uma história de destruição. Bilhões de anos atrás, o quarto planeta do Sol poderia ter sido confundido com o gêmeo menor da Terra, com água líquida em sua superfície - e talvez até a vida. Com um raio de 2.106 milhas, Marte é o sétimo maior planeta do nosso sistema solar e cerca de metade do diâmetro da Terra. A gravidade da superfície é de 37,5% da da Terra. Como a Terra e Vênus, Marte tem montanhas, vales e vulcões, mas o planeta vermelho é de longe o maior e mais dramático. O Monte Olimpo, o maior vulcão do sistema solar, se ergue cerca de 26 quilômetros acima da superfície de Marte, tornando-o três vezes mais alto que o Everest. Mas a base do Monte Olimpo é tão larga - a cerca de 60 km de diâmetro - que a inclinação média do vulcão é apenas um pouco mais íngreme do que uma rampa para cadeira de rodas. O pico é tão grande que se curva com a superfície de Marte. Se você estivesse na borda externa do Monte Olimpo, seu cume estaria além do horizonte.',
          nota: 0.0, numNotas: 0, periculosidade: 8.1, distanciaTerra: 0.52, temETs: true, image1: 'marte1.jpg', nome: 'Marte', tipo: 1
        },
        {
          descricao: 'Vega é uma estrela brilhante localizada a apenas 25 anos-luz da Terra, visível no céu de verão do Hemisfério Norte. A estrela faz parte da constelação Lyra e, com as estrelas Deneb e Altair, forma um asterismo conhecido como Triângulo do Verão. A estrela tem apenas cerca de 450 milhões de anos, o que a torna jovem em comparação com o nosso próprio sistema solar (com 4,6 bilhões de anos). Os estudos da Vega ajudam os astrônomos a aprender mais sobre os sistemas solares que estão nos estágios iniciais de sua formação. Como o eixo da Terra oscila, nossa percepção do norte muda gradualmente para diferentes estrelas ao longo de um ciclo de 26.000 anos. Vega era a Estrela do Norte há vários milhares de anos e recuperará esse status em cerca de 12.000 anos.',
          nota: 0.0, numNotas: 0, periculosidade: 9.5, distanciaTerra: 25.0, temETs: true, image1: 'vega1.jpg', nome: 'Vega', tipo: 2
        },
        {
          descricao: 'Júpiter é o quinto planeta a contar do Sol e de longe o maior. Tem mais do dobro da massa de todos os outros planetas juntos (318 vezes a massa da Terra). Júpiter (também conhecido como Jove; o deus Grego era Zeus) era o Rei dos Deuses, o governante do Olimpo e o protector do estado Romano. Zeus era o filho de Cronus (Saturno). Júpiter é o 4.º objecto mais brilhante do céu (depois do Sol, da Lua e de Vénus; por vezes Marte é mais brilhante). É conhecido desde tempos pré-históricos, mas como uma "estrela errante". Mas em 1610, quando Galileu aponta pela primeira vez um telescópio ao céu, observa as 4 grandes luas de Júpiter: Io, Europa, Ganimedes e Calisto (agora conhecidas como as luas Galileanas) e regista os seus movimentos para a frente e para trás do planeta. Os planetas gasosos não têm superfícies sólidas, o seu material gasoso simplesmente fica mais denso de acordo com a profundidade (o raio e os diâmetros dos planetas são para os níveis correspondentes a uma pressão de 1 atmosfera). O que vemos quando olhamos para estes planetas é o topo das nuvens nas suas atmosferas (um pouco acima do nível de uma atmosfera).',
          nota: 0.0, numNotas: 0, periculosidade: 9.3, distanciaTerra: 4.2, temETs: true, image1: 'jupiter1.jpg', image2: 'jupiter2.jpg', nome: 'Júpiter', tipo: 1
        },
        {
          descricao: 'Spica, Alpha Virginis, é a estrela mais brilhante da constelação do sul de Virgem e a 16a estrela mais brilhante do céu. É uma estrela azul subgigante localizada a uma distância de 262 anos-luz da Terra. Spica é realmente um sistema estelar binário próximo. É uma das estrelas binárias maciças mais próximas do sistema solar. O nome Spica (pronunciado / ˈspaɪkə /) vem da frase em latim spīca virginis, que significa "espiga de grão de Virgem". A palavra latina spicum refere-se à espiga de trigo que Virgem segura em sua mão esquerda. Na mitologia grega e romana, a constelação e a estrela estavam associadas a Deméter (Ceres), a deusa da colheita. Spica é brilhante, devido ao seu tamanho e sua relativa proximidade com a Terra. Os componentes do sistema têm um raio de 7,40 e 3,64 vezes o do Sol. Ambas as estrelas são significativamente mais brilhantes que o Sol, com luminosidade total (incluindo radiação ultravioleta) de 12.100 e 1.500 vezes a energia solar. A Spica A e a Spica B pertencem à classe espectral B, que as torna em branco azulado. As estrelas também são muito mais quentes que o Sol, com temperaturas estimadas da superfície de 22.400 K e 18.500 K, em comparação com os 5.800 K. do Sol. Isso faz de Spica uma das estrelas mais quentes de primeira magnitude.',
          nota: 0.0, numNotas: 0, periculosidade: 9.5, distanciaTerra: 262.0, temETs: true, image1: 'spica1.jpg', nome: 'Spica', tipo: 2
        },
        {
          descricao: 'Este colosso é o buraco negro supermassivo que fica no centro da Via Láctea, perto da fronteira das constelações de Sagitário e Escorpião. Seu nome pronuncia-se “Sagitário A Estrela” e faz parte de um objeto ainda maior, chamado "Sagittarius A". Está localizado a 25.640 anos-luz de distância e possui mais de 4 milhões de massas solares.',
          nota: 0.0, numNotas: 0, periculosidade: 9.9, distanciaTerra: 25640.0, temETs: false, image1: 'sagittariusa1.jpg', nome: 'Sagittarius A', tipo: 5
        },
        {
          descricao: 'A estrela Fomalhaut às vezes é chamada de Estrela do Outono pelas pessoas no Hemisfério Norte, mas é uma estrela da primavera ao sul do equador. É famosa na astronomia como a primeira estrela com um exoplaneta visível. Ela aparece em uma parte do céu que está praticamente vazia de estrelas brilhantes. Por esta razão, no skylore, Fomalhaut é freqüentemente chamada de A Solitária. É uma estrela fácil de identificar e que você vai querer conhecer. Fomalhaut faz parte da fraca constelação de Piscis Austrinus, o peixe do sul. É parte de um padrão redondo de estrelas, supostamente a boca aberta do Peixe. Mas não espere ver um peixe nessas estrelas. De acordo com Richard Hinckley Allen, Fomalhaut foi um dos quatro guardiões dos céus para os antigos persas, e recebeu o nome de Hastorang. (Os outros guardiões eram Aldebaran em Touro, Antares em Escorpião e Regulus em Leão.) Allen também diz que Fomalhaut era uma fonte de adoração no templo de Deméter em Elêusis na Grécia antiga. Por volta de 2500 a.C., Fomalhaut ajudou a marcar a localização do solstício de inverno, o que significa que ajudou a definir a localização no céu onde o sol cruzou o meridiano ao meio-dia do primeiro dia de inverno.',
          nota: 0.0, numNotas: 0, periculosidade: 9.6, distanciaTerra: 25.11, temETs: true, image1: 'fomalhaut1.jpg', image2: 'fomalhaut2.jpg', nome: 'Fomalhaut', tipo: 2
        },
        {
          descricao: 'Peixe Austral é uma constelação relativamente pequena e tênue, com apenas uma estrela mais brilhante do que a quarta magnitude e poucos objetos notáveis no céu profundo. A estrela mais brilhante da constelação, Fomalhaut, é também uma das estrelas mais brilhantes do céu noturno. É vista como uma constelação desde os tempos antigos da Babilônia. Os babilônios a conheciam simplesmente como o peixe. Na mitologia grega, era conhecida como o Grande Peixe e era retratada como bebendo a água que estava sendo derramada por Aquário. Os dois peixes da constelação de Peixes eram considerados descendentes do Grande Peixe. Na mitologia egípcia, o peixe salvou a vida da deusa Ísis. Ela mostrou sua gratidão colocando os peixes nos céus como uma constelação.',
          nota: 0.0, numNotas: 0, periculosidade: 9.7, distanciaTerra: 25.11, temETs: true, image1: 'peixe-austral1.jpg', image2: 'peixe-austral2.jpg', nome: 'Peixe Austral', tipo: 3
        },
        {
          descricao: 'Orion é conhecida desde os tempos antigos. Ela representa o caçador mítico Órion, que muitas vezes é descrito em mapas estelares enfrentando o ataque de Touro, o touro, perseguindo as irmãs das Plêiades, representadas pelo famoso aglomerado aberto, ou perseguindo a lebre (constelação de Lepus) com seus dois caçadores cães, representados pelas constelações vizinhas Canis Major e Canis Minor. A constelação de Orion contém duas das dez estrelas mais brilhantes do céu - Rigel (Beta Orionis) e Betelgeuse (Alpha Orionis) - várias nebulosas famosas - a Nebulosa de Orion (Messier 42), a Nebulosa de De Mairan (Messier 43) e a Cabeça de Cavalo Nebulosa, entre outras - o conhecido Cluster Trapézio, e um dos asterismos mais proeminentes no céu noturno - Cinturão de Orion. A maioria dos mitos sobre a morte de Órion envolve um escorpião, mas as histórias variam de um mitógrafo para outro. Em um conto, Orion se gabou para a deusa Artemis e sua mãe Leto que ele poderia matar qualquer animal na terra. A Deusa Terra ouviu e enviou um escorpião, que picou o gigante até a morte. Órion e o escorpião foram colocados em lados opostos do céu, de modo que quando a constelação de Escorpião surge no céu, Órion se põe abaixo do horizonte no oeste, fugindo do escorpião.',
          nota: 0.0, numNotas: 0, periculosidade: 9.5, distanciaTerra: 1344.0, temETs: true, image1: 'orion1.jpg', image2: 'orion2.jpg', nome: 'Órion', tipo: 3
        },
        {
          descricao: 'Saturno é o sexto planeta a partir do Sol e o segundo maior planeta do nosso sistema solar. Adornado com um sistema deslumbrante de anéis de gelo, Saturno é único entre os planetas. Não é o único planeta a ter anéis, mas nenhum é tão espetacular ou complexo como o de Saturno. Como o gigante gasoso Júpiter, Saturno é uma bola enorme feita principalmente de hidrogênio e hélio. Cercado por mais de 60 luas conhecidas, Saturno é o lar de algumas das paisagens mais fascinantes do nosso sistema solar. Dos jatos de água que jorram de Enceladus aos lagos de metano na nebulosa Titã, o sistema de Saturno é uma fonte rica de descobertas científicas e ainda guarda muitos mistérios. O planeta tem o nome do deus romano da agricultura e da riqueza, que também foi o pai de Júpiter. É difícil imaginar, mas Saturno é o único planeta em nosso sistema solar cuja densidade média é menor que a da água. O gigante planeta gasoso poderia flutuar em uma banheira se tal coisa colossal existisse. Saturno é coberto por nuvens que aparecem como listras fracas, correntes de jato e tempestades. O planeta tem muitos tons diferentes de amarelo, marrom e cinza.',
          nota: 0.0, numNotas: 0, periculosidade: 9.8, distanciaTerra: 9.5, temETs: false, image1: 'saturno1.jpg', image2: 'saturno2.jpg', nome: 'Saturno', tipo: 1
        },
        {
          descricao: 'Touro é uma constelação proeminente do norte, situada imediatamente a noroeste de Orion. É mais alto no céu noturno nos meses em torno de dezembro. Dois objetos em Touro se destacam a olho nu: a estrela brilhante Aldebaran, a décima terceira mais brilhante em todo o céu, e o aglomerado de estrelas das Plêiades (M45). As Plêiades são um dos mais brilhantes de todos os aglomerados abertos, visíveis a olho nu como uma mancha. Nos tempos antigos, era conhecida como a "irmã sete", embora apenas seis estrelas fossem realmente visíveis sem auxílio óptico. A associação de Touro com um touro é anterior à mitologia grega, e os sumérios relacionaram o touro com Órion, supondo que o caçador estivesse enfrentando o animal que atacava. Na Grécia, no entanto, Orion foi associado aos dois cães de caça Canis Major e Canis Minor, em busca da lebre Lepus. Em vez disso, de acordo com alguns relatos, Touro talvez representasse Zeus, que assumiu a forma de um touro para raptar Europa. O sol no solstício de junho brilha na frente da constelação de Touro, então Touro nasce e se põe com o sol, e se perde no brilho do sol nesta época do ano. Mas no final do outono, inverno e início da primavera, a constelação de Touro é claramente visível no céu noturno.',
          nota: 0.0, numNotas: 0, periculosidade: 9.5, distanciaTerra: 490.0, temETs: true, image1: 'touro1.jpg', image2: 'touro2.jpg', nome: 'Touro', tipo: 3
        },
        {
          descricao: 'Aldebaran é uma estrela gigante, velha e laranja com uma temperatura superficial de menos de 4.000 Kelvin. Tem cerca de 40 vezes o diâmetro do sol. Aldebaran significa "o seguidor" em árabe já que (visto da Velha Terra) parece seguir as estrelas nas Plêiades. É a 13ª estrela mais brilhante do Sol. Aldebaran é freqüentemente descrita como o olho ardente de Touro. Por ser brilhante e proeminente, Aldebaran foi homenageada como uma das Quatro Estrelas Reais na antiga Pérsia, sendo as outras três Estrelas Reais Regulus, Antares e Fomalhaut. Aldebaran tem cerca de 6,4 bilhões de anos - muito mais velha que o nosso sol. Suas origens são desconhecidas, pois não está associado a nenhum asterismo, estrutura, nuvem ou grupo de estrelas. Aldebaran evoluiu para fora do estágio de sequência principal de sua vida e esgotou seu suprimento de hidrogênio em seu núcleo. Por causa disso, a estrela brilhou e expandiu seu raio. Desde que seu núcleo se transformou em um núcleo de hélio degenerado, ela acendeu uma camada de hidrogênio fora de seu núcleo. Aldebaran está perdendo sua massa em cerca de uma Terra inteira por 300.000 anos com uma velocidade de 30 km / 18,6 mi por segundo.',
          nota: 0.0, numNotas: 0, periculosidade: 9.8, distanciaTerra: 65.23, temETs: true, image1: 'aldebaran1.jpg', image2: 'aldebaran2.jpg', nome: 'Aldebaran', tipo: 2
        },
        {
          descricao: 'Urano é o sétimo planeta descoberto no Sistema Solar que também levou à descoberta do último planeta, Netuno, ambos são referidos como gigantes de gelo. Oficialmente reconhecido em 1781 após muitas observações no passado, é o terceiro maior planeta do Sistema Solar. Recebeu o nome de Urano, em homenagem ao deus grego do céu, Ourano. É o único planeta cujo nome deriva diretamente de uma figura da mitologia grega. O planeta gira em uma direção retrógrada, oposta à forma como a Terra e a maioria dos outros planetas giram. As luas de Urano têm o nome de personagens criados por William Shakespeare e Alexandre Pope. Estes incluem Oberon, Titania e Miranda. Todos são mundos congelados com superfícies escuras. Alguns são misturas de gelo e rocha. A lua uraniana mais interessante é Miranda; tem cânions de gelo, terraços e outras áreas de superfície de aparência estranha. Urano tem dois conjuntos de anéis muito finos de cor escura. As partículas do anel são pequenas, variando de partículas do tamanho de uma poeira a pequenos pedregulhos. Existem onze anéis internos e dois anéis externos. Eles provavelmente se formaram quando uma ou mais luas de Urano foram quebradas em um impacto. Os primeiros anéis foram descobertos em 1977, com os dois anéis externos sendo descobertos em imagens do Telescópio Espacial Hubble entre 2003 e 2005.',
          nota: 0.0, numNotas: 0, periculosidade: 9.7, distanciaTerra: 18.2, temETs: true, image1: 'urano1.jpg', image2: 'urano2.jpg', nome: 'Urano', tipo: 1
        }
      ]);
    } catch (err) {
      console.error(err);
    }
  }
}