/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {
    
    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    })
    it('Campo Nome vazio', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo E-mail vazio', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo E-mail inválido', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.person.lastName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo Senha vazio', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo Senha inválido', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.preencherSenha('123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async () => {
        const name = await faker.person.fullName()

        cadastro_page.preencherNome(name)
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.preencherSenha(123456)
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(name)
        })

})