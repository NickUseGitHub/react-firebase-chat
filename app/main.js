function buildFF(msg1) {
    return msg2 => console.log(`${msg1} what ${msg2}`) 
}

const testFF = buildFF("nick")
testFF("naja")