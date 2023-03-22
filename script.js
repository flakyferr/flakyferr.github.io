function changeTitle(string){
    document.title = string;
    return "ok!";
}
setInterval(changeTitle, 1000, "Hi!")