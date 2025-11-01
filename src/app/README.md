# App Layer

O **App Layer** é a camada mais alta da arquitetura FSD, responsável por assuntos globais da aplicação, tanto técnicos quanto de negócio.

## Responsabilidades

- **Providers**: Configuração de context providers globais (estado, tema, autenticação)
- **Router**: Configuração das rotas principais da aplicação
- **Store**: Configuração do store global
- **Styles**: Estilos globais da aplicação
- **Entrypoint**: Ponto de entrada da aplicação, específico do framework
- **Error Boundaries**: Tratamento de erros a nível de aplicação
- **Analytics**: Configurações de analytics e métricas globais

## Segmentos Típicos

```bash
app/
├── routes/             # Configuração do roteador
├── store/              # Configuração do store global
├── styles/             # Estilos globais
├── entrypoint/         # Ponto de entrada da aplicação
└── providers/          # Context providers globais
```

## Características

- **Não contém slices**, apenas segmentos diretamente
- **Segmentos podem importar entre si livremente**
- **Pode** importar de todas as camadas inferiores quando necessário
- Combina todos os domínios de negócio da aplicação
- Ponto de entrada e configuração global da aplicação
