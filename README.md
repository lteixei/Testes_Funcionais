# 🧪 Projeto de Automação de Testes

Este repositório contém a automação de testes desenvolvida por Leonardo da Motta Teixeira, com foco em alta cobertura, manutenibilidade e integração contínua. A automação abrange testes Funcionais, Web, APIs e Performance.

---

## 👤 Sobre Mim

Profissional dinâmica, com perfil de liderança e foco em resultados. Tenho facilidade em motivar equipes para superar desafios complexos, mantendo a performance mesmo sob alta demanda ou pressão. Minha experiência inclui:

- Excelente relacionamento interpessoal e foco no cliente, atuando como ponte entre áreas técnicas e de negócio para garantir entregas alinhadas às expectativas.
- Coordenação de equipes de desenvolvimento, suporte e QA, promovendo colaboração entre times para acelerar a resolução de problemas e garantir qualidade desde as etapas iniciais do ciclo de vida do software.
- Implementação de frameworks de testes automatizados (como Selenium, Cypress, ou ferramentas baseadas em CI/CD), promovendo cobertura eficiente de testes e reduzindo retrabalho em produção.
- Criação e monitoramento de pipelines automatizados de testes integrados e regressivos, contribuindo diretamente para a melhoria contínua e ganho de produtividade dos times.
- Visão estratégica voltada à entrega de valor e ROI, com foco em qualidade contínua, análise de risco e priorização de testes críticos para o negócio.
Experiência em metodologias ágeis (Scrum, Kanban), garantindo ciclos curtos de feedback, testes frequentes e melhoria constante dos processos de QA.

### 🧠 Conhecimentos Técnicos

- **Gestão Ágil**: Scrum, Kanban, Gestão de Projetos, Microsoft Project
- **Ferramentas de Teste**: Cypress, Selenium, Playwright, Appium, Robot Framework, Tosca, Postman, JMeter, Katalon, Newman, ALM/UFT
- **API & Backend**: Postman, API REST, JSON, XML
- **Automação & CI/CD**: Jenkins, Docker, GitHub Actions, GitLab CI, Bitbucket Pipelines
- **Outras Habilidades**: Trello, Azure DevOps, Jira, Bizagi, Linux, Redes, HTML5, CSS3, Bootstrap, JavaScript, Visual Basic (básico), Java (básico), Magento, Joomla, Webstandards, Acessibilidade

---

## 🚀 Tecnologias Utilizadas

