let words = ["근", "육", "김", "혁", "명", "수", "월", "눈", "물", "의", "요", "정", "탈", "모", "탄", "조", " ", "아", "뚜", "임", "렛", "강", "력", "한", "빈", "약", "시", "빌", "미", "터", "김", "븅", "ㅅ", "촉", "촉", "이", "나", "여", "캐"];

function produce() {
    let name = [];

    name.push(words[Math.floor(Math.random() * words.length)]);
    name.push(words[Math.floor(Math.random() * words.length)]);
    name.push(words[Math.floor(Math.random() * words.length)]);

    var print_name = name.join();

    alert(print_name.replace(/,/g, ""));
}
