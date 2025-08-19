##⚡ AutomacaoFuncional

Automação de testes funcionais usando Cucumber.js, Selenium WebDriver e Node.js. Este projeto tem como objetivo validar funcionalidades críticas de aplicações web de forma estruturada e escalável.

---

##📝 Tecnologias

🟢 Node.js

🌐 Selenium WebDriver

🎯 Cucumber.js (BDD)

🖥 Chromedriver / FirefoxDriver

💾 JavaScript (ES6)

---

##🚀 Estrutura do Projeto
AutomacaoFuncional/  
│  
├─ features/                # Arquivos .feature (cenários de testes)  
│   └─ homepage.feature  
│  
├─ src/  
│   └─ steps/               # Definições dos steps (Given/When/Then)  
│       └─ homepageSteps.js  
│  
├─ package.json             # Gerenciador de dependências  
└─ README.md  

---

##🧪 Execução dos Testes

###Instale as dependências:

npm install


###Execute os testes:

npx cucumber-js ./features --require ./src/steps/**/*.js

---

##Resultado esperado:

✅ Todos os cenários passam

❌ Cenários com falha são exibidos no terminal com detalhes

🌟 Funcionalidades Automatizadas

📄 Acesso à página inicial

🔍 Validação de elementos e textos na página

🖱 Navegação entre seções

🧩 Testes escaláveis e modulares

---

##📊 Relatórios (Allure)

Se o projeto estiver configurado com Allure, é possível gerar relatórios gráficos detalhados:

allure generate ./allure-results --clean -o ./allure-report
allure open ./allure-report
