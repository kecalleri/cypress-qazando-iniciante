/// <reference types="cypress" />

import { should } from "chai"

export default {
    clicarCadastrar() {
        cy.get('#btnRegister')
            .click()
    },

    // validarMensagemErro() {
    //     cy.get('.errorLabel')
    //         .then((element) => {
    //             expect(element).to.be.visible
    //             expect(element.text()).eq('O campo nome deve ser prenchido')  
    //         })
    // },

    validarMensagemErro(mensagem) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', mensagem)  
    },
    
    preencherNome(name) {
        cy.get('#user')
            .type(name)
    },

    preencherEmail(email) {
        cy.get('#email')
            .type(email)
    },

    preencherSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    validarMensagemSucesso(nome) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${nome}`)

    }

}