### 📌 Linguagens e Plataformas
![Python](https://img.shields.io/badge/Python-3.13-blue?logo=python)
![Java](https://img.shields.io/badge/Java-21-007396?logo=java&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20.11.1-339933?logo=nodedotjs)

---

### 🧪 Frameworks e Ferramentas de Testes
![Selenium](https://img.shields.io/badge/Selenium-4.10.0-green)
![Pytest](https://img.shields.io/badge/Pytest-7.4.0-orange)
![Robot Framework](https://img.shields.io/badge/Robot_Framework-6.0.1-red?logo=robot-framework)
![Playwright](https://img.shields.io/badge/Playwright-1.44.0-ff69b4?logo=playwright)
![Cypress](https://img.shields.io/badge/Cypress-12.17.4-17202C?logo=cypress)
![Appium](https://img.shields.io/badge/Appium-2.5.1-663399?logo=appium)
![TestNG](https://img.shields.io/badge/TestNG-7.10.1-FF6F00?logo=testng)
![Jest](https://img.shields.io/badge/Jest-29.6.4-C21325?logo=jest)
![Mocha](https://img.shields.io/badge/Mocha-10.3.0-8D6748?logo=mocha)
![Tosca](https://img.shields.io/badge/Tosca-2023.2-2D2D72?logo=tricentis)

---

### 📊 Relatórios e Métricas
![Allure](https://img.shields.io/badge/Allure_Report-2.27.0-1E1E2E?logo=allure)

---

### 💬 Ferramentas BDD
![Cucumber](https://img.shields.io/badge/Cucumber-12.2.0-23D96C?logo=cucumber)
![Behave](https://img.shields.io/badge/Behave-1.2.6-9ACD32?logo=python)

---

### ⚡ Testes de Performance
![JMeter](https://img.shields.io/badge/JMeter-5.6.3-D22128?logo=apache)
![k6](https://img.shields.io/badge/k6-0.49.0-7D64FF?logo=k6)

---

### ⚙️ Integração Contínua e DevOps
![Git](https://img.shields.io/badge/Git-F05032?logo=git)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github)
![GitLab CI](https://img.shields.io/badge/GitLab_CI-16.8.0-FC6D26?logo=gitlab)
![Bitbucket Pipelines](https://img.shields.io/badge/Bitbucket_Pipelines-7.0-0052CC?logo=bitbucket)
![Jenkins](https://img.shields.io/badge/Jenkins-2.452.1-D24939?logo=jenkins)
![Docker](https://img.shields.io/badge/Docker-24.0.7-2496ED?logo=docker)

---

### ☁️ Plataformas de Testes em Nuvem
![BrowserStack](https://img.shields.io/badge/BrowserStack-Automation-FF9900?logo=browserstack)
![Sauce Labs](https://img.shields.io/badge/Sauce_Labs-Cloud_Testing-E2231A?logo=saucelabs)

---

## 📁 Estrutura do Projeto


---

## 🛠️ Como Executar

### 🔹 Robot Framework
robot -d reports/ tests/

---

### 🔹 Cypress
npx cypress open

---

### 🔹 Selenium
mvn test

---

### 🔹 Selenium + Pytest
pytest -v --html=reports/report.html

---

### 🔹 Playwright  
npx playwright test

---

### 🔹 Appium  
appium --log-level info

---

### 🔹 JMeter (linha de comando)  
jmeter -n -t tests/test_plan.jmx -l results/results.jtl -e -o reports/

---

### 🔹 Newman (Postman CLI)  
newman run collection.json -r html --reporter-html-export reports/report.html

---

### 🔹 Tosca  
Execução gerenciada via Tosca Commander ou Tosca CI/CD Integration

---

## 🧾 Relatórios

Após a execução, os relatórios são gerados automaticamente na pasta /reports. Exemplos:

report.html (Pytest, Newman)

allure-report/ (Allure)

results.jtl (JMeter)

output.xml (Robot Framework)

---

## 👩‍💻 Contato
Informações	
Nome	[Seu Nome Completo]
Cargo	QA Engineer / SDET / Líder Técnico
LinkedIn	www.linkedin.com/in/leonardo-da-motta-teixeira-3584734b

E-mail	seu.email@exemplo.com

---

## 📝 Licença

Este projeto está licenciado sob a MIT License
.




























## 🛠️ Automação Funcional Web

![Node.js](https://img.shields.io/badge/Node.js-20.4.0-green?logo=node.js)
![Cucumber](https://img.shields.io/badge/Cucumber-9.1.0-brightgreen)
![Allure](https://img.shields.io/badge/Allure-2.15.0-red)
![License](https://img.shields.io/badge/License-MIT-green)

> Estrutura completa de automação funcional de testes web, com validação de elementos, steps reutilizáveis e relatórios avançados.

---

## 📂 Estrutura do Projeto

AutomacaoFuncional/  
│  
├─ features/  
│ └─ homepage.feature        # Cenários de teste da página inicial  
│ └─ login.feature           # Cenários de teste de login  
│  
├─ src/  
│ ├─ steps/                  # Implementação dos steps do Cucumber  
│ │ └─ homepageSteps.js  
│ │ └─ loginSteps.js  
│ └─ support/                # Configurações e hooks  
│   └─ hooks.js  
│  
├─ reports/                  # Relatórios gerados pelo Allure  
├─ package.json              # Dependências e scripts do projeto  
└─ README.md  

---

## 🚀 Tecnologias Utilizadas

- **Node.js 20.4.0** – runtime JavaScript;  
- **Cucumber.js** – BDD e testes descritivos;  
- **Playwright / Selenium WebDriver** – automação de navegador;  
- **Allure Reports** – relatórios profissionais;  
- **VSCode / WebStorm** – IDEs recomendadas;  
- **Git** – controle de versão.

---

## 🧪 Como Executar os Testes

1. Instale as dependências:  
npm install

---

## 📊 Relatórios (Allure)

Se o projeto estiver configurado com Allure, é possível gerar relatórios gráficos detalhados:

allure generate ./allure-results --clean -o ./allure-report
allure open ./allure-report

---

## 🤝 Boas práticas para contribuições:  
📌 Escreva código limpo, legível e documentado.  
📌 Teste suas mudanças antes de enviar o Pull Request.  
📌 Mantenha a consistência com o estilo e padrões do projeto.  
📌 Discuta melhorias ou dúvidas antes de implementar grandes mudanças.

---

## 📄 Licença
Este projeto está licenciado sob a MIT License.
