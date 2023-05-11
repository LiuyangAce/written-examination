var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope(); // local scope

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()(); //  local scope



// 这两个函数结果相同 但是内部执行不同

// 1.
push(globalContext)
push(fun checkscope())
push(fun f())
pop
pop


// 2. 
[]

push(globalContext)
push(fun checkscope())
pop(fun checkscope)
push(fun f())
pop(fun f())
