/*
Todo List 만들기 프로젝트 개요
루프를 먼저 만든다 (while)
값을 입력하라고 메시지가 나와야 함
사용자가 뭘 입력하든 quit이 아닌이상 계속 루프해야 함
(다른 것들을 만들기 전 quit을 먼저 만들기)
할 일 목록을 실제로 저장하는 일은 배열을 사용
*/

/*
구체적인 프로세스
1) 변수 이름을 할 일 또는 할일 목록같은 걸로 지정한다
2) new를 입력하면 새로 추가하라는 메시지가 나오게 한다
3) 입력 값을 가져다가 추가 ex) "강아지 산책 시키기"
4) list를 입력하면 모든 할 일 목록에서 반복이 되고 그 결과가 출력된다
5) 삭제를 위해 인덱스가 표시되도록 한다
*/

let input = prompt('what would you like to do?')
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// 임의로 몇개의 할일을 일단 적어놓는다.

// quit 이나 q를 입력하면 종료되도록 설정할때 or 이 아닌 and(&&)가 사용된다
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        // 인덱스 숫자도 앞에 표기하기 위해서 for...of는 사용불가. for를 사용 
        console.log('***********')
    } else if (input === 'new') {
        const newTodo = prompt('OK, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
        // 할일 배열에 추가하는 방법으로 push 사용
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete: '));
        // console.log(index);
        // 삭제할 할일의 인덱스를 입력하게 한다
        // 만약 숫자가 아닌 문자열을 입력하면? - 숫자로 변환하려고 하기 때문에 디폴트값인 0이 된다.
        // 따라서 문자열을 바꾸는 단계를 추가한다 - parseInt
        if (!Number.isNaN(index)) {
            // 입력한 index가 숫자인지 아닌지 판별하고 숫자인경우에 진행되도록 한다.
            const deleted = todos.splice(index, 1)
            // 실제 삭제를 위해 splice를 사용한다
            // splice를 하면 잘려진 배열의 인덱스가 배열로 ([0]) 반환되기 때문에 그 숫자를 deleted 변수로 저장한다
            console.log(`Ok, deleted ${deleted[0]}`)
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('OK YOU QUIT')