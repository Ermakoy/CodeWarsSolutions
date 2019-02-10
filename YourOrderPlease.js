const order = words =>
    words.split(' ')
        .sort((a, b) => {
            const aNum = getNumber(a), bNum = getNumber(b)
            if (aNum < bNum)
                return -1;
            else if (aNum > bNum)
                return 1
            else
                return 0
        }).join(' ')

const getNumber = str => +str.match(/\d+/)[0]