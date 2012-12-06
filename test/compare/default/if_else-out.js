if (true) {
    doStuff()
}

if (foo || bar) {
    if (bar === 'bar'){
        //nested
        log('nested if');
    } else {
        log('nested else')
    }
} else if (baz == null) {
    log('elseif');
} else {
    // something
    log('else');
}
