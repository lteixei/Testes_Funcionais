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
