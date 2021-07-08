function init(value) {
    const elem = document.createElement('div');
    elem.innerText = value;

    document.body.appendChild(elem);
}




async function gitCommand() {
    const args = [
        'show',
        '1614bd361305d7ba08da119ea9d3240fc9c4cad2',
        '--no-color'
    ]
    const cmd = new __TAURI__.shell.Command('git', args);
    // cmd.execute();
    const result = await cmd.execute();
    console.log(result.stdout);
    init(result.stdout)
}

gitCommand();
