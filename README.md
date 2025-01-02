# Wordify

Wordify é um SaaS MVP que permite a conversão de imagens contendo texto em texto editável. Este texto pode ser salvo no banco de dados para edição posterior, além de oferecer funcionalidades de impressão e exportação para PDF. Futuramente, o sistema será expandido para permitir a exportação direta de arquivos PDF.

## Funcionalidades

- **Conversão de Imagem em Texto**: Processamento de imagens contendo texto utilizando OCR (Optical Character Recognition).
- **Edição de Texto**: Permite editar o texto extraído diretamente na interface.
- **Gerenciamento de Dados**: Salva textos no banco de dados com possibilidade de edição futura.
- **Exportação e Impressão**: Exporta textos editados para PDF e permite impressão.

## Tecnologias Utilizadas

- **Backend**: Next.js.
- **Frontend**: Next.js.
- **UI/UX**: Tailwind CSS (com a biblioteca de componentes shadcn/ui).
- **OCR**: Tesseract OCR.
- **Autenticação**: Auth.js.
- **ORM**: Prisma.
- **Banco de Dados**: PostgreSQL.
- **Versionamento**: Git e GitHub.
- **Deploy**: Coolify.
- **Infraestrutura**: OCI para escalabilidade.

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/beliciobcardoso/mvp-wordify.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd mvp-wordify
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente:
   Crie um arquivo `.env` com as seguintes variáveis:
   ```env
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/wordify
   SECRET_KEY=sua-chave-secreta
   ```
5. Execute a aplicação:
   ```bash
   npm run dev
   ```

## Roadmap

- [x] Conversão de imagem em texto.
- [x] Salvamento e edição de texto no banco de dados.
- [x] Exportação para PDF.
- [ ] Expansão para exportação direta de arquivos PDF.

## Documentação

A documentação completa do projeto pode ser encontrada em [docs/README.md](docs/README.md).

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](docs/LICENSE.md) para mais informações.

## Contato

Para dúvidas ou sugestões, entre em contato:
- **Nome:** Belicio Cardoso
- **Email:** belicio.cardoso@exemplo.com
