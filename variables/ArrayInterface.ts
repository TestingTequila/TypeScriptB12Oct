interface StudentNames{
    [index: number]: string;
}

var studentNames: StudentNames = ["John", "Kerrie", "Lee"];


interface StudentScore{
    [index:string]: number;
}

var studentScore : StudentScore = {};
studentScore["John"] = 100;
studentScore["Bob"] = 90;

for(var item in studentScore)
{
    console.log(item +": "+studentScore[item]);
}