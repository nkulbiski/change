const DENOMINATIONS = [
    {
        value: 1000,
        name: 'ten dollar bill'
    },
    {
        value: 500,
        name: 'five dollar bill'
    },
    {
        value: 100,
        name: 'one dollar bill'
    },
    {
        value: 25,
        name: 'quater'
    },
    {
        value: 10,
        name: 'dime'
    },
    {
        value: 5,
        name: 'nickel'
    },
    {
        value: 1,
        name: 'penny'
    }
]

export const makeChange = (amount) => {
    amount = amount * 100

    let amountLeft = amount

    let change = []

    for (const type in DENOMINATIONS) {
        let value = DENOMINATIONS[type].value
        let name = DENOMINATIONS[type].name
        let number = Math.floor(amountLeft / value)

        if (number > 1) {
            name = plural(name)
        }

        if (number > 0) {
            change.push(`${number} ${name}`)
            amountLeft = amountLeft - (number * value)
        }
    }

    return change.join(', ')
}

const plural = (name) => {
    if (name.endsWith('y')) {
        return name.slice(0, -1) + 'ies'
    }
    return `${name}s`
}
