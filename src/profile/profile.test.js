import getProfile from './profile'

describe('Happy Path', () => {
    test('getProfile deve ser uma função', () => {
        expect(getProfile).toBeInstanceOf(Function)
    })

    test(`getProfile('C') retorne contendo um perfil com linguagem igual a 'C' `, () => {
        const actual = getProfile('C')
        const expected = 
        [
            {
                linguagem : 'C',
                experiencia : 'Menos de 1 ano',
                modeloTrabalho : 'Presencial',
                titulo : 'Back-End'
            }
        ]

        expect(actual).toEqual(expect.arrayContaining(expected))
    })

    test(`getProfile('Java') retorne contendo um perfil com linguagem igual a 'Java' `, () => {
        const actual = getProfile('Java')
        console.log('>>>>>>>>>> ', actual)
        const expected = 
        [
            {
                linguagem : 'Java',
                experiencia : '1 ano à 3 anos',
                modeloTrabalho : 'Remoto',
                titulo : 'Back-End'
            }
        ]

        expect(actual).toEqual(expect.arrayContaining(expected))
    })
})
