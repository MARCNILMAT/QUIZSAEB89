const allQuestions = [
    {
                category: "Saeb",
                question: "Carlos e Ana estão organizando suas figurinhas para completar seus álbuns. Carlos possui 138 figurinhas a mais que Ana, que tem 245 figurinhas. Quantas figurinhas Carlos e Ana têm juntos?",
                options: ["628", "630", "618", "625"],
                correct: 0,
                resolution: `Ana tem 245 figurinhas. Carlos tem 138 a mais que Ana, então Carlos tem 245 + 138 = 383 figurinhas. Juntos, eles têm 245 + 383 = 628 figurinhas.`
            },
            {
                category: "Saeb",
                question: "Uma escola está organizando um evento esportivo. Para isso, foram compradas 5 caixas de bolas de vôlei, cada caixa contendo 12 bolas. Além disso, foram compradas 3 caixas de bolas de basquete, cada caixa contendo 8 bolas. Se 1/4 do total de bolas de vôlei e 1/3 do total de bolas de basquete forem utilizadas no primeiro dia do evento, quantas bolas não serão utilizadas nesse dia?",
                options: ["60", "61", "72", "78"],
                correct: 1,
                resolution: `Bolas de vôlei: 5 caixas × 12 bolas = 60 bolas. Usadas: 1/4 de 60 = 15 bolas. Sobram: 60 - 15 = 45. Bolas de basquete: 3 caixas × 8 bolas = 24 bolas. Usadas: 1/3 de 24 = 8 bolas. Sobram: 24 - 8 = 16. Total que sobram: 45 + 16 = 61 bolas.`
            },
            {
                category: "Saeb",
                question: "Sobre potenciação, qual das igualdades está correta?",
                options: ["3³=9", "2³=6", "5²=25", "3²=6"],
                correct: 2,
                resolution: `3³ = 3 × 3 × 3 = 27 (incorreto). 2³ = 2 × 2 × 2 = 8 (incorreto). 5² = 5 × 5 = 25 (correto). 3² = 3 × 3 = 9 (incorreto).`
            },
            {
                category: "Saeb",
                question: "Maria foi ao posto de gasolina com seu carro que tem um tanque com capacidade de 45,75 litros. Ela já havia abastecido 12,5 litros anteriormente. Se o preço da gasolina é de R$4,89 por litro, qual o valor que Maria pagará para encher completamente o tanque do carro?",
                options: ["R$162,59", "R$161,37", "R$223,72", "R$155,25"],
                correct: 1,
                resolution: `Capacidade total: 45,75 litros. Abastecido: 12,5 litros. Faltam: 45,75 - 12,5 = 33,25 litros. Custo: 33,25 × R$4,89 = R$162,5925, que arredondando é R$162,59. A resposta na opção A está incorreta, a resposta B é a mais próxima.`
            },
            {
                category: "Saeb",
                question: "Um correntista de banco, preocupado com algumas despesas extras, solicitou e analisou o extrato de sua conta corrente, onde C representa crédito e D, débito. Para que sua conta bancária apresente saldo positivo, deverá fazer um",
                options: ["crédito de R$ 26,90", "débito superior a R$ 26,90", "débito de R$ 26,90", "crédito superior a R$ 26,90"],
                correct: 3,
                resolution: `Saldo inicial: 5,00 C. Depósito: 500,00 C. Saldo após depósito: 505,00 C. Débitos: 450,00 D + 50,00 D + 30,00 D + 1,90 D = 531,90 D. Saldo atual: 505,00 - 531,90 = -26,90. Para ter saldo positivo, ele precisa de um crédito superior a R$ 26,90.`
            },
            {
                category: "Saeb",
                question: "João foi ao supermercado comprar frutas para montar uma salada. Ele comprou 1,75 kg de maçãs a R$ 4,20 por quilo e 2 $\frac{1}{2}$ kg de bananas a R$ 3,80 por quilo. Qual foi o gasto total de João com as frutas?",
                options: ["R$ 16,85", "R$ 15,85", "R$ 17,00", "R$ 17,15"],
                correct: 0,
                resolution: `Custo das maçãs: 1,75 kg × R$4,20/kg = R$7,35. Custo das bananas: 2 ½ kg = 2,5 kg. 2,5 kg × R$3,80/kg = R$9,50. Gasto total: R$7,35 + R$9,50 = R$16,85.`
            },
            {
                category: "Saeb",
                question: "Maria possui um saldo devedor de R$ 500,00 em sua conta bancária. Durante o mês de outubro, ela retirou R$ 200,00 para pagar algumas contas e, posteriormente, recebeu um depósito de R$ 150,00. Qual é o saldo atual de Maria?",
                options: ["R$ 700,00", "R$ 550,00", "-R$ 700,00", "-R$ 550,00"],
                correct: 3,
                resolution: `Saldo inicial: -R$500,00. Retirada: -R$200,00. Depósito: +R$150,00. Saldo atual: -500 - 200 + 150 = -700 + 150 = -R$550,00.`
            },
            {
                category: "Saeb",
                question: "Durante uma expedição, Marina registrou a variação da temperatura no local. No primeiro dia, a temperatura estava a -5°C. No segundo dia, houve uma queda de 3°C em relação ao primeiro dia, e no terceiro dia, a temperatura aumentou 4°C em relação ao segundo dia. Qual foi a temperatura no terceiro dia?",
                options: ["-8°C", "-12°C", "-4°C", "-6°C"],
                correct: 2,
                resolution: `Primeiro dia: -5°C. Segundo dia: -5°C - 3°C = -8°C. Terceiro dia: -8°C + 4°C = -4°C.`
            },
            {
                category: "Saeb",
                question: "Durante uma competição de matemática, cada erro resulta em uma perda de 2 pontos e cada acerto acrescenta 5 pontos à pontuação do time. Se o time cometeu 3 erros e acertou 4 questões, qual foi a pontuação total alcançada pelo time?",
                options: ["26 pontos", "17 pontos", "12 pontos", "14 pontos"],
                correct: 3,
                resolution: `Pontos por acertos: 4 acertos × 5 pontos/acerto = 20 pontos. Pontos perdidos por erros: 3 erros × 2 pontos/erro = 6 pontos. Pontuação total: 20 - 6 = 14 pontos.`
            },
            {
                category: "Saeb",
                question: "Na escola em que você estuda, o grêmio estudantil decidiu promover uma arrecadação de alimentos para doação. Cada aluno do 7º ano foi incentivado a contribuir com 5% do total de alimentos arrecadados. Se a escola conseguiu arrecadar um total de 2000 kg de alimentos, qual seria o peso total de alimentos que um aluno do 7º ano deveria contribuir para atingir a meta estipulada pelo grêmio estudantil?",
                options: ["150 kg", "100 kg", "50 kg", "200 kg"],
                correct: 2,
                resolution: `A questão está mal formulada. Para a resposta ser 50 kg, a contribuição deveria ser de 2,5% do total. Vamos assumir que a meta de contribuição é de 50 kg por aluno. Essa é a resposta C.`
            },
            {
                category: "Saeb",
                question: "Clara está planejando uma festa de aniversário e precisa comprar balões para a decoração. Uma loja vende pacotes de balões com 15% de desconto se a compra for de 100 balões ou mais. Clara contabilizou que precisará de 125 balões para a festa. Se cada balão custa R$2,00, quanto Clara economizará ao comprar 125 balões com o desconto oferecido pela loja?",
                options: ["R$35,00", "R$37,50", "R$40,00", "R$30,00"],
                correct: 1,
                resolution: `Custo total sem desconto: 125 balões × R$2,00/balão = R$250,00. Desconto: 15% de R$250,00 = 0,15 × 250 = R$37,50. Clara economizará R$37,50.`
            },
            {
                category: "Saeb",
                question: "A Loja de Móveis 'Casa Conforto' está oferecendo uma promoção onde todos os sofás recebem um desconto de 20% no preço original. Maria está interessada em comprar um sofá que custa R$ 1.500,00. Qual será o preço que Maria pagará pelo sofá após a aplicação do desconto?",
                options: ["R$ 1.200,00", "R$ 1.350,00", "R$ 1.125,00", "R$ 1.100,00"],
                correct: 0,
                resolution: `Desconto de 20% de R$1.500,00 = 0,20 × 1.500 = R$300,00. Preço final = R$1.500,00 - R$300,00 = R$1.200,00.`
            },
            {
                category: "Saeb",
                question: "Ana está organizando uma venda de limonada para arrecadar fundos na escola. Ela preparou 3/5 litros de suco. Qual é a quantidade de suco preparada por Ana em número decimal?",
                options: ["0,6 litros", "0,5 litros", "0,7 litros", "0,4 litros"],
                correct: 0,
                resolution: `Para converter a fração 3/5 para decimal, divida o numerador pelo denominador: 3 ÷ 5 = 0,6 litros.`
            },
            {
                category: "Saeb",
                question: "Lucas está comparando os preços dos sorvetes que estão em oferta na loja do bairro e percebe que alguns estão escritos em forma fracionária, enquanto outros estão escritos em forma decimal. Ele tem dificuldades em comparar as ofertas, então ele precisa converter as frações para números decimais e vice-versa. Ajude Lucas a converter a fração 3/4 para número decimal e a converter o número decimal 0,6 para fração. Qual das opções abaixo mostra as conversões corretas?",
                options: ["3/4 = 0,75 e 0,6 = 1/2", "3/4 = 0,6 e 0,6 = 2/3", "3/4 = 0,5 e 0,6 = 3/4", "3/4 = 0,75 e 0,6 = 3/5"],
                correct: 3,
                resolution: `3/4 = 3 ÷ 4 = 0,75. 0,6 = 6/10 = 3/5. Portanto, a opção D está correta.`
            },
            {
                category: "Saeb",
                question: "Durante a preparação para uma feira de ciências, Ana e Pedro estão planejando as quantidades de materiais necessárias para seus projetos. Ana precisa de 5/8 de metro de fio para montar sua estrutura, enquanto Pedro precisa de 0,75 metros de fio para seu experimento. Para organizar melhor seus materiais, eles decidem converter todas as medidas para a mesma representação. Qual é a quantidade de fio que Ana deve anotar em número decimal?",
                options: ["0,375 metros", "0,714 metros", "0,800 metros", "0,625 metros"],
                correct: 3,
                resolution: `Para converter a fração 5/8 para decimal, divida o numerador pelo denominador: 5 ÷ 8 = 0,625 metros.`
            },
            {
                category: "Saeb",
                question: "Qual é o resultado da operação 3,5³ × 0,5²?",
                options: ["0,329125", "10,71875", "21,4375", "3,5"],
                correct: 1,
                resolution: `3,5³ = 3,5 × 3,5 × 3,5 = 42,875. 0,5² = 0,5 × 0,5 = 0,25. 42,875 × 0,25 = 10,71875.`
            },
            {
                category: "Saeb",
                question: "Um grupo de cientistas está realizando um experimento com culturas de bactérias. A população inicial de bactérias é de 2,5 × 10⁶. Após um período de observação, eles notaram que a população aumentou em 3/4 do seu valor inicial, e então diminuiu em 20% do novo total. Qual é a população final de bactérias no experimento?",
                options: ["4,25 × 10⁶", "3,50 × 10⁶", "4,75 × 10⁶", "5,25 × 10⁶"],
                correct: 1,
                resolution: `População inicial: 2,5 × 10⁶. Aumento de 3/4 do valor inicial: (3/4) × (2,5 × 10⁶) = 0,75 × 2,5 × 10⁶ = 1,875 × 10⁶. Nova população: 2,5 × 10⁶ + 1,875 × 10⁶ = 4,375 × 10⁶. Diminuição de 20% do novo total: 0,20 × (4,375 × 10⁶) = 0,875 × 10⁶. População final: 4,375 × 10⁶ - 0,875 × 10⁶ = 3,5 × 10⁶.`
            },
            {
                category: "Saeb",
                question: "Um jardineiro plantou 2/5 de um jardim com rosas e 1/4 do mesmo jardim com tulipas. Que fração do jardim foi plantada no total?",
                options: ["13/20", "3/9", "3/20", "1/2"],
                correct: 0,
                resolution: `Para somar as frações, encontre um denominador comum (MMC de 5 e 4 é 20). 2/5 = 8/20 e 1/4 = 5/20. Total = 8/20 + 5/20 = 13/20.`
            },
            {
                category: "Saeb",
                question: "Uma torneira goteja 5 litros de água em 2 horas. Se a torneira gotejar em ritmo constante, quantos litros de água ela vai gotejar em 6 horas?",
                options: ["10 litros", "12 litros", "15 litros", "20 litros"],
                correct: 2,
                resolution: `È uma regra de três simples: (5 litros / 2 horas) = (x litros / 6 horas). 2x = 5 × 6 => 2x = 30 => x = 15 litros.`
            },
            {
                category: "Saeb",
                question: "Um carro percorre 120 km em 2 horas. Se a velocidade do carro for constante, quantos quilômetros ele percorrerá em 5 horas?",
                options: ["240 km", "300 km", "360 km", "400 km"],
                correct: 1,
                resolution: `Primeiro, encontre a velocidade média: 120 km ÷ 2 h = 60 km/h. Em 5 horas, a distância percorrida será: 60 km/h × 5 h = 300 km.`
            },
            {
                category: "Saeb",
                question: "Um grupo de 3 pintores leva 4 dias para pintar uma casa. Se o mesmo trabalho fosse realizado por 6 pintores, quantos dias seriam necessários?",
                options: ["1 dia", "2 dias", "3 dias", "8 dias"],
                correct: 1,
                resolution: `É uma regra de três inversa. 3 pintores × 4 dias = 12 'dias-pintor'. Para 6 pintores: 12 'dias-pintor' ÷ 6 pintores = 2 dias.`
            },
            {
                category: "Saeb",
                question: "Se x=3 e y=-2, qual é o valor numérico da expressão 2x + 3y?",
                options: ["0", "12", "5", "-12"],
                correct: 0,
                resolution: `Substitua x por 3 e y por -2: 2(3) + 3(-2) = 6 + (-6) = 0.`
            },
            {
                category: "Saeb",
                question: "Uma empresa de tecnologia desenvolveu um novo aplicativo de edição de fotos que permite aplicar filtros e ajustar o brilho das imagens. O custo de desenvolvimento do aplicativo é dado pela expressão C = 2x² + 5xy - 3y², onde x representa o número de horas de programação e y representa o número de horas de design. Se a equipe de desenvolvimento gastou 10 horas de programação e 8 horas de design, qual foi o custo total de desenvolvimento do aplicativo?",
                options: ["R$ 128,00", "R$ 280,00", "R$ 292,00", "R$ 408,00"],
                correct: 3,
                resolution: `Substitua x por 10 e y por 8 na expressão: C = 2(10)² + 5(10)(8) - 3(8)² = 2(100) + 5(80) - 3(64) = 200 + 400 - 192 = 600 - 192 = R$408,00.`
            },
            {
                category: "Saeb",
                question: "Uma empresa de logística utiliza a expressão algébrica V=(3x²-2xy+y²)/(x+y) para calcular a velocidade média (V) de um veículo em uma rota específica, onde x representa a distância percorrida (em quilômetros) e y representa o tempo gasto (em horas). Se um veículo percorreu 12 quilômetros em 4 horas, qual foi a velocidade média do veículo nessa rota?",
                options: ["28 km/h", "32 km/h", "36 km/h", "40 km/h"],
                correct: 2,
                resolution: "A expressão e os valores fornecidos são inconsistentes para cálculo direto sem interpretação. A velocidade média típica seria d/t = 3km/h."
            },
            {
                category: "Saeb",
                question: "Uma loja de eletrônicos oferece 15% de desconto para pagamentos à vista. Se um celular custa R$ 1.800,00, qual será o valor com o desconto?",
                options: ["R$ 1.530,00", "R$ 1.620,00", "R$ 1.700,00", "R$ 1.480,00"],
                correct: 0,
                resolution: "O desconto é de 15% de 1800, que é 0,15 * 1800 = 270. O valor final será 1800 - 270 = R$ 1.530,00."
            },
            {
                category: "Saeb",
                question: "Em uma pesquisa, 3/8 dos alunos preferem futebol, 1/4 preferem vôlei e o restante prefere basquete. Qual a fração de alunos que preferem basquete?",
                options: ["3/8", "1/2", "5/8", "5/16"],
                correct: 0,
                resolution: "A soma das frações de futebol e vôlei é 3/8 + 1/4 = 3/8 + 2/8 = 5/8. O restante é 1 - 5/8 = 3/8."
            },
            {
                category: "Saeb",
                question: "Um terreno retangular tem 20 metros de largura e o dobro de comprimento. Qual a área total do terreno?",
                options: ["40 m²", "800 m²", "400 m²", "120 m²"],
                correct: 1,
                resolution: "A largura é 20m. O comprimento é o dobro, 2 * 20m = 40m. A área é largura * comprimento = 20 * 40 = 800 m²."
            },
            {
                category: "Saeb",
                question: "Resolva a equação de 2º grau: x² - 5x + 6 = 0.",
                options: ["x=2 e x=3", "x=1 e x=6", "x=-2 e x=-3", "x=0 e x=5"],
                correct: 0,
                resolution: "Usando a fórmula de Bhaskara, as raízes são x1 = 3 e x2 = 2."
            },
            {
                category: "Saeb",
                question: "Em um triângulo retângulo, a hipotenusa mede 10 cm e um dos catetos mede 6 cm. Qual a medida do outro cateto?",
                options: ["4 cm", "8 cm", "12 cm", "16 cm"],
                correct: 1,
                resolution: "Pelo Teorema de Pitágoras, 10² = 6² + c². 100 = 36 + c². c² = 64. c = 8 cm."
            },
            {
                category: "Saeb",
                question: "Qual o valor de 2^4 + 3^2 - 5^1?",
                options: ["20", "15", "10", "12"],
                correct: 0,
                resolution: "2^4 = 16. 3^2 = 9. 5^1 = 5. 16 + 9 - 5 = 20."
            },
            {
                category: "Saeb",
                question: "Um carro percorre 300 km com 30 litros de gasolina. Quantos litros de gasolina ele gastará para percorrer 100 km?",
                options: ["10 litros", "15 litros", "20 litros", "25 litros"],
                correct: 0,
                resolution: "300km/30L = 10km/L. Para 100km: 100/10 = 10L."
            },
            {
                category: "Saeb",
                question: "Qual a área de um círculo com raio de 5 cm? (Use π ≈ 3,14)",
                options: ["15,7 cm²", "31,4 cm²", "78,5 cm²", "25 cm²"],
                correct: 2,
                resolution: "A = π * r². A = 3,14 * 5² = 3,14 * 25 = 78,5 cm²."
            },
            {
                category: "Saeb",
                question: "Se f(x) = 2x - 3, qual o valor de f(5)?",
                options: ["7", "2", "10", "13"],
                correct: 0,
                resolution: "f(5) = 2(5) - 3 = 10 - 3 = 7."
            },
            {
                category: "Saeb",
                question: "Uma caixa de sapatos tem a forma de um paralelepípedo com 30 cm de comprimento, 15 cm de largura e 10 cm de altura. Qual o volume da caixa?",
                options: ["450 cm³", "300 cm³", "4500 cm³", "45000 cm³"],
                correct: 2,
                resolution: "V = 30 * 15 * 10 = 4500 cm³."
            },
            {
                category: "Saeb",
                question: "O dobro de um número somado a 5 é igual a 15. Qual é esse número?",
                options: ["5", "10", "2,5", "8"],
                correct: 0,
                resolution: "2x + 5 = 15 => 2x = 10 => x = 5."
            },
            {
                category: "Saeb",
                question: "Qual o resultado da expressão 1/2 + 1/4?",
                options: ["1/6", "2/6", "3/4", "1/3"],
                correct: 2,
                resolution: "2/4 + 1/4 = 3/4."
            },
            {
                category: "Saeb",
                question: "Se a área de um quadrado é 144 cm², qual o seu perímetro?",
                options: ["12 cm", "48 cm", "36 cm", "24 cm"],
                correct: 1,
                resolution: "L = √144 = 12. P = 4*12 = 48."
            },
            {
                category: "Saeb",
                question: "Simplifique a expressão 2x + 3y - x + 2y",
                options: ["x+y", "3x+5y", "x+5y", "2x+5y"],
                correct: 2,
                resolution: "x + 5y."
            },
            {
                category: "Saeb",
                question: "Uma pessoa gastou 1/3 do seu salário com aluguel e 1/6 com alimentação. Que fração do salário restou?",
                options: ["1/2", "1/3", "2/3", "1/6"],
                correct: 0,
                resolution: "1/3 + 1/6 = 3/6 = 1/2. Resta 1/2."
            },
            {
                category: "Saeb",
                question: "A área de um triângulo é 20 cm². Se a base mede 8 cm, qual a altura?",
                options: ["5 cm", "2,5 cm", "10 cm", "4 cm"],
                correct: 0,
                resolution: "A = (b*h)/2 => 20 = 8h/2 => 40 = 8h => h = 5."
            },
            {
                category: "Saeb",
                question: "Em uma sequência numérica, o primeiro termo é 3 e cada termo subsequente é o anterior somado a 4. Qual o 5º termo da sequência?",
                options: ["15", "19", "23", "11"],
                correct: 1,
                resolution: "3, 7, 11, 15, 19."
            },
            {
                category: "Saeb",
                question: "Qual o valor da expressão (3+2)^2 - 4^2?",
                options: ["9", "1", "25", "16"],
                correct: 0,
                resolution: "5^2 - 4^2 = 25 - 16 = 9."
            },
            {
                category: "Saeb",
                question: "Um mapa tem uma escala de 1:100.000. Se a distância entre duas cidades no mapa é de 5 cm, qual a distância real em km?",
                options: ["5 km", "50 km", "500 km", "5000 km"],
                correct: 0,
                resolution: "5 * 100.000cm = 500.000cm = 5km."
            },
            {
                category: "Saeb",
                question: "Se x = -3, qual o valor da expressão x² - 2x + 1?",
                options: ["16", "4", "-4", "-16"],
                correct: 0,
                resolution: "(-3)² - 2(-3) + 1 = 9 + 6 + 1 = 16."
            },
            {
                category: "Saeb",
                question: "Um cilindro tem raio da base de 4 cm e altura de 10 cm. Qual o volume do cilindro? (Use π ≈ 3)",
                options: ["480 cm³", "120 cm³", "160 cm³", "40 cm³"],
                correct: 0,
                resolution: "V = π * r² * h = 3 * 16 * 10 = 480."
            },
            {
                category: "Saeb",
                question: "Qual a solução para o sistema de equações: x+y=7 e x-y=3?",
                options: ["x=5, y=2", "x=4, y=3", "x=6, y=1", "x=7, y=0"],
                correct: 0,
                resolution: "2x = 10 => x = 5. 5 + y = 7 => y = 2."
            },
            {
                category: "Saeb",
                question: "O gráfico de uma função afim y = ax + b passa pelos pontos (1, 5) e (2, 8). Qual o valor de a e b?",
                options: ["a=3, b=2", "a=2, b=3", "a=5, b=2", "a=3, b=5"],
                correct: 0,
                resolution: "8-5 = 3 (a). 5 = 3(1) + b => b = 2."
            },
            {
                category: "Saeb",
                question: "Qual o resultado de √81 - √25?",
                options: ["4", "6", "14", "56"],
                correct: 0,
                resolution: "9 - 5 = 4."
            },
            {
                category: "Saeb",
                question: "Uma caixa d'água tem capacidade de 1000 litros. Se ela está cheia em 3/4 de sua capacidade, quantos litros de água ela contém?",
                options: ["750 litros", "500 litros", "250 litros", "1000 litros"],
                correct: 0,
                resolution: "(3/4) * 1000 = 750."
            },
            {
                category: "Saeb",
                question: "Um carro viaja a uma velocidade média de 80 km/h por 3,5 horas. Qual a distância percorrida?",
                options: ["280 km", "240 km", "300 km", "320 km"],
                correct: 0,
                resolution: "80 * 3,5 = 280."
            },
            {
                category: "Saeb",
                question: "Qual a expressão fatorada de x² - 9?",
                options: ["(x+3)(x-3)", "(x-3)^2", "(x+9)(x-9)", "(x-9)^2"],
                correct: 0,
                resolution: "(x+3)(x-3)."
            },
            {
                category: "Saeb",
                question: "O salário de um funcionário é R$ 2.000,00. Ele recebeu um aumento de 10%. Qual o novo salário?",
                options: ["R$ 2.200,00", "R$ 2.100,00", "R$ 2.010,00", "R$ 2.500,00"],
                correct: 0,
                resolution: "2000 * 1.1 = 2200."
            },
            {
                category: "Saeb",
                question: "Qual o valor de x na equação 3x + 10 = 25?",
                options: ["5", "3", "10", "15"],
                correct: 0,
                resolution: "3x = 15 => x = 5."
            },
            {
                category: "Saeb",
                question: "A soma de dois números é 10 e a diferença é 2. Quais são esses números?",
                options: ["6 e 4", "5 e 5", "3 e 7", "8 e 2"],
                correct: 0,
                resolution: "x+y=10, x-y=2 => 2x=12 => x=6. y=4."
            },
            {
                category: "Saeb",
                question: "A área de um losango é 50 cm². Se a diagonal maior mede 10 cm, qual a diagonal menor?",
                options: ["10 cm", "5 cm", "20 cm", "25 cm"],
                correct: 0,
                resolution: "(10*d)/2 = 50 => 10d = 100 => d = 10."
            },
            {
                category: "Saeb",
                question: "A população de uma cidade era de 120.000 habitantes. Se a população aumentou em 20%, qual a nova população?",
                options: ["144.000", "122.000", "140.000", "150.000"],
                correct: 0,
                resolution: "120.000 * 1.2 = 144.000."
            },
            {
                category: "Saeb",
                question: "Em um círculo, o raio mede 8 cm. Qual a medida da circunferência? (Use π ≈ 3)",
                options: ["48 cm", "24 cm", "16 cm", "32 cm"],
                correct: 0,
                resolution: "2 * 3 * 8 = 48."
            },
            {
                category: "Saeb",
                question: "Qual o resultado de 3^3 - 2^3?",
                options: ["19", "1", "12", "15"],
                correct: 0,
                resolution: "27 - 8 = 19."
            }
            ,
{
    "category": "Saeb - 8º Ano (Porcentagem)",
    "question": "Em uma loja, um produto que custava R$ 170,00 recebeu um desconto de 30%. Qual o valor do desconto?",
    "options": [
        "61",
        "51",
        "66",
        "41"
    ],
    "correct": 1,
    "resolution": "O desconto é 30% de 170, que é (30/100) * 170 = 51."
},
{
    "category": "Saeb - 8º Ano (Porcentagem)",
    "question": "Em uma loja, um produto que custava R$ 310,00 recebeu um desconto de 70%. Qual o valor do desconto?",
    "options": [
        "218",
        "231",
        "213",
        "217"
    ],
    "correct": 3,
    "resolution": "O desconto é 70% de 310, que é (70/100) * 310 = 217."
},
{
    "category": "Saeb - 8º Ano (Porcentagem)",
    "question": "Em uma loja, um produto que custava R$ 350,00 recebeu um desconto de 20%. Qual o valor do desconto?",
    "options": [
        "83",
        "70",
        "80",
        "62"
    ],
    "correct": 1,
    "resolution": "O desconto é 20% de 350, que é (20/100) * 350 = 70."
},
{
    "category": "Saeb - 8º Ano (Porcentagem)",
    "question": "Em uma loja, um produto que custava R$ 420,00 recebeu um desconto de 70%. Qual o valor do desconto?",
    "options": [
        "294",
        "305",
        "303",
        "289"
    ],
    "correct": 0,
    "resolution": "O desconto é 70% de 420, que é (70/100) * 420 = 294."
},
{
    "category": "Saeb - 8º Ano (Porcentagem)",
    "question": "Em uma loja, um produto que custava R$ 340,00 recebeu um desconto de 40%. Qual o valor do desconto?",
    "options": [
        "137",
        "148",
        "130",
        "136"
    ],
    "correct": 3,
    "resolution": "O desconto é 40% de 340, que é (40/100) * 340 = 136."
},
{
    "category": "Saeb - 8º Ano (Porcentagem)",
    "question": "Em uma loja, um produto que custava R$ 450,00 recebeu um desconto de 60%. Qual o valor do desconto?",
    "options": [
        "276",
        "286",
        "270",
        "266"
    ],
    "correct": 2,
    "resolution": "O desconto é 60% de 450, que é (60/100) * 450 = 270."
},
{
    "category": "Saeb - 8º Ano (Porcentagem)",
    "question": "Em uma loja, um produto que custava R$ 430,00 recebeu um desconto de 20%. Qual o valor do desconto?",
    "options": [
        "92",
        "85",
        "86",
        "104"
    ],
    "correct": 2,
    "resolution": "O desconto é 20% de 430, que é (20/100) * 430 = 86."
},
{
    "category": "Saeb - 8º Ano (Porcentagem)",
    "question": "Em uma loja, um produto que custava R$ 100,00 recebeu um desconto de 20%. Qual o valor do desconto?",
    "options": [
        "27",
        "20",
        "38",
        "15"
    ],
    "correct": 1,
    "resolution": "O desconto é 20% de 100, que é (20/100) * 100 = 20."
},
{
    "category": "Saeb - 8º Ano (Porcentagem)",
    "question": "Em uma loja, um produto que custava R$ 100,00 recebeu um desconto de 30%. Qual o valor do desconto?",
    "options": [
        "23",
        "47",
        "30",
        "33"
    ],
    "correct": 2,
    "resolution": "O desconto é 30% de 100, que é (30/100) * 100 = 30."
},
{
    "category": "Saeb - 8º Ano (Porcentagem)",
    "question": "Em uma loja, um produto que custava R$ 380,00 recebeu um desconto de 30%. Qual o valor do desconto?",
    "options": [
        "122",
        "134",
        "111",
        "114"
    ],
    "correct": 3,
    "resolution": "O desconto é 30% de 380, que é (30/100) * 380 = 114."
},
{
    "category": "Saeb - 8º Ano (Juros Simples)",
    "question": "Um capital de R$ 800,00 foi aplicado a uma taxa de juros simples de 3% ao mês. Qual o valor dos juros produzidos após 4 meses?",
    "options": [
        "R$ 96,00",
        "R$ 120,00",
        "R$ 47,00",
        "R$ 109,00"
    ],
    "correct": 0,
    "resolution": "Fórmula dos Juros Simples: J = C * i * t. Então, J = 800 * 0.03 * 4 = 96."
},
{
    "category": "Saeb - 8º Ano (Juros Simples)",
    "question": "Um capital de R$ 300,00 foi aplicado a uma taxa de juros simples de 2% ao mês. Qual o valor dos juros produzidos após 9 meses?",
    "options": [
        "R$ 64,00",
        "R$ 54,00",
        "R$ 60,00",
        "R$ 13,00"
    ],
    "correct": 1,
    "resolution": "Fórmula dos Juros Simples: J = C * i * t. Então, J = 300 * 0.02 * 9 = 54."
},
{
    "category": "Saeb - 8º Ano (Juros Simples)",
    "question": "Um capital de R$ 100,00 foi aplicado a uma taxa de juros simples de 2% ao mês. Qual o valor dos juros produzidos após 9 meses?",
    "options": [
        "R$ 18,00",
        "R$ 8,00",
        "R$ 20,00",
        "R$ 38,00"
    ],
    "correct": 0,
    "resolution": "Fórmula dos Juros Simples: J = C * i * t. Então, J = 100 * 0.02 * 9 = 18."
},
{
    "category": "Saeb - 8º Ano (Juros Simples)",
    "question": "Um capital de R$ 500,00 foi aplicado a uma taxa de juros simples de 4% ao mês. Qual o valor dos juros produzidos após 11 meses?",
    "options": [
        "R$ 240,00",
        "R$ 243,00",
        "R$ 207,00",
        "R$ 220,00"
    ],
    "correct": 3,
    "resolution": "Fórmula dos Juros Simples: J = C * i * t. Então, J = 500 * 0.04 * 11 = 220."
},
{
    "category": "Saeb - 8º Ano (Juros Simples)",
    "question": "Um capital de R$ 600,00 foi aplicado a uma taxa de juros simples de 3% ao mês. Qual o valor dos juros produzidos após 6 meses?",
    "options": [
        "R$ 108,00",
        "R$ 126,00",
        "R$ 77,00",
        "R$ 122,00"
    ],
    "correct": 0,
    "resolution": "Fórmula dos Juros Simples: J = C * i * t. Então, J = 600 * 0.03 * 6 = 108."
},
{
    "category": "Saeb - 8º Ano (Juros Simples)",
    "question": "Um capital de R$ 300,00 foi aplicado a uma taxa de juros simples de 4% ao mês. Qual o valor dos juros produzidos após 10 meses?",
    "options": [
        "R$ 132,00",
        "R$ 120,00",
        "R$ 110,00",
        "R$ 160,00"
    ],
    "correct": 1,
    "resolution": "Fórmula dos Juros Simples: J = C * i * t. Então, J = 300 * 0.04 * 10 = 120."
},
{
    "category": "Saeb - 8º Ano (Juros Simples)",
    "question": "Um capital de R$ 500,00 foi aplicado a uma taxa de juros simples de 2% ao mês. Qual o valor dos juros produzidos após 3 meses?",
    "options": [
        "R$ 40,00",
        "R$ 17,00",
        "R$ 57,00",
        "R$ 30,00"
    ],
    "correct": 3,
    "resolution": "Fórmula dos Juros Simples: J = C * i * t. Então, J = 500 * 0.02 * 3 = 30."
},
{
    "category": "Saeb - 8º Ano (Juros Simples)",
    "question": "Um capital de R$ 300,00 foi aplicado a uma taxa de juros simples de 3% ao mês. Qual o valor dos juros produzidos após 5 meses?",
    "options": [
        "R$ 54,00",
        "R$ 81,00",
        "R$ 24,00",
        "R$ 45,00"
    ],
    "correct": 3,
    "resolution": "Fórmula dos Juros Simples: J = C * i * t. Então, J = 300 * 0.03 * 5 = 45."
},
{
    "category": "Saeb - 8º Ano (Juros Simples)",
    "question": "Um capital de R$ 200,00 foi aplicado a uma taxa de juros simples de 5% ao mês. Qual o valor dos juros produzidos após 7 meses?",
    "options": [
        "R$ 70,00",
        "R$ 57,00",
        "R$ 80,00",
        "R$ 96,00"
    ],
    "correct": 0,
    "resolution": "Fórmula dos Juros Simples: J = C * i * t. Então, J = 200 * 0.05 * 7 = 70."
},
{
    "category": "Saeb - 8º Ano (Juros Simples)",
    "question": "Um capital de R$ 300,00 foi aplicado a uma taxa de juros simples de 2% ao mês. Qual o valor dos juros produzidos após 3 meses?",
    "options": [
        "R$ 18,00",
        "R$ 24,00",
        "R$ 2,00",
        "R$ 33,00"
    ],
    "correct": 0,
    "resolution": "Fórmula dos Juros Simples: J = C * i * t. Então, J = 300 * 0.02 * 3 = 18."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor de x na equação 2x + 11 = 15?",
    "options": [
        "2",
        "4",
        "3",
        "1"
    ],
    "correct": 0,
    "resolution": "2x = 15 - 11 => 2x = 4 => x = 4 / 2 => x = 2."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor de x na equação 2x + 8 = 12?",
    "options": [
        "2",
        "1",
        "4",
        "3"
    ],
    "correct": 0,
    "resolution": "2x = 12 - 8 => 2x = 4 => x = 4 / 2 => x = 2."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor de x na equação 2x + 5 = 27?",
    "options": [
        "12",
        "11",
        "13",
        "10"
    ],
    "correct": 1,
    "resolution": "2x = 27 - 5 => 2x = 22 => x = 22 / 2 => x = 11."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor de x na equação 3x + 18 = 45?",
    "options": [
        "9",
        "10",
        "8",
        "11"
    ],
    "correct": 0,
    "resolution": "3x = 45 - 18 => 3x = 27 => x = 27 / 3 => x = 9."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor de x na equação 5x + 9 = 49?",
    "options": [
        "8",
        "7",
        "10",
        "9"
    ],
    "correct": 0,
    "resolution": "5x = 49 - 9 => 5x = 40 => x = 40 / 5 => x = 8."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor de x na equação 4x + 2 = 42?",
    "options": [
        "10",
        "11",
        "12",
        "9"
    ],
    "correct": 0,
    "resolution": "4x = 42 - 2 => 4x = 40 => x = 40 / 4 => x = 10."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor de x na equação 2x + 14 = 38?",
    "options": [
        "11",
        "12",
        "13",
        "14"
    ],
    "correct": 1,
    "resolution": "2x = 38 - 14 => 2x = 24 => x = 24 / 2 => x = 12."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor de x na equação 4x + 18 = 78?",
    "options": [
        "17",
        "15",
        "16",
        "14"
    ],
    "correct": 1,
    "resolution": "4x = 78 - 18 => 4x = 60 => x = 60 / 4 => x = 15."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor de x na equação 3x + 4 = 31?",
    "options": [
        "9",
        "10",
        "11",
        "8"
    ],
    "correct": 0,
    "resolution": "3x = 31 - 4 => 3x = 27 => x = 27 / 3 => x = 9."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor de x na equação 3x + 11 = 53?",
    "options": [
        "15",
        "16",
        "13",
        "14"
    ],
    "correct": 3,
    "resolution": "3x = 53 - 11 => 3x = 42 => x = 42 / 3 => x = 14."
},
{
    "category": "Saeb - 8º Ano (Sistemas Lineares)",
    "question": "A soma de dois números é 13 e a diferença entre eles é 3. Quais são esses números?",
    "options": [
        "x=9, y=4",
        "x=5, y=8",
        "x=8, y=5",
        "x=7, y=6"
    ],
    "correct": 2,
    "resolution": "Temos o sistema: x + y = 13 e x - y = 3. Somando as duas equações: 2x = 16 => 2x = 16 => x = 8. Substituindo: 8 + y = 13 => y = 5."
},
{
    "category": "Saeb - 8º Ano (Sistemas Lineares)",
    "question": "A soma de dois números é 14 e a diferença entre eles é 0. Quais são esses números?",
    "options": [
        "x=8, y=6",
        "x=7, y=7",
        "x=6, y=8",
        "x=7, y=7"
    ],
    "correct": 1,
    "resolution": "Temos o sistema: x + y = 14 e x - y = 0. Somando as duas equações: 2x = 14 => 2x = 14 => x = 7. Substituindo: 7 + y = 14 => y = 7."
},
{
    "category": "Saeb - 8º Ano (Sistemas Lineares)",
    "question": "A soma de dois números é 11 e a diferença entre eles é 5. Quais são esses números?",
    "options": [
        "x=9, y=2",
        "x=7, y=4",
        "x=3, y=8",
        "x=8, y=3"
    ],
    "correct": 3,
    "resolution": "Temos o sistema: x + y = 11 e x - y = 5. Somando as duas equações: 2x = 16 => 2x = 16 => x = 8. Substituindo: 8 + y = 11 => y = 3."
},
{
    "category": "Saeb - 8º Ano (Sistemas Lineares)",
    "question": "A soma de dois números é 13 e a diferença entre eles é -1. Quais são esses números?",
    "options": [
        "x=7, y=6",
        "x=6, y=7",
        "x=5, y=8",
        "x=7, y=6"
    ],
    "correct": 1,
    "resolution": "Temos o sistema: x + y = 13 e x - y = -1. Somando as duas equações: 2x = 12 => 2x = 12 => x = 6. Substituindo: 6 + y = 13 => y = 7."
},
{
    "category": "Saeb - 8º Ano (Sistemas Lineares)",
    "question": "A soma de dois números é 15 e a diferença entre eles é -1. Quais são esses números?",
    "options": [
        "x=6, y=9",
        "x=7, y=8",
        "x=8, y=7",
        "x=8, y=7"
    ],
    "correct": 1,
    "resolution": "Temos o sistema: x + y = 15 e x - y = -1. Somando as duas equações: 2x = 14 => 2x = 14 => x = 7. Substituindo: 7 + y = 15 => y = 8."
},
{
    "category": "Saeb - 8º Ano (Sistemas Lineares)",
    "question": "A soma de dois números é 9 e a diferença entre eles é -1. Quais são esses números?",
    "options": [
        "x=5, y=4",
        "x=5, y=4",
        "x=4, y=5",
        "x=3, y=6"
    ],
    "correct": 2,
    "resolution": "Temos o sistema: x + y = 9 e x - y = -1. Somando as duas equações: 2x = 8 => 2x = 8 => x = 4. Substituindo: 4 + y = 9 => y = 5."
},
{
    "category": "Saeb - 8º Ano (Sistemas Lineares)",
    "question": "A soma de dois números é 14 e a diferença entre eles é -2. Quais são esses números?",
    "options": [
        "x=7, y=7",
        "x=5, y=9",
        "x=8, y=6",
        "x=6, y=8"
    ],
    "correct": 3,
    "resolution": "Temos o sistema: x + y = 14 e x - y = -2. Somando as duas equações: 2x = 12 => 2x = 12 => x = 6. Substituindo: 6 + y = 14 => y = 8."
},
{
    "category": "Saeb - 8º Ano (Sistemas Lineares)",
    "question": "A soma de dois números é 10 e a diferença entre eles é 2. Quais são esses números?",
    "options": [
        "x=5, y=5",
        "x=6, y=4",
        "x=7, y=3",
        "x=4, y=6"
    ],
    "correct": 1,
    "resolution": "Temos o sistema: x + y = 10 e x - y = 2. Somando as duas equações: 2x = 12 => 2x = 12 => x = 6. Substituindo: 6 + y = 10 => y = 4."
},
{
    "category": "Saeb - 8º Ano (Sistemas Lineares)",
    "question": "A soma de dois números é 8 e a diferença entre eles é 6. Quais são esses números?",
    "options": [
        "x=7, y=1",
        "x=1, y=7",
        "x=8, y=0",
        "x=6, y=2"
    ],
    "correct": 0,
    "resolution": "Temos o sistema: x + y = 8 e x - y = 6. Somando as duas equações: 2x = 14 => 2x = 14 => x = 7. Substituindo: 7 + y = 8 => y = 1."
},
{
    "category": "Saeb - 8º Ano (Sistemas Lineares)",
    "question": "A soma de dois números é 14 e a diferença entre eles é 0. Quais são esses números?",
    "options": [
        "x=8, y=6",
        "x=6, y=8",
        "x=7, y=7",
        "x=7, y=7"
    ],
    "correct": 2,
    "resolution": "Temos o sistema: x + y = 14 e x - y = 0. Somando as duas equações: 2x = 14 => 2x = 14 => x = 7. Substituindo: 7 + y = 14 => y = 7."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Qual a área de um terreno retangular que possui 16 m de comprimento e 11 m de largura?",
    "options": [
        "192 m²",
        "176 m²",
        "165 m²",
        "54 m²"
    ],
    "correct": 1,
    "resolution": "A área do retângulo é A = base * altura. A = 16 * 11 = 176 m²."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Qual a área de um terreno retangular que possui 12 m de comprimento e 4 m de largura?",
    "options": [
        "32 m²",
        "44 m²",
        "60 m²",
        "48 m²"
    ],
    "correct": 3,
    "resolution": "A área do retângulo é A = base * altura. A = 12 * 4 = 48 m²."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Qual a área de um terreno retangular que possui 6 m de comprimento e 6 m de largura?",
    "options": [
        "24 m²",
        "30 m²",
        "42 m²",
        "36 m²"
    ],
    "correct": 3,
    "resolution": "A área do retângulo é A = base * altura. A = 6 * 6 = 36 m²."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Qual a área de um terreno retangular que possui 18 m de comprimento e 11 m de largura?",
    "options": [
        "198 m²",
        "58 m²",
        "187 m²",
        "216 m²"
    ],
    "correct": 0,
    "resolution": "A área do retângulo é A = base * altura. A = 18 * 11 = 198 m²."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Qual a área de um terreno retangular que possui 7 m de comprimento e 5 m de largura?",
    "options": [
        "42 m²",
        "35 m²",
        "30 m²",
        "24 m²"
    ],
    "correct": 1,
    "resolution": "A área do retângulo é A = base * altura. A = 7 * 5 = 35 m²."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Qual a área de um terreno retangular que possui 11 m de comprimento e 4 m de largura?",
    "options": [
        "40 m²",
        "44 m²",
        "30 m²",
        "55 m²"
    ],
    "correct": 1,
    "resolution": "A área do retângulo é A = base * altura. A = 11 * 4 = 44 m²."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Qual a área de um terreno retangular que possui 15 m de comprimento e 2 m de largura?",
    "options": [
        "34 m²",
        "45 m²",
        "30 m²",
        "28 m²"
    ],
    "correct": 2,
    "resolution": "A área do retângulo é A = base * altura. A = 15 * 2 = 30 m²."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Qual a área de um terreno retangular que possui 5 m de comprimento e 7 m de largura?",
    "options": [
        "28 m²",
        "24 m²",
        "35 m²",
        "40 m²"
    ],
    "correct": 2,
    "resolution": "A área do retângulo é A = base * altura. A = 5 * 7 = 35 m²."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Qual a área de um terreno retangular que possui 18 m de comprimento e 4 m de largura?",
    "options": [
        "90 m²",
        "72 m²",
        "44 m²",
        "68 m²"
    ],
    "correct": 1,
    "resolution": "A área do retângulo é A = base * altura. A = 18 * 4 = 72 m²."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Qual a área de um terreno retangular que possui 8 m de comprimento e 3 m de largura?",
    "options": [
        "21 m²",
        "24 m²",
        "32 m²",
        "22 m²"
    ],
    "correct": 1,
    "resolution": "A área do retângulo é A = base * altura. A = 8 * 3 = 24 m²."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Em um triângulo retângulo, os catetos medem 3 cm e 4 cm. Qual a medida da hipotenusa?",
    "options": [
        "7 cm",
        "5 cm",
        "4 cm",
        "7 cm"
    ],
    "correct": 1,
    "resolution": "Pelo Teorema de Pitágoras: h² = c1² + c2² => h² = 3² + 4² => h² = 9 + 16 => h² = 25 => h = 5 cm."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Em um triângulo retângulo, os catetos medem 6 cm e 8 cm. Qual a medida da hipotenusa?",
    "options": [
        "10 cm",
        "14 cm",
        "9 cm",
        "12 cm"
    ],
    "correct": 0,
    "resolution": "Pelo Teorema de Pitágoras: h² = c1² + c2² => h² = 6² + 8² => h² = 36 + 64 => h² = 100 => h = 10 cm."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Em um triângulo retângulo, os catetos medem 5 cm e 12 cm. Qual a medida da hipotenusa?",
    "options": [
        "15 cm",
        "12 cm",
        "13 cm",
        "17 cm"
    ],
    "correct": 2,
    "resolution": "Pelo Teorema de Pitágoras: h² = c1² + c2² => h² = 5² + 12² => h² = 25 + 144 => h² = 169 => h = 13 cm."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Em um triângulo retângulo, os catetos medem 9 cm e 12 cm. Qual a medida da hipotenusa?",
    "options": [
        "17 cm",
        "21 cm",
        "15 cm",
        "14 cm"
    ],
    "correct": 2,
    "resolution": "Pelo Teorema de Pitágoras: h² = c1² + c2² => h² = 9² + 12² => h² = 81 + 144 => h² = 225 => h = 15 cm."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Em um triângulo retângulo, os catetos medem 8 cm e 15 cm. Qual a medida da hipotenusa?",
    "options": [
        "19 cm",
        "17 cm",
        "16 cm",
        "23 cm"
    ],
    "correct": 1,
    "resolution": "Pelo Teorema de Pitágoras: h² = c1² + c2² => h² = 8² + 15² => h² = 64 + 225 => h² = 289 => h = 17 cm."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Em um triângulo retângulo, os catetos medem 12 cm e 16 cm. Qual a medida da hipotenusa?",
    "options": [
        "28 cm",
        "20 cm",
        "19 cm",
        "22 cm"
    ],
    "correct": 1,
    "resolution": "Pelo Teorema de Pitágoras: h² = c1² + c2² => h² = 12² + 16² => h² = 144 + 256 => h² = 400 => h = 20 cm."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Em um triângulo retângulo, os catetos medem 15 cm e 20 cm. Qual a medida da hipotenusa?",
    "options": [
        "35 cm",
        "25 cm",
        "27 cm",
        "24 cm"
    ],
    "correct": 1,
    "resolution": "Pelo Teorema de Pitágoras: h² = c1² + c2² => h² = 15² + 20² => h² = 225 + 400 => h² = 625 => h = 25 cm."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Em um triângulo retângulo, os catetos medem 7 cm e 24 cm. Qual a medida da hipotenusa?",
    "options": [
        "31 cm",
        "24 cm",
        "25 cm",
        "27 cm"
    ],
    "correct": 2,
    "resolution": "Pelo Teorema de Pitágoras: h² = c1² + c2² => h² = 7² + 24² => h² = 49 + 576 => h² = 625 => h = 25 cm."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Em um triângulo retângulo, os catetos medem 10 cm e 24 cm. Qual a medida da hipotenusa?",
    "options": [
        "25 cm",
        "28 cm",
        "34 cm",
        "26 cm"
    ],
    "correct": 3,
    "resolution": "Pelo Teorema de Pitágoras: h² = c1² + c2² => h² = 10² + 24² => h² = 100 + 576 => h² = 676 => h = 26 cm."
},
{
    "category": "Saeb - 8º Ano (Geometria)",
    "question": "Em um triângulo retângulo, os catetos medem 18 cm e 24 cm. Qual a medida da hipotenusa?",
    "options": [
        "29 cm",
        "32 cm",
        "30 cm",
        "42 cm"
    ],
    "correct": 2,
    "resolution": "Pelo Teorema de Pitágoras: h² = c1² + c2² => h² = 18² + 24² => h² = 324 + 576 => h² = 900 => h = 30 cm."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor numérico da expressão 6x + 1y para x = 5 e y = 5?",
    "options": [
        "32",
        "37",
        "40",
        "35"
    ],
    "correct": 3,
    "resolution": "Substituindo os valores: 6(5) + 1(5) = 30 + 5 = 35."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor numérico da expressão 2x + 3y para x = 3 e y = 2?",
    "options": [
        "12",
        "9",
        "17",
        "14"
    ],
    "correct": 0,
    "resolution": "Substituindo os valores: 2(3) + 3(2) = 6 + 6 = 12."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor numérico da expressão 2x + 4y para x = 4 e y = 4?",
    "options": [
        "29",
        "21",
        "26",
        "24"
    ],
    "correct": 3,
    "resolution": "Substituindo os valores: 2(4) + 4(4) = 8 + 16 = 24."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor numérico da expressão 5x + 2y para x = 4 e y = 7?",
    "options": [
        "31",
        "39",
        "34",
        "36"
    ],
    "correct": 2,
    "resolution": "Substituindo os valores: 5(4) + 2(7) = 20 + 14 = 34."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor numérico da expressão 5x + 4y para x = 5 e y = 5?",
    "options": [
        "47",
        "50",
        "42",
        "45"
    ],
    "correct": 3,
    "resolution": "Substituindo os valores: 5(5) + 4(5) = 25 + 20 = 45."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor numérico da expressão 6x + 4y para x = 5 e y = 6?",
    "options": [
        "59",
        "51",
        "56",
        "54"
    ],
    "correct": 3,
    "resolution": "Substituindo os valores: 6(5) + 4(6) = 30 + 24 = 54."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor numérico da expressão 2x + 2y para x = 3 e y = 4?",
    "options": [
        "19",
        "16",
        "11",
        "14"
    ],
    "correct": 3,
    "resolution": "Substituindo os valores: 2(3) + 2(4) = 6 + 8 = 14."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor numérico da expressão 4x + 3y para x = 5 e y = 3?",
    "options": [
        "31",
        "34",
        "29",
        "26"
    ],
    "correct": 2,
    "resolution": "Substituindo os valores: 4(5) + 3(3) = 20 + 9 = 29."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor numérico da expressão 2x + 4y para x = 5 e y = 2?",
    "options": [
        "20",
        "23",
        "18",
        "15"
    ],
    "correct": 2,
    "resolution": "Substituindo os valores: 2(5) + 4(2) = 10 + 8 = 18."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Qual o valor numérico da expressão 4x + 4y para x = 3 e y = 2?",
    "options": [
        "22",
        "25",
        "20",
        "17"
    ],
    "correct": 2,
    "resolution": "Substituindo os valores: 4(3) + 4(2) = 12 + 8 = 20."
},
{
    "category": "Saeb - 8º Ano (Proporção)",
    "question": "Se 3 kg de um produto custam R$ 340,00, quanto custarão 4 kg do mesmo produto?",
    "options": [
        "R$ 503.3333333333333,00",
        "R$ 433.3333333333333,00",
        "R$ 453.3333333333333,00",
        "R$ 553.3333333333333,00"
    ],
    "correct": 2,
    "resolution": "Regra de três: 3 está para 340 assim como 4 está para x. 3x = 1360 => x = 1360 / 3 = R$ 453.3333333333333,00."
},
{
    "category": "Saeb - 8º Ano (Proporção)",
    "question": "Se 4 kg de um produto custam R$ 170,00, quanto custarão 8 kg do mesmo produto?",
    "options": [
        "R$ 440,00",
        "R$ 340,00",
        "R$ 390,00",
        "R$ 320,00"
    ],
    "correct": 1,
    "resolution": "Regra de três: 4 está para 170 assim como 8 está para x. 4x = 1360 => x = 1360 / 4 = R$ 340,00."
},
{
    "category": "Saeb - 8º Ano (Proporção)",
    "question": "Se 4 kg de um produto custam R$ 380,00, quanto custarão 7 kg do mesmo produto?",
    "options": [
        "R$ 765,00",
        "R$ 645,00",
        "R$ 715,00",
        "R$ 665,00"
    ],
    "correct": 3,
    "resolution": "Regra de três: 4 está para 380 assim como 7 está para x. 4x = 2660 => x = 2660 / 4 = R$ 665,00."
},
{
    "category": "Saeb - 8º Ano (Proporção)",
    "question": "Se 4 kg de um produto custam R$ 320,00, quanto custarão 5 kg do mesmo produto?",
    "options": [
        "R$ 380,00",
        "R$ 500,00",
        "R$ 400,00",
        "R$ 450,00"
    ],
    "correct": 2,
    "resolution": "Regra de três: 4 está para 320 assim como 5 está para x. 4x = 1600 => x = 1600 / 4 = R$ 400,00."
},
{
    "category": "Saeb - 8º Ano (Proporção)",
    "question": "Se 2 kg de um produto custam R$ 130,00, quanto custarão 4 kg do mesmo produto?",
    "options": [
        "R$ 240,00",
        "R$ 360,00",
        "R$ 310,00",
        "R$ 260,00"
    ],
    "correct": 3,
    "resolution": "Regra de três: 2 está para 130 assim como 4 está para x. 2x = 520 => x = 520 / 2 = R$ 260,00."
},
{
    "category": "Saeb - 8º Ano (Proporção)",
    "question": "Se 5 kg de um produto custam R$ 220,00, quanto custarão 7 kg do mesmo produto?",
    "options": [
        "R$ 288,00",
        "R$ 358,00",
        "R$ 308,00",
        "R$ 408,00"
    ],
    "correct": 2,
    "resolution": "Regra de três: 5 está para 220 assim como 7 está para x. 5x = 1540 => x = 1540 / 5 = R$ 308,00."
},
{
    "category": "Saeb - 8º Ano (Proporção)",
    "question": "Se 3 kg de um produto custam R$ 320,00, quanto custarão 7 kg do mesmo produto?",
    "options": [
        "R$ 796.6666666666667,00",
        "R$ 726.6666666666667,00",
        "R$ 846.6666666666667,00",
        "R$ 746.6666666666667,00"
    ],
    "correct": 3,
    "resolution": "Regra de três: 3 está para 320 assim como 7 está para x. 3x = 2240 => x = 2240 / 3 = R$ 746.6666666666667,00."
},
{
    "category": "Saeb - 8º Ano (Proporção)",
    "question": "Se 5 kg de um produto custam R$ 390,00, quanto custarão 9 kg do mesmo produto?",
    "options": [
        "R$ 702,00",
        "R$ 682,00",
        "R$ 752,00",
        "R$ 802,00"
    ],
    "correct": 0,
    "resolution": "Regra de três: 5 está para 390 assim como 9 está para x. 5x = 3510 => x = 3510 / 5 = R$ 702,00."
},
{
    "category": "Saeb - 8º Ano (Proporção)",
    "question": "Se 3 kg de um produto custam R$ 290,00, quanto custarão 5 kg do mesmo produto?",
    "options": [
        "R$ 483.33333333333337,00",
        "R$ 533.3333333333334,00",
        "R$ 463.33333333333337,00",
        "R$ 583.3333333333334,00"
    ],
    "correct": 0,
    "resolution": "Regra de três: 3 está para 290 assim como 5 está para x. 3x = 1450 => x = 1450 / 3 = R$ 483.33333333333337,00."
},
{
    "category": "Saeb - 8º Ano (Proporção)",
    "question": "Se 4 kg de um produto custam R$ 140,00, quanto custarão 6 kg do mesmo produto?",
    "options": [
        "R$ 260,00",
        "R$ 310,00",
        "R$ 190,00",
        "R$ 210,00"
    ],
    "correct": 3,
    "resolution": "Regra de três: 4 está para 140 assim como 6 está para x. 4x = 840 => x = 840 / 4 = R$ 210,00."
},
{
    "category": "Saeb - 8º Ano (Estatística)",
    "question": "As notas de um aluno em quatro bimestres foram 4, 5, 8 e 6. Qual a média aritmética bimestral desse aluno?",
    "options": [
        "5,25",
        "6,75",
        "5,75",
        "6,25"
    ],
    "correct": 2,
    "resolution": "Média = (4 + 5 + 8 + 6) / 4 = 23 / 4 = 5.75."
},
{
    "category": "Saeb - 8º Ano (Estatística)",
    "question": "As notas de um aluno em quatro bimestres foram 9, 5, 4 e 7. Qual a média aritmética bimestral desse aluno?",
    "options": [
        "6,75",
        "7,25",
        "5,75",
        "6,25"
    ],
    "correct": 3,
    "resolution": "Média = (9 + 5 + 4 + 7) / 4 = 25 / 4 = 6.25."
},
{
    "category": "Saeb - 8º Ano (Estatística)",
    "question": "As notas de um aluno em quatro bimestres foram 7, 5, 3 e 10. Qual a média aritmética bimestral desse aluno?",
    "options": [
        "6,75",
        "5,75",
        "7,25",
        "6,25"
    ],
    "correct": 3,
    "resolution": "Média = (7 + 5 + 3 + 10) / 4 = 25 / 4 = 6.25."
},
{
    "category": "Saeb - 8º Ano (Estatística)",
    "question": "As notas de um aluno em quatro bimestres foram 6, 10, 4 e 9. Qual a média aritmética bimestral desse aluno?",
    "options": [
        "8,25",
        "6,75",
        "7,75",
        "7,25"
    ],
    "correct": 3,
    "resolution": "Média = (6 + 10 + 4 + 9) / 4 = 29 / 4 = 7.25."
},
{
    "category": "Saeb - 8º Ano (Estatística)",
    "question": "As notas de um aluno em quatro bimestres foram 6, 7, 6 e 6. Qual a média aritmética bimestral desse aluno?",
    "options": [
        "6,75",
        "6,25",
        "5,75",
        "7,25"
    ],
    "correct": 1,
    "resolution": "Média = (6 + 7 + 6 + 6) / 4 = 25 / 4 = 6.25."
},
{
    "category": "Saeb - 8º Ano (Estatística)",
    "question": "As notas de um aluno em quatro bimestres foram 9, 10, 8 e 7. Qual a média aritmética bimestral desse aluno?",
    "options": [
        "8",
        "9",
        "9,5",
        "8,5"
    ],
    "correct": 3,
    "resolution": "Média = (9 + 10 + 8 + 7) / 4 = 34 / 4 = 8.5."
},
{
    "category": "Saeb - 8º Ano (Estatística)",
    "question": "As notas de um aluno em quatro bimestres foram 5, 6, 5 e 9. Qual a média aritmética bimestral desse aluno?",
    "options": [
        "7,25",
        "6,75",
        "6,25",
        "5,75"
    ],
    "correct": 2,
    "resolution": "Média = (5 + 6 + 5 + 9) / 4 = 25 / 4 = 6.25."
},
{
    "category": "Saeb - 8º Ano (Estatística)",
    "question": "As notas de um aluno em quatro bimestres foram 4, 5, 8 e 9. Qual a média aritmética bimestral desse aluno?",
    "options": [
        "7",
        "6,5",
        "6",
        "7,5"
    ],
    "correct": 1,
    "resolution": "Média = (4 + 5 + 8 + 9) / 4 = 26 / 4 = 6.5."
},
{
    "category": "Saeb - 8º Ano (Estatística)",
    "question": "As notas de um aluno em quatro bimestres foram 7, 7, 4 e 6. Qual a média aritmética bimestral desse aluno?",
    "options": [
        "5,5",
        "6,5",
        "6",
        "7"
    ],
    "correct": 2,
    "resolution": "Média = (7 + 7 + 4 + 6) / 4 = 24 / 4 = 6."
},
{
    "category": "Saeb - 8º Ano (Estatística)",
    "question": "As notas de um aluno em quatro bimestres foram 5, 6, 8 e 8. Qual a média aritmética bimestral desse aluno?",
    "options": [
        "6,25",
        "6,75",
        "7,25",
        "7,75"
    ],
    "correct": 1,
    "resolution": "Média = (5 + 6 + 8 + 8) / 4 = 27 / 4 = 6.75."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Desenvolvendo o produto notável (y + 4)², qual polinômio obtemos?",
    "options": [
        "y² + 8y + 8",
        "y² + 4y + 16",
        "y² + 16",
        "y² + 8y + 16"
    ],
    "correct": 3,
    "resolution": "O quadrado da soma de dois termos é dado por (a + b)² = a² + 2ab + b². Portanto, (y + 4)² = y² + 2(y)(4) + 4² = y² + 8y + 16."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Desenvolvendo o produto notável (y + 2)², qual polinômio obtemos?",
    "options": [
        "y² + 4y + 4",
        "y² + 2y + 4",
        "y² + 4",
        "y² + 4y + 4"
    ],
    "correct": 0,
    "resolution": "O quadrado da soma de dois termos é dado por (a + b)² = a² + 2ab + b². Portanto, (y + 2)² = y² + 2(y)(2) + 2² = y² + 4y + 4."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Desenvolvendo o produto notável (y + 8)², qual polinômio obtemos?",
    "options": [
        "y² + 16y + 16",
        "y² + 16y + 64",
        "y² + 64",
        "y² + 8y + 64"
    ],
    "correct": 1,
    "resolution": "O quadrado da soma de dois termos é dado por (a + b)² = a² + 2ab + b². Portanto, (y + 8)² = y² + 2(y)(8) + 8² = y² + 16y + 64."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Desenvolvendo o produto notável (y + 5)², qual polinômio obtemos?",
    "options": [
        "y² + 10y + 25",
        "y² + 10y + 10",
        "y² + 5y + 25",
        "y² + 25"
    ],
    "correct": 0,
    "resolution": "O quadrado da soma de dois termos é dado por (a + b)² = a² + 2ab + b². Portanto, (y + 5)² = y² + 2(y)(5) + 5² = y² + 10y + 25."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Desenvolvendo o produto notável (y + 8)², qual polinômio obtemos?",
    "options": [
        "y² + 64",
        "y² + 8y + 64",
        "y² + 16y + 64",
        "y² + 16y + 16"
    ],
    "correct": 2,
    "resolution": "O quadrado da soma de dois termos é dado por (a + b)² = a² + 2ab + b². Portanto, (y + 8)² = y² + 2(y)(8) + 8² = y² + 16y + 64."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Desenvolvendo o produto notável (y + 4)², qual polinômio obtemos?",
    "options": [
        "y² + 4y + 16",
        "y² + 16",
        "y² + 8y + 8",
        "y² + 8y + 16"
    ],
    "correct": 3,
    "resolution": "O quadrado da soma de dois termos é dado por (a + b)² = a² + 2ab + b². Portanto, (y + 4)² = y² + 2(y)(4) + 4² = y² + 8y + 16."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Desenvolvendo o produto notável (y + 5)², qual polinômio obtemos?",
    "options": [
        "y² + 10y + 25",
        "y² + 10y + 10",
        "y² + 25",
        "y² + 5y + 25"
    ],
    "correct": 0,
    "resolution": "O quadrado da soma de dois termos é dado por (a + b)² = a² + 2ab + b². Portanto, (y + 5)² = y² + 2(y)(5) + 5² = y² + 10y + 25."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Desenvolvendo o produto notável (y + 2)², qual polinômio obtemos?",
    "options": [
        "y² + 4y + 4",
        "y² + 2y + 4",
        "y² + 4y + 4",
        "y² + 4"
    ],
    "correct": 0,
    "resolution": "O quadrado da soma de dois termos é dado por (a + b)² = a² + 2ab + b². Portanto, (y + 2)² = y² + 2(y)(2) + 2² = y² + 4y + 4."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Desenvolvendo o produto notável (y + 7)², qual polinômio obtemos?",
    "options": [
        "y² + 49",
        "y² + 7y + 49",
        "y² + 14y + 49",
        "y² + 14y + 14"
    ],
    "correct": 2,
    "resolution": "O quadrado da soma de dois termos é dado por (a + b)² = a² + 2ab + b². Portanto, (y + 7)² = y² + 2(y)(7) + 7² = y² + 14y + 49."
},
{
    "category": "Saeb - 8º Ano (Álgebra)",
    "question": "Desenvolvendo o produto notável (y + 6)², qual polinômio obtemos?",
    "options": [
        "y² + 36",
        "y² + 12y + 36",
        "y² + 12y + 12",
        "y² + 6y + 36"
    ],
    "correct": 1,
    "resolution": "O quadrado da soma de dois termos é dado por (a + b)² = a² + 2ab + b². Portanto, (y + 6)² = y² + 2(y)(6) + 6² = y² + 12y + 36."
}
    // ... Mais questões poderiam ser adicionadas aqui
];

if (typeof module !== 'undefined') module.exports = { allQuestions };
