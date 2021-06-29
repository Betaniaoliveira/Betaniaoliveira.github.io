

/* selector p/ css método All para plural.*/
var header= document.querySelectorAll("header #titulo");
console.log(header);
var h1 = document.createElement("h1");
var conteudoh1= document.createTextNode("BNCC EM PAUTA"); 
h1.appendChild(conteudoh1);
h1.classList.add("titulo");
header[0].insertAdjacentElement("afterbegin", h1);


var main= document.querySelectorAll("main");
console.log(main);
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var p =document.createElement("p");
p.classList.add("texto");
var h2 =document.createElement("h2");


var conteudop= document.createTextNode("A Base Nacional Comum Curricular (BNCC) é um documento elaborado para orientar o ensino no Brasil, desde a Educação Infantil até o Ensino Médio. Não se trata, contudo, de um modelo curricular pronto, com normativas específicas, e sim de um guia orientador que estabelece os objetivos de aprendizagem correspondentes a cada etapa escolar, considerando igualmente as particularidades (metodológicas, sociais e regionais) de cada localidade.A proposta implica o desenvolvimento de um currículo pelas próprias unidades escolares, de acordo com as estratégicas definidas em seus próprios projetos político-pedagógicos, desde que estejam alinhadas à BNCC. A sua implementação ainda está em curso e enfrenta atualmente desafios relacionados não apenas à extensão e diversidade do território nacional, mas, sobretudo, às medidas sanitárias preventivas impostas pela pandemia da Covid-19, tais como a interrupção ou supressão das atividades escolares presenciais.A BNCC define, entre outros parâmetros, um conjunto de dez competências a serem desenvolvidas pelos estudantes, operando como um verdadeiro fio condutor ao longo de toda a Educação Básica. Uma competência, segundo a perspectiva adotada pela BNCC, nada mais é do que a “mobilização de conhecimentos, habilidades, atitudes e valores para resolver demandas da vida cotidiana, do exercício da cidadania e do mundo do trabalho”. Dessa forma, o caráter transversal e amplificado das competências atua como uma bússola orientadora para o desenvolvimento de currículos em consonância com os projetos político-pedagógicos de cada sistema e unidade de ensino.Esse modelo menos engessado possibilita não apenas adequações às diversidades sociais e regionais, como também a reformulação curricular frente aos desafios impostos pela pandemia da Covid-19. Em relação ao Ensino Médio, a BNCC introduz a possibilidade de o próprio estudante percorrer itinerários formativos diversificados, com uma carga horária mínima obrigatória aliada a uma formação com foco em áreas específicas do seu interesse, valorizando o protagonismo juvenil e estimulando a interdisciplinaridade do ensino nos chamados “projetos de vida”.Como a pandemia afetou a implementação da BNCC?Promulgada pelo Ministério da Educação em 2017, inicialmente a BNCC deve ser implementada em todas as escolas brasileiras até o final de 2021. No entanto, o contexto atual de interrupção das atividades escolares presenciais devido à pandemia da Covid-19 implicou desafios múltiplos tanto para educadores quanto para gestores em todo país. Os estados seguem com os preparativos gerais para a implementação, sobretudo no que se refere à elaboração da documentação necessária; no entanto, etapas igualmente necessárias, como consultas públicas, formação de professores e homologação, podem atrasar.r.”Apesar de os estados terem dado continuidade aos cronogramas de implementação na medida do possível e respeitando as normas de distanciamento social, muitas alterações necessárias, principalmente no que se refere às adequações de infraestrutura, irão demandar adequações de cronograma, com prováveis adiamentos. De maneira geral, as mesmas equipes de gestão nas secretarias estaduais de Educação que estavam responsáveis pela implementação foram destacadas para focar nas demandas emergenciais impostas pelo contexto pandêmico. Em entrevista ao portal Porvir, Rita Jobim, coordenadora de Políticas de Ensino Médio do Instituto Unibanco, explicou que “há estados que conseguiram seguir com as discussões curriculares por ter equipes específicas, como São Paulo, mas, em outros, as discussões foram atropeladas pela pandemia”.Além disso, parte essencial do processo de implementação envolve a participação democrática na forma de audiências públicas que permitam o amplo debate com a comunidade escolar. Jobim afirma que as audiências estavam sendo planejadas, com a inclusão de reuniões com regionais e rodas de conversa com estudantes, eventos impossibilitados pelas medidas de distanciamento social. Seria possível realizar os eventos em plataformas digitais, contudo esse é um elemento dificultador, que não apenas deixa de envolver parte significativa da comunidade como também atrasa, em todo caso, o cronograma.Já para Kátia Smole, diretora executiva do Instituto Reúna e membro do Movimento pela Base, a implementação planejada para 2021 em relação ao Ensino Médio deve seguir sem grandes atrasos. Em entrevista ao Portal Porvir, a diretora executiva justifica sua avaliação com base no fato de que a Frente do Ensino Médio no Conselho Nacional de Educação (CNE) permanece desenvolvendo os novos currículos. Além disso, Smole afirma que todos os estados trabalham, atualmente, na elaboração do currículo que deve ser entregue aos conselhos estaduais:“Algumas estão em fase de aprovação no conselho, outras estão com documentos em leitura crítica e outras finalizam consultas públicas. O movimento é intenso e, ainda que a pandemia possa ter interferido um pouco na produção, não há suspensão do processo.")


p.appendChild(conteudop); 
div1.appendChild(p);
var conteudoh2=document.createTextNode("ACESSE OS SITES ABAIXO E CONHEÇA TUDO SOBRE A BASE NACIONAL COMUM CURRICULAR.");
h2.appendChild(conteudoh2);
h2.classList.add("h2");
div2.appendChild(h2);

main[0].appendChild(div1);
main[0].appendChild(div2);








alert (" Bem Vindo ao nosso site!")







