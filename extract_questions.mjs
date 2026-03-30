import fs from 'fs';

const htmlPath = 'C:\\Users\\SEEMG\\Documents\\MARCOS\\passa ou repassa questões saeb\\INDEX.HTML';
const outputPath = 'C:\\Users\\SEEMG\\Documents\\MARCOS\\Passa ou repassa Catarina\\questions.js';

try {
    const content = fs.readFileSync(htmlPath, 'utf-8');
    
    // Capturar o conteúdo da variável allQuestions
    const match = content.match(/const allQuestions = (\[[\s\S]*?\]);/);
    
    if (match) {
        let questionsJson = match[1];
        
        // Limpar comentários e ajustes de sintaxe se necessário
        // (No caso do arquivo original, ele parece ser um objeto JS válido)
        
        const outputContent = `const allQuestions = ${questionsJson};\n\nif (typeof module !== 'undefined') module.exports = { allQuestions };`;
        
        fs.writeFileSync(outputPath, outputContent, 'utf-8');
        console.log("Sucesso! Todas as questões foram extraídas para questions.js");
    } else {
        console.error("Não foi possível encontrar a variável allQuestions no arquivo original.");
    }
} catch (err) {
    console.error("Erro ao ler/escrever arquivo:", err.message);
}
