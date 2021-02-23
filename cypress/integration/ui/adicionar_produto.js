/// <reference types="cypress" />

context('Escolher um produto e adicionar ao carrinho', ()=>{

    it('Selecionar um Iphone X e colocar no carrinho', ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })//esse comando é para ignorar o timeout que estava ocorrendo no site das casas bahia
        cy.visit('/iphone-xr-128-gb/b?p=iphone-xr-128-gb&ranking=1&typeclick=1&ac_pos=header', { headers : { "Accept-Encoding" : "gzip, deflate" } })//adicionei o headers na chamada para evitar um timeout que estava ocorrendo no navegador do cypress
        cy.get('#strBusca').type('iphone xr 128 gb')
        cy.get('[term="iphone xr 128 gb"] > .ac-term-match').click({force:true})
        cy.get(':nth-child(1) > .ProductCard__ProductContainer-sc-2vuvzo-2 > a > .ProductCard__CardMedia-sc-2vuvzo-5 > .LazyLoadImg__Wrapper-sc-1vnijxj-2 > .LazyLoadImg__Image-sc-1vnijxj-0').click()
        cy.contains('comprar').click()
        cy.contains('continuar').click()
        cy.contains('iPhone XR Apple 128GB PRODUCT(RED), Tela de 6.1”, Câmera de 12MP, iOS')
    })
})