function init(value) {
    const elem = document.createElement('div');
    elem.innerText = value;

    document.body.appendChild(elem);
}




async function gitCommand() {
    const args = [
        '-C',
        'D:/_dev/_git/Playground/tauri-bug',
        'diff',
        '--no-ext-diff',
        '--patch-with-raw',
        '--no-color',
        '--no-index',
        '--',
        '/dev/null',
        'test.md'
    ]
    const cmd = new __TAURI__.shell.Command('git', args);
    // cmd.execute();
    const result = await cmd.execute();
    console.log(result);
    init(result.stdout)
}

gitCommand();
